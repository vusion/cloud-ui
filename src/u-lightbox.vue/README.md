# 灯箱 Lightbox

## 示例
### 基本形式
#### 灯箱包含单个元素

``` vue
<template>
<div>
    <u-lightbox :visible.sync="visible">
        <u-lightbox-item title="图片预览"><img src="/images/1.jpg" /></u-lightbox-item>
    </u-lightbox>
    <u-linear-layout>
        <u-button @click="visible = true">Open Lightbox</u-button>
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

#### 灯箱包含多个元素

``` vue
<template>
<div>
    <u-lightbox :visible.sync="visible" :index="showItem" animation="fade">
        <u-lightbox-item v-for="(image, index) in images" :title="image.title"><img :src="image.src" /></u-lightbox-item>
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
            images: [{src:'/images/1.jpg', title:'图片1'}, {src:'/images/2.jpg', title: '图片2'}],
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

### Static

``` html
<u-lightbox visible static :maskClose="false" style="position:static; height: 400px;" :zoomShowButton="false"> 
    <video controls style='width: 640px; height: 360px; display: block;'
        poster='http://www.html5videoplayer.net/poster/big_buck_bunny.jpg'
        src='http://www.html5videoplayer.net/videos/big_buck_bunny.mp4'></video>
</u-lightbox>
```

### 关闭按钮和放大缩小按钮

``` html
<u-lightbox visible static closeButton :maskClose="false" style="position:static; height: 480px;">
    <img src="/images/2.jpg" />
</u-lightbox>
```
## API

### Attrs/Props

| Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | `''` | 内容标题 |
| visible.sync | Boolean | `false` | 是否显示 |
| maskClose | Boolean | `true` | 点击遮罩层关闭灯箱 |
| closeButton | Boolean | `false` | 是否显示关闭按钮 |
| loop | Boolean | `false` | 是否可循环播放灯箱内容 |
| animation | String | `''` | 动画（可选fade/zoom-out） |
| index | Integer | 0 | 设置显示第index+1个灯箱内容 |
| initMaxWidth | Number | 0.67 | 灯箱最大初始值。表示视窗百分比。 |
| initMaxHeight | Number | 0.75 | 灯箱最大初始值。表示视窗百分比。 |
| canZoom | Boolean | true | 灯箱是否开启缩放功能（只有当灯箱内容为图片时有效） |
| zoomShowButton | Boolean | true | 是否显示缩放按钮（只有当zoom为true时有效） |
| zoomAllowWheel | Boolean | true | 是否允许滚动鼠标缩放（只有当zoom为true时有效） |
| zoomCanZoomin | Boolean | true | 灯箱是否开启放大功能（只有当zoom为true时有效） |
| zoomCanZoomout | Boolean | true | 灯箱是否开启缩小功能（只有当zoom为true时有效） |
| zoomMaxZoomin | Integer | 5 | 灯箱最大放大次数 |
| zoomMaxZoomout | Integer | 5 | 灯箱最多缩小次数 |
| zoomRadio | Number | 0.1 | 每次放大缩小的比例 |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | 灯箱内容 |

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
