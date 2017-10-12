export default {
    name: 'u-lightbox',
    props: {
        title: { type: String, default: '' },
        maskClose: { type: Boolean, default: true },
        closeButtom: { type: Boolean, default: false },
        visible: { type: Boolean, default: false },
    },
    data() {
        return {
            currentVisible: this.visible,
        };
    },
    methods: {
        // 显示灯箱
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
    },
};

