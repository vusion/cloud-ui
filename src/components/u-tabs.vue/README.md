<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UTabs 选项卡

- [示例](#示例)
    - [基本用法](#基本用法)
    - [动态数据渲染](#动态数据渲染)
    - [路由](#路由)
    - [默认显示和可关闭](#默认显示和可关闭)
    - [外观](#外观)
    - [禁用状态](#禁用状态)
    - [可关闭](#可关闭)
    - [标签页较多的情形](#标签页较多的情形)
    - [插槽扩展](#插槽扩展)
- [UTabs API](#utabs-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
    - [Methods](#methods)
- [UTab API](#utab-api)
    - [Props/Attrs](#propsattrs-2)
    - [Slots](#slots-2)

**Selector**

选项卡切换组件，常用于平级区域大块内容的收纳和展现。

## 示例
### 基本用法

#### 使用 value 控制

``` html
<u-tabs value="B">
    <u-tab title="模板" value="A">模板内容</u-tab>
    <u-tab title="样式" value="B">样式内容</u-tab>
    <u-tab title="逻辑" value="C">逻辑内容</u-tab>
</u-tabs>
```

### 动态数据渲染

```vue
<template>
    <div>
        <u-tabs :value.sync="value"
                :dataSource="tabList"
                titleField="title"
                valueField="value"
                contentField="contentUrl"
                closableField="closable"
                showScrollButtons='auto'
                router>
        </u-tabs>
        <u-button size="small" slot="extra" @click="addValue">value+1</u-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: 1,
            tabList: [{
                title: '标签页 1',
                value: '1',
                contentUrl: '/components/u-tabs',
                closable: true,
            }, {
                title: '标签页 2',
                value: '2',
                contentUrl: '/components/u-tabs#路由',
                closable: false,
            }, {
                title: '标签页 3',
                value: '3',
                contentUrl: '/components/u-tabs#默认显示和可关闭',
                closable: true,
            }]
        };
    },
    methods: {
        addTab() {
            this.tabList.push({
                title: '标签页',
                value: this.tabList.length + 1,
                contentUrl: '/components/u-tabs',
                closable: true,
            });
        },
        addValue() {
            this.value = this.value + 1;
        },
    },
};
</script>
```

### 路由

``` html
<u-tabs router>
    <u-tab title="Button" to="/components/u-button"></u-tab>
    <u-tab title="Input" to="/components/u-input"></u-tab>
    <u-tab title="Tabs" to="/components/u-tabs"></u-tab>
</u-tabs>
```

### 默认显示和可关闭

``` html
<u-tabs appear="square">
    <u-tab title="模板" closable>模板内容</u-tab>
    <u-tab title="样式" :showTabItem=false>样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
```
### 外观

#### 方形卡片（默认）

``` html
<u-tabs appear="square">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
```

#### 圆形卡片（默认）

``` html
<u-tabs appear="round" size="small">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
```

#### 线条导航

``` html
<u-tabs appear="line">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
```

#### 胶囊导航

``` html
<u-tabs appear="capsule">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
```

#### 文本形态

``` html
<u-tabs appear="text" size="mini">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
```

#### 竖线分割

``` html
<u-linear-layout>
    <u-tabs appear="split">
        <u-tab title="模板">模板内容</u-tab>
        <u-tab title="样式">样式内容</u-tab>
        <u-tab title="逻辑">逻辑内容</u-tab>
    </u-tabs>
    <u-tabs appear="split" size="mini" closable>
        <u-tab title="模板">模板内容</u-tab>
        <u-tab title="样式">样式内容</u-tab>
        <u-tab title="逻辑">逻辑内容</u-tab>
    </u-tabs>
</u-linear-layout>
```

### 禁用状态

``` html
<u-tabs disabled>
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
<u-tabs>
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式" disabled>样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
```

### 可关闭

``` html
<u-tabs closable item-width="90px" item-align="left">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
    <u-tab title="文档">文档内容</u-tab>
    <u-tab title="资源">资源内容</u-tab>
</u-tabs>
```

### 标签页较多的情形

``` vue
<template>
<u-tabs v-model="value">
    <u-tab v-for="title in list" :key="title" :title="title" :value="title">{{ title }} 的内容</u-tab>
    <u-button size="small" slot="extra" @click="addTab">添加</u-button>
</u-tabs>
</template>
<script>
export default {
    data() {
        const list = [];
        for (let i = 0; i < 20; i++)
            list.push('标签页 ' + (i + 1));

        return {
            value: '标签页 7',
            list
        };
    },
    methods: {
        addTab() {
            this.list.push('新标签页 ' + (this.list.length + 1));
        },
    },
};
</script>
```

### 插槽扩展

- 在`<u-tabs>`上可以使用`extra`插槽，在右侧添加额外的内容；
- 在`<u-tab>`上可以使用`title`插槽，自定义标签页的标题。

<p></p>

``` html
<u-tabs value="1">
    <u-tab value="0">
        <span slot="title">模板 <u-label>1</u-label></span>
        模板内容
    </u-tab>
    <u-tab value="1">
        <span slot="title">样式 <u-label>6</u-label></span>
        样式内容
    </u-tab>
    <u-tab value="2">
        <span slot="title">逻辑 <u-label>3</u-label></span>
        逻辑内容
    </u-tab>
    <u-checkbox slot="extra">全选</u-checkbox>
</u-tabs>
```

## UTabs API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| show-scroll-buttons | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'auto'` | 是否显示标签滚动左右箭头按钮 |
| data-source | Array\<Item\> \| Function \| Object |  |  | 展示数据的输入源，可设置为集合类型变量（List<T>）或输出参数为集合类型的逻辑。 |
| data-schema | schema |  |  | 数据源返回的数据结构的类型，自动识别类型进行展示说明 |
| title-field | string |  | `'title'` | 数据源集合的元素，用于显示标签标题的属性 |
| value-field | string |  | `'value'` | 数据源集合的元素，用于标识标签值的属性 |
| url-field | string |  | `'url'` | 数据源集合的元素，用于标识当前打开的标签项 |
| value.sync, v-model | any |  |  | 指当前打开标签的标签项 |
| router | boolean |  | `false` | 开启后，选项卡可设置跳转页面 |
| closable-field | string |  | `'closable'` | 设置标签项是否可关闭 |
| closable | boolean |  | `false` | 设置标签是否可关闭 |
| readonly | boolean |  | `false` | 正常显示，但禁止选择/输入 |
| disabled | boolean |  | `false` | 置灰显示，且禁止任何交互（焦点、点击、选择、输入等） |
| appear | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'square'` |  |
| size | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` |  |

### Slots

#### (default)

插入`<u-tab>`子组件。

#### extra

在标签右侧可以附加的组件。

#### title



#### content



### Events

#### @click

点击某一项后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | any | 选中标签页的值 |
| $event.itemVM | UTab | 选中标签页实例 |
| senderVM | UTabs | 发送事件实例 |

#### @before-select

选择某一页前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | any | 选中标签页的值 |
| $event.oldValue | any | 旧的值 |
| $event.itemVM | UTab | 选中标签页实例 |
| $event.oldVM | UTab | 旧的选中标签页实例 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | UTabs | 发送事件实例 |

#### @select

选择某一项后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | any | 选中标签页的值 |
| $event.oldValue | any | 旧的值 |
| $event.itemVM | UTab | 选中标签页实例 |
| $event.oldVM | UTab | 旧的选中标签页实例 |
| senderVM | UTabs | 发送事件实例 |

#### @before-close

关闭某一页前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | any | 待关闭标签页的值 |
| $event.oldValue | any | 旧的值 |
| $event.itemVM | UTab | 待关闭的标签页实例 |
| $event.preventDefault | Function | 阻止关闭流程 |
| senderVM | UTabs | 发送事件实例 |

#### @close

关闭某一页后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | any | 关闭的标签页的值 |
| $event.oldValue | any | 旧的值 |
| $event.itemVM | UTabs | 关闭的标签页实例 |
| $event.preventDefault | Function | 阻止关闭后自动选择页的流程 |
| senderVM | UTabs | 发送事件实例 |

#### @before-load

加载前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.preventDefault | Function | 阻止加载流程 |
| senderVM | UTableView | 发送事件实例 |

#### @load

加载后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | null | 无 |
| senderVM | UTableView | 发送事件实例 |

Methods

#### reload()

重新加载数据

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

## UTab API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  | 标签页标题。 |
| href | string |  |  | 链接地址 |
| target | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'_self'` | 打开方式 |
| to | string, Location |  |  | 需要 router 为 true，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。 |
| replace | boolean |  | `false` | 需要 router 为 true，与`<router-link>`的`replace`属性相同。如果为`true`，当点击时，会调用`router.replace()`而不是`router.push()`，于是导航后不会留下`history `记录。 |
| append | boolean |  | `false` | 需要 router 为 true，与`<router-link>`的`append`属性相同。如果为`true`，则在当前路径后追加`to`的路径。 |
| exact | boolean |  | `false` | 需要 router 为 true，与`<router-link>`的`exact`属性相同。是否与路由完全一致时才高亮显示。 |
| value | any |  |  |  |
| linkType | string | `[object Object]` | `'destination'` |  |
| hrefAndTo | string |  |  |  |
| closable | boolean |  | `false` | 设置标签是否可关闭 |
| showTabItem | boolean |  | `true` | 显示状态分为“True(显示)/False(隐藏)”，默认为“显示” |
| disabled | boolean |  | `false` | 置灰显示，且禁止任何交互（焦点、点击、选择、输入等） |

### Slots

#### (default)

该 tab 下的内容

#### title

自定义标题

