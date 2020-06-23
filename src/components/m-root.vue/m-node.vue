<template>
<div :class="$style.root">
    <div :class="$style.text">{{ text }}</div>
    <div :class="$style.sub">
        <slot></slot>
    </div>
</div>
</template>

<script>
import MEmitter from '../m-emitter.vue';

export default {
    name: 'm-node',
    rootName: 'm-root',
    mixins: [MEmitter],
    props: { text: String },
    data() {
        return { nodeVMs: [], rootVM: undefined, parentVM: undefined };
    },
    created() {
        !this.parentVM &&
            this.$contact(this.$options.name, (parentVM) => {
                this.parentVM = parentVM;
                this.rootVM = parentVM.rootVM;
                parentVM.nodeVMs.push(this);
            }); // 顺序不能换
        !this.parentVM &&
            this.$contact(this.$options.rootName, (rootVM) => {
                this.rootVM = rootVM;
                rootVM.nodeVMs.push(this);
            });
    },
    destroyed() {
        this.$contact(this.$options.rootName, (rootVM) => {
            const index = rootVM.nodeVMs.indexOf(this);
            ~index && rootVM.nodeVMs.splice(index, 1);
            this.rootVM = undefined;
        });
        this.$contact(this.$options.name, (parentVM) => {
            const index = parentVM.nodeVMs.indexOf(this);
            ~index && parentVM.nodeVMs.splice(index, 1);
            this.rootVM = undefined;
            this.parentVM = undefined;
        });
    },
};
</script>

<style module>
.root {
    margin-left: 20px;
}

.text {
    position: relative;
    padding: 4px 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
