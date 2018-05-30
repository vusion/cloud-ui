# 数字渐变 CountUp

## 示例
### 基本形式

``` html
<u-countup :end="100"></u-countup>
```

### 分组 (1,000 vs 1000)
``` html
<u-countup :end="1000" is-group></u-countup>
```

### 前缀，后缀
``` html
<u-countup :end="100" prefix="$" suffix="美元"></u-countup>
```

### 小数
``` html
<u-countup :end="100" :decimals="2"></u-countup>
```

### 动画函数
``` html
<u-countup :end="100" is-easing></u-countup>
```

### 渐变时间(时间单位是秒)
``` html
<u-countup :end="100" :duration="3"></u-countup>
```

### 转换单位简化数据
``` html
<u-countup :end="4567890" simplify></u-countup>
```

### 开启渐变
```vue
<template>
    <u-linear-layout>
        <u-countup :end="100" :auto-start="autoStart"></u-countup>
        <u-button style="vertical-align: bottom;" color="primary" @click="start">autoStart</u-button>
    </u-linear-layout>
</template>
<script>
export default{
    data() {
        return {
            autoStart: false,
        };
    },
    methods: {
        start() {
            this.autoStart = true;
        },
    },
};
</script>
```

### 渐变结束回调函数
```vue
<template>
    <u-linear-layout>
        <u-countup :end="100" :auto-start="autoStart" :end-callback="end"></u-countup>
        <u-button style="vertical-align: bottom;" color="primary" @click="start">autoStart</u-button>
    </u-linear-layout>
</template>
<script>
export default{
    data() {
        return {
            autoStart: false,
        };
    },
    methods: {
        start() {
            this.autoStart = true;
        },
        end() {
            console.log('渐变结束');
        },
    },
};
</script>
```


## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| start | Number | `0` | 渐变开始数值 |
| end | Number |  | 渐变结束数值 |
| duration | Number | `2` | 渐变时间间隔 |
| isEasing | Boolean | `false` | 否使用 动画函数`easingFn`处理数据 |
| isGroup | Boolean | `false` | 是否分组，默认分组分隔符`'separator'`值为`','` |
| separator | String | `','` | 分组分隔符 |
| decimals | Number | `0` | 小数点后几位 |
| easingFn | Function | `'easeOutExpo'` | 自定义渐变动画，默认使用 `Robert Penner's easeOutExpo`函数 |
| simplify | Boolean | `false` | 是否使用自定义单位简化数据 |
| unit | Array | `[[3, 'K+'], [6, 'M+'], [9, 'G+']]` | 配合`'simplify'`属性使用的自定义单位 |
| prefix | String | `''` | 前缀内容 |
| suffix | String | `''` | 后缀内容 |
| endCallback | Function | `` | 渐变结束后的回调函数 |
| autoStart | Boolean | `false` | 是否开启渐变 |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | 插入文本或HTML |

### Methods

#### update

更新渐变结束值

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Number | 最新结束值 |

#### reset

重置

| Param | Type | Description |
| ----- | ---- | ----------- |
| - | -| - |

#### pauseResume

切换渐变

| Param | Type | Description |
| ----- | ---- | ----------- |
| - | - | - |

