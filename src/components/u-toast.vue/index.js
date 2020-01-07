export const UToast = {
    name: 'u-toast',
    props: {
        position: { type: String, default: 'top-center' },
        single: { type: Boolean, default: false },
        duration: { type: Number, default: 2000 },
        color: { type: String, default: 'default' },
        text: String,
        closable: { type: Boolean, default: false },
    },
    data() {
        return {
            items: [],
            itemsQueue: new Map(),
        };
    },
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
    mounted() {
        if (this.position !== 'static')
            document.body.appendChild(this.$el);
    },
    destroyed() {
        this.clearItemsQueue();
        if (this.position !== 'static')
            document.body.removeChild(this.$el);
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
        open(options) {
            let item = this.items[0];
            const itemsQueue = this.itemsQueue;
            if (this.single && item) {
                if (itemsQueue.has(item)) {
                    clearTimeout(itemsQueue.get(item));
                    itemsQueue.delete(item);
                }
                Object.assign(item, options);
            } else {
                item = options;
                this.items.unshift(item);
            }

            if (item.duration) {
                itemsQueue.set(item, setTimeout(() => {
                    itemsQueue.delete(item);
                    this.close(item);
                }, item.duration));
            }

            this.$emit('open', item, this);
        },
        close(item) {
            let cancel = false;
            this.$emit('before-close', Object.assign({
                preventDefault: () => cancel = true,
            }, item), this);
            if (cancel)
                return;

            const index = this.items.indexOf(item);
            ~index && this.items.splice(index, 1);

            this.$emit('close', item, this);
        },
        clearItemsQueue() {
            this.itemsQueue.forEach((timer) => {
                clearTimeout(timer);
            });
            this.itemsQueue.clear();
        },
        /**
         * @method closeAll() 关闭所有消息
         * @return {void}
         */
        closeAll() {
            this.clearItemsQueue();
            this.items = [];
        },
        success(message, duration) {
            this.show(message, duration, 'success');
        },
        warning(message, duration) {
            this.show(message, duration, 'warning');
        },
        info(message, duration) {
            this.show(message, duration, 'info');
        },
        error(message, duration) {
            this.show(message, duration, 'error');
        },
    },
    install(Vue, id) {
        const Ctor = Vue.component(id);
        if (!Ctor)
            return;

        const toast = Vue.prototype.$toast = this.toast = new Ctor();

        const METHODS = ['show', 'closeAll', 'success', 'warning', 'info', 'error'];
        METHODS.forEach((method) => this[method] = toast[method].bind(toast));
    },
};

export default UToast;
