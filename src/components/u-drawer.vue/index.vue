<template>
<transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut animate__fast">
    <div ref="root" :class="$style.root" v-if="currentVisible || animationVisible" :placement="placement"
        @click="maskClosable && cancel()"
        tabindex="1" @keydown.esc="cancel()">
        <transition
            :enter-active-class="'placement animate__animated animate__fadeIn' + animatePlacement"
            :leave-active-class="'placement animate__animated animate__fast animate__fadeOut' + animatePlacement">
            <div :class="$style.drawer"
                v-show="currentVisible && animationVisible"
                v-bind="$attrs" v-on="$listeners"
                @click.stop>
                <slot name="drawer">
                    <div :class="$style.head">
                        <slot name="head">
                            <div v-if="title" :class="$style.title">
                                <slot name="title">{{ title }}</slot>
                            </div>
                            <a :class="$style.close" @click="cancel()"></a>
                        </slot>
                    </div>
                    <div :class="$style.body">
                        <slot>{{ content }}</slot>
                    </div>
                    <div :class="$style.foot" v-if="okButton || cancelButton">
                        <slot name="foot">
                            <u-linear-layout>
                                <u-button :class="$style.button" v-if="okButton" color="primary" @click="ok()">{{ okButton }}</u-button>
                                <u-button :class="$style.button" v-if="cancelButton" @click="cancel()">{{ cancelButton }}</u-button>
                            </u-linear-layout>
                        </slot>
                    </div>
                </slot>
            </div>
        </transition>
    </div>
</transition>
</template>

<script>
import UModal from '../u-modal.vue';

export default {
    name: 'u-drawer',
    extends: UModal,
    props: {
        placement: { type: String, default: 'left' },
        maskClosable: { type: Boolean, default: true },
    },
    data() {
        return { animationVisible: this.visible };
    },
    computed: {
        animatePlacement() {
            return this.placement.replace(/^[a-z]/, (m) => m.toUpperCase());
        },
    },
    watch: {
        // @TODO: 为了让两个动画错开的临时解决方案
        currentVisible(currentVisible) {
            this.$nextTick(() => (this.animationVisible = currentVisible));
        },
    },
};
</script>

<style module>
.root {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--z-index-modal);
    -webkit-overflow-scrolling: touch;
    touch-action: cross-slide-y pinch-zoom double-tap-zoom;
    overflow: hidden;
    overflow-y: auto;
    background: var(--drawer-wrap-background);
}

.root::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
}

.root:focus {
    outline: var(--focus-outline);
}

.drawer {
    float: left;
    width: var(--drawer-width);
    height: 100%;
    background: var(--drawer-background);
}

.root[placement="right"] .drawer {
    float: right;
}

.drawer[size="small"] {
    width: var(--drawer-width-small);
}

.drawer[size="large"] {
    width: var(--drawer-width-large);
}

.drawer[size="auto"] {
    width: auto;
}

.head {
    position: relative;
    padding: var(--drawer-head-padding);
    border-bottom: 1px solid var(--gray-lightest);
}

.title {
    margin: 0;
    font-size: var(--font-size-base);
}

.close {
    position: absolute;
    right: var(--drawer-close-size);
    top: var(--drawer-close-size);
    color: var(--drawer-close-color);
}

.close::before {
    content: '\00d7';
    font-size: var(--font-size-huge);
    line-height: 0.8;
}

.close:hover {
    color: var(--drawer-close-color-hover);
}

.body {
    padding: var(--drawer-body-padding);
}

.foot {
    text-align: center;
    padding: var(--drawer-foot-padding);
}

.root[static] {
    position: static;
    padding: var(--drawer-static-padding);
}
</style>
