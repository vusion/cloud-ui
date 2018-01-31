import { clickOutside } from '../base/directives';
export default {
    name: 'u-linklist',
    props: {
        maxNum: { type: Number, default: 3 },
        dropdownTitle: { type: String, default: '更多' },
        closeDropdown: { type: Boolean, default: true }, // 是否点击其他u-linlist-item或者document 关闭dropDown
        direction: { type: String, default: 'bottom-left' }, // 下拉框对齐方式
        showDropdown: { type: Boolean, default: false }, // 是否展开下拉框
    },
    data() {
        return {
            itemVMs: [],
            currentShowDropdown: this.showDropdown, // 是否显示下拉框
        };
    },
    watch: {
        direction(newValue) {
            this.$refs.dropdown.currentDirection = newValue;
        },
    },
    render(createElement) {
        const items = this.$slots.default;
        if (items.length <= this.maxNum) {
            return createElement('div', {
                on: {
                    click: this.onClick,
                } },
            items,
            );
        } else {
            return createElement(
                'div', {
                    on: {
                        click: this.onClick,
                    },
                    directives: [
                        {
                            name: 'click-outside',
                            value: this.onClick,
                            expression: '1 + 1',
                        },
                    ],
                }, [items.slice(0, this.maxNum - 1), createElement('u-linklist-dropdown', {
                    props: {
                        title: this.dropdownTitle,
                        showDropdown: this.currentShowDropdown,
                        direction: this.direction,
                    },
                    ref: 'dropdown',
                }, items.slice(this.maxNum - 1))]
            );
        }
    },
    methods: {
        onClick(e) { // 点击其他u-linlist-item或者document 关闭dropDown
            if (this.closeDropdown && this.$refs.dropdown)
                this.$refs.dropdown.show = false;
        },
    },
    directives: {
        'click-outside': clickOutside,
    },
};
