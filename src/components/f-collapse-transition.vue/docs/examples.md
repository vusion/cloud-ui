### 基本用法

``` vue
<template>
<div :class="$style.root">
    <u-button @click="toggle">展开/收起</u-button>
    <f-collapse-transition>
        <u-menu v-show="expanded" :class="$style.menu" value="3" :router="false" style="width: 128px;">
            <u-menu-item to="/guides/">指南</u-menu-item>
            <u-menu-item to="/api/">API</u-menu-item>
            <u-menu-item to="/components/">原型组件</u-menu-item>
            <u-menu-item href="https://github.com/vusion">GitHub</u-menu-item>
        </u-menu>
    </f-collapse-transition>
</div>
</template>
<script>
export default {
    data() {
        return { expanded: false };
    },
    methods: {
        toggle() {
            this.expanded = !this.expanded;
        },
    },
};
</script>
<style module>
.root {}

.menu {
    transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;
}
</style>
```
