export default {
    name: 'u-donut-chart',
    props: {
        width: { type: Number, default: 160 },
        height: { type: Number, default: 160 },
        data: Array,
        unit: String,
        tooltip: { type: Boolean, default: false },
        legend: { type: Boolean, default: false },
    },
    data() {
        return {
            RADIUS: 50,
            current: null,
        };
    },
    computed: {
        posData() {
            const data = this.data;
            data && data.reduce((prev, current) => {
                current.pos = prev.pos + prev.percent;
                return current;
            }, { percent: 0, pos: 0 });
            this.current = this.data[0] || { percent: 0, name: '' };
            return data;
        },
        isEmpty() {
            const data = this.data;
            return data.every((item) => item.percent === 0);
        },
        legendRows() {
            return this.height >= 36 ? Math.floor(this.height / 36) : 1;
        },
        legendColumns() {
            return this.data && this.data.length > 0 ? Math.ceil(this.data.length / this.legendRows) : 0;
        },
    },
    methods: {
        getPosition(pos) {
            pos = pos || 0;
            const arc = Math.PI * 2 * pos * 0.01;
            return { x: this.RADIUS * Math.sin(arc), y: -this.RADIUS * Math.cos(arc) };
        },
        getD(item) {
            const margin = 2 / Math.PI;
            const start = this.getPosition(item.pos);
            let diff = 0;
            if (item.percent > margin) {
                diff = item.percent - margin;
            } else if (item.percent > margin / 4) {
                diff = item.percent;
            }
            const end = this.getPosition(item.pos + diff);

            // GetTooltipPosition
            const norm = Math.sqrt((start.x + end.x) * (start.x + end.x) + (start.y + end.y) * (start.y + end.y));
            const point = { x: (start.x + end.x) / norm, y: (start.y + end.y) / norm };
            if (item.percent > 50) {
                point.x = -point.x;
                point.y = -point.y;
            }

            item.tooltip = {
                start: { x: (this.RADIUS + 13) * point.x, y: (this.RADIUS + 13) * point.y },
                end: { x: (this.RADIUS + 27) * point.x, y: (this.RADIUS + 27) * point.y },
                direction: point.x < 0 ? 'left' : 'right',
            };

            let d = '';
            d += 'm ';
            d += start.x + ',' + start.y;
            d += ' a 50,50 0 ';
            d += item.percent > 50 ? 1 : 0;
            d += ' 1 ';
            d += (end.x - start.x) + ',' + (end.y - start.y);
            if (this.data.length === 1) {
                d += ' z';
            }

            return d;
        },
        onMouseOver(item) {
            this.current = item;
        },
        getTooltipStyle(item) {
            let result;
            const multiple = this.width > this.height ? this.height / 160 : this.width / 160;

            if (item.tooltip.direction === 'left') {
                result = [
                    'right: ' + (this.width / 2 - item.tooltip.end.x * multiple) + 'px',
                    'top: ' + (this.height / 2 + item.tooltip.end.y * multiple - 23) + 'px',
                ];
            } else {
                result = [
                    'left: ' + (this.width / 2 + item.tooltip.end.x * multiple) + 'px',
                    'top: ' + (this.height / 2 + item.tooltip.end.y * multiple - 23) + 'px',
                ];
            }

            return result.join('; ');
        },
    },
};
