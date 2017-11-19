/**
 * 富豪榜窗口
 * Created by zhangqiong on 2017/11/1.
 */
class RichList extends egret.Sprite{
    public constructor()
    {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private stageW:number = 0;
    private stageH:number = 0;
    private bg:CreateBitmap;
    private contBox:egret.Sprite;
    private listBox:egret.Sprite;
    public hideBtn:egret.Shape;
    private titleText:CreateText;
    private myRankText:CreateText;
    private myRanking:CreateText;
    private listGrop:any;

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
        //主框背景
        this.contBox = new egret.Sprite();
        this.contBox.graphics.lineStyle(2, 0xff0000, 1);
        this.contBox.graphics.beginFill(0xff0000, 0.1);
        this.contBox.graphics.drawRoundRect(135, 30, 870, 570, 10, 10);
        this.addChild(this.contBox);

        //关闭按钮
        this.hideBtn = new egret.Shape();
        this.hideBtn.graphics.lineStyle(2, 0xff0000, 1);
        this.hideBtn.graphics.beginFill(0xff0000, 0.1);
        this.hideBtn.graphics.drawCircle(995, 45, 35);
        this.contBox.addChild(this.hideBtn);
        this.hideBtn.touchEnabled = true;

        //大标题
        this.titleText = new CreateText("财富榜", 0x00ff00, egret.HorizontalAlign.CENTER, 50, 1, this.stageW * 0.5 - 50, 40);
        this.contBox.addChild(this.titleText);

        //列表框
        this.listBox = new egret.Sprite();
        this.listBox.graphics.lineStyle(2, 0xff0000, 1);
        this.listBox.graphics.beginFill(0x000000, 0.1);
        this.listBox.graphics.drawRoundRect(170, 120, 800, 400, 10, 10);
        this.contBox.addChild(this.listBox);

        //底部文字
        this.myRankText = new CreateText("我的排行：", 0x0000ff, egret.HorizontalAlign.LEFT, 26, 1, this.stageW * 0.5 - 100, 540);
        this.contBox.addChild(this.myRankText);

        let _rankVal:string = "第" + Config.USER_RICH_RANKING.toString() + "名";
        if (Config.USER_RICH_RANKING > 50)
        {
            _rankVal = "未上榜";
        }

        this.myRanking = new CreateText(_rankVal, 0x00ff00, egret.HorizontalAlign.LEFT, 26, 1, this.stageW * 0.5 + 30, 540);
        this.contBox.addChild(this.myRanking);

        this.createRinkingList();
    }

    private createRinkingList():void
    {
        this.listGrop = new components.ListGroup();
        this.listBox.addChild(this.listGrop);
        this.listGrop.width = 800;
        this.listGrop.height = 400;
        this.listGrop.x = 170;
        this.listGrop.y = 120;
        // console.log(this.listGrop.list.dataProvider);

        let coll = new eui.ArrayCollection();
        for (let i = 0;i < 50;i ++)
        {
            coll.addItem({"icon":"head01","label": Config.USER_NAME + (i + 1), "labelGold": "¥：" + Config.USER_COIN});
        }
        this.listGrop.list.dataProvider = coll;

    }
}