### 基本用法

```html
<u-dropdown>
    <template #title="scope">
        <u-text text="下拉菜单"></u-text>
    </template>
    <u-dropdown-item text="item"></u-dropdown-item>
    <u-dropdown-item text="item"></u-dropdown-item>
    <u-dropdown-item text="item"></u-dropdown-item>
    <u-dropdown-item disabled text="item"></u-dropdown-item>
</u-dropdown>
<u-dropdown type="primary">
    <template #title="scope">
        <u-text text="下拉按钮"></u-text>
    </template>
    <u-dropdown-item text="item"></u-dropdown-item>
    <u-dropdown-item text="item"></u-dropdown-item>
    <u-dropdown-item text="item"></u-dropdown-item>
    <u-dropdown-item disabled text="item"></u-dropdown-item>
</u-dropdown>
<u-dropdown type="primary_secondary">
    <template #title="scope">
        <u-text text="下拉按钮"></u-text>
    </template>
    <u-dropdown-item text="item"></u-dropdown-item>
    <u-dropdown-item text="item"></u-dropdown-item>
    <u-dropdown-item text="item"></u-dropdown-item>
    <u-dropdown-item disabled text="item"></u-dropdown-item>
</u-dropdown>
<u-dropdown type="normal">
    <template #title="scope">
        <u-text text="下拉按钮"></u-text>
    </template>
    <u-dropdown-item text="item"></u-dropdown-item>
    <u-dropdown-item text="item"></u-dropdown-item>
    <u-dropdown-item text="item"></u-dropdown-item>
    <u-dropdown-item disabled text="item"></u-dropdown-item>
</u-dropdown>
<u-dropdown type="more">
    <template #title="scope">
        <u-text text="下拉按钮"></u-text>
    </template>
    <u-dropdown-item text="item"></u-dropdown-item>
    <u-dropdown-item text="item"></u-dropdown-item>
    <u-dropdown-item text="item"></u-dropdown-item>
    <u-dropdown-item disabled text="item"></u-dropdown-item>
</u-dropdown>
```

## 禁用状态

```html
<u-dropdown disabled>
    <template #title="scope">
        <u-text text="下拉菜单"></u-text>
    </template>
</u-dropdown>
<u-dropdown disabled type="primary">
    <template #title="scope">
        <u-text text="下拉按钮"></u-text>
    </template>
</u-dropdown>
<u-dropdown disabled type="primary_secondary">
    <template #title="scope">
        <u-text text="下拉按钮"></u-text>
    </template>
</u-dropdown>
<u-dropdown disabled type="normal">
    <template #title="scope">
        <u-text text="下拉按钮"></u-text>
    </template>
</u-dropdown>
```

## 选项带图标
```html
<u-dropdown>
    <template #title="scope">
        <u-text text="下拉菜单"></u-text>
    </template>
    <u-dropdown-item icon="task" text="item"></u-dropdown-item>
    <u-dropdown-item icon="task" text="item"></u-dropdown-item>
    <u-dropdown-item icon="task" text="item"></u-dropdown-item>
    <u-dropdown-item icon="task" disabled text="item"></u-dropdown-item>
</u-dropdown>
```

## append-to body
```html
<u-dropdown append-to="body">
    <template #title="scope">
        <u-text text="下拉菜单"></u-text>
    </template>
    <u-dropdown-item icon="task" text="item"></u-dropdown-item>
    <u-dropdown-item icon="task" text="item"></u-dropdown-item>
    <u-dropdown-item icon="task" text="item"></u-dropdown-item>
    <u-dropdown-item icon="task" disabled text="item"></u-dropdown-item>
</u-dropdown>
```

### 触发方式

使用`trigger`属性设置触发方式。

``` html
<u-linear-layout>
    <u-dropdown trigger="hover">
        <template #title="scope">
            <u-text text="下拉菜单hover展开"></u-text>
        </template>
        <u-dropdown-item text="item"></u-dropdown-item>
        <u-dropdown-item text="item"></u-dropdown-item>
        <u-dropdown-item text="item"></u-dropdown-item>
        <u-dropdown-item disabled text="item"></u-dropdown-item>
    </u-dropdown>
    <u-dropdown trigger="click">
        <template #title="scope">
            <u-text text="下拉菜单click展开"></u-text>
        </template>
        <u-dropdown-item text="item"></u-dropdown-item>
        <u-dropdown-item text="item"></u-dropdown-item>
        <u-dropdown-item text="item"></u-dropdown-item>
        <u-dropdown-item disabled text="item"></u-dropdown-item>
    </u-dropdown>
    <u-dropdown trigger="right-click">
        <template #title="scope">
            <u-text text="下拉菜单right-click展开"></u-text>
        </template>
        <u-dropdown-item text="item"></u-dropdown-item>
        <u-dropdown-item text="item"></u-dropdown-item>
        <u-dropdown-item text="item"></u-dropdown-item>
        <u-dropdown-item disabled text="item"></u-dropdown-item>
    </u-dropdown>
    <u-dropdown trigger="double-click">
        <template #title="scope">
            <u-text text="下拉菜单double-click展开"></u-text>
        </template>
        <u-dropdown-item text="item"></u-dropdown-item>
        <u-dropdown-item text="item"></u-dropdown-item>
        <u-dropdown-item text="item"></u-dropdown-item>
        <u-dropdown-item disabled text="item"></u-dropdown-item>
    </u-dropdown>
</u-linear-layout>
```

#### 手动触发

也可以手动触发工具提示的弹出/关闭：

``` vue
<template>
<u-linear-layout>
    <u-button @click="opened = !opened">
        {{ opened ? '隐藏' : '弹出' }}
    </u-button>
    <u-dropdown trigger="manual" :opened="opened">
        <template #title="scope">
            <u-text text="下拉菜单"></u-text>
        </template>
        <u-dropdown-item text="item"></u-dropdown-item>
        <u-dropdown-item text="item"></u-dropdown-item>
        <u-dropdown-item text="item"></u-dropdown-item>
        <u-dropdown-item disabled text="item"></u-dropdown-item>
    </u-dropdown>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            opened: false,
        };
    },
};
</script>
```