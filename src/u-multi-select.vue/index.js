const MultiSelect = {
    name: 'u-multi-select',
    props: {
        data: Array,
        readonly: Boolean,
        disabled: Boolean,
        width: { type: [String, Number], default: '240' },
        value: Array,
        field: {
            type: String,
            default: 'text',
        },
    },
    data() {
        return {
            currentValue: this.value,
            open: false,
            optionsData: this.initOptionsData(this.value),
            selFlag: this.initSelFlag(this.value),
            closeable: true,
            options: {
                modifiers: {
                    computeStyle: {
                        gpuAcceleration: false,
                    },
                    preventOverflow: {
                        boundariesElement: 'body',
                    },
                },
            },
            update: undefined,
            placement: 'bottom',
        };
    },
    created() {
        document.addEventListener('click', this.fadeOut);
    },
    computed: {
        selItems() {
            const selItem = [];
            this.value.forEach((item) => {
                this.data.forEach((option) => {
                    if (option.value === item)
                        selItem.push(option);
                });
            });
            return selItem;
        },
    },
    methods: {
        onToggle($event) {
            this.$emit('toggle', $event);
        },
        select(event, index) {
            if (this.readonly)
                return;
            if (this.data[index].disabled || this.data[index].divider) {
                event.stopPropagation();
                return false;
            }

            if (this.currentValue.indexOf(this.data[index].value) === -1)
                this.currentValue.push(this.data[index].value);
            else
                this.currentValue.splice(this.currentValue.indexOf(this.data[index].value), 1);

            this.$nextTick(() => this.update());

            /**
             * @event select 选中列表项时触发
             * @property {object} sender 事件发送对象
             * @property {object} selected 选中后的列表对象
             * @property {String} value 选中后的列表对象的值
             */
            this.$emit('select', {
                sender: this,
                selected: this.data[index],
                value: this.currentValue,
            });
        },
        getUpdate(value) {
            this.update = value;
        },
        initSelFlag(value) {
            const currentValue = value || this.currentValue;
            if (currentValue.length === 0)
                return false;
            else
                return true;
        },
        initOptionsData(value) {
            const currentValue = value || this.currentValue;
            this.data.forEach((item) => {
                if (currentValue.indexOf(item.value) !== -1)
                    item.selected = true;
                else
                    item.selected = false;
            });
            return this.data;
        },
        close(index) {
            this.currentValue.splice(index, 1);
            this.$nextTick(() => this.update());
            this.$emit('close', {
                index,
                value: this.currentValue,
            });
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
        data(newValue) {
            this.optionsData = this.initOptionsData();
        },
        value(newValue) {
            this.currentValue = newValue;
            this.selFlag = this.initSelFlag();
            this.optionsData = this.initOptionsData();
        },
        currentValue(newValue) {
            this.$emit('input', newValue);
            this.selFlag = this.initSelFlag();
            this.optionsData = this.initOptionsData();
        },
    },
};

// MultiSelect 类的静态属性 用来保存当前处于open状态的MultiSelect对象
MultiSelect.opens = [];

export default MultiSelect;
