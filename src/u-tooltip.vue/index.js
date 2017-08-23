import Button from '../u-button.vue';
import Popper from '../u-popper.vue';
import directive from '../util/directives.js';

export default {
    name: 'u-tooltip',
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
            default: 'top',
        },
        width: {
            type: [String, Number],
        },
        content: String,
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
            if (this.trigger !== 'hover')
                return false;

            if (this.enterTimer)
                clearTimeout(this.enterTimer);
            this.enterTimer = setTimeout(() => {
                this.visible = true;
            }, 100);
        },
        onMouseleave() {
            if (this.trigger !== 'hover')
                return false;

            if (this.enterTimer) {
                clearTimeout(this.enterTimer);
                this.enterTimer = setTimeout(() => {
                    this.visible = false;
                }, 100);
            }
        },
    },
};
