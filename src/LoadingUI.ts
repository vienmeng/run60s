
import getRes = RES.getRes;

class LoadingUI extends egret.Sprite {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createView,this);
    }

    public textField:egret.TextField;
    private bg:eui.Image;
    public startBtn:eui.Image;

    private createView(event:egret.Event):void {

        this.bg = new eui.Image();
        this.bg.source = "resource/assets/loading/loading_bg.jpg";
        this.addChild(this.bg);
        this.bg.width = this.stage.stageWidth;
        this.bg.height = this.stage.stageHeight;

        this.startBtn = new eui.Image();
        this.startBtn.source = "resource/assets/loading/start_btn.png";
        this.addChild(this.startBtn);
        this.startBtn.x = (this.stage.stageWidth - 280) * 0.5;
        this.startBtn.y = this.stage.stageHeight - 130;
        this.startBtn.visible = false;
        this.startBtn.touchEnabled = true;

        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 460;
        this.textField.width = this.stage.stageWidth;
        this.textField.height = 100;
        this.textField.textAlign = "center";
        this.textField.size = 24;
    }

    public setProgress(current:number, total:number):void {
        // this.textField.text = `Loading...${current}/${total}`;
        this.textField.text = "登陆中 ···";
        /*if (current == total)
        {
            this.textField.visible = false;
            this.startBtn.visible = true;
        }*/
    }
}
