<template>
<u-global-layout>
    <u-navbar slot="head">
        <u-logo slot="left" name="163yun">组件库</u-logo>
        <!-- <u-navbar-item>首页</u-navbar-item> -->
        <u-navbar-item to="/components">组件</u-navbar-item>
        <!-- <u-navbar-item>模式</u-navbar-item> -->
        <!-- <u-navbar-item>资源</u-navbar-item> -->
        <u-theme-select slot="right" v-model="theme" @select="onSelectTheme">
            <u-theme-select-item value="default"><div :class="$style.color"></div>Default</u-theme-select-item>
            <u-theme-select-item value="dark"><div :class="$style.color" color="dark"></div>Dark</u-theme-select-item>
            <u-theme-select-item value="seagreen"><div :class="$style.color" color="seagreen"></div>SeaGreen</u-theme-select-item>
        </u-theme-select>
    </u-navbar>
    <div><router-view></router-view></div>
    <div :class="$style.foot" slot="foot"></div>
</u-global-layout>
</template>

<script>
export default {
    data() {
        return {
            theme: window.theme,
        };
    },
    methods: {
        onSelectTheme($event) {
            if ($event.value !== window.theme) {
                localStorage.setItem('theme', $event.value);
                location.reload();
            }
        },
    },
};
</script>

<style module>
.foot {
    line-height: 70px;
    background: #34383b;
    text-align: center;
    font-size: 14px;
    color: gray;
}

.color {
    display: inline-block;
    width: 1em;
    height: 1em;
    background: #67aaf5;
    border: 1px solid white;
    vertical-align: -2px;
    margin-right: 6px;
}

.color[color="dark"] {
    background: #4a89e8;
}

.color[color="seagreen"] {
    background: #2cb78e;
}
</style>
