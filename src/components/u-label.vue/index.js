import MEmitter from '../m-emitter.vue';

export const ULabel = {
    name: 'u-label',
    mixins: [MEmitter],
    methods: {
        close() {
            if (this.$emitPrevent('before-close', null, this))
                return;

            this.$emit('close', null, this);
        },
    },
};

export default ULabel;
