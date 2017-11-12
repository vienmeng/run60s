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
        console.log(params);
        let request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;

        request.addEventListener(egret.Event.COMPLETE, this.onRequestComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onRequestError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onRequestProgress, this);

        request.open(Config.USER_SERVER_URL + this._interFace, type);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send(params);
    }

    private onRequestComplete(event:egret.Event):void
    {
        let request = <egret.HttpRequest>event.currentTarget;
        let req = JSON.parse(request.response);
        console.log(req);
        let params:string = "";

        //检查是否登陆
        if (this._interFace == Config.USER_CHECK_LOGIN)
        {
            if (req.success)
            {
                console.log("已登陆");
                //已登陆，则获取用户信息（该接口还未弄好  暂时用虚拟数据）
                // Config.USER_IDS = req.result.id.
                this.createUserInfo();

            }else {
                console.log("未登陆");
                //未登录，则先尝试登陆
                params = "uid=" + Config.USER_UID + "&openid=" + Config.OPENID + "&remember=是";
                this.onHttpRequest(Config.USER_LOGIN, params, egret.HttpMethod.POST);
            }

        }

        //用户登陆返回
        if(this._interFace == Config.USER_LOGIN)
        {
            if (req.success)
            {
                //登陆成功，则获取用户信息（该接口还未弄好  暂时用虚拟数据）
                this.createUserInfo();

            }else {
                // 登陆失败，切是位置open ID，则现注册
                if (req.error_code == -1)
                {
                    params = "uid=" + Config.USER_UID +"&openid=" + Config.OPENID;
                    this.onHttpRequest(Config.USER_REGISTER, params, egret.HttpMethod.POST)
                }
            }
        }

        //新用户注册返回
        if (this._interFace == Config.USER_REGISTER)
        {
            if (req.success)
            {
                //注册成功，则开始登陆
                params = "uid=" + Config.USER_UID + "&openid=" + Config.OPENID + "&remember=是";
                this.onHttpRequest(Config.USER_LOGIN, params, egret.HttpMethod.POST);
            }else {

                //注册失败，弹出错误提示
                alert(req.msg);
            }
        }
        // this.createUserInfo();
    }

    private onRequestError(event:egret.IOErrorEvent):void
    {
        console.log("error : " + event);
        this.createUserInfo();
    }

    private onRequestProgress(event:egret.ProgressEvent):void
    {
        console.log("progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
    }

    public callBalck()
    {
        return this.userData;
    }

    private createUserInfo():void
    {
        Config.IS_REQUEST = true;
        Config.USER_CREDIT = 1000;
        Config.USER_NAME = "测试名字";
        Config.USER_IMG_URL = "http://";
        Config.USER_RICH_RANKING = 55;
    }
}