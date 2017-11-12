/**
 * 项目内所用到的全局变量
 * Created by mcz on 2017/10/24.
 */
class Config{
    /**
     * 后台接口
     * GET /account/orders：统计流水
     * POST /admin/login：登陆后台系统
     * GET /member/orders：马匹排名流水
     * GET /screening/info：获取场次信息
     * POST /screening/betting：下注
     * POST /screening/betting/reset：重新下注
     * GET /screening/result：获取比赛结果
     * GET /screening/record_history：获取场次记录
     * GET /screening/member_betting_info：获取马匹的下注金额记录
     * GET /screening/member_betting_count：获取马匹下注人数记录
     * GET /screening/user_betting_info：获取用户的下注记录
     * GET /admin/screening/record_account：获取场次的盈利信息
     * GET /admin/screening/desc：获取场次的详细信息
     * GET /task/daily：获取个人日常任务记录
     * GET /task/reward：获取个人日常任务的奖励
     * GET /transform/coins：获取金币转化列表
     * GET /transform/golds：获取元宝转化列表
     * GET /transform/charge：元宝与金币兑换
     * POST /transform/add：新增转化规则
     * PUT /transform/update：修改转化规则
     * DELETE /transform/delete：删除转换规则
     * GET /user/parity：获取用户的验证信息
     * POST /user/login：用户登陆
     * GET /user/check_login：检查用户登陆信息
     * GET /user/logout：退出登陆
     * POST /users：获取用户信息
     * GET /admin/users：后台：获取用户信息列表
     * GET /admin/users/betting：后台：获取用户下注信息列表
     *
     * 错误码 描述
     * NotFoundError-1005 找不到内容
     * InternalError-1000 内部错误
     * MissingParameter-1001 缺少参数
     * InvalidParameter-1002 参数不合法
     * PermissionsError-1003 权限不足
     * DataBaseError-1004 数据库错误
     * LoginError-1006 用户未登录
     * RepeatError-1007 该记录已经存在
     * CartFullError-1008 购物车已经满了
     * ExceInvalidError-1009 不合法执行
     * DependError-1010 数据存在依赖
     *
     * @type {string}
     */
    // public static USER_SERVER_URL:string = "http://118.89.63.156:4443/api";
    public static USER_SERVER_URL:string = "/api";//代理地址
    public static ACCOUENT_ORDERS:string = "/account/orders";
    public static ADMIN_LOGIN:string = "/admin/login";
    public static MEMBER_ORDERS:string = "/member/orders";

    public static SCREENING_INFO:string = "/screening/info";
    public static SCREENING_BETTING:string = "/screening/betting";
    public static SCREENING_BETTING_RESET:string = "/screening/betting/reset";
    public static SCREENING_RESULT:string = "/screening/result";
    public static SCREENING_RECORD_HISTORY:string = "/screening/record_history";
    public static SCREENING_MEMBER_BETTING_INFO:string = "/screening/member_betting_info";
    public static SCREENING_USER_BETTING_INFO:string = "/screening/user_betting_info";

    public static ADMIN_SCREENING_DESC:string = "/admin/screening/desc";
    public static TASK_DAILY:string = "/task/daily";
    public static TASK_REWARD:string = "/task/reward";

    public static TRANSFORM_COINS:string = "/transform/coins";
    public static TRANSFORM_GOLDS:string = "/transform/golds";
    public static TRANSFORM_CHARGE:string = "/transform/charge";
    public static TRANSFORM_ADD:string = "/transform/add";
    public static TRANSFORM_UPDATE:string = "/transform/update";
    public static TRANSFORM_DELETE:string = "/transform/delete";

    public static USER_REGISTER:string = "/user/register";
    public static USER_LOGIN:string = "/user/login";
    public static USER_CHECK_LOGIN:string = "/user/check_login";
    public static USERS:string = "/users";

    public static ADMIN_USERS:string = "/admin/users";
    public static ADMIN_USERS_BETTING:string = "/admin/users/betting";

    /**
     * 后台设置的uid
     */
    public static USER_UID:string = "73";

    /**
     * 获取用户信息所用的user_ids
     */
    public static USER_IDS:string = "";

    /**
     * 获取openid
     */
    public static OPENID:string = "san23dsa098dsa345";

    /**
     * 测试用的手机号码
     * @type {string}
     */
    public static TEST_MOBILE:string = "13282131779";

    /**
     * 获取URL上的用户手机号码
     * @type {string}
     */
    public static USER_MOBILE:string = new GetQueryString("mobile").QueryString;

    /**
     * app后台请求方式
     * 操作类型 select 查询元宝数量 add 增加元宝数量 decrease 减少元宝数量
     * @type {{SELECT: string; ADD: string; DECREASE: string}}
     */
    public static USER_OPST_TYPE_SELECT:string = "select";
    public static USER_OPST_TYPE_ADD:string = "add";
    public static USER_OPST_TYPE_DECREASE:string = "decrease";

    /**
     * app返回过来的用户信息
     * user_credit:元宝数
     * user_gold:金币数
     * user_message:返回消息
     * user_name:用户名
     * user_img_url:用户头像地址
     * user_rich_ranking:财富排行
     */
    public static USER_CREDIT:number = 0;
    public static USER_GOLD:number = 0;
    public static USER_MESSAGE:string = "";
    public static USER_NAME:string = "";
    public static USER_IMG_URL:string = "";
    public static USER_RICH_RANKING:number = 0;

    /**
     * 游戏后台接口
     * @type {string}
     */
    public static GAME_SERVER_URL:string = "http://";

    /**
     * 请求结束后返回flag
     */
    public static IS_REQUEST:boolean = false;

    /**
     * gameScene类中的当前窗口
     */
    public static GAME_CURRENT_SCENE:any = null;

    /**
     * 主页子窗口是否弹起
     */
    public static IS_HIDE_HOME_CHILDSCENE:boolean = true;

    /**
     * 在子菜单打开弹窗
     */
    public static IS_CHILD_OPENSCENE:boolean = false;
}