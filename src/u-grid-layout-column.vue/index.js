export default {
    name: 'u-grid-layout-column',
    props: {
        column: String,
        span: Number,
        pull: Number,
        push: Number,
        offset: Number,
    },
    data() {
        return {
            parent: this.$parent,
        };
    },
    computed: {
        styleObject() {
            const width = this.span ? this.getPercent(this.span) : 'auto';
            const left = this.push ? this.getPercent(this.push) : 'auto';
            const right = this.pull ? this.getPercent(this.pull) : 'auto';
            const marginLeft = this.getPercent(this.offset);

            return { width, right, left, marginLeft };
        },
    },
    methods: {
        getPercent(numerator, denominator) {
            denominator = denominator || this.parent.repeat;
            return numerator / denominator * 100 + '%';
        },
    },

};
