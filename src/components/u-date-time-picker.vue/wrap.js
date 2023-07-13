import Single from './index.vue'
import Range from './range.vue'

export default {
  name: 'u-date-time-picker-wrap',
  inheritAttrs: false,
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
      props: this.$attrs,
      on: this.$listeners,
      slots: this.$slots,
      scopedSlots: this.$scopedSlots,
    })
  }
}
