<template>
<transition name="fade">
    <div :class="$style.root" :size="size" :merge-borders="mergeBorders" v-show="currentOpened">
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
        size: String,
        content: String, // @inherit: opened
        // @inherit: trigger: { type: String, default: 'click' },
        // @inherit: placement: { type: String, default: 'bottom-start' },
        // @inherit: reference: HTMLElement, // 为了方便生成指令
        // @inherit: followCursor: { type: [Boolean, Number, Object], default: false },
        // @inherit: hideDelay: { type: Number, default: 100 },
        // @inherit: offset: { type: String, default: '0' },
        disabled: { type: Boolean, default: false },
        mergeBorders: { type: Boolean, default: true },
    }
};
</script>

<style module src="./index.css"></style>
