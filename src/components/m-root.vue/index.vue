<template>
<div :class="$style.root">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'm-root',
    nodeName: 'm-node',
    data() {
        return { nodeVMs: [] };
    },
    methods: {
        walk(func) {
            let queue = [];
            queue = queue.concat(this.nodeVMs);
            let nodeVM;
            while ((nodeVM = queue.shift())) {
                queue = queue.concat(nodeVM.nodeVMs);
                const result = func(nodeVM);
                if (result !== undefined) return result;
            }
        },
        find(func) {
            return this.walk((nodeVM) => {
                if (func(nodeVM)) return nodeVM;
            });
        },
    },
};
</script>

<style module>
.root {}
</style>
