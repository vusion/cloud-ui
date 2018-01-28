import Emitter from 'proto-ui.vusion/src/u-emitter.vue';
import RouterItem from 'proto-ui.vusion/src/u-router-item.vue';

export default {
    name: 'u-step',
    parentName: 'u-steps',
    mixins: [Emitter, RouterItem],
    props: {
        title: String,
    },
    data() {
        return {
            parentVM: undefined,
        };
    },
    computed: {
        selected() {
            if (this.parentVM)
                return this.parentVM.router ? this.active : this.parentVM.selectedVM === this;
        },
    },
    created() {
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
    },
    destroyed() {
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
    },
};
