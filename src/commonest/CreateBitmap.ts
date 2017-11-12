/**
 * Created by mcz on 2017/10/24.
 * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
 * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
 */
class CreateBitmap extends egret.Bitmap{
    public constructor(name:string){
        super();
        this.produceBitmap(name);
    }

    private produceBitmap(name:string){
        let texture: egret.Texture = RES.getRes(name);
        this.texture = texture;
        return this;
    }
}