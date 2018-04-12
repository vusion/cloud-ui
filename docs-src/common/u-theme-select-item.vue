<script>
import SelectItem from '../../src/u-select-item.vue';

export default {
    name: 'u-theme-select-item',
    parentName: 'u-theme-select',
    mixins: [SelectItem],
};
</script>

<style module>
@import '../../src/u-select-item.vue/module.css';

.root {
    line-height: 36px;
}
</style>
