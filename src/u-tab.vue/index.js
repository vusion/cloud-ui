import Base from 'u-base.vue';

const Tab = Base.extend({
    name: 'u-tab',
    props: {
        title: String,
    },
    computed: {
        visible() {
            /**
             * @QUESTION
             * Using `$parent.selectedItem === this` in template has no effect.
             * Check whether it is a bug of Vue.
             */
            return this.$parent.selectedTab === this;
        },
    },
    created() {
        this.$parent.addTab(this);
    },
    destroy() {
        this.$parent.removeTab(this);
    },
});

export default Tab;
