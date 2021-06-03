/* eslint-disable multiline-ternary */
export const UTimeline = {
    name: 'u-timeline',
    props: {
        pending: {
            type: Boolean,
            default: false,
        },
        mode: {
            type: String,
            default: 'default',
            validator(value) {
                return ['default', 'alternate', 'label'].indexOf(value) !== -1;
            },
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
