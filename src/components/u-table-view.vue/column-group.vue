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
    },
    data() {
        return {
            parentVM: undefined,
            startIndex: undefined,
            endIndex: undefined,
            colSpan: 1,
            isGroup: true,
            // 记录动态列的 uid 和对应的长度
            dynamicColumnLengthMap: {},
            // 在此之前的分组偏移量，会影响 columnVMs 的 index
            prevGroupOffset: 0,
        };
    },
    computed: {
        dynamicColumnLength() {
            let count = 0
            Object.keys(this.dynamicColumnLengthMap).forEach(key => {
                count += this.dynamicColumnLengthMap[key]
            })
            return count
        }
    },
    watch: {
        dynamicColumnLength(value) {
            this.colSpan = this.endIndex - this.startIndex + 1 + value
        }
    },
    updated() {
        this.deleteColumnVMs(this.parentVM, this.startIndex, this.colSpan)
        // this.$nextTick(() => {
            this.updateColumnVMs(this.parentVM)
        // })
    },
    mounted() {
        !this.parentVM
            && this.$contact(this.$options.parentName, (parentVM) => {
                this.parentVM = parentVM;
                this.updateColumnVMs(parentVM);
            });
    },
    destroyed() {
        this.$contact(this.$options.parentName, (parentVM) => {
            this.parentVM = undefined;
            this.deleteColumnVMs(parentVM, this.startIndex, this.colSpan)
        });
    },
    methods: {
        updateColumnVMs(parentVM) {
            let slotVms = parentVM.$slots.default || [];
            slotVms = slotVms.filter((vm) => !!vm.tag && !(vm.componentOptions.tag === 'u-table-view-column-group'
                && vm.child && !vm.child.$slots.default));
            const index = slotVms.indexOf(this.$vnode);
            // 如果没有子节点，这个可能是空的
            if (!this.$slots.default) return;
            const slots = this.$slots.default.filter((vm) => !!vm.tag);
            if (!slots.length) return;
            // 在 children 里找到 slots 对应的 vm
            const children = this.$children.filter((vm) => {
                // 不是 default slot 并且不在 columnVMs 里
               return ~slots.indexOf(vm.$vnode) && !~parentVM.columnVMs.indexOf(vm)
            });
            // 标记为在分组下
            children.forEach(child => child.isUnderGroup = true)
            if (~index) {
                // 这里需要找出当前 index 之前有几个分组，然后加上偏移量，否则会出现错位
                Object.keys(parentVM.columnGroupVMs).forEach(key => {
                    if (key < index) {
                        const currentOffset = parentVM.columnGroupVMs[key].colSpan - 1 >= 0
                            ? parentVM.columnGroupVMs[key].colSpan - 1 : 0
                        this.prevGroupOffset += currentOffset
                    }
                })
                for (let i = 0; i < children.length; i++) {
                    parentVM.columnVMs.splice(index + i + this.prevGroupOffset, 0, children[i]);
                }
                this.startIndex = index + this.prevGroupOffset
                this.endIndex = this.startIndex + slots.length - 1;
            } else {
                this.startIndex = parentVM.columnVMs.length;
                this.endIndex = parentVM.columnVMs.length + children.length - 1;
                parentVM.columnVMs.concat(children);
            }
            // 计算出列合并的值
            this.colSpan = this.endIndex - this.startIndex + 1 + this.dynamicColumnLength
            this.$set(parentVM.columnGroupVMs, this.startIndex, this)
        },
        deleteColumnVMs(parentVM, index, childrenLength) {
            parentVM.columnVMs.splice(index, childrenLength);
            this.$delete(parentVM.columnGroupVMs, this.startIndex)
            this.prevGroupOffset = 0
        }
    }
};
</script>
