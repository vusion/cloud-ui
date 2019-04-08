# 表单项

## 示例
### 基本形式

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-form-item :rules="rules">
        <u-input maxlength="112" placeholder="4~12位字母、数字或中划线组成"></u-input>
    </u-form-item>
    <u-form-item title="用户名" :rules="rules">
        <u-input maxlength="112" placeholder="4~12位字母、数字或中划线组成"></u-input>
    </u-form-item>
    <u-form-item :rules="rules" placement="bottom">
        <u-input maxlength="112" placeholder="4~12位字母、数字或中划线组成"></u-input>
    </u-form-item>
    <u-form-item title="用户名" :rules="rules" placement="bottom">
        <u-input maxlength="112" placeholder="4~12位字母、数字或中划线组成"></u-input>
    </u-form-item>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            rules: [
                { type: 'string', required: true, trigger: 'blur', message: '请输入用户名' },
                { type: 'string', pattern: /^[a-zA-Z]/, trigger: 'input+blur', message: '以字母开头' },
                { type: 'string', pattern: /^[a-zA-Z0-9-]+$/, trigger: 'input+blur', message: '字母、数字或中划线组成' },
                { type: 'string', pattern: /[a-zA-Z0-9]$/, trigger: 'blur', message: '以字母或数字结尾' },
                { type: 'string', min: 4, trigger: 'blur', message: '不得少于4个字符' },
            ],
        };
    },
};
</script>
```
