import Button from '../u-button.vue';
import Popper from '../u-popper.vue';
import directive from '../util/directives.js';

export default {
    name: 'u-popover',
    props: {
        trigger: {
            validator(value) {
                return ['click', 'hover'].includes(value);
            },
            default: 'hover',
        },
        placement: {
            validator(value) {
                return ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'].includes(value);
            },
            default: 'bottom',
        },
        title: String,
        width: {
            type: String,
        },
        content: String,
        confirm: {
            type: Boolean,
            default: false,
        },
        confirmOk: {
            type: String,
            default: '确定',
        },
        confirmCancel: {
            type: String,
            default: '取消',
        },
        message: String,
        arrow: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            enterTimer: null,
        };
    },
    mixins: [Popper],
    components: {
        'u-button': Button,
    },
    directives: {
        clickoutside: directive.clickoutside,
    },
    methods: {
        onMouseenter() {
            if (this.trigger !== 'hover' || this.confirm)
                return false;

            if (this.enterTimer)
                clearTimeout(this.enterTimer);
            this.enterTimer = setTimeout(() => {
                this.visible = true;
            }, 100);
        },
        onMouseleave() {
            if (this.trigger !== 'hover' || this.confirm)
                return false;

            if (this.enterTimer) {
                clearTimeout(this.enterTimer);
                this.enterTimer = setTimeout(() => {
                    this.visible = false;
                }, 100);
            }
        },
        onClick() {
            if (this.confirm) {
                this.visible = !this.visible;
                return true;
            }
            if (this.trigger !== 'click')
                return false;

            this.visible = !this.visible;
        },
        close() {
            if (this.confirm) {
                this.visible = false;
                return true;
            }
            if (this.trigger !== 'click')
                return false;

            this.visible = false;
        },
    },
};
