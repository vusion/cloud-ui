# 输入扩展（InputField）
# 具体demo和细节请参考regular-ui组件中的validation，规则一致

## 示例
### 基本形式

``` vue
<template>
<u-input-field v-model="value" :rules="rules" :tip-info="tipInfo" disabled></u-input-field>
</template>

<script>
export default {
    data() {
        return {
            tipInfo: '请输入注册的邮箱',
            rules: [
                { type: 'isFilled', trigger: 'blur', message: '邮箱不能为空！' },
                { type: 'isEmail', trigger: 'blur', message: '请输入正确的邮箱！' },
            ],
            value: '',
        }
    },
    watch: {
        value(newValue) {
            console.log(newValue);
        },
    },
};
</script>
```

### 有序规则集
```vue
<template>
<form class="m-form">
    <div class="form_item">
        <label class="form_label">用户名<span class="form_required">*</span>：</label>
        <span class="form_field">
            <u-input-field v-model="value" :rules="rules" maxlength="12" placeholder="4~12个字符" /></u-input-field>
        </span>
    </div>
</form>
</template>

<script>
export default {
    data() {
        return {
            rules: [
                { type: 'is', trigger: 'input+blur', message: '以字母开头', options: /^[a-zA-Z]/ },
                { type: 'is', trigger: 'input+blur', message: '字母、数字或中划线组成', options: /^[a-zA-Z0-9-]+$/ },
                { type: 'is', trigger: 'blur', message: '以字母或数字结尾', options: /[a-zA-Z0-9]$/ },
                { type: 'isRequired', trigger: 'blur', message: '请输入用户名' },
                { type: 'isLength', trigger: 'blur', message: '不得少于4个字符', options: { min: 4 } },
            ],
            value: '',
        }
    },
    watch: {
        value(newValue) {
            console.log(newValue);
        },
    },
};
</script>
```

### 必填项有内容可点
```vue
<template>
    <form class="m-form">
    <u-validation ref="validation">
        <div class="form_item">
            <label class="form_label">用户名<span class="form_required">*</span>：</label>
            <span class="form_field">
                <u-input-field v-model="user.name" :rules="rules.name" maxlength="12" placeholder="4~12个字符" />
            </span>
        </div>
        <div class="form_item">
            <label class="form_label">邮箱<span class="form_required">*</span>：</label>
            <span class="form_field">
                <u-input-field v-model="user.email" :rules="rules.email" maxlength="20" placeholder="请输入邮箱" />
            </span>
        </div>
        <div class="form_item">
            <label class="form_label">手机号码：</label>
            <span class="form_field">
                <u-input-field v-model="user.phone" :rules="rules.phone" maxlength="11" placeholder="请输入手机号码" />
            </span>
        </div>
        <div class="form_item">
            <span class="form_field"><a class="u-btn u-btn-primary" :disabled="!canSubmit" @click="canSubmit && submit">提交</a></span>
        </div>
    </u-validation>
    </form>
</template>
<script>
    export default {
        data() {
            return {
                user: {
                    name: '',
                    email: '',
                    phone: '',
                },
                rules: {
                    name: [
                        { type: 'isRequired', trigger: 'input+blur', mute: 'input+blur', message: '请输入用户名！' },
                        { type: 'isFilled', trigger: 'input+blur', mute: 'input', message: '请输入合适的用户名！' },
                        { type: 'isLength', trigger: 'input+blur', mute: 'input', message: '请输入4~12个字符！', options: { min: 4, max: 12 } },
                    ],
                    email: [
                        { type: 'isRequired', trigger: 'input+blur', mute: 'input+blur', message: '请输入邮箱！' },
                        { type: 'isEmail', trigger: 'input+blur', mute: 'input', message: '邮箱格式不正确！' },
                    ],
                    phone: [
                        { type: 'is', trigger: 'input+blur', message: '手机号码格式不正确！', options: /^\d+$/ },
                    ],
                },
                // canSubmit: false,
            };
        },
        computed: {
            canSubmit() {
                return this.user.name && this.user.email;
            }
        },
        methods: {
            submit() {
                this.$refs.validation.$once('validate', (conclusion) => {
                    if(conclusion.success)
                        alert('提交成功！');
                }).validate();
            },
        }
    }
</script>
```

### 所有内容正确可点
```vue
<template>
<form class="m-form">
<u-validation ref="validation">
    <div class="item">
        <label class="form_label">用户名<span class="form_required">*</span>：</label>
        <span class="form_field">
            <u-input-field v-model="user.name" :rules="rules.name" maxlength="12" placeholder="4~12个字符" @input="input"></u-input-field>
        </span>
    </div>
    <div class="item">
        <label class="form_label">邮箱<span class="form_required">*</span>：</label>
        <span class="form_field">
            <u-input-field v-model="user.email" :rules="rules.email" maxlength="20" placeholder="请输入邮箱" @input="input"></u-input-field>
        </span>
    </div>
    <div class="item">
        <label class="form_label">手机号码：</label>
        <span class="form_field">
            <u-input-field status="success" v-model="user.mobile" :rules="rules.phone" maxlength="11" placeholder="请输入手机号码" @input="input"></u-input-field>
        </span>
    </div>
    <div class="item">
        <span class="form_field"><a class="u-btn u-btn-primary" :disabled="!canSubmit" @click="submit">提交</a></span>
    </div>
</u-validation>
</form>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                mobile: '',
            },
            rules: {
                name: [
                    { type: 'isRequired', trigger: 'input+blur', mute: 'input+blur', message: '请输入用户名！' },
                    { type: 'isFilled', trigger: 'input+blur', mute: 'input', message: '请输入合适的用户名！' },
                    { type: 'isLength', trigger: 'input+blur', mute: 'input', message: '请输入4~12个字符！', options: { min: 4, max: 12 } },
                ],
                email: [
                    { type: 'isRequired', trigger: 'input+blur', mute: 'input+blur', message: '请输入邮箱！' },
                    { type: 'isEmail', trigger: 'input+blur', mute: 'input', message: '邮箱格式不正确！' },
                ],
                phone: [
                    { type: 'is', trigger: 'input+blur', message: '手机号码格式不正确！', options: /^\d+$/ },
                ],
            },
            canSubmit: false,
        };
    },
    methods: {
        submit() {
            console.log(this.user);
            if(!this.canSubmit)
                return;

            alert('提交成功！');
        },
        input() {
            // this.$nextTick(() => {
                this.canSubmit = this.$refs.validation && this.$refs.validation.fields.every((field) => field.state === 'success');
            // });
        },
    },
};
</script>
```
