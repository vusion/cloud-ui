<script>
import UCascader from '../u-cascader.vue';
import i18n from './i18n';

export default {
    name: 'u-region-select',
    extends: UCascader,
    i18n,
    props: {
        field: { type: String, default: 'value' },
        // categories: {
        //     type: Array,
        //     default() {
        //         return [
        //             { label: this.$t('province'), placeholder: this.$t('placeholder') + this.$t('province') },
        //             { label: this.$t('city'), placeholder: this.$t('placeholder') + this.$t('city') },
        //             { label: this.$t('district'), placeholder: this.$t('placeholder') + this.$t('district') },
        //         ];
        //     },
        // },
    },
    async created() {
        if(!this.data.length){
            const currentData=  await import(/* webpackChunkName: 'region' */ './region.json');
            this.currentData = currentData.default;
        }
    },
};
</script>
