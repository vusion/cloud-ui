<template>
<div :class="$style.root" :native="native">
    <template v-if="!native">
        <div ref="wrap" :class="$style.wrap" :style="wrapStyle" @scroll="handleScroll">
            <div ref="resize" :class="$style.view">
                <slot></slot>
            </div>
        </div>
        <f-scroll-view-bar :move="moveX" :size="sizeWidth"></f-scroll-view-bar>
        <f-scroll-view-bar direction="vertical" :move="moveY" :size="sizeHeight"></f-scroll-view-bar>
    </template>
    <div v-else ref="wrap" :class="$style.wrap" :style="wrapStyle">
        <div ref="resize" :class="$style.view">
            <slot></slot>
        </div>
    </div>
</div>
</template>

<script>
import FScrollViewBar from './bar.vue';
import { addResizeListener, removeResizeListener } from '../../utils/dom/resize-event';

export default {
    name: 'f-scroll-view',
    components: {
        FScrollViewBar,
    },
    props: {
        native: { type: Boolean, default: false },
        wrapStyle: Object,
        viewStyle: Object,
        noresize: { type: Boolean, default: false },
    },
    data() {
        return {
            sizeWidth: '0',
            sizeHeight: '0',
            moveX: 0,
            moveY: 0,
        };
    },
    mounted() {
        if (this.native) {
            return;
        }
        this.$nextTick(this.handleResize);
        !this.noresize && addResizeListener(this.$refs.resize, this.handleResize);
    },
    beforeDestroy() {
        if (this.native) {
            return;
        }
        !this.noresize && removeResizeListener(this.$refs.resize, this.handleResize);
    },
    methods: {
        handleScroll() {
            const wrapEl = this.$refs.wrap;

            this.moveY = (wrapEl.scrollTop * 100) / wrapEl.clientHeight;
            this.moveX = (wrapEl.scrollLeft * 100) / wrapEl.clientWidth;

            this.$emit('scroll', { scrollTop: wrapEl.scrollTop });
        },
        handleResize() {
            const wrapEl = this.$refs.wrap;
            if (!wrapEl)
                return;

            const heightPercentage = (wrapEl.clientHeight * 100) / wrapEl.scrollHeight;
            const widthPercentage = (wrapEl.clientWidth * 100) / wrapEl.scrollWidth;

            this.sizeHeight = heightPercentage < 100 ? heightPercentage + '%' : '';
            this.sizeWidth = widthPercentage < 100 ? widthPercentage + '%' : '';
        },
    },
};
</script>

<style module>
.root {
    /* overflow: hidden; */
    position: relative;
}

.root:not([native]) ::-webkit-scrollbar {
    width: 0;
    height: 0;
}

.wrap {
    overflow: scroll;
    height: 100%;
    -ms-overflow-style: none;
}

.root > .bar {
    opacity: 1;
    /* background: red; */
    transition: opacity .34s ease-out;
}

.root:hover > .bar,
.root:focus > .bar,
.root:active > .bar {
    opacity: 1;
}

.root[color="light"] .bar_thumb {
    background-color: rgba(48,48,48,.2);
}

.root[color="light"] .bar_thumb:hover {
    background-color: rgba(48,48,48,.4);
}
/** hover时才出现bar */
.root[trigger="hover"] .bar {
     opacity: 0;
}
.root[trigger="hover"]:hover > .bar,
.root:focus > .bar,
.root[trigger="hover"]:active > .bar {
    opacity: 1;
}
</style>
