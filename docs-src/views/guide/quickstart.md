# 快速开始

### 安装

使用npm安装组件库 `cloud-ui.vusion`, 推荐安装 `vusion-utils` 可以方便的在全局安装组件库、组件、过滤器等。

``` shell
npm install --save cloud-ui.vusion vusion-utils
```

### 使用

``` javascript
import Vue from 'vue';
import * as CloudUI from 'cloud-ui.vusion';
import { installComponents } from 'vusion-utils';
installComponents(CloudUI, Vue);
```

如果您想对组件进行样式或逻辑上的修改，请查看Vusion文档中的 [组件的扩展和继承](https://vusion.github.io/guides/components)。