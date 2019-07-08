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
    name: 'u-bar-chart',
    props: {
        data: Array,
        title: String,
        caption: String,
        series: Array,
        border: Boolean,
        legend: [Boolean, String],
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
        loading: { type: Boolean, default: false },
        contentStyle: Object,
        trigger: {
            type: String,
            default: 'hover',
        },
        gapSize: {
            type: String,
            default: 'normal',
        },
        grid: { type: Boolean, default: true },
    },
    data() {
        return {
            xAxis_: { data: [] },
            yAxis_: { data: [] },
        };
    },
    created() {
        this.draw();
    },
    watch: {
        data(newValue) {
            this.draw();
        },
    },
    methods: {
        draw() {
            if (!this.data || !this.data.length)
                return;

            // 堆叠模式
            if (this.stack) {
                this.data.forEach((item) => {
                    if (item.total !== undefined)
                        return;

                    item.total = 0;
                    this.series.forEach((sery) => item.total += item[sery.key]);
                });
            }

            //
            // 确定横坐标
            //
            {
                const xAxis_ = this.xAxis_;
                // 当数据很多情况下 x轴支持间隔显示数据
                xAxis_.count = this.xAxis.count || 1;
                // 柱状图数据全部显示，暂不考虑收缩间隔的情况
                xAxis_.data = this.data.map((item) => item[this.xAxis.key]);
            }

            //
            // 确定纵坐标
            //
            {
                const yAxis_ = this.yAxis_;

                // 如果没有设置最小值和最大值，则寻找
                if (this.yAxis.min !== undefined)
                    yAxis_.min = this.yAxis.min;
                else if (this.stack)
                    yAxis_.min = Math.min(...this.data.map((item) => item.total));
                else {
                    yAxis_.min = Math.min(...this.series.map((sery) =>
                        Math.min(...this.data.map((item) => item[sery.key]))
                    ));
                }
                if (this.yAxis.max !== undefined)
                    yAxis_.max = this.yAxis.max;
                else if (this.stack)
                    yAxis_.max = Math.max(...this.data.map((item) => item.total));
                else {
                    yAxis_.max = Math.max(...this.series.map((sery) =>
                        Math.max(...this.data.map((item) => item[sery.key]))
                    ));
                }

                yAxis_.count = this.yAxis.count || 8;
                const tick = this.roundToFirst((yAxis_.max - yAxis_.min) / yAxis_.count) || 1;
                const fixedCount = this.getFixedCount(tick);
                yAxis_.min = Math.floor(yAxis_.min / tick) * tick;
                yAxis_.max = Math.ceil(yAxis_.max / tick) * tick;

                // 如果最小值和最大值相等，则强行区分
                if (yAxis_.min === yAxis_.max)
                    yAxis_.max = yAxis_.min + yAxis_.count;

                yAxis_.data = [];
                for (let i = yAxis_.min; i <= yAxis_.max; i += tick)
                    yAxis_.data.push(i.toFixed(fixedCount)); // 防止+的时候出现无限小数的情况
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
        getFixedCount(num) {
            const m = String(num).match(/\.\d+/);
            return m ? m[0].length - 1 : 0;
        },
        barClick(item, index) {
            this.$emit('click', {
                data: item,
                index,
            });
        },
        dataSetStyle(seryIndex, sery, item) {
            const gap = (seryIndex === 0) || (seryIndex === (this.series.length - 1)) ? 1 : 0;
            return { left: (seryIndex * 100 / (this.series.length + 1)) + ((seryIndex + 2) * 100 / (this.series.length + 1) / (this.series.length + 3)) + '%', width: 100 / (this.series.length + 1) + '%', height: 100 * (item[sery.key] - this.yAxis_.min) / this.yAxis_.max + '%' };
        },
    },
};
