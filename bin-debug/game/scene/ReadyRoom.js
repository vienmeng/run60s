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
var TextFieldType = egret.TextFieldType;
/**
 * 准备页，投注页面
 * Created by zhangqiong on 2017/11/1.
 */
var ReadyRoom = (function (_super) {
    __extends(ReadyRoom, _super);
    function ReadyRoom() {
        var _this = _super.call(this) || this;
        _this.stageW = 0;
        _this.stageH = 0;
        _this.timerVal = 60;
        _this.isStartGame = false; //是否开始比赛
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    ReadyRoom.prototype.onAddToStage = function (event) {
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;
        this.bg = new CreateBitmap("bg_mh.jpg");
        this.addChild(this.bg);
        this.bg.width = this.stageW;
        this.bg.height = this.stageH;
        this.drawSomething();
        this.isCountDown();
    };
    ReadyRoom.prototype.drawSomething = function () {
        //返回按钮
        this.backHome = new egret.Shape();
        this.backHome.graphics.lineStyle(1, 0xff0000, 1);
        this.backHome.graphics.beginFill(0xff0000, 0.1);
        this.backHome.graphics.drawCircle(this.stageW - 100, 60, 50);
        this.addChild(this.backHome);
        this.backHome.touchEnabled = true;
        //倒计时数字
        this.countDown = new CreateText("倒计时：" + this.timerVal.toString(), 0x00ff00, "left", 26, 1, 50, 50);
        this.addChild(this.countDown);
        this.countDown.type = egret.TextFieldType.DYNAMIC;
    };
    ReadyRoom.prototype.isCountDown = function () {
        this.timer = new egret.Timer(1000, 60);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerStart, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComplete, this);
        this.timer.start();
    };
    ReadyRoom.prototype.timerStart = function () {
        this.timerVal -= 1;
        this.countDown.text = "倒计时：" + this.timerVal.toString();
        console.log(this.timerVal);
    };
    ReadyRoom.prototype.timerComplete = function () {
        this.timer.stop();
        this.timer.reset();
    };
    return ReadyRoom;
}(egret.Sprite));
