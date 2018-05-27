export default {
    name: 'u-digitron',
    props: {
        digit: {
            type: Number,
            default: 0,
        },
        duration: {
            type: [Number, String],
            default: 500,
        },
        direction: {
            type: String,
            default: 'Up',
        },
        animation: {
            type: String,
            default: '',
            validator(value) {
                return ['', 'scroll', 'flip', 'flipHalf'].includes(value);
            },
        },
        speed: {
            type: String,
            default: 'linear',
        },
    },
    data() {
        return {
            list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        };
    },
    computed: {
        role() {
            return this.animation + this.direction[0].toUpperCase() + this.direction.slice(1);
        },
    },
};
