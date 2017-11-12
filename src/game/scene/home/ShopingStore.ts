/**
 * 商店窗口
 * Created by zhangqiong on 2017/11/1.
 */
class ShopingStore extends egret.Sprite{
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
        this.contBox = new egret.Sprite();
        this.contBox.graphics.lineStyle(2, 0xff0000, 1);
        this.contBox.graphics.beginFill(0xff0000, 0.1);
        this.contBox.graphics.drawRoundRect(135, 30, 870, 570, 10, 10);
        this.addChild(this.contBox);

        this.hideBtn = new egret.Shape();
        this.hideBtn.graphics.lineStyle(2, 0xff0000, 1);
        this.hideBtn.graphics.beginFill(0xff0000, 0.1);
        this.hideBtn.graphics.drawCircle(995, 45, 35);
        this.contBox.addChild(this.hideBtn);
        this.hideBtn.touchEnabled = true;
    }
}