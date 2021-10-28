<template>
<div :class="$style.root">
    <slot></slot>
    <u-popup size="small" v-if="firstError" :opened="!!(!mutedMessage && touched && !valid && firstError)" :placement="placement" :class="$style.message" color="error">
        <span :class="$style.icon"></span>{{ firstError }}
    </u-popup>
</div>
</template>

<script>
import MEmitter from '../m-emitter.vue';
import VusionValidator from '@vusion/validator';
import VueVusionValidator from '@vusion/validator/VuePlugin';
import debounce from 'lodash/debounce';

export default {
    name: 'u-validator',
    isValidator: true,
    install(Vue) {
        Vue.use(VueVusionValidator, { locale: Vue.i18n && Vue.i18n.locale });
    },
    mixins: [MEmitter],
    props: {
        name: String,
        label: String,
        action: String,
        rules: [String, Array, Object], // target: { type: String, default: 'auto' }, // 暂不开放此属性
        message: String,
        muted: String,
        ignoreRules: { type: Boolean, default: false }, // @deprecated
        ignoreValidation: { type: Boolean, default: false },
        validatingOptions: Object,
        validatingValue: null,
        placement: { type: String, default: 'right' },
        validatingProcess: { type: Function, default: (value) => value },
        manual: { type: Boolean, default: false },
    },
    data() {
        return {
            value: undefined,
            oldValue: undefined,
            inputing: false,
            pending: false, // touched: false,
            // dirty: false,
            // valid: false,
            fieldTouched: false,
            realValid: false,
            triggerValid: false,
            validatorVMs: [],
            fieldVM: undefined,
            parentVM: undefined,
            rootVM: undefined,
            hasUpdateEvent: false, // @compat
            state: '',
            color: '',
            currentMessage: this.message,
            firstErrorMessage: '',
            validator: undefined,
        };
    },
    computed: {
        currentRules() {
            return (
                this.rules
                || (this.rootVM
                    && this.rootVM.rules
                    && this.rootVM.rules[this.name])
            );
        },
        currentTarget() {
            // if (this.target === 'auto')
            return this.validatorVMs.length ? 'validatorVMs' : 'fieldVM'; // else
            //     return this.target;
        },
        touched() {
            if (this.currentTarget === 'validatorVMs')
                return this.validatorVMs.some(
                    (validatorVM) => validatorVM.touched,
                );
            else
                return this.fieldTouched;
        },
        dirty() {
            if (this.currentTarget === 'validatorVMs')
                return this.validatorVMs.some(
                    (validatorVM) => validatorVM.dirty,
                );
            else
                return this.value !== this.oldValue;
        },
        valid() {
            if (this.currentTarget === 'validatorVMs')
                return this.validatorVMs.every(
                    (validatorVM) => validatorVM.valid,
                );
            else
                return this.realValid;
        },
        firstError() {
            if (this.currentTarget === 'validatorVMs') {
                const validatorVM = this.validatorVMs.find(
                    (validatorVM) =>
                        validatorVM.touched && validatorVM.firstError,
                );
                return validatorVM ? validatorVM.firstError : undefined;
            } else
                return this.fieldTouched && this.firstErrorMessage;
        },
        mutedMessage() {
            return this.muted === 'all' || this.muted === 'message';
        },

    },
    watch: {
        currentRules() {
            const context = this.$vnode.context;
            this.validator = new VusionValidator(
                context.$options.validators,
                context.$options.rules,
                this.currentRules,
                context,
            );
            this.validate('submit', !this.touched).catch((errors) => errors);
        },
    },
    created() {
        const context = this.$vnode.context;
        this.validator = new VusionValidator(
            context.$options.validators,
            context.$options.rules,
            this.currentRules,
            context,
        ); // this.debouncedValidate = debounce(this.validate, 50, { leading: false, trailing: true });
        this.debouncedOnValidate = debounce(this.onValidate, 50, {
            leading: true,
            trailing: true,
        });
        this.$on('add-validator-vm', (validatorVM) => {
            validatorVM.rootVM = this.rootVM;
            validatorVM.parentVM = this;
            this.validatorVMs.push(validatorVM);
        });
        this.$on('remove-validator-vm', (validatorVM) => {
            validatorVM.rootVM = undefined;
            validatorVM.parentVM = undefined;
            this.validatorVMs.splice(this.validatorVMs.indexOf(validatorVM), 1);
        });
        if (this.$options.name !== 'u-form')
            this.$dispatch(
                ($parent) =>
                    $parent.$options.isValidator || $parent.$options.isField,
                'add-validator-vm',
                this,
            );
        if (!this.parentVM || this.$options.name === 'u-form')
            this.rootVM = this;
        this.triggerValid = this.realValid = !(
            this.currentRules && this.currentRules.length
        );
        this.$on('add-field-vm', (fieldVM) => {
            const addField = (vm) => {
                this.fieldVM = vm;
                vm.validatorVM = this;
                vm.formItemVM = this; // @compat
                this.fieldTouched = false;
                this.value = vm.value; // 初始化的时候自行验证一次。Fix #23
                this.validate('submit', true).catch((errors) => errors);
            }; // @TODO: 一个`<u-form-item>`中，只注册一个`fieldVM`，其他的忽略
            if (!this.fieldVM)
                addField(fieldVM);
            // remove 之后再添加的情况
            else
                this.$nextTick(() => !this.fieldVM && addField(fieldVM));
        });
        this.$on('remove-field-vm', (fieldVM) => {
            this.fieldVM = undefined;
            fieldVM.validatorVM = undefined;
            fieldVM.formItemVM = undefined; // @compat
        });
        this.$on('update', this.onUpdate);
        this.$on('input', this.onInput);
        this.$on('change', this.onChange);
        this.$on('focus', this.onFocus);
        this.$on('blur', this.onBlur);
    },
    destroyed() {
        this.$dispatch(
            ($parent) => $parent.$options.isValidator,
            'remove-validator-vm',
            this,
        );
    },
    methods: {
        onUpdate(value) {
            if (this.currentTarget === 'validatorVMs' || this.manual)
                return;
            this.hasUpdateEvent = true;
            this.value = value; // 在没有触碰前，走 @update 事件；在触碰后，走 @input 事件
            if (!this.fieldTouched) {
                this.oldValue = value;
                this.$nextTick(() =>
                    this.validate('submit', true).catch((errors) => errors),
                );
            }
        },
        onInput(value) {
            if (this.currentTarget === 'validatorVMs' || this.manual)
                return;
            if (!this.fieldTouched)
                this.fieldTouched = true;
            this.inputing = true;
            this.value = value; // 处理输入法输入的问题
            this.$nextTick(() => {
                this.validate('input').catch((errors) => errors);
                this.inputing = false;
            });
        },
        onChange($event) {
            if (this.currentTarget === 'validatorVMs' || this.manual)
                return;
            if (!this.fieldTouched)
                this.oldValue = $event.value;
            this.value = $event.value; // @compat: 以后推荐使用 @update & @input 事件
            if (!this.hasUpdateEvent && !this.inputing)
                this.validate('submit', true).catch((errors) => errors);
        },
        onFocus() {
            if (this.currentTarget === 'validatorVMs')
                return;
            this.color = 'focus';
            this.currentMessage = this.message;
        },
        onBlur() {
            if (this.currentTarget === 'validatorVMs' || this.manual)
                return;
            if (!this.fieldTouched)
                this.fieldTouched = true;
            this.color = this.state = '';
            this.$nextTick(() =>
                this.validate('blur').catch((errors) => errors),
            );
        },
        validate(trigger = 'submit', untouched = false) {
            if (this.currentTarget === 'validatorVMs') {
                return Promise.all(
                    this.validatorVMs.map((validatorVM) =>
                        validatorVM
                            .validate('submit', untouched)
                            .catch((errors) => errors),
                    ),
                ).then((results) => {
                    if (results.some((result) => !!result))
                        throw results;
                });
            } else {
                this.triggerValid = true;
                this.realValid = true;
                if (this.ignoreRules || this.ignoreValidation) {
                    this.firstErrorMessage = this.currentMessage = '';
                    this.color = '';
                    this.onValidate(trigger);
                    return Promise.resolve();
                }
                this.pending = true;
                this.state = 'validating';
                if (!untouched)
                    this.fieldTouched = true;
                if (
                    untouched
                    || this.muted === 'all'
                    || this.muted === 'color'
                )
                    this.color = this.currentMessage = '';
                else
                    this.color = this.state;
                if (trigger === 'submit')
                    trigger = '';
                const value = this.validatingProcess(
                    this.validatingValue === undefined ? this.value : this.validatingValue,
                );
                return this.validator.validate(value, trigger, Object.assign({
                    label: this.label || '字段',
                    action: this.action || '输入',
                }, this.validatingOptions)).then(() => {
                    this.pending = false;
                    this.triggerValid = true;
                    this.realValid = this.triggerValid;
                    this.state = 'success';
                    this.firstErrorMessage = '';
                    if (
                        !untouched
                        && this.muted !== 'all'
                        && this.muted !== 'color'
                    )
                        this.color = this.state;
                    if (
                        !untouched
                        && this.muted !== 'all'
                        && this.muted !== 'message'
                    )
                        this.currentMessage = this.message;
                    this.onValidate(trigger);
                }).catch((error) => {
                    this.pending = false;
                    this.triggerValid = false;
                    this.realValid = this.triggerValid;
                    this.state = 'error';
                    this.firstErrorMessage = error;
                    if (
                        !untouched
                        && this.muted !== 'all'
                        && this.muted !== 'color'
                    )
                        this.color = this.state;
                    if (
                        !untouched
                        && this.muted !== 'all'
                        && this.muted !== 'message'
                    )
                        this.currentMessage = error;
                    this.onValidate(trigger);
                    throw error;
                });
            }
        },
        /**
         * 验证结果用 if 判断，不用 try-catch
         */
        validateResult(trigger = 'submit', untouched = false) {
            return this.validate(trigger, untouched).catch((errors) => errors);
        },
        onValidate(trigger) {
            const $event = {
                trigger,
                valid: this.valid,
                triggerValid: this.triggerValid,
                touched: this.touched,
                dirty: this.dirty,
                firstError: this.firstError,
                update: () => this.oldValue = this.value,
            };
            if (this.currentTarget === 'fieldVM') {
                $event.value = this.value;
                $event.oldValue = this.oldValue;
            }
            this.$emit('validate', $event, this);
            if ($event.touched) {
                if ($event.trigger === 'blur') {
                    if ($event.dirty) {
                        if ($event.valid)
                            this.$emit('blur-dirty-valid', $event, this);
                        else
                            this.$emit('blur-dirty-invalid', $event, this);
                    }
                    if ($event.valid)
                        this.$emit('blur-valid', $event, this);
                    else
                        this.$emit('blur-invalid', $event, this);
                } else if ($event.trigger === 'input') {
                    if ($event.dirty) {
                        if ($event.valid)
                            this.$emit('input-dirty-valid', $event, this);
                        else
                            this.$emit('input-dirty-invalid', $event, this);
                    }
                    if ($event.valid)
                        this.$emit('input-valid', $event, this);
                    else
                        this.$emit('input-invalid', $event, this);
                } else if ($event.trigger === 'submit') {
                    if ($event.dirty) {
                        if ($event.valid)
                            this.$emit('submit-dirty-valid', $event, this);
                        else
                            this.$emit('submit-dirty-invalid', $event, this);
                    }
                    if ($event.valid)
                        this.$emit('submit-valid', $event, this);
                    else
                        this.$emit('submit-invalid', $event, this);
                }
            }
            this.parentVM && this.parentVM.debouncedOnValidate(trigger);
        },
    },
};
</script>

<style module src="./index.css"></style>
