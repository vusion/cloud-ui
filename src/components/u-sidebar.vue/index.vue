<script>
import MSinglex from '../m-singlex.vue';
import { MGroupParent } from '../m-group.vue';

export default {
    name: 'u-sidebar',
    groupName: 'u-sidebar-group',
    childName: 'u-sidebar-item',
    mixins: [MSinglex, MGroupParent],
    props: {
        router: { type: Boolean, default: true },
        particular: { type: Boolean, default: false },
    },
    created() {
        this.$on('select', ({ itemVM }) => this.router && itemVM.navigate());
    },
};
</script>

<style module>
.root {
    user-select: none;
    background: var(--sidebar-background);
    height: 100%;
    overflow: auto;
}

.root[size="small"] .group_head {
    height: var(--sidebar-item-height-small);
    line-height: var(--sidebar-item-height-small);
    font-size: 12px;
    /* background: transparent; */
    cursor: default;
}

.root[size="small"] .item {
    height: var(--sidebar-item-height-small);
    line-height: var(--sidebar-item-height-small);
}

.root[size="small"] .item[selected] {
    border-right-width: var(--sidebar-item-border-right-width-small);
}
</style>
