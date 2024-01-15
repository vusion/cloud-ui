<template>
<div :class="$style.root">
    <canvas :class="$style.canvas" ref="canvas" :style="{ opacity }"></canvas>
    <canvas :class="$style.mark" ref="mark"
        :width="markWidth" :height="markHeight"></canvas>
</div>
</template>

<script>
import throttle from 'lodash/throttle';
import { addResizeListener, removeResizeListener } from '../../utils/dom';

export default {
    name: 'e-watermark',
    props: {
        text: { type: String, default: 'text' },
        markSize: { type: Number, default: 120 },
        opacity: { type: Number, default: 0.1 },
        image: {
            type: [
                HTMLImageElement,
                HTMLVideoElement,
                HTMLCanvasElement,
                window.SVGImageElement,
                window.ImageBitmap,
                window.OffscreenCanvas,
            ],
        },
    },
    computed: {
        markWidth() {
            return this.markSize * Math.sqrt(3) * 2;
        },
        markHeight() {
            return this.markSize * 2;
        },
    },
    watch: {
        text() {
            this.clearTimeout();
            this.timer = setTimeout(() => {
                this.timer = undefined;
                this.redrawMark();
                this.redraw();
            }, 100);
        },
    },
    created() {
        this.redraw = throttle(this.redraw, 250);
    },
    mounted() {
        this.drawMark();
        this.redraw();
        addResizeListener(this.$el, this.redraw);
    },
    destroyed() {
        this.clearTimeout();
        this.cancelAnimationFrameId();
        removeResizeListener(this.$el, this.redraw);
    },
    methods: {
        clearTimeout() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
        },
        cancelAnimationFrameId() {
            if (this.requestAnimationFrameId) {
                cancelAnimationFrame(this.requestAnimationFrameId);
                this.requestAnimationFrameId = null;
            }
        },
        drawMark() {
            const markEl = this.$refs.mark;
            const width = markEl.width;
            const height = markEl.height;
            const ctx = markEl.getContext('2d');
            ctx.translate(width / 2, height / 2);
            ctx.scale(2, 2);
            ctx.rotate(-Math.PI / 6);

            let computedStyle = {};

            try {
                computedStyle = window.getComputedStyle(this.$el);
            } catch (e) {
            }

            ctx.fillStyle = computedStyle.color || 'black';
            ctx.font = computedStyle.font || '14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(this.text, 0, 0);
            return markEl;
        },
        redrawMark() {
            const markEl = this.$refs.mark;
            const ctx = markEl.getContext('2d');
            const width = markEl.width;
            const height = markEl.height;
            ctx.clearRect(-width, -height, width * 2, height * 2);
            ctx.fillText(this.text, 0, 0);
        },
        draw(image) {
            const canvasEl = this.$refs.canvas;
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;

            canvasEl.style.width = windowWidth + 'px';
            canvasEl.style.height = windowHeight + 'px';
            const width = (canvasEl.width = windowWidth * 2);
            const height = (canvasEl.height = windowHeight * 2);
            const ctx = canvasEl.getContext('2d');
            const markHeight = this.markHeight;
            const markWidth = this.markWidth;
            const waitDrawRects = [];
            for (let i = 0; i < width; i += markWidth) {
                for (let j = 0; j < height; j += markHeight) {
                    waitDrawRects.push({
                        x: i,
                        y: j,
                        width: markWidth,
                        height: markHeight,
                    });
                }
            }

            this.cancelAnimationFrameId();
            this.requestAnimationFrameId = requestAnimationFrame(() => this.drawLoop(ctx, image, waitDrawRects));
        },
        drawLoop(ctx, image, drawRects) {
            if (!drawRects || !ctx) {
                return;
            }

            const n = Date.now();
            while (drawRects.length > 0) {
                const { x, y, width, height } = drawRects.shift();

                ctx.drawImage(image, x, y, width, height);

                // 渲染操作30ms 就把剩下的交给下一次渲染，避免js执行时间过长
                if (Date.now() - n >= 12) {
                    this.requestAnimationFrameId = requestAnimationFrame(() => this.drawLoop(ctx, image, drawRects));
                    break;
                }
            }
        },
        redraw() {
            const image = this.image || this.$refs.mark;
            this.draw(image);
        },
    },
};
</script>

<style module>
.root {
    position: fixed!important;
    z-index: 999999!important;
    left: 0!important;
    top: 0!important;
    width: 100%!important;
    height: 100%!important;
    pointer-events: none;
}
[vusion-node-tag="u-absolute-layout"] > .root{
    position: fixed!important;
}

.root[display="full"] {
    position: absolute;
}

.mark {
    display: none;
}
</style>
