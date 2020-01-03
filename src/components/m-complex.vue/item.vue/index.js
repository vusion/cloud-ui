import { MSinglexItem } from '../../m-singlex.vue';
import { MMultiplexItem } from '../../m-multiplex.vue';
import { ellipsisTitle } from '../../../directives';

export const MComplexItem = {
    name: 'm-complex-item',
    parentName: 'm-complex',
    groupName: 'm-complex-group',
    mixins: [MSinglexItem, MMultiplexItem],
    directives: { ellipsisTitle },
    // props: {
    //     @inherit: value: null,
    //     @inherit: selected: { type: Boolean, default: false },
    //     @inherit: disabled: { type: Boolean, default: false },
    //     @inherit: item: Object,
    // },
    // data() {
    //     return {
    //         @inherit: currentSelected: this.selected,
    //         @inherit: parentVM: undefined,
    //     };
    // },
};

export default MComplexItem;
