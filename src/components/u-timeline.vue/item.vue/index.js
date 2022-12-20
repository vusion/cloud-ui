import SEmpty from '../../../components/s-empty.vue';

export const UTimelineItem = {
    name: 'u-timeline-item',
    props: {
        color: {
            type: String,
            default: 'blue',
        },
        label: {
            type: String,
        },
        position: {
            validator(value) {
                return ['left', 'right'].indexOf(value) !== -1;
            },
            default: 'right',
        },
        item: {
            type: [Object, String, Number],
        },
        index: {
            type: [Object, String, Number],
        },
    },
    components: {
        SEmpty,
    },
    inject: ['timeline'],
    // data() {
    //     return {
    //         itemPosition: ['alternate', 'label'].indexOf(this.timeline.mode) !== -1 ? this.position : undefined,
    //     };
    // },
    computed: {
        hastop() {
            return this.$env.VUE_APP_DESIGNER;
        },
        itemPosition() {
            return ['alternate', 'label'].indexOf(this.timeline.mode) !== -1 ? this.position : undefined;
        },
    },
};

export default UTimelineItem;
