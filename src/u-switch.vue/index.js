/**
 * @class Switch
 * @extend Base
 * @param {boolean|string,number}        options.value                   => 值
 * @param {number}                       options.width                   => 宽度
 * @param {string}                       options.onText                  => on文本
 * @param {string}                       options.offText                 => off文本
 * @param {string}                       options.onColor                 => on颜色
 * @param {string}                       options.offColor                => off颜色
 * @param {string|number|boolean}        options.onValue                 => on提示 暂未实现
 * @param {string|number|boolean}        options.offValue                => off提示 暂未实现
 */
export default {
    name: 'u-switch',
    props: {
        value: { type: [Boolean, String, Number], default: true },
        disabled: Boolean,
        width: Number,
        onText: { type: String, default: 'ON' },
        offText: { type: String, default: 'OFF' },
        onColor: { type: String, default: '' },
        offColor: { type: String, default: '' },
        onValue: { type: [Boolean, String, Number], default: true },
        offValue: { type: [Boolean, String, Number], default: false },
    },
    data() {
        return {
            coreWidth: this.initCoreWidth(),
        };
    },
    computed: {
        checked() {
            return this.value === this.onValue;
        },
        transform() {
            return this.checked ? `translate(${this.coreWidth - 20}px, 2px)` : 'translate(2px, 2px)';
        },
    },
    watch: {
        checked() {
            if (this.onColor || this.offColor)
                this.setBackgroundColor();
        },
    },
    methods: {
        handleChange(event) {
            /**
             * @event change 点击事件
             * @property {object}
             * @property {string,boolean,number} value 当前选中状态的值 onValue/offValue
             */
            this.$emit('change', {
                sender: this,
                value: !this.checked ? this.onValue : this.offValue,
            });
            this.$nextTick(() => {
                // 此处有坑
                this.$refs.input.checked = this.checked;
            });
        },
        setBackgroundColor() {
            const newColor = this.checked ? this.onColor : this.offColor;
            this.$refs.core.style.borderColor = newColor;
            this.$refs.core.style.backgroundColor = newColor;
        },
        initCoreWidth() {
            if (this.width)
                return this.width;
            else if (this.onText || this.offText)
                return 58;
            else
                return 46;
        },
    },
    mounted() {
        if (this.onColor || this.offColor)
            this.setBackgroundColor();
        this.$refs.input.checked = this.checked;
    },
};
