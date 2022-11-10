<template>
    <div :class="$style.root" :style="currentStyle" v-show="currentStyle">
        <div :class="$style.line" :style="lineStyle" v-show="lineStyle"></div>
        <div :class="$style.mask" :style="maskStyle" v-show="maskStyle"></div>
    </div>
</template>

<script>
export default {
    name: 'u-table-view-drop-ghost',
    props: {
        data: Object,
    },
    data() {
        return {
            currentStyle: undefined,
            lineStyle: undefined,
            maskStyle: undefined,
            next: undefined,
        };
    },
    watch: {
        data: {
            handler(value) {
                if (!value || !value.position) {
                    this.currentStyle = undefined;
                    this.lineStyle = undefined;
                    this.maskStyle = undefined;
                    return;
                }
                const rect = value.dragoverElRect;
                if (!rect)
                    return;
                const parentElRect = value.parentElRect;
                // const scrollViewEl = this.getScrollView(el);
                // const scrollRect = scrollViewEl.getBoundingClientRect();
                this.currentStyle = {
                    left: '0px',
                    top: rect.top - parentElRect.top + 'px',
                    width: parentElRect.width + 'px',
                    height: rect.height + 'px',
                };
                this.lineStyle = undefined;
                this.maskStyle = undefined;
                if (value.position === 'insertBefore') {
                    this.lineStyle = {
                        left: '0px',
                        top: '0px',
                        // right: rect.right - scrollRect.right + 'px',
                        width: '100%',
                    };
                } else if (value.position === 'insertAfter') {
                    this.lineStyle = {
                        left: '0px',
                        top: rect.height + 'px',
                        // right: rect.right - scrollRect.right + 'px',
                        width: '100%',
                    };
                } else if (value.position === 'append') {
                    this.maskStyle = {
                        top: '0px',
                        height: rect.height + 'px',
                        left: '0px',
                        // left: scrollRect.left - rect.left + 'px',
                        // right: rect.right - scrollRect.right + 'px',
                        width: '100%',
                    };
                }
            },
        },
    },
    methods: {
        getScrollView(el) {
            let parentEl = el.parentElement;
            while (parentEl) {
                const className = parentEl.getAttribute('class') || '';
                if (className.includes('f-scroll-view__')) {
                    break;
                }
                parentEl = parentEl.parentElement;
            }
            return parentEl;
        },
    },
};
</script>

<style module>
.root {
    position: absolute;
    pointer-events: none;
    z-index: 999;
}
.line {
    position: absolute;
    border: 1px solid var(--table-view-drop-ghost-border-color);
    width: 100%;
}
.line::before {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-left: 8px solid var(--table-view-drop-ghost-border-color);
    position: absolute;
    left: -1px;
    top: -4px;
}
.line::after {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-right: 8px solid var(--table-view-drop-ghost-border-color);
    position: absolute;
    right: -1px;
    top: -4px;
}
.line[disablednext] {
    border-color: var(--table-view-drop-ghost-disabled-border-color);
}
.line[disablednext]::before {
    border-left-color: var(--table-view-drop-ghost-disabled-border-color);
}
.line[disablednext]::after {
    border-right-color: var(--table-view-drop-ghost-disabled-border-color);
}
.mask {
    position: absolute;
    height: 0;
    background: var(--table-view-drop-ghost-mask-background);
    border: 1px dashed var(--table-view-drop-ghost-border-color);
}
</style>
