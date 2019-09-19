# USelectableSteps 可选步骤条

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

## SelectableSteps API
### Props/Attrs
| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Number | `0` | 当前步骤数 |
| readonly | Boolean | `false` | 是否只读。非只读的情况下可以选择 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

插入`<u-step>`子组件。

### Events

#### @before-select

选择某一步骤前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Any | 选中步骤的值 |
| oldValue | Any | 旧的值 |
| itemVM | SelectableStep | 选中步骤实例 |
| $event.preventDefault | Function | 阻止选择流程 |

#### @select

选择某一步骤时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Any | 选中步骤的值 |
| oldValue | Any | 旧的值 |
| itemVM | SelectableStep | 选中步骤实例 |

#### @change

步骤数改变后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Number | 当前步骤数 |
| oldValue | Number | 旧的步骤数 |


## SelectableStep API
### Props/Attrs
| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String |  | 步骤名 |
| disabled | Boolean | `false` | 是否禁用此标签页 |

### Slots

#### (default)

插入文本或 HTML。

#### title

自定义标题文本。
