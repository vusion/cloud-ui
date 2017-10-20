export default {
    name: 'u-grid-row',
    props: {
        repeat: {
            type: Number,
            default: 24,
        },
        unit: {
            type: String,
            default: '%',
        },
        place: {
            type: String,
            default: 'flex-start flex-start', // [flex-start | flex-end | center | space-between | space-around, flex-start | flex-end | center | baseline | stretch]
        },
    },
    data() {
        return {
            currentIndex: 0,
        };
    },
    computed: {
        gapsStyleObject() {
            return {
                marginLeft: '-' + this.$parent.rowGap / 2 + 'px',
                marginRight: '-' + this.$parent.rowGap / 2 + 'px',
                marginTop: this.$parent.columnGap / 2 + 'px',
                marginBottom: this.$parent.columnGap / 2 + 'px',
            };
        },
        flexStyleObject() {
            const style = { display: 'flex' };
            const [justify, align] = this.place.split(' ');
            style.justifyContent = justify;
            style.alignItems = align;
            return style;
        },
        rowStyleObject() {
            if (this.$parent.type === 'flex')
                return Object.assign(this.gapsStyleObject, this.flexStyleObject);
            else
                return this.gapsStyleObject;
        },
    },
};
