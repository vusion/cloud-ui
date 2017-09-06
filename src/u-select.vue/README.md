# 选择框（Select）

## 示例
### 基本形式

有两种书写方式，这里推荐使用Tag方式，使用起来更加灵活。

#### Tag方式
``` html
<u-linear-layout>
    <u-select>
        <u-select-item>苹果</u-select-item>
        <u-select-item>香蕉</u-select-item>
        <u-select-item>蛋糕</u-select-item>
    </u-select>
    <u-select>
        <u-select-item>请选择</u-select-item>
        <u-select-item>苹果</u-select-item>
        <u-select-item>香蕉</u-select-item>
        <u-select-item>蛋糕</u-select-item>
    </u-select>
</u-linear-layout>
```

#### Data方式
``` html
<u-linear-layout>
    <u-select :data="[
        { text: '苹果' },
        { text: '香蕉' },
        { text: '蛋糕' },
    ]"></u-select>
    <u-select :data="[
        { text: '请选择' },
        { text: '苹果' },
        { text: '香蕉' },
        { text: '蛋糕' },
    ]"></u-select>
</u-linear-layout>
```

### 选择值

#### Tag方式
``` html
<u-select value="C">
    <u-select-item>请选择</u-select-item>
    <u-select-item value="A">苹果</u-select-item>
    <u-select-item value="B">香蕉</u-select-item>
    <u-select-item value="C">蛋糕</u-select-item>
</u-select>
```

#### Data方式
``` html
<u-select value="C" :data="[
    { text: '请选择' },
    { text: '苹果', value: 'A' },
    { text: '香蕉', value: 'B' },
    { text: '蛋糕', value: 'C' },
]"></u-select>
```

### 只读、禁用、禁用某一项

#### Tag方式

``` html
<u-linear-layout>
    <u-select value="C" readonly>
        <u-select-item value="A">苹果</u-select-item>
        <u-select-item value="B">香蕉</u-select-item>
        <u-select-item value="C">蛋糕</u-select-item>
    </u-select>
    <u-select value="C" disabled>
        <u-select-item value="A">苹果</u-select-item>
        <u-select-item value="B">香蕉</u-select-item>
        <u-select-item value="C">蛋糕</u-select-item>
    </u-select>
    <u-select value="C">
        <u-select-item value="A">苹果</u-select-item>
        <u-select-item value="B" disabled>香蕉</u-select-item>
        <u-select-item value="C">蛋糕</u-select-item>
    </u-select>
</u-linear-layout>
```

#### Data方式

``` html
<u-select value="C" :data="[
    { text: '苹果', value: 'A' },
    { text: '香蕉', value: 'B', disabled: true },
    { text: '蛋糕', value: 'C' },
]"></u-select>
```

### 大小扩展

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-select size="small">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="small normal">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="small large">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-select size="normal small">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="normal normal">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="normal large">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-select size="large small">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="large normal">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="large">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-select size="mini">
            <u-select-item>10</u-select-item>
            <u-select-item>50</u-select-item>
            <u-select-item>200</u-select-item>
        </u-select>
    </u-linear-layout>
</u-linear-layout>
```

## Select API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array\<{ text, value }\> | | Data书写方式中的数据列表 |
| value.sync, v-model | Any | | 当前选择的值 |
| field | String | `'text'` | 显示文本字段 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

在插槽中插入`<u-select-item>`子组件

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.$item | ListViewItem | 选择项子组件 |
| $event.preventDefault | Function | 阻止选择流程 |

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | 选择项的值 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 改变后的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 单选模式中，选择项相关对象 |
| $event.$item | ListViewItem |  单选模式中，选择项子组件 |
| $event.items | Array\<Object\> | 多选模式中，所有选中项相关对象的数组 |
| $event.$item | Array\<ListViewItem\> | 多选模式中，所有选中项子组件的数组 |

#### @toggle

展开/收起选择框时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.open | Boolean | 展开/收起状态 |

## SelectItem API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Any | | 此项的值 |
| disabled | Boolean | `false` | 禁用此项 |
| item | Object | | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | 在插槽中插入文本或HTML |

### Events

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 此项的值 |
| $event.item | Object | 此项的相关对象 |
| $event.$item | ListViewItem | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |
