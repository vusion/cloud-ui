<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UNavbar 导航栏

- [示例](#示例)
    - [基本用法](#基本用法)
    - [选择控制](#选择控制)
    - [与 Logo 结合](#与-logo-结合)
    - [布局](#布局)
    - [下拉菜单与选择](#下拉菜单与选择)
    - [切换动画效果](#切换动画效果)
- [UNavbar API](#unavbar-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
- [UNavbarItem API](#unavbaritem-api)
    - [Props/Attrs](#propsattrs-2)
    - [Slots](#slots-2)
    - [Events](#events-2)
- [UNavbarDivider API](#unavbardivider-api)

- [UNavbarDropdown API](#unavbardropdown-api)
    - [Props/Attrs](#propsattrs-3)
- [UNavbarMenu、uNavbarMenuGroup、uNavbarMenuItem、uNavbarMenuDivider API](#unavbarmenu-unavbarmenugroup-unavbarmenuitem-unavbarmenudivider-api)

- [UNavbarSelect、uNavbarSelectGroup、uNavbarSelectItem、uNavbarSelectDivider API](#unavbarselect-unavbarselectgroup-unavbarselectitem-unavbarselectdivider-api)


**Layout**

通常用于页面顶部的导航菜单，放置 Logo、导航链接、用户信息等。

## 示例
### 基本用法

下面展示了导航条的一些基本特性，如配置链接、添加分隔线、禁用选项等。

``` html
<u-navbar style="background: #4289db;">
    <u-navbar-item to="/components">组件</u-navbar-item>
    <u-navbar-item>概念</u-navbar-item>
    <u-navbar-item disabled>指令</u-navbar-item>
    <u-navbar-divider></u-navbar-divider>
    <u-navbar-item>配置</u-navbar-item>
    <u-navbar-item href="https://github.com/vusion/cloud-ui">GitHub</u-navbar-item>
</u-navbar>
```

### 选择控制

通过`router`属性开关来决定，导航条的选择项是直接与路由绑定，还是由`value`属性来控制。

#### 路由模式

默认为此种模式，即导航条的选择项通过`to`属性直接与路由绑定的，这样就不需要操作额外的变量。这种模式下每个`<u-navbar-item>`类似 VueRouter 的`<router-link>`。

``` html
<u-navbar style="background: #4289db;">
    <u-navbar-item to="u-navbar">组件</u-navbar-item>
    <u-navbar-item>备案管理</u-navbar-item>
    <u-navbar-item disabled>帮助</u-navbar-item>
    <u-navbar-item href="https://github.com/vusion/cloud-ui">GitHub</u-navbar-item>
</u-navbar>
```

#### value 模式

将`router`属性设置为`false`时，导航条的选择项则由`value`属性来控制。类似于常用的`<u-select>`操作，`value`可以用`v-model`或`.sync`进行双向绑定。

``` html
<u-navbar value="3" :router="false" style="background: #4289db;">
    <u-navbar-item value="1">组件</u-navbar-item>
    <u-navbar-item value="2">备案管理</u-navbar-item>
    <u-navbar-item value="3">帮助</u-navbar-item>
    <u-navbar-item value="4">GitHub</u-navbar-item>
</u-navbar>
```

### 与 Logo 结合

``` html
<u-linear-layout direction="vertical">
    <u-navbar style="background: #4289db;">
        <s-logo slot="left"><a href="/" target="_blank">ICP 备案系统</a></s-logo>
        <u-navbar-item to="u-navbar">主体</u-navbar-item>
        <u-navbar-item>备案管理</u-navbar-item>
        <u-navbar-item>帮助</u-navbar-item>
    </u-navbar>
    <u-navbar alignment="right" style="background: #151d2b;">
        <s-logo slot="left"></s-logo>
        <u-navbar-item>产品</u-navbar-item>
        <u-navbar-item to="u-navbar">价格</u-navbar-item>
        <u-navbar-item>帮助</u-navbar-item>
        <u-navbar-item>合作与生态</u-navbar-item>
        <u-navbar-item>博客</u-navbar-item>
        <u-navbar-item>备案</u-navbar-item>
    </u-navbar>
</u-linear-layout>
```

### 布局
#### 左右插槽

导航条内容有左中右三块区域。

通过`left`和`right`两个 slot，可以快速进行布局。

``` html
<u-navbar>
    <s-logo slot="left"></s-logo>
    <u-navbar-item to="/components">组件</u-navbar-item>
    <u-navbar-item>概念</u-navbar-item>
    <u-navbar-item disabled>指令</u-navbar-item>
    <u-navbar-item slot="right" href="https://github.com/vusion/cloud-ui" target="_blank"><i-icon name="github"></i-icon></u-navbar-item>
</u-navbar>
```

#### 对齐方式

通过设置`alignment`属性，可以调整中部区域的对齐方式。

``` html
<u-linear-layout direction="vertical">
    <u-navbar alignment="left">
        <s-logo slot="left"></s-logo>
        <u-navbar-item>指南</u-navbar-item>
        <u-navbar-item>概念</u-navbar-item>
        <u-navbar-item to="/cloud-ui">组件</u-navbar-item>
        <u-navbar-item slot="right" href="https://github.com/vusion/cloud-ui" target="_blank"><i-icon name="github"></i-icon></u-navbar-item>
    </u-navbar>
    <u-navbar alignment="center">
        <s-logo slot="left"></s-logo>
        <u-navbar-item>指南</u-navbar-item>
        <u-navbar-item>概念</u-navbar-item>
        <u-navbar-item to="/cloud-ui">组件</u-navbar-item>
        <u-navbar-item slot="right" href="https://github.com/vusion/cloud-ui" target="_blank"><i-icon name="github"></i-icon></u-navbar-item>
    </u-navbar>
    <u-navbar alignment="right">
        <s-logo slot="left"></s-logo>
        <u-navbar-item>指南</u-navbar-item>
        <u-navbar-item>概念</u-navbar-item>
        <u-navbar-item to="/cloud-ui">组件</u-navbar-item>
        <u-navbar-item slot="right" href="https://github.com/vusion/cloud-ui" target="_blank"><i-icon name="github"></i-icon></u-navbar-item>
    </u-navbar>
</u-linear-layout>
```

### 下拉菜单与选择

使用`<u-navbar-menu>`搭配`<u-navbar-dropdown>`来实现下拉菜单，使用`<u-navbar-select>`来实现下拉选择。

``` html
<u-navbar>
    <u-navbar-item to="/components">组件</u-navbar-item>
    <u-navbar-item disabled>指令</u-navbar-item>
    <u-navbar-dropdown title="下拉菜单">
        <u-navbar-menu>
            <u-navbar-menu-item>Basic</u-navbar-menu-item>
            <u-navbar-menu-item>Layout</u-navbar-menu-item>
            <u-navbar-menu-item>Navigation
                <u-navbar-menu slot="sub">
                    <u-navbar-menu-item>Navbar</u-navbar-menu-item>
                    <u-navbar-menu-item>Sidebar</u-navbar-menu-item>
                    <u-navbar-menu-item>Menu</u-navbar-menu-item>
                </u-navbar-menu>
            </u-navbar-menu-item>
        </u-navbar-menu>
    </u-navbar-dropdown>
    <u-navbar-select>
        <u-navbar-select-item>请选择</u-navbar-select-item>
        <u-navbar-select-item>中文</u-navbar-select-item>
        <u-navbar-select-item>English</u-navbar-select-item>
        <u-navbar-select-item>Français</u-navbar-select-item>
        <u-navbar-select-item>Русский</u-navbar-select-item>
    </u-navbar-select>
</u-navbar>
```

### 切换动画效果

修改`animation`属性可以切换动画效果。

``` html
<u-linear-layout direction="vertical">
    <u-navbar :router="false" animation="1">
        <u-navbar-item>组件</u-navbar-item>
        <u-navbar-item>概念</u-navbar-item>
        <u-navbar-item disabled>指令</u-navbar-item>
        <u-navbar-divider></u-navbar-divider>
        <u-navbar-item>配置</u-navbar-item>
        <u-navbar-item href="https://github.com/vusion/cloud-ui">GitHub</u-navbar-item>
    </u-navbar>
    <u-navbar :router="false" animation="2">
        <u-navbar-item>组件</u-navbar-item>
        <u-navbar-item>概念</u-navbar-item>
        <u-navbar-item disabled>指令</u-navbar-item>
        <u-navbar-divider></u-navbar-divider>
        <u-navbar-item>配置</u-navbar-item>
        <u-navbar-item href="https://github.com/vusion/cloud-ui">GitHub</u-navbar-item>
    </u-navbar>
    <u-navbar :router="false" animation="3">
        <u-navbar-item>组件</u-navbar-item>
        <u-navbar-item>概念</u-navbar-item>
        <u-navbar-item disabled>指令</u-navbar-item>
        <u-navbar-divider></u-navbar-divider>
        <u-navbar-item>配置</u-navbar-item>
        <u-navbar-item href="https://github.com/vusion/cloud-ui">GitHub</u-navbar-item>
    </u-navbar>
    <u-navbar :router="false" animation="4">
        <u-navbar-item>组件</u-navbar-item>
        <u-navbar-item>概念</u-navbar-item>
        <u-navbar-item disabled>指令</u-navbar-item>
        <u-navbar-divider></u-navbar-divider>
        <u-navbar-item>配置</u-navbar-item>
        <u-navbar-item href="https://github.com/vusion/cloud-ui">GitHub</u-navbar-item>
    </u-navbar>
</u-linear-layout>
```
## UNavbar API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| router | boolean |  | `true` | 是否根据 vue-router 来控制选择项 |
| value.sync, v-model | any |  |  | 当前选择的值 |
| field | string |  | `'text'` | 显示文本字段 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |

### Slots

#### (default)

链接区域

#### left

左部区域，一般放置 logo 等

#### right

右部区域，一般放置用户个人信息等

### Events

#### @click

点击此项时触发，与原生 click 事件不同的是，它只会在非只读和禁用的情况下触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | MouseEvent | 鼠标事件对象 |
| senderVM | Vue | 发送事件实例 |

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | any | 选择项的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 选择项相关对象 |
| $event.itemVM | NavbarItem | 选择项子组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | Vue | 发送事件实例 |

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | 选择项的值 |
| senderVM | Vue | 发送事件实例 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | any | 改变后的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 选择项相关对象 |
| $event.oldItem | object | 旧的选择项相关对象 |
| $event.itemVM | UNavbarItem | 选择项子组件 |
| $event.oldVM | UNavbarItem | 旧的选择项子组件 |
| senderVM | Vue | 发送事件实例 |

#### @change

选择值改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | any | 选择项的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 选择项相关对象 |
| $event.oldItem | object | 旧的选择项相关对象 |
| $event.itemVM | UNavbarItem | 选择项子组件 |
| $event.oldVM | UNavbarItem | 旧的选择项子组件 |
| senderVM | UNavbar | 发送事件实例 |

## UNavbarItem API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | any |  |  | 此项的值 |
| disabled | boolean |  | `false` | 禁用此项 |
| item | object |  |  | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |
| linkType | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]` |  | 链接类型 |
| hrefAndTo | string |  |  | 链接地址 |
| target | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` |  | 链接跳转方式 |
| replace | boolean |  | `false` | 需要 vue-router，与`<router-link>`的`replace`属性相同。如果为`true`，当点击时，会调用`router.replace()`而不是`router.push()`，于是导航后不会留下`history `记录。 |
| exact | boolean |  | `false` | 需要 vue-router，与`<router-link>`的`exact`属性相同。是否与路由完全一致时才高亮显示。 |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | any | 此项的值 |
| $event.item | object | 此项的相关对象 |
| $event.itemVM | UNavbarItem | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | Vue | 发送事件实例 |

#### @before-navigate

使用 router 相关属性切换路由前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.to | string, Location | `to`属性的值 |
| $event.replace | boolean | `replace`属性的值 |
| $event.exact | boolean | `exact`属性的值 |
| $event.preventDefault | Function | 阻止切换流程 |
| senderVM | Vue | 发送事件实例 |

#### @navigate

使用router相关属性切换路由时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.to | string, Location | `to`属性的值 |
| $event.replace | boolean | `replace`属性的值 |
| $event.exact | boolean | `exact`属性的值 |
| senderVM | Vue | 发送事件实例 |

## UNavbarDivider API

暂无
## UNavbarDropdown API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| trigger | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'hover'` | 触发方式 |
| placement | string | `'上'` ()<br/>`'下'` ()<br/>`'左'` ()<br/>`'右'` ()<br/>`'上左'` ()<br/>`'上右'` ()<br/>`'下左'` ()<br/>`'下右'` ()<br/>`'左上'` ()<br/>`'左下'` ()<br/>`'右上'` ()<br/>`'右下'` () | `'bottom'` | 弹出方位 |
| disabled | boolean |  | `false` | 是否禁用 |

## UNavbarMenu、uNavbarMenuGroup、uNavbarMenuItem、uNavbarMenuDivider API

暂无
## UNavbarSelect、uNavbarSelectGroup、uNavbarSelectItem、uNavbarSelectDivider API

暂无
