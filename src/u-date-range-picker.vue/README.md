# 日期选择 DatePicker

## 示例
### 基本形式

#### 声明式

### 基本
``` html
<u-date-range-picker :placeholderArr="['请选择开始日期', '请选择结束日期']"></u-date-range-picker>
```




## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| date | String,Number,Date | 当天 | 初始日期值 |
| placeholder | String | 'yyyy-mm-dd' | 输入框默认值 |
| minDate | String,Number,Date | | 最小日期 |
| maxDate | String,Number,Date | | 最大日期 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| autofocus | Boolean | `false` | 文本框默认处于focus |
| alignment | String | `left` | 日历弹窗对其方式，可选值：left, right(分别对应popper组件的`bottom-start`和`bottom-end`)，以及popper的其他placement选项值 |
| dateFormat | String | `YYYY-MM-DD` | 日期显示格式，合法格式参照[date-fns](https://date-fns.org/v1.29.0/docs/format) |
| tag | String | `111` | 对年月日设置是否能选择，`1`为可选择，`0`为不可选择 |
| time | String, Number | `start` | 设置返回的日期的时分秒值，可选值为start:时分秒是0:00:00,morning:时分秒为8:00:00,end:表示时分秒为: 23:59:59, 输入整数表示对应的整数时刻，例如输入9代表时分秒为9:00:00,自定义时分秒请输入对应格式的字符串即可 |

### Events

#### @change

值变化时触发（与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.sender | Object | 发出事件的vueComponent |
| $event.date | Date | 旧日期 |
| $event.oldDate | Date | 新日期 |

#### @select

值变化时触发（与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.sender | Object | 发出事件的vueComponent |
| $event.date | Date | 选择日期 |

#### @toggle
同`u-popper`组件的`toggle`事件

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.open | Boolean | 弹出层是否打开 |