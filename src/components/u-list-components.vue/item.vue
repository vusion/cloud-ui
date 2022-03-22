<template>
  <div class="u-for-com-item" :style="comStyle">
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
        colnum: {
            type: Number
        },
    },
    data() {
        return {
        };
    },
    computed: {
      comStyle() {
        if (this.colnum) {
          const num = this.colnum;
          const width = 100 / num;
          return {
            maxWidth: width + '%'
          }
        }
      }
    },
    watch: {
    },
    methods: {
    },
};
</script>
<style>
.u-for-com-item {
}
</style>