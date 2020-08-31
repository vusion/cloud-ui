<template>
<nav :class="$style.root" :readonly="readonly" :disabled="disabled">
    <div :class="$style.body" ref="body">
        <div :class="$style.arrow" :style="{ top }"></div>
        <slot></slot>
    </div>
</nav>
</template>

<script>
import MSinglex from '../m-singlex.vue';
import { getPosition, getComputedStyle, findScrollParent } from '../../utils/dom';
import event from '../../utils/event';
import throttle from 'lodash/throttle';

export default {
    name: 'u-toc',
    childName: 'u-toc-item',
    extends: MSinglex,
    props: {
        router: { type: Boolean, default: true },
        scrollSpy: { type: Boolean, default: true },
        scrollParent: HTMLElement,
        topBeta: { type: Number, default: 0 }, // 有头部导航栏等遮挡的高度
    },
    data() {
        return {
            parentVM: undefined,
            top: 0,
            currentScrollParent: this.scrollParent,
        };
    },
    watch: {
        selectedVM(selectedVM, oldVM) {
            this.setActive(selectedVM);
        },
    },
    mounted() {
        if (this.scrollSpy) {
            this.currentScrollParent = this.scrollParent || findScrollParent(this.$el);
            this.scrollListener();
        }
    },
    destroyed() {
        this.eventOff && this.eventOff();
        clearTimeout(this.timeoutId);
    },
    methods: {
        setActive(selectedVM) {
            if (selectedVM) {
                const selectedVMPos = getPosition(selectedVM.$el);
                const bodypos = getPosition(this.$refs.body);
                const top = selectedVMPos.top - bodypos.top + 8 + this.$refs.body.scrollTop;
                this.top = top + 'px';
                this.selectedVM = selectedVM;
            }
        },
        scrollListener() {
            this.setSelectedVMThrottle = throttle(this.setSelectedVM, 500);
            this.eventOff = event.on(this.currentScrollParent, 'scroll', (e) => this.setSelectedVMThrottle());
        },
        setSelectedVM() {
            // 点击跳转时暂停
            if (this.hashChange)
                return;
            // 查找相关的url块
            const children = this.$children;
            const itemVMs = children.filter((item) => {
                const hash = '#' + location.hash.split('#')[1];
                return item.currentHref && item.currentHref.startsWith(hash);
            });
            if (!itemVMs[0])
                return;
            // item按展示顺序平铺
            let itemVMsArr = [];
            itemVMs.forEach((item) => {
                itemVMsArr = itemVMsArr.concat(item).concat(item.$children);
            });
            // 查找页面上的锚点
            const hrefs = itemVMsArr.map((item) => item.currentHref);
            const hrefsElems = [];
            hrefs.forEach((item, index) => {
                const elems = [...document.querySelectorAll(`[href="${item}"]`)];
                const itemVm = itemVMsArr[index].$el;
                elems.forEach((elem) => {
                    if (elem !== itemVm && elem.parentElement !== itemVm) {
                        if (getComputedStyle(elem, 'display') === 'none') {
                            hrefsElems.push({ element: elem.parentElement, hash: item });
                        } else {
                            hrefsElems.push({ element: elem, hash: item });
                        }
                    }
                });
            });
            // 进入视窗的锚点
            const currentElem = hrefsElems.find((item) => this.isIntoView(item.element));
            if (currentElem) {
                this.selectedVM = itemVMsArr.find((item) => item.currentHref === currentElem.hash);
            }
        },
        isIntoView(element) {
            const viewHeight = window.innerHeight || document.documentElement.clientHeight;
            const { top, bottom } = element.getBoundingClientRect();
            return top >= this.topBeta && bottom <= viewHeight;
        },
        stopScrollSpy() {
            this.hashChange = true;
            clearTimeout(this.timeoutId);
            this.timeoutId = setTimeout(() => { this.hashChange = false; }, 0);
        },
    },
};
</script>

<style module>
.root {
    position: relative;
    user-select: none;
    font-size: var(--toc-font-size);
    width: var(--toc-width);
    padding: var(--toc-padding);
    background: var(--toc-background);
    border-left: var(--toc-border-width) solid var(--toc-border-color);
}

.body {
    margin: var(--toc-padding) -10px;
    padding: 0 calc(10px + var(--toc-padding));
    overflow: hidden;
    position: relative;
}

.root::before, .root::after {
    content: '';
    display: block;
    position: absolute;
    width: var(--toc-circle-size);
    height: var(--toc-circle-size);
    left: calc((var(--toc-circle-size) + 1px) / (-2));
    border: 2px solid var(--toc-border-color);
    border-radius: 100px;
    background: white;
}

.root::before {
    top: calc((var(--toc-circle-size) + 1px) / (-2));
}

.root::after {
    bottom: calc((var(--toc-circle-size) + 1px) / (-2));
}

.arrow {
    position: absolute;
    width: 10px;
    height:6px;
    background: var(--brand-primary);
    left: -2px;
    transition: top 0.15s ease-in-out;
    z-index: 1;
}

.arrow:after {
    content: '';
    width: 0;
    height: 0;
    border-top: 3px solid transparent;
    border-left: 3px solid var(--brand-primary);
    border-right: 3px solid transparent;
    border-bottom: 3px solid transparent;
    position: absolute;
    right: -6px;
}
</style>
