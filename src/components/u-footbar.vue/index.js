import event from 'proto-ui.vusion/src/utils/event';
import throttle from 'lodash/throttle';

export const UFootbar = {
    name: 'u-footbar',
    props: {
        position: { type: String, default: 'static' },
        scrollParent: HTMLElement,
    },
    data() {
        return {
            currentPosition: this.position,
            currentScrollParent: this.scrollParent,
        };
    },
    watch: {
        position(position) {
            this.currentPosition = position;
            if (position === 'auto') {
                this.setAutoBar();
            } else {
                event.off(this.currentScrollParent, 'scroll', this.cb);
            }
        },
    },
    destroyed() {
        event.off(this.currentScrollParent, 'scroll', this.cb);
    },
    mounted() {
        this.currentScrollParent = this.scrollParent || this.findScrollParent(this.$el);
    },
    methods: {
        setAutoBar() {
            const currentElem = this.$el;
            const bodyEl = this.$refs.body;
            const cntHeight = bodyEl.getBoundingClientRect();
            this.checkPos1 = throttle(this.checkPos, 500);
            this.checkPos1(currentElem, cntHeight.height);
            this.cb = (e) => {
                this.checkPos1(currentElem, cntHeight.height);
            };
            event.on(this.currentScrollParent, 'scroll', this.cb);
        },
        checkPos(currentElem, cntHeight = 0) {
            const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            const elemOffset = currentElem.getBoundingClientRect();
            if (elemOffset.top < viewPortHeight - cntHeight / 2) {
                this.currentPosition = 'auto';
            } else {
                this.currentPosition = 'fixed';
            }
        },
        findScrollParent(target) {
            target = target.parentElement;
            const styles = window.getComputedStyle(target);
            if ((target === document.body || target === document.documentElement)
                || (styles.overflowY === 'auto' || styles.overflowY === 'scroll')) {
                return target;
            } else {
                return this.findScrollParent(target);
            }
        },
    },
};

export default UFootbar;
