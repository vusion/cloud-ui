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
    <u-calendar :value.sync="value" @before-select="onBeforeSelect" @change="onChange" @select="onSelect" @input="onInput"></u-calendar>
    <u-button @click="allowSelect = !allowSelect">{{allowSelect? 'Allow' : 'Forbidden'}} select</u-button>
</div>
</template>
<script>
export default {
    data() {
        return {
            value: '2018-3-10',
            allowSelect: true,
        };
    },
    watch: {
        // value格式同传入格式
        value(newValue, oldValue) {
            console.log('value watch:', newValue, oldValue);
        }
    },
    methods: {
        onBeforeSelect(event) {
            console.log('before-select', event);
            if(!this.allowSelect) 
                event.preventDefault();
        },
        onChange(event) {
            console.log('change', event);
        },
        onSelect(event) {
            console.log('select', event);
        },
        onInput(event) {
            console.log('input', event);
        },
    }
};
</script>
```
### 年月日
<!-- #### 可向上跳转 -->
``` html
<u-calendar tag="100" ></u-calendar>
<u-calendar tag="110" ></u-calendar>
<u-calendar tag="111" ></u-calendar>
```
<!-- #### 不跳转
``` html

<u-calendar-year ></u-calendar-year>
<u-calendar-month ></u-calendar-month>
<u-calendar-day ></u-calendar-day>
``` -->

### 只读 readonly 和 禁用 disabled 
``` html
<u-calendar value="2018-08-08" readonly ></u-calendar>
<u-calendar value="2018-08-08" disabled ></u-calendar>
```

### 最大值maxDate 最小值minDate
``` html
<u-calendar value="2018-08-18" min-date="2017-08-02" max-date="2018-08-21"></u-calendar>
```

### 多日期范围
``` html
<u-calendar value="2018-08-18" :date-range="[['2010-10-10', '2011-03-01'], ['2013-01-01', '2018-10-10']]"></u-calendar>
```

### 事件
``` vue
<template>
    <u-calendar :value.sync="value" @change="onChange" @select="onSelect"  @before-select="onBeforeSelect" @input="onInput"></u-calendar>
</template>

<script>
export default {
    data() {
        return {
            value: '2018-09-09',
        }
    },
    watch: {
        value(date, oldDate) {
            console.log('value watch: ', date, oldDate);
        },
    },
    methods: {
        onChange($event) {
            console.log('change', $event); // value改变触发
        },
        onSelect($event) {
        	console.log('select', $event); // 选择日历触发
        },
        onBeforeSelect($event) {
        	console.log('before-select', $event);
        },
        onInput($event) {
        	console.log('input', $event);
        },
    },
};
</script>
```

## Calendar API
### Props/Attrs
| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync | [String, Number, Date] | new Date() | 当前日期 |
| dateRange | [String, Number, Date] | Array[] | 可选择的日期范围，可设置多个范围 |
| minDate | [String, Number, Date] |  | 最小日期 |
| maxDate | [String, Number, Date] |  | 最大日期 |
| disabled | Boolean | `false` | 禁用 |
| readonly | Boolean | `false` | 只读 |
| formatter | String | `YYYY-MM-DD` | value类型为String时，抛出时间的格式。合法格式参照[date-fns](https://date-fns.org/v1.29.0/docs/format) |

### Events 
#### @before-select
选择日期前
| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止日期选择 |

#### @select
select事件触发：用户点击
| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Date | 当前选择日期 |
| oldValue | Date | 旧值 |

#### @change
日期改变时触发
| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Date | 当前选择日期 |
| oldValue | Date | 旧值 |

#### @input
日期改变时触发
| Param | Type | Description |
| ----- | ---- | ----------- |
| value | [String, Number, Date] | 1. 组件prop.value没设置或传入String，返回formatter格式数据。2. 同prop.value格式 |