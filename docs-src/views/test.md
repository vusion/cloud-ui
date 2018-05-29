# 测试

本页面用于测试组件库中的相关问题。

## Test
### 表单数字相关

https://github.com/vusion/proto-ui/issues/9

``` vue
<template>
<u-form>
    <u-form-item label="Test" :rules="rules">
        <u-input v-model.number="value" @change="onChange"></u-input>
    </u-form-item>
    <u-form-item label="Number" :rules="rules2">
        <u-number-input v-model.number="value2" @change="onChange"></u-number-input>
    </u-form-item>
</u-form>
</template>
<script>
export default {
    data() {
        return {
            value: '123',
            value2: 123,
            rules: [
                { type: 'required', required: true, trigger: 'blur', message: '请输入' },
            ],
            rules2: [
                { type: 'number', required: true, trigger: 'blur', message: '请输入' },
                { type: 'number', range: { min: 200 }, trigger: 'input+blur', message: '请输入xxx' },
            ],
        };
    },
    methods: {
        onChange($event) {
            console.log($event, this.value, this.value2);
        }
    }
};
</script>
```
