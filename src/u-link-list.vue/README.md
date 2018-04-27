# 链接列表 LinkList

## 示例
### 基本形式

``` html
<u-linear-layout direction="vertical">
    <u-link-list>
        <u-link-list-item disabled>设置</u-link-list-item>
        <u-link-list-item to="/components/u-navbar">跳转到 Navbar</u-link-list-item>
        <u-link-list-item>重启</u-link-list-item>
    </u-link-list>
    <u-link-list>
        <u-link-list-item disabled>设置</u-link-list-item>
        <u-link-list-item to="/components/u-navbar">跳转到 Navbar</u-link-list-item>
        <u-link-list-item>重启</u-link-list-item>
        <u-link-list-item disabled>保存为镜像</u-link-list-item>
        <u-link-list-item to="/components/u-select">跳转到 Select</u-link-list-item>
    </u-link-list>
</u-linear-layout>
```

### 使用指令

``` html
<u-linear-layout direction="vertical">
    <u-link-list>
        <u-link-list-item disabled>设置</u-link-list-item>
        <u-link-list-item v-tooltip="'跳转到 Navbar'" to="/components/u-navbar">显示Tips</u-link-list-item>
        <u-link-list-item>重启</u-link-list-item>
        <u-link-list-item disabled>保存为镜像</u-link-list-item>
        <u-link-list-item v-tooltip="'跳转到 Select'" to="/components/u-select">显示Tips</u-link-list-item>
    </u-link-list>
</u-linear-layout>
```


## LinkList API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| maxCount | Number | 3 | 一列最多显示链接个数 |
| menuTitle | String | '更多' | 菜单标题 |
| placement | String | `'bottom-end'`| 菜单的弹出方向。可选值：`'top'`, `'bottom'`, `'left'`, `'right'`, `'top-start'`, `'top-end'`, `'bottom-start'`, `'bottom-end'`, `'left-start`',` 'left-end'`, `'right-start'`, `'right-end'` |

### Slots

#### (default)

插入`<u-link-list-item>`子组件。

## LinkListItem API

属性全部透传。

### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |

### Events

事件全部透传。

#### @click

点击此项时触发，与原生 click 事件不同的是，它只会在非禁用状态下触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | MouseEvent | 鼠标事件对象 |
