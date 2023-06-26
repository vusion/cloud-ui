<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UTextarea 多行输入

- [示例](#示例)
    - [基本用法](#基本用法)
    - [双向绑定](#双向绑定)
    - [只读与禁用](#只读与禁用)
    - [调整大小](#调整大小)
    - [可清空](#可清空)
    - [展示方式](#展示方式)
    - [设置大小](#设置大小)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
    - [Methods](#methods)

**Form**

多行输入组件

## 示例
## 示例
### 基本用法

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

### 设置大小

```html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-textarea size="normal" value="normal"></u-textarea>
        <u-textarea size="normal large" value="normal large"></u-textarea>
    </u-linear-layout>
    <u-linear-layout>
        <u-textarea size="medium" value="medium"></u-textarea>
    </u-linear-layout>
    <u-linear-layout>
        <u-textarea size="large" value="large"></u-textarea>
    </u-linear-layout>
    <u-linear-layout>
        <u-textarea size="huge" value="huge"></u-textarea>
    </u-linear-layout>
    <u-linear-layout>
        <u-textarea size="huge full" value="huge full"></u-textarea>
    </u-linear-layout>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| minlength | number |  |  |  |
| spellcheck | boolean |  |  |  |
| value.sync, v-model | string |  |  | 输入的值 |
| placeholder | string |  |  | 为空时显示的占位符文本 |
| maxlength | number |  |  | 输入框内可输入的最大字符数，超过时不支持输入 |
| show-word-limit | boolean |  |  | 设置是否显示「可输入最大字符数」的字数统计 |
| limit-position | string | `[object Object]`<br/>`[object Object]` |  | 设置字数统计位置 |
| autofocus | boolean |  | `false` | 设置是否自动获取焦点 |
| clearable | boolean |  | `false` | 可点击清除按钮一键清除内容 |
| resize | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'none'` | 设置调整大小的方式 |
| readonly | boolean |  | `false` | 正常显示，但禁止选择/输入 |
| disabled | boolean |  | `false` | 置灰显示，且禁止任何交互（焦点、点击、选择、输入等） |
| size | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 设置多行输入框大小 |
| autosize | boolean, object |  |  | 可输入如{maxHeight:100,minHeight:50}，单位默认为px |

### Slots

#### (default)

插入 HTML 或 `Component`, 可展示额外内容。

### Events

#### @before-input

输入前触发。可以在这个阶段阻止输入，或者修改输入的值 $event.value

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.oldValue | string | 旧的值 |
| $event.value | string | 输入框的值 |
| $event.preventDefault | Function | 阻止输入流程 |
| senderVM | UInput | 发送事件实例 |

#### @input

输入时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | string | 输入框的值 |
| senderVM | UTextarea | 发送事件实例 |

#### @change

值变化时触发。（注意：与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | string | 改变后的值 |
| $event.oldValue | string | 旧的值 |
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
| $event | Object | 原生事件对象 |
| senderVM | UTextarea | 发送事件实例 |

#### @before-clear

清空前触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | string | 清空后的值 |
| $event.oldValue | string | 待清空的值 |
| $event.preventDefault | Function | 阻止清空流程 |
| senderVM | UTextarea | 发送事件实例 |

#### @clear

清空时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | string | 清空后的值 |
| $event.oldValue | string | 旧的值 |
| senderVM | UTextarea | 发送事件实例 |

Methods

#### focus()

让输入框获取焦点。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### blur()

让输入框失去焦点。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### clear()

清空输入框。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

