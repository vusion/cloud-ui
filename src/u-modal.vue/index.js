import Vue from 'vue';
import { clickOutside } from '../base/directives';
import i18n from './i18n';

const Modal = {
    name: 'u-modal',
    i18n,
    props: {
        visible: { type: Boolean, default: false },
        title: { type: String, default() { return this.$t('dialog'); } },
        content: String,
        heading: String,
        okButton: { type: String, default() { return this.$t('ok'); } },
        cancelButton: { type: String, default() { return this.$t('cancel'); } },
        primaryButton: { type: String, default: 'okButton' },
        disableOk: { type: Boolean, default: false },
        disableCancel: { type: Boolean, default: false },
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
            isMouseDown: false,
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
                const el = document.createElement('div');
                this.$mount(el);
                document.body.appendChild(this.$el);
            }
            this.currentVisible = true;
            this.$emit('open');
        },
        close(ok) {
            let cancel = false;
            this.$emit('before-close', {
                ok,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.currentVisible = false;

            this.$emit('update:visible', false);
            this.$emit('close', {
                ok,
            }, this);
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
            this.isMouseDown = this.$refs.dialog.contains(e.target);
            if (!this.$refs.dialog.contains(e.target) && this.maskClose && !this.isMouseDown)
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
