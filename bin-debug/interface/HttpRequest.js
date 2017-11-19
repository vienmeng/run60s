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
        console.log("==========ssss===============");
        console.log(Config.CURRENT_URL);
        console.log(req);
        console.log("===========eeee==============");
        if (req.success) {
            switch (Config.CURRENT_URL) {
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
        }
        else {
            alert(req.msg);
        }
    };
    //登陆
    HttpRequest.prototype.onUserLogin = function () {
        var params = "code=" + Config.USER_CODE + "&mobile=" + Config.USER_MOBILE + "&remember=是";
        Config.CURRENT_URL = Config.USER_LOGIN;
        this.onHttpRequest(Config.CURRENT_URL, params, egret.HttpMethod.POST);
    };
    //获取信息
    HttpRequest.prototype.onUserInfo = function () {
        Config.CURRENT_URL = Config.USER_INFO;
        this.onHttpRequest(Config.CURRENT_URL, "", egret.HttpMethod.GET);
    };
    HttpRequest.prototype.onRequestError = function (event) {
        console.log("error : " + event);
    };
    HttpRequest.prototype.onRequestProgress = function (event) {
        console.log("progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    HttpRequest.prototype.callBalck = function () {
        return this.userData;
    };
    HttpRequest.prototype.createUserInfo = function (req) {
        Config.USER_NAME = "六个字的名字";
        Config.USER_IMG_URL = req.result.headimgurl;
        Config.USER_RICH_RANKING = 55;
        Config.IS_REQUEST = true;
    };
    return HttpRequest;
}(egret.DisplayObject));
