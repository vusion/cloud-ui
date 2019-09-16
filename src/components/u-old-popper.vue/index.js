import Vue from 'vue';
import Popper from '@vusion/popper.js';
import event from 'proto-ui.vusion/src/utils/event';

/**
 * @TODO: <u-popper> 套在外面的书写方式往往会影响原有模板结构，考虑一个 break change，
 * 将 <u-popper> 插入到父节点内部
 */
export const UOldPopper = {
    name: 'u-old-popper',
    props: {
        open: { type: Boolean, default: false },
        trigger: { type: String, default: 'click', validator: (value) => ['click', 'hover', 'right-click', 'double-click', 'manual'].includes(value) },
        triggerElement: { type: [String, HTMLElement, Function], default: 'reference' },
        placement: {
            type: String, default: 'bottom-start',
            validator: (value) => /^(top|bottom|left|right)(-start|-end)?$/.test(value),
        },
        reference: [String, HTMLElement],
        offset: { type: [Number, String], default: 0 },
        hoverDelay: { type: Number, default: 0 },
        hideDelay: { type: Number, default: 0 },
        appendTo: { type: String, default: 'body', validator: (value) => ['body', 'reference'].includes(value) },
        boundariesElement: { default: 'window' },
        escapeWithReference: { type: Boolean, default: true },
        arrowElement: { type: String, default: '[u-arrow]' },
        options: {
            type: Object,
            default() {
                return {
                    modifiers: {},
                };
            },
        },
        disabled: { type: Boolean, default: false },
        followCursor: { type: [Boolean, Number, Object], default: false },
    },
    data() {
        return {
            currentOpen: this.open,
            // popper: undefined,
            // 在出现滚动条的时候 需要特殊处理下
            mouseEnterEvent: {},
        };
    },
    computed: {
        currentFollowCursor() {
            if (typeof this.followCursor === 'object')
                return this.followCursor;
            else {
                let followCursor;
                if (typeof this.followCursor === 'boolean')
                    followCursor = { offsetX: 10, offsetY: 10 };
                else if (typeof this.followCursor === 'number')
                    followCursor = { offsetX: this.followCursor, offsetY: this.followCursor };

                if (this.placement.startsWith('top'))
                    followCursor.offsetY = -followCursor.offsetY;
                if (this.placement.startsWith('left'))
                    followCursor.offsetX = -followCursor.offsetX;
                if (this.placement === 'top' || this.placement === 'bottom')
                    followCursor.offsetX = 0;
                if (this.placement === 'top-end' || this.placement === 'bottom-end')
                    followCursor.offsetX = -followCursor.offsetX;
                if (this.placement === 'left' || this.placement === 'right')
                    followCursor.offsetY = 0;
                if (this.placement === 'left-end' || this.placement === 'right-end')
                    followCursor.offsetY = -followCursor.offsetY;

                return followCursor;
            }
        },
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
    render(h) {
        if (this.reference === 'parent')
            return h('div', { style: { display: 'none' } });

        return this.$slots.default && this.$slots.default[0];
    },
    mounted() {
        // 虽然 Vue 中一般子组件比父组件先 mounted，
        // 但这里必须放到 mounted。不然可能在 v-if 的情况下出不来。。
        /* eslint-disable consistent-this */
        const parentVM = this;
        this.childVM = new Vue({
            name: 'u-popper-child',
            parent: parentVM,
            render(h) { return parentVM.$slots.popper && parentVM.$slots.popper[0]; },
        });
        this.childVM.parentVM = parentVM;
        this.childVM.$mount();

        const referenceEl = this.getReferenceEl();
        const popperEl = this.childVM.$el;
        const triggerEl = this.getTriggerEl(referenceEl);
        const timers = this.timers = [];

        // 绑定事件
        const offEvents = this.offEvents = [];
        if (this.followCursor)
            offEvents.push(event.on(document.body, 'mousemove', this.onMouseMove));

        if (this.trigger === 'click')
            offEvents.push(event.on(triggerEl, 'click', () => this.toggle()));
        else if (this.trigger === 'hover') {
            offEvents.push(event.on(triggerEl, 'mouseenter', (e) => {
                clearTimeout(timers[1]);
                timers[1] = null;
                if (timers[0]) {
                    clearTimeout(timers[0]);
                }
                timers[0] = setTimeout(() => {
                    timers[0] = null;
                    this.toggle(true);
                    // 页面有滚动条的时候，会出现滚动到 reference 的元素上。这时会触发 mouseenter 事件，需要重新设置 reference 的位置。
                    this.mouseEnterEvent = e;
                }, this.hoverDelay);
            }));
            if (this.hideDelay) {
                offEvents.push(event.on(popperEl, 'mouseenter', () => {
                    clearTimeout(timers[1]);
                    timers[1] = null;
                }));
            }
            offEvents.push(event.on(document, 'mouseover', (e) => {
                // !referenceEl.contains(e.target) && !popperEl.contains(e.target) && this.toggle(false);
                if (this.currentOpen && !timers[1] && !triggerEl.contains(e.target) && !popperEl.contains(e.target)) {
                    if (timers[1]) {
                        clearTimeout(timers[1]);
                    }
                    timers[1] = setTimeout(() => this.toggle(false), this.hideDelay);
                }
            }));
        } else if (this.trigger === 'double-click')
            offEvents.push(event.on(triggerEl, 'dblclick', () => this.toggle()));
        else if (this.trigger === 'right-click') {
            offEvents.push(event.on(triggerEl, 'contextmenu', (e) => {
                e.preventDefault();
                this.toggle();
            }));
        }
        // @TODO: 有没有必要搞 focus-in
        offEvents.push(event.on(document, 'mousedown', (e) => {
            !triggerEl.contains(e.target) && !popperEl.contains(e.target) && this.toggle(false);
        }));

        this.currentOpen && this.createPopper();
    },
    beforeUpdate() {
        // 先 update 子组件
        this.childVM.$forceUpdate();
    },
    beforeDestroy() {
        this.destroyPopper();
        // 先 destroy 子组件
        this.childVM = this.childVM && this.childVM.$destroy();
        // 取消绑定事件
        this.offEvents.forEach((off) => off());
        this.timers.forEach((timer) => {
            clearTimeout(timer);
        });
    },
    methods: {
        getOptions() {
            const options = Object.assign({}, this.options, {
                placement: this.placement,
            });

            // 自定义options 传入offset值情况
            if (!options.modifiers.offset && this.offset) {
                options.modifiers.offset = {
                    offset: this.offset,
                };
            }

            options.escapeWithReference = this.escapeWithReference;

            options.modifiers.arrow = { element: this.arrowElement };
            options.modifiers.preventOverflow = { boundariesElement: this.boundariesElement };

            return options;
        },
        getReferenceEl() {
            if (this.reference === 'parent')
                return this.$el.parentElement;
            else
                return this.reference || this.$el;
        },
        getTriggerEl(referenceEl) {
            if (this.triggerElement === 'reference')
                return referenceEl;
            else if (this.triggerElement instanceof HTMLElement)
                return this.triggerElement;
            else if (this.triggerElement instanceof Function)
                return this.triggerElement(referenceEl);
        },
        createPopper() {
            const referenceEl = this.getReferenceEl();
            const popperEl = this.childVM.$el;
            if (this.appendTo === 'body')
                document.body.appendChild(popperEl);
            else if (this.appendTo === 'reference')
                referenceEl.appendChild(popperEl);

            const options = this.getOptions();
            this.popper = new Popper(referenceEl, popperEl, options);
            // 特殊处理滚动条的情况
            if (this.followCursor)
                this.onMouseMove(this.mouseEnterEvent);
        },
        update() {
            this.popper && this.popper.update();
        },
        destroyPopper() {
            const referenceEl = this.getReferenceEl();
            const popperEl = this.childVM.$el;
            if (this.appendTo === 'body')
                popperEl.parentElement === document.body && document.body.removeChild(popperEl);
            else if (this.appendTo === 'reference')
                popperEl.parentElement === referenceEl && referenceEl.removeChild(popperEl);

            this.popper && this.popper.destroy();
            this.popper = undefined;
        },
        toggle(open) {
            if (this.disabled)
                return;

            const oldOpen = this.currentOpen;

            if (open === undefined)
                open = !this.currentOpen;

            if (open === oldOpen)
                return;

            let cancel = false;
            this.$emit('before-toggle', {
                open,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.currentOpen = open;
            this.$emit('update:open', open);
            this.$emit('toggle', {
                open,
            });
        },
        onMouseMove(e) {
            // @TODO: 支持其它 trigger 的情况
            // @TODO: 两种 offset 属性有些冗余

            const referenceEl = this.getReferenceEl();
            if (!(e.target === referenceEl && this.popper))
                return;

            const top = e.clientY + this.currentFollowCursor.offsetY;
            const left = e.clientX + this.currentFollowCursor.offsetX;
            const right = e.clientX + this.currentFollowCursor.offsetX;
            const bottom = e.clientY + this.currentFollowCursor.offsetY;

            this.popper.reference = {
                getBoundingClientRect: () => ({
                    width: 0,
                    height: 0,
                    top,
                    left,
                    right,
                    bottom,
                }),
                clientWidth: 0,
                clientHeight: 0,
            };
            this.popper.scheduleUpdate();
            // });
        },
    },
};

export default UOldPopper;
