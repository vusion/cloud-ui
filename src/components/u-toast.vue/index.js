import { UToast as OToast } from 'proto-ui.vusion';

export const UToast = {
    name: 'u-toast',
    extends: OToast,
    watch: {
        text(newValue, oldValue) {
            this.items.some((item, index) => {
                if (item.text === oldValue) {
                    item.text = newValue;
                    return true;
                }
                return false;
            });
        },
    },
    methods: {
        show(text, duration, color) {
            if (!this.$el)
                this.$mount(document.createElement('div'));
            // Vue 加载完成后，触发某一事件后，先执行methods，再执行watch方法，会导致标签显示异常
            this.$nextTick(() => {
                this.open({
                    text: text || this.text,
                    color,
                    duration: duration === undefined ? this.duration : duration,
                });
            });
        },
    },
};

export default UToast;
