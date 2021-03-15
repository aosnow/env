// ------------------------------------------------------------------------------
// name: console
// author: mudas( mschool.tech )
// created: 2019/12/10 20:31
// ------------------------------------------------------------------------------

import Vue from 'vue';
import VConsole from 'vconsole';

// 开发环境、正式环境默认不开启调试工具
// 正式环境可通过在 url 增加 __debug__ 启动参数来开启
window.vConsole = new VConsole();

// window 错误
window.addEventListener('error', (error) => {
  console.error(error);
}, true);

// VUE 错误
Vue.config.errorHandler = (error, vm, info) => {
  console.error(error);
};
