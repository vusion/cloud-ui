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
        <u-count-down ref="timer1" :minute="0.2" reverse="negative"></u-count-down>
        <u-button @click="startTimer1">开始</u-button>
        <u-button @click="endTimer1">结束</u-button>
        <u-button @click="pauseTimer1">暂停</u-button>
        <u-button @click="continueTimer1">继续</u-button>        
    </u-linear-layout>
    <u-linear-layout >
        <u-count-down ref="timer2" :minute="5" reverse="positive"></u-count-down>
        <u-button @click="startTimer2">开始</u-button>
        <u-button @click="endTimer2">结束</u-button>
        <u-button @click="pauseTimer2">暂停</u-button>
        <u-button @click="continueTimer2">继续</u-button>
    </u-linear-layout>
    <u-linear-layout >
        <u-count-down ref="timer3" :minute="5" reverse="negative" :autostart=false ></u-count-down>
        <u-button @click="startTimer3">开始</u-button>
        <u-button @click="endTimer3">结束</u-button>
        <u-button @click="pauseTimer3">暂停</u-button>
        <u-button @click="continueTimer3">继续</u-button>
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
        pauseTimer1() {
            this.$refs.timer1.pause();
        },
        continueTimer1() {
            this.$refs.timer1.continue();
        },
        startTimer2() {
            this.$refs.timer2.start();
        },
        endTimer2() {
            this.$refs.timer2.stop();
        },
        pauseTimer2() {
            this.$refs.timer2.pause();
        },
        continueTimer2() {
            this.$refs.timer2.continue();
        },
        startTimer3() {
            this.$refs.timer3.start();
        },
        endTimer3() {
            this.$refs.timer3.stop();
        },
        pauseTimer3() {
            this.$refs.timer3.pause();
        },
        continueTimer3() {
            this.$refs.timer3.continue();
        }
    },
};
</script>

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| minute | number |  | `1` | 设置定时时间 |
| reverse | string | `[object Object]`<br/>`[object Object]` | `'positive'` | 设置计时器计时方式 |
| autostart | boolean |  | `true` | 设置是否自动开始计时器 |

### Events

#### @start

计时器开始时触发

#### @pause

计时器暂停时触发

#### @continue

计时器继续时触发

#### @stop

计时器结束时触发

Methods

#### start()

开始计时器

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### pause()

暂停计时器

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### continue()

继续计时器

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### stop()

停止计时器

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

