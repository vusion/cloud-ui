export default {
    name: 'u-grid',
    props: {
        type: {
            type: String,
            default: undefined,
        },
        gap: {
            type: String,
            default: 'normal', // large small normal none
        },
    },
    data() {
        return {
            gapMap: {
                large: 30,
                normal: 20,
                small: 10,
                none: 0,
            },
        };
    },
    computed: {
        rowGap() {
            const gapType = this.gap.split(' ')[1] || this.gap.split(' ')[0];
            return this.gapMap[gapType];
        },
        columnGap() {
            const gapType = this.gap.split(' ')[0];
            return this.gapMap[gapType];
        },
        columnGapStyleObject() {
            return {
                marginTop: '-' + this.columnGap / 2 + 'px',
                marginBottom: '-' + this.columnGap / 2 + 'px',
            };
        },
    },
};
