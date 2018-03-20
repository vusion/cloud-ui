# 日历 Calendar

## 示例
### 基本

默认打开当前时间日历，但不选中日期。
```html
<u-calendar></u-calendar>
<u-calendar showDate="2018-01-01"></u-calendar>
```

### 事件
``` vue
<template>
<div>
    <u-calendar :date.sync="date" @before-change="onBeforeChange($event)" @change="onChange($event)" @select="onSelect($event)"></u-calendar>
    <u-button @click="allowChange = !allowChange">{{allowChange? 'Allow' : 'Forbidden'}} change</u-button>
</div>
</template>
<script>
export default {
    data() {
        return {
            date: '2018-3-10',
            allowChange: true,
        };
    },
    watch: {
        // date在Forbidden时也会改变，不准确。
        date(newValue, oldValue) {
            console.log('date wacht:', newValue, oldValue);
        }
    },
    methods: {
        onBeforeChange(event) {
            console.log('before-change', event);
            if(!this.allowChange) 
                event.preventDefault();
        },
        onChange(event) {
            console.log('change', event);
        },
        onSelect(event) {
            console.log('select', event);
        },
    }
};
</script>
```
### 年月日
#### 可向上跳转
``` html

<u-calendar tag="100" style="vertical-align: top;"></u-calendar>
<u-calendar tag="110" style="vertical-align: top;"></u-calendar>
<u-calendar tag="111" style="vertical-align: top;"></u-calendar>
```
<!-- #### 不跳转
``` html

<u-calendar-year style="vertical-align: top;"></u-calendar-year>
<u-calendar-month style="vertical-align: top;"></u-calendar-month>
<u-calendar-day style="vertical-align: top;"></u-calendar-day>
``` -->

### 只读 readonly 和 禁用 disabled 
``` html
<u-calendar date="2018-08-08" readonly style="vertical-align: top;"></u-calendar>
<u-calendar date="2018-08-08" disabled style="vertical-align: top;"></u-calendar>
```

### 最大值maxDate 最小值minDate
``` html
<u-calendar date="2018-08-18" min-date="2017-08-02" max-date="2018-08-21"></u-calendar>
```

### 多日期范围
``` html
<u-calendar date="2018-08-18" :date-range="[['2010-10-10', '2012-01-01'], ['2013-01-01', '2018-10-10']]"></u-calendar>
```

## Calendar API
### Props/Attrs
| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| date.sync | [String, Number, Date] | new Date() | 当前日期 |
| dateRange | [String, Number, Date] | Array[] | 可选择的日期范围，可设置多个范围 |
| minDate | [String, Number, Date] |  | 最小日期 |
| maxDate | [String, Number, Date] |  | 最大日期 |
| disabled | Boolean | false | 禁用 |
| readonly | Boolean | false | 只读 |

### Events 
#### @before-change
日期改变前触发
| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止日期改变 |

#### @change
日期改变时触发
| Param | Type | Description |
| ----- | ---- | ----------- |
| sender | Object | 事件发送对象 |
| value | Date | 当前选择日期 |
| oldValue | Date | 旧值 |

#### @select
select事件触发：用户点击
| Param | Type | Description |
| ----- | ---- | ----------- |
| sender | Object | 事件发送对象 |
| value | Date | 当前选择日期 |
| oldValue | Date | 旧值 |

