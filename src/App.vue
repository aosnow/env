<template>
  <div id="app">
    <el-page-header title="返回" content="测试"></el-page-header>

    <pre>{{env}}</pre>

  </div>
</template>

<script>
import { parsingUserAgent, parsingApplet, parsingURLParams } from '@mudas/env';

export default {
  name: 'app',
  mixins: [],

  data() {
    return {
      env: ''
    };
  },

  created() {
    console.warn(window.navigator.userAgent);

    if (!window.WeixinJSBridge || !window.WeixinJSBridge.invoke) {
      document.addEventListener('WeixinJSBridgeReady', this.ready, false);
    }
    else {
      this.ready();
    }

    parsingApplet({ ...parsingUserAgent(), ...parsingURLParams() }).then((data) => {
      this.env = data;
      console.warn(data);
    });
  },

  methods: {
    // web-view下的页面内
    ready() {
      console.log(window.__wxjs_environment, window.__wxjs_environment === 'miniprogram'); // true
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 50px;
}
</style>
