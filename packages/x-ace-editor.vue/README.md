# XAceEditor

[![NPM Version](http://img.shields.io/npm/v/@cloud-ui/x-ace-editor.vue.svg?style=flat-square)](http://npmjs.org/package/@cloud-ui/x-ace-editor.vue)
[![Ace Version](https://img.shields.io/badge/ace-v1.2.9-blue?style=flat-square)](http://npmjs.org/package/brace)

## 安装

### NPM 安装

``` shell
npm i --save-dev @cloud-ui/x-ace-editor.vue
```

### 引入

``` js
import Vue from 'vue';
import XAceEditor from '@cloud-ui/x-ace-editor.vue';

Vue.component('x-ace-editor', XAceEditor);
```

或

``` js
import Vue from 'vue';
import { install } from 'vusion-utils';
import XAceEditor from '@cloud-ui/x-ace-editor.vue';

install(Vue, { XAceEditor });
```

## 示例
### 基本用法

``` html
<x-ace-editor></x-ace-editor>
```

### 设置语言

``` vue
<template>
<x-ace-editor v-model="value" lang="json"></x-ace-editor>
</template>
<script>
import 'brace';
import 'brace/mode/json';

export default {
    data() {
        return {
            value:
`{
    "name": "Alice",
    "age": 24,
    "phone": "18612345678"
}
`,
        };
    },
}
</script>
```

### 禁用

``` html
<x-ace-editor value="var i = 0;" disabled></x-ace-editor>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Any | | 当前选择的值 |
| lang | String | `'text'` | 设置语言 |
| theme | String | | 设置主题 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| options | Object |  | 配置项对象 |
| autofocus | Boolean | `false` | 默认focus状态 |
