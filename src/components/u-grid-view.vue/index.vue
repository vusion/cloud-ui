<script>
import { UListView } from '../u-list-view.vue';
import i18n from './i18n';
import { isIE } from '../../utils/dom';

export default {
    name: 'u-grid-view',
    groupName: 'u-grid-view-group',
    childName: 'u-grid-view-item',
    extends: UListView,
    i18n,
    props: {
        repeat: { type: Number, default: 5 },
        showTitle: { type: Boolean, default: () => !isIE() }, // IE 默认不展示 title
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

/** 避免父级设置了white-space:nowrap，导致item没有换行 */
.root {
    white-space: normal;
}

.body{
    margin: 0 calc(var(--grid-view-item-space) / (-2));
}

.root .item {
    padding: calc(var(--grid-view-item-space) / 2);
}

.pagination {
    text-align: right;
    margin: 0;
}
.foot {
    margin: 0 calc(var(--grid-view-item-space) / (-2));
    padding: var(--grid-view-foot-padding);
}
</style>
