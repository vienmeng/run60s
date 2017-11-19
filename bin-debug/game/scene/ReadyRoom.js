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
        _this.betCount = 0;
        _this.isStartGame = false; //是否开始比赛
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    ReadyRoom.prototype.onAddToStage = function (event) {
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;
        this.bg = new CreateBitmap("bg_mask");
        this.addChild(this.bg);
        this.bg.width = this.stageW;
        this.bg.height = this.stageH;
        this.contBox = new egret.Sprite();
        this.addChild(this.contBox);
        this.contBox.width = this.stageW;
        this.contBox.height = this.stageH;
        this.drawSomething();
        this.drawBetBox();
        this.isGetGameStart();
        // this.isCountDown();
        this.isAddEventListener();
    };
    ReadyRoom.prototype.drawBetBox = function () {
        this.betBox = new egret.Sprite();
        this.betBox.graphics.lineStyle(1, 0xff0000, 1);
        this.betBox.graphics.beginFill(0xff0000, 0.2);
        this.betBox.graphics.drawRoundRect(100, 50, this.stageW - 200, this.stageH - 100, 10, 10);
        this.closeBetBox = new egret.Shape();
        this.closeBetBox.graphics.lineStyle(1, 0xff0000, 1);
        this.closeBetBox.graphics.beginFill(0xff0000, 0.2);
        this.closeBetBox.graphics.drawCircle(this.stageW - 100, 60, 50);
        this.betBox.addChild(this.closeBetBox);
        this.closeBetBox.touchEnabled = true;
        this.addBet_btn = new egret.Shape();
        this.addBet_btn.graphics.lineStyle(1, 0xff0000, 1);
        this.addBet_btn.graphics.beginFill(0xff0000, 0.1);
        this.addBet_btn.graphics.drawRoundRect(150, 450, 120, 50, 10, 10);
        this.betBox.addChild(this.addBet_btn);
        this.addBet_btn.touchEnabled = true;
        this.addBet_txt = new CreateText("+100", 0x00ff00, egret.HorizontalAlign.CENTER, 26, 1, 175, 460);
        this.betBox.addChild(this.addBet_txt);
        this.subBet_btn = new egret.Shape();
        this.subBet_btn.graphics.lineStyle(1, 0xff0000, 1);
        this.subBet_btn.graphics.beginFill(0xff0000, 0.1);
        this.subBet_btn.graphics.drawRoundRect(300, 450, 120, 50, 10, 10);
        this.betBox.addChild(this.subBet_btn);
        this.subBet_btn.touchEnabled = true;
        this.subBet_txt = new CreateText("-100", 0x00ff00, egret.HorizontalAlign.CENTER, 26, 1, 325, 460);
        this.betBox.addChild(this.subBet_txt);
        this.closeBetBox.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isHeidBetBox, this);
        this.addBet_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addBetGold, this);
        this.subBet_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.subBetGold, this);
    };
    ReadyRoom.prototype.drawSomething = function () {
        //返回按钮
        this.backHome = new egret.Shape();
        this.backHome.graphics.lineStyle(1, 0xff0000, 1);
        this.backHome.graphics.beginFill(0xff0000, 0.1);
        this.backHome.graphics.drawCircle(this.stageW - 100, 60, 50);
        this.addChild(this.backHome);
        this.backHome.touchEnabled = true;
        Config.HORSE_SCENE = false;
        this.HorsesMc = new Horses();
        this.addChild(this.HorsesMc);
        this.countDownStr = "投注时间";
        this.countDown = new CreateText(this.countDownStr + this.timerVal.toString(), 0x00ff00, "left", 26, 1, 50, 50);
        this.addChild(this.countDown);
        this.countDown.type = egret.TextFieldType.DYNAMIC;
    };
    ReadyRoom.prototype.isCountDown = function () {
        console.log("===this.timerVal=== " + this.timerVal);
        if (this.timerVal <= 0) {
            this.isGetGameStart();
        }
        else {
            this.timer = new egret.Timer(1000, this.timerVal);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerStart, this);
            this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComplete, this);
            // this.timer.start();
        }
    };
    ReadyRoom.prototype.addBetGold = function (event) {
    };
    ReadyRoom.prototype.subBetGold = function (event) {
    };
    ReadyRoom.prototype.timerStart = function () {
        this.timerVal -= 1;
        this.countDown.text = this.countDownStr + this.timerVal.toString();
    };
    ReadyRoom.prototype.timerComplete = function () {
        this.timer.stop();
        this.timer.reset();
        if (this.betCount > 0) {
            this.isStartGame = true;
        }
        else {
            this.isStartGame = false;
            this.isGetGameStart();
        }
    };
    ReadyRoom.prototype.isGetGameStart = function () {
        var params = "?senior=" + Config.SENIOR_LOW;
        Config.CURRENT_URL = Config.SCREENING_INFO;
        var req = new HttpRequest(Config.CURRENT_URL + params + "&t=" + Date.now(), "", egret.HttpMethod.GET);
    };
    ReadyRoom.prototype.isAddEventListener = function () {
        var mcArr = this.contBox.$children;
        for (var i = 0; i < mcArr.length; i++) {
            mcArr[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.showBetBox, this);
        }
    };
    ReadyRoom.prototype.showBetBox = function (event) {
        console.log(event.currentTarget);
        this.currentMc = event.currentTarget;
        this.addChild(this.betBox);
        this.removeChild(this.contBox);
        this.backHome.visible = false;
        this.betCount += 100;
    };
    ReadyRoom.prototype.isHeidBetBox = function (event) {
        this.addChild(this.contBox);
        this.removeChild(this.betBox);
        this.backHome.visible = true;
    };
    return ReadyRoom;
}(egret.Sprite));
