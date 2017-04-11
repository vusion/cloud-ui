import Base from 'u-base.vue';

const Tabs = Base.extend({
    name: 'u-tabs',
    data() {
        return {
            tabs: [],
            selectedIndex: 0,
        };
    },
    computed: {
        selectedTab() {
            return this.$children[this.selectedIndex];
        },
    },
    methods: {
        addTab(tab) {
            // const index = this.$slots.default.indexOf(tab.$vnode);
            // this.tabs.splice(index, 0, tab);
            this.tabs.push(tab);
        },
        removeTab(tab) {
            const index = this.tabs.indexOf(tab);
            ~index && this.tabs.splice(index, 1);
        },
    },
});

export default Tabs;
