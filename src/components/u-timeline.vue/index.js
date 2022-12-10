/* eslint-disable multiline-ternary */
import SupportDataSource from '../../mixins/support.datasource.js';
import UTimelineItem from './item.vue/index';

export const UTimeline = {
    name: 'u-timeline',
    mixins: [SupportDataSource],
    components: {
        UTimelineItem,
    },
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
