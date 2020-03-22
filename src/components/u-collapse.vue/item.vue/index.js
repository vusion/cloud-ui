import { MChild } from '../../m-parent.vue';
import { addClass, removeClass } from '../../../utils/dom';

export const UCollapseItem = {
    name: 'u-collapse-item',
    parentName: 'u-collapse',
    mixins: [MChild],
    props: {
        title: String,
        expanded: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            // @inherit: parentVM: undefined,
            currentExpanded: this.expanded,
        };
    },
    watch: {
        expanded(expanded) {
            this.currentExpanded = expanded;
        },
    },
    methods: {
        expand() {
            if (this.disabled || this.parentVM.disabled)
                return;
            if (this.currentExpanded)
                return;

            if (this.$emitPrevent('before-expand', {}, this))
                return;

            this.currentExpanded = true;
            this.$emit('update:expanded', true, this);

            if (this.parentVM.accordion) {
                this.parentVM.itemVMs.forEach((itemVM) => {
                    if (itemVM !== this && itemVM.currentExpanded)
                        itemVM.collapse();
                });
            }

            this.$emit('expand', {}, this);
            this.parentVM.onItemExpand(this);
        },
        collapse() {
            if (this.disabled || this.parentVM.disabled)
                return;
            if (!this.currentExpanded)
                return;

            if (this.$emitPrevent('before-collapse', {}, this))
                return;

            this.currentExpanded = false;
            this.$emit('update:expanded', false, this);

            this.$emit('collapse', {}, this);
            this.parentVM.onItemCollapse(this);
        },
        toggle(expanded) {
            if (expanded === undefined)
                expanded = !this.currentExpanded;
            expanded ? this.expand() : this.collapse();
        },

        // collapse-transition javaScript hooks
        beforeEnter(el) {
            addClass(el, 'collapse-transition');
            if (!el.dataset)
                el.dataset = {};

            el.dataset.oldPaddingTop = el.style.paddingTop;
            el.dataset.oldPaddingBottom = el.style.paddingBottom;

            el.style.height = '0';
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
        },
        enter(el) {
            el.dataset.oldOverflow = el.style.overflow;
            if (el.scrollHeight !== 0) {
                el.style.height = el.scrollHeight + 'px';
                el.style.paddingTop = el.dataset.oldPaddingTop;
                el.style.paddingBottom = el.dataset.oldPaddingBottom;
            } else {
                el.style.height = '';
                el.style.paddingTop = el.dataset.oldPaddingTop;
                el.style.paddingBottom = el.dataset.oldPaddingBottom;
            }

            el.style.overflow = 'hidden';
        },
        afterEnter(el) {
            // for safari: remove class then reset height is necessary
            removeClass(el, 'collapse-transition');
            el.style.height = '';
            el.style.overflow = el.dataset.oldOverflow;
        },
        beforeLeave(el) {
            if (!el.dataset)
                el.dataset = {};
            el.dataset.oldPaddingTop = el.style.paddingTop;
            el.dataset.oldPaddingBottom = el.style.paddingBottom;
            el.dataset.oldOverflow = el.style.overflow;

            el.style.height = el.scrollHeight + 'px';
            el.style.overflow = 'hidden';
        },
        leave(el) {
            if (el.scrollHeight !== 0) {
                // for safari: add class after set height, or it will jump to zero height suddenly, weired
                addClass(el, 'collapse-transition');
                el.style.height = 0;
                el.style.paddingTop = 0;
                el.style.paddingBottom = 0;
            }
        },
        afterLeave(el) {
            removeClass(el, 'collapse-transition');
            el.style.height = '';
            el.style.overflow = el.dataset.oldOverflow;
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
        },
    },
};

export default UCollapseItem;
