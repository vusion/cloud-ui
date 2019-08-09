import PieChart from '../u-pie-chart.vue';

export default {
    name: 'u-donut-chart',
    extends: PieChart,
    props: {
        unit: String,
        // showLabels: { type: Boolean, default: false },
        // value: null,
        // valueField: { type: String, default: 'name' },
    },
    data() {
        return {
            // thickness:
        };
    },
    methods: {
        getD(item) {
            const actualRadius = this.RADIUS * 5 / 6;

            const margin = 2 / Math.PI;
            const start = this.getPosition(item.accumulatedPercentage, actualRadius);
            let diff = 0;
            if (item.percentage > margin) {
                diff = item.percentage - margin;
            } else if (item.percentage > margin / 4) {
                diff = item.percentage;
            }
            const end = this.getPosition(item.accumulatedPercentage + diff, actualRadius);

            // GetLabelPosition
            const norm = Math.sqrt((start.x + end.x) * (start.x + end.x) + (start.y + end.y) * (start.y + end.y));
            const point = { x: (start.x + end.x) / norm, y: (start.y + end.y) / norm };
            if (item.percentage > 50) {
                point.x = -point.x;
                point.y = -point.y;
            }

            item.label = {
                start: { x: this.RADIUS * 1.125 * point.x, y: this.RADIUS * 1.125 * point.y },
                end: { x: this.RADIUS * 1.3 * point.x, y: this.RADIUS * 1.3 * point.y },
                direction: point.x < 0 ? 'left' : 'right',
            };

            item.label.d = `
                M ${item.label.start.x},${item.label.start.y}
                L ${item.label.end.x},${item.label.end.y}
                h ${item.label.direction === 'right' ? this.RADIUS * 0.6 : -this.RADIUS * 0.6}
            `.trim();

            let d = '';
            d += 'm ';
            d += start.x + ',' + start.y;
            d += ` a ${actualRadius},${actualRadius} 0 `;
            d += item.percentage > 50 ? 1 : 0;
            d += ' 1 ';
            d += (end.x - start.x) + ',' + (end.y - start.y);
            if (this.data.length === 1) {
                d += ' z';
            }

            return d;
        },
        getLabelStyle(item) {
            // 解决首次加载 this.svgSize为0的情况
            if (this.$refs.svg && !this.svgWidth)
                this.getSize();

            const multiple = this.svgSize / 200;

            if (item.label.direction === 'left') {
                return {
                    right: (this.svgWidth / 2 - (item.label.end.x - 38) * multiple) + 'px',
                    top: (this.svgHeight / 2 + item.label.end.y * multiple - 12) + 'px',
                };
            } else {
                return {
                    left: (this.svgWidth / 2 + (item.label.end.x + 38) * multiple) + 'px',
                    top: (this.svgHeight / 2 + item.label.end.y * multiple - 12) + 'px',
                };
            }
        },
    },
};
