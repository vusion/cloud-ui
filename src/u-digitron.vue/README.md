# Digitron

## 示例

### 基本形式

``` vue
<template>
    <div>
        <u-digitron :digit="digit"></u-digitron>
        <u-digitron animation="scroll" :digit="digit"></u-digitron>
        <u-digitron animation="scroll" direction="down" :digit="digit"></u-digitron>
        <u-digitron animation="flip" direction="up" :digit="digit"></u-digitron>
        <u-digitron animation="flip" direction="down" :digit="digit"></u-digitron>
        <u-digitron animation="flipHalf" direction="up" :digit="digit"></u-digitron>
        <u-digitron animation="flipHalf" direction="down" :digit="digit"></u-digitron>
        <u-button @click="change">change</u-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            digit: 0,
        };
    },
    methods: {
        change() {
            if (this.digit === 10)
                this.digit = 0;
            else
                this.digit++;
        },
    },
};
</script>
```

## Digitron API

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| digit | Number | `0` | 当前线束数值 |
| duration | Number | `200` | 动画时间 |
| direction | String | `'up'` | 当前翻动方向，可选值有`''up`，`'down'` |
| animation | String | `''` | 动画方式，可选值有`''`，`'scroll'`，`'flip'`，`'flipHalf'` |
| speed | String | `'linear'` | 动画速度方式，和css的动画方式参数一样 |

