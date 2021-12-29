<template>
<transition name="fade">
    <div :class="$style.root" :merge-borders="mergeBorders" v-show="currentOpened">
        <span data-popper-arrow :class="$style.arrow"></span><!-- popper在某些场景下可以移动该元素 -->
        <slot name="root">
            <div :class="$style.head" v-if="title || $slots.head || $slots.title">
                <slot name="head">
                    <div :class="$style.title">
                        <slot name="title">{{ title }}</slot>
                    </div>
                </slot>
            </div>
            <div :class="$style.body" v-if="content || $slots.body || $slots.default">
                <slot name="body">
                    <slot>{{ content }}</slot>
                </slot>
            </div>
            <div :class="$style.foot" v-if="$slots.foot">
                <slot name="foot"></slot>
            </div>
        </slot>
    </div>
</transition>
</template>

<script>
import MPopper from '../m-popper.vue';
export default {
    name: 'u-popup',
    extends: MPopper,
    props: {
        title: String,
        content: String, // @inherit: opened
        // @inherit: trigger: { type: String, default: 'click' },
        // @inherit: placement: { type: String, default: 'bottom-start' },
        // @inherit: reference: HTMLElement, // 为了方便生成指令
        // @inherit: followCursor: { type: [Boolean, Number, Object], default: false },
        // @inherit: hideDelay: { type: Number, default: 100 },
        // @inherit: offset: { type: String, default: '0' },
        disabled: { type: Boolean, default: false },
        mergeBorders: { type: Boolean, default: true },
    },
};
</script>

<style module>
.root {
    position: relative;
    min-width: 140px;
    background: var(--popup-background);
    border: 1px solid var(--popup-border-color);
    box-shadow: var(--popup-box-shadow);
    z-index: var(--z-index-popper);
}
.head {
    padding: var(--popup-padding);
    background: var(--popup-head-background);
    border-bottom: 1px solid var(--popup-border-color);
}
.title {
    font-weight: var(--font-weight-bold);
}
.body {
    padding: var(--popup-padding);
}
.foot {
    border-top: 1px solid var(--popup-border-color);
    padding: var(--popup-padding);
}
.arrow {
    display: block;
    position: absolute;
    width: calc(1.4*2*var(--popup-arrow-size));
    height: calc(1.4*var(--popup-arrow-size));
    overflow: hidden;
}
.arrow::before {
    display: block;
    position: absolute;
    left:50%;
    content: '';
    width: calc(2*var(--popup-arrow-size));
    height: calc(2*var(--popup-arrow-size));
    background: var(--popup-background);
    border-radius: calc(0.5*var(--popup-arrow-size));
    border: 1px solid var(--popup-border-color);
    box-shadow: var(--popup-box-shadow);
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
.root[data-popper-placement^="top"] { margin-bottom: var(--popup-arrow-size); }
.root[data-popper-placement^="top"] .arrow {
    bottom: calc(-1.4 * var(--popup-arrow-size) + 1px);
    transform: translateX(-50%);
}
.root[data-popper-placement^="top"] .arrow::before {
    top: calc(-50% * 1.4);
}
.root[data-popper-placement^="top"]::before {
    left: 0;
    right: 0;
    height: var(--popup-arrow-size);
    bottom: calc(-1 * var(--popup-arrow-size));
}
.root[data-popper-placement="top-start"] .arrow { left: var(--popup-arrow-offset); }
.root[data-popper-placement="top"] .arrow { left: 50%; }
.root[data-popper-placement="top-end"] .arrow {
    right: var(--popup-arrow-offset);
}
.root[data-popper-placement^="bottom"] { margin-top: var(--popup-arrow-size); }
.root[data-popper-placement^="bottom"] .arrow {
    top: calc(-1.4 * var(--popup-arrow-size) + 1px);
    transform: translateX(-50%);
}
.root[data-popper-placement^="bottom"] .arrow::before {
    bottom: calc(-50% * 1.4);
}
.root[data-popper-placement^="bottom"]::before {
    left: 0;
    right: 0;
    height: var(--popup-arrow-size);
    top: calc(-1 * var(--popup-arrow-size));
}
.root[data-popper-placement="bottom-start"] .arrow { left: var(--popup-arrow-offset); }
.root[data-popper-placement="bottom"] .arrow { left: 50%; }
.root[data-popper-placement="bottom-end"] .arrow {
    right: var(--popup-arrow-offset);
}
.root[data-popper-placement^="left"] { margin-right: var(--popup-arrow-size); }
.root[data-popper-placement^="left"] .arrow {
    height: calc(1.4*2*var(--popup-arrow-size));
    width: calc(1.4*var(--popup-arrow-size));
    right: calc(-1.4 * var(--popup-arrow-size) + 1px);
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
    width: var(--popup-arrow-size);
    right: calc(-1 * var(--popup-arrow-size));
}
.root[data-popper-placement="left-start"] .arrow { top: var(--popup-arrow-offset); }
.root[data-popper-placement="left"] .arrow { top: 50%; }
.root[data-popper-placement="left-end"] .arrow {
    top: var(--popup-arrow-offset);
}
.root[data-popper-placement^="right"] { margin-left: var(--popup-arrow-size); }
.root[data-popper-placement^="right"] .arrow {
    height: calc(1.4*2*var(--popup-arrow-size));
    width: calc(1.4*var(--popup-arrow-size));
    left: calc(-1.4 * var(--popup-arrow-size) + 1px);
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
    width: var(--popup-arrow-size);
    right: calc(-1 * var(--popup-arrow-size));
}
.root[data-popper-placement="right-start"] .arrow { top: var(--popup-arrow-offset); }
.root[data-popper-placement="right"] .arrow { top: 50%; }
.root[data-popper-placement="right-end"] .arrow {
    top: var(--popup-arrow-offset);
}
.root[merge-borders] .arrow ~ * {
    border: none;
    box-shadow: none;
}
</style>
