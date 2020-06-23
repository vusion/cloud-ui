<template>
<transition name="fade">
    <div :class="$style.root" :merge-borders="mergeBorders" v-show="currentOpened">
        <span :class="$style.arrow"></span><!-- popper在某些场景下可以移动该元素 -->
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
    border: var(--popup-arrow-size) solid transparent;
}
.arrow::before {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    border: var(--popup-outer-arrow-size) solid transparent;
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

.root[x-placement^="top"] { margin-bottom: var(--popup-arrow-size); }
.root[x-placement^="top"] .arrow {
    bottom: calc(-1 * var(--popup-arrow-size));
    margin-left: calc(-1 * var(--popup-arrow-size));
    border-width: var(--popup-arrow-size) var(--popup-arrow-size) 0;
    border-top-color: var(--popup-background);
}
.root[x-placement^="top"] .arrow::before {
    bottom: -1px;
    left: -1px;
    margin-left: calc(-1 * var(--popup-arrow-size));
    border-width: var(--popup-outer-arrow-size) var(--popup-outer-arrow-size) 0;
    border-top-color: var(--popup-border-color);
}
.root[x-placement^="top"]::before {
    left: 0;
    right: 0;
    height: var(--popup-arrow-size);
    bottom: calc(-1 * var(--popup-arrow-size));
}
.root[x-placement="top-start"] .arrow { left: var(--popup-arrow-offset); }
.root[x-placement="top"] .arrow { left: 50%; }
.root[x-placement="top-end"] .arrow { right: var(--popup-arrow-offset); }

.root[x-placement^="bottom"] { margin-top: var(--popup-arrow-size); }
.root[x-placement^="bottom"] .arrow {
    top: calc(-1 * var(--popup-arrow-size));
    margin-left: calc(-1 * var(--popup-arrow-size));
    border-width: 0 var(--popup-arrow-size) var(--popup-arrow-size);
    border-bottom-color: var(--popup-background);
}
.root[x-placement^="bottom"] .arrow::before {
    top: -1px;
    left: -1px;
    margin-left: calc(-1 * var(--popup-arrow-size));
    border-width: 0 var(--popup-outer-arrow-size) var(--popup-outer-arrow-size);
    border-bottom-color: var(--popup-border-color);
}
.root[x-placement^="bottom"]::before {
    left: 0;
    right: 0;
    height: var(--popup-arrow-size);
    top: calc(-1 * var(--popup-arrow-size));
}
.root[x-placement="bottom-start"] .arrow { left: var(--popup-arrow-offset); }
.root[x-placement="bottom"] .arrow { left: 50%; }
.root[x-placement="bottom-end"] .arrow { right: var(--popup-arrow-offset); }

.root[x-placement^="left"] { margin-right: var(--popup-arrow-size); }
.root[x-placement^="left"] .arrow {
    right: calc(-1 * var(--popup-arrow-size));
    margin-top: calc(-1 * var(--popup-arrow-size));
    border-width: var(--popup-arrow-size) 0 var(--popup-arrow-size) var(--popup-arrow-size);
    border-left-color: var(--popup-background);
}
.root[x-placement^="left"] .arrow::before {
    top: -1px;
    right: -1px;
    margin-top: calc(-1 * var(--popup-arrow-size));
    border-width: var(--popup-outer-arrow-size) 0 var(--popup-outer-arrow-size) var(--popup-outer-arrow-size);
    border-left-color: var(--popup-border-color);
}
.root[x-placement^="left"]::before {
    top: 0;
    bottom: 0;
    width: var(--popup-arrow-size);
    right: calc(-1 * var(--popup-arrow-size));
}
.root[x-placement="left-start"] .arrow { top: var(--popup-arrow-offset); }
.root[x-placement="left"] .arrow { top: 50%; }
.root[x-placement="left-end"] .arrow { bottom: var(--popup-arrow-offset); }

.root[x-placement^="right"] { margin-left: var(--popup-arrow-size); }
.root[x-placement^="right"] .arrow {
    left: calc(-1 * var(--popup-arrow-size));
    margin-top: calc(-1 * var(--popup-arrow-size));
    border-width: var(--popup-arrow-size) var(--popup-arrow-size) var(--popup-arrow-size) 0;
    border-right-color: var(--popup-background);
}
.root[x-placement^="right"] .arrow::before {
    top: -1px;
    left: -1px;
    margin-top: calc(-1 * var(--popup-arrow-size));
    border-width: var(--popup-outer-arrow-size) var(--popup-outer-arrow-size) var(--popup-outer-arrow-size) 0;
    border-right-color: var(--popup-border-color);
}
.root[x-placement^="right"]::before {
    top: 0;
    bottom: 0;
    width: var(--popup-arrow-size);
    right: calc(-1 * var(--popup-arrow-size));
}
.root[x-placement="right-start"] .arrow { top: var(--popup-arrow-offset); }
.root[x-placement="right"] .arrow { top: 50%; }
.root[x-placement="right-end"] .arrow { bottom: var(--popup-arrow-offset); }

.root[merge-borders] .arrow ~ * {
    border: none;
    box-shadow: none;
}
</style>
