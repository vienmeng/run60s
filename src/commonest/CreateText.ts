/**
 * Created by mcz on 2017/10/24.
 */
class CreateText extends egret.TextField{
    public constructor(txt:string, color:number, algin:string, size:number,alpha:number,x:number,y:number)
    {
        super();
        this.showTxt(txt, color, algin, size, alpha, x, y);
    }

    private showTxt(txt:string, color:number, algin:string, size:number,alpha:number,x:number,y:number)
    {
        this.textColor = color;
        this.textAlign = algin;
        this.text = txt;
        this.size = size;
        this.alpha = alpha;
        this.x = x;
        this.y = y;
        return this;
    }
}