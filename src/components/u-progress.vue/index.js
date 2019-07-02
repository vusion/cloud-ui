const HALF = 100 / 2;
// $brand-warning && $brand-error
const SEGMENT_DEFAULT_COLORS = ['#ffa136', '#ff8a7a'];

export const UProgress = {
    name: 'u-progress',
    props: {
        format: { type: Function, default(percent) {
            return percent + '%';
        } },
        size: { type: String, default: 'normal' },
        type: { type: String, default: 'circle' },
        percent: { type: Number, default: 0 },
        position: { type: String, default: 'bottom' },
        strokeLinecap: { type: String, default: 'round' },

        trailColor: { type: String, default: '#ddd' },
        trailWidth: { type: Number, default: 4 },

        strokeColor: { type: String, default: '#67aaf5' },
        strokeWidth: { type: Number, default: 4 },

        gapDegrees: { type: Number, default: 0 },
        segments: { type: Array, default: () => ([]) },
    },
    computed: {
        radius() {
            return HALF - this.strokeWidth / 2;
        },
        isDashboard() {
            return this.type === 'dashboard';
        },
        currentStrokeLinecap() {
            return this.isDashboard ? 'butt' : this.strokeLinecap;
        },
    },
    data() {
        return {
            pathTrail: {}, // 底部轨迹的属性
            pathStroke: {}, // 占比的属性
            pathSegments: [], // 分割区间
            shadowBlock: {}, // 阴影块
            colors: [this.trailColor, ...this.segments.map((item, index) => item.color || SEGMENT_DEFAULT_COLORS[index])],
        };
    },
    created() {
        Object.assign(this.pathTrail, this.getPathInfos(), {
            stroke: this.trailColor,
            'stroke-linecap': this.currentStrokeLinecap,
            'stroke-width': this.trailWidth || this.strokeWidth,
        });

        if (this.isDashboard)
            this.getDashboardInfo();
        else
            this.getCircleInfo();
    },
    mounted() {
        this.$refs.trail && Object.keys(this.pathTrail).forEach((key) => {
            this.$refs.trail.setAttribute(key, this.pathTrail[key]);
        });
        !this.isDashboard && this.$refs.stroke && Object.keys(this.pathStroke).forEach((key) => {
            this.$refs.stroke.setAttribute(key, this.pathStroke[key]);
        });
        this.isDashboard && this.$refs.shadowBlock && Object.keys(this.shadowBlock).forEach((key) => {
            this.$refs.shadowBlock.setAttribute(key, this.shadowBlock[key]);
        });
    },
    methods: {
        // 这里的percent是相对于去除了gapDegree之外的圆弧的百分比
        getPathInfos(startPercent = 0, endPercent = 100, initRadius) {
            let startX;
            let startY;
            let endX;
            let endY;
            const radius = initRadius === undefined ? this.radius : initRadius;
            const gapDegrees = this.type === 'dashboard' ? 160 : this.gapDegrees;
            const Perimeter = Math.PI * 2 * radius; // 圆的周长
            const percentage = (endPercent - startPercent) / 100;

            switch (this.position) {
                case 'left':
                    startX = HALF - radius;
                    startY = HALF;
                    endX = HALF + radius;
                    endY = HALF;
                    break;
                case 'right':
                    startX = HALF + radius;
                    startY = HALF;
                    endX = HALF - radius;
                    endY = HALF;
                    break;
                case 'top':
                    startX = HALF;
                    startY = HALF - radius;
                    endX = HALF;
                    endY = HALF + radius;
                    break;
                case 'bottom':
                default:
                    startX = HALF;
                    startY = HALF + radius;
                    endX = HALF;
                    endY = HALF - radius;
                    break;
            }

            return {
                // stroke-dasharray 前者是虚线的长度，后者是虚线之间的宽度。
                // 详情见：https://www.zhangxinxu.com/wordpress/2015/07/svg-circle-loading/
                'stroke-dasharray': `${(1 - gapDegrees / 360) * percentage * Perimeter} ${Perimeter}`,
                'stroke-dashoffset': `-${(gapDegrees / 720 + (startPercent / 100) * (1 - gapDegrees / 360)) * Perimeter}`,
                d: `M ${startX} ${startY}
                    A ${radius} ${radius} 0 1 1 ${endX} ${endY}
                    A ${radius} ${radius} 0 1 1 ${startX} ${startY}`,
            };
        },
        getCircleInfo() {
            Object.assign(this.pathStroke, this.getPathInfos(0, this.percent), {
                stroke: this.strokeColor,
                'stroke-linecap': this.currentStrokeLinecap,
                'stroke-width': this.strokeWidth,
            });
        },
        getDashboardInfo() {
            const length = this.segments.length;
            this.pathSegments = this.segments.map((item, index, list) => {
                const next = list[index + 1];
                const nextPercent = next ? next.percent || next : 100;
                const percent = item.percent || item;
                let tmp;

                if (!index)
                    tmp = this.getPathInfos(percent, length === 1 ? 100 : nextPercent);
                else if (index === length - 1)
                    tmp = this.getPathInfos(percent, 100);
                else
                    tmp = this.getPathInfos(percent, nextPercent);

                return Object.assign(tmp, {
                    'stroke-linecap': this.currentStrokeLinecap,
                    'stroke-width': this.strokeWidth,
                    stroke: this.colors[index + 1],
                });
            });

            const colorIndex = [...this.segments.map((item) => item.percent || item), 100].findIndex((item, index, list) => {
                if (!index)
                    return item >= this.percent;
                else if (index === length)
                    return true;
                else
                    return item >= this.percent && list[index - 1] < this.percent;
            });
            Object.assign(this.shadowBlock, this.getPathInfos(0, this.percent, this.radius / 1.3), { stroke: this.colors[colorIndex] });
        },
    },
};

export default UProgress;
