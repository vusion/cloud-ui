<script>
import UButton from '../u-button.vue';

export default { name: 'u-form-table-edit-button', extends: UButton };
</script>

<style module>
.root {}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    color: var(--brand-disabled);
}

.root::before {
    font-size: var(--font-size-huge);
    display: inline-block;
    vertical-align: middle;
    icon-font: url('../i-icon.vue/assets/edit.svg');
}
</style>
