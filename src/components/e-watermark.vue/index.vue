<template>
<div :class="$style.root">
    <canvas :class="$style.canvas" ref="canvas" :style="{ opacity }"></canvas>
    <canvas :class="$style.mark" ref="mark"
        :width="markWidth" :height="markHeight"></canvas>
</div>
</template>

<script>
import throttle from 'lodash/throttle';

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
    computed: {
        markWidth() {
            return this.markSize * Math.sqrt(3) * 2;
        },
        markHeight() {
            return this.markSize * 2;
        },
    },
    created() {
        this.redraw = throttle(this.redraw, 250);
    },
    mounted() {
        this.drawMark();
        this.redraw();
        window.addEventListener('resize', this.redraw);
    },
    destroyed() {
        this.clearTimeout();
        window.removeEventListener('resize', this.redraw);
    },
    methods: {
        clearTimeout() {
            if (this.timer) {
                clearTimeout(this.timer);
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
            ctx.fillStyle = 'black';
            ctx.font = '14px Arial';
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
            const isFirstPaint = !this.lastRectangle;
            this.lastRectangle = isFirstPaint
                ? { windowWidth: 0, windowHeight: 0 }
                : this.lastRectangle;
            if (
                windowHeight > this.lastRectangle.windowHeight ||
                windowWidth > this.lastRectangle.windowWidth
            ) {
                this.lastRectangle = {
                    windowWidth: Math.max(
                        windowWidth,
                        this.lastRectangle.windowWidth,
                    ),
                    windowHeight: Math.max(
                        windowHeight,
                        this.lastRectangle.windowHeight,
                    ),
                };
            } else if (!isFirstPaint) {
                return;
            }
            canvasEl.style.width = windowWidth + 'px';
            canvasEl.style.height = windowHeight + 'px';
            const width = (canvasEl.width = windowWidth * 2);
            const height = (canvasEl.height = windowHeight * 2);
            const ctx = canvasEl.getContext('2d');
            const markHeight = this.markHeight;
            const markWidth = this.markWidth;
            for (let i = 0; i < width; i += markWidth) {
                for (let j = 0; j < height; j += markHeight)
                    ctx.drawImage(image, i, j, markWidth, markHeight);
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
    position: fixed;
    z-index: 999999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.root[display="full"] {
    position: absolute;
}


.mark {
    display: none;
}
</style>
