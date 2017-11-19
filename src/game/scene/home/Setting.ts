/**
 * 设置窗口
 * Created by zhangqiong on 2017/11/1.
 */

class Setting extends eui.Component{
    public constructor()
    {
        super();
        this.skinName = "resource/assets/skins/SettingSkin.exml";
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private stageW:number = 0;
    private stageH:number = 0;

    private contBox:egret.Sprite;
    public hideBtn:any;
    private close_btn:eui.Image;

    private bgMusic_btn:any;
    private Bg_Music_btn:eui.Image;
    private Bg_Music_bg:eui.Image;

    private bgSound_btn:any;
    private Bg_Sound_btn:eui.Image;
    private Bg_Sound_bg:eui.Image;

    private onAddToStage(event:egret.Event):void
    {
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;

        this.drawSomething();
    }

    private drawSomething():void
    {
        let _x:number = (this.stageW - 580) * 0.5;
        let _y:number = (this.stageH - 335) * 0.5;
        let _w:number = 580;
        let _h:number = 335;

        this.contBox = new egret.Sprite();
        this.addChild(this.contBox);

        //关闭按钮
        this.hideBtn = this.close_btn;
        this.hideBtn.touchEnabled = true;

        //声音开关
        this.bgMusic_btn = this.Bg_Music_btn;

        //音效开关
        this.bgSound_btn = this.Bg_Sound_btn;

    }

}