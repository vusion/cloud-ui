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
};

export { UTimelineItem } from './item.vue';

export default UTimeline;
