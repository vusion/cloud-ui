<script>
import { MSinglexItem } from '../m-singlex.vue';
import ULink from '../u-link.vue';

export default {
    name: 'u-navbar-item-multi',
    parentName: 'u-navbar-multi',
    extends: MSinglexItem,
    methods: {
        onClick(e) {
            if (this.disabled || this.parentVM.readonly || this.parentVM.disabled)
                return e.preventDefault();
            ULink.methods.onClick.call(this, e);
            if (this.parentVM.router) {
                let cancel = false;
                this.$emit('before-select', {
                    value: this.value,
                    item: this.item,
                    itemVM: this,
                    preventDefault: () => (cancel = true),
                }, this);
                if (cancel)
                    return;
                this.parentVM.select(this);
            }
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    position: relative;
    user-select: none;
    cursor: var(--cursor-pointer);
    text-align: center;
    font-size: var(--navbar-item-font-size);
    padding: var(--navbar-item-padding);
    height: var(--navbar-height);
    line-height: var(--navbar-height);
    background: var(--navbar-item-background);
    color: var(--navbar-item-color);
    transition: var(--transition-duration-base);
}

.root:not(:last-child) {
    margin-right: var(--navbar-item-space);
}

.root:hover {
    background: var(--navbar-item-background-hover);
    color: var(--navbar-item-color-hover);
}

.root[readonly] {
    cursor: default;
}

.root[selected] {
    background: var(--navbar-item-background-selected);
    color: var(--navbar-item-color-selected);
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    color: var(--navbar-item-color-disabled);
}
.root [class^="i-ico_lcp-iconv"] {
    margin-left: -8px;
    margin-right: 8px;
}
</style>
