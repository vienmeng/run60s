/**
 * 用户信息窗口
 * Created by zhangqiong on 2017/11/1.
 */
class UserInfo extends egret.Sprite{
    public constructor()
    {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private stageW:number = 0;
    private stageH:number = 0;
    private bg:CreateBitmap;
    private contBox:egret.Sprite;
    private userImage:egret.Sprite;
    public hideBtn:egret.Shape;

    private shopScene:ShopingStore;

    private userNameStr:CreateText;
    private userName:CreateText;
    private userGoldStr:CreateText;
    private userGold:CreateText;
    private userKingGoldStr:CreateText;
    private userKingGold:CreateText;

    private isHideChildScene:boolean = true;

    private onAddToStage(event:egret.Event):void
    {
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;
        this.bg = new CreateBitmap("bg_mask");
        this.addChild(this.bg);
        this.bg.width = this.stageW;
        this.bg.height = this.stageH;

        this.drawSomething();
        this.isAddEventListener();
    }

    /**
     * 绘制窗口的内容
     */
    private drawSomething():void
    {
        let _x:number = (this.stageW - 580) * 0.5;
        let _y:number = (this.stageH - 435) * 0.5;
        let _w:number = 580;
        let _h:number = 435;
        //绘制弹窗主窗口
        this.contBox = new egret.Sprite();
        this.contBox.graphics.lineStyle(2, 0xff0000, 1);
        this.contBox.graphics.beginFill(0xff0000, 0.1);
        this.contBox.graphics.drawRoundRect(_x, _y, 580, 435, 10, 10);
        this.addChild(this.contBox);

        //绘制关闭按钮
        this.hideBtn = new egret.Shape();
        this.hideBtn.graphics.lineStyle(2, 0xff0000, 1);
        this.hideBtn.graphics.beginFill(0xff0000, 0.1);
        this.hideBtn.graphics.drawCircle(_x + _w, _y, 35);
        this.contBox.addChild(this.hideBtn);
        this.hideBtn.touchEnabled = true;

        //绘制头像
        this.userImage = new egret.Sprite();
        this.userImage.graphics.lineStyle(2, 0xff0000, 1);
        this.userImage.graphics.drawRoundRect(_x + 50, _y + 50, 150, 150, 10, 10);
        this.contBox.addChild(this.userImage);

        //用户名
        this.userNameStr = new CreateText("昵称：", 0x00ff00, "left", 26, 1, _x + 230, _y + 70);
        this.contBox.addChild(this.userNameStr);
        this.userName = new CreateText("测试姓名01", 0x0000ff, "left", 26, 1, _x + 300, _y + 70);
        this.userName.width = 250;
        this.userName.type = egret.TextFieldType.INPUT;
        this.userName.inputType = egret.TextFieldInputType.TEXT;
        this.contBox.addChild(this.userName);

        //元宝
        this.userKingGoldStr = new CreateText("银元宝：", 0x00ff00, "left", 26, 1, _x + 230, _y + 130);
        this.contBox.addChild(this.userKingGoldStr);
        this.userKingGold = new CreateText(Config.USER_CREDIT.toString(), 0x00ff00, "left", 26, 1, _x + 330, _y + 130);
        this.contBox.addChild(this.userKingGold);
        //金币
        this.userGoldStr = new CreateText("金币：", 0x00ff00, "left", 26, 1, _x + 230, _y + 190);
        this.contBox.addChild(this.userGoldStr);
        this.userGold = new CreateText(Config.USER_GOLD.toString(), 0x00ff00, "left", 26, 1, _x + 330, _y + 190);
        this.contBox.addChild(this.userGold);
        this.userGold.touchEnabled = true;
    }

    private isAddEventListener():void
    {
        this.userGold.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isShowShopScene, this);
    }

    private isShowShopScene(event:egret.TouchEvent):void
    {
        if (!this.isHideChildScene)
        {
            return;
        }
        this.shopScene = new ShopingStore();
        this.addChild(this.shopScene);
        this.isHideChildScene = false;
        Config.IS_CHILD_OPENSCENE = true;
        this.userGold.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.isShowShopScene, this);

        this.shopScene.hideBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isHideShopScene, this);
    }

    private isHideShopScene(event:egret.TouchEvent):void
    {
        this.shopScene.visible = false;
        event.currentTarget.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.isHideShopScene, this);
        this.removeChild(this.shopScene);
        this.userGold.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isShowShopScene, this);
        this.isHideChildScene = true;
        Config.IS_CHILD_OPENSCENE = false;
    }
}