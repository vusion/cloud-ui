# 选择扩展 MultiSelect

## 示例
### 基本形式

### 大小扩展
``` vue
<template>
<u-multi-select :data="options" v-model="value" size="large"></u-multi-select>
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


### 方法
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
    },
    watch: {
        value(newValue) {
            console.log(newValue);
        }
    }
};
</script>
```

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

#### 自定义过滤方法
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
## Select API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array\<{ text, value }\> | | Data书写方式中的数据列表 |
| value.sync, v-model | Array | | 当前选择的值 |
| field | String | `'text'` | 显示文本字段 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| size | String | `normal normal` | 控制宽高属性，第一个值表示高度属性，第二值表示宽度，值有samll,normal,large,huage 四个值可以互相组合 |
| filter | Boolean | `false` | 支持输入，搜索匹配项 |
| filter-method | Function | `` | 自定义输入搜索的方法 |

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