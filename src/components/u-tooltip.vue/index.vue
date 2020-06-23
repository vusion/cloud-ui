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
    background: var(--tooltip-background-color);
    color: var(--tooltip-color);
    font-size: var(--font-size-small);
    z-index: var(--z-index-tooltip);
    border-radius: 2px;
}

.arrow {
    display: block;
    position: absolute;
    border: var(--tooltip-arrow-size) solid transparent;
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

.root[x-placement^="top"] { margin-bottom: var(--tooltip-arrow-size); }
.root[x-placement^="top"] .arrow {
    bottom: calc(-1 * var(--tooltip-arrow-size));
    margin-left: calc(-1 * var(--tooltip-arrow-size));
    border-width: var(--tooltip-arrow-size) var(--tooltip-arrow-size) 0;
    border-top-color: var(--tooltip-background-color);
}
.root[x-placement^="top"]::before {
    left: 0;
    right: 0;
    height: var(--tooltip-arrow-size);
    bottom: calc(-1 * var(--tooltip-arrow-size));
}
.root[x-placement="top-start"] .arrow { left: var(--tooltip-arrow-offset); }
.root[x-placement="top"] .arrow { left: 50%; }
.root[x-placement="top-end"] .arrow {
    right: var(--tooltip-arrow-offset);
    margin-right: calc(-1 * var(--tooltip-arrow-size));
}

.root[x-placement^="bottom"] { margin-top: var(--tooltip-arrow-size); }
.root[x-placement^="bottom"] .arrow {
    top: calc(-1 * var(--tooltip-arrow-size));
    margin-left: calc(-1 * var(--tooltip-arrow-size));
    border-width: 0 var(--tooltip-arrow-size) var(--tooltip-arrow-size);
    border-bottom-color: var(--tooltip-background-color);
}
.root[x-placement^="bottom"]::before {
    left: 0;
    right: 0;
    height: var(--tooltip-arrow-size);
    top: calc(-1 * var(--tooltip-arrow-size));
}
.root[x-placement="bottom-start"] .arrow { left: var(--tooltip-arrow-offset); }
.root[x-placement="bottom"] .arrow { left: 50%; }
.root[x-placement="bottom-end"] .arrow {
    right: var(--tooltip-arrow-offset);
    margin-right: calc(-1 * var(--tooltip-arrow-size));
}

.root[x-placement^="left"] { margin-right: var(--tooltip-arrow-size); }
.root[x-placement^="left"] .arrow {
    right: calc(-1 * var(--tooltip-arrow-size));
    margin-top: calc(-1 * var(--tooltip-arrow-size));
    border-width: var(--tooltip-arrow-size) 0 var(--tooltip-arrow-size) var(--tooltip-arrow-size);
    border-left-color: var(--tooltip-background-color);
}
.root[x-placement^="left"]::before {
    top: 0;
    bottom: 0;
    width: var(--tooltip-arrow-size);
    right: calc(-1 * var(--tooltip-arrow-size));
}
.root[x-placement="left-start"] .arrow { top: var(--tooltip-arrow-offset); }
.root[x-placement="left"] .arrow { top: 50%; }
.root[x-placement="left-end"] .arrow {
    bottom: var(--tooltip-arrow-offset);
    margin-bottom: calc(-1 * var(--tooltip-arrow-size));
}

.root[x-placement^="right"] { margin-left: var(--tooltip-arrow-size); }
.root[x-placement^="right"] .arrow {
    left: calc(-1 * var(--tooltip-arrow-size));
    margin-top: calc(-1 * var(--tooltip-arrow-size));
    border-width: var(--tooltip-arrow-size) var(--tooltip-arrow-size) var(--tooltip-arrow-size) 0;
    border-right-color: var(--tooltip-background-color);
}
.root[x-placement^="right"]::before {
    top: 0;
    bottom: 0;
    width: var(--tooltip-arrow-size);
    right: calc(-1 * var(--tooltip-arrow-size));
}
.root[x-placement="right-start"] .arrow { top: var(--tooltip-arrow-offset); }
.root[x-placement="right"] .arrow { top: 50%; }
.root[x-placement="right-end"] .arrow {
    bottom: var(--tooltip-arrow-offset);
    margin-bottom: calc(-1 * var(--tooltip-arrow-size));
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
