import Emitter from 'u-emitter.vue';

export default {
    name: 'u-lightbox-item',
    props: {
        title: { type: String, default: '' },
    },
    mixins: [Emitter],
    computed: {
        index() {
            return this.parentVM.items.indexOf(this);
        },
        parentItemLen() {
            return this.parentVM.items.length;
        },
        isStart() {
            return this.index === this.parentVM.start;
        },
        isCurrent() {
            return this.index === this.parentVM.current;
        },
        isActive() {
            return this.index === this.parentVM.active;
        },
        isPrev() {
            return this.index === (this.parentVM.current - 1 + this.parentItemLen) % this.parentItemLen;
        },
        isNext() {
            return this.index === (this.parentVM.current + 1) % this.parentItemLen;
        },
    },
    created() {
        const parentVM = this.$parent;
        parentVM.$emit('add-item-vm', this);
        if (parentVM.selectedVM === undefined)
            parentVM.selectedVM = this;
        this.animation = parentVM.animation;
    },
    destroyed() {
        const parentVM = this.$parent;
        parentVM.$emit('remove-item-vm', this);
    },
    methods: {
        animationEnd() {
            this.dispatch('u-lightbox', 'u-lightbox-item-end', 1);
        },
    },
};
