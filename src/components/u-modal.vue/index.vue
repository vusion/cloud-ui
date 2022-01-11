<template>
<transition v-if="(currentVisible || animationVisible)"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut animate__fast">
    <div :class="$style.root" :static="this.static" @click="handleClose">
        <transition
            enter-active-class="animate__animated animate__fadeInDownSmall"
            leave-active-class="animate__animated animate__fadeOutUpSmall animate__fast">
            <div :class="[$style.dialog, this.$env.VUE_APP_DESIGNER ? $style.pos : null]" ref="dialog"
                v-if="currentVisible && animationVisible"
                :style="{ width: width + 'px' }" :size="size">
                <slot name="inject"></slot>
                <div :class="$style.head" vusion-slot-name="head" :child-cut-disabled="true">
                    <slot name="head">
                        <div v-if="title" vusion-slot-name="title" :class="$style.title" :child-cut-disabled="true">
                            <slot name="title">{{ title }}</slot>
                        </div>
                        <a :class="$style.close" @click="cancel()"></a>
                    </slot>
                </div>
                <div :class="$style.body" :icon="icon" vusion-slot-name="body" :child-cut-disabled="true">
                    <slot name="body">
                        <div :class="$style.text">
                            <div :class="$style.heading"><slot name="heading">{{ heading }}</slot></div>
                            <div :class="$style.content"><slot>{{ content }}</slot></div>
                            <div v-if="!!description" :class="$style.description"><slot name="description">{{ description }}</slot></div>
                        </div>
                    </slot>
                </div>
                <div :class="$style.foot" vusion-slot-name="foot" :child-cut-disabled="true" v-if="okButton || cancelButton">
                    <slot name="foot">
                        <u-linear-layout gap="small" justify="end">
                            <u-button :class="$style.button" v-if="cancelButton" :color="primaryButton === 'cancelButton' ? 'primary' : ''" :disabled="disableCancel" @click="cancel()">{{ cancelButton }}</u-button>
                            <u-button :class="$style.button" v-if="okButton" :color="primaryButton === 'okButton' ? 'primary' : ''" :disabled="disableOk" @click="ok()">{{ okButton }}</u-button>
                        </u-linear-layout>
                    </slot>
                </div>
            </div>
        </transition>
    </div>
</transition>
</template>

<script>
import { clickOutside } from '../../directives';
import i18n from './i18n';
import MEmitter from '../m-emitter.vue';

export const UModal = {
    name: 'u-modal',
    directives: { clickOutside },
    mixins: [MEmitter],
    i18n,
    props: {
        visible: { type: Boolean, default: false },
        title: {
            type: String,
            default() {
                return this.$t('dialog');
            },
        },
        content: String,
        description: String,
        okButton: {
            type: String,
            default() {
                return this.$t('ok');
            },
        },
        cancelButton: {
            type: String,
            default() {
                return this.$t('cancel');
            },
        },
        primaryButton: { type: String, default: 'okButton' },
        disableOk: { type: Boolean, default: false },
        disableCancel: { type: Boolean, default: false }, // @deprecated
        width: { type: [String, Number], default: '' },
        size: { type: String, default: 'normal' },
        static: { type: Boolean, default: false },
        icon: String,
        maskClose: { type: Boolean, default: false },
    },
    data() {
        return {
            currentVisible: this.visible,
            animationVisible: undefined,
        };
    },
    watch: {
        visible(visible) {
            this.currentVisible = visible;
        },
        currentVisible: {
            immediate: true,
            handler(visible) {
                this.$nextTick(() => this.animationVisible = visible);
                if (visible)
                    document.addEventListener('keydown', this.escPress);
                // 按esc退出弹框
                else
                    document.removeEventListener('keydown', this.escPress);
            },
        },
    },
    mounted() {
        if (this.$el && !this.static)
            document.body.appendChild(this.$el);
    },
    destroyed() {
        if (this.$el && this.$el.parentNode === document.body)
            document.body.removeChild(this.$el);
        if (this.currentVisible)
            document.removeEventListener('keydown', this.escPress);
    },
    methods: {
        open() {
            if (this.$emitPrevent('before-open', {}, this))
                return;
            if (!this.$el) {
                const el = document.createElement('div');
                this.$mount(el);
                document.body.appendChild(this.$el);
            }
            this.currentVisible = true;
            this.$emit('open');
        },
        close(ok) {
            if (this.$emitPrevent('before-close', { ok }, this))
                return;
            this.currentVisible = false;
            this.$emit('update:visible', false);
            this.$emit('close', { ok }, this);
        },
        ok() {
            if (this.disableOk)
                return;
            this.$emit('ok', undefined, this);
            this.close(true);
        },
        cancel() {
            if (this.disableCancel)
                return;
            this.$emit('cancel', undefined, this);
            this.close(false);
        },
        escPress(event) {
            if (event.keyCode === 27)
                this.cancel();
        },
        handleClose(e) {
            if (!this.$refs.dialog)
                return false;
            if (this.maskClose && !this.$refs.dialog.contains(e.target))
                this.close();
        },
    },
    install(Vue, id) {
        const Ctor = Vue.component(id);
        Vue.prototype.$alert = (content, title, okButton) => new Promise((resolve, reject) => {
            const propsData = typeof content === 'object' ? content : { content, title, okButton, cancelButton: '' };
            const instance = new Ctor({
                propsData,
            });

            instance.$on('ok', () => resolve(true));
            instance.open();
        });
        Vue.prototype.$confirm = (content, title, okButton, cancelButton) => new Promise((resolve, reject) => {
            const propsData = typeof content === 'object' ? content : { content, title, okButton, cancelButton: '' };
            const instance = new Ctor({
                propsData,
            });

            instance.$on('ok', () => resolve(true));
            instance.$on('cancel', () => reject(false));
            instance.open();
        });
        Vue.prototype.$confirmResult = (content, title, okButton, cancelButton) => new Promise((resolve, reject) => {
            const propsData = typeof content === 'object' ? content : { content, title, okButton, cancelButton: '' };
            const instance = new Ctor({
                propsData,
            });

            instance.$on('ok', () => resolve(true));
            instance.$on('cancel', () => resolve(false));
            instance.open();
        });
    },
};

export default UModal;
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
    text-align: center;
    overflow: hidden;
    overflow-y: auto;
    background: rgba(0, 0, 0, 0.6);
    padding-top: 65px;
    padding-bottom: 30px;
}

.root::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
}

.dialog {
    position: relative;
    width: var(--modal-dialog-width);
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    background: var(--modal-dialog-background);
    border: 1px solid var(--modal-border-color);
    border-radius: var(--modal-dialog-border-radius);
    box-shadow: var(--modal-dialog-box-shadow);
}

.dialog[size="small"] {
    width: var(--modal-dialog-width-small);
}

.dialog[size="normal"] {
    width: var(--modal-dialog-width);
}

.dialog[size="large"] {
    width: var(--modal-dialog-width-large);
}

.dialog[size="huge"] {
    width: var(--modal-dialog-width-huge);
}

.dialog[size="auto"] {
    width: auto;
}

.head {
    position: relative;
    padding: var(--modal-head-padding);
    border-bottom: 1px solid var(--modal-border-color);
}

.title {
    margin: 0;
    font-size: var(--modal-title-font-size);
    font-weight: var(--modal-title-font-weight);
}

.close {
    position: absolute;
    right: var(--modal-close-right);
    top: 50%;
    transform: translateY(-50%);
    line-height: 1;
    color: var(--modal-close-color);
}

.close:hover {
    color: var(--modal-close-color-hover);
}

.close::before {
    icon-font: url("./assets/close.svg");
    font-size: 12px;
}

.body {
    position: relative;
    margin: var(--modal-body-margin);
}

.body[icon] {
    margin: 34px 60px;
}

.body[icon]::before {
    position: absolute;
    left: 0;
    top: 0;
}

.body[icon="warning"]::before {
    icon-font: url('./assets/warning.svg');
    color: #FFAF0F;
    font-size: 48px;
    line-height: 48px;
}

.body[icon="success"]::before {
    icon-font: url('./assets/success.svg');
    color: #26BD71;
    font-size: 48px;
    line-height: 48px;
}

.body[icon="error"]::before {
    icon-font: url('./assets/warning.svg');
    color: #F24957;
    font-size: 48px;
    line-height: 48px;
}

.body[icon] .text {
    margin-left: calc(48px + 16px);
    min-height: 48px;
}

.content {
    color: var(--color-base);
}

.body[icon] .content {
    font-size: 14px;
}

.description {
    margin-top: 5px;
    font-size: 12px;
    color: var(--color-base);
}

.foot {
    margin: var(--modal-foot-margin);
    padding: var(--modal-foot-padding);
    text-align: center;
    border-top: 1px solid var(--modal-border-color);
}

.foot [class^="u-linear-layout_"][direction="horizontal"] > *:not(:last-child) {
    margin-right: 10px;
}

@media (--small-window) {
    .dialog {
        width: auto;
        margin: 10px;
    }
}

.root[static] {
    position: static;
    padding: var(--space-base);
}

</style>