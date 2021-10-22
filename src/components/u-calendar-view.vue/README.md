<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UCalendarView 日历

- [示例](#示例)
    - [基本用法](#基本用法)
    - [数据日历](#数据日历)
    - [普通模式](#普通模式)
    - [最大值最小值](#最大值最小值)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)

**Table**

用于展示大量结构化数据。支持日历结构展示。

## 示例
### 基本用法

```html
<u-calendar-view></u-calendar-view>
```

### 数据日历

```vue
<template>
    <u-calendar-view :data="data">
        <template #default="scope">
            <p v-if="scope.item.apple">苹果: {{scope.item.apple}}</p>
            <p v-if="scope.item.orange">橘子: {{scope.item.orange}}</p>
        </template>
    </u-calendar-view>
</template>
<script>
export default{
    data() {
        return {
            data: [{
                startTime: '2021-10-05',
                orange: 8,
            }, {
                startTime: '2021-10-16',
                apple: 1,
            }, {
                startTime: '2021-10-31',
                apple: 3,
                orange: 2,
            }],
        };
    },
    methods: {},
};
</script>
```

### 普通模式

``` html
<u-calendar-view :show-advance="false" :first-day-of-week="7"></u-calendar-view>
```

### 最大值最小值

``` html
<u-calendar-view min-date="2021-01-01" max-date="2021-08-01"></u-calendar-view>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | Date \| string ｜ number |  | `'TODAY'` | 当前选择的日期 |
| min-date | Date \| string ｜ number |  |  | 最小日期，默认 10 年前 |
| max-date | Date \| string ｜ number |  |  | 最大日期，默认 9 年后 |
| data-source | Array\<Item\> \| Function |  |  | 日历数据源，数组方式表示直接的数据，函数需要返回一个 Promise |
| data-schema | schema |  |  | 日历中每天的数据类型 |
| start-key | string |  | `'startTime'` | 数据内表示开始时间的字段 |
| end-key | string |  | `'endTime'` | 数据内表示结束时间的字段 |
| show-week-days | boolean |  | `true` | 是否展示周天 |
| show-weeks | boolean |  | `false` | 是否展示周数 |
| show-basic | boolean |  | `true` | 是否展示顶部左侧的 "<" "今天" ">" 等基础配置功能 |
| show-advance | boolean |  | `true` | 是否展示顶部右侧的年份、月份选项高级配置 |
| first-day-of-week | number |  | `1` | 周起始日，1～7（周一～周日） |

### Slots

#### (default)

插入文本或 HTML 至日期组件底部

### Events

#### @change

日期改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| cell | object | 改变后的日期以及相关数据 |

#### @select

选择某一个日期时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| cell | object | 当前选择的日期以及相关数据 |

