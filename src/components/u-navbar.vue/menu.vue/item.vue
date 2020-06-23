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
    padding: 6px 12px;
}

.root:hover {
    background: #142236;
}

.root + .root {
    border-top: none;
}
</style>
