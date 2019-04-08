export default {
    name: 'u-pie-chart',
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
    },
    data() {
        return {
            RADIUS: 30,
            current: undefined,
        };
    },
    computed: {
        posData() {
            const data = this.data;
            // this.data.forEach((item, index) => {
            //     if (item.percent === 100) {
            //         const first = this.data[0];
            //         this.data[0] = item;
            //         this.data[index] = first;
            //     }
            // });
            data && data.reduce((prev, current) => {
                current._pos = prev._pos + prev.percent;
                return current;
            }, { percent: 0, _pos: 0 });
            return data;
        },
        isEmpty() {
            const data = this.data;
            return data.every((item) => item.percent === 0);
        },
    },
    methods: {
        getPosition(pos, length) {
            pos = pos || 0;
            length = length || this.RADIUS;
            const arc = Math.PI * 2 * pos * 0.01;
            return { x: length * Math.sin(arc), y: -length * Math.cos(arc) };
        },
        getD(item) {
            const start = this.getPosition(item._pos);
            const end = this.getPosition(item._pos + item.percent);

            let d = '';
            d += 'M ';
            d += start.x + ',' + start.y;
            d += ' A ' + this.RADIUS + ',' + this.RADIUS + ' 0 ';
            d += item.percent > 50 ? 1 : 0;
            d += ' 1 ';
            d += end.x + ',' + end.y;
            d += ' L 0,0 Z';

            return d;
        },
        getTextStyle(item) {
            const middle = this.getPosition(item._pos + item.percent / 2);
            const height = this.height.replace('px', '');
            middle.x *= height / 100 / 2;
            middle.y *= height / 100 / 2;

            const result = [
                'margin-left: ' + (middle.x) + 'px',
                'margin-top: ' + (middle.y) + 'px',
            ];

            return result.join('; ');
        },
        onMouseOver(item) {
            this.current = item;
        },
        toggleHidden(index) {
            this.data[index].hidden = !this.data[index].hidden;
        },
    },
};
