import MEmitter from '../m-emitter.vue';

export const ULabel = {
    name: 'u-label',
    mixins: [MEmitter],
    props: {
        removable: { type: Boolean, default: false },
    },
    methods: {
        remove() {
            if (this.$emitPrevent('before-remove', null, this))
                return;

            this.$emit('remove', null, this);
        },
    },
};

export default ULabel;
