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
