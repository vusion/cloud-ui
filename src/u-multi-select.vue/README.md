# 多项选择框 MultiSelect

## 示例
### 基本形式
``` vue
<template>
<u-multi-select :data="options" v-model="value"></u-multi-select>
</template>

<script>
export default {
    data() {
        return {
            value: [],
            options: [{
                value: '选项1',
                text: '黄金糕',
            }, {
                value: '选项2',
                text: '双皮奶'
            }, {
                value: '选项3',
                text: '蚵仔煎'
            }, {
                value: '选项4',
                text: '龙须面'
            }, {
                value: '选项5',
                text: '北京烤鸭',
            }],
        };
    },
    watch: {
        value(newValue) {
            console.log(newValue);
        }
    }
};
</script>
```
### 过滤选项

``` vue
<template>
<u-multi-select filter :data="options" v-model="value"></u-multi-select>
</template>

<script>
export default {
    data() {
        return {
            value: [],
            options: [{
                value: '选项1',
                text: '黄金糕'
            }, {
                value: '选项2',
                text: '双皮奶'
            }, {
                value: '选项3',
                text: '蚵仔煎'
            }, {
                value: '选项4',
                text: '龙须面'
            }, {
                value: '选项5',
                text: '北京烤鸭',
            },{
                value: '选项6',
                text: '空爆鸡丁',
            },{
                value: '选项7',
                text: '熟煮牛肉',
            },{
                value: '选项8',
                text: '红烧茄子',
            },{
                value: '选项9',
                text: '卤煮',
            }],
        };
    }
};
</script>
```

### 自定义过滤方法
``` vue
<template>
<u-multi-select filter :filter-method="filterMethod" :data="options" v-model="value" size="huge"></u-multi-select>
</template>

<script>
export default {
    data() {
        return {
            value: [],
            options: [
                { text: 'Alabama', value: 'Alabama' },
                { text: 'Alaska', value: 'Alaska' },
                { text: 'Arizona', value: 'Arizona' },
                { text: 'Arkansas', value: 'Arkansas' },
                { text: 'California', value: 'California' },
                { text: 'Colorado', value: 'Colorado' },
                { text: 'Connecticut', value: 'Connecticut' },
                { text: 'Delaware', value: 'Delaware' },
                { text: 'Florida', value: 'Florida' },
                { text: 'Georgia', value: 'Georgia' },
                { text: 'Hawaii', value: 'Hawaii' },
                { text: 'Idaho', value: 'Idaho' },
                { text: 'Illinois', value: 'Illinois' },
            ],
        };
    },
    watch: {
        value(newValue) {
            console.log(newValue);
        }
    },
    methods: {
        filterMethod(data,query) {
            const tdata = data.filter((item) => {
                if(item.value.toLowerCase().indexOf(query.toLowerCase()) > -1)
                    return item;
                else
                    return false;
            });
            return tdata;
        }
    }
};
</script>
```

### 大小扩展
``` vue
<template>
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-multi-select :data="options" filter placeholder="small" :value="[]" size="small"></u-multi-select>
        <u-multi-select :data="options" filter placeholder="small normal" :value="[]" size="small normal"></u-multi-select>
        <u-multi-select :data="options" filter placeholder="small large" :value="[]" size="small large"></u-multi-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-multi-select :data="options" filter placeholder="normal small" :value="[]" size="normal small"></u-multi-select>
        <u-multi-select :data="options" filter placeholder="normal" :value="[]" size="normal"></u-multi-select>
        <u-multi-select :data="options" filter placeholder="normal large" :value="[]" size="normal large"></u-multi-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-multi-select :data="options" filter placeholder="large small" :value="[]" size="large small"></u-multi-select>
        <u-multi-select :data="options" filter placeholder="large normal" :value="[]" size="large normal"></u-multi-select>
        <u-multi-select :data="options" filter placeholder="large" :value="[]" size="large"></u-multi-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-multi-select :data="options" filter placeholder="huge small" :value="[]" size="huge small"></u-multi-select>
        <u-multi-select :data="options" filter placeholder="huge normal" :value="[]" size="huge normal"></u-multi-select>
        <u-multi-select :data="options" filter placeholder="huge large" :value="[]" size="huge large"></u-multi-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-multi-select :data="options" filter placeholder="large" :value="[]" size="large"></u-multi-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-multi-select :data="options" filter placeholder="huge" :value="[]" size="huge"></u-multi-select>
    </u-linear-layout>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            options: [{
                value: '选项1',
                text: '黄金糕'
            }, {
                value: '选项2',
                text: '双皮奶'
            }, {
                value: '选项3',
                text: '蚵仔煎'
            }, {
                value: '选项4',
                text: '龙须面'
            }, {
                value: '选项5',
                text: '北京烤鸭',
            }],
        };
    }
};
</script>
```
## MultiSelect API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array\<{ text, value }\> | | Data书写方式中的数据列表 |
| value.sync, v-model | Array | | 当前选择的值 |
| field | String | `'text'` | 显示文本字段 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| size | String | `normal normal` | 控制宽高属性，第一个值表示高度属性，第二值表示宽度，值有`small`,`normal`,`large`,`huge` 四个值可以互相组合 |
| filter | Boolean | `false` | 支持输入，搜索匹配项 |
| filter-method | Function || 自定义输入搜索的方法 |
| placeholder | String | `'请选择'` | 默认展示的文字，在`filter=true`时生效 |

### Events

#### @select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.selected | Object | 选择项对象 |
| $event.value | Any | 选择项的值 |

#### @close

点击选中项的关闭图标

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.index | Number | 点击选择项的索引 |
| $event.value | Array | 选择项的值 |

#### @toggle

选择项展示和隐藏触发函数

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.open | Boolean | 值表示展示还是隐藏 |
