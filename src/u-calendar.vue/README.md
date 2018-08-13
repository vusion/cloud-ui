# 日历 Calendar

## 示例
### 基本形式

``` html
<u-calendar></u-calendar>
```

### 只读和禁用
``` html
<u-linear-layout>
<u-calendar date="2018-08-08" readonly style="display: inline-block"></u-calendar>
<u-calendar date="2018-08-08" min-date="2017-08-08" max-date="2019-08-08" disabled style="display: inline-block"></u-calendar>
</u-linear-layout>
```

### 最大值最小值
``` html
<u-calendar date="2018-08-08" min-date="2018-08-02" max-date="2018-08-18"></u-calendar>
```

### 增加展示年份

往前往后展示5年

``` html
<u-linear-layout>
<u-calendar yearDiff="5" yearAdd="5" date="2018-08-08"></u-calendar>
</u-linear-layout>
```

## Calendar API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| date | Date/String | TODAY | 当前选择的日期 |
| minDate | Date/String | | 最小日期，如果为空则不限制 |
| maxDate | Date/String | `'text'` | 最大日期，如果为空则不限制 |
| yearDiff | String/Number | `3` | 当前年份往前展示的年数，例：当前为`2018`年，则从`2015`年开始展示 |
| yearAdd | String/Number | `1` | 当前年份往后展示的年数，例：当前为`2018`年，则展示至`2019`年 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

插入文本或 `HTML` 至日期组件底部

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