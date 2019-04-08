import { UCircularProgress } from 'proto-ui.vusion';

export const UCircularSpecificProgress = {
    name: 'u-circular-specific-progress',
    extends: UCircularProgress,
    props: {
        rule: {
            type: Object,
            default() {
                return {
                    value: -1,
                };
            },
        },
    },
    computed: {
        stroke() {
            if (!this.rule.color)
                return '';
            else if (this.percent - this.rule.value > 0)
                return this.rule.color;
        },
    },
};

export default UCircularSpecificProgress;
