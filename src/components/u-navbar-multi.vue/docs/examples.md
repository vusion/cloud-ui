### 下拉菜单与选择

``` html
<u-navbar-multi>
    <template #left>
        <u-multi-layout-item align-items="center">
            <u-image fit="cover" src="https://static-vusion.163yun.com/assets/lcap-logo-light.svg"
                    style="width: 28px; height: 28px; margin: 16px 14px; --custom-start: auto; vertical-align: middle;"></u-image>
            <u-text text="应用名称" size="large" style="color: white; --custom-start: auto; vertical-align: middle;"></u-text>
        </u-multi-layout-item>
    </template>
    <u-navbar-item-multi>Item 1</u-navbar-item-multi>
    <u-navbar-item-multi>Item 2</u-navbar-item-multi>
    <template #right>
        <u-multi-layout-item align-items="center" justify-content="center">
            <u-dropdown style="margin-right: 10px;" v-if="userInfo">
                <template #title>
                    <u-linear-layout gap="small">
                        <u-image fit="cover" src="https://static-vusion.163yun.com/assets/avatar-default.svg" style="width: 36px; height: 36px; vertical-align: middle;"></u-image>
                        <span style="display: inline-block; vertical-align: top; margin-left: 10px; margin-right: 10px; color: white;">
                            <u-text :text="userInfo.UserName"></u-text>
                        </span>
                    </u-linear-layout>
                </template>
                <template #default>
                        <u-dropdown-item @click="logout">安全退出</u-dropdown-item>
                </template>
            </u-dropdown>
            <template v-else>
                <u-link text="登录" destination="login" :decoration="false"></u-link>
            </template>
        </u-multi-layout-item>
    </template>
</u-navbar-multi>
```