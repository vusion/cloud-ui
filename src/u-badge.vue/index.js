export default {
    name: 'u-badge',
    props: {
        dot: {
            type: Boolean,
            default: false,
        },
        count: [Number, String],
        limitation: {
            type: [Number, String],
            default: 99,
        },
    },
    computed: {
        badge() {
            let flag = false;

            if (this.count)
                flag = !(parseInt(this.count) === 0);

            return flag;
        },
        limitationText() {
            return parseInt(this.count) >= parseInt(this.limitation) ? `${this.limitation}+` : this.count;
        },
    },
};
