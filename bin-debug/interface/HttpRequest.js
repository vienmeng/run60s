var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 用户登陆接口
 * Created by zhangqiong on 2017/11/1.
 */
var HttpRequest = (function (_super) {
    __extends(HttpRequest, _super);
    function HttpRequest(url, data, type) {
        var _this = _super.call(this) || this;
        _this._interFace = "";
        _this.userData = null;
        _this.onHttpRequest(url, data, type);
        return _this;
    }
    HttpRequest.prototype.onHttpRequest = function (url, data, type) {
        this._interFace = url;
        var params = data;
        console.log(type);
        console.log(params);
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.addEventListener(egret.Event.COMPLETE, this.onRequestComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onRequestError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onRequestProgress, this);
        if (type == egret.HttpMethod.POST) {
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }
        request.open(Config.USER_SERVER_URL + this._interFace, type);
        request.send(params);
    };
    HttpRequest.prototype.onRequestComplete = function (event) {
        var request = event.currentTarget;
        var req = JSON.parse(request.response);
        console.log(req);
        console.log(Config.CURRENT_URL);
        var params = "";
        //检查是否登陆
        if (Config.CURRENT_URL == Config.USER_CHECK_LOGIN) {
            if (req.success) {
                console.log("已登陆");
                //已登陆，则获取用户信息（该接口还未弄好  暂时用虚拟数据）
                // Config.USER_IDS = req.result.id.
                this.createUserInfo();
            }
            else {
                console.log("未登陆");
                //未登录，则先尝试登陆
                params = "uid=" + Config.USER_UID + "&openid=" + Config.OPENID + "&remember=是";
                Config.CURRENT_URL = Config.USER_LOGIN;
                this.onHttpRequest(Config.CURRENT_URL, params, egret.HttpMethod.POST);
            }
        }
        //用户登陆返回
        if (Config.CURRENT_URL == Config.USER_LOGIN) {
            if (req.success) {
                //登陆成功，则获取用户信息（该接口还未弄好  暂时用虚拟数据）
                this.createUserInfo();
            }
            else {
                // 登陆失败，切是位置open ID，则现注册
                if (req.error_code == -1) {
                    params = "uid=" + Config.USER_UID + "&openid=" + Config.OPENID;
                    Config.CURRENT_URL = Config.USER_REGISTER;
                    this.onHttpRequest(Config.CURRENT_URL, params, egret.HttpMethod.POST);
                }
            }
        }
        //新用户注册返回
        if (Config.CURRENT_URL == Config.USER_REGISTER) {
            if (req.success) {
                //注册成功，则开始登陆
                params = "uid=" + Config.USER_UID + "&openid=" + Config.OPENID + "&remember=是";
                Config.CURRENT_URL = Config.USER_LOGIN;
                this.onHttpRequest(Config.CURRENT_URL, params, egret.HttpMethod.POST);
            }
            else {
                //注册失败，弹出错误提示
                alert(req.msg);
            }
        }
        //比赛是否开始
        if (Config.CURRENT_URL == Config.SCREENING_INFO) {
            if (req.success) {
                Config.SCREENING_INFO_DATA = req.result;
                Config.ISNULL_INFO_DATA = false;
            }
            else {
                alert(req.msg);
            }
        }
        // this.createUserInfo();
    };
    HttpRequest.prototype.onRequestError = function (event) {
        console.log("error : " + event);
        this.createUserInfo();
    };
    HttpRequest.prototype.onRequestProgress = function (event) {
        console.log("progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    HttpRequest.prototype.callBalck = function () {
        return this.userData;
    };
    HttpRequest.prototype.createUserInfo = function () {
        Config.IS_REQUEST = true;
        Config.USER_CREDIT = 1000;
        Config.USER_NAME = "测试名字";
        Config.USER_IMG_URL = "http://";
        Config.USER_RICH_RANKING = 55;
    };
    return HttpRequest;
}(egret.DisplayObject));
