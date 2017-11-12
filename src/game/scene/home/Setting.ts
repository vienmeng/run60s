import Shape = egret.Shape;
/**
 * 设置窗口
 * Created by zhangqiong on 2017/11/1.
 */
class Setting extends egret.Sprite{
    public constructor()
    {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private stageW:number = 0;
    private stageH:number = 0;
    private bg:CreateBitmap;
    private contBox:egret.Sprite;
    public hideBtn:egret.Shape;
    public bgMusic:egret.Shape;
    public bgMusicTXT:CreateText;
    public bgSound:egret.Shape;
    public bgSoundTXT:CreateText;

    private onAddToStage(event:egret.Event):void
    {
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;
        this.bg = new CreateBitmap("bg_mask");
        this.addChild(this.bg);
        this.bg.width = this.stageW;
        this.bg.height = this.stageH;

        this.drawSomething();
    }

    private drawSomething():void
    {
        let _x:number = (this.stageW - 580) * 0.5;
        let _y:number = (this.stageH - 335) * 0.5;
        let _w:number = 580;
        let _h:number = 335;

        this.contBox = new egret.Sprite();
        this.contBox.graphics.lineStyle(2, 0xff0000, 1);
        this.contBox.graphics.beginFill(0xff0000, 0.1);
        this.contBox.graphics.drawRoundRect(_x, _y, _w, _h, 10, 10);
        this.addChild(this.contBox);

        //关闭按钮
        this.hideBtn = new egret.Shape();
        this.hideBtn.graphics.lineStyle(2, 0xff0000, 1);
        this.hideBtn.graphics.beginFill(0xff0000, 0.1);
        this.hideBtn.graphics.drawCircle(845, 145, 35);
        this.contBox.addChild(this.hideBtn);
        this.hideBtn.touchEnabled = true;

        //声音开关
        this.bgMusicTXT = new CreateText("音乐：", 0x00ff00, "left", 40, 1, ((_x + _w) - 150) * 0.5 + 80, ((_y + _h) - 50) * 0.5 + 25);
        this.contBox.addChild(this.bgMusicTXT);
        this.bgMusic = new egret.Shape();
        this.bgMusic.graphics.lineStyle(2, 0xff0000, 1);
        this.bgMusic.graphics.beginFill(0xff0000, 0.1);
        this.bgMusic.graphics.drawRoundRect(((_x + _w) - 150) * 0.5 + 200, ((_y + _h) - 50) * 0.5 + 20, 150, 50, 50, 50);
        this.contBox.addChild(this.bgMusic);

        //音效开关
        this.bgSoundTXT = new CreateText("音效：", 0x00ff00, "left", 40, 1, ((_x + _w) - 150) * 0.5 + 80, ((_y + _h) - 50) * 0.5 + 105);
        this.contBox.addChild(this.bgSoundTXT);
        this.bgSound = new egret.Shape();
        this.bgSound.graphics.lineStyle(2, 0xff0000, 1);
        this.bgSound.graphics.beginFill(0xff0000, 0.1);
        this.bgSound.graphics.drawRoundRect(((_x + _w) - 150) * 0.5 + 200, ((_y + _h) - 50) * 0.5 + 100, 150, 50, 50, 50);
        this.contBox.addChild(this.bgSound);

    }

}