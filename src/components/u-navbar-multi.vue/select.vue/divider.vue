<script>
import { USelectDivider } from '../../u-select.vue';

export default {
    name: 'u-navbar-select-divider-multi',
    parentName: 'u-navbar-select-multi',
    extends: USelectDivider,
};
</script>

<style module>
.root {
    margin: var(--list-view-divider-margin);
    height: 1px;
    background: var(--navbar-select-divider-background);
}
</style>
