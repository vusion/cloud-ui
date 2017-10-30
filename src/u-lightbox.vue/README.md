# 灯箱（Lightbox）

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
<u-lightbox visible static :maskClose="false" style="height: 400px;"> 
    <video controls style='width: 640px; height: 360px; display: block;'
        poster='http://www.html5videoplayer.net/poster/big_buck_bunny.jpg'
        src='http://www.html5videoplayer.net/videos/big_buck_bunny.mp4'></video>
</u-lightbox>
```

### 关闭按钮

``` html
<u-lightbox visible static closeButton :maskClose="false" style="height: 450px;">
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
