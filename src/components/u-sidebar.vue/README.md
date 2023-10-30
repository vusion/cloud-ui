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
    - [Events](#events)
    - [Methods](#methods)
- [USidebarItem API](#usidebaritem-api)
    - [Props/Attrs](#propsattrs-2)
    - [Events](#events-2)
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

``` html {width: 30%}
<u-sidebar collapsible>
    <u-sidebar-group title="导航一">
        <u-sidebar-item text="选项一"></u-sidebar-item>
            <u-sidebar-group title="导航二">
                <u-sidebar-item text="选项一"></u-sidebar-item>
            </u-sidebar-group>
    </u-sidebar-group>
    <u-sidebar-group title="导航二">
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
| has-data-source | boolean |  | `false` | undefined |
| data-source | Array\<Item\> \| Function \| object \| DataSource |  |  | 展示数据的输入源，可设置为集合类型变量（List<T>）或输出参数为集合类型的逻辑。 |
| data-schema | schema |  |  | 数据源返回的数据结构的类型，自动识别类型进行展示说明 |
| text-field | string |  | `'text'` | 集合的元素类型中，用于显示文本的属性名称 |
| value-field | string |  | `'value'` | 集合的元素类型中，用于标识选中值的属性 |
| icon-field | string |  | `'icon'` | 集合的元素类型中，用于图标的属性名称 |
| to-field | string |  | `'to'` | 集合的元素类型中，用于跳转链接的属性名称 |
| parent-field | string |  | `''` | 集合的元素类型中，用于标识父节点的属性 |
| router | boolean |  | `true` | 是否根据 vue-router 来控制选择哪一项 |
| value.sync, v-model | any |  |  | 当前选中的值 |
| collapsible | boolean |  | `false` | 设置菜单项是否可以展开/折叠 |
| accordion | boolean |  | `false` | 设置是否每次只展开一个 |
| expand-trigger | string | `[object Object]`<br/>`[object Object]` | `'click'` | 展开/折叠操作的触发方式 |
| enable-collapse | boolean |  | `false` | 设置侧边栏是否可以展开/折叠 |
| collapseMode | string | `[object Object]`<br/>`[object Object]` | `'expand'` | 侧边栏是否折叠 |
| expand-icon | icon |  | `'expand'` | 侧边栏展开图标 |
| fold-icon | icon |  | `'fold'` | 侧边栏折叠图标 |
| readonly | boolean |  | `false` | 正常显示，但禁止选择/输入 |
| disabled | boolean |  | `false` | 置灰显示，且禁止任何交互（焦点、点击、选择、输入等） |

### Slots

#### (default)

插入`<u-sidebar-item>`、`<u-sidebar-divider>`或`<u-sidebar-group>`子组件。

### Events

#### @select

选择某一项后触发。

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
| item | object |  |  | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |
| to | string, Location |  |  | 需要 vue-router，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。 |
| replace | boolean |  | `false` | 需要 vue-router，与`<router-link>`的`replace`属性相同。如果为`true`，当点击时，会调用`router.replace()`而不是`router.push()`，于是导航后不会留下`history `记录。 |
| exact | boolean |  | `false` | 需要 vue-router，与`<router-link>`的`exact`属性相同。是否与路由完全一致时才高亮显示。 |
| value | any |  |  | 用于标识此项的值 |
| icon | icon |  | `''` |  |
| linkType | string | `[object Object]`<br/>`[object Object]` | `'destination'` |  |
| hrefAndTo | string |  |  |  |
| target | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'_self'` | 链接跳转的打开方式，父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则其打开方式同当前窗口。 |
| disabled | boolean |  | `false` | 置灰显示，且禁止任何交互（焦点、点击、选择、输入等） |

### Events

#### @$listeners

监听所有`<a>`元素的事件。

| Param | Type | Description |
| ----- | ---- | ----------- |

#### @navigate

使用 router 相关属性切换路由后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.to | string, Location | `to`属性的值 |
| $event.replace | boolean | `replace`属性的值 |
| $event.append | boolean | `append`属性的值 |
| senderVM | UNavbarItemMulti | 发送事件实例 |

## USidebarGroup API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  | 显示的标题 |
| collapsible | boolean |  | `false` | 设置是否可以展开/折叠 |
| expanded.sync | boolean |  | `false` | 展开状态分为“True(展开)/False(折叠)”，默认为“展开” |
| disabled | boolean |  | `false` | 置灰显示，且禁止展开/折叠操作 |

### Slots

#### (default)

插入`<u-sidebar-item>`或`<u-sidebar-divider>`子组件。

#### title

自定义标题文本。

#### extra

在右侧可以附加内容。

## USidebarDivider API

暂无
