<template>
<div>
    <template v-for="(item, index) in data">
        <slot :item="item" :index="index"></slot>
    </template>
</div>
</template>

<script>
export default {
    name: 'u-for',
    props: {
        data: Array,
    },
};
</script>

<style module>

</style>
