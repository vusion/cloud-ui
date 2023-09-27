### 基本用法

```html
<u-dropdown>
    <template #title="scope">
        <u-text text="下拉菜单"></u-text>
    </template>
<u-dropdown-group><template #title><u-text
            text="菜单分组"></u-text></template><u-dropdown-item><u-text
            text="菜单项"></u-text></u-dropdown-item></u-dropdown-group>
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