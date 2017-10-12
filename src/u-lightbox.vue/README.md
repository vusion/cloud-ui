# 灯箱（Lightbox）

## 示例
### 基本形式

#### 声明式


``` html
<template>
<div>
<u-linear-layout>
    <u-button @click="lightboxVisible1 = true">Lightbox</u-button>
    <u-button @click="lightboxVisible2 = true">Lightbox</u-button>
    <u-button @click="lightboxVisible3 = true">Lightbox show video</u-button>
</u-linear-layout>
<u-lightbox title="图片预览" :visible.sync="lightboxVisible1">
    <img src="/images/1.jpg" />
</u-lightbox>
<u-lightbox :visible.sync="lightboxVisible2" closeButton :maskClose="false">
    <img src="/images/2.jpg" />
</u-lightbox>
<u-lightbox :visible.sync="lightboxVisible3">
    <video controls style='width: 640px; height: 360px; display: block;'
        poster='http://www.html5videoplayer.net/poster/big_buck_bunny.jpg'
        src='http://www.html5videoplayer.net/videos/big_buck_bunny.mp4'></video>
</u-lightbox>
</div>
</template>
<script>
export default {
    data() {
        return {
            lightboxVisible1: false,
            lightboxVisible2: false,
            lightboxVisible3: false,
        };
    },
};
</script>
```
## Options

| Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | '' | 内容标题 |
| maskClose | Boolean | true | 点击遮罩层，是否关闭灯箱 |
| closeButtom | Boolean | false | 是否显示关闭按钮 |
| visible | Boolean | false | 是否显示 |

## Events

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