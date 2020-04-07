<template>
  <div id="app">
    <el-page-header title="返回" content="测试"></el-page-header>

    <div>{{env}}</div>

  </div>
</template>

<script>
import { parsingUserAgentEnv, parsingAppletEnv, parsingURLParams } from '@mudas/env';

export default {
  name: 'app',
  mixins: [],

  data() {
    return {
      env: ''
    };
  },

  created() {
    parsingAppletEnv({ ...parsingUserAgentEnv(), ...parsingURLParams() }).then((data) => {
      this.env = data;
    });
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

.el-form {
  width: 50%;
  min-width: 200px;
  max-width: 500px;
}
</style>
