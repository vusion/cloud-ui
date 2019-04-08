# 气泡提示 Popover

## 示例
### 基本形式

#### 声明式
``` vue
<template>
    <u-popover trigger="click" content="内容" placement="bottom" :style-object="styleObject">
        <u-button>click 激活</u-button>
    </u-popover>
</template>
<script>
export default {
    data() {
        return {
            styleObject: {
                padding: 0,
            }
        }
    }
};
</script>
```
``` html
<u-popover trigger="hover" content="内容" placement="top-start">
    <u-button>hover 激活</u-button>
</u-popover>
```

``` html
<u-popover trigger="click" message="内容" placement="top-start" confirm>
    <u-button>click 激活</u-button>
</u-popover>
```

## Popover API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| trigger | String | `click` | 触发方式,可填click,click |
| placement | String | `bottom` | 和popper组件的属性一样 |
| confirm | Boolean | `false` | 确认提示样式 |
| confirmOk | String | `确定` | 确定按钮文本 |
| confirmCancel | String | `取消` | 取消按钮文本 |
| message | String |  | 配合confirm属性使用，提示文本 |
| title | String |  | 默认提示标题 |
| content | String |  | 默认提示文本 |
### Slots

#### (default)

在插槽中插入reference元素

#### (confirm)

在插槽中插入confirm自定义内容

#### (title)

在插槽中插入自定义标题内容

#### (content)

在插槽中插入自定义内容