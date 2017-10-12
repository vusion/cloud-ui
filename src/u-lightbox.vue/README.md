# 灯箱（Lightbox）

## 示例
### 基本形式

``` html
<template>
<div>
    <u-lightbox title="图片预览" :visible.sync="visible1">
        <img src="/images/1.jpg" />
    </u-lightbox>
    <u-linear-layout>
        <u-button @click="visible1 = true">Lightbox</u-button>
    </u-linear-layout>
</div>
</template>
<script>
export default {
    data() {
        return {
            visible1: false,
            visible2: false,
            visible3: false,
        };
    },
};
</script>
```

### Static

``` html
<u-lightbox visible static :maskClose="false">
    <video controls style='width: 640px; height: 360px; display: block;'
        poster='http://www.html5videoplayer.net/poster/big_buck_bunny.jpg'
        src='http://www.html5videoplayer.net/videos/big_buck_bunny.mp4'></video>
</u-lightbox>
```

### 关闭按钮

``` html
<u-lightbox closeButton :maskClose="false" visible static>
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
