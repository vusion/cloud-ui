import { MEmitter } from '../../m-emitter.vue';

export const UInfoListItem = {
    name: 'u-info-list-item',
    parentName: 'u-info-list',
    groupName: 'u-info-list-group',
    mixins: [MEmitter],
    props: {
        label: String,
        labelSize: String,
        ellipsis: { type: Boolean, default: false },
        span: { type: [Number, String], default: 1 },
    },
    data() {
        return {
            groupVM: undefined,
            parentVM: undefined,
            currentSpan: this.span,
        };
    },
    computed: {
        currentColumn() {
            return (this.groupVM && this.groupVM.column) || (this.parentVM && this.parentVM.column) || 'auto';
        },
        currentLabelSize() {
            return this.labelSize || (this.groupVM && this.groupVM.labelSize) || (this.parentVM && this.parentVM.labelSize) || 'auto';
        },
        responsiveStyle() {
            const width = this.getPercent(this.currentSpan);
            return { width };
        },
    },
    created() {
        this.dispatch(this.$options.groupName, 'add-item-vm', this);
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
    },
    destroyed() {
        this.dispatch(this.$options.groupName, 'remove-item-vm', this);
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
    },
    methods: {
        getPercent(span, repeat) {
            // 兼容原来的column属性
            if ((this.groupVM && this.groupVM.column) || (this.parentVM && this.parentVM.column))
                return '';
            repeat = repeat || this.groupVM.repeat || this.groupVM.$parent.repeat;
            return span / repeat * 100 + '%';
        },
    },
};

export default UInfoListItem;
