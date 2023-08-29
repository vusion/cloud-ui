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
            startIndex: undefined,
            endIndex: undefined,
        };
    },
    mounted() {
        !this.parentVM
            && this.$contact(this.$options.parentName, (parentVM) => {
                this.parentVM = parentVM;
                let slotVms = parentVM.$slots.default || [];
                slotVms = slotVms.filter((vm) => !!vm.tag);
                const index = slotVms.indexOf(this.$vnode);
                const slots = this.$slots.default
                if (!slots.length) return;
                // 在 children 里找到 slots 对应的 vm
                const children = this.$children.filter((vm) => ~(slots.indexOf(vm.$vnode)));
                if (~index) {
                    for (let i = 0; i < slots.length; i++) {
                        parentVM.columnVMs.splice(index + i, 0, children[i]);
                    }
                    this.startIndex = index;
                    this.endIndex = index + slots.length - 1;
                } else {
                    this.startIndex = parentVM.columnVMs.length;
                    this.endIndex = parentVM.columnVMs.length + children.length - 1;
                    parentVM.columnVMs.concat(children);
                }
                this.parentVM.columnGroupVMs.push(this);
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
