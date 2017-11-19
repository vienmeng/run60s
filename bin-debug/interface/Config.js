/**
 * 项目内所用到的全局变量
 * Created by mcz on 2017/10/24.
 */
var Config = (function () {
    function Config() {
    }
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
     * POST /user/register：初始化用户数据
     * GET /user/parity：获取用户验证信息
     * POST /user/login：用户登陆
     * GET /user/check_login：检查用户登陆信息
     * GET /user/logout：退出登陆
     * POST /user_info：获取用户信息
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
    Config.USER_SERVER_URL = "/api"; //代理地址
    Config.ACCOUENT_ORDERS = "/account/orders";
    Config.ADMIN_LOGIN = "/admin/login";
    Config.MEMBER_ORDERS = "/member/orders";
    Config.SCREENING_INFO = "/screening/info";
    Config.SCREENING_BETTING = "/screening/betting";
    Config.SCREENING_BETTING_RESET = "/screening/betting/reset";
    Config.SCREENING_RESULT = "/screening/result";
    Config.SCREENING_RECORD_HISTORY = "/screening/record_history";
    Config.SCREENING_MEMBER_BETTING_INFO = "/screening/member_betting_info";
    Config.SCREENING_USER_BETTING_INFO = "/screening/user_betting_info";
    Config.ADMIN_SCREENING_DESC = "/admin/screening/desc";
    Config.TASK_DAILY = "/task/daily";
    Config.TASK_REWARD = "/task/reward";
    Config.TRANSFORM_COINS = "/transform/coins";
    Config.TRANSFORM_GOLDS = "/transform/golds";
    Config.TRANSFORM_CHARGE = "/transform/charge";
    Config.TRANSFORM_ADD = "/transform/add";
    Config.TRANSFORM_UPDATE = "/transform/update";
    Config.TRANSFORM_DELETE = "/transform/delete";
    Config.USER_REGISTER = "/user/register";
    Config.USER_PARITY = "/user/parity";
    Config.USER_LOGIN = "/user/login";
    Config.USER_CHECK_LOGIN = "/user/check_login";
    Config.USER_INFO = "/user/info";
    Config.ADMIN_USERS = "/admin/users";
    Config.ADMIN_USERS_BETTING = "/admin/users/betting";
    /**
     * 当前的接口地址
     * @type {string}
     */
    Config.CURRENT_URL = "";
    /**
     * 场次类型
     * low:初级
     * hight:高级
     */
    Config.SENIOR_LOW = "low";
    Config.SENIOR_HIGHT = "hight";
    /**
     * 后台设置的uid
     */
    Config.USER_UID = "73";
    /**
     * 获取用户信息所用的user_ids
     */
    Config.USER_IDS = "";
    /**
     * 获取openid
     */
    Config.OPENID = "san23dsa098dsa345";
    /**
     * 测试用的手机号码
     * @type {string}
     */
    Config.TEST_MOBILE = "13282131779";
    /**
     * 获取URL上的用户手机号码和code
     * @type {string}
     */
    Config.USER_MOBILE = new GetQueryString("mobile").QueryString;
    Config.USER_CODE = new GetQueryString("code").QueryString;
    /**
     * app后台请求方式
     * 操作类型 select 查询元宝数量 add 增加元宝数量 decrease 减少元宝数量
     * @type {{SELECT: string; ADD: string; DECREASE: string}}
     */
    Config.USER_OPST_TYPE_SELECT = "select";
    Config.USER_OPST_TYPE_ADD = "add";
    Config.USER_OPST_TYPE_DECREASE = "decrease";
    /**
     * app返回过来的用户信息
     * user_coin:金币数
     * user_gold:元宝数
     * user_message:返回消息
     * user_name:用户名
     * user_img_url:用户头像地址
     * user_rich_ranking:财富排行
     */
    Config.USER_COIN = 0;
    Config.USER_GOLD = 0;
    Config.USER_MESSAGE = "";
    Config.USER_NAME = "";
    Config.USER_IMG_URL = "";
    Config.USER_RICH_RANKING = 0;
    /**
     * 游戏后台接口
     * @type {string}
     */
    Config.GAME_SERVER_URL = "http://";
    /**
     * 请求结束后返回flag
     */
    Config.IS_REQUEST = false;
    /**
     * gameScene类中的当前窗口
     */
    Config.GAME_CURRENT_SCENE = null;
    /**
     * 主页子窗口是否弹起
     */
    Config.IS_HIDE_HOME_CHILDSCENE = true;
    /**
     * 在子菜单打开弹窗
     */
    Config.IS_CHILD_OPENSCENE = false;
    /**
     * 当前比赛是否开始的详情
     */
    Config.SCREENING_INFO_DATA = {};
    Config.ISNULL_INFO_DATA = true;
    /**
     * 判断什么场景调用马
     * false: 投注场景
     * true：比赛场景
     */
    Config.HORSE_SCENE = false;
    return Config;
}());
