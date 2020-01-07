import UValidator from '../u-validator.vue';
import cloneDeep from 'lodash/cloneDeep';

export const UForm = {
    name: 'u-form',
    mixins: [UValidator],
    props: {
        model: Object,
        rules: Object,
        layout: { type: String, default: 'block' },
        labelSize: { type: String, default: 'normal' },
    },
    data() {
        return {
            // @TODO: Optimize
            state: '',
            itemVMs: [],
            comparedModel: null,
        };
    },
    computed: {
        extraSlots() {
            return this.validatorVMs.some((itemVM) => itemVM.$slots.extra);
        },
    },
    created() {
        this.$on('add-item-vm', (itemVM) => {
            itemVM.parentVM = this;
            this.itemVMs.push(itemVM);
        });
        this.$on('remove-item-vm', (itemVM) => {
            itemVM.parentVM = undefined;
            this.itemVMs.splice(this.itemVMs.indexOf(itemVM), 1);
        });
        this.$on('validate-item-vm', () => {
            this.state = this.getState();
            this.$emit('validate', {
                valid: this.state === 'success' && this.valid,
            }, this);
        });
    },
    watch: {
        model: {
            handler(val) {
                if (this.comparedModel) {
                    // @TODO: 考虑到 @change 事件是基于子组件的 @change 事件的，所以 @modify 命名分开
                    this.$emit('modify', {
                        modified: this.deepCompare(val, this.comparedModel),
                    }, this);
                }
            },
            deep: true,
        },
    },
    methods: {
        validate(trigger = 'submit', untouched = false) {
            if (typeof trigger === 'boolean') {
                untouched = trigger;
                trigger = 'submit';
            }

            // @compat
            return Promise.all([].concat(this.validatorVMs, this.itemVMs).map((validatorVM) => validatorVM.validate('submit', untouched)
                .catch((errors) => errors)
            )).then((results) => {
                if (results.some((result) => !!result))
                    throw results;
            });

            // return Validator.methods.validate.call(this, trigger, untouched);
        },
        validateItem(name, trigger = 'submit', silent = false) {
            const itemVM = this.itemVMs.find((itemVM) => itemVM.name === name);
            if (itemVM)
                return itemVM.validate(trigger, silent);
        },
        getState() {
            console.warn('[cloud-ui]', '<u-form-item>升级为<u-validator>的子类，此函数已废弃。可能是由于你使用了<u-form-items>等其他表单衍生组件，请尽快更新。');
            const STATE_LEVEL = {
                '': 4,
                focus: 3,
                validating: 2,
                error: 1,
                success: 0,
            };

            let state = 'success';
            this.itemVMs.forEach((itemVM) => {
                if (itemVM.currentRules && STATE_LEVEL[itemVM.state] > STATE_LEVEL[state])
                    state = itemVM.state;
            });

            return state;
        },
        record() {
            this.comparedModel = cloneDeep(this.model);
        },
        deepCompare(o = {}, compare) {
            if (!compare)
                return false;
            if (typeof o === 'object' && o !== null) {
                if (Array.isArray(o))
                    return o.length !== compare.length || o.some((m, i) => this.deepCompare(m, compare[i]));
                else
                    return Object.keys(o).some((key) => this.deepCompare(o[key], compare[key]));
            } else
                return o !== compare;
        },
    },
};

export { UFormItem } from './item.vue';

export default UForm;
