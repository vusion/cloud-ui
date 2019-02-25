import Tab from 'proto-ui.vusion/src/u-tab.vue';

export default {
    name: 'u-chosen-step',
    parentName: 'u-chosen-steps',
    mixins: [Tab],
    props: {
        title: String,
        /* @TODO: Remove this option */
        hidden: { type: Boolean, default: false },
        state: {
            type: String,
            default: '',
            validator(value) {
                return ['', 'checking', 'checked'].includes(value);
            },
        }, // 默认状态空， checking checked 三种状态
    },
    data() {
        return {
            currentState: [this.state],
        };
    },
    watch: {
        state(value) {
            this.currentState.push(value);
        },
        currentState(value) {
            if (value.length > 2)
                value.splice(2, value.length - 2);
        },
    },
};
