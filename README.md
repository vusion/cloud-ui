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

### npm run deploy:dev 发布联调环境 NOS

将 `dist-theme/` 、 `screenshots` 和 `drawings` 下的文档发布到 NOS

### npm run deploy:test 发布测试环境 NOS

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

## 测试

本工程已经完成基于 Jest + Vue Test Utils 配置

```
npm test
```

在提 PR 和发布之前都会自动运行测试，保证可靠性。

### 快照测试

基于组件 `docs/*.md` 内的代码自动生成 Demo，对渲染后的 DOM 结构进行对比完成快照测试。

如果快照测试失败，请检查 DOM 结构变更是否符合预期：

* 如果不符合预期，请检查并修改组件源码，否则本次变更可能引入 bug。
* 如何符合预期，例如对文案或者组件结构进行了修改，可以运行以下命令更新快照：

```
npm test -- -u ${组件名称(例如u-button)}
```

更新后的快照文件请提交到 Git。

### 单元测试

在组件的 `__tests__` 目录中新建文件编写。

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

## Test environment

deploy:inlcap
