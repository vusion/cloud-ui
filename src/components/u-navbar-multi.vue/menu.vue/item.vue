<script>
import { UMenuItem } from '../../u-menu.vue';

export default {
    name: 'u-navbar-menu-item-multi',
    parentName: 'u-navbar-menu-multi',
    groupName: 'u-navbar-menu-group-multi',
    extends: UMenuItem,
};
</script>

<style module>
@extends '../../u-menu.vue/item.css';

.root {
    padding: var(--navbar-menu-item-padding);
    color: var(--navbar-menu-item-color);
}

.root:hover {
    background: var(--navbar-menu-item-background-hover);
    color: var(--navbar-menu-item-color-hover);
}

.root + .root {
    border-top: none;
}
</style>

</style>