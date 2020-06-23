<script>
import { UListView } from '../u-list-view.vue';

export default {
    name: 'u-capsules',
    childName: 'u-capsule',
    extends: UListView,
};
</script>

<style module>
.root {
    /* @Private */
    user-select: none;
    display: inline-block;
    font-size: 0;
}

.root:focus {
    outline: var(--focus-outline);
}
</style>
