<template>
<div :class="$style.root">
    <header :class="$style.head">
        <div :class="$style.wrap">
            <u-navbar>
                <u-logo slot="left">{{ logo }}</u-logo>
                <u-navbar-item v-for="item in navbar" :key="item.text" :to="item.to" :href="item.href" :target="item.target">{{ item.text }}</u-navbar-item>
                <div slot="right" style="margin-right: 10px;">
                    <u-navbar-select style="vertical-align: top;" value="0.4.x"
                        @select="onSelectVersion">
                        <u-navbar-select-item value="0.4.x">0.4.x</u-navbar-select-item>
                        <u-navbar-select-item value="0.3.x">0.3.x</u-navbar-select-item>
                    </u-navbar-select>
                    <u-navbar-select v-model="theme" @select="onSelectTheme" style="width: 120px;">
                        <u-navbar-select-item value="default"><div :class="$style.color"></div>Default</u-navbar-select-item>
                        <u-navbar-select-item value="dark"><div :class="$style.color" color="dark"></div>Dark</u-navbar-select-item>
                        <u-navbar-select-item value="seagreen"><div :class="$style.color" color="seagreen"></div>SeaGreen</u-navbar-select-item>
                    </u-navbar-select>
                    <u-navbar-item :href="github" target="_blank"><i-icon name="github" style="font-size: 24px;"></i-icon></u-navbar-item>
                </div>
            </u-navbar>
        </div>
    </header>
    <main :class="$style.body">
        <div :class="$style.wrap">
            <router-view></router-view>
        </div>
    </main>
</div>
</template>

<script>
const base = 'https://vusion.dev';

export default {
    data() {
        return {
            logo: this.$docs.logo,
            navbar: this.$docs.navbar,
            github: this.$docs.github,
            theme: (process.env.NODE_ENV === 'development' ? this.$docs.theme : window.theme) || 'default',
        };
    },
    methods: {
        onSelectTheme($event) {
            localStorage.setItem('theme', $event.value);
            const linkEl = document.getElementById('theme-css');
            const index = linkEl.href.lastIndexOf('/');
            linkEl.href = linkEl.href.slice(0, index + 1) + window.getThemeCSS($event.value);
        },
        onSelectVersion($event) {
            if ($event.value)
                window.location = base + '/cloud-ui@' + $event.value + '/';
        },
    },
};
</script>

<style module>
.root {}

.head {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: $navbar-height;
    /* background: #1c2b41; */
    background: white;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
    z-index: $z-index-layout;
}

.body {
    /* min-height: calc(100vh - 134px); */
    margin-top: $navbar-height;
}

.foot {
    height: 70px;
    background: #34383b;
}

.wrap {
    /* width: 1180px;
    margin: 0 auto; */
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
