/**
 * Created by mcz on 2017/10/24.
 * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
 * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
 */
class CreateBitmap extends egret.Bitmap{
    public constructor(name:string,url?:string){
        super();
        this.produceBitmap(name,url);
    }

    private produceBitmap(name:string,url?:string){
        if(url)
        {
            let imageLoader:egret.ImageLoader = new egret.ImageLoader();
            imageLoader.addEventListener(egret.Event.COMPLETE,this.loadCompleteHandler,this);
            imageLoader.load(url);
        }else {
            let texture: egret.Texture = RES.getRes(name);
            this.texture = texture;
            return this;
        }
    }

    private loadCompleteHandler(event:egret.Event) {
        let loader:egret.ImageLoader = <egret.ImageLoader>event.target;
        //获取加载到的纹理对象
        let bitmapData:egret.BitmapData = loader.data;
        //创建纹理对象
        // let texture = new egret.Texture();
        this.texture.bitmapData = bitmapData;

        return this;
    }
}