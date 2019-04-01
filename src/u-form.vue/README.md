

### 所有项内容正确可点

当表单中所有项内容均符合要求时，表单提交按钮才可点。

表现为根据每个表单控件的验证结果，使用计算属性来实时判断提交按钮是否可点。这种情况下，一般就不需要进行提交验证了。

``` vue
<template>
<u-form ref="form" gap="large" :rules="rules" @validate="canSubmit = $event.valid">
    <u-form-item label="日期" name="date">
        <u-date-time-picker :date="date"></u-date-time-picker>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" :disabled="!canSubmit" @click="submit()">提交</u-button>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            canSubmit: false,
            model: {
                username: '',
                email: '',
                phone: '',
            },
            date: new Date(),
            rules: {
                date: [
                    { type: 'date', required: true, trigger: 'input+blur', message: '请选择日期时间' },
                ],
            },
        };
    },
    mounted() {
        // 必须初始化时或在获取数据到时安静验证一次
        this.$refs.form.validate(true)
            .catch(() => {});
        // 在获取数据到时如下
        // this.getData().then(...)
        //  .then(() => this.$refs.form.validate(true))
        //  .catch(() => {});
    },
    methods: {
        submit() {
            this.$refs.form.validate()
                .then(() => alert('提交成功'))
                .catch(() => {});
        },
    },
};
</script>
```

## Form API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| model | Object | | 表单数据模型 |
| rules | Object | | 表单所有域的验证规则 |
| layout | String | `block` | 表单布局方式。可选值：`block`、`inline`。 |
| label-size | String | `normal` | 标签大小。可选值：`small`、`normal`、`large`。 |

### Slots

#### (default)

插入`<u-form-item>`子组件。

### Events

#### @validate

表单验证时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.valid | Boolean | 验证是否通过 |

### Methods

#### validate(slient)

验证此表单。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| silent | Boolean | `false` | 是否仅验证无提示。 |

#### validateItem(name, trigger, slient)

验证表单中的某一项。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| name | String | | 表单项的 name |
| trigger | String | `submit` | 触发方式，可选值：`submit`、`blur`和`input`之一，或者它们的任意组合。 |
| silent | Boolean | `false` | 是否仅验证无提示。 |

## FormItem API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| name | String | | 表单项名称，用于选择表单的模型数据和验证规则 |
| label | String | | 标签 |
| label-size | String | `'normal'` | 单独设置表单项的标签大小 |
| field-size | String | `'normal'` | 单独设置表单项的内容大小。可选值：`'full'` |
| rules | Array | | 表单项的验证规则。如果没有则会根据`name`属性从表单的`rules`中获取。 |
| ignore-rules | Boolean | `false` | 忽略验证规则。 |
| message | String | | 默认提示信息 |
| required | Boolean | `false` | 是否必填。仅显示样式，如果要验证必填项，需要在`rules`中添加必填规则。 |
| description | String | | 添加描述内容 |
| placement | String | | 值为`'bottom'`时提示信息在底部显示，改变提示信息显示位置 |
| layout | String |  | 布局方式，可选值：`'block'` |

### Slots

#### (default)

插入文本或`HTML`。

#### label

插入自定义标签标题，且 `FormItem` 中 `label`属性失效。

#### description

插入自定义描述内容，且 `FormItem` 中 `description`属性失效。

#### extra

自定义标签插入内容。

### Methods

#### validate(trigger, slient)

验证此表单项。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| trigger | String | `submit` | 触发方式，可选值：`submit`、`blur`和`input`之一，或者它们的任意组合。 |
| silent | Boolean | `false` | 是否仅验证无提示。 |
