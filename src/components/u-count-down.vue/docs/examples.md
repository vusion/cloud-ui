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
