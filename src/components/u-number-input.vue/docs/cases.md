
### 高级格式化

``` vue
<template>
<div>
    <div>展示保留3位小数 不省略0；值保留2位小数</div>
    <u-number-input
        v-model="value"
        highPrecision
        :step="0.00000000000000000001"
        placeholder="请输入"
        :decimal-places="{ places:20, omit:false }"
        :decimalLength="20"></u-number-input>
    <div>值： {{value}}</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            value: '2.100'
        }
    }
}
</script>
```
