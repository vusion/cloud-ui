<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UToc 目录

- [示例](#示例)
    - [基本用法](#基本用法)
    - [value](#value)
- [UToc API](#utoc-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
- [UTocItem API](#utocitem-api)
    - [Props/Attrs](#propsattrs-2)
    - [Slots](#slots-2)
    - [Events](#events-2)

**路由链接**, **块级展示**

用于展示文档的目录，支持路由和滚动监听、多级目录等功能。

## 示例
### 基本用法

按照以下层级添加即可。

``` html
<u-toc>
    <u-toc-item label="基础示例" to="examples">
        <u-toc-item label="基本用法" :to="{ path: 'examples', hash: '#基本用法' }"></u-toc-item>
        <u-toc-item label="value" :to="{ path: 'examples', hash: '#value' }"></u-toc-item>
    </u-toc-item>
    <u-toc-item label="UToc API" :to="{ path: 'api', hash: '#api' }">
        <u-toc-item label="Props/Attrs" :to="{ path: 'api', hash: '#propsattrs' }"></u-toc-item>
        <u-toc-item label="Slots" :to="{ path: 'api', hash: '#slots' }"></u-toc-item>
        <u-toc-item label="Events" :to="{ path: 'api', hash: '#events' }"></u-toc-item>
    </u-toc-item>
    <u-toc-item label="UTocItem API" :to="{ path: 'api', hash: '#api' }">
        <u-toc-item label="Props/Attrs" :to="{ path: 'api', hash: '#propsattrs' }"></u-toc-item>
        <u-toc-item label="Slots" :to="{ path: 'api', hash: '#slots' }"></u-toc-item>
        <u-toc-item label="Events" :to="{ path: 'api', hash: '#events' }"></u-toc-item>
    </u-toc-item>
</u-toc>
```

### value

将`router`属性设置为`false`，也可以用`value`控制选择项。

``` vue
<template>
<u-toc :router="false" v-model="value">
    <u-toc-item label="基础示例" value="examples">
        <u-toc-item label="基本用法" value="基本用法"></u-toc-item>
        <u-toc-item label="value" value="value"></u-toc-item>
    </u-toc-item>
    <u-toc-item label="UToc API" value="utocapi">
        <u-toc-item label="Props/Attrs" value="propsattrs"></u-toc-item>
        <u-toc-item label="Slots" value="slots"></u-toc-item>
        <u-toc-item label="Events" value="events"></u-toc-item>
    </u-toc-item>
    <u-toc-item label="UTocItem API" value="utocitemapi">
        <u-toc-item label="Props/Attrs" value="propsattrs1"></u-toc-item>
        <u-toc-item label="Slots" value="slots1"></u-toc-item>
        <u-toc-item label="Events" value="events1"></u-toc-item>
    </u-toc-item>
</u-toc>
</template>
<script>
export default {
    data() {
        return {
            value: 'utocitemapi',
        };
    },
};
</script>
```

## UToc API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| router | boolean |  | `true` | 是否根据 vue-router 来控制选择哪一项 |
| value.sync, v-model | any |  |  | 当前选择的值 |
| scroll-spy | boolean |  | `true` | 是否监听滚动 |
| scroll-parent | HTMLElement |  |  | 滚动的父级元素 |
| boundary-top | number |  | `0` | 如果有头部导航栏，可以设置边界高度 |

### Slots

#### (default)

插入`<u-toc-item>`子组件。

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | any | 选择项的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 选择项相关对象 |
| $event.itemVM | UTocItem | 选择项子组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | UToc | 发送事件实例 |

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | 选择项的值 |
| senderVM | UToc | 发送事件实例 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | any | 改变后的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 选择项相关对象 |
| $event.oldItem | object | 旧的选择项相关对象 |
| $event.itemVM | UTocItem | 选择项子组件 |
| $event.oldVM | UTocItem | 旧的选择项子组件 |
| senderVM | UToc | 发送事件实例 |

## UTocItem API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| label | string |  |  | 此项显示的文本 |
| value | any |  |  | 此项的值 |
| disabled | boolean |  | `false` | 禁用此项 |
| item | object |  |  | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |
| href | string |  |  | 链接地址 |
| target | enum | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` |  | 链接打开方式 |
| to | string, Location |  |  | 需要 vue-router，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。 |
| replace | boolean |  | `false` | 需要 vue-router，与`<router-link>`的`replace`属性相同。如果为`true`，当点击时，会调用`router.replace()`而不是`router.push()`，于是导航后不会留下`history `记录。 |
| exact | boolean |  | `true` | 需要 vue-router，与`<router-link>`的`exact`属性相同。是否与路由完全一致时才高亮显示。 |
| exact | boolean |  | `true` | 需要 vue-router，与`<router-link>`的`exact`属性相同。是否与路由完全一致时才高亮显示。 |

### Slots

#### (default)

插入`<u-toc-item>`子组件。

### Events

#### @click

点击此项时触发，与原生 click 事件不同的是，它只会在非只读和禁用的情况下触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | MouseEvent | 鼠标事件对象 |
| senderVM | UTocItem | 发送事件实例 |

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | any | 此项的值 |
| $event.item | object | 此项的相关对象 |
| $event.itemVM | UTocItem | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | UTocItem | 发送事件实例 |

#### @before-navigate

使用 router 相关属性切换路由前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.to | string, Location | `to`属性的值 |
| $event.replace | boolean | `replace`属性的值 |
| $event.exact | boolean | `exact`属性的值 |
| $event.preventDefault | Function | 阻止切换流程 |
| senderVM | UTocItem | 发送事件实例 |

#### @navigate

使用router相关属性切换路由时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.to | string, Location | `to`属性的值 |
| $event.replace | boolean | `replace`属性的值 |
| $event.exact | boolean | `exact`属性的值 |
| senderVM | UTocItem | 发送事件实例 |

