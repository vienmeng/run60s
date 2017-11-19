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
var getRes = RES.getRes;
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createView, _this);
        return _this;
    }
    LoadingUI.prototype.createView = function (event) {
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
    };
    LoadingUI.prototype.setProgress = function (current, total) {
        // this.textField.text = `Loading...${current}/${total}`;
        this.textField.text = "登陆中 ···";
        /*if (current == total)
        {
            this.textField.visible = false;
            this.startBtn.visible = true;
        }*/
    };
    return LoadingUI;
}(egret.Sprite));
