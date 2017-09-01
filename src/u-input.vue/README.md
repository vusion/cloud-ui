# 单行输入

## 示例
### 基本形式

大部分属性与`<input>`元素一致。

``` html
<u-input maxlength="12" placeholder="1~12位小写字母" autofocus></u-input>
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
        <u-input size="small" value="small" readonly></u-input>
        <u-input size="small normal" value="small normal" readonly></u-input>
        <u-input size="small large" value="small large" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input size="normal small" value="normal small" readonly></u-input>
        <u-input value="normal" readonly></u-input>
        <u-input size="normal large" value="normal large" readonly></u-input>
    </u-linear-layout>
        <u-linear-layout>
        <u-input size="large small" value="large small" readonly></u-input>
        <u-input size="large normal" value="large normal" readonly></u-input>
        <u-input size="large" value="large" readonly></u-input>
    </u-linear-layout>
</u-linear-layout>
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
| size | String | `'normal'` | 大小扩展，支持一个值：`'mini'`, `'small'`, `'normal'`, `'large'`, `'huge'`。或两个值的组合，前者表示高度，后者表示宽度，类似CSS的padding |

### Slots

#### (default)

#### @input

输入时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | 选择项的值 |

#### @change

值变化时触发（与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 改变后的值 |
| $event.oldValue | Any | 旧的值 |

#### @focus

获得焦点时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | 原生事件对象 |

#### @blur

失去焦点时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | 原生事件对象 |
