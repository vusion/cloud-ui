### 触发方式

使用`trigger`属性设置触发方式。

``` html
<u-linear-layout direction="vertical">
<u-navbar-multi trigger="hover">
    <template #left>
        <u-multi-layout-item align-items="center" style="width: 200px;">
            <u-image fit="cover" src="https://static-vusion.163yun.com/assets/lcap-logo-light.svg"
                    style="width: 28px; height: 28px; margin: 16px 14px; --custom-start: auto; vertical-align: middle;"></u-image>
            <u-text text="应用名称" size="large" style="color: white; --custom-start: auto; vertical-align: middle;"></u-text>
        </u-multi-layout-item>
    </template>
    <u-multi-layout-item align-items="center">
        <u-navbar-item-multi text="Item 1"></u-navbar-item-multi>
        <u-navbar-item-multi text="Item 2"></u-navbar-item-multi>
        <u-navbar-group-multi>
            <template #title>
                <u-text :text="`导航栏分组`"></u-text>
            </template>
            <u-navbar-item-multi>
                <u-text :ref="`text_69`" :text="`导航栏项`"></u-text>
            </u-navbar-item-multi>
            <u-navbar-group-multi>
                <template #title>
                    <u-text :ref="`text_70`" :text="`导航栏分组`"></u-text>
                </template>
                <u-navbar-item-multi>
                    <u-text :text="`导航栏项`"></u-text>
                </u-navbar-item-multi>
            </u-navbar-group-multi>
        </u-navbar-group-multi>
        
    </u-multi-layout-item>
    <template #right>
        <u-multi-layout-item align-items="center" justify="end">
            <u-dropdown style="margin-right: 10px; color: inherit">
                <template #title>
                    <u-linear-layout gap="small">
                        <u-image fit="cover" src="https://static-vusion.163yun.com/assets/avatar-default.svg" style="width: 36px; height: 36px; vertical-align: middle;"></u-image>
                        <span style="display: inline-block; vertical-align: top; margin-left: 10px; margin-right: 10px; color: white;">
                            <u-text text="张三"></u-text>
                        </span>
                    </u-linear-layout>
                </template>
                <template #default>
                        <u-dropdown-item text="安全退出"></u-dropdown-item>
                </template>
            </u-dropdown>
        </u-multi-layout-item>
    </template>
</u-navbar-multi>

<!-- <u-navbar-multi>
    <template #left>
        <u-multi-layout-item align-items="center" style="width: 200px;">
            <u-image fit="cover" src="https://static-vusion.163yun.com/assets/lcap-logo-light.svg"
                    style="width: 28px; height: 28px; margin: 16px 14px; --custom-start: auto; vertical-align: middle;"></u-image>
            <u-text text="应用名称" size="large" style="color: white; --custom-start: auto; vertical-align: middle;"></u-text>
        </u-multi-layout-item>
    </template>
    <u-multi-layout-item align-items="center">
        <u-navbar-item-multi text="Item 1"></u-navbar-item-multi>
        <u-navbar-item-multi text="Item 2"></u-navbar-item-multi>
        <u-navbar-group-multi>
            <template #title>
                <u-text :text="`导航栏分组`"></u-text>
            </template>
            <u-navbar-item-multi>
                <u-text :ref="`text_69`" :text="`导航栏项`"></u-text>
            </u-navbar-item-multi>
            <u-navbar-group-multi>
                <template #title>
                    <u-text :ref="`text_70`" :text="`导航栏分组`"></u-text>
                </template>
                <u-navbar-item-multi>
                    <u-text :text="`导航栏项`"></u-text>
                </u-navbar-item-multi>
            </u-navbar-group-multi>
        </u-navbar-group-multi>
        
    </u-multi-layout-item>
    <template #right>
        <u-multi-layout-item align-items="center" justify="end">
            <u-dropdown style="margin-right: 10px; color: inherit">
                <template #title>
                    <u-linear-layout gap="small">
                        <u-image fit="cover" src="https://static-vusion.163yun.com/assets/avatar-default.svg" style="width: 36px; height: 36px; vertical-align: middle;"></u-image>
                        <span style="display: inline-block; vertical-align: top; margin-left: 10px; margin-right: 10px; color: white;">
                            <u-text text="张三"></u-text>
                        </span>
                    </u-linear-layout>
                </template>
                <template #default>
                        <u-dropdown-item text="安全退出"></u-dropdown-item>
                </template>
            </u-dropdown>
        </u-multi-layout-item>
    </template>
</u-navbar-multi> -->
</u-linear-layout>
```
