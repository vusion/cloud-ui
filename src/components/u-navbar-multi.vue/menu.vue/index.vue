<script>
import UMenu from '../../u-menu.vue';

export default {
    name: 'u-navbar-menu-multi',
    groupName: 'u-navbar-menu-group-multi',
    childName: 'u-navbar-menu-item-multi',
    extends: UMenu,
};
</script>

<style module>
@extends '../../u-menu.vue/index.css';

.root {
    background: var(--navbar-menu-item-background);
    color: var(--navbar-menu-item-color);
    border-color: var(--navbar-menu-border-color);
    box-shadow: var(--navbar-menu-box-shadow);
}
</style>
