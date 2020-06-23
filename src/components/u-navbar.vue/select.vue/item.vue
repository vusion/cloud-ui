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
    padding: var(--navbar-select-item-padding);
}
</style>
