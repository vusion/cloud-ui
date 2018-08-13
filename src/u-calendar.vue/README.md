# 日历 Calendar

## 示例
### 基本
``` html
<u-linear-layout>
    <u-calendar></u-calendar>
    <u-calendar value="2018-08-08"></u-calendar>
</u-linear-layout>
```

### 最大值maxDate 最小值minDate
``` html
<u-calendar value="2018-08-08" min-date="2018-08-06" max-date="2018-08-18"></u-calendar>
```

### 禁用和只读
``` html
<u-linear-layout>
    <u-calendar disabled></u-calendar>
    <u-calendar value="2018-03-04" readonly></u-calendar>
</u-linear-layout>
```

### 单位选择粒度
``` vue
<template>
<u-linear-layout>
    <u-select :value.sync="selectValue" :data="selectData"></u-select>
    <u-calendar :type="selectData[selectValue].type" ></u-calendar>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        const selectData = [
            { text: '按日查询', type: 'date' },
            { text: '按月选择', type: 'month' },
            { text: '按年选择', type: 'year' },
        ];
        selectData.forEach((item, index) => {
            item.value = index;
        });
        return {
            selectData,
            selectValue: selectData[1].value,
        };
    },
};
</script>
```

### 事件
``` vue
<template>
<u-calendar :value.sync="value" @change="onChange" @select="onSelect"  @before-select="onBeforeSelect"></u-calendar>
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
    },
};
</script>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync | String,Number,Date |  | 初始日期值 |
| panelDisplayValue | String,Number,Date | `new Date()` | 初始panel显示时间，如有value，则显示value |
| minDate | String,Number,Date | | 最小日期 |
| maxDate | String,Number,Date | | 最大日期 |
| dateRange | Array | | 多时间范围，二维数组 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| type | String | `year/month/date` | 日期面板类型 |

### Events

#### value.sync
与value格式相同的日期

#### @change
值变化时触发（与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Date | 当前日期 |
| $event.oldValue | Date | 旧日期 |
| $event.formattedValue | String | formatted日期 |

#### @before-select
选择日期前
| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止日期选择 |

#### @select

选择日期时

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Date | 选择日期 |
| $event.oldValue | Date | 旧日期 |
| $event.formattedValue | String | formatted日期 |
