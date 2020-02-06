# 步骤条 Steps

## 示例
### 基本形式

步骤从`0`开始。

``` html
<u-steps :value="1">
    <u-step title="Step1">Content1</u-step>
    <u-step title="Step2">Content2</u-step>
    <u-step title="Step3">Content3</u-step>
</u-steps>
```

### 自定义标题

``` html
<u-steps :value="1">
    <u-step>
        <span slot="title">Step <u-label>1</u-label></span>
        Content1
    </u-step>
    <u-step>
        <span slot="title">Step <u-label>2</u-label></span>
        Content2
    </u-step>
    <u-step>
        <span slot="title">Step <u-label>3</u-label></span>
        Content3
    </u-step>
</u-steps>
```

### 宽度自适应

``` html
<u-steps :value="1" size="auto">
    <u-step title="Step1">Content1</u-step>
    <u-step title="Step2">Content2</u-step>
    <u-step title="Step3">Content3</u-step>
</u-steps>
```

### 可选择

将`readonly`属性设置为`false`，可以进行选择。

``` html
<u-steps :value="1" :readonly="false">
    <u-step title="Step1">Content1</u-step>
    <u-step title="Step2">Content2</u-step>
    <u-step title="Step3">Content3</u-step>
</u-steps>
```

### 工具提示

设置`tooltip`属性或`tooltip`插槽，可以添加工具提示。

``` html
<u-steps :value="1" :readonly="false">
    <u-step tooltip="使用属性添加工具提示"></u-step>
    <u-step>
        <div slot="tooltip">使用 Slot 添加工具提示</div>
    </u-step>
    <u-step>
        <div slot="tooltip">使用 Slot 添加工具提示</div>
    </u-step>
</u-steps>
```

### 图形大小

``` html
<u-steps :value="1" :readonly="false" shape-size="large">
    <u-step title="Step1">Content1</u-step>
    <u-step title="Step2">Content2</u-step>
    <u-step title="Step3">Content3</u-step>
</u-steps>
```

### 禁用

``` html
<u-steps :value="0" :readonly="false">
    <u-step title="Step1">Content1</u-step>
    <u-step title="Step2" disabled>Content2</u-step>
    <u-step title="Step3">Content3</u-step>
</u-steps>
```

## Steps API
### Props/Attrs
| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Number | `0` | 当前步骤数 |
| shape-size | String | `'normal'` | 图形大小 |
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
| itemVM | Step | 选中步骤实例 |
| $event.preventDefault | Function | 阻止选择流程 |

#### @select

选择某一步骤时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Any | 选中步骤的值 |
| oldValue | Any | 旧的值 |
| itemVM | Step | 选中步骤实例 |

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
| tooltip | String |  | 添加提示 |
| disabled | Boolean | `false` | 是否禁用此标签页 |

### Slots

#### (default)

插入文本或 HTML。

#### title

自定义标题文本。
