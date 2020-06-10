### 基础表单

``` vue
<template>
<u-form gap="large">
    <u-form-item label="类型" required>
        <u-radios v-model="model.type">
            <u-radio label="A">类型 A</u-radio>
            <u-radio label="B">类型 B</u-radio>
        </u-radios>
    </u-form-item>
    <u-form-item label="名称" required>
        <u-input v-model="model.name" size="huge medium" placeholder="由数字，中划线组成"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" @click="submit">立即创建</u-button>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            model: {
                type: 'A',
                name: '',
            },
        };
    },
    methods: {
        submit() {
            this.$toast.show(JSON.stringify(this.model));
        },
    },
};
</script>
```

### 行内表单

``` vue
<template>
<u-form layout="inline" label-size="auto">
    <u-form-item label="状态">
        <u-select v-model="model.status">
            <u-select-item>未认证</u-select-item>
            <u-select-item>认证中</u-select-item>
            <u-select-item>已认证</u-select-item>
        </u-select>
    </u-form-item>
    <u-form-item label="用户名">
        <u-input v-model="model.username" maxlength="63" placeholder="请输入用户名"></u-input>
    </u-form-item>
    <u-form-item label="联系号码">
        <u-input v-model="model.number" maxlength="63" placeholder="请输入联系号码"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" @click="search">查询</u-button>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            model: {
                type: 'A',
                name: '',
            },
        };
    },
    methods: {
        search() {
            this.$toast.show(JSON.stringify(this.model));
        },
    },
};
</script>
```

### 栅格布局

``` vue
<template>
<u-form layout="inline">
    <u-grid-layout>
        <u-grid-layout-row :repeat="3">
            <u-grid-layout-column>
                <u-form-item label="状态">
                    <u-select v-model="model.status">
                        <u-select-item>认证中</u-select-item>
                    </u-select>
                </u-form-item>
            </u-grid-layout-column>
            <u-grid-layout-column>
                <u-form-item label="备案类型">
                    <u-select v-model="model.type">
                        <u-select-item>全部</u-select-item>
                    </u-select>
                </u-form-item>
            </u-grid-layout-column>
            <u-grid-layout-column>
                <u-form-item label="备案号">
                    <u-input v-model="model.number" maxlength="63"></u-input>
                </u-form-item>
            </u-grid-layout-column>
        </u-grid-layout-row>
        <u-grid-layout-row :repeat="3">
            <u-grid-layout-column>
                <u-form-item label="用户名">
                    <u-input v-model="model.username" maxlength="63"></u-input>
                </u-form-item>
            </u-grid-layout-column>
            <u-grid-layout-column>
                <u-form-item label="单位名称">
                    <u-input v-model="model.department" maxlength="63"></u-input>
                </u-form-item>
            </u-grid-layout-column>
            <u-grid-layout-column>
                <u-form-item>
                    <u-button color="primary" @click="search">查询</u-button>
                </u-form-item>
            </u-grid-layout-column>
        </u-grid-layout-row>
    </u-grid-layout>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            model: {
                status: '',
                type: '',
                number: '',
                username: '',
                department: '',
            },
        };
    },
    methods: {
        search() {
            this.$toast.show(JSON.stringify(this.model));
        },
    },
};
</script>
```

### 验证表单

``` vue
<template>
<u-form ref="form" gap="large">
    <u-form-item label="类型" required>
        <u-radios v-model="model.type">
            <u-radio label="A">类型 A</u-radio>
            <u-radio label="B">类型 B</u-radio>
        </u-radios>
    </u-form-item>
    <u-form-item label="名称" required rules="required | alphaNumDash | rangeLength(1,63)">
        <u-input v-model="model.name" size="huge" maxlength="63" placeholder="由1-63个小写字母，数字，中划线组成"></u-input>
    </u-form-item>
    <u-form-item label="端口号" required rules="required | integer | range(1150,65535)">
        <u-input v-model.number="model.port" size="huge normal" maxlength="5" placeholder="1150-65535"></u-input>
    </u-form-item>
    <u-form-item label="描述" layout="block" rules="minLength(8)">
        <u-textarea v-model="model.description" size="huge"></u-textarea>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" @click="submit">立即创建</u-button>
    </u-form-item>
</u-form>
</template>
<script>
export default {
    data() {
        return {
            model: {
                type: 'A',
                name: '',
                port: '',
                description: '',
            },
        };
    },
    methods: {
        submit() {
            this.$refs.form.validate()
                .then(() => this.$toast.show('验证通过，提交成功！'))
                .catch(() => this.$toast.show('验证失败！'));
        },
    },
};
</script>
```