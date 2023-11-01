<template>
  <!-- $env.VUE_APP_DESIGNER -->
  <u-text :text="text"></u-text>
</template>

<script>
import UText from './index.vue'

  export default {
    name: 'u-preview',
    props: {
      text: String,
    },
    components: {
      UText
    }
  }
</script>

<style module>

</style>
