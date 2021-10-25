<template>
<transition name="fade-fast">
    <div :class="$style.root" v-show="currentOpened && ($slots.default || content)"><!-- @TODO: disabled by content -->
        <div :class="$style.arrow"></div><!-- popper在某些场景下可以移动该元素 -->
        <div :class="[$style.body, $style.wrap]" :size="size">
            <slot name="body">
                <slot>{{ content }}</slot>
            </slot>
        </div>
    </div>
</transition>
</template>

<script>
import MPopper from '../m-popper.vue';

export default {
    name: 'u-tooltip',
    extends: MPopper,
    props: {
        content: String, // @inherit: opened
        trigger: { type: String, default: 'hover' },
        placement: { type: String, default: 'bottom' }, // @inherit: reference
        // @inherit: hideDelay
        // @inherit: boundariesElement
        // @inherit: followCursor
        // @inherit: offset
        // @inherit: disabled
        size: { type: String, default: 'normal' },
    },
    watch: {
        content() {
            // 内容变化时，需要更新一下 tooltip 长度
            this.update();
        },
    },
};
</script>

<style module>
.root {
    position: relative;
    padding: var(--tooltip-padding);
    background: var(--tooltip-background);
    color: var(--tooltip-color);
    font-size: var(--font-size-small);
    z-index: var(--z-index-tooltip);
    border-radius: var(--tooltip-border-radius);
    box-shadow: var(--tooltip-box-shadow);
}

.arrow {
    display: block;
    position: absolute;
    width: calc(1.4*2*var(--tooltip-arrow-size));
    height: calc(1.4*var(--tooltip-arrow-size));
    overflow: hidden;
}

.arrow::before {
    display: block;
    position: absolute;
    left:50%;
    content: '';
    width: calc(2*var(--tooltip-arrow-size));
    height: calc(2*var(--tooltip-arrow-size));
    background: var(--tooltip-background);
    border-radius: calc(0.5*var(--tooltip-arrow-size));
    border: 1px solid var(--tooltip-border-color);
    box-shadow: var(--tooltip-box-shadow);
    transform: translate(-50%) rotate(45deg);
}

/**
 - 扩大区域鼠标 hover 区域
 - 保证原来的 .root 可以直接控制样式
*/
.root::before {
    content: '';
    display: block;
    position: absolute;
}

.root[data-popper-placement^="top"] { margin-bottom: var(--tooltip-arrow-size); }
.root[data-popper-placement^="top"] .arrow {
    bottom: calc(-1.4 * var(--tooltip-arrow-size) + 1px);
    transform: translateX(-50%);
}

.root[data-popper-placement^="top"] .arrow::before {
    top: calc(-50% * 1.4);
}

.root[data-popper-placement^="top"]::before {
    left: 0;
    right: 0;
    height: var(--tooltip-arrow-size);
    bottom: calc(-1 * var(--tooltip-arrow-size));
}

.root[data-popper-placement="top-start"] .arrow { left: var(--tooltip-arrow-offset); }
.root[data-popper-placement="top"] .arrow { left: 50%; }
.root[data-popper-placement="top-end"] .arrow {
    right: var(--tooltip-arrow-offset);
}

.root[data-popper-placement^="bottom"] { margin-top: var(--tooltip-arrow-size); }
.root[data-popper-placement^="bottom"] .arrow {
    top: calc(-1.4 * var(--tooltip-arrow-size) + 1px);
    transform: translateX(-50%);
}

.root[data-popper-placement^="bottom"] .arrow::before {
    bottom: calc(-50% * 1.4);
}

.root[data-popper-placement^="bottom"]::before {
    left: 0;
    right: 0;
    height: var(--tooltip-arrow-size);
    top: calc(-1 * var(--tooltip-arrow-size));
}
.root[data-popper-placement="bottom-start"] .arrow { left: var(--tooltip-arrow-offset); }
.root[data-popper-placement="bottom"] .arrow { left: 50%; }
.root[data-popper-placement="bottom-end"] .arrow {
    right: var(--tooltip-arrow-offset);
}

.root[data-popper-placement^="left"] { margin-right: var(--tooltip-arrow-size); }
.root[data-popper-placement^="left"] .arrow {
    height: calc(1.4*2*var(--tooltip-arrow-size));
    width: calc(1.4*var(--tooltip-arrow-size));
    right: calc(-1.4 * var(--tooltip-arrow-size) + 1px);
    transform: translateY(-50%);
}

.root[data-popper-placement^="left"] .arrow::before {
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
}

.root[data-popper-placement^="left"]::before {
    top: 0;
    bottom: 0;
    width: var(--tooltip-arrow-size);
    right: calc(-1 * var(--tooltip-arrow-size));
}
.root[data-popper-placement="left-start"] .arrow { top: var(--tooltip-arrow-offset); }
.root[data-popper-placement="left"] .arrow { top: 50%; }
.root[data-popper-placement="left-end"] .arrow {
    top: var(--tooltip-arrow-offset);
}

.root[data-popper-placement^="right"] { margin-left: var(--tooltip-arrow-size); }
.root[data-popper-placement^="right"] .arrow {
    height: calc(1.4*2*var(--tooltip-arrow-size));
    width: calc(1.4*var(--tooltip-arrow-size));
    left: calc(-1.4 * var(--tooltip-arrow-size) + 1px);
    transform: translateY(-50%);
}

.root[data-popper-placement^="right"] .arrow::before {
    left: 100%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
}

.root[data-popper-placement^="right"]::before {
    top: 0;
    bottom: 0;
    width: var(--tooltip-arrow-size);
    right: calc(-1 * var(--tooltip-arrow-size));
}
.root[data-popper-placement="right-start"] .arrow { top: var(--tooltip-arrow-offset); }
.root[data-popper-placement="right"] .arrow { top: 50%; }
.root[data-popper-placement="right-end"] .arrow {
    top: var(--tooltip-arrow-offset);
}

.body {
    max-width: 260px;
    line-height: 20px;
    word-break: break-all;
}

.body[size$="small"] {
    max-width: 120px;
}

.body[size^="small"] {
    max-height: 80px;
    overflow-y: auto;
}

.body[size$="normal"] {
    max-width: 260px;
}

.body[size^="normal"] {
    max-height: 140px;
    overflow-y: auto;
}

.body[size$="large"] {
    max-width: 440px;
}

.body[size^="large"] {
    max-height: 240px;
    overflow-y: auto;
}

.body[size$="auto"] {
    max-width: none;
}

.body[size^="auto"] {
    max-height: none;
}

.root ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: #9da8b3;
}
</style>
