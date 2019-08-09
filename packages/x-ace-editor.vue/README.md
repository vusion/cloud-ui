# XAceEditor

## 示例
### 基本形式

``` html
<x-ace-editor></x-ace-editor>
```

### 设置语言

``` vue
<template>
<x-ace-editor v-model="value" lang="json"></x-ace-editor>
</template>
<script>
import 'brace/mode/json';
import 'brace/theme/monokai';

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
