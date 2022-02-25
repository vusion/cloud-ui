<template>
    <div>
        <u-multi-layout :class="$style.root" :animation="animation" :readonly="readonly" :disabled="disabled">
        <slot></slot>
    </u-multi-layout>
    </div>
</template>

<script>
import { MSinglex } from '../m-singlex.vue';

export default {
    name: 'u-navbar-multi',
    childName: 'u-navbar-item-multi',
    extends: MSinglex,
    props: {
        router: { type: Boolean, default: true },
        animation: { type: String, default: '1' },
    },
    data() {
        return {
            userInfo: {},
            noticeCount: 0,
            noticeActive: false,
        };
    },
    watch: {
        $route: {
            immediate: true,
            handler($route) {
                this.noticeActive = $route.path.startsWith('/notice');
            },
        },
    },
    created() {
        this.$auth && this.$auth.getUserInfo().then((userInfo) => this.userInfo = userInfo);
        this.$on('select', ({ itemVM }) => this.router && itemVM.navigate());
    },
    methods: {
        logout() {
            /* eslint-disable new-cap */
            this.$confirm('确定退出登录吗？', '提示')
                .then(() => this.$auth.logout())
                .then(() => {
                    this.eraseCookie();
                    location.reload();
                });
        },
        eraseCookie() {
            const cookies = document.cookie.split(';');
            cookies.forEach((cookie) => {
                const eqPos = cookie.indexOf('=');
                const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                const d = new Date();
                d.setTime(d.getTime() - (1 * 24 * 60 * 60 * 1000));
                document.cookie = `${name}=; expires=${d.toGMTString()}; path=/`;
            });
        },
    },
};
</script>

<style module>
.root {
    user-select: none;
    height: var(--navbar-height);
    /* display: flex;
    justify-content: space-between; */
    background: var(--navbar-background);
    white-space: nowrap;
}

.left {
    float: left;
    margin-right: var(--navbar-space-x);
}

.middle {
    margin: 0 var(--navbar-space-x);
}

.root[alignment="center"] .middle {
    text-align: center;
}

.root[alignment="right"] .middle {
    text-align: right;
}

.right {
    float: right;
    margin-left: var(--navbar-space-x);
}

.root[color="inverse"] {
    background-color: var(--navbar-background-inverse);
}

.root[color="inverse"] .item {
    color: var(--navbar-item-color-inverse);
}

.root[color="inverse"] .item:hover {
    color: var(--navbar-item-color-inverse);
}

.root[color="inverse"] .item[selected] {
    color: var(--navbar-item-color-inverse);
}

.root .item + .divider {
    margin-left: 0;
}

.root[animation="1"] .item::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: var(--navbar-item-line-height);
    width: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--navbar-item-line-background);
}

.root[animation="1"] .item:hover::after {
    transition: width var(--navbar-item-line-transition-duration);
    width: 100%;
}

.root[animation="1"] .item[selected]::after {
    width: 100%;
}

.root[animation="1"] .item[disabled]::after {
    display: none;
}

.root[animation="2"] .item {
    transition: color 0.3s;
}

.root[animation="2"] .item::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: var(--navbar-item-line-background);
    opacity: 0;
    transition: all 0.3s;
    transform: translateY(-10px);
}

.root[animation="2"] .item:hover::after {
    height: 3px;
    opacity: 1;
    transform: translateY(0);
}

.root[animation="2"] .item[selected]::after {
    height: 3px;
    opacity: 1;
    transform: translateY(0);
}

.root[animation="2"] .item[disabled]::after {
    display: none;
}

.root[animation="3"] .item {
    transition: color 0.3s;
}

.root[animation="3"] .item::after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    bottom: 0;
    color: transparent;
    content: '\2022';
    font-size: 1.2em;
    line-height: 1;
    transform: translateX(-50%);
    transition: all 0.3s;
}

.root[animation="3"] .item:hover {
}

.root[animation="3"] .item:hover::after {
    color: var(--navbar-item-line-background);
    text-shadow: 10px 0 var(--navbar-item-line-background), -10px 0 var(--navbar-item-line-background);
}

.root[animation="3"] .item[selected] {
}

.root[animation="3"] .item[selected]::after {
    color: var(--navbar-item-line-background);
    text-shadow: 10px 0 var(--navbar-item-line-background), -10px 0 var(--navbar-item-line-background);
}

.root[animation="3"] .item[disabled]::after {
    display: none;
}

.root[animation="4"] .item {
    padding: 0 6px;
    transition: color 0.3s;
}

.root[animation="4"] .item::before,
.root[animation="4"] .item::after {
    display: inline-block;
    opacity: 0;
    transition: transform 0.3s, opacity 0.2s;
}

.root[animation="4"] .item::before {
    margin-right: 8px;
    content: '[';
    transform: translateX(20px);
}

.root[animation="4"] .item::after {
    margin-left: 8px;
    content: ']';
    transform: translateX(-20px);
}

.root[animation="4"] .item:hover {}

.root[animation="4"] .item:hover::before,
.root[animation="4"] .item:hover::after {
    opacity: 1;
    transform: translateX(0);
}

.root[animation="4"] .item[selected] {}

.root[animation="4"] .item[selected]::before,
.root[animation="4"] .item[selected]::after {
    opacity: 1;
    transform: translateX(0);
}

.root[animation="4"] .item[disabled]::before,
.root[animation="4"] .item[disabled]::after {
    opacity: 0;
}
</style>
