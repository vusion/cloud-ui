# 单行输入 Input

## 示例
### 基本形式

大部分属性与`<input>`元素一致。

``` html
<u-input maxlength="12" placeholder="1~12位小写字母" autofocus></u-input>
```

### 加密

``` html
<u-input type="password" maxlength="12" placeholder="请输入密码"></u-input>
```

### 数字

使用`v-model`的`number`修饰符，可以轻松将输入值转成number类型。

``` vue
<template>
<div>
    <u-input v-model.number="value" maxlength="12" placeholder="请输入端口号" @input="onInput"></u-input>
    输出：{{ output }}
</div>
</template>

<script>
export default {
    data() {
        return {
            value: 3306,
            output: '',
        };
    },
    methods: {
        onInput(value) {
            this.output = JSON.stringify({
                inputValue: value,
                modelValue: this.value,
            });
        },
    },
};
</script>
```

### 只读与禁用

``` html
<u-linear-layout>
    <u-input value="只读" readonly></u-input>
    <u-input value="禁用" disabled></u-input>
</u-linear-layout>
```

### 大小扩展

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-input size="mini" value="mini" readonly></u-input>
        <u-input size="mini small" value="mini small" readonly></u-input>
        <u-input size="mini normal" value="mini normal" readonly></u-input>
        <u-input size="mini medium" value="mini medium" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input size="small mini" value="small mini" readonly></u-input>
        <u-input size="small" value="small" readonly></u-input>
        <u-input size="small normal" value="small normal" readonly></u-input>
        <u-input size="small medium" value="small medium" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input size="normal mini" value="normal mini" readonly></u-input>
        <u-input size="normal small" value="normal small" readonly></u-input>
        <u-input value="normal" readonly></u-input>
        <u-input size="normal medium" value="normal medium" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input size="medium mini" value="medium mini" readonly></u-input>
        <u-input size="medium small" value="medium small" readonly></u-input>
        <u-input size="medium normal" value="medium normal" readonly></u-input>
        <u-input size="medium" value="medium" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input size="large" value="large" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input size="huge" value="huge" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input size="huge full" value="huge full" readonly></u-input>
    </u-linear-layout>
</u-linear-layout>
```

### 删除功能
```html
<u-input close size="normal large" placeholder="1~12位小写字母" autofocus></u-input>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| type | String | `'text'` | 输入框的类型，目前只支持两种：`'text'`和`'password'` |
| value | String | | 输入框的值 |
| placeholder | String | | 原生属性 |
| maxlength | Number | | 原生属性 |
| autofocus | Boolean | | 原生属性 |
| readonly | Boolean | | 原生属性 |
| disabled | Boolean | | 原生属性 |
| size | String | `'normal'` | 大小扩展，支持一个值：`'mini'`, `'small'`, `'normal'`, `'large'`, `'huge'`, `'full'`，或两个值的组合，前者表示高度，后者表示宽度，类似CSS的padding书写格式 |
| close | Boolean | `'false'` | 删除功能，默认值`false`，当值为`true`并且输入框有输入内容才显示 |
| maxlengthMessage | String | | 输入内容达到上限时的错误提示，且被 [FormItem](#/components/u-form) 包裹时生效 |

### Slots

#### (default)

插入 `HTML`或 `Component`, 可展示额外内容。

### Events

#### @input

输入时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | 输入框的值 |

#### @change

值变化时触发（与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 改变后的值 |
| $event.oldValue | String | 旧的值 |

#### @focus

获得焦点时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | 原生事件对象 |

#### @blur

失去焦点时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | 原生事件对象 |

#### @reset

点击删除icon时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | 重置后的值 |

### Methods
#### focus

使输入框处于焦点状态

| Param | Type | Description |
| ----- | ---- | ----------- |
| |  |  |

#### blur

使输入框失去焦点

| Param | Type | Description |
| ----- | ---- | ----------- |
| |  |  |

#### removeValue()

删除输入值
