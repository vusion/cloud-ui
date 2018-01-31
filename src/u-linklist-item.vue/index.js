import { RouterItem } from 'proto-ui.vusion';
import { Emitter } from 'proto-ui.vusion';

export default {
    name: 'u-linklist-item',
    mixins: [RouterItem, Emitter],
    props: {
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            type: '', // 类型：dropdown为下拉列表中元素
        };
    },
    created() {
        if (this.$parent.$vnode.tag.includes('u-linklist-dropdown'))
            this.type = 'dropdownItem';
    },
    methods: {
        onClick() {
            if (this.disabled)
                return;
            this.$emit('click', {
                sender: this,
            });
            this.navigate();
        },
        onMouseover() {
            if (this.disabled)
                return;
            this.$emit('mouseover');
        },
    },
};
