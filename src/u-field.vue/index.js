import Validation from '../u-validation.vue';

/**
 * @class Field
 * @extends Component
 * @param {Object}                  options.data                     =  绑定属性
 * @param {string=''}               options.data.value              <=> 表单域的值
 * @param {string=''}               options.data.state              <=> 表单域的状态
 * @param {string=''}               options.data.tip                <=> 小贴示
 * @param {Object[]=[]}             options.data.rules               => 验证规则集
 * @param {boolean=false}           options.data.readonly            => 是否只读
 * @param {boolean=false}           options.data.disabled            => 是否禁用
 * @param {boolean=true}            options.data.visible             => 是否显示
 */
export default {
    name: 'u-field',
    /**
     * @protected
     * @override
     */
    props: {
        rules: Array,
        tipInfo: String,
        value: [String, Number, Boolean],
        status: { type: String, default: '' },
    },
    data() {
        return {
            // value: '',
            state: this.status,
            tip: '',
            compositionInputing: false,
            showValue: this.value,
        };
    },
    created() {
        let parentEl = this.$parent;
        while (parentEl) {
            if (parentEl.$options.name === 'u-validation') {
                parentEl.fields.push(this);
                break;
            }
            parentEl = parentEl.$parent;
        }
    },
    /**
     * @protected
     * @override
     */
    destroyed() {
        if (this.$parent && this.$parent.$options.name === 'u-validation') {
            // 从$parent组件的列表中删除自己
            const index = this.$parent.fields.indexOf(this);
            ~index && this.$parent.fields.splice(index, 1);
        }
    },
    methods: {
        /**
         * @method validate(trigger) 根据`rules`验证表单域的值是否正确
         * @public
         * @param {string='submit'} trigger 验证触发方式
         * @return {void}
         */
        validate(trigger = 'submit') {
            const value = this.showValue;
            if (!this.rules)
                return;
            const rules = this.rules.filter((rule) => (rule.trigger + '+submit').includes(trigger));

            this.state = 'validating';
            Validation.validate(value, rules, (result) => {
                // @TODO
                if (result.firstRule && !(result.firstRule.mute || '').includes(trigger))
                    this.tip = result.message;
                else
                    this.tip = '';

                this.state = result.success ? 'success' : 'error';

                /**
                 * @event validate 验证表单域时触发
                 * @property {object} sender 事件发送对象
                 * @property {string} trigger 验证触发方式
                 * @property {boolean} success 验证是否通过
                 * @property {string} message 验证不通过时的消息
                 * @property {object} firstRule 第一条验证不通过的规则
                 */
                this.$emit('validate', Object.assign({
                    sender: this,
                    trigger,
                }, result));
            });
        },
    },
    watch: {
        tipInfo(newValue) {
            this.tip = newValue;
        },
        value(newValue) {
            this.showValue = newValue;
        },
        status(newValue) {
            this.state = newValue;
        },
    },
};
