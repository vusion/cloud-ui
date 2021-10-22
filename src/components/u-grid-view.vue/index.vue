<script>
import { UListView } from '../u-list-view.vue';
import i18n from './i18n';

export default {
    name: 'u-grid-view',
    groupName: 'u-grid-view-group',
    childName: 'u-grid-view-item',
    extends: UListView,
    i18n,
    props: {
        repeat: { type: Number, default: 5 },
    },
    computed: {
        itemWidth() {
            return 1 / this.repeat * 100 + '%';
        },
    },
};
</script>

<style module>
@import '../u-list-view.vue/index.css';

.body {
    margin: 0 calc(var(--grid-view-item-space) / (-2));
}

.root .item {
    padding: calc(var(--grid-view-item-space) / 2);
}
</style>
