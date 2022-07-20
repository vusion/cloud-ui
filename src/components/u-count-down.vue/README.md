<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UCountDown 计时器

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)
    - [Methods](#methods)

**Display**

用于计时

## 示例
### 基本用法

``` vue
<template>
<u-linear-layout>
    <u-linear-layout>
        <u-count-down ref="timer1" :minute="4"></u-count-down>
        <u-button @click="startTimer1">开始</u-button>
        <u-button @click="endTimer1">结束</u-button>
    </u-linear-layout>
    <u-linear-layout >
        <u-count-down ref="timer2" :minute="5" :reverse=true></u-count-down>
        <u-button @click="startTimer2">开始</u-button>
        <u-button @click="endTimer2">结束</u-button>
    </u-linear-layout>
</u-linear-layout>
</template>
<script>
export default {
    data() {},
    methods: {
        startTimer1() {
            this.$refs.timer1.start();
        },
        endTimer1() {
            this.$refs.timer1.stop();
        },
        startTimer2() {
            this.$refs.timer2.start();
        },
        endTimer2() {
            this.$refs.timer2.stop();
        }
        
    },
};
</script>

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| minute | number |  | `1` | 设置定时时间 |
| reverse | boolean |  | `false` | 转为正计时 |

### Events

#### @start

倒计时开始时触发

#### @stop

倒计时结束时触发

Methods

#### start()

开始倒计时

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### stop()

停止倒计时

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

