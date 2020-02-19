export const UCircularProgress = {
    name: 'u-circular-progress',
    props: {
        percent: { type: Number, default: 0 },
        title: String,
        content: String,
    },
    data() {
        return {
            radius: 45,
        };
    },
    computed: {
        strokeDasharray() {
            return 2 * Math.PI * this.radius * this.percent * 0.01 + 'px 1000px';
        },
    },
};

export default UCircularProgress;
