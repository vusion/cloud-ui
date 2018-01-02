# 选择扩展 MultiSelect

## 示例
### 基本形式

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

## Select API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array\<{ text, value }\> | | Data书写方式中的数据列表 |
| value.sync, v-model | Array | | 当前选择的值 |
| field | String | `'text'` | 显示文本字段 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

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