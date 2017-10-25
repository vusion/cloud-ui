const Modal = {
    name: 'u-modal',
    props: {
        title: { type: String, default: '提示' },
        content: { type: String, default: '提示内容' },
        okButton: { type: String, default: '确定' },
        cancelButton: { type: String, default: '取消' },
        visible: { type: Boolean, default: false },
        // @deprecated
        width: { type: [String, Number], default: '' },
        size: { type: String, default: 'normal' },
        icon: { type: String, default: '' },
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
