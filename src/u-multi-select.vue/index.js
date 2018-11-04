import Field from 'proto-ui.vusion/src/u-field.vue';
import { deepCopy } from '../base/utils/index';

const MultiSelect = {
    name: 'u-multi-select',
    props: {
        data: Array,
        readonly: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        width: { type: [String, Number], default: '250' },
        value: Array,
        field: {
            type: String,
            default: 'text',
        },
        loading: {
            type: Boolean,
            default: false,
        },
        filter: {
            type: Boolean,
            default: false,
        },
        filterMethod: Function,
        placeholder: {
            type: String,
            default: '请选择',
        },
        size: String,
    },
    mixins: [Field],
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
            placement: 'bottom',
            inputLength: 25,
            query: '',
            compositionInputing: false,
            copyOptionsData: this.initOptionsData(this.value),
        };
    },
    computed: {
        selItems() {
            const selItem = [];
            this.currentValue.forEach((item) => {
                this.data.forEach((option) => {
                    if (option.value === item)
                        selItem.push(option);
                });
            });
            return selItem;
        },
        inputStyle() {
            const style = {};
            if (this.filter) {
                if (this.currentValue.length === 0)
                    style.width = '100%';
                else
                    style.width = `${this.inputLength}px`;
            }
            return style;
        },
        showPlaceholder() {
            if (this.currentValue.length === 0)
                return this.placeholder;
            else
                return '';
        },
    },
    methods: {
        shift(count) {
            let selectedIndex = -1;
            const hovered = this.optionsData.some((item, index) => {
                if (item.hovered) {
                    selectedIndex = index;
                    return true;
                }
                return false;
            });
            if (!hovered) {
                // 如果没有处于hover状态的元素 判断是否有处于selected的元素，有的话 shfit的selectedIndex就是他的索引
                this.optionsData.some((item, index) => {
                    if (item.selected) {
                        selectedIndex = index;
                        return true;
                    }
                    return false;
                });
            }
            // let selectedIndex = this.itemVMs.indexOf(this.selectedVM);
            if (count > 0) {
                if (selectedIndex + count === this.optionsData.length)
                    selectedIndex = -1;
                for (let i = selectedIndex + count; i < this.optionsData.length; i++) {
                    const itemVM = this.optionsData[i];
                    if (!itemVM.disabled) {
                        itemVM.hovered = true;
                        this.optionsData.forEach((item, index) => {
                            if (index !== i)
                                item.hovered = false;
                        });
                        this.$emit('shift', {
                            selectedIndex,
                            selectedVM: itemVM,
                            value: itemVM.value,
                        });
                        this.ensureSelectedInView();
                        break;
                    }
                }
            } else if (count < 0) {
                if (selectedIndex === -1 || selectedIndex + count < 0)
                    selectedIndex = this.optionsData.length;
                for (let i = selectedIndex + count; i >= 0; i--) {
                    const itemVM = this.optionsData[i];
                    if (!itemVM.disabled) {
                        itemVM.hovered = true;
                        this.optionsData.forEach((item, index) => {
                            if (index !== i)
                                item.hovered = false;
                        });
                        this.$emit('shift', {
                            selectedIndex,
                            selectedVM: itemVM,
                            value: itemVM.value,
                        });
                        this.ensureSelectedInView();
                        break;
                    }
                }
            }
        },
        onToggle($event) {
            this.open = $event.open;
            this.$emit('toggle', $event);
        },
        select(event, index) {
            if (this.readonly)
                return;
            if (this.optionsData[index].disabled || this.optionsData[index].divider) {
                event.stopPropagation();
                return false;
            }

            if (this.currentValue.indexOf(this.optionsData[index].value) === -1)
                this.currentValue.push(this.optionsData[index].value);
            else
                this.currentValue.splice(this.currentValue.indexOf(this.optionsData[index].value), 1);

            this.$emit('input', this.currentValue);

            this.$nextTick(() => this.$refs.popper.update());

            if (this.filter) {
                this.query = '';
                this.$refs.input.focus();
            }

            /**
             * @event select 选中列表项时触发
             * @property {object} sender 事件发送对象
             * @property {object} selected 选中后的列表对象
             * @property {String} value 选中后的列表对象的值
             */
            this.$emit('select', {
                sender: this,
                selected: this.optionsData[index],
                value: this.currentValue,
            });
        },
        initSelFlag(value) {
            const currentValue = value || this.currentValue;
            if (currentValue.length === 0)
                return false;
            else
                return true;
        },
        initOptionsData(value, data) {
            const currentValue = value || this.currentValue;
            const optionsData = deepCopy([], data || this.data);
            optionsData.forEach((item) => {
                if (currentValue.indexOf(item.value) !== -1)
                    item.selected = true;
                else
                    item.selected = false;
                item.hovered = false;
            });
            return optionsData;
        },
        close(index) {
            this.currentValue.splice(index, 1);
            this.$nextTick(() => this.$refs.popper.update());
            this.$emit('close', {
                index,
                value: this.currentValue,
            });
        },
        focus() {
            if (this.filter)
                this.$refs.input.focus();
        },
        onInput(e) {
            if (!this.compositionInputing) {
                const query = e.target.value.trim();
                this.inputLength = this.$refs.input.value.length * 12 + 20;
                this.$nextTick(() => this.$refs.popper.update());
                if (query === '')
                    this.optionsData = [];
                else if (this.query.length === 1) {
                    if (this.filterMethod)
                        this.optionsData = this.filterMethod(this.copyOptionsData, query);
                    else {
                        this.optionsData = this.copyOptionsData.filter((item) => {
                            if (item[this.field].indexOf(query) !== -1)
                                return true;
                            else
                                return false;
                        });
                    }
                } else if (this.filterMethod)
                    this.optionsData = this.filterMethod(this.copyOptionsData, query);
                else {
                    this.optionsData = this.copyOptionsData.filter((item) => {
                        if (item[this.field].indexOf(query) !== -1)
                            return true;
                        else
                            return false;
                    });
                }

                if (!query && !this.optionsData.length) {
                    this.$refs.popper.toggle(false);
                    this.optionsData = this.initOptionsData();
                } else if (!this.open)
                    this.$refs.popper.toggle(true);
            }
        },
        inputDelete() {
            if (this.query === '' && this.filter)
                this.currentValue.splice(this.currentValue.length - 1, 1);
        },
        inputClick() {
            this.$refs.popper.toggle(true);
        },
        toggle(open) {
            this.$refs.popper && this.$refs.popper.toggle(open);
        },
        enterSelected() {
            this.optionsData.some((item) => {
                if (item.hovered && !item.selected) {
                    item.selected = true;
                    this.currentValue.push(item.value);
                    return true;
                }
                return false;
            });
        },
        ensureSelectedInView(natural) {
            // 确保有滚动条的情况下 选择项是视野内
            let selectedIndex;
            const hovered = this.optionsData.some((item, index) => {
                if (item.hovered)
                    selectedIndex = index;
                return item.hovered;
            });
            if (!hovered)
                return false;

            const selectedEl = this.$refs.listItem[selectedIndex];
            const parentEl = selectedEl.parentElement;
            if (parentEl.scrollTop < selectedEl.offsetTop + selectedEl.offsetHeight - parentEl.clientHeight) {
                if (natural)
                    parentEl.scrollTop = selectedEl.offsetTop - selectedEl.offsetHeight;
                else
                    parentEl.scrollTop = selectedEl.offsetTop + selectedEl.offsetHeight - parentEl.clientHeight;
                if (selectedIndex === this.optionsData.length - 1) {
                    setTimeout(() => parentEl.scrollTop = parentEl.scrollHeight - parentEl.clientHeight, 200);
                }
            }
            if (parentEl.scrollTop > selectedEl.offsetTop)
                parentEl.scrollTop = selectedEl.offsetTop;
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
            this.copyOptionsData = this.optionsData = this.initOptionsData(this.value);
        },
        value(newValue) {
            this.currentValue = newValue;
            this.selFlag = this.initSelFlag();
            if (this.filter)
                this.optionsData = this.initOptionsData(undefined, this.optionsData);
            else
                this.optionsData = this.initOptionsData();
        },
        currentValue(newValue) {
            this.selFlag = this.initSelFlag();
            if (!newValue.length && !this.query)
                this.optionsData = this.initOptionsData();
            this.$emit('change', {
                value: newValue,
            });
        },
    },
};

// MultiSelect 类的静态属性 用来保存当前处于open状态的MultiSelect对象
MultiSelect.opens = [];

export default MultiSelect;
