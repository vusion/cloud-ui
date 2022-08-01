### 基本用法

``` vue
<template>
<u-linear-layout>
    <u-linear-layout>
        <u-count-down ref="timer1" :timer="70" reverse="negative"></u-count-down>
        <u-button @click="startTimer1">开始</u-button>
        <u-button @click="endTimer1">结束</u-button>
        <u-button @click="pauseTimer1">暂停</u-button>
        <u-button @click="continueTimer1">继续</u-button>        
    </u-linear-layout>
    <u-linear-layout >
        <u-count-down ref="timer2" :timer="300" reverse="positive"></u-count-down>
        <u-button @click="startTimer2">开始</u-button>
        <u-button @click="endTimer2">结束</u-button>
        <u-button @click="pauseTimer2">暂停</u-button>
        <u-button @click="continueTimer2">继续</u-button>
    </u-linear-layout>
    <u-linear-layout >
        <u-count-down ref="timer3" :timer="180" reverse="negative" :autostart=false ></u-count-down>
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
