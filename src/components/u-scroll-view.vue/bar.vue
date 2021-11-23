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
        direction: 'top'
    },
    horizontal: {
        offset: 'offsetWidth',
        scroll: 'scrollLeft',
        scrollSize: 'scrollWidth',
        size: 'width',
        key: 'horizontal',
        axis: 'X',
        client: 'clientX',
        direction: 'left'
    }
}

export default {
    name: 'Bar',
    props: {
        vertical: Boolean,
        size: String,
        move: Number
    },
    computed: {
        bar() {
            return BAR_MAP[this.vertical ? 'vertical' : 'horizontal'];
        },
        wrap() {
            return this.$parent.wrap;
        }
    },
    render(h) {
        const {size, move, bar} = this;

        return (
            <div
                class={['u-scroll-view__bar', 'is-' + bar.key]}
                onMousedown={this.clickTrackHandler}>
                <div
                    ref="thumb"
                    class="u-scroll-view__thumb"
                    onMousedown={this.clickThumbHandler}
                    style={this.renderThumbStyle({size, move, bar})}>
                </div>
            </div>
        );
    },
    methods: {
        clickTrackHandler(e) {
            const offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);

            const thumbHalf = (this.$refs.thumb[this.bar.offset] / 2);
            const thumbPositionPercentage = ((offset - thumbHalf) * 100 / this.$el[this.bar.offset]);
            this.wrap[this.bar.scroll] = (thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100);
        },
        clickThumbHandler(e) {
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
            const prevPage = this[this.bar.axis];
            if (!prevPage) {
                return;
            }
            const offset = ((this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1);
            const thumbClickPosition = (this.$refs.thumb[this.bar.offset] - prevPage);
            const thumbPositionPercentage = ((offset - thumbClickPosition) * 100 / this.$el[this.bar.offset]);
            this.wrap[this.bar.scroll] = (thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100);
        },
        mouseUpDocumentHandler(e) {
            this.cursorDown = false;
            this[this.bar.axis] = 0;
            document.removeEventListener('mousemove', this.mouseMoveDocumentHandler, false);
            document.onselectstart = null;
        },
        renderThumbStyle({move, size, bar}) {
            const style = {};
            const translate = `translate${bar.axis}(${ move }%)`;

            style[bar.size] = size;
            style.transform = translate;
            style.webkitTransform = translate;

            return style;
        }
    }
}
</script>

<style>
    .u-scroll-view__bar {
        position: absolute;
        right: 4px;
        bottom: 4px;
        z-index: 1;
        border-radius: 3px;
        opacity: 0;
        transition: opacity .12s ease-out;
    }

    .u-scroll-view__thumb {
        position: relative;
        display: block;
        width: 0;
        height: 0;
        cursor: pointer;
        border-radius: inherit;
        background-color: rgba(255,255,255,.2);
        transition: background-color .3s;
    }

    .u-scroll-view__thumb:hover {
        background-color: rgba(255,255,255,.4);
    }

    .u-scroll-view__bar.is-horizontal {
        height: 4px;
        left: 4px;
    }

    .u-scroll-view__bar.is-horizontal > div {
        height: 100%;
    }

    .u-scroll-view__bar.is-vertical {
        width: 4px;
        top: 4px;
    }

    .u-scroll-view__bar.is-vertical > div {
        width: 100%;
    }

    .u-scroll-view:active > .u-scroll-view__bar, .u-scroll-view:focus > .u-scroll-view__bar, .u-scroll-view:hover > .u-scroll-view__bar {
        opacity: 1;
        transition: opacity .34s ease-out;
    }

    .u-scroll-view[color="lighter"] .u-scroll-view__thumb {
       background-color: rgba(48,48,48,.2); 
    }

    .u-scroll-view[color="lighter"] .u-scroll-view__thumb:hover {
        background-color: rgba(48,48,48,.4);
    }
</style>