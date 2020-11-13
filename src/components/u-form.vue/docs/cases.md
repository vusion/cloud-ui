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

### 分组

``` html
<u-form gap="large">
    <u-form-group title="域名信息">
        <u-form-item label="域名管理密码" required>
            <u-radios value="0">
                <u-radio label="0">包年包月</u-radio>
                <u-radio label="1">按量付费</u-radio>
            </u-radios>
        </u-form-item>
        <u-form-item label="实例名称" required>
            <u-input size="huge" maxlength="63" placeholder="由1-63个小写字母，数字，中划线组成，以字母开头，字母或数字结尾"></u-input>
        </u-form-item>
        <u-form-item label="　" required>
            <u-input size="huge" maxlength="63" placeholder="label为空的必填项"></u-input>
        </u-form-item>
    </u-form-group>
    <u-form-group title="域名信息">
        <u-form-item label="规格">
            <u-capsules value="0101">
                <u-capsule value="0101">1核 1GB</u-capsule>
                <u-capsule value="0102">1核 2GB</u-capsule>
                <u-capsule value="0204">2核 4GB</u-capsule>
                <u-capsule value="0408">4核 8GB</u-capsule>
                <u-capsule value="0816">8核 16GB</u-capsule>
                <u-capsule value="0832">8核 32GB</u-capsule>
                <u-capsule value="1664">16核 64GB</u-capsule>
            </u-capsules>
        </u-form-item>
        <u-form-item label="类型" description="高性能 SSD 云盘不支持快照功能" layout="block">
            <u-capsules value="SSD">
                <u-capsule value="SSD">SSD 云盘</u-capsule>
                <u-capsule value="HSSD">高性能 SSD 云盘</u-capsule>
            </u-capsules>
        </u-form-item>
        <u-form-item label="端口号" required>
            <u-input size="huge medium" maxlength="5" placeholder="1150-65535" value="3306"></u-input>
        </u-form-item>
        <u-form-item label="公网带宽">
            <u-combo-slider :step="10" unit="Mbps"></u-combo-slider>
        </u-form-item>
        <u-form-item label="详情" layout="block">
            <u-textarea size="huge"></u-textarea>
        </u-form-item>
    </u-form-group>
    <u-form-item>
        <u-button color="primary">立即创建</u-button>
    </u-form-item>
</u-form>
```


### Header 外观

``` html
<u-form gap="large">
    <u-form-group title="域名信息" appear="header"></u-form-group>
    <u-form-item label="域名管理密码" required>
        <u-radios value="0">
            <u-radio label="0">包年包月</u-radio>
            <u-radio label="1">按量付费</u-radio>
        </u-radios>
    </u-form-item>
    <u-form-item label="实例名称" required>
        <u-input size="huge" maxlength="63" placeholder="由1-63个小写字母，数字，中划线组成，以字母开头，字母或数字结尾"></u-input>
    </u-form-item>
    <u-form-item label="　" required>
        <u-input size="huge" maxlength="63" placeholder="label为空的必填项"></u-input>
    </u-form-item>
    <u-form-group title="域名信息" appear="header"></u-form-group>
    <u-form-item label="规格">
        <u-capsules value="0101">
            <u-capsule value="0101">1核 1GB</u-capsule>
            <u-capsule value="0102">1核 2GB</u-capsule>
            <u-capsule value="0204">2核 4GB</u-capsule>
            <u-capsule value="0408">4核 8GB</u-capsule>
            <u-capsule value="0816">8核 16GB</u-capsule>
            <u-capsule value="0832">8核 32GB</u-capsule>
            <u-capsule value="1664">16核 64GB</u-capsule>
        </u-capsules>
    </u-form-item>
    <u-form-item label="类型" description="高性能 SSD 云盘不支持快照功能" layout="block">
        <u-capsules value="SSD">
            <u-capsule value="SSD">SSD 云盘</u-capsule>
            <u-capsule value="HSSD">高性能 SSD 云盘</u-capsule>
        </u-capsules>
    </u-form-item>
    <u-form-item label="端口号" required>
        <u-input size="huge medium" maxlength="5" placeholder="1150-65535" value="3306"></u-input>
    </u-form-item>
    <u-form-item label="公网带宽">
        <u-combo-slider :step="10" unit="Mbps"></u-combo-slider>
    </u-form-item>
    <u-form-item label="详情" layout="block">
        <u-textarea size="huge"></u-textarea>
    </u-form-item>
    <u-form-item>
        <u-button color="primary">立即创建</u-button>
    </u-form-item>
</u-form>
```

### 表单逻辑

``` vue
<template>
<u-form ref="form1">
    <u-form-item label="用户名" name="username" rules="required | rangeLength(4, 12)">
        <u-input v-model="model.username" maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
    <u-form-item label="邮箱" name="email" rules="required | email">
        <u-input v-model="model.email" maxlength="24" placeholder="请输入邮箱"></u-input>
    </u-form-item>
    <u-form-item label="手机号码" name="phone" rules="required | mobile('zh-CN')">
        <u-input v-model="model.phone" maxlength="11" placeholder="请输入手机号码"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" @click="submit()">提交</u-button>
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
        };
    },
    mounted() {
        // 必须初始化时或在获取数据到时安静验证一次
        this.$refs.form1.validate(true)
            .catch(() => { /* noop */ });

        // 在获取数据到时如下
        // this.getData().then(...)
        //  .then(() => this.$refs.form1.validate(true))
        //  .catch(() => { /* noop */ });
    },
    methods: {
        submit() {
            this.$refs.form1.validate()
                .then(() => alert('提交成功'))
                .catch(() => { /* noop */ });
        },
    },
};
</script>
```