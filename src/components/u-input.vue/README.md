<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UInput 单行输入

- [示例](#示例)
    - [基本用法](#基本用法)
    - [加密](#加密)
    - [双向绑定](#双向绑定)
    - [只读和禁用](#只读和禁用)
    - [可清除](#可清除)
    - [展示方式](#展示方式)
    - [大小扩展](#大小扩展)
    - [添加图标](#添加图标)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
    - [Methods](#methods)

**Form**

基本的表单输入组件

## 示例
### 基本用法

大部分属性与原生`<input>`控件一致。

``` html
<u-input maxlength="12" placeholder="1~12位小写字母" autofocus></u-input>
```

### 加密

将`type`属性设置为`password`可以加密显示，`password` 属性增加密码显示按钮。

``` html
<u-input type="password" password maxlength="12" placeholder="请输入密码"></u-input>
```

### 双向绑定

使用`v-model`或`:value.sync`进行双向绑定。

提示：如果需要绑定的值自动转换为 number 类型，可以使用`number`修饰符。

``` vue
<template>
<u-linear-layout>
    <u-input v-model="value" maxlength="12" placeholder="请输入端口号"></u-input>
    <u-input :value.sync="value" maxlength="12" placeholder="请输入端口号"></u-input>
    <u-input v-model.number="numberValue" maxlength="12" placeholder="请输入端口号"></u-input>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: '3306',
            numberValue: 3306,
        };
    },
};
</script>
```

### 只读和禁用

``` html
<u-linear-layout>
    <u-input value="只读" readonly></u-input>
    <u-input value="禁用" disabled></u-input>
</u-linear-layout>
```

### 可清除

开启`clearable`属性，在输入框有内容时会显示清空按钮。

``` html
<u-input value="可清除" clearable></u-input>
```

### 展示方式

默认为行内展示，可以将`display`设置为块级展示。

``` html
<u-linear-layout direction="vertical" gap="small">
    <u-input maxlength="12" placeholder="行内展示（默认）"></u-input> 与文字对齐
    <u-input display="block" maxlength="12" placeholder="块级展示"></u-input>
</u-linear-layout>
```

### 大小扩展

由`width`和`height`设置输入框宽高，默认值为`normal`，候选值包括：`mini`、`small`、`normal`、`medium`、`large`、`huge`、`full`。

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-input width="mini" height="mini" value="width: mini, height:mini" readonly></u-input>
        <u-input width="small" height="mini" value="width: small, height: mini" readonly></u-input>
        <u-input width="normal" height="mini" value="width: normal, height: mini" readonly></u-input>
        <u-input width="medium" height="mini" value="width: medium, height: mini" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input width="mini" height="small" value="width: mini, height:small" readonly></u-input>
        <u-input width="small" height="small" value="width: small, height: small" readonly></u-input>
        <u-input width="normal" height="small" value="width: normal, height: small" readonly></u-input>
        <u-input width="medium" height="small" value="width: medium, height: small" readonly></u-input>
    </u-linear-layout>
   <u-linear-layout>
        <u-input width="mini" height="normal" value="width: mini, height:normal" readonly></u-input>
        <u-input width="small" height="normal" value="width: small, height: normal" readonly></u-input>
        <u-input width="normal" height="normal" value="width: normal, height: normal" readonly></u-input>
        <u-input width="medium" height="normal" value="width: medium, height: normal" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input width="mini" height="medium" value="width: mini, height:medium" readonly></u-input>
        <u-input width="small" height="medium" value="width: small, height: medium" readonly></u-input>
        <u-input width="normal" height="medium" value="width: normal, height: medium" readonly></u-input>
        <u-input width="medium" height="medium" value="width: medium, height: medium" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input width="large" height="large" value="width: large, height: large" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input width="huge" height="huge" value="width: huge, height: huge" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input width="full" height="full" value="width: full, height: full" readonly></u-input>
    </u-linear-layout>
</u-linear-layout>
```

### 添加图标

```html
<u-linear-layout>
    <!-- <u-input prefix="search" clearable size="normal medium" placeholder="1~12位小写字母" autofocus></u-input> -->
    <u-input prefix="search" clearable size="normal medium" placeholder="1~12位小写字母" autofocus></u-input>
    <!-- <u-input prefix="https://static-vusion.nos-eastchina1.126.net/h5-template/svgviewer-output.svg" clearable size="normal medium" placeholder="1~12位小写字母" autofocus></u-input>
    <u-input suffix="https://static-vusion.nos-eastchina1.126.net/h5-template/svgviewer-output.svg" clearable size="normal medium" placeholder="1~12位小写字母" autofocus></u-input> -->
    <u-input suffix="search" clearable size="normal medium" placeholder="1~12位小写字母" autofocus></u-input>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| type | string | `[object Object]`<br/>`[object Object]` | `'text'` | 文本框或者密码框 |
| value.sync, v-model | string |  |  | 输入框的值 |
| clearable | boolean |  |  | 开启并在输入框有内容时会显示清除按钮 |
| password | boolean |  | `false` | 切换密码的显示/隐藏 |
| placeholder | string |  |  | 为空时的提示文本 |
| minlength | number |  |  |  |
| maxlength | number |  |  |  |
| spellcheck | boolean |  |  | 原生属性 |
| autofocus | boolean |  | `false` | 是否自动获取焦点 |
| readonly | boolean |  | `false` |  |
| disabled | boolean |  | `false` |  |
| width | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 设置单行输入框宽度大小 |
| height | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 设置单行输入框高度大小 |
| maxlengthMessage | string |  |  | 输入内容达到上限时的错误提示，且被 [FormItem](#/components/u-form) 包裹时生效 |
| prefix | string | `[object Object]` |  |  |
| suffix | string | `[object Object]` |  |  |

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
| senderVM | UInput | 发送事件实例 |

#### @change

值变化时触发。（注意：与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | string | 改变后的值 |
| $event.oldValue | string | 旧的值 |
| senderVM | UInput | 发送事件实例 |

#### @focus

获得焦点时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | FocusEvent | 原生事件对象 |
| senderVM | UInput | 发送事件实例 |

#### @blur

失去焦点时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | FocusEvent | 原生事件对象 |
| senderVM | UInput | 发送事件实例 |

#### @before-clear

清空前触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | string | 清空后的值 |
| $event.oldValue | string | 待清空的值 |
| $event.preventDefault | Function | 阻止清空流程 |
| senderVM | UInput | 发送事件实例 |

#### @clear

清空后触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | string | 清空后的值 |
| $event.oldValue | string | 旧的值 |
| senderVM | UInput | 发送事件实例 |

#### @click-prefix

点击前缀图标后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 鼠标事件对象 |

#### @click-suffix

点击后缀图标后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 鼠标事件对象 |

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

