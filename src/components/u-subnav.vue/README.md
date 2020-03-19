<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# USubnav 子导航

## 示例
### 基本用法

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
    <u-subnav-item to="/cloud-ui">组件</u-subnav-item>
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
        <u-subnav-item to="/cloud-ui">组件</u-subnav-item>
    </u-subnav>
    <u-subnav>
        <u-subnav-item>指南</u-subnav-item>
        <u-subnav-item disabled>概念</u-subnav-item>
        <u-subnav-item to="/cloud-ui">组件</u-subnav-item>
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
    <u-subnav-item to="/cloud-ui">组件</u-subnav-item>
    <u-subnav-item to="/libraries">组件库</u-subnav-item>
</u-subnav>
```

## USubnav API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| router | boolean |  | `true` | 是否根据vue-router来控制选择哪一项 |
| value.sync, v-model | any |  |  | 当前选择的值 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |
| usage | string |  |  | 值为 `'tabs'`间距向上移动`'10px'` |

### Slots

#### (default)

插入`<u-subnav-item>`或`<u-subnav-divider>`子组件。

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 选择项的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 选择项相关对象 |
| $event.itemVM | subnavItem | 选择项子组件 |
| $event.preventDefault | Function | 阻止选择流程 |

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | 选择项的值 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 改变后的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 单选模式中，选择项相关对象 |
| $event.itemVM | subnavItem | 单选模式中，选择项子组件 |

## USubnavItem API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | any |  |  | 此项的值 |
| disabled | boolean |  | `false` | 禁用此项 |
| item | object |  |  | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |
| href | string |  |  | 链接地址 |
| target | string |  |  | 打开方式 |
| to | string,  Location |  |  | 需要 vue-router，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。 |
| replace | boolean |  | `false` | 需要 vue-router，与`<router-link>`的`replace`属性相同。如果为`true`，当点击时，会调用`router.replace()`而不是`router.push()`，于是导航后不会留下`history `记录。 |
| exact | boolean |  | `false` | 需要 vue-router，与`<router-link>`的`exact`属性相同。是否与路由完全一致时才高亮显示。 |

### Slots

#### (default)

插入文本或HTML。

### Events

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 此项的值 |
| $event.item | object | 此项的相关对象 |
| $event.itemVM | subnavItem | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |

#### @before-navigate

使用 router 相关属性切换路由前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | string,  Location | `to`属性的值 |
| $event.replace | boolean | `replace`属性的值 |
| $event.exact | boolean | `exact`属性的值 |
| $event.preventDefault | Function | 阻止切换流程 |

#### @navigate

使用router相关属性切换路由时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | string,  Location | `to`属性的值 |
| $event.replace | boolean | `replace`属性的值 |
| $event.exact | boolean | `exact`属性的值 |

## USubnavDivider API

暂无