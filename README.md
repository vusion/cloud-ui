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
npm install --save cloud-ui.vusion
```

## QuickStart

``` javascript
import Vue from 'vue';
import * as CloudUI from 'cloud-ui.vusion/dist';
import 'cloud-ui.vusion/dist/index.css';
// 如需引入其他主题，将上面的路径替换为如下不同的主题样式
// import 'cloud-ui.vusion/dist/theme-dark.css';

Vue.use(CloudUI); // 全局安装组件库中的组件、指令等
```

## Migration

### migrate

替换老代码

``` shell
migrate ./src
```

### findExtends

``` shell
findExtends ./src
```

查找有多少同名组件

### findByRE

通过正则表达式查找

``` shell
findByRE ./src '<u-input[\s\S]{0,300}close'
```

### checkWatcher

查找 watch properties

## Development

### Install

```
npm install -g vusion-cli
npm install
```

### Build dist

```
npm run build
```

### Develop docs

``` shell
vusion doc
```

如需不同的主题

``` shell
vusion doc -t dark
```

### Build docs

```
npm run doc-build
```

## Changelog

See [Releases](https://github.com/vusion/proto-ui/releases)

## Contributing

See [Contributing Guide](https://github.com/vusion/DOCUMENTATION/issues/8)

## License

[MIT](LICENSE)
