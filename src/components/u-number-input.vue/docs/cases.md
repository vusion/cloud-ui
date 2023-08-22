### 基本用法

``` html
<u-linear-layout>
    <u-number-input></u-number-input>
    <u-number-input :value="null"></u-number-input>
    <u-number-input :value="undefined"></u-number-input>
</u-linear-layout>
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
