import { getDimension } from '../base/style';
import manager from '../u-draggable.vue/manager';

export default {
    name: 'u-droppable',
    props: {
        disabled: { type: Boolean, default: false },
    },
    render() {
        return this.$slots.default && this.$slots.default[0];
    },
    watch: {
        disabled(disabled) {
            this.watchDisabled(disabled);
        },
    },
    created() {
        manager.droppables.push(this);
    },
    destroyed() {
        manager.droppables.splice(manager.droppables.indexOf(this), 1);
    },
    methods: {
        watchDisabled(disabled) {
            if (disabled)
                this.$el.removeAttribute('droppable');
            else
                this.$el.setAttribute('droppable', 'droppable');
        },
        dragEnter(originVM) {
            const targetEl = this.$el;
            targetEl.setAttribute('droppable-target', 'droppable-target');

            let cancel = false;
            this.$emit('dragenter', Object.assign({
                originVM,
                sourceEl: originVM.$el,
                targetEl,
                preventDefault: () => cancel = true,
            }, manager));

            if (cancel)
                return originVM.cancel();
        },
        dragLeave(originVM) {
            const targetEl = this.$el;
            targetEl.removeAttribute('droppable-target');

            let cancel = false;
            this.$emit('dragleave', Object.assign({
                originVM,
                sourceEl: originVM.$el,
                targetEl,
                preventDefault: () => cancel = true,
            }, manager));

            if (cancel)
                return originVM.cancel();
        },
        dragOver(originVM) {
            const targetEl = this.$el;
            const dimension = getDimension(targetEl);

            let cancel = false;
            this.$emit('dragover', Object.assign({
                originVM,
                sourceEl: originVM.$el,
                targetEl,
                ratioX: (manager.clientX - dimension.left) / dimension.width,
                ratioY: (manager.clientY - dimension.top) / dimension.height,
                preventDefault: () => cancel = true,
            }, manager));

            if (cancel)
                return originVM.cancel();
        },
        drop(originVM) {
            const targetEl = this.$el;
            targetEl.removeAttribute('droppable-target');
            const dimension = getDimension(targetEl);

            this.$emit('drop', Object.assign({
                originVM,
                sourceEl: originVM.$el,
                targetEl,
                ratioX: (manager.clientX - dimension.left) / dimension.width,
                ratioY: (manager.clientY - dimension.top) / dimension.height,
            }, manager));
        },
    },
};
