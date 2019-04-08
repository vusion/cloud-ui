import { ULinearProgress as OLinearProgress } from 'proto-ui.vusion';

export const ULinearProgress = {
    name: 'u-linear-progress',
    extends: OLinearProgress,
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

export default ULinearProgress;
