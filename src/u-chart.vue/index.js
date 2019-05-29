export default {
    name: 'u-chart',
    props: {
        title: String,
        caption: String,
        series: Array,
        data: Array,
        border: { type: Boolean, default: false },
        legend: { type: Boolean, default: false },
        width: { type: String, default: '100%' }, // @deprecated
        height: { type: String, default: '450px' }, // @deprecated
        titleAlign: { type: String, default: 'center' },
        titleAlignment: { type: String, default: 'center' },
        loading: { type: Boolean, default: false },
        error: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        contentStyle: Object,
    },
    data() {
        return {};
    },
    methods: {
        toggle(index) {
            const _obj = {};
            Object.keys(this.series[index]).forEach((item) => _obj[item] = this.series[index][item]);
            _obj.hidden = !_obj.hidden;
            this.series.splice(index, 1, _obj);
        },
    },
};
