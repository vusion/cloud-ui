# 选择扩展 Tag

## 示例
### 基本形式

``` html
<u-tag>标签一</u-tag>
```

### 类型

``` html
<u-linear-layout>
    <u-tag type="gray">gray</u-tag>
    <u-tag type="primary">primary</u-tag>
    <u-tag type="success">success</u-tag>
    <u-tag type="warning">warning</u-tag>
    <u-tag type="error">error</u-tag>
</u-linear-layout>
```

### 可删除

``` html
    <u-tag closeable>标签一</u-tag>
```

### 方法
``` vue
<template>
<u-tag :color="color" closeable @close="close">{{text}}</u-tag>
</template>

<script>
export default {
    data() {
        return {
            text: '标签一',
            color: '#ff4949',
        };
    },
    methods: {
        close() {
            console.log('close');
        },
    },
};
</script>
```

## TableView API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| closeable | Boolean |  | 控制是否可关闭 |
| color | String |  | 控制背景颜色 |
| type | String |  | 类型选择，值有`primary`, `gray`, `success`, `warning`, `error` |

### Slots

#### (default)

### Events

#### @close

点击关闭icon触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| event | Object | 事件对象 |

