<script>
import { UMenuDivider } from '../../u-menu.vue';

export default {
    name: 'u-navbar-menu-divider',
    parentName: 'u-navbar-menu',
    extends: UMenuDivider,
};
</script>

<style module>
.root {
    margin: var(--list-view-divider-margin);
    height: 1px;
    background: var(--navbar-menu-divider-background);
}
</style>