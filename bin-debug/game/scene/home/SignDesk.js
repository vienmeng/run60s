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
 * 签到窗口
 * Created by zhangqiong on 2017/11/1.
 */
var SignDesk = (function (_super) {
    __extends(SignDesk, _super);
    function SignDesk() {
        var _this = _super.call(this) || this;
        _this.stageW = 0;
        _this.stageH = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    SignDesk.prototype.onAddToStage = function (event) {
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;
        this.bg = new CreateBitmap("bg_mask");
        this.addChild(this.bg);
        this.bg.width = this.stageW;
        this.bg.height = this.stageH;
        this.drawSomething();
    };
    SignDesk.prototype.drawSomething = function () {
        this.contBox = new egret.Sprite();
        this.contBox.graphics.lineStyle(2, 0xff0000, 1);
        this.contBox.graphics.beginFill(0xff0000, 0.1);
        this.contBox.graphics.drawRoundRect(135, 30, 870, 570, 10, 10);
        this.addChild(this.contBox);
        this.hideBtn = new egret.Shape();
        this.hideBtn.graphics.lineStyle(2, 0xff0000, 1);
        this.hideBtn.graphics.beginFill(0xff0000, 0.1);
        this.hideBtn.graphics.drawCircle(995, 45, 35);
        this.contBox.addChild(this.hideBtn);
        this.hideBtn.touchEnabled = true;
    };
    return SignDesk;
}(egret.Sprite));
