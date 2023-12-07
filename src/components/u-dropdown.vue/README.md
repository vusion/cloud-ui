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
- [UDropdownGroup API](#udropdowngroup-api)
    - [Props/Attrs](#propsattrs-3)
    - [Slots](#slots-2)

**Navigation**

下拉菜单

## 示例
### 基本用法

```html
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
<u-dropdown type="more">
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

```html
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

## 选项带图标
```html
<u-dropdown>
    <template #title="scope">
        <u-text text="下拉菜单"></u-text>
    </template>
    <u-dropdown-item icon="task" text="item"></u-dropdown-item>
    <u-dropdown-item icon="task" text="item"></u-dropdown-item>
    <u-dropdown-item icon="task" text="item"></u-dropdown-item>
    <u-dropdown-item icon="task" disabled text="item"></u-dropdown-item>
</u-dropdown>
```

## append-to body
```html
<u-dropdown append-to="body">
    <template #title="scope">
        <u-text text="下拉菜单"></u-text>
    </template>
    <u-dropdown-item icon="task" text="item"></u-dropdown-item>
    <u-dropdown-item icon="task" text="item"></u-dropdown-item>
    <u-dropdown-item icon="task" text="item"></u-dropdown-item>
    <u-dropdown-item icon="task" disabled text="item"></u-dropdown-item>
</u-dropdown>
```
## UDropdown API
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
| trigger | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'hover'` | 触发方式 |
| type | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'text'` |  |
| placement | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'bottom'` | 弹出层的弹出方向 |
| append-to | string | `[object Object]`<br/>`[object Object]` | `'reference'` | 设置弹出层依据哪个元素定位位置，可选值：`'body'`表示添加到 document.body，`'reference'`表示添加到参考元素中。 |
| router | boolean |  | `true` | 是否使用 vue-router |
| value.sync, v-model | any |  |  | 当前选中的值 |
| disabled | boolean |  | `false` | 置灰显示，且禁止任何交互（焦点、点击、选择、输入等） |

### Slots

#### (default)

插入`<u-dropdown>`子组件。

## UDropdownItem API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| text | string |  |  | 显示文本内容 |
| to | string, Location |  |  | 需要 vue-router，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。 |
| icon | icon |  | `''` |  |
| linkType | string | `[object Object]`<br/>`[object Object]` | `'destination'` |  |
| hrefAndTo | string |  |  |  |
| target | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'_self'` | 链接跳转的打开方式，父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则其打开方式同当前窗口。 |
| disabled | boolean |  | `false` | 置灰显示，且禁止任何交互（焦点、点击、选择、输入等） |

### Events

#### @click

点击此项时触发，与原生 click 事件不同的是，它只会在非只读和禁用的情况下触发。

| Param | Type | Description |
| ----- | ---- | ----------- |

## UDropdownGroup API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  | 显示的标题 |
| collapsible | boolean |  | `true` | 设置是否可以展开/折叠 |
| expanded.sync | boolean |  | `false` | 展开状态分为“True(展开)/False(折叠)”，默认为“展开” |
| disabled | boolean |  | `false` | 置灰显示，且禁止展开/折叠操作 |

### Slots

#### (default)

插入`<u-dropdown>`子组件。

