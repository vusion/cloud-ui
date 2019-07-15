// import i18n from '@/utils/i18n';
import { MField } from 'proto-ui.vusion';

export const USearchInputList = {
    name: 'u-search-input-list',
    mixins: [MField],
    props: {
        offset: {
            type: Number,
            default: 0,
        },
        list: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            selected: -1,
        };
    },
    computed: {
        haveGroups() {
            return this.list.some((item) => item.children instanceof Array);
        },
        selectList() {
            if (this.haveGroups) {
                let result = [];
                this.list.forEach((item, index) => {
                    result = [...result, ...item.children.map((child) => Object.assign({}, child))];
                });
                return result;
            } else {
                return this.list;
            }
        },
        groups() {
            if (!this.haveGroups)
                return [];
            let index = 0;
            return this.list.map((item) => Object.assign({}, item, {
                children: item.children.map((child) => {
                    const result = Object.assign({}, child, { $$index: index });
                    index++;
                    return result;
                }),
            }));
        },
    },
    methods: {
        select(index) {
            const max = this.selectList.length;
            if (index !== undefined)
                this.selected = index;
            const selected = this.selected;
            if (selected > max - 1 || selected < 0)
                return;
            this.$emit('select', this.selectList[selected]);
        },
        next() {
            const { selectList, selected } = this;
            const max = selectList.length;
            if (selected >= max - 1)
                this.selected = -1;
            else
                this.selected = selected + 1;
        },
        pre() {
            const { selectList, selected } = this;
            const max = selectList.length;
            if (selected <= -1)
                this.selected = max - 1;
            else
                this.selected = selected - 1;
        },
    },
};
export default USearchInputList;
