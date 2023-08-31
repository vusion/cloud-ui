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
            colSpan: 1,
            isGroup: true,
            // 记录动态列的 uid 和对应的长度
            dynamicColumnLengthMap: {},
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
        this.updateColumnVMs(this.parentVM)
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
            this.$delete(parentVM.columnGroupVMs, this.startIndex)
        });
    },
    methods: {
        updateColumnVMs(parentVM) {
            let slotVms = parentVM.$slots.default || [];
            slotVms = slotVms.filter((vm) => !!vm.tag);
            const index = slotVms.indexOf(this.$vnode);
            const slots = this.$slots.default
            if (!slots.length) return;
            // 在 children 里找到 slots 对应的 vm
            const children = this.$children.filter((vm) => {
                // 不是 default slot 并且不在 columnVMs 里
               return ~slots.indexOf(vm.$vnode) && !~parentVM.columnVMs.indexOf(vm)
            });
            if (!children.length) return
            // 标记为在分组下
            children.forEach(child => child.isUnderGroup = true)
            if (~index) {
                for (let i = 0; i < children.length; i++) {
                    parentVM.columnVMs.splice(index + i, 0, children[i]);
                }
                this.startIndex = index;
                this.endIndex = index + slots.length - 1;
            } else {
                this.startIndex = parentVM.columnVMs.length;
                this.endIndex = parentVM.columnVMs.length + children.length - 1;
                parentVM.columnVMs.concat(children);
            }
            // 计算出列合并的值
            this.colSpan = this.endIndex - this.startIndex + 1 + this.dynamicColumnLength
            this.$set(parentVM.columnGroupVMs, this.startIndex, this)

        }
    }
};
</script>
