export default {
    name: 'u-linklist-dropdown',
    props: {
        title: { type: String, default: '更多' },
        showDropdown: { type: Boolean, default: false },
        direction: { type: String, default: 'bottom-left' },
    },
    data() {
        return {
            show: this.showDropdown, // 是否显示下拉框
            currentDirection: this.direction,
        };
    },
    watch: {
        showDropdown(newValue) {
            this.show = newValue;
        },
        show(newValue) {
            this.$emit('update:show', newValue);
        },
    },
};
