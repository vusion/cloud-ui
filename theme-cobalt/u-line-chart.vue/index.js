const TICKES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 30, 40, 50, 100, 200, 500, 1000, 1];
const FILTER = 360;

import Chart from '../u-chart.vue';

export default {
    name: 'u-line-chart',
    extends: Chart,
    props: {
        xAxis: Object,
        yAxis: Object,
        smooth: Boolean,
        fill: Boolean,
        scatter: Boolean,
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
            currentData: this.handleData(this.data),
            tooltipReference: 'parent',
            tooltipOpen: false,
            currentItem: {},
            currentIndex: -1,
            isChartLeave: true,
            tooltipPlacement: 'right',
        };
    },
    created() {
        this.draw();
        window.addEventListener('resize', this._onResize, false);
    },
    watch: {
        data(data) {
            this.currentData = this.handleData(data);
            this.draw();
        },
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
            this.draw();
        },
        handleData(data) {
            if (!data)
                return [];

            const length = data.length;
            let currentData = [];

            if (length > FILTER) {
                const diff = Math.round(length / FILTER);
                currentData = data.filter((item, index) => index % diff === 0);
            } else
                currentData = Array.from(data);

            return currentData;
        },
        draw() {
            if (!this.currentData || !this.currentData.length)
                return;

            this._getSize();

            //
            // 确定横坐标
            //
            {
                const xAxis_ = this.xAxis_;
                xAxis_.count = this.xAxis.count || 12;
                let pieceCounts = this.currentData.length - 1;
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
                            this.currentData.push({ hidden: true });
                            pieceCounts++;
                        } else
                            break;
                    }
                }

                xAxis_.tick = tick;
                xAxis_.data = [];
                this.currentData.forEach((item, index) =>
                    index % tick === 0 && xAxis_.data.push(item[this.xAxis.field || this.xAxis.key]));
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
                    yAxis_.min = Math.min(...this.seriesList.map((series) =>
                        !series.absent && Math.min(...this.currentData.map((item) =>
                            item[series.field || series.key] !== undefined ? item[series.field || series.key] : Infinity)
                        )
                    )); // 支持空数据
                }
                if (this.yAxis.max !== undefined)
                    yAxis_.max = this.yAxis.max;
                else {
                    yAxis_.max = Math.max(...this.seriesList.map((series) =>
                        !series.absent && Math.max(...this.currentData.map((item) =>
                            item[series.field || series.key] !== undefined ? item[series.field || series.key] : -Infinity)
                        )
                    )); // 支持空数据
                }

                if (yAxis_.min === yAxis_.max && yAxis_.min > 0)
                    yAxis_.min = 0;
                else if (yAxis_.min === yAxis_.max && yAxis_.max < 0)
                    yAxis_.max = 0;

                yAxis_.count = this.yAxis.count || 8;
                const tick = this.roundToFirst((yAxis_.max - yAxis_.min) / yAxis_.count) || 1;
                const fixedCount = this.getFixedCount(tick);
                yAxis_.min = Math.floor(yAxis_.min / tick) * tick;
                yAxis_.max = Math.ceil(yAxis_.max / tick) * tick;

                // 如果最小值和最大值相等，则强行区分
                if (yAxis_.min === yAxis_.max)
                    yAxis_.max = yAxis_.min + yAxis_.count;

                yAxis_.data = [];

                while (yAxis_.min + yAxis_.count * tick < yAxis_.max)
                    yAxis_.count++;

                for (let i = 0; i <= yAxis_.count; i++) {
                    const value = yAxis_.min + i * tick;
                    yAxis_.data.push(value.toFixed(fixedCount)); // 防止+的时候出现无限小数的情况
                }

                const dataMax = Number(yAxis_.data[yAxis_.data.length - 1]);
                yAxis_.max = Math.max(yAxis_.max, dataMax);
            }

            setTimeout(() => {
                this._getSize();
            });
        },
        getD(series, type) {
            if (!this.width_ || !this.height_ || !this.currentData || !this.xAxis_.data.length || !this.yAxis_.data.length)
                return;
            if (this.currentData.length <= 1) // 一个点无需绘制线条
                return;

            if (series.absent)
                return;

            const width = this.width_;
            const height = this.height_;
            const delta = width / (this.currentData.length - 1) / 2;

            const points = this.currentData.map((item, index) => {
                if (isNaN(item[series.field || series.key]))
                    return null;
                else {
                    return [
                        width * index / (this.currentData.length - 1),
                        height * (1 - (item[series.field || series.key] - this.yAxis_.min) / (this.yAxis_.max - this.yAxis_.min)),
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
                    if (discontinued) { // discontinue end
                        discontinued = false;
                        if (type !== 'area')
                            cmd = 'M ' + pointStr;
                        else {
                            const bottomPointStr = [point[0], height].join(',');
                            cmd = `M ${bottomPointStr} L ${pointStr}`;
                        }

                        const nextPoint = points[i + 1];
                        if (this.smooth && nextPoint) {
                            const helperPointStr = [point[0] + delta, point[1]].join(',');
                            const nextHelperPointStr = [nextPoint[0] - delta, nextPoint[1]].join(',');
                            cmd += ` C ${helperPointStr} ${nextHelperPointStr} ` + nextPoint.join(',');
                            i++;
                        }
                    } else {
                        if (!this.smooth)
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
            return Math.max(...this.seriesList.map((series) => !series.absent && !series.hidden && item[series.field || series.key] ? item[series.field || series.key] : 0));
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
        getTriggerEl(referenceEl) {
            return referenceEl.parentElement;
        },
        pointClick(item, index) {
            this.$emit('click', {
                data: item,
                index,
            });
        },
        onMouseenter(index) {
            const count = this.seriesList.length;
            this.currentIndex = index;
            this.currentItem = this.currentData[index];
            let diff = null;
            const isPointExist = this.seriesList.some((series, index) => {
                // 修复数据为0不显示tooltip的bug
                if (this.currentItem && (this.currentItem[series.field || series.key] !== undefined && this.currentItem[series.field || series.key] !== null) && !series.hidden) {
                    diff = index;
                    return true;
                } else
                    return false;
            });
            // 处理tooltip的位置
            if (index < this.currentData.length / 2)
                this.tooltipPlacement = 'right';
            else
                this.tooltipPlacement = 'left';
            // 需要特殊处理下 数据点不存在的情况
            if (!isPointExist) {
                this.tooltipOpen = false;
                return false;
            } else {
                this.$nextTick(() => {
                    if (!this.isChartLeave) {
                        this.tooltipReference = this.$refs.point[index * count + diff];
                        this.tooltipOpen = true;
                    } else
                        this.tooltipOpen = false;
                });
            }
        },
        onMouseleave(event) {
            if (event && this.$refs.tooltip && this.$refs.tooltip.$refs.popperEl.contains(event.relatedTarget))
                return false;
            this.tooltipOpen = false;
            this.currentIndex = -1;
            this.currentItem = {};
        },
        isAlonePoint(item, sery, index) {
            const dataItem = item[sery.key];
            const len = this.currentData.length;
            if (!dataItem)
                return false;
            const prevItem = index > 0 ? this.currentData[index - 1][sery.key] : undefined;
            const nextItem = index < (len - 2) ? this.currentData[index + 1][sery.key] : undefined;
            if ((prevItem === undefined || prevItem === null) && (nextItem === undefined || nextItem === null))
                return true;
            return false;
        },
    },
    destroyed() {
        window.removeEventListener('resize', this._onResize, false);
    },
};
