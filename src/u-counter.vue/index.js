export default {
    name: 'u-counter',
    props: {
        end: {
            type: Number,
            default: 100,
        },
        start: {
            type: Number,
            default: 0,
        },
        duration: {
            type: Number,
            default: 200,
        },
        autoStart: {
            type: Boolean,
            default: true,
        },
        isReset: {
            type: Boolean,
            default: false,
        },
        isGroup: {
            type: Boolean,
            default: false,
        },
        separator: {
            type: String,
            default: ',',
        },
        decimals: {
            type: Number,
            default: 0,
        },
        prefix: {
            type: String,
            default: '',
        },
        suffix: {
            type: String,
            default: '',
        },
    },
    data() {
        const currentValue = this.getCurrentValue();
        return {
            currentValue,
        };
    },
    created() {
        this.autoStart && this.startAnimate();
    },
    computed: {
        digits() {
            let number;
            if (this.decimals > 0)
                number = (this.end + '').length + this.decimals;
            else
                number = (this.end + '').length;
            return String(this.currentValue).slice(-number).padStart(number, '0').split('').map((digit) => +digit);
        },
        currentLength() {
            if (this.decimals > 0)
                return (this.end + '').length + this.decimals;
            else
                return (this.end + '').length;
        },
        separatorArr() {
            const arr = [];
            if (this.isGroup) {
                const value = this.end + '';
                for (let index = 0, len = value.length; index < len; ++index) {
                    if (index !== 0 && ((index % 3) === 0) && (len - index - 1) >= 0)
                        arr.push(len - index - 1);
                }
            }
            return arr;
        },
        decimalIndex() {
            if (this.decimals > 0)
                return (this.end + '').length;
            return -1;
        },
    },
    watch: {
        autoStart(newValue) {
            if (newValue)
                this.startAnimate();
        },
        isReset(newValue) {
            if (newValue)
                this.reset();
        },
    },
    methods: {
        startAnimate() {
            setTimeout(this.animate, this.duration * 1.1 >> 0);
        },
        animate() {
            const end = (this.end + '0'.repeat(this.decimals)) / 1;
            if (this.currentValue === end)
                return false;
            this.currentValue++;
            let value = this.currentValue + '';
            if (this.decimals > 0)
                value = value.slice(0, value.length - this.decimals) + '.' + value.slice(-this.decimals);
            value = value / 1;
            this.$emit('change', { value });

            setTimeout(this.animate, this.duration * 1.1 >> 0);
        },
        reset() {
            this.currentValue = this.start;
        },
        getCurrentValue() {
            if (this.decimals > 0)
                return this.start + '0'.repeat(this.decimals);
            else
                return this.start;
        },
    },
};
