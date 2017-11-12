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
 * Created by mcz on 2017/10/24.
 */
var CreateText = (function (_super) {
    __extends(CreateText, _super);
    function CreateText(txt, color, algin, size, alpha, x, y) {
        var _this = _super.call(this) || this;
        _this.showTxt(txt, color, algin, size, alpha, x, y);
        return _this;
    }
    CreateText.prototype.showTxt = function (txt, color, algin, size, alpha, x, y) {
        this.textColor = color;
        this.textAlign = algin;
        this.text = txt;
        this.size = size;
        this.alpha = alpha;
        this.x = x;
        this.y = y;
        return this;
    };
    return CreateText;
}(egret.TextField));
