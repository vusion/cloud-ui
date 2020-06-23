<script>
import { UListView } from '../u-list-view.vue';

export default { name: 'u-pills', childName: 'u-pill', extends: UListView };
</script>

<style module>
.root {
    /* @Private */
    user-select: none;
    display: inline-block;
}

.root:focus {
    outline: var(--focus-outline);
}
</style>
