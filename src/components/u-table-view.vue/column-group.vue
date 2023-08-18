<template>
<div v-show="false">
    <div>
        <slot name="title"></slot>
        <slot></slot>
    </div>
</div>
</template>
<script>
import MEmitter from '../m-emitter.vue';
import { Formatter, parseFormatters, placeholderFormatter } from '../../utils/Formatters';

export default {
    name: 'u-table-view-column-group',
    parentName: 'u-table-view',
    mixins: [MEmitter],
    props: {
        title: String,
    },
    data() {
        return {
            parentVM: undefined,
        };
    },
    created() {
        !this.parentVM
            && this.$contact(this.$options.parentName, (parentVM) => {
                this.parentVM = parentVM;
                let slotVms = parentVM.$slots.default || [];
                slotVms = slotVms.filter((vm) => !!vm.tag);
                const index = slotVms.indexOf(this.$vnode);
                const children = this.$slots.default
                if (~index) {
                    children.forEach(child => {
                        parentVM.columnVMs.splice(index, 0, child);
                    })
                } else {
                    parentVM.columnVMs.concat(children);
                }
            });
    },
    destroyed() {
        // this.$contact(this.$options.parentName, (parentVM) => {
        //     parentVM.columnVMs.splice(parentVM.columnVMs.indexOf(this), 1);
        //     this.parentVM = undefined;
        // });
    },
};
</script>
