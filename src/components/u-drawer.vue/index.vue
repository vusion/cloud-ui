<template>
    <transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut animate__fast"
        @after-enter="onTransitionAterEnter">
        <div ref="root" :class="$style.root" v-if="currentVisible || animationVisible" :placement="placement"
             @click="(maskClosable && !hideMask) && cancel()"
             tabindex="1" @keydown.esc="cancel()"
             :hideMask="hideMask">
            <transition
                :enter-active-class="'placement animate__animated animate__fadeIn' + animatePlacement"
                :leave-active-class="'placement animate__animated animate__fast animate__fadeOut' + animatePlacement">
                <div :class="$style.drawer"
                     v-if="currentVisible && animationVisible"
                     :size="size"
                     v-bind="$attrs" v-on="$listeners"
                     @click.stop>
                    <slot name="inject"></slot>
                    <slot name="drawer">
                        <div :class="$style.head" v-show="showHead" vusion-slot-name="head" :child-cut-disabled="true" ref="head">
                            <slot name="head">
                                <div v-if="title" :class="$style.title" vusion-slot-name="title"
                                     vusion-slot-name-edit="title" :child-cut-disabled="true">

                                    <slot name="title">
                                        <s-empty
                                            v-if="(!$slots.title) && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']"></s-empty>
                                        <template v-else>
                                            {{ title }}
                                        </template>
                                    </slot>
                                </div>
                                <a :class="$style.close" @click="cancel()"></a>
                            </slot>
                        </div>
                        <div :class="$style.body" vusion-slot-name="body" :child-cut-disabled="true" :style="{height: bodyHeight}">
                            <slot name="body">
                                <s-empty
                                    v-if="(!$slots.body) && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']"></s-empty>
                                <template v-else>
                                    {{ content }}
                                </template>
                            </slot>
                        </div>
                        <div :class="$style.foot" v-show="showFoot && (okButton || cancelButton)" vusion-slot-name="foot"
                             :child-cut-disabled="true" ref="foot">

                            <slot name="foot">
                                <s-empty
                                    v-if="(!$slots.foot) && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']"></s-empty>
                                <u-linear-layout gap="small" v-else>
                                    <u-button :class="$style.button" v-if="okButton" color="primary" @click="ok()">
                                        {{ okButton }}
                                    </u-button>
                                    <u-button :class="$style.button" v-if="cancelButton" @click="cancel()">
                                        {{ cancelButton }}
                                    </u-button>
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
import UModal from '../u-modal.vue/index.vue';
import SEmpty from '../../components/s-empty.vue';

export default {
    name: 'u-drawer',
    extends: UModal,
    Component: {
        SEmpty,
        UModal,
    },
    props: {
        placement: {
            type: String,
            default: 'right',
        },
        maskClosable: {
            type: Boolean,
            default: true,
        },
        showFoot: {
            type: Boolean,
            default: true,
        },
        showHead: {
            type: Boolean,
            default: true,
        },
        content: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        size: {
            type: String,
            default: 'normal',
        },
        hideMask: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            animationVisible: this.visible,
            bodyHeight: undefined,
        };
    },
    computed: {
        animatePlacement() {
            return this.placement.replace(/^[a-z]/, (m) => m.toUpperCase());
        },
    },
    watch: {
        // @TODO: 为了让两个动画错开的临时解决方案
        currentVisible(currentVisible) {
            if (currentVisible && !this.$env.VUE_APP_DESIGNER) {
                this.$parent.openEvent();
            }
            this.$nextTick(() => (this.animationVisible = currentVisible));
        },
    },
    methods: {
        onTransitionAterEnter() {
            const headEl = this.$refs.head;
            const footEl = this.$refs.foot;
            if (!headEl && !footEl)
                return;
            const height = headEl.offsetHeight + footEl.offsetHeight;
            this.bodyHeight = `calc(100% - ${height}px)`;
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
    width: var(--drawer-width);
}

.drawer[size="normal"] {
    width: var(--drawer-width-large);
}

.drawer[size="large"] {
    width: var(--drawer-width-huge);
}

.drawer[size="auto"] {
    width: auto;
}

.head {
    position: relative;
    padding: var(--drawer-head-padding);
    border-bottom: 1px solid var(--drawer-border-color);
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
    icon-font: url("../u-modal.vue/assets/close.svg");
    font-size: 12px;
    line-height: 0.8;
}

.close:hover {
    color: var(--drawer-close-color-hover);
}

.body {
    padding: var(--drawer-body-padding);
    overflow-y: var(--drawer-body-overflow-y);
    height: calc(100% - 140px);
}

.root .foot {
    position: fixed;
    width: inherit;
    padding: var(--drawer-foot-padding);
    border-top: 1px solid var(--drawer-border-color);
    bottom: 0;
}

.root[static] {
    position: static;
    padding: var(--drawer-static-padding);
}

.root[hidemask] {
    background: transparent;
    left: initial;
}
.root[hidemask] .drawer{
    border-left: 1px solid var(--drawer-border-color);
}
</style>
