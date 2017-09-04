import Vue from 'vue';
import Popper from 'popper.js';
import EventUtil from '../util/event';

export default {
    name: 'u-popper',
    props: {
        placement: {
            type: String, default: 'bottom-start',
            validator: (value) => /^(top|bottom|left|right)(-start|-end)?$/.test(value),
        },
        trigger: { type: String, default: 'click', validator: (value) => ['click', 'hover', 'right-click', 'double-click', 'manual'].includes(value) },
        reference: Object,
        open: { type: Boolean, default: false },
        offset: { type: Number, default: 0 },
        boundariesElement: { default: 'scrollParent' },
        arrowElement: { type: String, default: '[u-arrow]' },
        hoverDelay: { type: Number, default: 0 },
        options: {
            type: Object,
            default() {
                return {
                    modifiers: {},
                };
            },
        },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            currentOpen: this.open,
        };
    },
    watch: {
        open(value) {
            this.currentOpen = value;
        },
        currentOpen(value) {
            // 不直接用样式的显隐，而用popper的create和destroy，popper有可能是从不同的地方触发的，reference对象会变
            value ? this.createPopper() : this.destroyPopper();
        },
    },
    render() {
        return this.$slots.default && this.$slots.default[0];
    },
    mounted() {
        // 创建VNode
        /* eslint-disable consistent-this */
        const parentVM = this;
        this.childVM = new Vue({
            render(h) { return parentVM.$slots.popper && parentVM.$slots.popper[0]; },
        });
        this.childVM.parentVM = parentVM;
        this.childVM.$mount();

        const referenceEl = this.$el;
        const popperEl = this.childVM.$el;

        // 绑定事件
        const offEvents = this.offEvents = [];
        if (this.trigger === 'click')
            offEvents.push(EventUtil.on(referenceEl, 'click', () => this.toggle()));
        else if (this.trigger === 'hover') {
            offEvents.push(EventUtil.on(referenceEl, 'mouseenter', () => {
                setTimeout(() => this.toggle(true), this.hoverDelay);
            }));
            offEvents.push(EventUtil.on(document, 'mouseover', (e) => {
                !referenceEl.contains(e.target) && !popperEl.contains(e.target) && this.toggle(false);
            }));
        } else if (this.trigger === 'double-click')
            offEvents.push(EventUtil.on(referenceEl, 'dblclick', () => this.toggle()));
        else if (this.trigger === 'right-click') {
            offEvents.push(EventUtil.on(referenceEl, 'contextmenu', (e) => {
                e.preventDefault();
                this.toggle();
            }));
        }
        offEvents.push(EventUtil.on(document, 'click', (e) => {
            !referenceEl.contains(e.target) && !popperEl.contains(e.target) && this.toggle(false);
        }));
    },
    updated() {
        this.childVM.$forceUpdate();
    },
    destroyed() {
        this.destroyPopper();

        // 取消绑定事件
        this.offEvents.forEach((off) => off());

        this.childVM && this.childVM.destroy && this.childVM.destroy();
        this.childVM = undefined;
    },
    methods: {
        getOptions() {
            const options = Object.assign({}, this.options, {
                placement: this.placement,
                modifiers: this.modifiers || {},
            });

            options.modifiers.offset = this.offset;
            options.escapeWithReference = this.escapeWithReference;

            options.modifiers.arrow = { element: this.arrowElement };
            options.modifiers.preventOverflow = { boundariesElement: this.boundariesElement };

            return options;
        },
        createPopper() {
            const referenceEl = this.$el;
            const popperEl = this.childVM.$el;
            document.body.appendChild(popperEl);

            const options = this.getOptions();
            this.popper = new Popper(referenceEl, popperEl, options);
        },
        destroyPopper() {
            const popperEl = this.childVM.$el;
            popperEl.parentElement === document.body && document.body.removeChild(popperEl);

            this.popper && this.popper.destroy();
            this.popper = undefined;
        },
        toggle(open) {
            if (this.disabled)
                return;

            if (typeof open !== 'boolean')
                open = !this.currentOpen;

            const oldOpen = this.currentOpen;
            if (open === oldOpen)
                return;

            this.currentOpen = open;
            this.$emit('update:open', open);
            this.$emit('toggle', {
                open,
            });
        },
    },
};
