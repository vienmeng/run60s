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
 * 用户信息窗口
 * Created by zhangqiong on 2017/11/1.
 */
var Skin = eui.Skin;
var UserInfo = (function (_super) {
    __extends(UserInfo, _super);
    function UserInfo() {
        var _this = _super.call(this) || this;
        _this.stageW = 0;
        _this.stageH = 0;
        _this.isHideChildScene = true;
        _this.skinName = skins.UserBox;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    UserInfo.prototype.onAddToStage = function (event) {
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;
        this.drawSomething();
        this.isAddEventListener();
    };
    /**
     * 绘制窗口的内容
     */
    UserInfo.prototype.drawSomething = function () {
        var _x = (this.stageW - 578) * 0.5;
        var _y = (this.stageH - 330) * 0.5;
        var _w = 578;
        var _h = 330;
        this.contBox = new egret.Sprite();
        this.addChild(this.contBox);
        //绘制关闭按钮
        this.hideBtn = this.close_btn;
        this.hideBtn.touchEnabled = true;
        console.log(this.close_btn);
    };
    UserInfo.prototype.isAddEventListener = function () {
        // this.userGold.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isShowShopScene, this);
    };
    UserInfo.prototype.isShowShopScene = function (event) {
        if (!this.isHideChildScene) {
            return;
        }
        /*this.shopScene = new ShopingStore();
        this.addChild(this.shopScene);
        this.isHideChildScene = false;
        Config.IS_CHILD_OPENSCENE = true;
        this.userGold.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.isShowShopScene, this);

        this.shopScene.hideBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isHideShopScene, this);*/
    };
    UserInfo.prototype.isHideShopScene = function (event) {
        /*this.shopScene.visible = false;
        event.currentTarget.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.isHideShopScene, this);
        this.removeChild(this.shopScene);
        this.userGold.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isShowShopScene, this);
        this.isHideChildScene = true;*/
        Config.IS_CHILD_OPENSCENE = false;
    };
    return UserInfo;
}(eui.Component));
