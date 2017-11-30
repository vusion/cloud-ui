import { manager, getDimension } from '../base/style.js';

export default {
    name: 'u-droppable',
    props: {
        element: {
            type: String,
            default: 'div',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        value: String,
    },
    data() {
        return {};
    },
    created() {
        manager.droppables.push(this);
    },
    render(h) {
        return h(this.element, {
            class: 'root',
            attrs: {
                disabled: this.disabled,
            },
        }, this.$slots.default);
    },
    methods: {
        dragEnter(origin) {
            const element = this.$el;
            this.$emit('dragenter', Object.assign({
                sender: this,
                origin,
                source: origin.$el,
                target: element,
                cancel: origin.cancel,
            }, manager));
        },
        /**
         * @private
         */
        dragLeave(origin) {
            const element = this.$el;
            this.$emit('dragleave', Object.assign({
                sender: this,
                origin,
                source: origin.$el,
                target: element,
                cancel: origin.cancel,
            }, manager));
        },
        /**
         * @private
         */
        dragOver(origin) {
            const element = this.$el;
            const dimension = getDimension(element);
            this.$emit('dragover', Object.assign({
                sender: this,
                origin,
                source: origin.$el,
                target: element,
                ratioX: (manager.clientX - dimension.left) / dimension.width,
                ratioY: (manager.clientY - dimension.top) / dimension.height,
                cancel: origin.cancel,
            }, manager));
        },
        /**
         * @private
         */
        drop(origin) {
            const element = this.$el;
            const dimension = getDimension(element);

            this.$emit('update:value', origin.value);

            this.$emit('drop', Object.assign({
                sender: this,
                origin,
                source: origin.$el,
                target: element,
                ratioX: (manager.clientX - dimension.left) / dimension.width,
                ratioY: (manager.clientY - dimension.top) / dimension.height,
            }, manager));
        },
    },
    destroyed() {
        manager.droppables.splice(manager.droppables.indexOf(this), 1);
    },
};
