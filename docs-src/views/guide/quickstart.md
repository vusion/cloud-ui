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
installComponents(CloudUI, Vue); // 全局注册组件库
```

如果您想对组件进行样式或逻辑上的修改，请查看Vusion文档中的 [组件的扩展和继承](https://vusion.github.io/guides/components)。

### 示例

```vue
<template>
<div>
    <u-modal :visible.sync="modalVisible" mask-close title="提示">
        <span>内容</span>
    </u-modal>
    <u-button @click="open()">Open</u-button>
</div>
</template>

<script>
import { Modal } from 'library';
export default {
    data() {
        return {
            modalVisible: false,
        };
    },
    methods: {
        open() {
            Modal.alert('Welcome to use Cloud UI !');
        }
    }
};
</script>

```