export default {
  computed: {
    isPreview () {
      return this.preview || (this.$parent && this.$parent.preview) || (this.$parent && this.$parent.$parent && this.$parent.$parent.preview) || (this.$parent && this.$parent.previewItem) || (this.$parent && this.$parent.$parent && this.$parent.$parent.previewItem);
    },
  }
}
