export const ULinearProgress = {
    name: 'u-linear-progress',
    props: {
        percent: { type: Number, default: 0 },
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

export default ULinearProgress;
