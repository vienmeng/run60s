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
 * 各种马匹
 * Created by zhangqiong on 2017/11/1.
 */
var Horses = (function (_super) {
    __extends(Horses, _super);
    function Horses() {
        var _this = _super.call(this) || this;
        _this.stageW = 0;
        _this.stageH = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Horses.prototype.onAddToStage = function (event) {
        console.log(Config.HORSE_SCENE);
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;
        this.ciTuData = RES.getRes("CiTu_json");
        this.ciTuPng = RES.getRes("CiTu_png");
        this.ciTuFactory = new egret.MovieClipDataFactory(this.ciTuData, this.ciTuPng);
        this.feiDianData = RES.getRes("FeiDian_json");
        this.feiDianPng = RES.getRes("FeiDian_png");
        this.feiDianFactory = new egret.MovieClipDataFactory(this.feiDianData, this.feiDianPng);
        this.ziDianData = RES.getRes("ZiDian_json");
        this.ziDianPng = RES.getRes("ZiDian_png");
        this.ziDianFactory = new egret.MovieClipDataFactory(this.ziDianData, this.ziDianPng);
        this.qingLongData = RES.getRes("QingLong_json");
        this.qingLongPng = RES.getRes("QingLong_png");
        this.qingLongFactory = new egret.MovieClipDataFactory(this.qingLongData, this.qingLongPng);
        this.xingYueData = RES.getRes("XingYue_json");
        this.xingYuePng = RES.getRes("XingYue_png");
        this.xingYueFactory = new egret.MovieClipDataFactory(this.xingYueData, this.xingYuePng);
        this.diLvData = RES.getRes("DiLv_json");
        this.diLvPng = RES.getRes("DiLv_png");
        this.diLvFactory = new egret.MovieClipDataFactory(this.diLvData, this.diLvPng);
        this.contBox = new egret.Sprite();
        this.addChild(this.contBox);
        this.contBox.width = this.stageW;
        this.contBox.height = this.stageH;
        this.drawSomething();
    };
    Horses.prototype.drawSomething = function () {
        this.ciTuMc = new egret.MovieClip(this.ciTuFactory.generateMovieClipData("CiTu"));
        this.contBox.addChild(this.ciTuMc);
        this.ciTuMc.touchEnabled = true;
        this.ciTuName = new CreateText("赤兔", 0xe5c781, egret.HorizontalAlign.CENTER, 26, 1, 280, 150);
        this.feiDianMc = new egret.MovieClip(this.feiDianFactory.generateMovieClipData("FeiDian"));
        this.contBox.addChild(this.feiDianMc);
        this.feiDianMc.touchEnabled = true;
        this.feiDianName = new CreateText("飞电", 0xe5c781, egret.HorizontalAlign.CENTER, 26, 1, 580, 150);
        this.ziDianMc = new egret.MovieClip(this.ziDianFactory.generateMovieClipData("ZiDian"));
        this.contBox.addChild(this.ziDianMc);
        this.ziDianMc.touchEnabled = true;
        this.ziDianName = new CreateText("紫电", 0xe5c781, egret.HorizontalAlign.CENTER, 26, 1, 880, 150);
        this.qingLongMc = new egret.MovieClip(this.qingLongFactory.generateMovieClipData("QingLong"));
        this.contBox.addChild(this.qingLongMc);
        this.qingLongMc.touchEnabled = true;
        this.qingLongName = new CreateText("青龙", 0xe5c781, egret.HorizontalAlign.CENTER, 26, 1, 280, 350);
        this.xingYueMc = new egret.MovieClip(this.xingYueFactory.generateMovieClipData("XingYue"));
        this.contBox.addChild(this.xingYueMc);
        this.xingYueMc.touchEnabled = true;
        this.xingYueName = new CreateText("星月", 0xe5c781, egret.HorizontalAlign.CENTER, 26, 1, 580, 350);
        this.diLvMc = new egret.MovieClip(this.diLvFactory.generateMovieClipData("DiLv"));
        this.contBox.addChild(this.diLvMc);
        this.diLvMc.touchEnabled = true;
        this.diLvName = new CreateText("的卢", 0xe5c781, egret.HorizontalAlign.CENTER, 26, 1, 880, 350);
        this.setHorseSite();
    };
    Horses.prototype.setHorseSite = function () {
        if (Config.HORSE_SCENE) {
            this.ciTuMc.x = 20;
            this.ciTuMc.y = 160;
            this.ciTuMc.gotoAndPlay("Standby", -1);
            this.feiDianMc.x = 20;
            this.feiDianMc.y = 220;
            this.feiDianMc.gotoAndPlay("Standby", -1);
            this.ziDianMc.x = 20;
            this.ziDianMc.y = 280;
            this.ziDianMc.gotoAndPlay("Standby", -1);
            this.qingLongMc.x = 20;
            this.qingLongMc.y = 345;
            this.qingLongMc.gotoAndPlay("Standby", -1);
            this.xingYueMc.x = 20;
            this.xingYueMc.y = 410;
            this.xingYueMc.gotoAndPlay("Standby", -1);
            this.diLvMc.x = 20;
            this.diLvMc.y = 475;
            this.diLvMc.gotoAndPlay("Standby", -1);
        }
        else {
            this.ciTuMc.x = 210;
            this.ciTuMc.y = 150;
            this.ciTuMc.gotoAndPlay("Rest", -1);
            this.feiDianMc.x = 510;
            this.feiDianMc.y = 150;
            this.feiDianMc.gotoAndPlay("Rest", -1);
            this.ziDianMc.x = 810;
            this.ziDianMc.y = 150;
            this.ziDianMc.gotoAndPlay("Rest", -1);
            this.qingLongMc.x = 210;
            this.qingLongMc.y = 350;
            this.qingLongMc.gotoAndPlay("Rest", -1);
            this.xingYueMc.x = 510;
            this.xingYueMc.y = 350;
            this.xingYueMc.gotoAndPlay("Rest", -1);
            this.diLvMc.x = 810;
            this.diLvMc.y = 350;
            this.diLvMc.gotoAndPlay("Rest", -1);
            this.contBox.addChild(this.ciTuName);
            this.contBox.addChild(this.feiDianName);
            this.contBox.addChild(this.ziDianName);
            this.contBox.addChild(this.qingLongName);
            this.contBox.addChild(this.xingYueName);
            this.contBox.addChild(this.diLvName);
        }
    };
    return Horses;
}(egret.Sprite));
