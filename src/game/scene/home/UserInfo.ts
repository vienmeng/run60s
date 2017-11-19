/**
 * 用户信息窗口
 * Created by zhangqiong on 2017/11/1.
 */
import Skin = eui.Skin;

class UserInfo extends eui.Component{
    public constructor()
    {
        super();
        this.skinName = skins.UserBox;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private stageW:number = 0;
    private stageH:number = 0;

    private contBox:egret.Sprite;
    public hideBtn:any;

    private close_btn:eui.Image;

    private isHideChildScene:boolean = true;

    private onAddToStage(event:egret.Event):void
    {
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;

        this.drawSomething();
        this.isAddEventListener();
    }

    /**
     * 绘制窗口的内容
     */
    private drawSomething():void
    {
        let _x:number = (this.stageW - 578) * 0.5;
        let _y:number = (this.stageH - 330) * 0.5;
        let _w:number = 578;
        let _h:number = 330;
        this.contBox = new egret.Sprite();
        this.addChild(this.contBox);

        //绘制关闭按钮
        this.hideBtn = this.close_btn;
        this.hideBtn.touchEnabled = true;


        console.log(this.close_btn)

    }

    private isAddEventListener():void
    {
        // this.userGold.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isShowShopScene, this);
    }

    private isShowShopScene(event:egret.TouchEvent):void
    {
        if (!this.isHideChildScene)
        {
            return;
        }
        /*this.shopScene = new ShopingStore();
        this.addChild(this.shopScene);
        this.isHideChildScene = false;
        Config.IS_CHILD_OPENSCENE = true;
        this.userGold.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.isShowShopScene, this);

        this.shopScene.hideBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isHideShopScene, this);*/
    }

    private isHideShopScene(event:egret.TouchEvent):void
    {
        /*this.shopScene.visible = false;
        event.currentTarget.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.isHideShopScene, this);
        this.removeChild(this.shopScene);
        this.userGold.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isShowShopScene, this);
        this.isHideChildScene = true;*/
        Config.IS_CHILD_OPENSCENE = false;
    }
}