import tr = egret.sys.tr;
import Component = eui.Component;
/**
 * 主页大厅
 * Created by zhangqiong on 2017/10/31.
 */
class Home extends egret.Sprite{
    public constructor()
    {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private stageW:number = 0;
    private stageH:number = 0;

    private homeBg:CreateBitmap;
    private settingScene:Setting;
    private taskScene:TaskBar;
    private singInScene:SignDesk;
    private shopScene:ShopingStore;
    private userScene:UserInfo;
    private richListScene:RichList;

    private current_btn:any = null;

    private setting_btn:egret.Shape;
    private task_btn:egret.Shape;
    private singIn_btn:egret.Shape;
    private shop_btn:egret.Shape;
    private userInfo_btn:egret.Shape;
    public basicCourt_btn:egret.Shape;
    public seniorCourt_btn:egret.Shape;
    private richList_btn:egret.Shape;

    private onAddToStage(event:egret.Event):void
    {
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;

        this.drawSomething();
        this.isAddEventListener();
    }

    /**
     * 绘制当前页面上的内容
     */
    private drawSomething():void
    {
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
        this.userInfo_btn = new egret.Shape();
        this.userInfo_btn.graphics.lineStyle(2, 0xff0000, 1);
        this.userInfo_btn.graphics.beginFill(0xff0000, 0.1);
        this.userInfo_btn.graphics.drawRoundRect(10, 7, 85, 85, 10, 10);
        this.addChild(this.userInfo_btn);
        this.userInfo_btn.name = "userInfoBtn";
        this.userInfo_btn.touchEnabled = true;

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
    }

    /**
     * 添加按钮事件监听
     */
    private isAddEventListener():void
    {
        this.setting_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isShowTargetScene, this);
        this.task_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isShowTargetScene, this);
        this.singIn_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isShowTargetScene, this);
        this.shop_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isShowTargetScene, this);
        this.userInfo_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isShowTargetScene, this);
        this.richList_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isShowTargetScene, this);
    }

    /**
     * 添加弹窗显示列表
     * @param event
     */
    private isShowTargetScene(event:egret.TouchEvent):void
    {
        if (!Config.IS_HIDE_HOME_CHILDSCENE)
        {
            return;
        }
        let targ:any = event.currentTarget;
        let scen:any = null;
        this.current_btn = targ;
        switch (targ.name)
        {
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
    }

    /**
     * 移除弹窗
     * @param event
     */
    private isHideTargetScene(event:egret.TouchEvent):void
    {
        if(Config.IS_CHILD_OPENSCENE)
        {
            return;
        }
        let targ = event.currentTarget;
        targ.parent.parent.visible = false;
        targ.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.isHideTargetScene, this);
        this.removeChild(targ.parent.parent);
        this.current_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.isShowTargetScene, this);
        this.richList_btn.visible = true;
        Config.IS_HIDE_HOME_CHILDSCENE = true;
    }

}