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
var tr = egret.sys.tr;
var Component = eui.Component;
/**
 * 主页大厅
 * Created by zhangqiong on 2017/10/31.
 */
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = _super.call(this) || this;
        _this.stageW = 0;
        _this.stageH = 0;
        _this.current_btn = null;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Home.prototype.onAddToStage = function (event) {
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;
        this.drawSomething();
        this.isAddEventListener();
    };
    /**
     * 绘制当前页面上的内容
     */
    Home.prototype.drawSomething = function () {
        var _this = this;
        this.homeBg = new CreateBitmap("bg_jpg");
        this.addChild(this.homeBg);
        this.homeBg.width = this.stageW;
        this.homeBg.height = this.stageH;
        //设置按钮
        this.setting_btn = new egret.Shape();
        this.setting_btn.graphics.lineStyle(2, 0xff0000, 1);
        this.setting_btn.graphics.beginFill(0xff0000, 0.1);
        this.setting_btn.graphics.drawRoundRect(this.stageW - 95, 5, 72, 100, 10, 10);
        this.addChild(this.setting_btn);
        this.setting_btn.name = "settingBtn";
        this.setting_btn.touchEnabled = true;
        //任务按钮
        this.task_btn = new egret.Shape();
        this.task_btn.graphics.lineStyle(2, 0xff0000, 1);
        this.task_btn.graphics.beginFill(0xff0000, 0.1);
        this.task_btn.graphics.drawRoundRect(this.stageW - 90, 365, 65, 105, 10, 10);
        this.addChild(this.task_btn);
        this.task_btn.name = "taskBtn";
        this.task_btn.touchEnabled = true;
        //签到按钮
        this.singIn_btn = new egret.Shape();
        this.singIn_btn.graphics.lineStyle(2, 0xff0000, 1);
        this.singIn_btn.graphics.beginFill(0xff0000, 0.1);
        this.singIn_btn.graphics.drawRoundRect(this.stageW - 90, 485, 65, 108, 10, 10);
        this.addChild(this.singIn_btn);
        this.singIn_btn.name = "singInBtn";
        this.singIn_btn.touchEnabled = true;
        //商店按钮
        this.shop_btn = new egret.Shape();
        this.shop_btn.graphics.lineStyle(2, 0xff0000, 1);
        this.shop_btn.graphics.beginFill(0xff0000, 0.1);
        this.shop_btn.graphics.drawRoundRect(this.stageW - 115, 135, 95, 125, 10, 10);
        this.addChild(this.shop_btn);
        this.shop_btn.name = "shopBtn";
        this.shop_btn.touchEnabled = true;
        //用户头像
        this.userInfo_btn = new egret.Sprite();
        this.userInfo_btn.graphics.drawRoundRect(13, 10, 80, 80, 10, 10);
        this.addChild(this.userInfo_btn);
        this.userInfo_btn.name = "userInfoBtn";
        this.userInfo_btn.touchEnabled = true;
        this.userInfo_btnImg = new CreateBitmap("user_head");
        this.userInfo_btn.addChild(this.userInfo_btnImg);
        this.userInfo_btnImg.x = 12;
        this.userInfo_btnImg.y = 9;
        this.userInfo_btnImg.width = 80;
        this.userInfo_btnImg.height = 80;
        // this.userImg = new CreateBitmap("", Config.USER_IMG_URL);
        // this.userInfo_btn.addChild(this.userImg);
        // this.userImg.x = 12;
        // this.userImg.y = 9;
        // this.userImg.width = 80;
        // this.userImg.height = 80;
        // this.createUserHeadImg();
        var data = RES.getRes("Home1_json");
        var txtr = RES.getRes("Home1_png");
        var data2 = RES.getRes("Home2_json");
        var txtr2 = RES.getRes("Home2_png");
        this.IndexFactory = new egret.MovieClipDataFactory(data, txtr);
        this.IndexFactory2 = new egret.MovieClipDataFactory(data2, txtr2);
        this.Hight_mc = new egret.MovieClip(this.IndexFactory.generateMovieClipData("Home"));
        this.addChild(this.Hight_mc);
        this.Hight_mc.gotoAndPlay("Hight");
        this.Hight_mc.x = 450;
        this.Hight_mc.y = 100;
        this.Hight_mc.frameRate = 12;
        this.Low_mc = new egret.MovieClip(this.IndexFactory2.generateMovieClipData("Home"));
        this.addChild(this.Low_mc);
        this.Low_mc.gotoAndPlay(20);
        this.Low_mc.x = 20;
        this.Low_mc.y = 100;
        this.Low_mc.frameRate = 12;
        this.Low_mc.touchEnabled = true;
        this.Low_mc.addEventListener(egret.Event.COMPLETE, function (event) {
            setTimeout(function (e) { _this.Low_mc.gotoAndPlay("Low"); }, 3000);
        }, this);
        this.Hight_mc.addEventListener(egret.Event.COMPLETE, function (event) {
            setTimeout(function (e) { _this.Hight_mc.gotoAndPlay("Hight"); }, 5000);
        }, this);
        //财富榜
        this.richList_btn = new egret.Shape();
        this.richList_btn.graphics.lineStyle(2, 0xff0000, 1);
        this.richList_btn.graphics.beginFill(0xff0000, 0.1);
        this.richList_btn.graphics.drawRoundRect(110, 320, 42, 65, 10, 10);
        this.addChild(this.richList_btn);
        this.richList_btn.name = "richListBtn";
        this.richList_btn.touchEnabled = true;
        //初级场
        this.basicCourt_btn = new egret.Shape();
        this.basicCourt_btn.graphics.lineStyle(2, 0xff0000, 1);
        this.basicCourt_btn.graphics.beginFill(0xff0000, 0.1);
        this.basicCourt_btn.graphics.drawRoundRect(225, 390, 330, 110, 130, 130);
        this.addChild(this.basicCourt_btn);
        this.basicCourt_btn.name = "basicCourtBtn";
        this.basicCourt_btn.touchEnabled = true;
        //高级场
        this.seniorCourt_btn = new egret.Shape();
        this.seniorCourt_btn.graphics.lineStyle(2, 0xff0000, 1);
        this.seniorCourt_btn.graphics.beginFill(0xff0000, 0.1);
        this.seniorCourt_btn.graphics.drawRoundRect(640, 390, 335, 110, 130, 130);
        this.addChild(this.seniorCourt_btn);
        this.seniorCourt_btn.name = "seniorCourtBtn";
        this.seniorCourt_btn.touchEnabled = true;
        /*
                let listGrop = new components.ListGroup();
                this.addChild(listGrop);
                listGrop.width = 400;
                listGrop.height = 300;
                listGrop.x = 200;
                listGrop.y = 100;
                */
    };
    /**
     * 显示头像
     */
    Home.prototype.createUserHeadImg = function () {
        var source = Config.USER_IMG_URL;
        var img = new eui.Image();
        img.source = source;
        this.addChild(img);
        img.verticalCenter = 0;
        img.horizontalCenter = 0;
    };
    Home.prototype.loadCompleteHandler = function (event) {
        var loader = event.target;
        //获取加载到的纹理对象
        var bitmapData = loader.data;
        //创建纹理对象
        var texture = new egret.Texture();
        texture.bitmapData = bitmapData;
        var bitmap = new egret.Bitmap(texture);
        this.addChild(bitmap);
    };
    /**
     * 添加按钮事件监听
     */
    Home.prototype.isAddEventListener = function () {
        this.setting_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isShowTargetScene, this);
        this.task_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isShowTargetScene, this);
        this.singIn_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isShowTargetScene, this);
        this.shop_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isShowTargetScene, this);
        this.userInfo_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isShowTargetScene, this);
        this.richList_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isShowTargetScene, this);
    };
    /**
     * 添加弹窗显示列表
     * @param event
     */
    Home.prototype.isShowTargetScene = function (event) {
        if (!Config.IS_HIDE_HOME_CHILDSCENE) {
            return;
        }
        var targ = event.currentTarget;
        var scen = null;
        this.current_btn = targ;
        switch (targ.name) {
            case "userInfoBtn":
                this.userScene = new UserInfo();
                this.addChild(this.userScene);
                scen = this.userScene;
                break;
            case "settingBtn":
                this.settingScene = new Setting();
                this.addChild(this.settingScene);
                scen = this.settingScene;
                break;
            case "taskBtn":
                this.taskScene = new TaskBar();
                this.addChild(this.taskScene);
                scen = this.taskScene;
                break;
            case "singInBtn":
                this.singInScene = new SignDesk();
                this.addChild(this.singInScene);
                scen = this.singInScene;
                break;
            case "shopBtn":
                this.shopScene = new ShopingStore();
                this.addChild(this.shopScene);
                scen = this.shopScene;
                break;
            case "richListBtn":
                this.richListScene = new RichList();
                this.addChild(this.richListScene);
                scen = this.richListScene;
                this.richList_btn.visible = false;
                break;
            case "basicCourtBtn":
                break;
            case "seniorCourtBtn":
                break;
        }
        Config.IS_HIDE_HOME_CHILDSCENE = false;
        targ.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.isShowTargetScene, this);
        scen.hideBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isHideTargetScene, this);
    };
    /**
     * 移除弹窗
     * @param event
     */
    Home.prototype.isHideTargetScene = function (event) {
        if (Config.IS_CHILD_OPENSCENE) {
            return;
        }
        var targ = event.currentTarget;
        targ.parent.visible = false;
        targ.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.isHideTargetScene, this);
        this.removeChild(targ.parent);
        this.current_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isShowTargetScene, this);
        this.richList_btn.visible = true;
        Config.IS_HIDE_HOME_CHILDSCENE = true;
    };
    return Home;
}(egret.Sprite));
