<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UInput 单行输入

**表单控件**, **行内展示**

基本的表单输入组件，在原生`<input>`控件基础上进行了一些功能扩展。

## 示例
### 基本用法

大部分属性与原生`<input>`控件一致。

``` html
<u-input maxlength="12" placeholder="1~12位小写字母" autofocus></u-input>
```

### 加密

将`type`属性设置为`password`可以加密显示。

``` html
<u-input type="password" maxlength="12" placeholder="请输入密码"></u-input>
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

### 添加图标

```html
<u-linear-layout>
    <u-input prefix="search" clearable size="normal medium" placeholder="1~12位小写字母" autofocus></u-input>
    <u-input suffix="search" clearable size="normal medium" placeholder="1~12位小写字母" autofocus></u-input>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| type | string |  | `'text'` | 输入框的类型，目前支持两种：`'text'`和`'password'` |
| value.sync, v-model | string |  |  | 输入框的值 |
| default-value.sync, v-model | string |  |  | 默认值。即 reset 方法恢复的值。 |
| clearable | boolean |  |  | 是否可清空。开启并在输入框有内容时会显示清空按钮。 |
| placeholder | string |  |  | 原生属性。对 IE9 做了兼容。 |
| minlength | number |  |  | 原生属性 |
| maxlength | number |  |  | 原生属性 |
| spellcheck | boolean |  |  | 原生属性 |
| autofocus | boolean |  |  | 是否自动获取焦点 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |
| size | string |  | `'normal'` | 大小扩展，支持一个值：`'mini'`, `'small'`, `'normal'`, `'large'`, `'huge'`, `'full'`，或两个值的组合，前者表示高度，后者表示宽度，类似CSS的padding书写格式 |
| search | string |  |  | 搜索标志，支持位置自定义，默认搜索标志在最右边，值为`left`即表示搜索标志在左边 |
| maxlengthMessage | string |  |  | 输入内容达到上限时的错误提示，且被 [FormItem](#/components/u-form) 包裹时生效 |

### Slots

#### (default)

插入  HTML或 `Component`, 可展示额外内容。

### Events

#### @before-input

输入前触发。可以在这个阶段阻止输入，或者修改输入的值 $event.value

| Param | Type | Description |
| ----- | ---- | ----------- |
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
| $event.value | string | 清空后的值 |
| $event.oldValue | string | 待清空的值 |
| $event.preventDefault | Function | 阻止清空流程 |
| senderVM | UInput | 发送事件实例 |

#### @clear

清空时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | string | 清空后的值 |
| $event.oldValue | string | 旧的值 |
| senderVM | UInput | 发送事件实例 |

### Methods

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
