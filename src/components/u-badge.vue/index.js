export const UBadge = {
    name: 'u-badge',
    props: {
        value: [Number, String],
        max: { type: Number, default: 99 },
    },
    computed: {
        currentValue() {
            if (typeof this.value !== 'number')
                return this.value;
            else
                return this.value > this.max ? this.max + '+' : this.value;
        },
    },
};

export default UBadge;
