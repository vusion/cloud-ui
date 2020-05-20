<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UActions 操作项

- [示例](#示例)
    - [基本用法](#基本用法)
    - [使用指令](#使用指令)
- [UActions API](#uactions-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
- [UAction API](#uaction-api)
    - [Props/Attrs](#propsattrs-2)
    - [Events](#events)

## 示例
### 基本用法

`'u-action'`实际使用组件`'u-link'`进行渲染，所以具备`'u-link'`的所有功能，不需要再其内部使用`'u-link'`组件实现跳转等功能

``` html
<u-linear-layout direction="vertical">
    <u-actions>
        <u-action disabled>设置</u-action>
        <u-action to="/components/u-navbar">跳转到 Navbar</u-action>
        <u-action>重启</u-action>
    </u-actions>
    <u-actions>
        <u-action disabled>设置</u-action>
        <u-action to="/components/u-navbar">跳转到 Navbar</u-action>
        <u-action>重启</u-action>
        <u-action disabled>保存为镜像</u-action>
        <u-action to="/components/u-select">跳转到 Select</u-action>
    </u-actions>
</u-linear-layout>
```

### 使用指令

``` html
<u-linear-layout direction="vertical">
    <u-actions>
        <u-action disabled>设置</u-action>
        <u-action v-tooltip="'跳转到 Navbar'" to="/components/u-navbar">显示Tips</u-action>
        <u-action>重启</u-action>
        <u-action disabled>保存为镜像</u-action>
        <u-action v-tooltip="'跳转到 Select'" to="/components/u-select">显示Tips</u-action>
    </u-actions>
</u-linear-layout>
```

## UActions API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| max-count | number |  | `3` | 一列最多显示链接个数 |
| menu-title | string |  | `'更多'` | 菜单标题 |
| placement | string |  | `'bottom-end'` | 菜单的弹出方向。可选值：`'top'`, `'bottom'`, `'left'`, `'right'`, `'top-start'`, `'top-end'`, `'bottom-start'`, `'bottom-end'`, `'left-start`',` 'left-end'`, `'right-start'`, `'right-end'` |

### Slots

#### (default)

插入`<u-action>`子组件。

## UAction API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| hidden | boolean |  | `false` | 自定义显示/隐藏条件 |
| 其余属性透传 |  |  |  | undefined |

### Events

#### @click

点击此项时触发，与原生 click 事件不同的是，它只会在非禁用状态下触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | MouseEvent | 鼠标事件对象 |

