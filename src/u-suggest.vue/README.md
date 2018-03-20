# 选择框 Suggest

## 示例
### 基本形式

有两种书写方式，这里推荐使用Tag方式，使用起来更加灵活。

#### Data方式

#### 标签方式

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
                { text: '香蕉', value: 'B' },
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

## Suggest API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array\<{ text, value }\> | | Data书写方式中的数据列表 |
| value.sync, v-model | Any | | 当前选择的值 |
| field | String | `'text'` | 显示文本字段 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

