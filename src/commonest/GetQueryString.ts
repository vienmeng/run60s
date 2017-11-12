/**
 * Created by zhangqiong on 2017/11/1.
 */
class GetQueryString extends egret.DisplayObject{
    public constructor(name:string)
    {
        super();
        this.getQuery(name);
    }

    private reg:RegExp;
    public QueryString:string;

    private getQuery(name:string)
    {
        this.reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        let _r = window.location.search.substr(1).match(this.reg);
        if (_r != null)
        {
            this.QueryString = decodeURIComponent(_r[2]);
        }else {
            this.QueryString = null;
        }

        return this.QueryString;
    }
}