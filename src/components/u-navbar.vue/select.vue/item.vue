<script>
import { USelectItem } from '../../u-select.vue';

export default {
    name: 'u-navbar-select-item',
    parentName: 'u-navbar-select',
    groupName: 'u-navbar-select-group',
    extends: USelectItem,
};
</script>

<style module>
@extends '../../u-select.vue/item.css';

.root {
    padding: 6px 12px;
    color: white;
}

.root:hover {
    background: #142236;
}

.root[focused] {
    background: #142236;
}
</style>
