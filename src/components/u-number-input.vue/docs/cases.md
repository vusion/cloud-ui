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

### 单位展示

``` vue
<template>
    <div>
        <div>普通前缀</div>
        <u-number-input placeholder="abcdsdf"></u-number-input>
        <u-number-input :unit="{type:'prefix',value:'$'}" placeholder="abcdsdf"></u-number-input>
        <u-number-input :unit="{type:'prefix',value:'$'}" placeholder="abcdsdf" clearable></u-number-input>
        <u-number-input :unit="{type:'prefix',value:'$'}" placeholder="abcdsdf" hideButtons></u-number-input>
        <u-number-input :unit="{type:'prefix',value:'$'}" placeholder="abcdsdf" clearable hideButtons></u-number-input>
        <div>普通后缀</div>
        <u-number-input placeholder="abcdsdf"></u-number-input>
        <u-number-input :unit="{type:'suffix',value:'$'}" placeholder="abcdsdf"></u-number-input>
        <u-number-input :unit="{type:'suffix',value:'$'}" placeholder="abcdsdf" clearable></u-number-input>
        <u-number-input :unit="{type:'suffix',value:'$'}" placeholder="abcdsdf" hideButtons></u-number-input>
        <u-number-input :unit="{type:'suffix',value:'$'}" placeholder="abcdsdf" clearable hideButtons></u-number-input>
        <div>两边前缀</div>
        <u-number-input button-display="bothEnds" placeholder="abcdsdf"></u-number-input>
        <u-number-input button-display="bothEnds" :unit="{type:'prefix',value:'$'}" placeholder="abcdsdf"></u-number-input>
        <u-number-input button-display="bothEnds" :unit="{type:'prefix',value:'$'}" placeholder="abcdsdf" clearable></u-number-input>
        <u-number-input button-display="bothEnds" :unit="{type:'prefix',value:'$'}" placeholder="abcdsdf" hideButtons></u-number-input>
        <u-number-input button-display="bothEnds" :unit="{type:'prefix',value:'$'}" placeholder="abcdsdf" clearable hideButtons></u-number-input>
        <div>两边后缀</div>
        <u-number-input button-display="bothEnds" placeholder="abcdsdf"></u-number-input>
        <u-number-input button-display="bothEnds" :unit="{type:'suffix',value:'$'}" placeholder="abcdsdf"></u-number-input>
        <u-number-input button-display="bothEnds" :unit="{type:'suffix',value:'$'}" placeholder="abcdsdf" clearable></u-number-input>
        <u-number-input button-display="bothEnds" :unit="{type:'suffix',value:'$'}" placeholder="abcdsdf" hideButtons></u-number-input>
        <u-number-input button-display="bothEnds" :unit="{type:'suffix',value:'$'}" placeholder="abcdsdf" clearable hideButtons></u-number-input>
    </div>
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

### 高级格式化

``` vue
<template>
<div>
    <div>展示保留3位小数 不省略0；值保留2位小数</div>
    <u-number-input
        v-model="value"
        placeholder="请输入"
        :decimal-places="{ places:3, omit:false }"
        :thousandths="false"
        :percent-sign="true"
        :decimalLength="2"></u-number-input>
    <div>值： {{value}}</div>
</div>
</template>
<script>
export default {
    data() {
        return {
            value: 1
        }
    }
}
</script>
```

### 高精度

``` vue
<template>
<div>
    <u-number-input
        v-model="value"
        placeholder="请输入"
        highPrecision
        ></u-number-input>
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
