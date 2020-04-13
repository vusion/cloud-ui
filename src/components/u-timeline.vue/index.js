/* eslint-disable multiline-ternary */
export const UTimeline = {
    name: 'u-timeline',
    props: {
        alternate: {
            type: Boolean,
            default: false,
        },
        pending: {
            type: Boolean,
            default: false,
        },
    },
    provide() {
        return {
            timeline: this,
        };
    },
    data() {
        const hasLabel
            = this.$slots && this.$slots.default
                ? this.$slots.default.some((Vnode) => {
                    if (Vnode && Vnode.componentOptions) {
                        const componentOptions = Vnode.componentOptions;
                        const hasLabelProps = componentOptions.propsData
                            ? !!componentOptions.propsData.label
                            : false;
                        const hasLabelChild = componentOptions.children
                            ? componentOptions.children.some((Vn) =>
                                (Vn && Vn.data
                                    ? Vn.data.slot === 'label'
                                    : false)
                            )
                            : false;
                        return hasLabelProps || hasLabelChild;
                    }
                    return false;
                })
                : false;
        return {
            hasLabel,
        };
    },
};

export { UTimelineItem } from './item.vue';

export default UTimeline;
