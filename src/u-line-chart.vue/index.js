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
        titleTemplate: String,
        tooltipTemplate: String,
        caption: String,
        captionTemplate: String,
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
        xLabelTemplate: String,
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
                xAxis_.count = this.xAxis_.count || 12;
                let pieceCounts = this.data.length - 1;
                let tick = 1;
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

                yAxis_.count = this.yAxis_.count || 8;
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

            const cmds = this.data.map((item, index) => {
                const x = width * index / (this.data.length - 1);
                const y = height * (1 - (item[sery.key] - this.yAxis_.min) / (this.yAxis_.max - this.yAxis_.min));

                if (isNaN(y)) // 处理空数据的情况
                    return '';
                else if (!this.smooth)
                    return `L ${x},${y}`;
                else {
                    const x2 = x - delta;
                    return `S ${x2},${y} ${x},${y}`;
                }
            });

            if (!this.smooth)
                cmds[0] = 'M ' + cmds[0].slice(2);
            else {
                const [x, y] = cmds[0].split(' ')[2].split(',');
                const x1 = x + delta;
                cmds[0] = `M ${x},${y}`;
                cmds[1] = `C ${x1},${y} ` + cmds[1].slice(2);
            }

            if (type === 'area') {
                cmds.push('V ' + height);
                cmds.push('H 0');
                cmds.push('Z');
            }

            return cmds.join(' ');
        },
        getTopOne(item) {
            return Math.max(...this.series.map((sery) => item[sery.key]));
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
    },
    destroyed() {
        window.removeEventListener('resize', this._onResize, false);
    },
});

export default LineChart;
