export const UTimelineItem = {
    name: 'u-timeline-item',
    props: {
        color: {
            type: String,
            default: 'primary',
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
    },
    inject: ['timeline'],
    data() {
        return {
            itemPosition: this.timeline.alternate || this.timeline.hasLabel ? this.position : undefined,
        };
    },
};

export default UTimelineItem;
