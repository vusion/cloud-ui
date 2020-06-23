<template>
<div :class="$style.root">
    <div :class="$style.body" :position="currentPosition" ref="body">
        <slot></slot>
    </div>
</div>
</template>

<script>
import event from '../../utils/event';
import throttle from 'lodash/throttle';

export default {
    name: 'u-footbar',
    props: {
        position: { type: String, default: 'static' },
        scrollParent: HTMLElement,
    },
    data() {
        return {
            currentPosition: this.position,
            currentScrollParent: this.scrollParent,
        };
    },
    watch: {
        position(position) {
            this.currentPosition = position;
            if (position === 'auto') {
                this.setAutoBar();
            } else {
                event.off(this.currentScrollParent, 'scroll', this.cb);
            }
        },
    },
    destroyed() {
        event.off(this.currentScrollParent, 'scroll', this.cb);
    },
    mounted() {
        this.currentScrollParent
            = this.scrollParent || this.findScrollParent(this.$el);
    },
    methods: {
        setAutoBar() {
            const currentElem = this.$el;
            const bodyEl = this.$refs.body;
            const cntHeight = bodyEl.getBoundingClientRect();
            this.checkPos1 = throttle(this.checkPos, 500);
            this.checkPos1(currentElem, cntHeight.height);
            this.cb = (e) => {
                this.checkPos1(currentElem, cntHeight.height);
            };
            event.on(this.currentScrollParent, 'scroll', this.cb);
        },
        checkPos(currentElem, cntHeight = 0) {
            const viewPortHeight
                = window.innerHeight
                    || document.documentElement.clientHeight
                    || document.body.clientHeight;
            const elemOffset = currentElem.getBoundingClientRect();
            if (elemOffset.top < viewPortHeight - cntHeight / 2) {
                this.currentPosition = 'auto';
            } else {
                this.currentPosition = 'fixed';
            }
        },
        findScrollParent(target) {
            target = target.parentElement;
            if (!target)
                return window;
            const styles = window.getComputedStyle(target);
            if (styles.overflowY === 'auto' || styles.overflowY === 'scroll') {
                return target;
            } else {
                return this.findScrollParent(target);
            }
        },
    },
};
</script>

<style module>
.root {
    position: relative;
}
.body {
    padding: 20px 0;
}

.body[position="static"] {
    position: static;
}

.body[position="fixed"] {
    position: fixed;
    z-index: 100;
    bottom: 0;
    left: var(--sidebar-width);
    right: 0;
    background: var(--background-color-light);
    padding: 20px 40px;
    color: var(--color-base);
    border: 1px solid var(--border-color-base);
    box-shadow: 0 0 10px 0 rgba(80, 90, 109, 0.16);
    animation: slideInUp var(--transition-duration-slow) both;
}

@keyframes slideInUp {
    from {
        transform: translate3d(0, 100%, 0);
        visibility: visible;
    }
    to {
        transform: translate3d(0, 0, 0);
    }
}
</style>
