<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# USidebar 侧边栏

- [示例](#示例)
    - [基本用法](#基本用法)
    - [折叠功能](#折叠功能)
    - [分组](#分组)
    - [手风琴模式](#手风琴模式)
- [USidebar API](#usidebar-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Methods](#methods)
- [USidebarItem API](#usidebaritem-api)
    - [Props/Attrs](#propsattrs-2)
    - [Events](#events)
- [USidebarGroup API](#usidebargroup-api)
    - [Props/Attrs](#propsattrs-3)
    - [Slots](#slots-2)
- [USidebarDivider API](#usidebardivider-api)


**Navigation**

通常用于页面左侧的导航栏。

## 示例
### 基本用法

``` html
<u-sidebar value="3" :router="false">
    <u-sidebar-item icon="calendar" value="1" text="导航一"></u-sidebar-item>
    <u-sidebar-item value="2" text="导航二"></u-sidebar-item>
    <u-sidebar-item value="3" text="导航三"></u-sidebar-item>
</u-sidebar>
```

### 折叠功能

``` html
<u-sidebar collapsible>
    <u-sidebar-group title="导航一" expanded>
        <u-sidebar-item text="选项一"></u-sidebar-item>
    </u-sidebar-group>
    <u-sidebar-group title="导航二" expanded disabled>
        <u-sidebar-item text="选项一"></u-sidebar-item>
    </u-sidebar-group>
</u-sidebar>
```


### 分组

``` html
<u-sidebar>
    <u-sidebar-group title="导航一" expanded>
        <u-sidebar-item text="选项一"></u-sidebar-item>
    </u-sidebar-group>
    <u-sidebar-group title="导航二" expanded>
        <u-sidebar-item text="选项一"></u-sidebar-item>
    </u-sidebar-group>
</u-sidebar>
```

### 手风琴模式

```html
<u-sidebar collapsible accordion>
    <u-sidebar-group title="导航一">
        <u-sidebar-item text="选项一"></u-sidebar-item>
    </u-sidebar-group>
    <u-sidebar-group title="导航二">
        <u-sidebar-item text="选项一"></u-sidebar-item>
    </u-sidebar-group>
    <u-sidebar-group title="导航三">
        <u-sidebar-item text="选项一"></u-sidebar-item>
    </u-sidebar-group>
</u-sidebar>
```

## USidebar API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| router | boolean |  | `true` | 是否根据 vue-router 来控制选择哪一项 |
| value.sync, v-model | any |  |  | 当前选择的值 |
| collapsible | boolean |  | `false` | 分组是否可以折叠 |
| accordion | boolean |  | `false` | 是否每次只会展开一个分组 |
| expand-trigger | string | `[object Object]`<br/>`[object Object]` | `'click'` | 展开/折叠的触发方式 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |

### Slots

#### (default)

插入`<u-sidebar-item>`、`<u-sidebar-divider>`或`<u-sidebar-group>`子组件。

Methods

#### toggleAll(expanded)

展开/折叠所有分组

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| expanded | boolean |  | 展开/折叠 |

## USidebarItem API
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

### Events

#### @click

在元素上按下并释放任意鼠标按钮时触发。

## USidebarGroup API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  | 显示的标题 |
| collapsible | boolean |  | `false` | 分组是否可以折叠 |
| expanded.sync | boolean |  | `false` | 展开/折叠状态 |
| disabled | boolean |  | `false` | 是否禁用。禁用时无法展开/折叠 |

### Slots

#### (default)

插入`<u-sidebar-item>`或`<u-sidebar-divider>`子组件。

#### title

自定义标题文本。

#### extra

在右侧可以附加内容。

## USidebarDivider API

暂无
