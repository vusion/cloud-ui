// import i18n from '@/utils/i18n';
import { MField } from '../m-field.vue';

export const UCheckboxCard = {
    name: 'u-checkbox-card',
    mixins: [MField],
    props: {
        data: {
            type: Array,
            default: () => [],
        },
        value: {
            type: Array,
            default: () => [],
        },
        placeholder: {
            type: String,
            default: '暂无数据',
        },
        size: {
            type: String,
            default: 'normal',
        },
        column: Number,
    },
    data() {
        return {
            checkedList: this.value,
        };
    },
    computed: {
        columnWidth() {
            if (!this.column)
                return 0;
            return 100 / this.column;
        },
        allChecked: {
            set(checked) {
                if (checked) {
                    this.checkedList = this.data.map((item) => item.value);
                } else {
                    this.checkedList = [];
                }
            },
            get() {
                if (this.data.length === 0) {
                    return false;
                }
                if (this.checkedList.length === this.data.length)
                    return true;
                else if (this.checkedList.length === 0)
                    return false;
                else
                    return null;
            },
        },
    },
    watch: {
        value(value) {
            this.checkedList = value;
        },
        checkedList(value, oldValue) {
            this.$emit('update:value', value);
            this.$emit('change', { value, oldValue }, this);
            this.$emit('input', value, this);
        },
    },
    methods: {
        getCheckList() {
            return [...this.checkedList];
        },
    },
};
export default UCheckboxCard;
