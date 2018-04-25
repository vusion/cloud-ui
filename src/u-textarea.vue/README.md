# 多行输入 Textarea

## Examples
### Basic

Most attributes are inherited from `<textarea>` element.

``` html
<u-textarea placeholder="Details" autofocus></u-textarea>
```

### Readonly & Disabled

``` html
<u-linear-layout>
    <u-textarea value="Readonly" readonly></u-textarea>
    <u-textarea value="Disabled" disabled></u-textarea>
</u-linear-layout>
```
### 大小扩展

```html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-textarea size="normal" value="normal" readonly></u-textarea>
    </u-linear-layout>
    <u-linear-layout>
        <u-textarea size="large" value="large" readonly></u-textarea>
    </u-linear-layout>
    <u-linear-layout>
        <u-textarea size="huge" value="huge" readonly></u-textarea>
    </u-linear-layout>
</u-linear-layout>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
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
