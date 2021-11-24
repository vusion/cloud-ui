<template>
    <div :class="$style.root" :direction="direction" @mousedown="onClickTrack">
        <div ref="thumb" :class="$style.thumb" @mousedown="onClickThumb" :style="renderThumbStyle({ move, size, bar })"></div>
    </div>
</template>

<script>
const BAR_MAP = {
    vertical: {
        offset: 'offsetHeight',
        scroll: 'scrollTop',
        scrollSize: 'scrollHeight',
        size: 'height',
        key: 'vertical',
        axis: 'Y',
        client: 'clientY',
        direction: 'top',
    },
    horizontal: {
        offset: 'offsetWidth',
        scroll: 'scrollLeft',
        scrollSize: 'scrollWidth',
        size: 'width',
        key: 'horizontal',
        axis: 'X',
        client: 'clientX',
        direction: 'left',
    },
};

export default {
    name: 'f-scroll-view-bar',
    props: {
        direction: { type: String, default: 'horizontal' },
        size: String,
        move: Number,
    },
    computed: {
        bar() {
            return BAR_MAP[this.direction];
        },
        wrapEl() {
            return this.$parent.$refs.wrap;
        },
    },
    methods: {
        onClickTrack(e) {
            const wrapEl = this.wrapEl;
            const thumbEl = this.$refs.thumb;
            const offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);

            const thumbHalf = (thumbEl[this.bar.offset] / 2);
            const thumbPositionPercentage = ((offset - thumbHalf) * 100 / this.$el[this.bar.offset]);
            wrapEl[this.bar.scroll] = (thumbPositionPercentage * wrapEl[this.bar.scrollSize] / 100);
        },
        onClickThumb(e) {
            if (e.ctrlKey || e.button === 2) {
                return;
            }

            this.startDrag(e);
            this[this.bar.axis] = (
                e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction])
            );
        },
        startDrag(e) {
            e.stopImmediatePropagation();
            this.cursorDown = true;
            document.addEventListener('mousemove', this.mouseMoveDocumentHandler, false);
            document.addEventListener('mouseup', this.mouseUpDocumentHandler, false);
            // 拖拽滑动块时，此时禁止鼠标长按划过文本选中
            document.onselectstart = () => false;
        },
        mouseMoveDocumentHandler(e) {
            if (this.cursorDown === false) {
                return;
            }

            const wrapEl = this.wrapEl;
            const thumbEl = this.$refs.thumb;

            const prevPage = this[this.bar.axis];
            if (!prevPage) {
                return;
            }
            const offset = ((this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1);
            const thumbClickPosition = (thumbEl[this.bar.offset] - prevPage);
            const thumbPositionPercentage = ((offset - thumbClickPosition) * 100 / this.$el[this.bar.offset]);
            wrapEl[this.bar.scroll] = (thumbPositionPercentage * wrapEl[this.bar.scrollSize] / 100);
        },
        mouseUpDocumentHandler(e) {
            this.cursorDown = false;
            this[this.bar.axis] = 0;
            document.removeEventListener('mousemove', this.mouseMoveDocumentHandler, false);
            document.onselectstart = null;
        },
        renderThumbStyle({ move, size, bar }) {
            const style = {};
            const translate = `translate${bar.axis}(${move}%)`;

            style[bar.size] = size;
            style.transform = translate;
            style.webkitTransform = translate;

            return style;
        },
    },
};
</script>

<style module>
.root {
    position: absolute;
    right: var(--scrollbar-size);
    bottom: var(--scrollbar-size);
    z-index: 1;
    border-radius: 3px;
    opacity: 0;
    transition: opacity .12s ease-out;
}

.thumb {
    position: relative;
    display: block;
    width: 0;
    height: 0;
    border-radius: inherit;
    background-color: var(--scrollbar-background);
    transition: background-color .3s;
}

.thumb:hover {
    background-color: var(--scrollbar-background-hover);
}

.root[direction="horizontal"] {
    height: var(--scrollbar-size);
    left: var(--scrollbar-size);
}

.root[direction="horizontal"] > div {
    height: 100%;
}

.root[direction="vertical"] {
    width: var(--scrollbar-size);
    top: var(--scrollbar-size);
}

.root[direction="vertical"] > div {
    width: 100%;
}
</style>
