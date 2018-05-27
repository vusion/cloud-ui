# 计数器

## 示例
### 基本形式

``` html
<u-counter animation="scroll"></u-counter>
```

### 前缀，后缀
``` html
<u-counter animation="scroll" prefix="$" suffix=".00"></u-counter>
```

### 分组
``` html
<u-counter animation="scroll" :end="5432" is-group></u-counter>
```

### 小数
``` html
<u-counter animation="flip" :end="10" :decimals="2"></u-counter>
```

### 缓动
``` vue
<template>
    <div>
        <u-counter animation="scroll" :auto-start="autoStart" :duration="duration" @change="change"></u-counter>
        <u-button @click="start">开始</u-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            duration: 200,
            autoStart: false,
        };
    },
    methods: {
        change(e) {
            const number = e.value / 10;
           this.duration = Math.pow(1.8, number) + 19;
        },
        start() {
            this.autoStart = true;
        },
    },
};
</script>
```

## Counter API

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| start | Number | `0` | 开始值 |
| end | Number | `100` | 结束值 |
| autoStart| Boolean | `true` | 是否开始计数 |
| isReset| Boolean | `false` | 是否重置 |
| prefix| String | `''` | 前缀内容 |
| suffix| String | `''` | 后缀内容 |
| isGroup| Boolean | `false` | 是否分组 |
| separator | String | `','` | 分隔符 |
| decimals| Number | `0` | 小数点个数 |
| duration | Number | `200` | 动画时间，默认单位是`'ms'` |
| direction | String | `'up'` | 当前翻动方向，可选值有`''up`，`'down'` |
| animation | String | `''` | 动画方式，可选值有`''`，`'scroll'`，`'flip'`，`'flipHalf'`|
| speed | String | `'linear'` | 动画速度方式，和css的动画方式参数一样 |

### Slots

| Slot | Description |
| ---- | ----------- |
| prefix| 自定义前缀内容 |
| suffix| 自定义后缀内容 |

#### @change

输入时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Number | 当前计数器的值 |
