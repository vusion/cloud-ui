import Vue from 'vue';
import { clickOutside } from '../../directives';
import i18n from './i18n';

export const Modal = {
    name: 'u-modal',
    i18n,
    props: {
        title: { type: String, default() { return this.$t('dialog'); } },
        content: String,
        heading: String,
        okButton: { type: String, default() { return this.$t('ok'); } },
        cancelButton: { type: String, default() { return this.$t('cancel'); } },
        visible: { type: Boolean, default: false },
        // @deprecated
        width: { type: [String, Number], default: '' },
        size: { type: String, default: 'normal' },
        static: { type: Boolean, default: false },
        icon: String,
        maskClose: { type: Boolean, default: false },
    },
    data() {
        return {
            currentVisible: this.visible,
        };
    },
    directives: { clickOutside },
    watch: {
        visible(visible) {
            this.currentVisible = visible;
        },
        currentVisible(visible) {
            if (visible)
                document.addEventListener('keydown', this.escPress);// 按esc退出弹框
            else
                document.removeEventListener('keydown', this.escPress);
        },
    },
    mounted() {
        if (this.$el && !this.static)
            document.body.appendChild(this.$el);
    },
    destroyed() {
        if (this.$el && this.$el.parentNode === document.body)
            document.body.removeChild(this.$el);
    },
    methods: {
        open() {
            if (!this.$el) {
                const ele = document.createElement('div');
                this.$mount(ele);
                document.body.appendChild(this.$el);
            }
            this.currentVisible = true;
            this.$emit('open');
        },
        close() {
            let cancel = false;
            this.$emit('before-close', {
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.currentVisible = false;

            this.$emit('update:visible', false);
            this.$emit('close');
        },
        ok() {
            this.$emit('ok');
            this.close();
        },
        cancel() {
            this.$emit('cancel');
            this.close();
        },
        escPress(event) {
            if (event.keyCode === 27)
                this.cancel();
        },
        handleClose() {
            if (this.maskClose)
                this.close();
        },
    },
};

Modal.alert = (content, title) => {
    const Ctor = Modal._Ctor[0];
    new Ctor({
        propsData: { content, title, cancelButton: '' },
    }).open();
};

Modal.confirm = (content, title) => new Promise((resolve, reject) => {
    const Ctor = Modal._Ctor[0];
    const instance = new Ctor({
        propsData: { content, title },
    });
    instance.$on('ok', () => resolve());
    instance.$on('cancel', () => reject());
    instance.open();
});

Vue.prototype.$alert = Modal.alert;
Vue.prototype.$confirm = Modal.confirm;

export default Modal;
