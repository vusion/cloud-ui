import { deepCopy } from '../base/utils';

/**
 * @class BarChart
 * @extends Chart
 * @param {Object}                  options                     =  绑定属性
 * @param {string='100%'}           options.width               => 图表宽度
 * @param {string='480px'}          options.height              => 图表高度
 * @param {string=''}               options.title               => 标题
 * @param {string=''}               options.titleTemplate      @=> 标题模板
 * @param {string=''}               options.tooltipTemplate    @=> 工具提示模板
 * @param {Array}                   options.data                => 数据。如果为`undefined`，表示数据正在加载；如果为`[]`，表示数据为空。
 * @param {Object}                  options.xAxis               => 横坐标信息
 * @param {Object}                  options.yAxis               => 纵坐标信息
 * @param {Array=[]}                options.series              => 序列信息
 * @param {boolean=false}           options.border              => 是否显示边框
 * @param {boolean=true}            options.legend              => 是否显示图例
 */
export default {
    name: 'u-xbar-chart',
    props: {
        data: Array,
        title: String,
        caption: String,
        series: Array,
        border: Boolean,
        legend: Boolean,
        width: {
            type: String,
            default: '100%',
        },
        height: {
            type: String,
            default: '480px',
        },
        xAxis: Object,
        yAxis: Object,
        stack: [String, Boolean],
        order: { type: String, default: 'desc' },
        loading: { type: Boolean, default: false },
    },
    data() {
        return {
            xAxis_: { data: [] },
            yAxis_: { data: [] },
            chartData: this.initChartData(),
        };
    },
    created() {
        this.draw();
    },
    watch: {
        data(newValue) {
            this.chartData = this.initChartData();
            this.draw();
        },
    },
    methods: {
        draw() {
            if (!this.chartData || !this.chartData.length)
                return;

            // 堆叠模式
            // if (this.stack) {
            this.chartData.forEach((item) => {
                if (item.total !== undefined)
                    return;

                item.total = 0;
                this.series.forEach((sery) => item.total += item[sery.key]);
            });
            // }

            if (this.stack) {
                this.chartData.forEach((item) => {
                    this.series.forEach((sery, index) => {
                        if (index === 0) {
                            item['part' + index] = 0;
                            item['part' + (index + 1)] = item[sery.key] / item.total;
                        } else if (index !== this.series.length - 1)
                            item['part' + (index + 1)] = item['part' + index] + item[sery.key] / item.total;
                    });
                });
            }

            // 此处对data数据进行排序处理 默认降序 升序 按原始数据排序三种
            if (this.order === 'desc')
                this.chartData.sort(this.sortDesc);
            else if (this.order === 'asc')
                this.chartData.sort(this.sortAsc);

            //
            // 确定纵坐标
            //
            {
                const yAxis_ = this.yAxis_;

                yAxis_.count = this.yAxis.count || 12;
                // 柱状图数据全部显示，暂不考虑收缩间隔的情况
                yAxis_.data = this.chartData.map((item) => item[this.yAxis.key]);
            }

            //
            // 确定横坐标
            //
            {
                const xAxis_ = this.xAxis_;

                // 如果没有设置最小值和最大值，则寻找
                if (this.xAxis.min !== undefined)
                    xAxis_.min = this.xAxis.min;
                else if (this.stack)
                    xAxis_.min = Math.min(...this.chartData.map((item) => item.total));
                else {
                    xAxis_.min = Math.min(...this.series.map((sery) =>
                        Math.min(...this.chartData.map((item) => item[sery.key]))
                    ));
                }
                if (this.xAxis.max !== undefined)
                    xAxis_.max = this.xAxis.max;
                else if (this.stack)
                    xAxis_.max = Math.max(...this.chartData.map((item) => item.total));
                else {
                    xAxis_.max = Math.max(...this.series.map((sery) =>
                        Math.max(...this.chartData.map((item) => item[sery.key]))
                    ));
                }

                xAxis_.count = this.xAxis.count || 8;
                const tick = this.roundToFirst((xAxis_.max - xAxis_.min) / xAxis_.count) || 1;
                xAxis_.min = Math.floor(xAxis_.min / tick) * tick;
                xAxis_.max = Math.ceil(xAxis_.max / tick) * tick;

                // 如果最小值和最大值相等，则强行区分
                if (xAxis_.min === xAxis_.max)
                    xAxis_.max = xAxis_.min + xAxis_.count;

                xAxis_.data = [];
                for (let i = xAxis_.min; i <= xAxis_.max; i += tick)
                    xAxis_.data.push(i);
            }
        },
        format(value) {
            return value;
        },
        roundToFirst(num) {
            if (num >= 1) {
                const power = Math.pow(10, String(Math.round(num)).length - 1);
                return Math.round(num / power) * power;
            } else if (num > 0)
                return +num.toFixed(String(num).match(/^0\.0*/)[0].length - 1);
            else // 不解决0或负数
                return num;
        },
        initChartData() {
            return deepCopy([], this.data);
        },
        sortDesc(value1, value2) {
            return value1.total - value2.total;
        },
        sortAsc(value1, value2) {
            return value2.total - value1.total;
        },
    },
};
