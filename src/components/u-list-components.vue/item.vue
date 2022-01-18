<template>
  <div class="u-for-com-item">
    <slot :item="item"></slot>
  </div>
</template>

<script>
export default {
    name: 'u-list-components-item',
    components: {
    },
    props: {
        item: {
            type: [Object, String, Number],
        },
    },
    data() {
        return {
        };
    },
    computed: {
    },
    watch: {
    },
    methods: {

    },
};
</script>

<style>
.u-for-com-item {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
