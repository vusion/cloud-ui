### 基本

``` vue
<template>
<u-form ref="form" :rules="rules" @validate="canSubmit = $event.valid">
    <u-form-item label="用户名" name="username">
        <u-input v-model="model.username" maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
    <u-form-item label="邮箱" name="email">
        <u-input v-model="model.email" maxlength="24" placeholder="请输入邮箱"></u-input>
    </u-form-item>
    <u-form-item label="嵌套列表" layout="block">
        <u-form-item label="邮箱1" :rules="rules.email">
            <u-input v-model="model.email1" maxlength="24" placeholder="请输入邮箱"></u-input>
        </u-form-item>
        <u-form-item label="邮箱2" :rules="rules.email">
            <u-input v-model="model.email2" maxlength="24" placeholder="请输入邮箱"></u-input>
        </u-form-item>
    </u-form-item>
    <u-form-item label="手机号码" name="phone">
        <u-input v-model="model.phone" maxlength="11" placeholder="请输入手机号码"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" :disabled="!canSubmit" @click="submit()">提交</u-button>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            canSubmit: false,
            model: {
                username: '',
                email: '',
                email1: '',
                email2: '',
                phone: '',
            },
            rules: {
                username: [
                    { type: 'string', required: true, trigger: 'input+blur', message: '请输入用户名' },
                    { type: 'string', min: 4, max: 12, trigger: 'input+blur', message: '请输入4~12个字符' },
                ],
                email: [
                    { type: 'string', required: true, trigger: 'input+blur', message: '请输入邮箱' },
                    { type: 'email', trigger: 'input+blur', message: '邮箱格式不正确' },
                ],
                phone: [
                    { type: 'string', pattern: /^\d{11}$/, trigger: 'input+blur', message: '手机号码格式不正确' },
                ],
            },
        };
    },
    mounted() {
        // 必须初始化时或在获取数据到时安静验证一次
        this.$refs.form.validate(true)
            .catch(() => { /* noop */ });

        // 在获取数据到时如下
        // this.getData().then(...)
        //  .then(() => this.$refs.form.validate(true))
        //  .catch(() => { /* noop */ });
    },
    methods: {
        submit() {
            this.$refs.form.validate()
                .then(() => alert('提交成功'))
                .catch(() => { /* noop */ });
        },
    },
};
</script>
```

### Bubble

``` vue
<template>
<u-form ref="form" :rules="rules" @validate="canSubmit = $event.valid">
    <u-form-item label="用户名" name="username">
        <u-input v-model="model.username" maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
    <u-form-item label="邮箱" name="email">
        <u-input v-model="model.email" maxlength="24" placeholder="请输入邮箱"></u-input>
    </u-form-item>
    <u-form-item label="嵌套列表" bubble layout="block">
        <u-form-item label="邮箱1" :rules="rules.email" layout="none" muted="message">
            <u-input v-model="model.email1" maxlength="24" placeholder="请输入邮箱"></u-input>
        </u-form-item>
        <u-form-item label="邮箱2" :rules="rules.email" layout="none" muted="message">
            <u-input v-model="model.email2" maxlength="24" placeholder="请输入邮箱"></u-input>
        </u-form-item>
    </u-form-item>
    <u-form-item label="手机号码" name="phone">
        <u-input v-model="model.phone" maxlength="11" placeholder="请输入手机号码"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" :disabled="!canSubmit" @click="submit()">提交</u-button>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            canSubmit: false,
            model: {
                username: '',
                email: '',
                email1: '',
                email2: '',
                phone: '',
            },
            rules: {
                username: [
                    { type: 'string', required: true, trigger: 'input+blur', message: '请输入用户名' },
                    { type: 'string', min: 4, max: 12, trigger: 'input+blur', message: '请输入4~12个字符' },
                ],
                email: [
                    { type: 'string', required: true, trigger: 'input+blur', message: '请输入邮箱' },
                    { type: 'email', trigger: 'input+blur', message: '邮箱格式不正确' },
                ],
                phone: [
                    { type: 'string', pattern: /^\d{11}$/, trigger: 'input+blur', message: '手机号码格式不正确' },
                ],
            },
        };
    },
    mounted() {
        // 必须初始化时或在获取数据到时安静验证一次
        this.$refs.form.validate(true)
            .catch(() => { /* noop */ });

        // 在获取数据到时如下
        // this.getData().then(...)
        //  .then(() => this.$refs.form.validate(true))
        //  .catch(() => { /* noop */ });
    },
    methods: {
        submit() {
            this.$refs.form.validate()
                .then(() => alert('提交成功'))
                .catch(() => { /* noop */ });
        },
    },
};
</script>
```
