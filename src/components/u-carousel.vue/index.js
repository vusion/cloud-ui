import { MSinglex } from '../m-singlex.vue';

export const UCarousel = {
    name: 'u-carousel',
    childName: 'u-carousel-item',
    extends: MSinglex,
    props: {
        autoSelect: { type: Boolean, default: true },
        value: null,
        autoplay: { type: Boolean, default: true }, // Same with <video>
        loop: { type: Boolean, default: true },
        interval: { type: Number, default: 4000, validator: (value) => Number.isInteger(value) && value >= 0 },
        direction: { type: String, default: 'right' },
        animation: String,
        // duration: { type: Number, default: 1000, validator: (value) => Number.isInteger(value) && value >= 0 },
        router: { type: Boolean, default: false },
        hideButtons: { type: Boolean, default: false },
    },
    data() {
        return {
            animating: true,
        };
    },
    computed: {
        selectedIndex: {
            get() {
                return this.itemVMs.indexOf(this.selectedVM);
            },
            set(index) {
                this.selectedVM = this.itemVMs[index];
            },
        },
    },
    created() {
        this.$on('select', ($event) => {
            clearTimeout(this.timer);
            this.router && $event.itemVM.navigate();
            this.play();
        });
    },
    mounted() {
        this.play();
    },
    destroyed() {
        clearTimeout(this.timer);
    },
    methods: {
        prev() {
            clearTimeout(this.timer);
            const length = this.itemVMs.length;
            this.selectedIndex = (this.selectedIndex - 1 + length) % length;
            this.play();
        },
        next() {
            clearTimeout(this.timer);
            const length = this.itemVMs.length;
            const index = this.selectedIndex + 1;
            if (!this.loop && index >= length)
                return;
            this.selectedIndex = index % length;
            this.play();
        },
        play() {
            if (!this.autoplay)
                return;

            this.timer = setTimeout(() => {
                this.next();
            }, this.interval);
        },
    },
};

export { UCarouselItem } from './item.vue';

export default UCarousel;
