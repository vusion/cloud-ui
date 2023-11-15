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
        <u-dropdown-group title="下拉组">
            <u-dropdown-item text="item1"></u-dropdown-item>
            <u-dropdown-item text="item1"></u-dropdown-item>
            <u-dropdown-item text="item1"></u-dropdown-item>
            <u-dropdown-item disabled text="item1"></u-dropdown-item>
        </u-dropdown-group>
        <u-dropdown-group title="下拉组2" trigger="click">
            <u-dropdown-item text="item1"></u-dropdown-item>
            <u-dropdown-item text="item1"></u-dropdown-item>
            <u-dropdown-item text="item1"></u-dropdown-item>
            <u-dropdown-item disabled text="item1"></u-dropdown-item>
        </u-dropdown-group>
        <u-dropdown-group title="下拉组3" trigger="right-click">
            <u-dropdown-item text="item1"></u-dropdown-item>
            <u-dropdown-item text="item1"></u-dropdown-item>
            <u-dropdown-item text="item1"></u-dropdown-item>
            <u-dropdown-item disabled text="item1"></u-dropdown-item>
        </u-dropdown-group>
        <u-dropdown-group title="下拉组4" trigger="double-click">
            <u-dropdown-item text="item1"></u-dropdown-item>
            <u-dropdown-item text="item1"></u-dropdown-item>
            <u-dropdown-item text="item1"></u-dropdown-item>
            <u-dropdown-item disabled text="item1"></u-dropdown-item>
        </u-dropdown-group>
    </u-dropdown>
    <u-dropdown trigger="click">
        <template #title="scope">
            <u-text text="下拉菜单click展开"></u-text>
        </template>
        <u-dropdown-item text="item"></u-dropdown-item>
        <u-dropdown-item text="item"></u-dropdown-item>
        <u-dropdown-item text="item"></u-dropdown-item>
        <u-dropdown-item disabled text="item"></u-dropdown-item>
        <u-dropdown-group title="下拉组">
            <u-dropdown-item text="item1"></u-dropdown-item>
            <u-dropdown-item text="item1"></u-dropdown-item>
            <u-dropdown-item text="item1"></u-dropdown-item>
            <u-dropdown-item disabled text="item1"></u-dropdown-item>
        </u-dropdown-group>
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