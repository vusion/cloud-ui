<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UDateTimePicker 日期时间选择

- [示例](#示例)
    - [基本用法](#基本用法)
    - [选择日期](#选择日期)
    - [自动获取焦点](#自动获取焦点)
    - [只读和禁用](#只读和禁用)
    - [最大值和最小值](#最大值和最小值)
    - [自定义底部](#自定义底部)
    - [方法](#方法)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Selector**

日期时间选择器

## 示例
### 基本用法

``` html
<u-linear-layout>
    <u-date-time-picker clearable></u-date-time-picker>
    <u-date-time-picker date="2018-08-08"></u-date-time-picker>
</u-linear-layout>
```

### 选择日期

``` vue
<template>
<u-date-time-picker v-model="date"></u-date-time-picker>
</template>
<script>
export default {
    data() {
        return {
            date: '',
        };
    },
};
</script>
```

### 自动获取焦点
``` html
<u-date-time-picker date="2018-08-08" autofocus></u-date-time-picker>
```

### 只读和禁用
``` html
<u-linear-layout>
    <u-date-time-picker date="2018-08-08" readonly></u-date-time-picker>
    <u-date-time-picker date="2018-08-08" disabled></u-date-time-picker>
</u-linear-layout>
```

### 最大值和最小值
``` html
<u-date-time-picker date="2017-05-12 8:00:00" min-date="2017-01-10 07:00:00" max-date="2017-12-12 07:00:00"></u-date-time-picker>
```

### 自定义底部
``` html
<u-date-time-picker clearable>
    <div slot="footer" style="padding: 15px 0 5px;text-align:center">
        插入文本或  HTML 至日期组件底部
    </div>
</u-date-time-picker>
```

### 方法
``` vue
<template>
<u-date-time-picker :date="date" @change="change($event.date)" @select="select($event)"></u-date-time-picker>
</template>

<script>
export default {
    data() {
        return {
            date: '2017-12-01 20:12:12',
        };
    },
    methods: {
        change(time) {
            console.log(time);
        },
        select(date) {
            console.log(date);
        }
    },
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| date.sync, v-model | string, number, Date |  |  | 显示的日期值 |
| minDate | string, number, Date |  |  | 最小日期值 |
| maxDate | string, number, Date |  |  | 最大日期值 |
| placeholder | string |  | `'请选择时间'` | 默认提示语 |
| autofocus | boolean |  | `false` | 是否默认处于focus状态 |
| clearable | boolean |  |  | 开启并在输入框有内容时会显示清除按钮。 |
| disabled | boolean |  | `false` | 是否禁用 |
| readonly | boolean |  | `false` | 是否只读 |
| yearDiff | number |  | `20` | 最小可选年份值为当前年减去此值 |
| yearAdd | number |  | `20` | 最大可选年份值为当前年加上此值 |
| converter | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'json'` | 转换器 |

### Events

#### @select

日期值发生变化触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.date | number | 选择项的值，默认返回时间戳 |

#### @change

选择新时间触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.date | number | 选择项的值，默认返回时间戳 |

