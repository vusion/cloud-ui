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
        placement: {
            type: String,
            default: 'bottom-start',
        },
        styleObject: {
            type: Object,
            default() {
                return {
                    width: '100%',
                    marginLeft: '-30px',
                    marginTop: '35px',
                    border: '1px solid #f1f1f1',
                    padding: 0,
                };
            },
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
