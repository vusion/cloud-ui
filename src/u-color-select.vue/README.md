# 颜色选择扩展 SelectColor

## 示例
### 基本形式

### 方法
``` vue
<template>
<u-color-select :options="options" :value="value" @select="select($event.value)"></u-color-select>
</template>

<script>
export default {
    data() {
        return {
            value: '#EE867D',
            options: [
                {
                    value: '#EE867D',
                },
                {
                    value:'#805DCF'
                },
                {
                    value:'#40CCCA'
                },
                {
                    value:'#FFCA12'
                },
                {
                    value:'#30A8DC'
                },
                {
                    value:'#E1AEF6'
                },
                {
                    value:'#D2D2D2'
                },
            ],
        };
    },
    methods: {
        select(value) {
            console.log(value);
            this.value = value;
        }
    },
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| width | String/Number | `false` | 输入框长度 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Events

#### @select

选中列表项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.selected | Object | 选中后的列表对象 |
| $event.value | String | 选中后的列表对象的值 |

#### @change

开关状态改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.selected | Object | 改变后的列表对象 |
| $event.value | String | 改变后的列表对象的值 |
