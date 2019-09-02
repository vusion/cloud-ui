/**
 * Created by th3ee on 2019/8/29.
 */
export const UChips =  {
    name: 'u-chips',
    props: {
        placeholder: String,
        // 异步校验
        // [{ type: 'async', trigger: 'blur', message: '', validator(rule, value, callback){}]
        // 校验通过，执行callback();校验失败，执行callback(new Error())
        rules: [Array , String], // 关于输入内容的校验规则
        listRules: [Array, String], // 关于是否允许为空，是否出现重复以及最大数量的规则
        disabled: Boolean,
        placement: String, // 老的错误提示的显示位置
        allowEmpty: {
            type: Boolean,
            default: true,
        }, // 老的验证体系下，关于是否允许为空的属性
        error: String, // 老的验证体系下，空值时的错误提示
        value: {
            type: Array,
            default: () => []
        }, // chips数组内容
        modifyValue: String, // 保持出错记录需要传递该值
        modifyValueIndex: Number,
        type: String, // 云服务器名称搜索的type为 searchInput
        separators: {
            type: String,
            default: 'all'
        }
    },
    data() {
        return {
            list: this.value,
            item: '',
            modifyItem: '',
            current: -1,
            modifying: false,
            errMessage: '',
            focus: false,
            asyncChecking: false,
            hasMore: false, // type为searchInput 是否出现...标志
            isFocused: false, // 是否鼠标还聚焦在搜索框内
            morePosRight: 0,
        };
    },
    watch: {
        item(value) {
            if (this.validationMode === 'old')
                this.validate(value);
        },
        modifyItem(value) {
            if (this.validationMode === 'old')
                this.validate(value);
        },
        /**
         * chip数量变化时触发
         * @param value
         * @param oldValue
         */
        list(value, oldValue) {
            this.emptyValidate();
            this.$emit('change', { value, oldValue });
        },
        /**
         * value属性（父组件传入的数组）变化时触发
         * @param value
         */
        value(value) {
            this.list = value;
        },
        /**
         * 空校验（新版未用到）
         */
        modifying() {
            if (!this.modifying && !this.list.length && !this.allowEmpty)
                this.errMessage = this.error;
        },
    },
    computed: {
        /**
         * 动态样式设定
         * @returns {number}
         */
        width() {
            const length = this.item.length;
            const width = length * 8.5 + 20;
            if (length <= 15)
                return 200;
            else
                return (width > 552 ? 552 : width);
        },
        height() {
            const row = Math.ceil(this.item.length / 66) || 1;
            return (row > 6 ? 6 : row) * 26;
        },
        maxHeight() {
            if (this.type === 'searchInput') {
                if (this.$refs.box && this.$refs.wrapper) {
                    this.$nextTick(() => {
                        if (this.$refs.wrapper.clientHeight > this.$refs.box.clientHeight) {
                            this.hasMore = true;
                            this.computeMorePositon();
                        } else
                            this.hasMore = false;
                    });
                }
                if (this.isFocused)
                    return 150;
                // 滚动到最顶上
                this.$refs.box && (this.$refs.box.scrollTop = -3);
                return 36;
            }
            // 输入框的最大高度
            const maxRows = (this.list.length / 4 > 6) ? 6 : (this.list.length / 4);
            return maxRows * 36;
        },
        /**
         * 同步规则过滤（新版未用到）
         * @returns {Array.<*>}
         */
        syncRules() {
            const rules = this.rules || [];
            return (typeof this.rules === 'string') ? [] : rules.filter((r) => r.type !== 'async');
        },
        /**
         * 异步规则过滤（新版未用到）
         * @returns {Array.<*>}
         */
        asyncRules() {
            const rules = this.rules || [];
            return (typeof this.rules === 'string') ? [] : rules.filter((r) => r.type === 'async');
        },
        /**
         * 是否存在异步规则（新版未用到）
         * @returns {boolean}
         */
        async() {
            return this.asyncRules.length > 0;
        },
        /**
         * 这里针对单独进行空验证的validator的规则数组进行了判断，当满足allowEmpty为false时，则添加空验证规则。
         * @returns {Array}
         */
        emptyRule() {
            let rules = [];
            if (!this.listRules) {
                return [];
            }
            if (!this.allowEmpty || this.listRules.indexOf('notEmpty') > -1) {
                rules.push({required: true, trigger: 'blur', validate: (value, rule, options) => {
                    return (!this.list.length && !this.item) ? (this.error ? this.error : '至少填入一项') : true;}
                })
            }
            return rules;
        },
        textRules() {
            return this.formatListRules();
        },
        /**
         * textarea和input两种组件的validator的规则数组，通过formatOldRules方法来进行规则的统一（将老规则转化为新规则）
         * @returns {*}
         */
        validationMode() {
            if (Array.isArray(this.rules)) {
                const oldRules = this.rules.filter(oldRule => {
                    if ((oldRule.type === 'is' || oldRule.type === 'isNot' || oldRule.type === 'method') && oldRule.options) {
                        return oldRule;
                    }
                });
                return oldRules.length > 0 ? 'old': 'new';
            } else if (typeof this.rules === 'string') {
                return 'new';
            } else {
                return 'new';
            }
        },
        noSpace() {
            return this.separators === 'comma' ? true: false;
        },
        noComma() {
            return this.separators === 'space' ? true: false;
        }
    },
    created() {
        window.addEventListener('keydown', this.onDocKeydown, false);
        if (this.type === 'searchInput')
            window.addEventListener('mousedown', this.onDocMousedown, false);
        // 是否需要保持错误信息
        if (this.modifyValue !== undefined) {
            this.modifyItem = this.modifyValue;
            this.current = +this.modifyValueIndex;
            this.modifying = true;
            this.onModifyBlur();
        }
        this.$emit('validMethod', this.submitValidate);
    },
    destroyed() {
        window.removeEventListener('keydown', this.onDocKeydown, false);
        if (this.type === 'searchInput')
            window.removeEventListener('mousedown', this.onDocMousedown, false);
    },
    methods: {
        /**
         * 根据list-rules定制验证chips数量相关和重复值的检验规则。
         * @returns {Array}
         */
        formatListRules() {
            let rules = [];
            if (typeof this.listRules === 'string') {
                rules = this.listRules.split('|') || [];
            } else {
                rules = this.listRules || [];
            }
            let newRules = rules.map(rule => {
                if (rule.indexOf('noDuplicates') > -1) {
                    return {
                        trigger: 'blur', validate: (value, rule, options) => {
                            if (this.list.indexOf(value) > -1) {
                                return rule.message ? rule.message : '该输入项已经存在';
                            }
                        }
                    }
                }
                if (rule.indexOf('maxLength') > -1) {
                    let length = 999;
                    rule.replace(/\d+/g, ($1) => {
                        length = parseInt($1);
                    });
                    return {
                        trigger: 'blur', validate: (value, rule, options) => {
                            if (this.list.length === length && value) {
                                return rule.message ? rule.message : `已经达到输入上限${length}`;
                            }
                        }
                    }
                }
                if (rule.indexOf('notEmpty') > -1) {
                    return false;
                }
            });
            newRules = newRules.filter(rule => rule);
            if (typeof this.rules === 'string') {
                return newRules.length === 0 ? this.rules : [this.rules, ...newRules];
            } else if (Array.isArray(this.rules)) {
                return this.rules.concat(newRules);
            } else {
                return [...newRules];
            }
        },
        /**
         * new捕获所有得到的验证信息
         * @param event
         */
        catchValidation(event) {
            this.errMessage = event.firstError;
            this.emitValidate(event.value);
        },

        /**
         * 全局监听鼠标点击事件，type为searchInput时才调用
         * @param event
         */
        onDocMousedown(event) {
            this.isFocused = this.$refs.box.contains(event.target);
            if (this.$refs.moreTag && this.$refs.moreTag.contains(event.target)) { // 点击更多，监听click事件不行
                setTimeout(() => this.onFieldClick(), 500);
            }
        },
        /**
         * 全局监听键盘按下事件
         * @param event
         */
        onDocKeydown(event) {
            let { current, list, modifying, modifyItem } = this;
            if (current < 0)
                return;
            // tab 键
            if (event.which === 9) {
                event.preventDefault();
                if (modifying)
                    this.generate(modifyItem, true, 'modifyValidator');
                else if (current === (list.length - 1))
                    this.$refs.cpInput.focus();
                else
                    this.onFocus(current + 1);
            }

            // enter键
            // 这里没有进行current的判断，是因为函数一开始就判断了
            /**
             * 对enter按键的监听。如果是最后一项，则触发textarea的激活（因为在该版本下，取消了那个最后一项的特殊input），否则激活相应的input
             */
            if (event.which === 13) {
                event.preventDefault();
                if (this.errMessage)
                    return;
                this.modifying = true;
                if (current === (list.length - 1)) {
                    this.item = list.splice(current, 1)[0];
                    this.$nextTick(() => {
                        this.$refs.cpInput.focus();
                    })
                }  else {
                    this.modifyItem = list.splice(current, 1)[0];
                    this.$nextTick(() => {
                        this.getCpModifyInput().focus();
                    });
                }
            }
            // 键盘右键
            if (event.which === 39) {
                // 生成项失焦，编辑输入框focus
                if (current === list.length - 1) {
                    current = -1;
                    this.$refs.cpInput.focus();
                    // 向右切换生成项的聚焦
                } else
                    this.onFocus(current + 1);
            }
            // 键盘左键
            if (event.which === 37) {
                // 左边界，不再往左移动生成项聚焦
                if (current === 0)
                    return;
                // 向左切换生成项的聚焦
                this.onFocus(current - 1);
            }
            // backspace(win) == deleteItem(mac)
            if (event.which === 8) {
                list.splice(current, 1);
                this.$emit('input', this.list);
                current = -1;
                this.$refs.cpInput.focus();
            }
        },

        /**
         * 整个大的框聚焦
         */
        onFieldClick(event) {
            event && event.stopPropagation();
            if (this.modifying)
                this.getCpModifyInput().focus();
            else
                this.$refs.cpInput.focus();
        },
        /**
         * 新增项textarea框的focus事件回调
         * @param {object} event - 包装事件对象
         */
        onInputFocus(event) {
            this.current = -1;
            this.modifying = false;
            this.focus = true;
        },
        /**
         * 新增项的blur事件回调
         * @param {object} event - 包装事件对象
         */
        onInputBlur(event) {
            if (this.asyncChecking)
                return;
            event && event.stopPropagation();
            this.generate(this.item, false, 'textValidator');
            this.focus = false;

            // if (this.errMessage)
            //     this.$refs.cpInput && this.$refs.cpInput.focus();
        },
        /**
         * 新增项的textarea框的键盘事件
         * @param {object} event - 事件的包装对象
         */
        onKeydown(event) {
            event.stopPropagation();
            const { list, item } = this;

            this.errMessage = '';

            // enter键
            // 当只有一行的时候，静止默认enter键的默认操作
            if (event.which === 13 && this.height === 26 && this.type !== 'searchInput')
                event.preventDefault();

            // tab 键
            // 当input内容为空，恢复tab的默认操作
            if (event.which === 9 && item !== '') {
                event.preventDefault();
                this.generate(item, false, 'textValidator');
                this.$refs.cpInput.focus();
            }
            // 空格键 生成项 回车键
            if ((event.which === 32 && !this.noSpace) || (event.which === 188 && !this.noComma) || (this.type === 'searchInput' && event.which === 13)) {
                // 生成项(满足相关要求)
                event.preventDefault();
                if (this.$refs.cpInput.$refs.input === document.activeElement && item) {
                    this.generate(item, false, 'textValidator');
                }
            }
            // 左键 || backspace 切换focus项
            // 当前输入框内无内容，则focus最新的生成项
            // item == false && item !== '0'，说明item为空字符串或空格组成的字符串
            if ((event.which === 37 || event.which === 8) && item === '' && item !== '0') {
                this.item = '';
                this.onFocus(list.length - 1);
            }
        },
        /**
         * 针对以空格连接的字符串的一次性粘贴处理入口 + 手动触发input类型的检验事件
         */
        onAddInput() {
            if ((!this.item.endsWith(' ') && this.item.includes(' ') && !this.noSpace) || (!this.item.endsWith(',') && this.item.includes(',') && !this.noComma)) {
                this.generate(this.item, false, 'textValidator');
                this.$refs.cpInput.focus();
            } else {
                this.$refs.textValidator.value = this.item;
                this.$refs.textValidator.validate('input');
            }
        },
        /**
         * 手动触发input类型的检验事件
         */
        onModifyInput() {
            if (this.modifyItem.endsWith(' ') || !this.modifyItem.includes(' ')) {
                this.$refs.modifyValidator[0].value = this.modifyItem;
                this.$refs.modifyValidator[0].validate('input');
            }
        },
        /**
         * 获取修改输入框
         * @returns {*}
         */
        getCpModifyInput() {
            return this.$refs.cpModifyInput && (Array.isArray(this.$refs.cpModifyInput) ? this.$refs.cpModifyInput[0] : this.$refs.cpModifyInput);
        },
        /**
         * 编辑框失焦
         */
        onModifyBlur(event) {
            if (this.asyncChecking)
                return;
            /**
             * 修改时的验证，对应找到验证器为modifyValidator，修改内容全部通过后，才会聚焦到新增输入框上
             */
            this.generate(this.modifyItem, true, `modifyValidator`);
            if (!this.errMessage && !this.async && this.validationMode === 'old')
                this.$refs.cpInput.focus();
        },
        /**
         * 修改输入框的键盘输入
         * @param {object} event - 包装事件对象
         */
        onModifyKeydown(event) {
            event.stopPropagation();
            const { current, modifyItem, modifying } = this;

            this.errMessage = '';

            // enter键
            // 禁止默认enter键的默认操作
            if (event.which === 13)
                event.preventDefault();

            // 空格键  生成项
            if ((event.which === 32 && !this.noSpace) || (event.which === 188 && !this.noComma) || (this.type === 'searchInput' && event.which === 13)) { // searchInput 回车键添加项
                // 生成项(满足相关要求)
                event.preventDefault();
                if (this.getCpModifyInput().$refs.input === document.activeElement && modifyItem) {
                    this.getCpModifyInput().blur();
                    if (!this.errMessage && !this.async && this.validationMode === 'old')
                        this.$refs.cpInput.focus();
                }
            }

            // tab 键
            // 当input内容为空，恢复tab的默认操作
            if (event.which === 9 && modifyItem !== '') {
                event.preventDefault();
                //this.generate(modifyItem, true);
                this.getCpModifyInput().blur();
            }

            // backspace(win) == deleteItem(mac)
            if (event.which === 8) {
                if (modifying && modifyItem === '') {
                    this.modifying = false;
                    this.current = current === 0 ? 0 : current - 1;
                }
            }
        },
        /**
         * 聚焦某个生成项
         * @param {number} index - 生成项的索引
         * @param {object} $event - 包装的event对象
         */
        onFocus(index, $event) {
            if (this.asyncChecking)
                return;
            $event && $event.stopPropagation();
            this.modifying = false;
            this.$refs.cpInput.blur();
            this.current = index;
            // 这里是因为注册在document上的keydown事件，需要手动 $update
        },
        /**
         * 双击生成项，变为编辑状态
         * @param {number} index - 生成项的索引
         * @param {object} event - 包装的event对象
         */
        onDBLClick(index, event) {
            if (this.asyncChecking || this.errMessage)
                return;
            if (index === this.list.length - 1) {
                this.item = this.list[index];
            } else {
                this.modifyItem = this.list[index];
                this.modifying = true;
            }
            this.current = index;
            // 在list当中去除当前的编辑项
            this.list.splice(index, 1);
            this.$emit('input', this.list);
            this.$nextTick(() => {
                index === this.list.length ? this.$refs.cpInput.focus() : this.getCpModifyInput().focus();
            });
        },
        /**
         * 生成项（包括一次生成多个项）
         * @param {string} item - 生成项的内容
         * @param {boolean} [isModify=false] - 是否是编辑已生成项
         * @param {string} validator - 将值传入的目标验证器
         */
        generate(item, isModify = false, validator) {
            if (this.type === 'searchInput' && /^\s*$/.test(item))
                return;
            // item == false，说明item为空字符串或空格组成的字符串
            if (item === '' && item !== '0') {
                if (isModify)
                    this.modifyItem = '';
                else
                    this.item = '';
                this.emptyValidate();
                if (validator === 'modifyValidator') {
                    this.modifying = false;
                    this.$refs.cpInput.focus();
                }
                return;
            }

            // 单次生成多个项的数组
            // arrIndex是数组中出错的项的索引
            // str为生成项之外的错误部分的字符
            let itemArr = [];
            let arrIndex = 0;
            if (!this.noSpace && !this.noComma)
                item = item.replace(/,/g, ' ');
            if (this.noSpace)
                itemArr = item.split(',');
            else
                itemArr = item.split(' ');

            console.log(itemArr);
            if (this.async)
                return this.asyncGenerate(item, isModify, itemArr);

            /**
             * 对规则模式进行校验，如果是老规则模式，走u-chips原始校验方法。如果是新规则，走u-chips新校验方法。
             */
            if (this.validationMode === 'new') {
                this.validateQueue(itemArr, isModify, validator).then(res => {
                    /**
                     * 新增状态下和修改状态下，数组的操作方式有所不同，但验证方式是相同的。
                     */
                    if (!isModify) {
                        this.item = '';
                        this.$refs.cpInput.currentValue = this.item;
                    } else {
                        this.$refs.cpModifyInput.currentValue = this.modifyItem = '';
                        this.$refs.cpInput.focus();
                    }
                }).catch(e => {
                    itemArr.splice(0, e);
                    if (!isModify) {
                        this.item = itemArr.join(' ');
                        this.$refs.cpInput.currentValue = this.item;
                    } else {
                        this.modifyItem = itemArr.join(' ');
                        this.$refs.cpModifyInput.currentValue = this.modifyItem;
                        this.getCpModifyInput().focus();
                    }
                });
            } else {
                itemArr.every((itm, index) => {
                    this.validate(itm, 'input+blur');
                    if (this.errMessage)
                    {
                        return false;
                    }
                    else {
                        // 编辑生成项
                        if (isModify) {
                            // 只有正确输入的情况下，才需要先删除之前的项
                            this.list.splice(this.current, 0, itm);
                            // 创建新生成项
                        } else
                            this.list.push(itm);
                        this.$emit('input', this.list);
                        arrIndex = index + 1;
                        return true;
                    }
                });
                itemArr.splice(0, arrIndex);

                const str = itemArr.join(' ');
                isModify ? (this.modifyItem = str) : (this.item = str);
            }

        },
        /**
         * 用于检验输入字符的函数，将各个分割后的字符转为按序的promise进行验证
         * @param itemArr 字符串数组
         * @param isModify 用于区别是否是修改态
         * @param validator 对应的验证器（由于验证会修改validator中的值，所以必须修改到相应的validator中）
         * @returns {Promise.<string>}
         */
        async validateQueue(itemArr, isModify, validator) {
            const targetValidator = Array.isArray(this.$refs[validator]) ? this.$refs[validator][0] :  this.$refs[validator];
            for (let i = 0 ;i < itemArr.length; i++) {
                try {
                    targetValidator.value = itemArr[i];
                    let valueValidation = targetValidator.validate('blur');
                    //let countValidation = this.$refs.countValidator.validate('blur');
                    await Promise.all([valueValidation]).then(res => {
                        isModify ? this.list.splice(this.current, 0 ,itemArr[i]) : this.list.push(itemArr[i]);
                        this.$emit('input', this.list);
                    })
                } catch (e) {
                    throw (i);
                }
            }
            return 'success!';
        },
        /**
         * 存在异步规则时的校验逻辑。逐项送进校验器，先进行同步校验，再进行异步校验。（新版未用到）
         * @param item  无用
         * @param isModify  是否是修改态
         * @param itemArr   项目数组
         * @returns {Promise.<TResult>}
         */
        asyncGenerate(item, isModify, itemArr) {
            let promise = Promise.resolve();
            let arrIndex = 0;
            this.asyncChecking = true;
            itemArr.forEach((itm, index) => {
                promise = promise.then(() => this.validate(itm, 'input+blur')
                    .then(() => {
                        if (this.errMessage)
                            throw new Error();
                        else {
                            if (isModify) {
                                this.list.splice(this.current, 0, itm);
                            } else
                                this.list.push(itm);
                            this.$emit('input', this.list);
                            arrIndex = index + 1;
                        }
                    }));
            });
            return promise.catch((err) => err)
                .then(() => {
                    itemArr.splice(0, arrIndex);
                    const str = itemArr.join(' ');
                    if (!str)
                        this.modifying = false;
                    this.asyncChecking = false;
                    this.$nextTick(() => {
                        isModify ? (this.modifyItem = str) : (this.item = str);
                        this.$refs.cpInput.focus();
                    });
                });
        },
        /**
         * 进行验证的逻辑,validate是不关注当前事件是blur或input的（新版未用到）
         * @param {string} value - 当前检测值
         * @param {string} [type='input'] - 事件种类
         * @return 错误信息，没有错误返回空字符
         */
        validate(value, type = 'input', list) {
            list = list || this.list;
            // 空值或已经有错误信息不检测
            if (!value && value !== '0' || this.errMessage) {
                this.emitValidate(value);
                return;
            }
            // 未通过检查的某项
            const errRule = this.syncRules.find((rule) => {
                // result为true表示通过了该条验证逻辑
                let result = false;
                if (!type.includes(rule.trigger))
                    return false;
                if (rule.type === 'method')
                    result = rule.options(value, rule, list);
                if (rule.type === 'is')
                    result = rule.options.test(value, list);
                if (rule.type === 'isNot')
                    result = !rule.options.test(value, list);

                return !result;
            });
            if (errRule || !this.async) { // 同步校验不通过，或者不存在异步校验规则，直接结束
                this.errMessage = errRule ? errRule.message : '';
                this.emitValidate(value);
            } else
                return this.asyncValidate(value, type, list);
        },
        /**
         * 异步验证函数，将异步规则串联为一个promise链，依次进行验证（新版未用到）
         * @param value 输入值
         * @param type  事件种类
         * @returns {Promise.<T>}
         */
        asyncValidate(value, type) {
            let promise = Promise.resolve();
            this.asyncRules.filter((r) => type.includes(r.trigger)).forEach((rule) => {
                promise = promise.then(() => new Promise((res, rej) => {
                    rule.validator(rule, value, (error) => {
                        if (error === undefined) {
                            this.errMessage = '';
                            this.emitValidate(value);
                            res();
                        } else if (error instanceof Error) {
                            this.errMessage = rule.message;
                            this.emitValidate(value);
                            rej();
                        }
                    });
                }));
            });
            return promise;
        },
        /**
         * 删除某项
         * @param {number} index - 某项的索引
         */
        deleteItem(index) {
            if (this.asyncChecking)
                return;
            this.list.splice(index, 1);
            this.$emit('input', this.list);
            const item = this.modifying ? this.modifyItem : this.item;
            if (this.validationMode === 'new') {
                if (this.modifying) {
                    this.$refs.modifyValidator[0].validate('input').catch(e => {
                        throw e;
                    })
                } else {
                    this.$refs.textValidator.validate('input').catch(e => {
                        throw e;
                    })
                }
            } else
                this.validate(item, 'input+blur');
            this.$refs.cpInput.focus();
        },
        /**
         * 外部调用看数据是否合法
         */
        $checkValidity() {
            // 没有已创建项的更改
            // 没有错误信息
            // 创建输入框没有内容
            // 有正确输入项
            return !this.modifying && !this.errMessage && !this.item && this.list.length;
        },
        /**
         * 提交校验时使用
         * 显示空态提示。
         */
        submitValidate() {
            if (!this.allowEmpty && !this.list.length && !this.item && !this.modifyItem) {
                this.errMessage = this.error;
                return false;
            } else
                return this.$checkValidity();
        },

        emitValidate(value) {
            this.$emit('validate', {
                isValid: !!this.errMessage,
                errMessage: this.errMessage,
                value,
                current: this.current === -1 ? this.list.length : this.current,
            });
        },
        /**
         * 检验是否为空，需要对原方法进行兼容
         * @param value
         */
        emptyValidate(value = '') {
            if (this.validationMode === 'new') {
                this.$refs.countValidator.validate('blur').then(res => {
                }).catch(e => {
                });
            } else {
                if (!this.allowEmpty && !this.list.length) {
                    this.errMessage = this.error;
                }
            }
            this.emitValidate(value);
        },
        deleteAll() {
            this.list = [];
            this.hasMore = false;
            this.$emit('input', this.list);
        },
        computeMorePositon() { // 计算更多的位置
            this.$nextTick(() => {
                // 最后一个第一行的元素
                const index = Array.prototype.findIndex.call(this.$refs.wrapper.children, ((item) => (item.offsetTop > 10 && item.localName !== 'textarea')));
                if (index === -1) {
                    this.hasMore = false;
                    return;
                }
                const lastEle = this.$refs.wrapper.children[index - 1];
                this.hasMore = true;
                this.morePosRight = this.$refs.wrapper.clientWidth - lastEle.offsetLeft - lastEle.offsetWidth + 52;
            });
        },

    },
};
export default UChips;