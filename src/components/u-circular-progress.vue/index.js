import CircularProgress from 'proto-ui.vusion/src/u-circular-progress.vue';

export default {
    name: 'u-circular-specific-progress',
    mixins: [CircularProgress],
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
