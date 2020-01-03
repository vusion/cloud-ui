import Popper from '@vusion/popper.js';
import MEmitter from '../m-emitter.vue';
import ev from '../../utils/event';
import single from '../../utils/event/single';

export const MPopper = {
    name: 'm-popper',
    mixins: [MEmitter],
    isPopper: true,
    props: {
        opened: { type: Boolean, default: false },
        trigger: { type: String, default: 'click' },
        triggerElement: { type: [String, HTMLElement, Function], default: 'reference' },
        reference: { type: [String, HTMLElement, Function], default: 'context-parent', validator: (value) => {
            if (typeof value !== 'string')
                return true;
            else
                return ['parent', '$parent', 'context-parent', 'prev', 'next'].includes(value);
        } },
        placement: {
            type: String, default: 'bottom-start',
            validator: (value) => /^(top|bottom|left|right)(-start|-end)?$/.test(value),
        },
        hoverDelay: { type: Number, default: 0 },
        hideDelay: { type: Number, default: 0 },
        appendTo: { type: String, default: 'body', validator: (value) => ['body', 'reference'].includes(value) },
        boundariesElement: { default: 'window' },
        arrowElement: { type: String, default: '[u-arrow]' },
        escapeWithReference: { type: Boolean, default: true },
        followCursor: { type: [Boolean, Number, Object], default: false },
        offset: { type: [Number, String], default: 0 },
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
            currentOpened: this.opened,
            referenceEl: undefined,
            triggers: [], // 所有的触发器，为了方便，第一项始终为默认的
            // popper: undefined,
            // 在出现滚动条的时候 需要特殊处理下
            offEvents: [],
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
        opened(opened) {
            this.currentOpened = opened;
        },
        currentOpened(currentOpened) {
            // 不直接用样式的显隐，而是用 popper 的 create 和 destroy，是因为 popper 有可能是从不同的地方触发的，reference 对象会变
            if (currentOpened) {
                this.createPopper();
                this.$emit('open', undefined, this);
            } else {
                this.destroyPopper();
                this.$emit('close', undefined, this);
            }
        },
        reference() {
            /**
            * 问题：现在的 popper 不支持动态改变 reference，导致 popper 的位置显示有问题
            * 解决方法：暂时在 popper.js 文档中未找到理想的解决方案，采取先删除 popper，再新创建 popper 的方法修复位置问题，
            * 后面需要研究下 popper.js 的源码
            */
            this.destroyPopper();
            this.referenceEl = this.getReferenceEl();
            this.createPopper();
        },
    },
    mounted() {
        // 字符串类型的 reference 只有首次获取是有效的，因为之后节点会被插到别的地方
        this.referenceEl = this.getReferenceEl();
        const triggerEl = this.getTriggerEl(this.referenceEl);
        this.addTrigger(triggerEl, this.trigger);

        this.currentOpened && this.createPopper();
    },
    beforeDestroy() {
        this.destroyPopper();
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
            if (this.reference instanceof HTMLElement)
                return this.reference;
            else if (this.reference instanceof Function)
                return this.reference(this.$el);
            else if (this.$el) {
                if (this.reference === 'parent')
                    return this.$el.parentElement;
                else if (this.reference === '$parent')
                    return this.$parent.$el;
                else if (this.reference === 'context-parent') {
                    // 求上下文中的 parent
                    if (this.$parent === this.$vnode.context)
                        return this.$el.parentElement;

                    // Vue 的 vnode.parent 没有连接起来，需要自己找，不知道有没有更好的方法
                    let parentVNode = this.$parent._vnode;
                    while (parentVNode && !parentVNode.children.includes(this.$vnode))
                        parentVNode = parentVNode.children.find((child) => child.elm.contains(this.$el));
                    // if (!parentVNode)
                    if (parentVNode.context === this.$vnode.context)
                        return parentVNode.elm;

                    // 否则，找第一个上下文一致的组件
                    let parentVM = this.$parent;
                    while (parentVM && parentVM.$vnode.context !== this.$vnode.context)
                        parentVM = parentVM.$parent;
                    return parentVM.$el;
                } else if (this.reference === 'prev')
                    return this.$el.previousElementSibling;
                else if (this.reference === 'next')
                    return this.$el.nextElementSibling;
            }
        },
        getTriggerEl(referenceEl) {
            if (this.triggerElement === 'reference')
                return referenceEl;
            else if (this.triggerElement instanceof HTMLElement)
                return this.triggerElement;
            else if (this.triggerElement instanceof Function)
                return this.triggerElement(referenceEl);
        },
        /**
         * 添加触发器时，绑定事件
         */
        addTrigger(el, event) {
            const popperEl = this.$el;
            // @TODO: support directives
            const arr = event.split('.');
            event = arr[0];

            this.triggers.push({ el, event });

            // 收集 setTimeout
            this.timers = this.timers || [];

            // 绑定事件
            this.followCursor && this.offEvents.push(
                single.on('m-popper-proto', {
                    el,
                    self: this,
                }, document, 'mousemove', (e, datas) => {
                    Object.values(datas).forEach(({ el, self }) => {
                        self.updatePositionByCursor(e, el);
                    });
                })
            );

            if (event === 'click')
                this.offEvents.push(ev.on(el, 'click', (e) => {
                    if (arr[1] === 'stop')
                        e.stopPropagation();
                    else if (arr[1] === 'prevent')
                        e.preventDefault();
                    this.toggle();
                    this.followCursor && this.$nextTick(() => this.updatePositionByCursor(e, el));
                }));
            else if (event === 'hover') {
                let timer;
                this.offEvents.push(ev.on(el, 'mouseenter', (e) => {
                    timer = clearTimeout(timer);
                    this.timers[0] = setTimeout(() => {
                        this.open();
                        this.followCursor && this.$nextTick(() => this.updatePositionByCursor(e, el));
                    }, this.hoverDelay);
                }));
                this.offEvents.push(
                    single.on('m-popper-proto', {
                        self: this,
                        el,
                        popperEl,
                        timer,
                    }, document, 'mousemove', (e, datas) => {
                        Object.values(datas).forEach(({ el, popperEl, self, timer }) => {
                            if (self.currentOpened && !timer && !el.contains(e.target) && !popperEl.contains(e.target)) {
                                self.timers[1] = setTimeout(() => self.close(), self.hideDelay);
                            }
                        });
                    })
                );
            } else if (event === 'double-click')
                this.offEvents.push(ev.on(el, 'dblclick', (e) => {
                    this.toggle();
                    this.followCursor && this.$nextTick(() => this.updatePositionByCursor(e, el));
                }));
            else if (event === 'right-click') {
                this.offEvents.push(ev.on(el, 'contextmenu', (e) => {
                    e.preventDefault();
                    this.toggle();
                    this.followCursor && this.$nextTick(() => this.updatePositionByCursor(e, el));
                }));
            }
            // @TODO: 有没有必要搞 focus-in
            this.offEvents.push(
                single.on('m-popper-proto', {
                    el,
                    popperEl,
                    self: this,
                }, document, 'mousedown', (e, datas) => {
                    Object.values(datas).forEach(({ el, popperEl, self }) => {
                        !el.contains(e.target) && !popperEl.contains(e.target) && self.close();
                    });
                })
            );
        },
        createPopper() {
            const referenceEl = this.referenceEl;
            const popperEl = this.$el;
            if (this.appendTo === 'body')
                document.body.appendChild(popperEl);
            else if (this.appendTo === 'reference')
                referenceEl.appendChild(popperEl);

            const options = this.getOptions();
            this.popper = new Popper(referenceEl, popperEl, options);
        },
        update() {
            this.popper && this.popper.update();
        },
        scheduleUpdate() {
            this.popper && this.popper.scheduleUpdate();
        },
        destroyPopper() {
            const referenceEl = this.referenceEl;
            const popperEl = this.$el;
            if (this.appendTo === 'body')
                popperEl.parentElement === document.body && document.body.removeChild(popperEl);
            else if (this.appendTo === 'reference')
                popperEl.parentElement === referenceEl && referenceEl.removeChild(popperEl);

            this.popper && this.popper.destroy();
            this.popper = undefined;
        },
        updatePositionByCursor(e, el) {
            // @TODO: 两种 offset 属性有些冗余
            if (e.target !== el || !this.popper)
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
        },
        open() {
            // Check if enabled
            if (this.disabled)
                return;

            // Prevent replication
            if (this.currentOpened)
                return;

            // Emit a `before-` event with preventDefault()
            if (this.$emitPrevent('before-open', undefined, this))
                return;

            // Assign and sync `opened`
            this.currentOpened = true;
            this.$emit('update:opened', true, this);

            // Emit `after-` events
            // this.$emit('open', undefined, this);
        },
        close() {
            // Check if enabled
            if (this.disabled)
                return;

            // Prevent replication
            if (!this.currentOpened)
                return;

            // Emit a `before-` event with preventDefault()
            if (this.$emitPrevent('before-close', undefined, this))
                return;

            // Assign and sync `opened`
            this.currentOpened = false;
            this.$emit('update:opened', false, this);

            // Emit `after-` events
            // this.$emit('close', undefined, this);
        },
        toggle(opened) {
            // Method overloading
            if (opened === undefined)
                opened = !this.currentOpened;

            // @deprecated start
            if (this.disabled)
                return;
            const oldOpened = this.currentOpened;
            if (opened === oldOpened)
                return;

            if (this.$emitPrevent('before-toggle', { opened }, this))
                return;

            opened ? this.open() : this.close();

            this.$emit('toggle', { opened }, this);
            // @deprecated end
        },
    },
};

export default MPopper;
