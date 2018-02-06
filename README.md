# Vusion Cloud UI

[![NPM Version][npm-img]][npm-url]
[![Dependencies][david-img]][david-url]
[![NPM Download][download-img]][download-url]

[npm-img]: http://img.shields.io/npm/v/cloud-ui.vusion.svg?style=flat-square
[npm-url]: http://npmjs.org/package/cloud-ui.vusion
[david-img]: http://img.shields.io/david/vusion/cloud-ui.svg?style=flat-square
[david-url]: https://david-dm.org/vusion/cloud-ui
[download-img]: https://img.shields.io/npm/dm/cloud-ui.vusion.svg?style=flat-square
[download-url]: https://npmjs.org/package/cloud-ui.vusion


## Install
```shell
npm install cloud-ui.vusion -S
```

## Quick Start
推荐使用方式首先创建一个library.js文件，主要是用来将cloud-ui插件化
``` javascript
import * as CloudUI from 'cloud-ui.vusion';
// 自定义组件 继承组件的同时，做一些自定义的处理
import Button from './common/u-button.vue';

const Components = Object.assign({}, cloudUI, {
    Button,
});
delete Components.default;

export default {
    install(Vue) {
        for (const key in Components)
            Vue.component(Components[key].name, Components[key]);
    }
}
```
在项目的index.js文件中引入library.js文件，当做插件使用即可；
``` javascript
import Library from './library';
Vue.use(Library);
```

## Development

``` shell
npm install
npm install -g vusion-cli
docs-src/dev
```

其他主题：

``` shell
npm install
npm install -g vusion-cli
docs-src/dev -t seagreen
```

要在打开的浏览器中设置一下localStorage：

``` javascript
localStorage.setItem('theme', 'seagreen');
location.reload();
```

## Build

``` shell
docs-src/build
```

## Publish

``` shell
docs-src/build
vusion publish -p cloud-ui
```
