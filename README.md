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

## Development

### npm install

安装

### npm run dev

开发

### npm run build:docs

构建文档

需要先`npm run build`和`npm run build:theme`

### npm run build:doc-entry

构建用于物料体系的文档入口。

### npm run deploy 发布联调/测试环境

将 `dist-theme/` 、 `screenshots` 和 `drawings` 下的文档发布到 NOS

### npm publish 发布正式 npm 包（线上环境）

脚本会自动执行 deploy:online 等将 `dist-theme/` 、 `screenshots` 和 `drawings` 下的文档发布到 NOS

### npm run deploy:doc-entry

将`dist-doc-entry/`下的文档入口发布到 NOS

### upload single screenshot

```sh
yarn run build:docs
node bin/screenshot u-button
npm run deploy:screenshots u-button
```

### 设计图片

存储在 drawings 里面

## Publish

```
vusion publish
```

usage.json 在低代码平台上登记。

## Changelog

See [Releases](https://github.com/vusion/cloud-ui/releases)

## Contributing

See [Contributing Guide](https://github.com/vusion/DOCUMENTATION/issues/8)

## License

[MIT](LICENSE)
