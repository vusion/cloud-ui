# 可选步骤条 ChosenSteps

## 示例
### 基本形式

步骤从`0`开始

```html
<u-chosen-steps :value="1">
    <u-chosen-step title="Step1">Content1</u-chosen-step>
    <u-chosen-step title="Step2">Content2</u-chosen-step>
    <u-chosen-step title="Step3">Content3</u-chosen-step>
</u-steps>
```

### 宽度自适应

``` html
<u-chosen-steps size="auto" :value="1">
    <u-chosen-step title="Step1">Content1</u-chosen-step>
    <u-chosen-step title="Step2">Content2</u-chosen-step>
    <u-chosen-step title="Step3">Content3</u-chosen-step>
    <u-chosen-step title="Step4">Content4</u-chosen-step>
    <u-chosen-step title="Step5">Content5</u-chosen-step>
</u-chosen-steps>
```

## Steps API
### Props/Attrs
| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Number | `0` | 当前步骤数 |
| size | String |  | 宽度是否采取自适应模式，自适应值为`'auto'` |
| pattern | String | `'normal'` | 模式参数，共有两种：`'normal'`、`'special'` |

### Slots

#### (default)

插入`<u-chosen-step>`子组件。

### Events

#### @before-select

选择某一步骤前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Any | 选中项的值 |
| oldValue | Any | 旧的值 |
| itemVM | Tab | 选中项实例 |
| $event.preventDefault | Function | 阻止选择流程 |

#### @change

步骤数改变后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Number | 当前步骤数 |
| oldValue | Number | 旧的步骤数 |


## Step API
### Props/Attrs
| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String |  | 步骤名 |

### Slots

#### (default)

插入文本或 HTML。

#### title

自定义标题文本。

