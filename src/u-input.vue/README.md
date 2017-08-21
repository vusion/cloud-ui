# 单行输入框

## 示例
### 基本形式

大部分属性与`<input>`元素一致。

``` html
<u-input maxlength="24" placeholder="1-24位小写字母、数字、或中划线组成" autofocus></u-input>
```

### 只读与禁用

``` html
<u-linear-layout>
    <u-input value="Readonly" readonly></u-input>
    <u-input value="Disabled" disabled></u-input>
</u-linear-layout>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| type | String | `'text'` | type of input, 'text'/'password' |
| value | String | | The value |
| placeholder | String | | Original attribute |
| maxlength | Number | | Original attribute |
| autofocus | Boolean | | Original attribute |
| readonly | Boolean | | Original attribute |
| disabled | Boolean | | Original attribute |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | |
