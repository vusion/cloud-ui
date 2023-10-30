<template>
<div :class="[$style.root, message.singleton ? 'singleton' : '']">
    <header :class="$style.head" v-if="!message.singleton">
        <div :class="$style.wrap">
            <u-navbar style="background: #FFFFFF;">
                <div slot="left" @click="routeJumpToHome" :class="$style.cursor">
                    <img :src="logSrc" style="height: 24px; margin-left: 40px; margin-top: 18px">
                </div>
                <div slot="right" style="margin-right: 46px;">
                    <u-navbar-item v-for="item in navbar" :key="item.text" :to="item.to" :href="item.href" :target="item.target">{{ item.text }}</u-navbar-item>
                    <!-- <u-navbar-select style="vertical-align: top;" value="0.10.x"
                        @select="onSelectVersion">
                        <u-navbar-select-item value="0.10.x">0.10.x</u-navbar-select-item>
                        <u-navbar-select-item value="0.4.x">0.4.x</u-navbar-select-item>
                        <u-navbar-select-item value="0.3.x">0.3.x</u-navbar-select-item>h
                    </u-navbar-select> -->
                    <!-- <u-navbar-select v-model="theme" @select="onSelectTheme" style="width: 120px;">
                        <u-navbar-select-item value="default"><div :class="$style.color"></div>Default</u-navbar-select-item>
                        <u-navbar-select-item value="dark"><div :class="$style.color" color="dark"></div>Dark</u-navbar-select-item>
                        <u-navbar-select-item value="seagreen"><div :class="$style.color" color="seagreen"></div>SeaGreen</u-navbar-select-item>
                    </u-navbar-select> -->
                    <u-navbar-item :href="github" target="_blank"><i-icon name="github" style="font-size: 20px;"></i-icon></u-navbar-item>
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
import message from '../message';
export default {
    data() {
        return {
            message,
            logo: this.$docs.logo,
            navbar: this.$docs.navbar,
            github: this.$docs.github,
            theme: (process.env.NODE_ENV === 'development' ? this.$docs.theme : window.theme) || 'default',
            logSrc: require('@/assets/home/logo.svg'),
        };
    },
    created() {
        if (this.$route.path === '/components/quickstart' && history.length === 1) this.$router.replace('/home');
    },
    watch: {
        'message.route'(route) {
            if (route) {
                if (!this.ready) {
                    this.ready = true;
                    this.$router.onReady(() => {
                        this.$router.replace(this.message.route);
                    });
                } else {
                    this.$router.replace(route);
                }
            }
        },
        '$route'(route) {
            this.message.postMessage({
                type: 'docs:hash',
                data: {
                    hash: route.hash,
                },
            }, '*');
        },
    },
    methods: {
        onSelectTheme($event) {
            localStorage.setItem('theme', $event.value);
            const linkEl = document.getElementById('theme-css');
            const index = linkEl.href.lastIndexOf('/');
            linkEl.href = linkEl.href.slice(0, index + 1) + window.getThemeCSS($event.value);
        },
        onSelectVersion($event) {
            if ($event.value === '0.4.x')
                window.location = base + '/cloud-ui/';
            else if ($event.value)
                window.location = base + '/cloud-ui@' + $event.value + '/';
        },
        routeJumpToHome() {
            if (this.$route.path === '/home') return;
            this.$router.push('/home');
        }
    },
};
</script>

<style module>
:root {
    --sidebar-width: 240px;
}

.root {}

.head {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: var(--navbar-height);
    /* background: #1c2b41; */
    background: white;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
    z-index: var(--z-index-layout);
}

.head [class^="u-navbar_item__"],
.head [class^="u-navbar_select__"],
.head [class^="u-navbar__"] [class^="u-navbar_item__"][selected],
.head [class^="u-navbar__"] [class^="u-navbar_item__"]:hover {
    color: #555555;
}

.head [class^="u-navbar__"] [class^="u-navbar_item__"]:hover::after,
.head [class^="u-navbar__"] [class^="u-navbar_item__"][selected]::after {
    color: #0027FE;
}

.head [class^="u-navbar__"] [class^="u-navbar_item__"] {
    padding: 0;
}

.head [class^="u-navbar__"] [class^="u-navbar_item__"]:not(:last-child) {
    margin-right: 40px;
}

:global(.singleton) .head {
    display: none;
}

.body {
    /* min-height: calc(100vh - 134px); */
    margin-top: var(--navbar-height);
}

:global(.singleton) .body {
    margin-top: 0;
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

.cursor {
    cursor: pointer;
}
</style>
