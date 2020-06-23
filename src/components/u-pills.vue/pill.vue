<script>
import { UListViewItem } from '../u-list-view.vue';

export default {
    name: 'u-pill',
    parentName: 'u-pills',
    extends: UListViewItem,
};
</script>

<style module>
.root {
    cursor: var(--cursor-pointer);
    display: inline-block;
    height: 30px;
    line-height: 28px;
    padding: 0 12px;
    background: var(--field-background);
    color: var(--field-color);
    border: 1px solid var(--field-border-color);
    border-radius: var(--border-radius-base);
}

.root:not(:last-child) {
    margin-right: 4px;
}

.root:hover {
    border-color: var(--brand-primary);
}

.root[selected] {
    background: var(--brand-primary);
    color: white;
    border-color: var(--brand-primary);
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    color: var(--field-border-color);
    border-color: var(--field-border-color);
}

.root[selected][disabled] {
    background: var(--gray-light);
}
</style>
