<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UCheckbox 多选框

- [示例](#示例)
    - [Basic](#basic)
    - [v-model](#v-model)
    - [Disabled](#disabled)
    - [Indeterminate](#indeterminate)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

## 示例
### Basic

``` html
<u-checkbox text="Checkbox"></u-checkbox>
```

### v-model

``` vue
<template>
<u-checkbox v-model="value" :text="value"></u-checkbox>
</template>
<script>
export default {
    data() {
        return {
            value: true,
        };
    },
};
</script>
```

### Disabled

``` html
<u-linear-layout>
    <u-checkbox :value="true" readonly text="Readonly"></u-checkbox>
    <u-checkbox :value="true" disabled text="Disabled"></u-checkbox>
</u-linear-layout>
```

### Indeterminate

``` html
<u-checkbox :value="null" text="Indeterminate"></u-checkbox>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| text | string |  |  | 文本内容 |
| value.sync, v-model | boolean \| null |  | `false` | Checked status. `null`表示不确定状态. |
| label | any |  |  | 多选框选项值，只在多选组中使用。 |
| readonly | boolean |  | `false` | Readonly |
| disabled | boolean |  | `false` | Disabled |
| autofocus | boolean |  | `false` | 自动获取焦点 |

### Events

#### @input

切换时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | boolean, null | 选中状态 |

#### @change

改变后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| newValue | boolean, null | 新的值 |
| oldValue | boolean, null | 旧的值 |

