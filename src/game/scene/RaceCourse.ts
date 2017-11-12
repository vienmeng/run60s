/**
 * 比赛场，比赛页面
 * Created by zhangqiong on 2017/11/1.
 */
class RaceCourse extends egret.Sprite{
    public constructor()
    {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    public backReadyRoom:egret.Shape;

    private onAddToStage(event:egret.Event):void
    {

    }
}