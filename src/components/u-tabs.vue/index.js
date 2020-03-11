import { MSinglex } from '../m-singlex.vue';
import { scrollTo } from '../../utils/style';

export const UTabs = {
    name: 'u-tabs',
    childName: 'u-tab',
    extends: MSinglex,
    props: {
        autoSelect: { type: Boolean, default: true },
        closable: { type: Boolean, default: false },
        router: { type: Boolean, default: false },
        showScrollButtons: { type: [String, Boolean], default: 'auto' },
    },
    data() {
        return {
            scrollable: false,
        };
    },
    watch: {
        itemVMs() {
            this.$nextTick(() => {
                this.scrollable = this.$refs.scrollView.scrollWidth > this.$refs.scrollView.clientWidth;
            });
        },
    },
    created() {
        this.$on('select', ($event) => {
            this.router && $event.itemVM.navigate();
        });
    },
    methods: {
        close(itemVM) {
            if (this.readonly || this.disabled || itemVM.disabled)
                return;

            const oldValue = this.value;

            let cancel = false;
            this.$emit('before-close', {
                value: itemVM && itemVM.value,
                oldValue,
                itemVM,
                preventDefault: () => cancel = true,
            }, this);
            if (cancel)
                return;

            itemVM.parentVM = undefined;
            const index = this.itemVMs.indexOf(itemVM);
            this.itemVMs.splice(index, 1);

            cancel = false;
            this.$emit('close', {
                value: itemVM && itemVM.value,
                oldValue,
                itemVM,
                preventDefault: () => cancel = true,
            }, this);
            if (cancel)
                return;

            if (this.selectedVM === itemVM) {
                this.selectedVM = this.itemVMs[index] || this.itemVMs[index - 1];
                const value = this.selectedVM && this.selectedVM.value;
                this.$emit('input', value, this);
                this.$emit('update:value', value, this);
            }
        },
        scrollPrev() {
            const scrollViewEl = this.$refs.scrollView;
            const children = scrollViewEl.children[0].children;

            // 查找第一个不截断的项
            let accWidth = 0;
            if (scrollViewEl.scrollLeft - scrollViewEl.clientWidth > 0) {
                for (let i = 0; i < children.length; i++) {
                    const itemEl = children[i];
                    accWidth += itemEl.offsetWidth;
                    if (accWidth + itemEl.offsetWidth > scrollViewEl.scrollLeft - scrollViewEl.clientWidth)
                        break;
                }
            }

            scrollTo(scrollViewEl, {
                left: accWidth,
                duration: 1000,
            });
        },
        scrollNext() {
            const scrollViewEl = this.$refs.scrollView;
            const children = scrollViewEl.children[0].children;

            // 查找第一个不截断的项
            let accWidth = 0;
            for (let i = 0; i < children.length; i++) {
                const itemEl = children[i];
                if (accWidth + itemEl.offsetWidth > scrollViewEl.scrollLeft + scrollViewEl.clientWidth)
                    break;
                accWidth += itemEl.offsetWidth;
            }

            scrollTo(scrollViewEl, {
                left: accWidth,
                duration: 1000,
            });
        },
    },
};

export { UTab } from './tab.vue';

export default UTabs;
