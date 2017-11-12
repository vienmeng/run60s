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
    private countDown:CreateText;
    private timerVal:number = 60;
    public timer:egret.Timer;

    public isStartGame:boolean = false;//是否开始比赛

    private onAddToStage(event:egret.Event):void
    {
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;

        this.bg = new CreateBitmap("bg_mh.jpg");
        this.addChild(this.bg);
        this.bg.width = this.stageW;
        this.bg.height = this.stageH;

        this.drawSomething();

        this.isCountDown();

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

        //倒计时数字
        this.countDown = new CreateText("倒计时：" + this.timerVal.toString(), 0x00ff00, "left", 26, 1, 50, 50);
        this.addChild(this.countDown);
        this.countDown.type = egret.TextFieldType.DYNAMIC;
    }

    private isCountDown():void
    {
        this.timer = new egret.Timer(1000, 60);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerStart, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComplete, this);
        this.timer.start();
    }

    private timerStart():void
    {
        this.timerVal -= 1;
        this.countDown.text = "倒计时：" + this.timerVal.toString();
        console.log(this.timerVal);
    }

    private timerComplete():void
    {
        this.timer.stop();
        this.timer.reset();
    }


}