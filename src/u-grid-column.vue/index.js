import Flex from '../u-flex.vue';
export default {
    name: 'u-grid-column',
    props: {
        column: {
            type: String,
            default: undefined,
        },
        span: {
            type: Number,
            default: undefined,
        },
        pull: {
            type: Number,
            default: undefined,
        },
        push: {
            type: Number,
            default: undefined,
        },
        offset: {
            type: Number,
            default: 0,
        },
    },
    mixins: [Flex],
    data() {
        return {
            parent: this.$parent,
        };
    },
    computed: {
        columnStyleObject() {
            const width = this.span ? this.getUnitValue(this.span) : 'auto';
            const left = this.push ? this.getUnitValue(this.push) : 'auto';
            const right = this.pull ? this.getUnitValue(this.pull) : 'auto';
            const marginLeft = this.getUnitValue(this.offset);
            const paddingLeft = this.parent.gapsStyleObject.marginLeft.slice(1);
            const paddingRight = this.parent.gapsStyleObject.marginRight.slice(1);
            const styleObject = {
                width,
                right,
                left,
                marginLeft,
                paddingLeft,
                paddingRight,
            };
            if (this.parent.type === 'flex' && this.flexType === 'item')
                return Object.assign(styleObject, this.flexStyleObject);
            else
                return styleObject;
        },
    },
    methods: {
        getUnitValue(Numerator, Denominator) {
            if (this.parent.unit === 'px')
                return Numerator + 'px';
            const denominator = Denominator || this.parent.repeat;
            return Numerator / denominator * 100 + this.parent.unit;
        },
    },

};
