const Modal = {
    name: 'u-modal',
    props: {
        title: { type: String, default: '提示' },
        content: String,
        heading: String,
        okButton: { type: String, default: '确定' },
        cancelButton: { type: String, default: '取消' },
        visible: { type: Boolean, default: false },
        // @deprecated
        width: { type: [String, Number], default: '' },
        size: { type: String, default: 'normal' },
        static: { type: Boolean, default: false },
        icon: String,
    },
    data() {
        return {
            currentVisible: this.visible,
        };
    },
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
    },
};

Modal.alert = (content, title = '提示') => {
    const Ctor = Modal._Ctor[0];
    new Ctor({
        propsData: { content, title },
    }).open();
};

Modal.confirm = (content, title = '提示') => {
    const Ctor = Modal._Ctor[0];
    new Ctor({
        propsData: { content, title },
    }).open();
};

export default Modal;
