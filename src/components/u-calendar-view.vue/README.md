<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UCalendarView 日历

- [示例](#示例)
    - [基本用法](#基本用法)
    - [数据日历](#数据日历)
    - [数据日历，reload方法](#数据日历reload方法)
    - [普通模式](#普通模式)
    - [最大值最小值](#最大值最小值)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
    - [Methods](#methods)

**Table**

用于展示大量结构化数据。支持日历结构展示。

## 示例
### 基本用法

```html
<u-calendar-view value="2022-02-01"></u-calendar-view>
```

### 数据日历

```vue
<template>
    <u-calendar-view :data="data" :value.sync="value" @change="onChange" @select="onSelect">
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
            value: '2021-10-01',
        };
    },
    watch: {
        value(val, oldVal) {
            console.log('val', val);
            console.log('oldVal', oldVal);
        },
    },
    methods: {
        onChange(val) {
            console.log('onChange', val);
        },
        onSelect(val) {
            console.log('onSelect', val);
        },
    },
};
</script>
```

### 数据日历，reload方法

```vue
<template>
<u-linear-layout>
    <u-calendar-view :data-source="load" :value.sync="value" ref="calendarView">
        <template #default="scope">
            <p v-if="scope.item.apple">苹果: {{scope.item.apple}}</p>
            <p v-if="scope.item.orange">橘子: {{scope.item.orange}}</p>
        </template>
    </u-calendar-view>
    <u-button @click="reload">重新加载</u-button>
</u-linear-layout>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((resolve, rej) => setTimeout(() => resolve(data), timeout));

export default {
    data() {
        return {
            value: '2021-10-01',
        };
    },
    methods: {
        load(params) {
            console.log('load');
            return mockRequest([{
                startTime: '2021-10-05',
                orange: 8,
            }, {
                startTime: '2021-10-16',
                apple: 1,
            }, {
                startTime: '2021-10-31',
                apple: 3,
                orange: 2,
            }]);
        },
        reload() {
            console.log('reload');
            this.$refs.calendarView.reload();
        }
    },
}
</script>
```

### 普通模式

``` html
<u-calendar-view :show-advance="false" :first-day-of-week="7" value="2022-02-01"></u-calendar-view>
```

### 最大值最小值

``` html
<u-calendar-view min-date="2021-01-01" max-date="2021-08-01"></u-calendar-view>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data-source | Array\<Item\> \| Function \| object |  |  | 展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑 |
| data-schema | schema |  |  | 数据源返回的数据结构的类型，自动识别类型进行展示说明 |
| start-key | string |  | `'startTime'` | 数据内表示开始时间的字段 |
| end-key | string |  | `'endTime'` | 数据内表示结束时间的字段 |
| value.sync, v-model | Date \| string ｜ number |  | `'TODAY'` | 当前选中的日期 |
| min-date | Date \| string ｜ number |  |  | 最小可选的日期值，默认为10年前，日期填写格式为“yyyy-mm-dd” |
| max-date | Date \| string ｜ number |  |  | 最大可选的日期值，默认为9年后，日期填写格式为“yyyy-mm-dd” |
| show-week-days | boolean |  | `true` |  |
| show-weeks | boolean |  | `false` |  |
| show-basic | boolean |  | `true` | 是否展示顶部左侧的 "<" "今天" ">" 等基础配置功能 |
| show-advance | boolean |  | `true` | 是否展示顶部右侧的年份、月份选项高级配置 |
| first-day-of-week | number |  | `1` | 填写数字1~7，分别表示周一~周日 |
| multiple | boolean |  | `false` | 开启可多选后，可通过ctrl/command+鼠标多选 |

### Slots

#### (default)

插入文本或 HTML 至日期组件底部

### Events

#### @select

选择某一个日期时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | string | YYYY-MM-DD 格式的日期信息 |
| $event.oldValue | string | YYYY-MM-DD 格式的日期信息 |
| $event.date | number | 当月的日期信息 |
| $event.timestamp | number | 时间戳格式日期信息 |
| $event.disabled | boolean | 是否禁用 |
| $event.week | number | 周数信息 |
| $event.Date | object | dayjs 封装过后的日期信息 |

#### @change

日期改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | string | YYYY-MM-DD 格式的日期信息 |
| $event.oldValue | string | YYYY-MM-DD 格式的日期信息 |
| $event.date | number | 当月的日期信息 |
| $event.timestamp | number | 时间戳格式日期信息 |
| $event.disabled | boolean | 是否禁用 |
| $event.week | number | 周数信息 |
| $event.Date | object | dayjs 封装过后的日期信息 |

#### @before-load

加载前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.preventDefault | Function | 阻止加载流程 |
| senderVM | UTableView | 发送事件实例 |

#### @load

加载后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | null | 无 |
| senderVM | UTableView | 发送事件实例 |

Methods

#### reload()

重新加载

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

