import UValidator from '../../u-validator.vue';

export const UFormItem = {
    name: 'u-form-item',
    mixins: [UValidator],
    props: {
        // name: String,
        // label: String,
        title: String,
        // rules: Array,
        // ignoreRules: { type: Boolean, default: false },
        // message: String,
        required: { type: Boolean, default: false },
        labelSize: String,
        bubble: { type: Boolean, default: false },
        description: String,
        hideSlots: { type: Boolean, default: false },
    },
    data() {
        return {
            // value: undefined,
            // state: '',
            // color: '',
            // currentMessage: this.message,
            // inputing: false,
            // parentVM: undefined,
            // fieldVM: undefined,
        };
    },
    computed: {
        currentRequired() {
            return this.required || Array.isArray(this.currentRules) && this.currentRules.some((rule) => rule.required);
        },
        currentLabelSize() {
            return this.labelSize || (this.rootVM && this.rootVM.labelSize) || 'auto';
        },
    },
    methods: {
        // onFocus() {
        //     this.color = 'focus';
        //     this.currentMessage = this.message;
        // },
        // onBlur() {
        //     this.color = this.state = '';
        //     this.$nextTick(() => this.validate('blur').catch((errors) => errors));
        // },
    },
};

export default UFormItem;
