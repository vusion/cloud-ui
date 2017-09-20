import Emitter from 'u-emitter.vue';

export default {
    name: 'u-carousel-slice',
    mixins: [Emitter],
    props: {
        content: { type: String, default: '' },
        allAnimationEnd: { type: Boolean, default: false },
    },
    watch: {
        allAnimationEnd(val) {
            if (!val) { // 动画结束 opacity还原为0
                this.$el.style.opacity = 0;
            }
        },
    },
    methods: {
        animationEnd() {
            this.$el.style.opacity = 1;
            this.dispatch('u-carousel', 'u-carousel-slice-end', 1);
        },
    },
};
