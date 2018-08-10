# 选择框 Select

## 示例
### 基本形式

<!--有两种书写方式，这里推荐使用Tag方式，使用起来更加灵活。

#### Tag方式-->
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

<!-- #### Data方式 -->

<!-- <u-linear-layout>
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
</u-linear-layout> -->


### 选择值

<!-- #### Tag方式 -->

``` html
<u-select value="C">
    <u-select-item>请选择</u-select-item>
    <u-select-item value="A">苹果</u-select-item>
    <u-select-item value="B">香蕉</u-select-item>
    <u-select-item value="C">蛋糕</u-select-item>
</u-select>
```

<!-- #### Data方式 -->

<!-- <u-select value="C" :data="[
    { text: '请选择' },
    { text: '苹果', value: 'A' },
    { text: '香蕉', value: 'B' },
    { text: '蛋糕', value: 'C' },
]"></u-select> -->


### 只读、禁用、禁用某一项

<!-- #### Tag方式 -->

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

<!-- #### Data方式 -->

<!-- <u-select value="C" :data="[
    { text: '苹果', value: 'A' },
    { text: '香蕉', value: 'B', disabled: true },
    { text: '蛋糕', value: 'C' },
]"></u-select> -->

### 分隔符

``` html
<u-select value="nut">
    <u-select-item value="cup">水杯</u-select-item>
    <u-select-item value="cup">牙刷</u-select-item>
    <u-select-divider></u-select-divider>
    <u-select-item value="nut">坚果</u-select-item>
    <u-select-item value="towel">毛巾</u-select-item>
    <u-select-item value="sofa">沙发</u-select-item>
</u-select>
```

### 分组

``` html
<u-select>
    <u-select-group title="洗具">
        <u-select-item>毛巾</u-select-item>
        <u-select-item>牙刷</u-select-item>
    </u-select-group>
    <u-select-group title="杯具">
        <u-select-item>牙缸</u-select-item>
        <u-select-item>水杯</u-select-item>
    </u-select-group>
    <u-select-group title="餐具">
        <u-select-item>筷子</u-select-item>
        <u-select-item>碗</u-select-item>
    </u-select-group>
</u-select>
```

### Flag

``` html
<u-select value="C">
    <u-select-item value="A">苹果</u-select-item>
    <u-select-item value="B" flag>香蕉</u-select-item>
    <u-select-item value="C" flag="默认选项">蛋糕</u-select-item>
</u-select>
```

### Layer

``` html
<u-select value="C">
    <u-select-item value="A">苹果</u-select-item>
    <u-select-item value="B" flag layer="high">香蕉</u-select-item>
    <u-select-item value="C" flag="默认选项" layer="high">蛋糕</u-select-item>
</u-select>
```

### 大小扩展

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-select size="mini">
            <u-select-item>mini</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="mini small">
            <u-select-item>mini small</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="mini normal">
            <u-select-item>mini normal</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="mini medium">
            <u-select-item>mini medium</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-select size="small mini">
            <u-select-item>small mini</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="small">
            <u-select-item>small</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="small normal">
            <u-select-item>small normal</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="small medium">
            <u-select-item>small medium</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-select size="normal mini">
            <u-select-item>normal mini</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="normal small">
            <u-select-item>normal small</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="normal">
            <u-select-item>normal</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="normal medium">
            <u-select-item>normal medium</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-select size="medium mini">
            <u-select-item>medium mini</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="medium small">
            <u-select-item>medium small</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="medium normal">
            <u-select-item>medium normal</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="medium">
            <u-select-item>medium</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-select size="large">
            <u-select-item>large</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-select size="huge">
            <u-select-item>huge</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-select size="huge full">
            <u-select-item>huge full</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
    </u-linear-layout>
</u-linear-layout>
```

### 数据源

当数据量不大时，除了用标签形式添加，也可以用`data`属性一次性传进来，`data`属性的格式为`Array<{ text, value, ...arg }>`。

但如果数据量很大时，推荐使用`data-source`属性进行“分页加载”。

``` vue
<template>
<u-linear-layout>
    <u-select :data="data">
        <u-select-item>没有使用分页功能</u-select-item>
    </u-select>
    <u-select :data-source="dataSource">
        <u-select-item>使用分页加载功能</u-select-item>
    </u-select>
</u-linear-layout>
</template>
<script>
import { utils } from 'library';

export default {
    data() {
        return { data: [] };
    },
    created() {
        // 构造数量较多的 1000 条数据
        let data = [];
        for (let i = 1; i <= 1000; i++)
            data.push('item' + i);
        data = data.map((text) => ({ text, value: text }));

        // 没有使用分页功能，直接传入
        this.data = data;

        // 使用`utils.DataSource`自动分页
        this.dataSource = new utils.DataSource({
            data,
            limit: 50, // `limit`表示分页大小，默认为 50，可以不传。
        });
    },
};
</script>
```

### 异步数据源

也可以使用异步加载数据，在`new DataSource`时，直接重写`loadMore`这个方法。该方法会传入相关的参数，并要求返回一个`Promise`对象。

有时会遇到多个`<u-select>`使用的数据相同，这时他们可以共享同一个数据源，避免重复发送请求。

``` vue
<template>
<u-linear-layout>
    <u-select :data-source="dataSource">
        <u-select-item>异步数据源</u-select-item>
    </u-select>
    <u-select :data-source="dataSource">
        <u-select-item>共享数据源</u-select-item>
    </u-select>
</u-linear-layout>
</template>
<script>
import { utils } from 'library';

export default {
    created() {
        // 构造数量较多的 1000 条数据
        let data = [];
        for (let i = 1; i <= 1000; i++)
            data.push('item' + i);
        data = data.map((text) => ({ text, value: text }));

        this.dataSource = new utils.DataSource({
            loadMore(params) {
                // 这里使用 Promise 和 setTimeout 模拟一个异步请求
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(data.slice(params.offset, params.offset + params.limit));
                    }, 500);
                });
            },
        });
    },
};
</script>
```


## Select API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array\<{ text, value, ...arg }\> | | Data书写方式中的数据列表, 目前可额外书写`disabled`、`flag`的值 |
| data-source | DataSource, Function || 多功能数据源 |
| value.sync, v-model | Any | | 当前选择的值 |
| field | String | `'text'` | 显示文本字段 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| ellipsisDirection | String| `'ltr'` | 控制文本省略方向，其值和原生`css`属性`'direction'`值保持一致 |

### Slots

#### (default)

在插槽中插入`<u-select-item>`、`<u-select-divider>`或`<u-select-group>`子组件

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

#### @change

选择值改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.itemVM | ListViewItem | 选择项子组件 |

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
| flag | String | `''` | 选项的提示信息，设置flag会在左上角有特殊标志，hover会有提示信息出现, 如果不想出现特殊标志，需要将值设置为`undefined` |
| layer | String | `''` | 配合flag属性使用，使用自定义图片作为特殊标志，值是图片的名称 |

### Slots

<!--| Slot | Description |
| ---- | ----------- |
| (default) | 在插槽中插入文本或HTML |-->
#### (default)

在插槽中插入文本或`HTML`。

### Events

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 此项的值 |
| $event.item | Object | 此项的相关对象 |
| $event.$item | ListViewItem | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |

## SelectGroup API

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String |  | 显示的标题 |

### Slots

#### (default)

插入`<u-select-item>`或`<u-select-divider>`子组件。

#### title

自定义标题文本。

#### extra

在右侧可以附加组件。

## SelectDivider API

无
