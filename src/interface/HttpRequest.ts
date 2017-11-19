/**
 * 用户登陆接口
 * Created by zhangqiong on 2017/11/1.
 */
class HttpRequest extends egret.DisplayObject{

    public constructor(url:string, data:string, type:string)
    {
        super();
        this.onHttpRequest(url, data, type);
    }
    private _interFace:string = "";
    private userData:any = null;
    public onHttpRequest(url:string, data:string, type:string):void
    {
        this._interFace = url;
        let params:string = data;
        let request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;

        request.addEventListener(egret.Event.COMPLETE, this.onRequestComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onRequestError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onRequestProgress, this);

        if (type == egret.HttpMethod.POST)
        {
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }
        request.open(Config.USER_SERVER_URL + this._interFace, type);
        request.send(params);
    }

    private onRequestComplete(event:egret.Event):void
    {
        let request = <egret.HttpRequest>event.currentTarget;
        let req = JSON.parse(request.response);
        console.log("==========ssss===============");
        console.log(Config.CURRENT_URL);
        console.log(req);
        console.log("===========eeee==============");

        if (req.success)
        {
            switch (Config.CURRENT_URL)
            {
                //获取登陆信息
                case Config.USER_PARITY:
                    Config.USER_MOBILE = req.result.mobile;
                    Config.USER_CODE = req.result.code;
                    this.onUserLogin();
                    break;

                //登陆
                case Config.USER_LOGIN:
                    Config.USER_COIN = req.result.coin;
                    Config.USER_GOLD = req.result.gold;
                    this.onUserInfo();
                    break;

                //获取用户信息
                case Config.USER_INFO:
                    this.createUserInfo(req);
                    break;

                //注册
                case Config.USER_REGISTER:

                    break;

                //是否开启比赛
                case Config.SCREENING_INFO:
                    Config.SCREENING_INFO_DATA = req.result;
                    Config.ISNULL_INFO_DATA = false;
                    break;
            }

        }else{
            alert(req.msg);
        }

    }

    //登陆
    private onUserLogin():void
    {
        let params = "code=" + Config.USER_CODE + "&mobile=" + Config.USER_MOBILE + "&remember=是";
        Config.CURRENT_URL = Config.USER_LOGIN;
        this.onHttpRequest(Config.CURRENT_URL, params, egret.HttpMethod.POST);
    }

    //获取信息
    private onUserInfo():void
    {
        Config.CURRENT_URL = Config.USER_INFO;
        this.onHttpRequest(Config.CURRENT_URL, "", egret.HttpMethod.GET);
    }

    private onRequestError(event:egret.IOErrorEvent):void
    {
        console.log("error : " + event);
    }

    private onRequestProgress(event:egret.ProgressEvent):void
    {
        console.log("progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
    }

    public callBalck()
    {
        return this.userData;
    }

    private createUserInfo(req:any):void
    {
        Config.USER_NAME = "六个字的名字";
        Config.USER_IMG_URL = req.result.headimgurl;
        Config.USER_RICH_RANKING = 55;
        Config.IS_REQUEST = true;
    }
}