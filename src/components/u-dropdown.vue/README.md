<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UDropdown 下拉菜单

- [示例](#示例)
    - [基本用法](#基本用法)
- [UDropdown API](#udropdown-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
- [UDropdownItem API](#udropdownitem-api)
    - [Props/Attrs](#propsattrs-2)
    - [Events](#events)

**Navigation**

下拉菜单

## 示例
### 基本用法

``` html
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
```

## 禁用状态

``` html
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

## UDropdown API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| trigger | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'hover'` | 触发方式 |
| type | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'text'` | undefined |
| placement | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'bottom'` | 弹出方位 |
| disabled | boolean |  | `false` | 是否禁用 |

### Slots

#### (default)

插入`<u-dropdown-item>`子组件。

## UDropdownItem API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| text | string |  |  | 显示文本内容 |
| disabled | boolean |  | `false` |  |
| icon | icon |  | `''` |  |
| linkType | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'href'` | 链接类型 |
| hrefAndTo | string |  |  | 链接地址 |
| target | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'_self'` | 链接打开方式 |
| to | string, Location |  |  | 需要 vue-router，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。 |

### Events

#### @click

点击此项时触发，与原生 click 事件不同的是，它只会在非只读和禁用的情况下触发。

| Param | Type | Description |
| ----- | ---- | ----------- |

