import TextFieldType = egret.TextFieldType;
/**
 * 准备页，投注页面
 * Created by zhangqiong on 2017/11/1.
 */
class ReadyRoom extends egret.Sprite{
    public constructor()
    {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private stageW:number = 0;
    private stageH:number = 0;
    private bg:CreateBitmap;
    public backHome:egret.Shape;
    public countDown:CreateText;
    public countDownStr:string;
    public timerVal:number = 60;
    public timer:egret.Timer;

    private betBox:egret.Sprite;
    private closeBetBox:egret.Shape;
    private contBox:egret.Sprite;

    private HorsesMc:Horses;

    private currentMc:any;

    private betCount:number = 0;
    public isStartGame:boolean = false;//是否开始比赛

    private onAddToStage(event:egret.Event):void
    {
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

    }

    private addBet_btn:egret.Shape;
    private addBet_txt:CreateText;
    private subBet_btn:egret.Shape;
    private subBet_txt:CreateText;
    private drawBetBox():void
    {
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

    }

    private drawSomething():void
    {
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
    }

    public isCountDown():void
    {
        console.log("===this.timerVal=== " + this.timerVal);
        if (this.timerVal <= 0)
        {
            this.isGetGameStart();
        }else {
            this.timer = new egret.Timer(1000, this.timerVal);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerStart, this);
            this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComplete, this);
            // this.timer.start();
        }
    }

    public addBetGold(event:egret.TouchEvent):void
    {

    }

    public subBetGold(event:egret.TouchEvent):void
    {

    }

    private timerStart():void
    {
        this.timerVal -= 1;
        this.countDown.text = this.countDownStr + this.timerVal.toString();
    }

    private timerComplete():void
    {
        this.timer.stop();
        this.timer.reset();
        if (this.betCount > 0)
        {
            this.isStartGame = true;
        }else{
            this.isStartGame = false;
            this.isGetGameStart();
        }
    }

    public isGetGameStart():void
    {
        let params:string = "?senior=" + Config.SENIOR_LOW;
        Config.CURRENT_URL = Config.SCREENING_INFO;
        let req:HttpRequest = new HttpRequest(Config.CURRENT_URL + params + "&t=" + Date.now(), "", egret.HttpMethod.GET);
    }

    private isAddEventListener():void
    {
        let mcArr:any = this.contBox.$children;
        for(let i = 0;i < mcArr.length;i ++)
        {
            mcArr[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.showBetBox, this);
        }
    }

    private showBetBox(event:egret.TouchEvent):void
    {
        console.log(event.currentTarget);
        this.currentMc = event.currentTarget;
        this.addChild(this.betBox);
        this.removeChild(this.contBox);
        this.backHome.visible = false;

        this.betCount += 100;
    }

    private isHeidBetBox(event:egret.TouchEvent):void
    {
        this.addChild(this.contBox);
        this.removeChild(this.betBox);
        this.backHome.visible = true;
    }

}