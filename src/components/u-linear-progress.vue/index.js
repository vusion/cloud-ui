import LinearProgress from 'proto-ui.vusion/src/u-linear-progress.vue';

export default {
    name: 'u-linear-progress',
    mixins: [LinearProgress],
    props: {
        range: {
            type: Array,
            default() {
                return [0, 100];
            },
        },
    },
    computed: {
        maxWidth() {
            return (this.range[1] || 100) - (this.range[0] || 0) + '%';
        },
    },
};
