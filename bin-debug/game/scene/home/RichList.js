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
 * 富豪榜窗口
 * Created by zhangqiong on 2017/11/1.
 */
var RichList = (function (_super) {
    __extends(RichList, _super);
    function RichList() {
        var _this = _super.call(this) || this;
        _this.stageW = 0;
        _this.stageH = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    RichList.prototype.onAddToStage = function (event) {
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;
        this.bg = new CreateBitmap("bg_mask");
        this.addChild(this.bg);
        this.bg.width = this.stageW;
        this.bg.height = this.stageH;
        this.drawSomething();
    };
    RichList.prototype.drawSomething = function () {
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
        var _rankVal = "第" + Config.USER_RICH_RANKING.toString() + "名";
        if (Config.USER_RICH_RANKING > 50) {
            _rankVal = "未上榜";
        }
        this.myRanking = new CreateText(_rankVal, 0x00ff00, egret.HorizontalAlign.LEFT, 26, 1, this.stageW * 0.5 + 30, 540);
        this.contBox.addChild(this.myRanking);
        this.createRinkingList();
    };
    RichList.prototype.createRinkingList = function () {
        this.listGrop = new components.ListGroup();
        this.listBox.addChild(this.listGrop);
        this.listGrop.width = 800;
        this.listGrop.height = 400;
        this.listGrop.x = 170;
        this.listGrop.y = 120;
        var coll = new eui.ArrayCollection();
        for (var i = 0; i < 50; i++) {
            coll.addItem({ "labelRank": (i + 1).toString(), "icon": "head01", "label": Config.USER_NAME + (i + 1), "labelGold": "总资产：" + Config.USER_CREDIT });
        }
        this.listGrop.list.dataProvider = coll;
    };
    return RichList;
}(egret.Sprite));
