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

**Navigation**

用于展示文档的目录

## 示例
### 基本用法
按照以下层级添加即可。

``` html
<u-toc>
    <u-toc-item label="锚点跳转1" :disabled=true hrefAndTo="/#/components/u-toc/examples" anchorLinked="锚点1" value="锚点value1"></u-toc-item>
    <u-toc-item label="锚点其它页面" hrefAndTo="/#/components/u-anchor/examples" anchorLinked="锚点2" value="锚点value2"></u-toc-item>
    <u-toc-item label="锚点本页面" hrefAndTo="/#/components/u-toc/examples" anchorLinked="锚点1" value="锚点value1"></u-toc-item>
    <u-toc-item label="基础示例" to="examples">
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
#### 高级


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

``` html
<u-anchor label="锚点1">
</u-anchor>

```

## UToc API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | any |  |  | 当前选择的值 |

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
| label | string |  |  | 集合的元素类型中，用于显示文本的属性名称 |
| value | any |  |  | 集合的元素类型中，用于标识选中值的属性 |
| item | object |  |  | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |
| linkType | string | `[object Object]`<br/>`[object Object]` | `'destination'` | 链接类型 |
| hrefAndTo | string |  |  | 链接地址 |
| target | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'_self'` | 父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则打开方式同当前窗口。 |
| disabled | boolean |  | `false` | 禁用此项 |

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

