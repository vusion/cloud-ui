# 多行输入 Textarea

## 示例
### 基本形式

大部分属性与`<textarea>`元素一致。

``` html
<u-textarea placeholder="Details" autofocus></u-textarea>
```

### 双向绑定

使用`v-model`或`:value.sync`进行双向绑定。

``` vue
<template>
<u-linear-layout>
    <u-textarea v-model="value" placeholder="请输入"></u-textarea>
    <u-textarea :value.sync="value" placeholder="请输入"></u-textarea>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: '一段很长很长的文本',
        };
    },
};
</script>
```

### 只读与禁用

``` html
<u-linear-layout>
    <u-textarea value="只读" readonly></u-textarea>
    <u-textarea value="禁用" disabled></u-textarea>
</u-linear-layout>
```

### 调整大小

通过设置`resize`属性，决定水平垂直方向是否可以调整大小。

``` html
<u-linear-layout direction="vertical">
    <div><u-textarea placeholder="none" resize="none"></u-textarea></div>
    <div><u-textarea placeholder="vertical（默认）" resize="vertical"></u-textarea></div>
    <div><u-textarea placeholder="horizontal" resize="horizontal"></u-textarea></div>
    <div><u-textarea placeholder="both" resize="both"></u-textarea></div>
</u-linear-layout>
```

### 可清空

开启`clearable`属性，在输入框有内容时会显示清空按钮。

``` html
<u-textarea value="可清空" clearable></u-textarea>
```

### 展示方式

默认为行内展示，可以将`display`设置为块级展示。

``` html
<u-linear-layout direction="vertical" gap="small">
    <u-textarea placeholder="行内展示（默认）"></u-textarea> 与文字对齐
    <u-textarea display="block" placeholder="块级展示"></u-textarea>
</u-linear-layout>
```

### 大小扩展

```html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-textarea size="normal" value="normal" readonly></u-textarea>
        <u-textarea size="normal large" value="normal large" readonly></u-textarea>
    </u-linear-layout>
    <u-linear-layout>
        <u-textarea size="medium" value="medium" readonly></u-textarea>
    </u-linear-layout>
    <u-linear-layout>
        <u-textarea size="large" value="large" readonly></u-textarea>
    </u-linear-layout>
    <u-linear-layout>
        <u-textarea size="huge" value="huge" readonly></u-textarea>
    </u-linear-layout>
    <u-linear-layout>
        <u-textarea size="huge full" value="huge full" readonly></u-textarea>
    </u-linear-layout>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | String | | 输入框的值 |
| value.sync, v-model | String | | 输入框的值 |
| defaultValue.sync, v-model | String | | 默认值。即 reset 方法恢复的值。 |
| clearable | Boolean | | 是否可清空。开启并在输入框有内容时会显示清空按钮。 |
| placeholder | String | | 原生属性。对 IE9 做了兼容。 |
| minlength | Number | | 原生属性 |
| maxlength | Number | | 原生属性 |
| spellcheck | Boolean | | 原生属性 |
| autofocus | Boolean | | 是否自动获取焦点 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| resize | String | `'none'` | 是否可以调整大小。可选值：`'none'`、`'both'`、`'horizontal'`、`'vertical'` |

<!-- | autosize | String | `'none'` | 自适应内容宽高。可选值：`none`、`both`、`horizontal`、`vertical` | -->

### Events
#### @input

输入时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | 输入框的值 |
| senderVM | UTextarea | 发送事件实例 |

#### @change

值变化时触发。（注意：与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 改变后的值 |
| $event.oldValue | String | 旧的值 |
| senderVM | UTextarea | 发送事件实例 |

#### @focus

获得焦点时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | FocusEvent | 原生事件对象 |
| senderVM | UTextarea | 发送事件实例 |

#### @blur

失去焦点时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | FocusEvent | 原生事件对象 |
| senderVM | UTextarea | 发送事件实例 |

#### @before-clear

清空前触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 清空后的值 |
| $event.oldValue | String | 待清空的值 |
| $event.preventDefault | Function | 阻止清空流程 |
| senderVM | UTextarea | 发送事件实例 |

#### @clear

清空时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 清空后的值 |
| $event.oldValue | String | 旧的值 |
| senderVM | UTextarea | 发送事件实例 |

#### @before-reset

重置前触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 重置后的值 |
| $event.oldValue | String | 待重置的值 |
| $event.preventDefault | Function | 阻止重置流程 |
| senderVM | UTextarea | 发送事件实例 |

#### @reset

重置时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 重置后的值 |
| $event.oldValue | String | 旧的值 |
| senderVM | UTextarea | 发送事件实例 |

### Methods

#### focus()

让输入框获取焦点。

| Param | Type | Description |
| ----- | ---- | ----------- |

#### blur()

让输入框失去焦点。

| Param | Type | Description |
| ----- | ---- | ----------- |

#### clear()

清空输入框。

| Param | Type | Description |
| ----- | ---- | ----------- |

#### reset()

重置输入框。

| Param | Type | Description |
| ----- | ---- | ----------- |
