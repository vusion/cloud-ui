<template>
    <u-tree-select-new :data-source="list" text-field="text1" value-field="text1">
    </u-tree-select-new>
</template>

<script>

export default {
    data() {
        return {
            list: [
                { text1: '节点 1', children: [
                    { text1: '节点 1.1' },
                    { text1: '节点 1.2', children: [
                        { text1: '节点 1.2.1' },
                        { text1: '节点 1.2.2' },
                    ] },
                    { text1: '节点 1.3' },
                    { text1: '节点 1.4' },
                ] },
                { text1: '节点 2' },
                { text1: '节点 3', children: [
                    { text1: '节点 3.1' },
                    { text1: '节点 3.2' },
                ] },
            ],
        };
    },
};
</script>

