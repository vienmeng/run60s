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
 * Created by mcz on 2017/10/24.
 * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
 * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
 */
var CreateBitmap = (function (_super) {
    __extends(CreateBitmap, _super);
    function CreateBitmap(name, url) {
        var _this = _super.call(this) || this;
        _this.produceBitmap(name, url);
        return _this;
    }
    CreateBitmap.prototype.produceBitmap = function (name, url) {
        if (url) {
            var imageLoader = new egret.ImageLoader();
            imageLoader.addEventListener(egret.Event.COMPLETE, this.loadCompleteHandler, this);
            imageLoader.load(url);
        }
        else {
            var texture = RES.getRes(name);
            this.texture = texture;
            return this;
        }
    };
    CreateBitmap.prototype.loadCompleteHandler = function (event) {
        var loader = event.target;
        //获取加载到的纹理对象
        var bitmapData = loader.data;
        //创建纹理对象
        // let texture = new egret.Texture();
        this.texture.bitmapData = bitmapData;
        return this;
    };
    return CreateBitmap;
}(egret.Bitmap));
