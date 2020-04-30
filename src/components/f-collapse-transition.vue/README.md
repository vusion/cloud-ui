<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# FCollapseTransition 折叠过渡

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Slots](#slots)

如果要给某些节点添加展开/收起动画效果，但不知道节点的高度，这时动画光靠 CSS 的`transition`属性是实现不了的，需要用 JS 进行计算。

本组件对这种动画进行了封装，方便快速实现这种效果。需要完成以下几步工作：

- 给需要添加动画的节点外面包裹`<f-collapse-transition>`组件；
- 给需要添加动画的节点在 CSS 中添加针对`height`、`padding-top`和`padding-bottom`几个属性的`transition`动画；
- 使用`v-show`或`v-if`控制节点的显示/隐藏。

## 示例
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

## API
### Slots

#### (default)

需要添加动画的元素或组件

