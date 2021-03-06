// ------------------------------------------------------------------------------
// name: string.repeat
// author: 喵大斯( mschool.tech )
// created: 2019/6/26 21:04
// ------------------------------------------------------------------------------

/**
 * 硬件和应用环境检测
 * @param {Object} holder
 * @return {EnvHolderType}
 */
export function parsingUserAgent(holder = null) {
  /*
    微信：
    --------------------------------------------------------------------
    IOS: Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X)
    AppleWebKit/605.1.15 (KHTML, like Gecko)
    Mobile/15E148
    MicroMessenger/7.0.8(0x17000820) NetType/WIFI Language/zh_CN
    -----
    Android: Mozilla/5.0 (Linux; Android 8.1.0; Redmi 6 Pro Build/OPM1.171019.019; wv)
    AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045008
    Mobile Safari/537.36 MMWEBID/1612
    MicroMessenger/7.0.8.1540(0x27000834) Process/tools NetType/WIFI Language/zh_CN ABI/arm64

    口碑：
    --------------------------------------------------------------------
    IOS: Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X)
    AppleWebKit/605.1.15 (KHTML, like Gecko)
    Mobile/16G102 ChannelId(15) NebulaSDK/1.8.100112 Nebula WK PSDType(1)
    AlipayDefined(nt:WIFI,ws:414|672|3.0) AliApp(KB/7.1.80.557)
    AlipayClient/10.1.78 KoubeiClient/7.1.80.557 Alipay
    -----
    Android: Mozilla/5.0 (Linux; U; Android 8.1.0; zh-CN; Redmi 6 Pro Build/OPM1.171019.019)
    AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/69.0.3497.100 UWS/3.20.0.32
    Mobile Safari/537.36 UCBS/3.20.0.32_191012190528 ChannelId(1) NebulaSDK/1.8.100112 Nebula
    KoubeiDefined(nt:WIFI,ws:393|782|2.75) KoubeiDefined(nt:WIFI,ws:393|782|2.75)
    AlipayClient AliApp(KB/7.1.82) KoubeiClient/7.1.82 Language/zh-Hans
    AlipayClient/10.1.82 useStatusBar/true isConcaveScreen/true AlipayDefined(nt:WIFI,ws:393|782|2.75)

    支付宝：
    --------------------------------------------------------------------
    IOS: Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X)
    AppleWebKit/605.1.15 (KHTML, like Gecko)
    Mobile/16G102 ChannelId(3) NebulaSDK/1.8.100112 Nebula WK PSDType(1)
    AlipayDefined(nt:WIFI,ws:414|672|3.0) AliApp(AP/10.1.79.6010)
    AlipayClient/10.1.79.6010 Alipay Language/zh-Hans Region/CN
    -----
    Android: Mozilla/5.0 (Linux; U; Android 8.1.0; zh-CN; Redmi 6 Pro Build/OPM1.171019.019)
    AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/69.0.3497.100 UWS/3.20.0.37
    Mobile Safari/537.36 UCBS/3.20.0.37_191118094059 ChannelId(1) NebulaSDK/1.8.100112 Nebula
    AlipayDefined(nt:WIFI,ws:393|0|2.75) AliApp(AP/10.1.80.8050)
    AlipayClient/10.1.80.8050 Language/zh-Hans useStatusBar/true isConcaveScreen/true Region/CN

    钉钉：
    --------------------------------------------------------------------
    IOS: Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X)
    AppleWebKit/605.1.15 (KHTML, like Gecko)
    Mobile/15E148
    AliApp(DingTalk/4.7.15) com.laiwang.DingTalk/12191012 Channel/201200 language/zh-Hans-CN UT4Aplus/0.0.6 WK
    -----
    Android: Mozilla/5.0 (Linux; U; Android 8.1.0; zh-CN; Redmi 6 Pro Build/OPM1.171019.019)
    AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108
    UCBrowser/11.9.4.974 UWS/2.13.2.90
    Mobile Safari/537.36
    AliApp(DingTalk/4.7.16) com.alibaba.android.rimet/12298867 Channel/700159 language/zh-CN UT4Aplus/0.2.25

    QQ 浏览器：
    --------------------------------------------------------------------
    IOS: Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X)
    AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0
    MQQBrowser/9.8.2 Mobile/15E148 Safari/604.1 QBWebViewUA/2 QBWebViewType/1 WKType/1
    -----
    Android: Mozilla/5.0 (Linux; U; Android 8.1.0; zh-cn; Redmi 6 Pro Build/OPM1.171019.019)
    AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126
    MQQBrowser/9.8 Mobile Safari/537.36
   */

  const { navigator } = window;
  const agent = navigator.userAgent;
  const result = holder || Object.create(null);

  result.ios = /Mac\s*OS/i.test(agent);
  result.iphone = /iPhone/i.test(agent);
  result.ipad = /iPad/i.test(agent);
  result.android = /Android/i.test(agent);

  // 口碑 KoubeiClient
  result.koubei = /KoubeiClient/i.test(agent);

  // 支付宝 AlipayClient
  // 口碑和支付宝 app 拥有共同的 AlipayClient 标识
  // 若已经判定属于口碑环境，则无需判定支付宝环境（即此情况下支付宝必定 false）
  result.alipay = result.koubei ? false : /AlipayClient/i.test(agent);

  // 钉钉 DingTalk
  result.ding = /DingTalk/i.test(agent);

  // 微信 MicroMessenger
  result.wechat = /MicroMessenger/i.test(agent);

  // QQ 浏览器 MQQBrowser
  result.qbrowser = /MQQBrowser/i.test(agent);

  // 浏览器语言环境（用以支持多语言国际化）
  result.language = navigator.language || navigator.userLanguage || navigator.browserLanguage;

  // 调试环境或其它未知环境（当以上环境都无效时的环境）
  result.unknow = !result.koubei && !result.alipay && !result.ding && !result.wechat && !result.qbrowser;

  // 小程序环境检测
  // 从微信7.0.0开始，可以通过判断userAgent中包含miniProgram字样来判断小程序web-view环境。
  // https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html#相关接口-5
  // https://opendocs.alipay.com/mini/component/web-view#%E5%B1%9E%E6%80%A7%E8%AF%B4%E6%98%8E
  result.miniProgram = /miniProgram/i.test(agent); // 支付宝或微信环境（支付宝小程序开发工具似乎无效）

  return result;
}

/**
 * 检测是否为小程序环境（使用 getEnv() 方法）
 * @param {Object} holder
 * @return {Promise<{wechatApplet:boolean,alipayApplet:boolean}>}
 */
export function parsingApplet(holder = null) {
  return new Promise(resolve => {
    const env = holder || Object.create(null);

    env.wechatApplet = false;
    env.alipayApplet = false;

    // 检测小程序环境
    // 需要 H5 SDK 加载之后才能生效
    // 支付宝小程序：https://appx/web-view.min.js
    // 微信小程序：https://res.wx.qq.com/open/js/jweixin-1.3.2.js

    const { wx, my } = window;

    // 若为微信APP浏览器环境，检测是否为小程序
    if (wx) {
      wx.miniProgram.getEnv((res) => {
        env.wechatApplet = !!res.miniprogram || !!res.miniProgram;
        resolve(env);
      });
    }
    // 若为支付宝APP浏览器环境，检测是否为小程序
    else if (my) {
      my.getEnv((res) => {
        env.alipayApplet = !!res.miniprogram || !!res.miniProgram;
        resolve(env);
      });
    }
    else {
      resolve(env);
    }
  });
}
