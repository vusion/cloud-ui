import Single from './index.vue'
import Range from './range.vue'

export default {
  name: 'u-time-picker-wrap',
  components: {
    Single,
    Range
  },
  props: {
    range: {
      type: Boolean,
      default: false
    }
  },
  render(createElement) {
    const component = this.range ? Range : Single
    return createElement(component, {
      attrs: this.$attrs,
      on: this.$listeners,
    })
  }
}
