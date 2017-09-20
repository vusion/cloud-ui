# 轮播图（Carousel）

## 示例
### 基本形式

``` html
<u-carousel :index="3" :autoPlay="false">
    <u-carousel-item><img src="/images/1.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/2.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/3.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/4.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/5.jpg"></u-carousel-item>
</u-carousel>
```
### 动画
#### fade
``` html
<u-carousel animation="fade">
    <u-carousel-item><img src="/images/1.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/2.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/3.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/4.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/5.jpg"></u-carousel-item>
</u-carousel>
```
#### scroll
``` html
<u-carousel animation="scroll">
    <u-carousel-item><img src="/images/1.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/2.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/3.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/4.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/5.jpg"></u-carousel-item>
</u-carousel>
```
#### swipe
``` html
<u-carousel animation="swipe">
    <u-carousel-item><img src="/images/1.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/2.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/3.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/4.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/5.jpg"></u-carousel-item>
</u-carousel>
```
#### zoom-in
``` html
<u-carousel animation="zoom-in">
    <u-carousel-item><img src="/images/1.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/2.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/3.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/4.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/5.jpg"></u-carousel-item>
</u-carousel>
```
#### zoom-out
``` html
<u-carousel animation="zoom-out">
    <u-carousel-item><img src="/images/1.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/2.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/3.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/4.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/5.jpg"></u-carousel-item>
</u-carousel>
```
#### kenburns
``` html
<u-carousel animation="kenburns">
    <u-carousel-item><img src="/images/1.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/2.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/3.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/4.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/5.jpg"></u-carousel-item>
</u-carousel>
```
#### slice-down
``` html
<u-carousel animation="slice-down">
    <u-carousel-item><img src="/images/1.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/2.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/3.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/4.jpg"></u-carousel-item>
    <u-carousel-item><img src="/images/5.jpg"></u-carousel-item>
</u-carousel>
```
## Options

| Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| animation | String | '' | 幻灯片过渡动画 |
| width | Number | 700 | 幻灯片宽度 |
| height | Number | 420 | 幻灯片高度 |
| index | Number | 0 | 轮播起始 |
| autoPlay | Boolean | true | 是否自动播放幻灯片 |
| autoplayInterval | Number | 4000 | 幻灯片切换时间，如果设置值小于动画时长，会在动画完成后切换 |
| autoplayDirection | String | right | 幻灯片播放方向 |
| colume | Number | 14 | 动画为slice时，图片分割列数 |
| pauseOnHover | Boolean | true | 鼠标悬停是否暂停自动播放 |
| showButtonOnHover | Boolean | true | 鼠标悬停才显示上/下按钮 |


