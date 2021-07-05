<template>
<transition v-if="currentVisible || animationVisible"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut animate__fast">
    <div :class="$style.root" :static="this.static" @click="handleClose">
        <transition
            enter-active-class="animate__animated animate__fadeInDownSmall"
            leave-active-class="animate__animated animate__fadeOutUpSmall animate__fast">
            <div :class="$style.dialog" ref="dialog"
                v-if="currentVisible && animationVisible"
                :style="{ width: width + 'px' }" :size="size">
                <div :class="$style.head">
                    <slot name="head">
                        <div v-if="title" :class="$style.title">
                            <slot name="title">{{ title }}</slot>
                        </div>
                        <a :class="$style.close" @click="cancel()"></a>
                    </slot>
                </div>
                <div :class="$style.body" :icon="icon">
                    <slot name="body">
                        <div :class="$style.text">
                            <div :class="$style.heading"><slot name="heading">{{ heading }}</slot></div>
                            <div :class="$style.content"><slot>{{ content }}</slot></div>
                        </div>
                    </slot>
                </div>
                <div :class="$style.foot" v-if="okButton || cancelButton">
                    <slot name="foot">
                        <u-linear-layout>
                            <u-button :class="$style.button" v-if="okButton" :color="primaryButton === 'okButton' ? 'primary' : ''" :disabled="disableOk" @click="ok()">{{ okButton }}</u-button>
                            <u-button :class="$style.button" v-if="cancelButton" :color="primaryButton === 'cancelButton' ? 'primary' : ''" :disabled="disableCancel" @click="cancel()">{{ cancelButton }}</u-button>
                        </u-linear-layout>
                    </slot>
                </div>
            </div>
        </transition>
    </div>
</transition>
</template>

<script>
import Vue from 'vue';
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
        heading: String,
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
        Vue.prototype.$alert = (content, title, okButton) =>
            new Promise((resolve, reject) => {
                const instance = new Ctor({
                    propsData: { content, title, okButton, cancelButton: '' },
                });

                instance.$on('ok', () => resolve(true));
                instance.open();
            });
        Vue.prototype.$confirm = (content, title, okButton, cancelButton) =>
            new Promise((resolve, reject) => {
                const instance = new Ctor({
                    propsData: { content, title, okButton, cancelButton },
                });

                instance.$on('ok', () => resolve(true));
                instance.$on('cancel', () => reject(false));
                instance.open();
            });
        Vue.prototype.$confirmResult = (content, title, okButton, cancelButton) =>
            new Promise((resolve, reject) => {
                const instance = new Ctor({
                    propsData: { content, title, okButton, cancelButton },
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
    z-index: 1000;
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
    width: var(--modal-dialog-width);
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    background: var(--modal-dialog-background);
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
}

.close {
    position: absolute;
    right: var(--modal-title-font-size);
    top: 50%;
    transform: translateY(-50%);
    line-height: 1;
    color: var(--modal-close-color);
}

.close:hover {
    color: var(--modal-close-color-hover);
}

.close::before {
    icon-font: url("../i-icon.vue/icons/close.svg");
    font-size: var(--modal-title-font-size);
}

.body {
    position: relative;
    margin: var(--modal-body-margin);
}

.body[icon] {
    margin-top: 50px;
}

.body[icon]::before {
    position: absolute;
    left: 0;
    top: 0;
}

.body[icon="warning"]::before {
    icon-font: url('../i-icon.vue/assets/warning.svg');
    color: #fbcc3e;
    font-size: 40px;
    line-height: 40px;
}

.body[icon="success"]::before {
    icon-font: url('../i-icon.vue/assets/success.svg');
    color: #3ad0af;
    font-size: 40px;
    line-height: 40px;
}

.body[icon="error"]::before {
    icon-font: url('../i-icon.vue/assets/error.svg');
    color: #ff867f;
    font-size: 40px;
    line-height: 40px;
}

.body[icon] .text {
    margin-left: 50px;
}

.heading {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 10px;
    color: var(--color-base);
}

.content {
    color: var(--color-light);
}

.foot {
    margin: var(--modal-foot-margin);
    text-align: center;
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
