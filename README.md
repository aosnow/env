# env
[![npm version](https://img.shields.io/npm/v/@mudas/env.svg)](https://www.npmjs.org/package/@mudas/env)

> A plugin that supports Vue to dispatch global events.

## Setup
install：
```npm
npm i @mudas/env -S
```

You need to add configuration for vue-cli to correctly translate the es module in node_modules:
```js
// vue.config.js:
module.exports = {
    transpileDependencies: [
      '@mudas/*' // all of node_module for '@mudas'
    ]
}
```


### Usage	

```js
import { parsingUserAgentEnv, parsingAppletEnv, parsingURLParams } from '@mudas/env';

// Applet ENV
parsingAppletEnv({ ...parsingUserAgentEnv(), ...parsingURLParams() }).then((data) => {
    // ... return types/EnvHolderType & { wechatApplet:boolean, alipayApplet:boolean }
});

```
