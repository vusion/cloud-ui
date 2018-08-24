export default {
    name: 'u-chart-tooltip',
    props: {
        series: {
            type: Array,
            default: () => [],
        },
        sery: {
            type: Object,
            default: () => ({}),
        },
        row: {
            type: Object,
            default: () => ({}),
        },
        vnode: Function,
        stack: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: 'common',
        },
    },
    render(h) {
        if (this.type === 'common') {
            if (this.stack) {
                // 柱状图 堆积特殊处理
                return h('div', [
                    this.vnode ? this.vnode({
                        row: this.row,
                        series: this.series,
                    }) : this.series.map((sery) => h('div', ((sery.name || sery.key) + ':' + this.row[sery.key]))),
                ]);
            } else {
                return h('div', [
                    this.vnode ? this.vnode({
                        sery: this.sery,
                        row: this.row,
                    }) : ((this.sery.name || this.sery.key) + ':' + this.row[this.sery.key]),
                ]);
            }
        } else if (this.type === 'piechart') {
            return h('div', [
                this.vnode ? this.vnode({
                    row: this.row,
                }) : ((this.row.name || this.row.key) + ':' + this.row.percent + '%'),
            ]);
        }
    },
};
