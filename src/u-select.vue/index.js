import Base from 'u-base.vue';

/**
 * @class Select
 * @extend Base
 * @param {Array}                   options.options             => 下拉菜单列表
 * @param {boolean=false}           options.readonly            => 是否只读
 * @param {boolean=false}           options.disabled            => 是否禁用
 * @param {width|string|number}     options.width               => 输入框长度
 */
const Select = Base.extend({
    name: 'u-select',
    props: {
        options: Array,
        readonly: Boolean,
        disabled: Boolean,
        visible: { type: Boolean, default: true },
        width: { type: [String, Number], default: '160' },
    },
    data() {
        return {
            open: false,
            selected: this.options[0],
            selectedIndex: 0,
        };
    },
    methods: {
        toggle() {
            if (this.disabled)
                return;
            this.open = !this.open;
        },
        select(index) {
            if (this.readonly)
                return;
            this.selected = this.options[index];
            this.selectedIndex = index;

            /**
             * @event select 选中列表项时触发
             * @property {object} sender 事件发送对象
             * @property {object} selected 选中后的列表对象
             * @property {String} value 选中后的列表对象的值
             */
            this.$emit('select', {
                sender: this,
                selected: this.options[index],
                value: this.options[index].value,
            });
        },
    },
    watch: {
        /**
         * @event change 选中列表项改变时触发
         * @property {object} sender 事件发送对象
         * @property {object} selected 改变后的列表对象
         * @property {String} value 改变后的列表对象的值
         */
        selected(newValue) {
            this.$emit('change', {
                sender: this,
                selected: newValue,
                value: newValue.value,
            });
        },
    },
});

export default Select;
