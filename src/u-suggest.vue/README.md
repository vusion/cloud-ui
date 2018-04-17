# 选择框 Suggest

## 示例
### 基本形式

``` vue
<template>
<u-suggest :data="data" :value.sync="value">
</u-suggest>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { text: '苹果', value: 'A' },
                { text: '香蕉', value: 'B', disabled: true },
                { text: '蛋糕', value: 'C' },
            ],
            value: 'A',
        };
    },
    watch: {
        value(newValue) {
            console.log(newValue)
        }
    }
}
</script>
```

#### 区分大小写

``` vue
<template>
<u-suggest :data="data" match :value.sync="value">
</u-suggest>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { text: 'absd', value: 'A' },
                { text: 'hjk', value: 'B', },
                { text: 'nmmb', value: 'C' },
            ],
            value: 'A',
        };
    },
    watch: {
        value(newValue) {
            console.log(newValue)
        }
    }
}
</script>
```

#### 执行异步更新操作

``` vue
<template>
<u-suggest :data="data" remote :loading="loading" :value.sync="value" :filter-method="filterMethod"></u-suggest>
</template>
<script>
export default {
    data() {
        return {
            data: [],
            value: '',
            list: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'],
            loading: false,
        };
    },
    watch: {
        value(newValue) {
            console.log(newValue)
        }
    },
    methods: {
        filterMethod(query) {
            if (query !== '') {
                this.loading = true;
                setTimeout(() => {
                    const list = this.list.map(item => {
                        return {
                            value: item,
                            text: item
                        };
                    });
                    this.data = list.filter(item => item.text.toLowerCase().indexOf(query.toLowerCase()) > -1);
                    this.loading = false;
                }, 200);
            }
        }
    }
}
</script>
```

## Suggest API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array\<{ text, value }\> | | Data书写方式中的数据列表 |
| value.sync, v-model | Any | | 当前选择的值 |
| field | String | `'text'` | 显示文本字段 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| match | Boolean | `false` | 是否区分大小写，默认不区分大小写 |
| loading | Boolean | `false` | 配合异步获取显示加载中的样式 |
| loadText | String | `加载中` | loading状态显示的文本 |
| remote | Boolean | `false` | 是否异步获取数据，适用于数据从服务端获取 |
| filterMethod | Funtion |  | 自定义过滤数据的方法或者异步获取模式中通过此函数获取异步数据改变data |