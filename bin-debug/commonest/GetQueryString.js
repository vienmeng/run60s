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
 * Created by zhangqiong on 2017/11/1.
 */
var GetQueryString = (function (_super) {
    __extends(GetQueryString, _super);
    function GetQueryString(name) {
        var _this = _super.call(this) || this;
        _this.getQuery(name);
        return _this;
    }
    GetQueryString.prototype.getQuery = function (name) {
        this.reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var _r = window.location.search.substr(1).match(this.reg);
        if (_r != null) {
            this.QueryString = decodeURIComponent(_r[2]);
        }
        else {
            this.QueryString = null;
        }
        return this.QueryString;
    };
    return GetQueryString;
}(egret.DisplayObject));
