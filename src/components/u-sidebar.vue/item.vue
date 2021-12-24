<script>
import { MSinglexItem } from '../m-singlex.vue';
import { isElementInView } from '../../utils/dom';

export default {
    name: 'u-sidebar-item',
    parentName: 'u-sidebar',
    groupName: 'u-sidebar-group',
    extends: MSinglexItem,
    watch: {
        active(active) {
            this.watchActive(active);
        },
    },
    mounted() {
        this.watchActive(this.active);
    },
    methods: {
        watchActive(active) {
            if (!active)
                return;
            let groupVM = this.groupVM;
            while (groupVM) {
                groupVM.toggle
                    && groupVM.toggle(true, this.parentVM.particular);
                groupVM = groupVM.parentVM;
            }
            if (!isElementInView(this.$el, this.parentVM.$el, 'vertical'))
                this.$nextTick(() => this.$el.scrollIntoView(false));
        },
    },
};
</script>

<style module>
.root {
    display: block;
    cursor: var(--cursor-pointer);
    height: var(--sidebar-item-height);
    line-height: var(--sidebar-item-height);
    padding-left: var(--sidebar-item-padding-left);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: var(--sidebar-item-color);
    background: var(--sidebar-item-background);
    transition: all var(--transition-duration-base);
}

.root:hover {
    color: var(--sidebar-item-color-hover);
}

.root[readonly] {
    cursor: default;
}

.root[selected] {
    background: var(--sidebar-item-background-selected);
    color: var(--sidebar-item-color-selected);
    border-right: var(--sidebar-item-border-right-width) solid var(--sidebar-item-border-right-color);
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    background: var(--sidebar-item-background-disabled);
    color: var(--sidebar-item-color-disabled);
}

.root[selected][disabled] {
    background: var(--sidebar-item-background-selected-disabled);
}
.root [class^="i-ico_lcp-iconv"] {
    /* margin-left: -28px; */
}
</style>
