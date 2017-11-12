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
 * 游戏主场景
 * Created by mcz on 2017/10/30.
 */
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createScene, _this);
        return _this;
    }
    //创建初始化场景，默认为home
    GameScene.prototype.createScene = function (event) {
        console.log(Config.USER_CREDIT);
        this.createHome();
    };
    //创建主页
    GameScene.prototype.createHome = function () {
        this.home = new Home();
        this.addChild(this.home);
        this.home.basicCourt_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoBasicReadyRoom, this);
    };
    //前往押注页
    GameScene.prototype.gotoBasicReadyRoom = function (event) {
        this.home.basicCourt_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoBasicReadyRoom, this);
        this.createBasicReadyRoom();
        this.removeChild(this.home);
    };
    //创建初级场投注界面
    GameScene.prototype.createBasicReadyRoom = function () {
        this.readyRoom = new ReadyRoom();
        this.addChild(this.readyRoom);
        this.readyRoom.backHome.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoBackHome, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.isReadyStart, this);
        // this.isReadyStart();
    };
    //等待投注和开始比赛
    GameScene.prototype.isReadyStart = function (event) {
        if (this.readyRoom.isStartGame) {
            this.createRaceCourse();
        }
    };
    //返回home页面
    GameScene.prototype.gotoBackHome = function (event) {
        this.readyRoom.backHome.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoBackHome, this);
        this.createHome();
        this.readyRoom.timer.reset();
        this.removeChild(this.readyRoom);
        this.removeEventListener(egret.Event.ENTER_FRAME, this.isReadyStart, this);
    };
    //进入比赛场地
    GameScene.prototype.createRaceCourse = function () {
        this.raceCourse = new RaceCourse();
        this.addChild(this.raceCourse);
        this.removeChild(this.readyRoom);
        this.raceCourse.backReadyRoom.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoBackBasicReadyRoom, this);
    };
    //返回押注页
    GameScene.prototype.gotoBackBasicReadyRoom = function (event) {
        this.raceCourse.backReadyRoom.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoBackBasicReadyRoom, this);
        this.createBasicReadyRoom();
        this.removeChild(this.raceCourse);
    };
    return GameScene;
}(egret.DisplayObjectContainer));