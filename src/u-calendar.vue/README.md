# 日历 Calendar

## 示例
### 基本形式

#### 声明式

### 基本
``` html
<u-calendar date="2018-08-08"></u-calendar>
```

### 只读 readonly
``` html
<u-calendar date="2018-08-08"  readonly="readonly"></u-calendar>
```

### 最大值maxDate 最小值minDate
``` html
<u-calendar date="2018-08-08" min-date="2018-08-02" max-date="2018-08-18"></u-calendar>
```

### 禁用disabled
``` html
<u-calendar date="2018-08-08" min-date="2017-08-08" max-date="2019-08-08" disabled="disabled"></u-calendar>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| date | Date/String | TODAY | 当前选择的日期 |
| minDate | Date/String | | 最小日期，如果为空则不限制 |
| maxDate | Date/String | `'text'` | 最大日期，如果为空则不限制 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

插入文本或 HTML 至日期组件底部

### Events

#### @change

日期改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| date | Object | 改变后的日期 |

#### @select

选择某一个日期时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| date | Object | 当前选择的日期 |