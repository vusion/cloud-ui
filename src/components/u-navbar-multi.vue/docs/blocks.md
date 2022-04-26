### 导航栏

``` html
<u-navbar-multi>
    <template #left>
        <u-image fit="cover" src="https://static-vusion.163yun.com/assets/lcap-logo-light.svg"
                style="width: 28px; height: 28px; margin: 16px 14px; --custom-start: auto; vertical-align: middle;"></u-image>
        <u-text text="应用名称" size="large" style="color: white; --custom-start: auto; vertical-align: middle;"></u-text>
    </template>
    <u-navbar-item-multi text="Item 1"></u-navbar-item-multi>
    <u-navbar-item-multi text="Item 2"></u-navbar-item-multi>
    <template #right>
        <u-dropdown style="margin-right: 10px; color: inherit">
            <template #title>
                <u-linear-layout gap="small" v-if="$global.userInfo">
                    <u-image fit="cover" src="https://static-vusion.163yun.com/assets/avatar-default.svg" style="width: 36px; height: 36px; vertical-align: middle;"></u-image>
                    <span style="display: inline-block; vertical-align: top; margin-left: 10px; margin-right: 10px; color: white;">
                        <u-text :text="$global.userInfo.UserName"></u-text>
                    </span>
                </u-linear-layout>
            </template>
            <template #default>
                    <u-dropdown-item text="安全退出"></u-dropdown-item>
            </template>
        </u-dropdown>
    </template>
</u-navbar-multi>
```
