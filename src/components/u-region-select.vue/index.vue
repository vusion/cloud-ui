<script>
import UCascadeSelect from '../u-cascade-select.vue';
import i18n from './i18n';

export default {
    name: 'u-region-select',
    extends: UCascadeSelect,
    i18n,
    props: {
        field: { type: String, default: 'value' },
        categories: {
            type: Array,
            default() {
                return [
                    { label: this.$t('province') },
                    { label: this.$t('city') },
                    { label: this.$t('district') },
                ];
            },
        },
    },
    created() {
        !this.data &&
            import('./region.json').then(
                (region) => (this.currentData = region.default),
            );
    },
};
</script>
