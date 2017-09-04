export default {
    name: 'u-chart',
    props: {
        title: String,
        caption: String,
        series: Array,
        data: Array,
        border: {
            type: Boolean,
            default: false,
        },
        legend: {
            type: Boolean,
            default: true,
        },
        width: String,
        height: String,
        titleAlign: { type: String, default: 'center' },
    },
    data() {
        return {
            visible: true,
            current: undefined,
        };
    },
    watch: {
        data(newVal) {
            if (newVal && newVal.length)
                this.draw();
        },
    },
    methods: {
        draw() {
            this.$emit('draw', {
                sender: this,
            });
        },
        toggle(index) {
            const _obj = {};
            Object.keys(this.series[index]).forEach((item) => _obj[item] = this.series[index][item]);
            _obj.hidden = !_obj.hidden;
            this.series.splice(index, 1, _obj);
        },
    },
};
