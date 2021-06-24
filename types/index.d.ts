// ------------------------------------------------------------------------------
// name: index.d
// author: mudas( mschool.tech )
// created: 2020/4/7
// ------------------------------------------------------------------------------

export declare interface EnvHolderType {

  ios?: boolean;
  iphone?: boolean;
  ipad?: boolean;
  android?: boolean;

  // 口碑 KoubeiClient
  koubei?: boolean;

  // 支付宝 AlipayClient
  // 口碑和支付宝 app 拥有共同的 AlipayClient 标识
  // 若已经判定属于口碑环境，则无需判定支付宝环境
  alipay?: boolean;

  // 微信 MicroMessenger
  wechat?: boolean;

  // 钉钉 DingTalk
  ding?: boolean;

  // QQ 浏览器 MQQBrowser
  qbrowser?: boolean;

  // 浏览器语言环境（用以支持多语言国际化）
  language?: string;

  // 调试环境或其它未知环境（当以上环境都无效时的环境）
  unknow?: boolean;

  // 是否小程序 web-view 环境
  miniProgram?: boolean;
}

/**
 * 硬件和应用环境检测
 * @param {Object} holder
 * @return {EnvHolderType}
 */
export function parsingUserAgent(holder?: Object): EnvHolderType;

/**
 * 检测是否为小程序环境（异步方式）
 * @param {Object} holder
 * @return {Promise<{wechatApplet:boolean,alipayApplet:boolean}>}
 */
export function parsingApplet(holder?: Object): Promise<{ wechatApplet: boolean, alipayApplet: boolean }>;

/**
 * 检测收集 url 参数集合
 * - 此方法会同时收集 hash 和 search 中的 query 参数并合并返回。
 * @param {URL|object} [target=window.location] 目标URL对象（window.location 或者 URL 对象、包含 search、hash 的对象）
 * @return {Object}
 */
export function parsingURLParams(target?: URL | object): Object;
