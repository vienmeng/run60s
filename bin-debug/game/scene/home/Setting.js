/**
 * 设置窗口
 * Created by zhangqiong on 2017/11/1.
 */
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
var Setting = (function (_super) {
    __extends(Setting, _super);
    function Setting() {
        var _this = _super.call(this) || this;
        _this.stageW = 0;
        _this.stageH = 0;
        _this.skinName = "resource/assets/skins/SettingSkin.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Setting.prototype.onAddToStage = function (event) {
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;
        this.drawSomething();
    };
    Setting.prototype.drawSomething = function () {
        var _x = (this.stageW - 580) * 0.5;
        var _y = (this.stageH - 335) * 0.5;
        var _w = 580;
        var _h = 335;
        this.contBox = new egret.Sprite();
        this.addChild(this.contBox);
        //关闭按钮
        this.hideBtn = this.close_btn;
        this.hideBtn.touchEnabled = true;
        //声音开关
        this.bgMusic_btn = this.Bg_Music_btn;
        //音效开关
        this.bgSound_btn = this.Bg_Sound_btn;
    };
    return Setting;
}(eui.Component));
