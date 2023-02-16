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
    data() {
        return {
            observerwh: null,
        };
    },
    computed: {
        hastop() {
            return this.$env.VUE_APP_DESIGNER;
        },
        itemPosition() {
            return ['alternate', 'label'].indexOf(this.timeline.mode) !== -1 ? this.position : undefined;
        },
    },
    mounted() {
        this.observerwh = new MutationObserver(this.pwh);
        this.observerwh.observe(this.$refs.labelwrap, {
            attributes: true, childList: true, subtree: true,
        });
        setTimeout(() => {
            this.pwh();
        });
    },
    updated() {
        this.observerwh = new MutationObserver(this.pwh);
        this.observerwh.observe(this.$refs.labelwrap, {
            attributes: true, childList: true, subtree: true,
        });
        setTimeout(() => {
            this.pwh();
        });
    },
    destroyed() {
        this.observerwh && this.observerwh.disconnect();
    },
    methods: {
        pwh(mutationsList, observer) {
            let realH;
            const realHeight = this.$refs.labelwrap.scrollHeight;
            const realHeightr = this.$refs.contentwrap.scrollHeight;
            // eslint-disable-next-line prefer-const
            realH = Math.max(realHeight, realHeightr);
            if (this.timeline.mode === 'label' && realH && realH > 0) {
                // const originHeight = this.$refs.wrap.offsetHeight;
                (this.$refs.wrap.style.height = realH + 20 + 'px');
            }
        },
    },
};

export default UTimelineItem;
