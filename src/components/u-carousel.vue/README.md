<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UCarousel 幻灯片

- [示例](#示例)
    - [基本用法](#基本用法)
    - [动画](#动画)
    - [自动播放与循环](#自动播放与循环)
- [UCarousel API](#ucarousel-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
    - [Methods](#methods)
- [UCarouselItem API](#ucarouselitem-api)
    - [Props/Attrs](#propsattrs-2)
    - [Slots](#slots-2)

**Display**

动态播放内部内容

## 示例
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

``` html
<u-carousel>
    <u-carousel-item><img src="../../../assets/images/1.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/2.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/3.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/4.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/5.jpg"></u-carousel-item>
</u-carousel>
```

### 动画
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

## UCarousel API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| loop | boolean |  | `true` | 是否循环播放 |
| direction | string |  | `'right'` | 幻灯片播放方向 |
| animation | string |  |  | 幻灯片过渡动画 |
| data-source | Array\<Item\> \| Function |  |  | 展示数据的输入源，可设置为集合类型变量（List<T>）或输出参数为集合类型的逻辑。 |
| data-schema | schema |  |  | 数据源返回的数据结构的类型，自动识别类型进行展示说明 |
| value.sync | any |  |  | 播放位置 |
| autoplay | boolean |  | `true` |  |
| interval | number |  | `4000` | 单位：毫秒，幻灯片切换时间，如果设置值小于动画时长，会在动画完成后切换 |

### Slots

#### (default)

插入`<u-carousel-item>`子组件。

#### item

自定义选项的结构和样式

### Events

#### @before-select

选择某一页前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | any | 选中项的值 |
| $event.oldValue | any | 旧的值 |
| $event.itemVM | UCarouselItem | 选中项实例 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | UCarousel | 发送事件实例 |

#### @select

选择某一页时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | any | 选中项的值 |
| $event.oldValue | any | 旧的值 |
| $event.itemVM | UCarouselItem | 选中项实例 |
| senderVM | UCarousel | 发送事件实例 |

#### @before-load

加载前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.preventDefault | Function | 阻止加载流程 |
| senderVM | UTableView | 发送事件实例 |

#### @load

加载后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | null | 无 |
| senderVM | UTableView | 发送事件实例 |

Methods

#### reload()

清除缓存，重新加载

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

## UCarouselItem API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  | 该项的标题 |
| value | any |  |  | 该项的值 |

### Slots

#### (default)

插入文本或 HTML。

#### title

自定义标题文本。

