<script>
import { MSinglexItem } from '../m-singlex.vue';

export default {
    name: 'u-navbar-item',
    parentName: 'u-navbar',
    extends: MSinglexItem,
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
    color: var(--navbar-item-color);
}

.root:not(:last-child) {
    margin-right: var(--navbar-item-space);
}

.root:hover {
    color: var(--navbar-item-color-hover);
}

.root[readonly] {
    cursor: default;
}

.root[selected] {
    color: var(--navbar-item-color-selected);
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    color: var(--navbar-item-color-disabled);
}

.root::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 3px;
    width: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: currentColor;
}

.root:hover::after {
    transition: width var(--navbar-item-line-transition-duration);
    width: 100%;
}

.root[selected]::after {
    width: 100%;
}

.root[disabled]::after {
    display: none;
}
</style>
