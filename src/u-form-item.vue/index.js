import FormItem from 'proto-ui.vusion/src/u-form-item.vue';

export default {
    name: 'u-form-item',
    mixins: [FormItem],
    props: {
        description: String,
    },
    computed: {
        distance() {
            return this.parentVM && this.parentVM.distance;
        },
    },
};
