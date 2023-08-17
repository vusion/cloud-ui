import Single from './index.vue';
import Range from './range.vue';

export default {
    name: 'u-date-picker-wrap',
    inheritAttrs: false,
    components: {
        Single,
        Range,
    },
    props: {
        range: {
            type: Boolean,
            default: false,
        },
    },
    render(createElement) {
        const component = this.range ? Range : Single;
        return createElement(component, {
            props: this.$attrs,
            attrs: {
                'vusion-node-tag': this.$attrs['vusion-node-tag'],
                'vusion-node-path': this.$attrs['vusion-node-path'],
            },
            on: this.$listeners,
            slots: this.$slots,
            scopedSlots: this.$scopedSlots,
        });
    },
};

export const formatterOptions = {
    date: ['YYYY年M月D日', 'YYYY-MM-DD', 'M/D/YYYY', 'D/M/YYYY'],
    month: ['YYYY年M月', 'YYYY-MM', 'M/YYYY'],
    quarter: ['YYYY年第Q季度', 'YYYY年QQ', 'YYYY-QQ'],
    year: ['YYYY年', 'YYYY'],
    week: ['GGGG-W周', 'GGGG年第W周', 'GGGG-WWWW'],
};
