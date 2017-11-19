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
 * 比赛场，比赛页面
 * Created by zhangqiong on 2017/11/1.
 */
var RaceCourse = (function (_super) {
    __extends(RaceCourse, _super);
    function RaceCourse() {
        var _this = _super.call(this) || this;
        _this.stageW = 0;
        _this.stageH = 0;
        _this.rangArr = [1, 2, 3, 4, 5, 6]; //测试数据本局排名，开始时打乱，正式版由后台提供
        _this.speedArr = [0, 0, 0, 0, 0, 0]; //对应每匹马的加速
        _this.speedCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; //抽取加速的马匹，长度12，每匹马加速两次
        _this.RunEndFlag = [false, false, false, false, false, false]; //判断每匹马是否到达终点
        _this._count = 63; //总计时的值
        _this._AllSpeedcount = 0; //加速次数，六匹马，每匹马两次，一共12次
        _this.gameRunStart = false; //是否开始跑
        _this.slowId = 0; //最后一名的id
        _this.endId = 0; //当前到达终点的那一匹马
        _this.sceneMove = false;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    /**
     * 添加到舞台
     * @param {egret.Event} event
     */
    RaceCourse.prototype.onAddToStage = function (event) {
        var _this = this;
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;
        this.rangArr.sort(this.randomSort);
        console.log("当局名次：", this.rangArr);
        this.contBox = new egret.Sprite();
        this.addChild(this.contBox);
        this.contBox.width = this.stageW;
        this.contBox.height = this.stageH;
        this.bg1 = new CreateBitmap("track1_png");
        this.contBox.addChild(this.bg1);
        this.bg1.width = this.stageW;
        this.bg1.height = this.stageH;
        for (var i = 0; i < 11; i++) {
            this.bg2 = new CreateBitmap("track2_png");
            this.contBox.addChild(this.bg2);
            this.bg2.width = this.stageW;
            this.bg2.height = this.stageH;
            this.bg2.x = this.bg1.width + this.bg1.width * i;
        }
        this.bg3 = new CreateBitmap("track3_png");
        this.contBox.addChild(this.bg3);
        this.bg3.width = this.stageW;
        this.bg3.height = this.stageH;
        this.bg3.x = this.bg3.width * 12;
        this.backReadyRoom = new egret.Shape();
        this.contBox.addChild(this.backReadyRoom);
        this.slowId = this.rangArr.indexOf(Math.max.apply(null, this.rangArr));
        console.log("最后一名是：", this.slowId);
        this.drawSomething();
        this.timeImg = new eui.Image();
        this.timeImg.source = RES.getRes("t" + (this._count - 60).toString() + "_png");
        this.contBox.addChild(this.timeImg);
        this.timeImg.x = (this.stageW - 120) * 0.5;
        this.timeImg.y = (this.stageH - 140) * 0.5;
        this.timeCount = new egret.Timer(1000, 63);
        this.timeCount.addEventListener(egret.TimerEvent.TIMER, this.timerStart, this);
        this.timeCount.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComolete, this);
        this.timeCount.start();
        this.speedTimer = new egret.Timer(1000, 2);
        this.speedTimer.addEventListener(egret.TimerEvent.TIMER, this.speedStart, this);
        this.speedTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.speedComolete, this);
        this._Interval = setInterval(function (e) { _this.speedTimer.start(); }, 4000);
    };
    /**
     * 总计时开始
     */
    RaceCourse.prototype.timerStart = function () {
        this._count -= 1;
        this.timeImg.source = RES.getRes("t" + (this._count - 60).toString() + "_png");
        console.log("比赛剩余时间：", this._count);
        if (this._count <= 60) {
            this.timeImg.visible = false;
            this.gameRunStart = true;
            for (var i = 0; i < this.horseArr.length; i++) {
                if (!this.RunEndFlag[i]) {
                    this.horseArr[i].gotoAndPlay("Run", -1);
                    this.horseArr[i].frameRate = 24;
                }
            }
        }
    };
    /**
     * 加速计时开始
     */
    RaceCourse.prototype.speedStart = function () {
        for (var i = 0; i < this.horseArr.length; i++) {
            if (!this.RunEndFlag[i]) {
                this.horseArr[i].frameRate = 24;
            }
            this.speedArr[i] = 0;
        }
        /*let _speed:Array<number> =[this.horseArr[0].x,this.horseArr[1].x,this.horseArr[2].x,this.horseArr[3].x,this.horseArr[4].x,this.horseArr[5].x];
        let _currNum = _speed.indexOf(Math.max.apply(null, _speed));
        this.fastHorse = this.horseArr[_currNum];*/
        console.log("ssss------------");
    };
    /**
     * 加速计时结束
     */
    RaceCourse.prototype.speedComolete = function () {
        this.speedTimer.stop();
        this.speedTimer.reset();
        if (this._AllSpeedcount < 12) {
            this.runFast();
        }
    };
    /**
     * 开始加上
     */
    RaceCourse.prototype.runFast = function () {
        var rans = 0;
        if (this.speedCount.length > 0) {
            rans = this.randomSpeed();
            console.log("抽取到的：" + rans);
            if (rans > 5) {
                this.speedArr[rans - 6] = 2;
                this.horseArr[rans - 6].frameRate = 48;
                this._AllSpeedcount += 1;
                console.log("加速的马匹ID：", rans - 6);
            }
            else {
                this.speedArr[rans] = 2;
                this.horseArr[rans].frameRate = 48;
                this._AllSpeedcount += 1;
                console.log("加速的马匹ID：", rans);
            }
        }
    };
    /**
     * 总时间结束
     */
    RaceCourse.prototype.timerComolete = function () {
        this.timeCount.stop();
        // this.timeCount.reset();
        this.speedTimer.stop();
        // this.speedTimer.reset();
        for (var i = 0; i < this.horseArr.length; i++) {
            this.horseArr[i].frameRate = 12;
            this.speedArr[i] = 0;
        }
        window.clearInterval(this._Interval);
    };
    RaceCourse.prototype.drawSomething = function () {
        Config.HORSE_SCENE = true;
        this.HorsesMc = new Horses();
        this.addChild(this.HorsesMc);
        this.horseArr = [this.HorsesMc.ciTuMc, this.HorsesMc.feiDianMc, this.HorsesMc.ziDianMc, this.HorsesMc.qingLongMc, this.HorsesMc.xingYueMc, this.HorsesMc.diLvMc];
        this.addEventListener(egret.Event.ENTER_FRAME, this.isRunIng, this);
    };
    /**
     * 开始赛马
     */
    RaceCourse.prototype.isRunIng = function (event) {
        if (this.gameRunStart) {
            for (var i = 0; i < this.horseArr.length; i++) {
                if (this.horseArr[i].x >= 13 * this.stageW - 200) {
                    this.horseArr[i].x = 13 * this.stageW - 200;
                    if (!this.RunEndFlag[i]) {
                        this.isGameWin(i);
                    }
                }
                else {
                    this.horseArr[i].x += 8 + 0.5 / this.rangArr[i] + this.speedArr[i];
                }
                if (this.horseArr[i].x >= this.stageW / 2 && !this.sceneMove) {
                    this.sceneMove = true;
                    this.fastHorse = this.horseArr[i]; //找出最快的马
                }
                if (this.contBox.x <= -(12 * this.stageW)) {
                    this.sceneMove = false;
                    this.contBox.x = -(12 * this.stageW);
                }
                else {
                    if (this.sceneMove) {
                        this.HorsesMc.x = this.stageW / 2 - this.fastHorse.x;
                        this.contBox.x = this.stageW / 2 - this.fastHorse.x;
                    }
                }
            }
            var _speed = [this.horseArr[0].x, this.horseArr[1].x, this.horseArr[2].x, this.horseArr[3].x, this.horseArr[4].x, this.horseArr[5].x];
            var _currNum = _speed.indexOf(Math.max.apply(null, _speed));
            this.fastHorse = this.horseArr[_currNum];
        }
    };
    /**
     * 每匹马到达终点时
     */
    RaceCourse.prototype.isGameWin = function (id) {
        var _this = this;
        console.log("---id--- ", id);
        this.endId = id;
        this.RunEndFlag[id] = true;
        this.horseArr[id].frameRate = 12;
        this.horseArr[id].gotoAndPlay("Win");
        setTimeout(function (e) { _this.horseArr[id].frameRate = 12; _this.horseArr[id].gotoAndPlay("Rest", -1); }, 1500);
        if (this.rangArr[id] == this.slowId) {
            this.allHorsesToEnding();
        }
    };
    /**
     * 全部马都到达终点，显示颁奖典礼
     */
    RaceCourse.prototype.allHorsesToEnding = function () {
        var prizeGiving;
    };
    /**
     * 随机打乱当前排名
     */
    RaceCourse.prototype.randomSort = function () {
        return Math.random() > .5 ? -1 : 1;
    };
    /**
     * 随机抽取加速的马匹
     */
    RaceCourse.prototype.randomSpeed = function () {
        /*let _n:number = 0;
        let _m:number = 11;
        let _c:number = _m - _n + 1;
        return Math.floor(Math.random() * _c + _n);*/
        console.log(this.speedCount);
        var index = 0;
        var _targ = 0;
        if (this.speedCount.length > 0) {
            index = Math.floor((Math.random() * this.speedCount.length));
        }
        _targ = this.speedCount[index];
        this.speedCount.splice(index, 1);
        return _targ;
    };
    return RaceCourse;
}(egret.Sprite));
