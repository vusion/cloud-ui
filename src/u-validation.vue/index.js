import validator from 'validator';

/**
 * @class Validation
 * @extends Component
 * @param {Object}                  options.data                     =  绑定属性
 * @param {boolean=false}           options.data.disabled            => 是否禁用。当禁用时，验证始终通过。
 */
const Validation = {
    name: 'u-validation',
    props: {
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            fields: [],
        };
    },
    methods: {
        /**
         * @method validate() 验证所有内部的表单域
         * @public
         * @return {void}
         */
        validate() {
            if (this.disabled) {
                return {
                    success: true,
                    message: 'Validation is disabled.',
                };
            }

            const conclusion = {
                results: [],
                success: true,
                message: '',
            };

            let restCount = this.fields.length;

            const final = () => {
                if (restCount === 0) {
                    /**
                     * @event validate 验证表单时触发
                     * @property {object} sender 事件发送对象
                     * @property {boolean} success 验证是否通过
                     * @property {string} message 验证不通过时的消息
                     * @property {object} results 每个表单域的结果
                     */
                    this.$emit('validate', Object.assign({
                        sender: this,
                    }, conclusion));
                }
            };

            final();
            const done = function (result) {
                delete result.sender;
                conclusion.results.push(result);
                if (!result.success) {
                    conclusion.success = false;
                    conclusion.message = conclusion.message || result.message;
                }

                restCount--;
                final();
            };

            // 这里用$once的方法是由于使用使用一次就会注销 不然会执行很多次validate的
            this.fields.forEach((field) =>
                field.$once('validate', done.bind(this)).validate());
        },
    },
};

/**
 * @method validate(value,rules,callback) 根据规则验证单个值
 * @static
 * @public
 * @param {var} value 待验证的值，会自动转为string类型
 * @param {Object} rules 验证规则集
 * @callback {object} result 验证结果
 * @callback {boolean} result.success 验证是否正确
 * @callback {string} result.message 验证不通过时的消息
 * @callback {object} result.firstRule 第一条验证不通过的规则
 */
Validation.validate = function (value, rules, callback) {
    const result = {
        success: true,
        message: '',
    };

    value = validator.toString(value);

    let restCount = rules.length;

    const final = () => restCount === 0 && callback && callback(result);

    final();
    const done = function (success) {
        const rule = this;

        if (!success) {
            result.success = false;
            result.firstRule = rule;
            result.message = rule.message;

            callback && callback(result);
        } else {
            restCount--;
            final();
        }
    };

    for (let i = 0; i < rules.length; i++) {
        if (!result.success)
            break;

        const rule = rules[i];
        // 在value为空情况下，只有`isRequired`会阻止，其他类型都通过。
        if (rule.type === 'isRequired')
            done.call(rule, !!value);
        else if (!value)
            done.call(rule, true);
        else if (rule.type === 'isFilled')
            done.call(rule, !!value.trim());
        else if (rule.type === 'is')
            done.call(rule, rule.options.test(value));
        else if (rule.type === 'isNot')
            done.call(rule, !rule.options.test(value));
        else if (rule.type === 'method')
            done.call(rule, !!rule.options(value));
        else if (rule.type === 'async')
            rule.options && rule.options(value, done.bind(rule));
        else
            done.call(rule, validator[rule.type](value, rule.options));
    }
};

Validation.validator = validator;

export default Validation;
