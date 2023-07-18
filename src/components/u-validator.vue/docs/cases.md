### blur 后从绑定变量更新

先点击输入框，然后点击 change 按钮，验证需要能通过。

``` vue
<template>
    <u-linear-layout>
        <u-validator label="用户名" rules="required" placement="bottom">
            <u-input :value.sync="value"></u-input>
        </u-validator>
        <u-button @click="onClick">change</u-button>
    </u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: '',
        };
    },
    methods: {
        onClick() {
            this.value = Math.random();
        }
    },
};
</script>
```
