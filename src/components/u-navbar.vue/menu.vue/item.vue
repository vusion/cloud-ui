<script>
import { UMenuItem } from '../../u-menu.vue';

export default {
    name: 'u-navbar-menu-item',
    parentName: 'u-navbar-menu',
    groupName: 'u-navbar-menu-group',
    extends: UMenuItem,
};
</script>

<style module>
@extends '../../u-menu.vue/item.css';

.root {
    padding: var(--navbar-menu-item-padding);
}
</style>