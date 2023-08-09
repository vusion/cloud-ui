### 基本用法

``` vue
<template>
<u-linear-layout>
    <u-number-input v-model="value1" formatter="0000"></u-number-input>
    <u-number-input v-model="value2" :precision="0.01" :step="0.1" formatter="#,##0.00元"></u-number-input>
    <u-number-input v-model="value3" :precision="1" :step="1" formatter="0.000%"></u-number-input>
    <u-number-input 
        v-model="value4" 
        :precision="0.005" 
        :step="0.005" 
        :advanced-formatter="{ enable: false, value: '' }"
        :thousandths="true"
        :decimalPlaces="{ places: 3, omit: false }"
        :percentSign="true"
        :unit="{ type: 'prefix', value: '$' }"
    ></u-number-input>
</u-linear-layout>
</template>

<script>
    export default {
        data() {
            return {
                value1: 20,
                value2: 1234,
                value3: 20.12314,
                value4: null,
            }
        }
    }
</script>
```

### 键盘事件

``` vue
<template>
    <u-number-input v-model="value" @keydown="handleKeydown" @keyup="handleKeyup"></u-number-input>
</template>
<script>
export default {
    data() {
        return {
            value: '',
        };
    },
    methods: {
        handleKeydown(e, sender) {
            console.log('keydown', e, sender);
        },
        handleKeyup(e, sender) {
            console.log('keyup', e, sender);
        },
    },
};
</script>
```
