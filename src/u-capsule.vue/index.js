import ListViewItem from 'proto-ui.vusion/src/u-list-view-item.vue';

export default {
    name: 'u-capsule',
    parentName: 'u-capsules',
    mixins: [ListViewItem],
    props: {
        label: String,
    },
};
