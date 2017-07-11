import Chart from '../u-chart.vue';
import Base from 'u-base.vue';

const TICKES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 30, 40, 50, 100, 200, 500, 1000, 1];

/**
 * @class LineChart
 * @extends Chart
 * @param {Object}                  options                    =  绑定属性
 * @param {string='100%'}           options.width               => 图表宽度
 * @param {string='480px'}          options.height              => 图表高度
 * @param {string=''}               options.title               => 标题
 * @param {string=''}               options.titleTemplate      @=> 标题模板
 * @param {string=''}               options.tooltipTemplate    @=> 工具提示模板
 * @param {Array}                   options.data                => 数据。如果为`undefined`，表示数据正在加载；如果为`[]`，表示数据为空。
 * @param {Object}                  options.xAxis               => 横坐标信息
 * @param {Object}                  options.yAxis               => 纵坐标信息
 * @param {Array=[]}                options.series              => 序列信息
 * @param {boolean=false}           options.smooth              => 是否用光滑曲线
 * @param {boolean=false}           options.fill                => 是否填充区域
 * @param {boolean=false}           options.border              => 是否显示边框
 * @param {boolean=true}            options.legend              => 是否显示图例
 */
const LineChart = Base.extend({
    name: 'u-line-chart',
    props: {
        data: Array,
        title: String,
        titleTemplate: Boolean,
        tooltipTemplate: Boolean,
        caption: String,
        captionTemplate: Boolean,
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
        xLabelTemplate: { type: Boolean, default: false },
        yAxis: Object,
        smooth: Boolean,
        fill: Boolean,
    },
    data() {
        return {
            width_: undefined,
            height_: undefined,
            xAxis_: {
                data: [],
            },
            yAxis_: {
                data: [],
            },
            percent_: undefined,
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
    mounted() {
        this._onResize = this._onResize.apply(this);
        window.addEventListener('resize', this._onResize, false);
    },
    methods: {
        _getSize() {
            if (!this.$refs)
                return;

            this.width_ = this.$refs.grid && this.$refs.grid.offsetWidth;
            this.height_ = this.$refs.grid && this.$refs.grid.offsetHeight;
        },
        /**
         * @private
         */
        _onResize() {
            this._getSize();
        },
        draw() {
            // debugger;
            if (!this.data || !this.data.length)
                return;

            this._getSize();

            //
            // 确定横坐标
            //
            {
                const xAxis_ = this.xAxis_;
                xAxis_.count = this.xAxis.count || 12;
                let pieceCounts = this.data.length - 1;
                let tick = pieceCounts / xAxis_.count;
                if (tick !== parseInt(tick)) {
                    tick = 1;
                    while (!(pieceCounts / tick <= xAxis_.count && pieceCounts % tick === 0)) {
                        for (let i = 0; i < TICKES.length; i++) {
                            tick = TICKES[i];
                            if (pieceCounts / tick <= xAxis_.count && pieceCounts % tick === 0)
                                break;
                        }

                        // 如果不能整除，则补充空数据
                        if (tick === 1) {
                            this.data.push({ hidden: true });
                            pieceCounts++;
                        } else
                        break;
                    }
                }

                xAxis_.tick = tick;
                xAxis_.data = [];
                this.data.forEach((item, index) =>
                    index % tick === 0 && xAxis_.data.push(item[this.xAxis.key]));
            }

            //
            // 确定纵坐标
            //
            {
                const yAxis_ = this.yAxis_;

                // 如果没有设置最小值和最大值，则寻找
                if (this.yAxis.min !== undefined)
                    yAxis_.min = this.yAxis.min;
                else {
                    yAxis_.min = Math.min(...this.series.map((sery) =>
                        Math.min(...this.data.map((item) =>
                            item[sery.key] !== undefined ? item[sery.key] : Infinity)
                        )
                    )); // 支持空数据
                }
                if (this.yAxis.max !== undefined)
                    yAxis_.max = this.yAxis.max;
                else {
                    yAxis_.max = Math.max(...this.series.map((sery) =>
                        Math.max(...this.data.map((item) =>
                            item[sery.key] !== undefined ? item[sery.key] : -Infinity)
                        )
                    )); // 支持空数据
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

            setTimeout(() => {
                this._getSize();
            });
        },
        getD(sery, type) {
            if (!this.width_ || !this.height_ || !this.data || !this.xAxis_.data.length || !this.yAxis_.data.length)
                return;
            if (this.data.length <= 1) // 一个点无需绘制线条
                return;

            const width = this.width_;
            const height = this.height_;
            const delta = width / (this.data.length - 1) / 2;

            const points = this.data.map((item, index) => {
                if (isNaN(item[sery.key]))
                    return null;
                else {
                    return [
                        width * index / (this.data.length - 1),
                        height * (1 - (item[sery.key] - this.yAxis_.min) / (this.yAxis_.max - this.yAxis_.min)),
                    ];
                }
            });
            points.push(null); // 起始点也可以看做间断结束，最后一个null看做间断开始

            const cmds = [];
            let discontinued = true;
            for (let i = 0; i < points.length; i++) {
                const point = points[i];
                let cmd = '';

                if (!point) {
                    if (!discontinued) {
                        discontinued = true;
                        if (type === 'area')
                            cmd = 'V' + height;
                    }
                } else {
                    const pointStr = point.join(',');
                    if (discontinued) {    // discontinue end
                        discontinued = false;
                        if (type !== 'area')
                            cmd = 'M ' + pointStr;
                        else {
                            const bottomPointStr = [point[0], height].join(',');
                            cmd = `M ${bottomPointStr} L ${pointStr}`;
                        }

                        const nextPoint = points[i + 1];
                        if (this.data.smooth && nextPoint) {
                            const helperPointStr = [point[0] + delta, point[1]].join(',');
                            const nextHelperPointStr = [nextPoint[0] - delta, nextPoint[1]].join(',');
                            cmd += ` C ${helperPointStr} ${nextHelperPointStr} ` + nextPoint.join(',');
                            i++;
                        }
                    } else {
                        if (!this.data.smooth)
                            cmd = 'L ' + pointStr;
                        else {
                            const helperPointStr = [point[0] - delta, point[1]].join(',');
                            cmd = `S ${helperPointStr} ${pointStr}`;
                        }
                    }
                }

                cmds.push(cmd);
            }

            return cmds.join(' ');
        },
        getTopOne(item) {
            return Math.max(...this.series.map((sery) => !sery.hidden && item[sery.key] ? item[sery.key] : 0));
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
        getPercent(item) {
            return 100 * (this.yAxis_.max - this.getTopOne(item)) / (this.yAxis_.max - this.yAxis_.min);
        },
    },
    destroyed() {
        window.removeEventListener('resize', this._onResize, false);
    },
    components: {
        'u-blank': {
            template: '',
            props: {
                item: Object,
                index: Number,
            },
        },
    },
});

export default LineChart;
