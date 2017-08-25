import Popover from '../u-popover.vue';

export default {
    name: 'u-table-select',
    props: {
        title: {
            type: String,
            default: '标题',
        },
        value: [String, Number],
        options: Array,
        keyValue: {
            type: String,
            default: 'value',
        },
    },
    components: {
        'u-popover': Popover,
    },
    data() {
        return {
            selectedValue: this.value,
            visible: false,
        };
    },
    watch: {
        value(newValue) {
            this.selectedValue = newValue;
        },
    },
    methods: {
        select(option, index) {
            this.selectedValue = option[this.keyValue];
            this.visible = false;
            this.$emit('select', {
                sender: this,
                selected: option,
                value: option[this.keyValue],
            });
        },
    },
};
