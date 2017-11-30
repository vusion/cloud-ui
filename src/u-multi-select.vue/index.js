/**
 * @class MultiSelect
 * @extend Base
 * @param {Array}                   options.options             => 下拉菜单列表
 * @param {boolean=false}           options.readonly            => 是否只读
 * @param {boolean=false}           options.disabled            => 是否禁用
 * @param {width|string|number}     options.width               => 输入框长度
 */
const MultiSelect = {
    name: 'u-multi-select',
    props: {
        options: Array,
        readonly: Boolean,
        disabled: Boolean,
        visible: { type: Boolean, default: true },
        width: { type: [String, Number], default: '240' },
        value: Array,
    },
    data() {
        return {
            open: false,
            optionsData: this.initOptionsData(),
            selFlag: this.initSelFlag(),
            closeable: true,
        };
    },
    created() {
        document.addEventListener('click', this.fadeOut.bind(this));
    },
    computed: {
        selItems() {
            const selItem = [];
            this.value.forEach((item) => {
                this.options.forEach((option) => {
                    if (option.value === item)
                        selItem.push(option);
                });
            });
            return selItem;
        },
    },
    methods: {
        toggle(value) {
            if (this.disabled)
                return;
            if (value)
                this.open = value;
            else
                this.open = !this.open;
        },
        select(event, index) {
            if (this.readonly)
                return;
            if (this.options[index].disabled || this.options[index].divider) {
                event.stopPropagation();
                return false;
            }

            if (this.value.indexOf(this.options[index].value) === -1)
                this.value.push(this.options[index].value);
            else
                this.value.splice(this.value.indexOf(this.options[index].value), 1);

            /**
             * @event select 选中列表项时触发
             * @property {object} sender 事件发送对象
             * @property {object} selected 选中后的列表对象
             * @property {String} value 选中后的列表对象的值
             */
            this.$emit('select', {
                sender: this,
                selected: this.options[index],
                value: this.value,
            });
        },
        initSelFlag() {
            if (this.value.length === 0)
                return false;
            else
                return true;
        },
        initOptionsData() {
            this.options.forEach((item) => {
                if (this.value.indexOf(item.value) !== -1)
                    item.selected = true;
                else
                    item.selected = false;
            });
            return this.options;
        },
        close(index) {
            this.value.splice(index, 1);
        },
        fadeOut(event) {
            MultiSelect.opens.forEach((item, index) => {
                // 这个地方不能用stopPropagation来处理，因为展开一个Select的同时要收起其他Select
                const element = item.$refs.element;
                let element2 = event.target;
                while (element2) {
                    if (element === element2)
                        return;
                    element2 = element2.parentElement;
                }
                item.toggle(false);
            });
        },
    },
    watch: {
        open(newValue) {
            const index = MultiSelect.opens.indexOf(this);
            if (newValue && index < 0)
                MultiSelect.opens.push(this);
            else if (!newValue && index > -1)
                MultiSelect.opens.splice(index, 1);
        },
        options(newValue) {
            this.optionsData = this.initOptionsData();
        },
        value(newValue) {
            this.selFlag = this.initSelFlag();
            this.optionsData = this.initOptionsData();
        },
    },
};

// MultiSelect 类的静态属性 用来保存当前处于open状态的MultiSelect对象
MultiSelect.opens = [];

export default MultiSelect;
