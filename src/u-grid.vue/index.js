export default {
    name: 'u-grid',
    props: {
        type: {
            type: String,
            default: undefined,
        },
        gap: {
            type: String,
            default: 'medium', // wide narrow medium
        },
    },
    data() {
        return {
            gapMap: {
                wide: 30,
                medium: 20,
                narrow: 10,
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
