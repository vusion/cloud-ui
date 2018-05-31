# 子导航 Subnav

## 示例
### 基本形式

``` html
<div style="width:960px;">
    <u-subnav usage="tabs">
        <u-subnav-item title="设置带宽">设置带宽</u-subnav-item>
        <u-subnav-item title="调整配额">调整配额</u-subnav-item>
        <u-subnav-item title="灰度测试">灰度测试</u-subnav-item>
    </u-subnav>
</div>
```

#### 路由模式

``` html
<u-subnav>
    <u-subnav-item>指南</u-subnav-item>
    <u-subnav-item>概念</u-subnav-item>
    <u-subnav-item to="/proto-ui">组件</u-subnav-item>
</u-subnav>
```

#### value模式

``` html
<u-subnav value="3" :router="false">
    <u-subnav-item value="1">指南</u-subnav-item>
    <u-subnav-item value="2">概念</u-subnav-item>
    <u-subnav-item value="3">组件</u-subnav-item>
</u-subnav>
```

### 只读、禁用、禁用某一项

``` html
<u-linear-layout direction="vertical">
    <u-subnav disabled>
        <u-subnav-item>指南</u-subnav-item>
        <u-subnav-item>概念</u-subnav-item>
        <u-subnav-item to="/proto-ui">组件</u-subnav-item>
    </u-subnav>
    <u-subnav>
        <u-subnav-item>指南</u-subnav-item>
        <u-subnav-item disabled>概念</u-subnav-item>
        <u-subnav-item to="/proto-ui">组件</u-subnav-item>
    </u-subnav>
</u-linear-layout>
```

### 分隔符

``` html
<u-subnav>
    <u-subnav-item>指南</u-subnav-item>
    <u-subnav-item>概念</u-subnav-item>
    <u-subnav-item>配置</u-subnav-item>
    <u-subnav-divider></u-subnav-divider>
    <u-subnav-item to="/proto-ui">组件</u-subnav-item>
    <u-subnav-item to="/libraries">组件库</u-subnav-item>
</u-subnav>
```

## Subnav API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| router | Boolean | `true` | 是否根据vue-router来控制选择哪一项 |
| value.sync, v-model | Any | | 当前选择的值 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| usage | String |  | 值为 `'tabs'`间距向上移动`'10px'` |

### Slots

#### (default)

插入`<u-subnav-item>`或`<u-subnav-divider>`子组件。

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.itemVM | subnavItem | 选择项子组件 |
| $event.preventDefault | Function | 阻止选择流程 |

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | 选择项的值 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 改变后的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 单选模式中，选择项相关对象 |
| $event.itemVM | subnavItem |  单选模式中，选择项子组件 |

## subnavItem API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Any | | 此项的值 |
| disabled | Boolean | `false` | 禁用此项 |
| item | Object | | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |
| href | String |  | 链接地址 |
| target | String |  | 打开方式 |
| to | String,  Location |  | 需要vue-router，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。 |
| replace | Boolean | `false` | 需要vue-router，与`<router-link>`的`replace`属性相同。如果为`true`，当点击时，会调用`router.replace()`而不是`router.push()`，于是导航后不会留下`history `记录。 |
| exact | Boolean | `false` | 需要vue-router，与`<router-link>`的`exact`属性相同。是否与路由完全一致时才高亮显示。 |

### Slots

#### (default)

插入文本或HTML。

### Events

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 此项的值 |
| $event.item | Object | 此项的相关对象 |
| $event.itemVM | subnavItem | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |

#### @before-navigate

使用router相关属性切换路由前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | String,  Location | `to`属性的值 |
| $event.replace | Boolean | `replace`属性的值 |
| $event.exact | Boolean | `exact`属性的值 |
| $event.preventDefault | Function | 阻止切换流程 |

#### @navigate

使用router相关属性切换路由时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | String,  Location | `to`属性的值 |
| $event.replace | Boolean | `replace`属性的值 |
| $event.exact | Boolean | `exact`属性的值 |

## subnavDivider API

无

