import uButton from '../u-button.vue';
import Popper from '../u-popper.vue';
import Utils from '../util/utils.js';
import directive from '../util/directives.js';

export default {
    name: 'u-popover',
    props: {
        trigger: {
            validator(value) {
                return Utils.oneOf(value, ['click', 'hover']);
            },
            default: 'hover',
        },
        placement: {
            validator(value) {
                return Utils.oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
            },
            default: 'bottom',
        },
        title: String,
        width: {
            type: [String, Number],
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
        uButton,
    },
    directives: {
        clickoutside: directive.clickoutside,
    },
    methods: {
        handleMouseenter() {
            if (this.trigger !== 'hover' || this.confirm)
                return false;

            if (this.enterTimer)
                clearTimeout(this.enterTimer);
            this.enterTimer = setTimeout(() => {
                this.visible = true;
            }, 100);
        },
        handleMouseleave() {
            if (this.trigger !== 'hover' || this.confirm)
                return false;

            if (this.enterTimer) {
                clearTimeout(this.enterTimer);
                this.enterTimer = setTimeout(() => {
                    this.visible = false;
                }, 100);
            }
        },
        handleClick() {
            if (this.confirm) {
                this.visible = !this.visible;
                return true;
            }
            if (this.trigger !== 'click')
                return false;

            this.visible = !this.visible;
        },
        handleClose() {
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
