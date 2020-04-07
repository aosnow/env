// ------------------------------------------------------------------------------
// name: index.d
// author: mudas( mschool.tech )
// created: 2020/4/7
// ------------------------------------------------------------------------------

export declare interface EnvHolderType {

  ios:boolean;
  iphone:boolean;
  ipad:boolean;
  android:boolean;

  // 口碑 KoubeiClient
  koubei:boolean;

  // 支付宝 AlipayClient
  // 口碑和支付宝 app 拥有共同的 AlipayClient 标识
  // 若已经判定属于口碑环境，则无需判定支付宝环境
  alipay:boolean;

  // 微信 MicroMessenger
  wechat:boolean;

  // 钉钉 DingTalk
  ding:boolean;

  // QQ 浏览器 MQQBrowser
  qbrowser:boolean;

  // 浏览器语言环境（用以支持多语言国际化）
  language:string;

  // 调试环境或其它未知环境（当以上环境都无效时的环境）
  unknow:boolean;
}

/**
 * 硬件和应用环境检测
 * @param {Object} holder
 * @return {EnvHolderType}
 */
export function parsingUserAgentEnv(holder?:Object):EnvHolderType;

/**
 * 检测是否为小程序环境（异步方式）
 * @param {Object} holder
 * @return {Promise<{wechatApplet:boolean,alipayApplet:boolean}>}
 */
export function parsingAppletEnv(holder?:Object):Promise<{ wechatApplet:boolean, alipayApplet:boolean }>;

/**
 * 检测收集 url 参数集合
 * @return {Object}
 */
export function parsingURLParams():Object;
