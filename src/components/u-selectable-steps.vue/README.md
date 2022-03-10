<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# USelectableSteps 步骤条

- [示例](#示例)
    - [基本用法](#基本用法)
    - [自定义标题](#自定义标题)
    - [宽度自适应](#宽度自适应)
    - [禁用](#禁用)
    - [竖向步骤条](#竖向步骤条)
- [USelectableSteps API](#uselectablesteps-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
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
| value.sync, v-model | number |  | `0` | 当前步骤数 |
| readonly | boolean |  | `false` | 是否只读，非只读的情况下可以选择 |
| disabled | boolean |  | `false` |  |
| direction | string | `[object Object]`<br/>`[object Object]` | `'horizontal'` |  |
| size | string | `[object Object]`<br/>`[object Object]` | `'normal'` | 设置尺寸 |

### Slots

#### (default)

插入`<u-selectable-step>`子组件。

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

## USelectableStep API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  | 步骤标题文本 |
| desc | string |  | `''` | 步骤描述信息 |
| disabled | boolean |  | `false` |  |

### Slots

#### (default)

插入文本或 HTML

#### title

自定义标题文本

