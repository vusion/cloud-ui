<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# USteps 步骤条

**块级展示**

## 示例
### 基本用法

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

## USteps API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | number |  | `0` | 当前步骤数 |
| readonly | boolean |  | `false` | 是否只读。非只读的情况下可以选择 |
| disabled | boolean |  | `false` | 是否禁用 |

### Slots

#### (default)

插入`<u-step>`子组件。

### Events

#### @before-select

选择某一步骤前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 选中步骤的值 |
| $event.oldValue | any | 旧的值 |
| $event.itemVM | UStep | 选中步骤实例 |
| $event.oldVM | UStep | 旧的选中步骤实例 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | USteps | 发送事件实例 |

#### @select

选择某一步骤时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 选中步骤的值 |
| $event.oldValue | any | 旧的值 |
| $event.itemVM | UStep | 选中步骤实例 |
| $event.oldVM | UStep | 旧的选中步骤实例 |
| senderVM | USteps | 发送事件实例 |

## UStep API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  | 步骤名 |
| disabled | boolean |  | `false` | 是否禁用此标签页 |

### Slots

#### (default)

插入文本或 HTML。

#### title

自定义标题文本。
