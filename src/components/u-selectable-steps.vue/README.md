<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# USelectableSteps 步骤条

- [示例](#示例)
    - [基本用法](#基本用法)
    - [自定义标题](#自定义标题)
    - [宽度自适应](#宽度自适应)
    - [禁用](#禁用)
    - [只读](#只读)
    - [指定状态](#指定状态)
    - [自定义图标](#自定义图标)
    - [竖向步骤条](#竖向步骤条)
- [USelectableSteps API](#uselectablesteps-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
    - [Methods](#methods)
- [USelectableStep API](#uselectablestep-api)
    - [Props/Attrs](#propsattrs-2)
    - [Slots](#slots-2)

**Selector**

当操作需要分步骤时使用

## 示例
### 基本用法

步骤从`0`开始

```html
<u-selectable-steps :value="1">
    <u-selectable-step title="Step1">Content1</u-selectable-step>
    <u-selectable-step title="Step2">Content2</u-selectable-step>
    <u-selectable-step title="Step3">Content3</u-selectable-step>
</u-selectable-steps>
```

### 自定义标题

``` html
<u-selectable-steps :value="1">
    <u-selectable-step>
        <span slot="title">Step <u-label>1</u-label></span>
        Content1
    </u-selectable-step>
    <u-selectable-step>
        <span slot="title">Step <u-label>2</u-label></span>
        Content2
    </u-selectable-step>
    <u-selectable-step>
        <span slot="title">Step <u-label>3</u-label></span>
        Content3
    </u-selectable-step>
</u-selectable-steps>
```

### 宽度自适应

``` html
<u-selectable-steps :value="1" size="auto">
    <u-selectable-step title="Step1">Content1</u-selectable-step>
    <u-selectable-step title="Step2">Content2</u-selectable-step>
    <u-selectable-step title="Step3">Content3</u-selectable-step>
    <u-selectable-step title="Step4">Content4</u-selectable-step>
    <u-selectable-step title="Step5">Content5</u-selectable-step>
</u-selectable-steps>
```

### 禁用

``` html
<u-selectable-steps :value="0" :readonly="false">
    <u-selectable-step title="Step1">Content1</u-selectable-step>
    <u-selectable-step title="Step2" disabled>Content2</u-selectable-step>
    <u-selectable-step title="Step3">Content3</u-selectable-step>
</u-selectable-steps>
```

### 只读

``` html
<u-selectable-steps :value="0" :readonly="false">
    <u-selectable-step title="Step1">Content1</u-selectable-step>
    <u-selectable-step title="Readonly" readonly>Readonly</u-selectable-step>
    <u-selectable-step title="Step3">Content3</u-selectable-step>
</u-selectable-steps>
```

### 指定状态

``` html
<u-selectable-steps :value="0" :readonly="false" size="auto">
    <u-selectable-step title="Step1" status="passed" >Content1</u-selectable-step>
    <u-selectable-step title="Step2" status="failed" >Content2</u-selectable-step>
    <u-selectable-step title="Step3" status="selected" >Content3</u-selectable-step>
    <u-selectable-step title="Step4" status="pending" >Content4</u-selectable-step>
</u-selectable-steps>
```

### 自定义图标

```html
<u-selectable-steps :value="1">
    <u-selectable-step title="Step1" icon="find">Content1</u-selectable-step>
    <u-selectable-step title="Step2" icon="task-done">Content2</u-selectable-step>
    <u-selectable-step title="Step3" icon="notice">Content3</u-selectable-step>
</u-selectable-steps>
```

### 竖向步骤条

``` html
<u-selectable-steps :value="0" direction="vertical">
    <u-selectable-step title="Step1">Content1</u-selectable-step>
    <u-selectable-step title="Step2">Content2</u-selectable-step>
    <u-selectable-step title="Step3">Content3</u-selectable-step>
</u-selectable-steps>
```

## USelectableSteps API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data-source | Array\<Item\> \| Function \| Object |  |  | 展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑 |
| data-schema | schema |  |  | 集合类型每一元素的数据类型 |
| title-field | string |  | `'title'` | 数据源集合的元素，用于显示步骤标题的属性 |
| desc-field | string |  | `'desc'` | 数据源集合的元素，用于显示步骤描述的属性 |
| value.sync, v-model | number |  | `0` | 设置当前处于选中状态的步骤 |
| direction | string | `[object Object]`<br/>`[object Object]` | `'horizontal'` |  |
| readonly | boolean |  | `false` | 正常显示，但禁止选择/输入 |
| disabled | boolean |  | `false` | 置灰显示，且禁止任何交互（焦点、点击、选择、输入等） |
| size | string | `[object Object]`<br/>`[object Object]` | `'normal'` |  |

### Slots

#### (default)

插入`<u-selectable-step>`子组件。

#### title



#### desc



### Events

#### @before-select

选择某一步骤前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| value | any | 选中步骤的值 |
| oldValue | any | 旧的值 |
| itemVM | SelectableStep | 选中步骤实例 |
| $event.preventDefault | Function | 阻止选择流程 |

#### @select

选择某一步骤时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| value | any | 选中步骤的值 |
| oldValue | any | 旧的值 |
| itemVM | SelectableStep | 选中步骤实例 |

#### @change

步骤数改变后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| value | number | 当前步骤数 |
| oldValue | number | 旧的步骤数 |

Methods

#### reload()

重新加载数据

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

## USelectableStep API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  | 步骤标题文本 |
| desc | string |  | `''` | 步骤描述信息 |
| status | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` |  | 若不配置该属性时，会使用步骤条的当前步骤来自动指定状态；如果该属性与当前步骤指定的状态不匹配会覆盖自动匹配的状态 |
| icon | icon |  | `''` |  |
| readonly | boolean |  | `false` | 正常显示，但禁止选择/输入 |
| disabled | boolean |  | `false` | 置灰显示，且禁止任何交互（焦点、点击、选择、输入等） |

### Slots

#### (default)

插入文本或 HTML

#### title

自定义标题文本

