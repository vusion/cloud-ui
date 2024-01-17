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

export default {
    name: 'u-table-view-column-group',
    parentName: 'u-table-view',
    mixins: [MEmitter],
    props: {
        title: String,
        fixed: { type: Boolean, default: false },
        thEllipsis: { type: Boolean, default: undefined }, // 表头是否缩略展示
    },
    data() {
        return {
            parentVM: undefined,
            isGroup: true,
        };
    },
    mounted() {
        this.$contact('u-table-view', (parentVM) => {
            this.parentVM = parentVM;
            parentVM.columnVMsMap[this._uid] = {
                vnode: this.$vnode,
                columnVM: this,
            };
            parentVM.columnGroupVMs[this._uid] = {
                groupVM: this,
            };
            this.$dispatch(
                ($parent) => $parent.$options.name && $parent.$options.name === 'u-table-view',
                'handle-columns',
            );
        });
    },
    destroyed() {
        this.$contact('u-table-view', (parentVM) => {
            parentVM.columnVMsMap[this._uid] = null;
            parentVM.columnGroupVMs[this._uid] = null;
            this.$dispatch(
                ($parent) => $parent.$options.name && $parent.$options.name === 'u-table-view',
                'handle-columns',
            );
        });
    },
};
</script>
