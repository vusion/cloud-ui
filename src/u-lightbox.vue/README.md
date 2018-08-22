# 灯箱 Lightbox

## 示例
### 基本形式

``` vue
<template>
<div>
    <u-lightbox :visible.sync="visible" :closeButton="true">
        <u-lightbox-item title="图片预览"><img src="/cloud-ui/images/1.jpg" /></u-lightbox-item>
    </u-lightbox>
    <u-linear-layout>
        <u-button @click="visible = true">open LightBox</u-button>
    </u-linear-layout>
</div>
</template>
<script>
export default {
    data() {
        return {
            visible: false,
        };
    },
};
</script>
```

### 多图片

``` vue
<template>
<div>
    <u-lightbox :visible.sync="visible" :value.sync="showItem" animation="fade">
        <u-lightbox-item v-for="(image, index) in images" :key="index" :value="index" :title="image.title"><img :src="image.src" /></u-lightbox-item>
    </u-lightbox>
    <u-linear-layout>
        <img style="width: 300px;" v-for="(image, index) in images" :src="image.src"  @click="showLightbox(index)"/>
    </u-linear-layout>
</div>
</template>
<script>
export default {
    data() {
        return {
            visible: false,
            images: [{src:'/cloud-ui/images/1.jpg', title:'图片1'}, {src:'/cloud-ui/images/2.jpg', title: '图片2'}],
            showItem: 0,
        };
    },
    methods: {
        showLightbox(index) {
            this.visible = true;
            this.showItem = index;
        },
    },
};
</script>
```

## Lightbox API

### Attrs/Props

| Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| visible.sync | Boolean | `false` | 是否显示 |
| closeOnMask | Boolean | `true` | 是否可以点击遮罩层关闭灯箱 |
| closeButton | Boolean | `false` | 是否显示关闭按钮 |
| static | Boolean | `false` | 控制灯箱插入的位置，值为`false`时灯箱将插入至`document.body`，值为`true`时，灯箱节点位置保持不变 |
| loop | Boolean | `false` | 是否可循环播放灯箱内容 |
| animation | String |  | 动画可选值：`fade`，`zoom-out` |
| value.sync, v-model | Any |  | 当前选择的值 |
| zoomable | Boolean | `true` | 灯箱是否开启缩放功能（只有当灯箱内容为图片时有效） |
| zoomButton | Boolean | `true` | 是否显示缩放按钮（只有当`zoomable`为`true`时有效） |
| zoomWheel | Boolean | `true` | 是否允许滚动鼠标缩放（只有当`zoomable`为`true`时有效） |
| zoomMax | Integer/String | `'2000px'` | 设置最大放大宽度：类型为Integer时，表示灯箱最多放大次数。类型为String时，可以设置单位为`px`或者`%`。 |
| zoomMin | Integer/String | `'100px'` | 设置最小宽度：同上 |
| zoomRadio | Number | `0.1` | 每次放大缩小的比例 |

### Slots

#### (default)

插入 `<u-lightbox-item>` 组件。

### Events

#### @open

打开时触发

| Param | Type | Description |
| ----- | ---- | ----------- |

#### @before-close

关闭前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止关闭流程 |

#### @close

关闭时触发

| Param | Type | Description |
| ----- | ---- | ----------- |

#### @rotate

旋转时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| direction | String | `left`或`right` |

#### @zoom

缩放时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| direction | String | `in`放大或`out`缩小 |


## LightboxItem API

### Attrs/Props

| Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Integer | `0` | 当前项的值，该值必须是大于`0`的整数 |
| title | Stirng | `''` | 当前项的标题 |

### Slots

#### (default)

插入 `HTML` 。
