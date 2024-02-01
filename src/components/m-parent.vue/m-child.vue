<template>
<div :class="$style.root">
    <slot></slot>
</div>
</template>

<script>
import MEmitter from '../m-emitter.vue';

export default {
    name: 'm-child',
    parentName: 'm-parent',
    groupName: 'm-group',
    mixins: [MEmitter],
    data() {
        return { parentVM: undefined, groupVM: undefined, isCreated: false };
    },
    created() {
        this.isCreated = true;
        !this.parentVM
            && this.$contact(this.$options.parentName, (parentVM) => {
                this.parentVM = parentVM;

                if(this.$options.parentName === 'u-carousel') {
                    parentVM.itemVMs.push(this);

                    // 动态子节点在前，静态子节点灾后
                    parentVM.itemVMs.sort((a, b) => {
                        if(a.$attrs.dataSource) {
                            if(b.$attrs.dataSource)
                                return a.$attrs.index - b.$attrs.index;
                            else
                                return -1;
                        } else {
                            if(b.$attrs.dataSource)
                                return 1;
                            else {
                                const indexA = parentVM.$slots.default ? parentVM.$slots.default.indexOf(a.$vnode) : -1;
                                const indexB = parentVM.$slots.default ? parentVM.$slots.default.indexOf(b.$vnode) : -1;
                                return indexA - indexB;
                            }
                        }
                    });

                    return;
                }

                if (!parentVM.$slots.default || !parentVM.$slots.default.length) {
                    parentVM.itemVMs.push(this);
                    return;
                }

                const defaultSlots = parentVM.$slots.default;
                const currentSlotIndex = defaultSlots.indexOf(this.$vnode);
                if (currentSlotIndex === -1) {
                    parentVM.itemVMs.push(this);
                    return;
                }

                // 根据 slot.default 位置，进行插入
                const index = parentVM.itemVMs.findIndex((itemVM) => {
                    const slotIndex = defaultSlots.indexOf(itemVM.$vnode);
                    return slotIndex > currentSlotIndex;
                });

                if (index !== -1) {
                    parentVM.itemVMs.splice(index, 0, this);
                } else {
                    parentVM.itemVMs.push(this);
                }
            });
        !this.groupVM
            && this.$contact(this.$options.groupName, (groupVM) => {
                this.groupVM = groupVM;
                groupVM.itemVMs.push(this);
            });
    },
    destroyed() {
        this.isCreated = false;
        this.$contact(this.$options.parentName, (parentVM) => {
            parentVM.itemVMs.splice(parentVM.itemVMs.indexOf(this), 1);
            this.parentVM = undefined;
        });
        this.$contact(this.$options.groupName, (groupVM) => {
            groupVM.itemVMs.splice(groupVM.itemVMs.indexOf(this), 1);
            this.groupVM = undefined;
        });
    },
};
</script>

<style module>
.root {
    display: inline-block;
    padding: 4px 12px;
}
</style>
