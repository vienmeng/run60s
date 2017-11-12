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
var Shape = egret.Shape;
/**
 * 设置窗口
 * Created by zhangqiong on 2017/11/1.
 */
var Setting = (function (_super) {
    __extends(Setting, _super);
    function Setting() {
        var _this = _super.call(this) || this;
        _this.stageW = 0;
        _this.stageH = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Setting.prototype.onAddToStage = function (event) {
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;
        this.bg = new CreateBitmap("bg_mask");
        this.addChild(this.bg);
        this.bg.width = this.stageW;
        this.bg.height = this.stageH;
        this.drawSomething();
    };
    Setting.prototype.drawSomething = function () {
        var _x = (this.stageW - 580) * 0.5;
        var _y = (this.stageH - 335) * 0.5;
        var _w = 580;
        var _h = 335;
        this.contBox = new egret.Sprite();
        this.contBox.graphics.lineStyle(2, 0xff0000, 1);
        this.contBox.graphics.beginFill(0xff0000, 0.1);
        this.contBox.graphics.drawRoundRect(_x, _y, _w, _h, 10, 10);
        this.addChild(this.contBox);
        //关闭按钮
        this.hideBtn = new egret.Shape();
        this.hideBtn.graphics.lineStyle(2, 0xff0000, 1);
        this.hideBtn.graphics.beginFill(0xff0000, 0.1);
        this.hideBtn.graphics.drawCircle(845, 145, 35);
        this.contBox.addChild(this.hideBtn);
        this.hideBtn.touchEnabled = true;
        //声音开关
        this.bgMusicTXT = new CreateText("音乐：", 0x00ff00, "left", 40, 1, ((_x + _w) - 150) * 0.5 + 80, ((_y + _h) - 50) * 0.5 + 25);
        this.contBox.addChild(this.bgMusicTXT);
        this.bgMusic = new egret.Shape();
        this.bgMusic.graphics.lineStyle(2, 0xff0000, 1);
        this.bgMusic.graphics.beginFill(0xff0000, 0.1);
        this.bgMusic.graphics.drawRoundRect(((_x + _w) - 150) * 0.5 + 200, ((_y + _h) - 50) * 0.5 + 20, 150, 50, 50, 50);
        this.contBox.addChild(this.bgMusic);
        //音效开关
        this.bgSoundTXT = new CreateText("音效：", 0x00ff00, "left", 40, 1, ((_x + _w) - 150) * 0.5 + 80, ((_y + _h) - 50) * 0.5 + 105);
        this.contBox.addChild(this.bgSoundTXT);
        this.bgSound = new egret.Shape();
        this.bgSound.graphics.lineStyle(2, 0xff0000, 1);
        this.bgSound.graphics.beginFill(0xff0000, 0.1);
        this.bgSound.graphics.drawRoundRect(((_x + _w) - 150) * 0.5 + 200, ((_y + _h) - 50) * 0.5 + 100, 150, 50, 50, 50);
        this.contBox.addChild(this.bgSound);
    };
    return Setting;
}(egret.Sprite));
