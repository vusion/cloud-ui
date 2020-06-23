<script>
import { UListViewItem } from '../u-list-view.vue';

export default {
    name: 'u-tablet',
    parentName: 'u-tablets',
    extends: UListViewItem,
};
</script>

<style module>
.root {
    cursor: var(--cursor-pointer);
    display: inline-block;
    margin-right: 15px;
    padding: 0 15px;
    height: 32px;
    line-height: 30px;
    color: var(--color-light);
    background: #f7f8fa;
    border: 1px solid #d7dae0;
    border-radius: var(--border-radius-base);
}

.root:hover {
    box-shadow: 0 0 10px 0 rgba(80, 90, 109, 0.16);
}

.root[selected] {
    position: relative;
    background-color: #f7fcfe;
    color: var(--color-base);
    border-color: var(--brand-primary);
    box-shadow: inset 0 0 0 1px var(--brand-primary);
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    color: #d6d6d6;
    border-color: var(--field-border-color);
    box-shadow: none;
}

.root[selected][disabled] {
    background: var(--gray-light);
    border-color: var(--brand-primary);
    box-shadow: inset 0 0 0 1px var(--brand-primary);
}
</style>
