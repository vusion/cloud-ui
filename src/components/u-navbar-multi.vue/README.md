<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UNavbarMulti 导航栏

- [示例](#示例)
    - [导航栏](#导航栏)
- [UNavbarMulti API](#unavbarmulti-api)
    - [Props/Attrs](#propsattrs)
- [UNavbarItemMulti API](#unavbaritemmulti-api)
    - [Props/Attrs](#propsattrs-2)
- [UNavbarDividerMulti API](#unavbardividermulti-api)

- [UNavbarDropdownMulti API](#unavbardropdownmulti-api)
    - [Props/Attrs](#propsattrs-3)
- [UNavbarMenuMulti API](#unavbarmenumulti-api)

- [UNavbarMenuGroupMulti API](#unavbarmenugroupmulti-api)

- [UNavbarMenuItemMulti API](#unavbarmenuitemmulti-api)

- [UNavbarMenuDividerMulti API](#unavbarmenudividermulti-api)

- [UNavbarSelectMulti API](#unavbarselectmulti-api)

- [UNavbarSelectGroupMulti API](#unavbarselectgroupmulti-api)

- [UNavbarSelectItemMulti API](#unavbarselectitemmulti-api)

- [UNavbarSelectDividerMulti API](#unavbarselectdividermulti-api)


**Navigation**

通常用于页面顶部的导航菜单，放置 Logo、导航链接、用户信息等。

## 示例
### 导航栏

``` html
<u-navbar-multi>
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
    </u-multi-layout-item>
    <template #right>
        <u-multi-layout-item align-items="center" justify="end">
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
        </u-multi-layout-item>
    </template>
</u-navbar-multi>
```

## UNavbarMulti API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| router | boolean |  | `true` | 是否根据 vue-router 来控制选择项 |
| value.sync, v-model | any |  |  | 当前选择的值 |
| field | string |  | `'text'` | 显示文本字段 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |

## UNavbarItemMulti API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| text | string |  |  | 文本内容 |
| value | any |  |  | 此项的值 |
| icon | icon |  | `''` | 图标 |
| disabled | boolean |  | `false` | 禁用此项 |
| item | object |  |  | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |
| linkType | string | `[object Object]`<br/>`[object Object]` | `'destination'` | 链接类型 |
| hrefAndTo | string |  |  | 链接地址 |
| target | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'_self'` | 链接跳转方式 |
| to | string, Location |  |  | 需要 vue-router，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。 |
| replace | boolean |  | `false` | 需要 vue-router，与`<router-link>`的`replace`属性相同。如果为`true`，当点击时，会调用`router.replace()`而不是`router.push()`，于是导航后不会留下`history `记录。 |
| exact | boolean |  | `false` | 需要 vue-router，与`<router-link>`的`exact`属性相同。是否与路由完全一致时才高亮显示。 |

## UNavbarDividerMulti API

暂无
## UNavbarDropdownMulti API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| trigger | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'hover'` | 触发方式 |
| placement | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'bottom'` | 弹出方位 |
| disabled | boolean |  | `false` | 是否禁用 |

## UNavbarMenuMulti API

暂无
## UNavbarMenuGroupMulti API

暂无
## UNavbarMenuItemMulti API

暂无
## UNavbarMenuDividerMulti API

暂无
## UNavbarSelectMulti API

暂无
## UNavbarSelectGroupMulti API

暂无
## UNavbarSelectItemMulti API

暂无
## UNavbarSelectDividerMulti API

暂无
