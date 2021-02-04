<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# USidebar 侧边栏

- [示例](#示例)
    - [基本用法](#基本用法)
    - [只读、禁用、禁用某一项](#只读-禁用-禁用某一项)
    - [分隔符](#分隔符)
    - [分组](#分组)
    - [侧边栏折叠](#侧边栏折叠)
    - [颜色扩展](#颜色扩展)
- [USidebar API](#usidebar-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
    - [Methods](#methods)
- [USidebarItem API](#usidebaritem-api)
    - [Props/Attrs](#propsattrs-2)
    - [Slots](#slots-2)
    - [Events](#events-2)
- [USidebarGroup API](#usidebargroup-api)
    - [Props/Attrs](#propsattrs-3)
    - [Slots](#slots-3)
    - [Events](#events-3)
- [USidebarDivider API](#usidebardivider-api)


**Layout**

通常用于页面左侧的导航栏。

## 示例
### 基本用法

#### 路由模式

``` html
<u-sidebar style="width: 200px;">
    <u-sidebar-item>指南</u-sidebar-item>
    <u-sidebar-item>概念</u-sidebar-item>
    <u-sidebar-item to="/cloud-ui">组件</u-sidebar-item>
</u-sidebar>
```

#### value模式

``` html
<u-sidebar value="3" :router="false" style="width: 200px;">
    <u-sidebar-item value="1">指南</u-sidebar-item>
    <u-sidebar-item value="2">概念</u-sidebar-item>
    <u-sidebar-item value="3">组件</u-sidebar-item>
</u-sidebar>
```

### 只读、禁用、禁用某一项

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <u-sidebar disabled>
            <u-sidebar-item>指南</u-sidebar-item>
            <u-sidebar-item>概念</u-sidebar-item>
            <u-sidebar-item to="/cloud-ui">组件</u-sidebar-item>
        </u-sidebar>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-sidebar>
            <u-sidebar-item>指南</u-sidebar-item>
            <u-sidebar-item disabled>概念</u-sidebar-item>
            <u-sidebar-item to="/cloud-ui">组件</u-sidebar-item>
        </u-sidebar>
    </u-grid-layout-column>
</u-grid-layout>
```

### 分隔符

``` html
<u-sidebar style="width: 200px;">
    <u-sidebar-item>指南</u-sidebar-item>
    <u-sidebar-item>概念</u-sidebar-item>
    <u-sidebar-item>配置</u-sidebar-item>
    <u-sidebar-divider></u-sidebar-divider>
    <u-sidebar-item to="/cloud-ui">组件</u-sidebar-item>
    <u-sidebar-item to="/libraries">组件库</u-sidebar-item>
</u-sidebar>
```

### 分组

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>默认，无折叠功能</p>
            <u-sidebar>
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>链接</u-sidebar-item>
                    <u-sidebar-item>按钮</u-sidebar-item>
                    <u-sidebar-item>标签</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item>导航栏</u-sidebar-item>
                    <u-sidebar-item to="/cloud-ui/u-sidebar">侧边栏</u-sidebar-item>
                    <u-sidebar-item>标签页</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Form">
                    <u-sidebar-item>单行输入</u-sidebar-item>
                    <u-sidebar-item>多行输入</u-sidebar-item>
                    <u-sidebar-item>选择框</u-sidebar-item>
                    <u-sidebar-item>表单</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>开启折叠功能</p>
            <u-sidebar collapsible>
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>链接</u-sidebar-item>
                    <u-sidebar-item>按钮</u-sidebar-item>
                    <u-sidebar-item>标签</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation" expanded disabled>
                    <u-sidebar-item>导航栏</u-sidebar-item>
                    <u-sidebar-item to="/cloud-ui/u-sidebar">侧边栏</u-sidebar-item>
                    <u-sidebar-item>标签页</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Form" :collapsible="false">
                    <u-sidebar-item>单行输入</u-sidebar-item>
                    <u-sidebar-item>多行输入</u-sidebar-item>
                    <u-sidebar-item>选择框</u-sidebar-item>
                    <u-sidebar-item>表单</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>手风琴模式</p>
            <u-sidebar collapsible accordion>
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>链接</u-sidebar-item>
                    <u-sidebar-item>按钮</u-sidebar-item>
                    <u-sidebar-item>标签</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item>导航栏</u-sidebar-item>
                    <u-sidebar-item to="/cloud-ui/u-sidebar">侧边栏</u-sidebar-item>
                    <u-sidebar-item>标签页</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Form">
                    <u-sidebar-item>单行输入</u-sidebar-item>
                    <u-sidebar-item>多行输入</u-sidebar-item>
                    <u-sidebar-item>选择框</u-sidebar-item>
                    <u-sidebar-item>表单</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
    </u-grid-layout-row>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>触发方式：整行点击均可触发（默认）</p>
            <u-sidebar collapsible expand-trigger="click">
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>链接</u-sidebar-item>
                    <u-sidebar-item>按钮</u-sidebar-item>
                    <u-sidebar-item>标签</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item>导航栏</u-sidebar-item>
                    <u-sidebar-item to="/cloud-ui/u-sidebar">侧边栏</u-sidebar-item>
                    <u-sidebar-item>标签页</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>触发方式：仅点击小箭头时触发</p>
            <u-sidebar collapsible expand-trigger="click-expander">
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>链接</u-sidebar-item>
                    <u-sidebar-item>按钮</u-sidebar-item>
                    <u-sidebar-item>标签</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item>导航栏</u-sidebar-item>
                    <u-sidebar-item to="/cloud-ui/u-sidebar">侧边栏</u-sidebar-item>
                    <u-sidebar-item>标签页</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

### 侧边栏折叠

``` vue
<template>
<u-linear-layout direction="vertical" gap="small">
    <u-capsules v-model="collapse">
        <u-capsule :value="false">展开</u-capsule>
        <u-capsule :value="true">折叠</u-capsule>
    </u-capsules>
    <u-sidebar :collapse="collapse" collapsible :style="{ width: collapse ? '64px' : '200px' }">
        <u-sidebar-group>
            <div slot="title"><i-icon name="search"></i-icon> <span v-if="!collapse">Basic</span></div>
            <u-sidebar-item>链接</u-sidebar-item>
            <u-sidebar-item>按钮</u-sidebar-item>
            <u-sidebar-item>标签</u-sidebar-item>
        </u-sidebar-group>
        <u-sidebar-group title="Navigation">
            <div slot="title"><i-icon name="portrait"></i-icon> <span v-if="!collapse">Navigation</span></div>
            <u-sidebar-item>导航栏</u-sidebar-item>
            <u-sidebar-item to="/cloud-ui/u-sidebar">侧边栏</u-sidebar-item>
            <u-sidebar-item>标签页</u-sidebar-item>
        </u-sidebar-group>
        <u-sidebar-group title="Form">
            <div slot="title"><i-icon name="apm-alert"></i-icon> <span v-if="!collapse">Form</span></div>
            <u-sidebar-item>单行输入</u-sidebar-item>
            <u-sidebar-item>多行输入</u-sidebar-item>
            <u-sidebar-item>选择框</u-sidebar-item>
            <u-sidebar-item>表单</u-sidebar-item>
        </u-sidebar-group>
    </u-sidebar>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            collapse: false,
        };
    },
};
</script>
```

### 颜色扩展

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <u-sidebar style="width: 200px;">
                <u-sidebar-item>指南</u-sidebar-item>
                <u-sidebar-item>概念</u-sidebar-item>
                <u-sidebar-item>配置</u-sidebar-item>
                <u-sidebar-divider></u-sidebar-divider>
                <u-sidebar-item to="/cloud-ui">组件</u-sidebar-item>
                <u-sidebar-item to="/libraries">组件库</u-sidebar-item>
            </u-sidebar>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <u-sidebar style="width: 200px;" color="inverse">
                <u-sidebar-item>指南</u-sidebar-item>
                <u-sidebar-item>概念</u-sidebar-item>
                <u-sidebar-item>配置</u-sidebar-item>
                <u-sidebar-divider></u-sidebar-divider>
                <u-sidebar-item to="/cloud-ui">组件</u-sidebar-item>
                <u-sidebar-item to="/libraries">组件库</u-sidebar-item>
            </u-sidebar>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
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
| $event.itemVM | USidebarItem | 选择项子组件 |
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
| $event.itemVM | USidebarItem | 选择项子组件 |
| $event.oldVM | USidebarItem | 旧的选择项子组件 |
| senderVM | USidebar | 发送事件实例 |

#### @toggle

展开/折叠某分组时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.expanded | boolean | 展开/折叠状态 |
| $event.groupVM | USidebarGroup | 分组组件 |
| senderVM | Vue | 发送事件实例 |

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
| value | any |  |  | 此项的值 |
| disabled | boolean |  | `false` | 禁用此项 |
| item | object |  |  | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |
| linkType | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'destination'` | 链接类型 |
| hrefAndTo | string |  |  | 链接地址 |
| target | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'_blank'` | 链接跳转方式 |
| to | string, Location |  |  | 需要 vue-router，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。 |
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
| $event.itemVM | USidebarItem | 此组件 |
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

### Events

#### @before-toggle

展开/折叠此分组前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.expanded | boolean | 展开/折叠状态 |
| $event.groupVM | USidebarGroup | 分组组件 |
| $event.preventDefault | Function | 阻止展开/折叠流程 |
| senderVM | Vue | 发送事件实例 |

#### @toggle

展开/折叠某分组时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.expanded | boolean | 展开/折叠状态 |
| $event.groupVM | USidebarGroup | 分组组件 |
| senderVM | Vue | 发送事件实例 |

## USidebarDivider API

暂无
