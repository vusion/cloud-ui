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
        ifwidth: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
        };
    },
    computed: {
      comStyle() {
        if (this.colnum && this.ifwidth) {
          const num = this.colnum;
          const width = 100 / num;
          return {
            width: width + '%'
          }
        }
        return {};
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