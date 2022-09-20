### 基本用法

``` html
<u-carousel>
</u-carousel>
```


``` html
<u-carousel>
     <u-carousel-item></u-carousel-item>
     <u-carousel-item></u-carousel-item>
</u-carousel>
```

### 数据源绑定
``` html
<u-carousel :data-source="[
    { src: 'https://static-vusion.163yun.com/assets/cloud-ui/1.jpg' },
    { src: 'https://static-vusion.163yun.com/assets/cloud-ui/2.jpg' },
    { src: 'https://static-vusion.163yun.com/assets/cloud-ui/3.jpg' },
]" img-field="src">
</u-carousel>
```

### 动画

``` html
<u-carousel>
    <u-carousel-item><img src="../../../assets/images/1.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/2.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/3.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/4.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/5.jpg"></u-carousel-item>
</u-carousel>
```

#### fade
``` html
<u-carousel animation="fade">
    <u-carousel-item><img src="../../../assets/images/1.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/2.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/3.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/4.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/5.jpg"></u-carousel-item>
</u-carousel>
```

### 自动播放与循环

通过`interval`来设置播放间隔。

``` html
<u-carousel :interval="1000">
    <u-carousel-item><img src="../../../assets/images/1.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/2.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/3.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/4.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/5.jpg"></u-carousel-item>
</u-carousel>
```

通过`autoplay`可以关闭自动播放。

``` html
<u-carousel :autoplay="false">
    <u-carousel-item><img src="../../../assets/images/1.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/2.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/3.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/4.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/5.jpg"></u-carousel-item>
</u-carousel>
```

通过`loop`可以关闭循环播放。

``` html
<u-carousel :autoplay="false" :loop="false">
    <u-carousel-item><img src="../../../assets/images/1.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/2.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/3.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/4.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/5.jpg"></u-carousel-item>
</u-carousel>
```
