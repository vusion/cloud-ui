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
``` shell
npm install --save cloud-ui.vusion vusion-utils
```

## QuickStart

``` javascript
import Vue from 'vue';
import * as CloudUI from 'cloud-ui.vusion';
import { installComponents } from 'vusion-utils';
installComponents(CloudUI, Vue);
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
