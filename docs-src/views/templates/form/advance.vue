<template>
    <div>
        <h1>高级表单</h1>
        <p>高级表单通常用于数据项较多，场景比较复杂的表单场景</p>
        <div :class="$style.part">
            <h3>行内表单</h3>
                <u-form layout="inline" label-size="auto">
                    <u-form-item label="状态">
                        <u-input maxlength="63" placeholder="认证中"></u-input>
                    </u-form-item>
                    <u-form-item label="用户名">
                        <u-input maxlength="63" placeholder="请输入用户名"></u-input>
                    </u-form-item>
                    <u-form-item label="联系号码">
                        <u-input maxlength="63" placeholder="请输入联系号码"></u-input>
                    </u-form-item>
                    <u-form-item>
                        <u-button color="primary">查询</u-button>
                    </u-form-item>
                </u-form>
        </div>
        <div :class="$style.part">
            <h3>表单验证</h3>
            <u-form ref="form" gap="large" :rules="rules1">
                <u-form-item label="用户名" name="username">
                    <u-input size="huge" v-model="model.username" maxlength="12" placeholder="4~12个字符"></u-input>
                </u-form-item>
                <u-form-item label="邮箱" name="email">
                    <u-input size="huge" v-model="model.email" maxlength="24" placeholder="请输入邮箱"></u-input>
                </u-form-item>
                <u-form-item label="手机号码" name="phone">
                    <u-input size="huge" v-model="model.phone" maxlength="11" placeholder="请输入手机号码"></u-input>
                </u-form-item>
                <u-form-item>
                    <u-button color="primary" @click="submit()">提交</u-button>
                </u-form-item>
            </u-form>
        </div>
        <div :class="$style.part">
            <h3>表格内表单</h3>
            <u-table :class="$style.table">
                <thead slot="thead">
                    <tr>
                        <th :class="$style.th_label">姓名</th>
                        <th :class="$style.th_label">年龄</th>
                        <th :class="$style.th_label">出生日期</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="addList.length > 0" v-for="(add, index) in addList" :key="index" is="u-form" label-size="auto" gap="large" layout="none" @validate="add.canSubmit = $event.valid">
                        <!-- <u-form label-size="auto" layout="none" @validate="add.canSubmit = $event" > -->
                        <td :class="$style.td">
                            <u-form-item :rules="rules.name" placement="bottom" class="$style.item">
                                <u-input size="normal" v-model="add.name"></u-input>
                            </u-form-item>
                        </td>
                        <td :class="$style.td">
                            <u-form-item :rules="rules.age" placement="bottom" class="$style.item">
                                <u-input size="normal" v-model="add.age"></u-input>
                            </u-form-item>
                        </td>
                        <td :style="{overflow:'visible'}">
                            <u-form-item class="$style.item">
                                <u-date-picker :date.sync="add.date"></u-date-picker>
                            </u-form-item>
                        </td>
                        <td>
                            <u-form-item class="$style.item">
                                <u-link size="small" @click="addList.splice(index,1)">
                                    删除
                                </u-link>
                            </u-form-item>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4" :class="$style.add"><u-link @click="addInfo">添加</u-link></td>
                    </tr>
                </tbody>
            </u-table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rules: {
                name: [
                    { type: 'string', required: true, trigger: 'input + blur', message: '请输入实例名称' },
                ],
                label: [
                    { type: 'string', required: true, trigger: 'input + blur', message: '请输入label' },
                ],
                age: [
                    { type: 'string', required: true, trigger: 'input + blur', message: '请输入年龄' },
                ],
            },
            canSubmit: false,
            model: {
                username: '',
                email: '',
                phone: '',
            },
            rules1: {
                username: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入用户名' },
                    { type: 'string', min: 4, max: 12, trigger: 'blur', message: '请输入4~12个字符' },
                ],
                email: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入邮箱' },
                    { type: 'email', trigger: 'blur', message: '邮箱格式不正确' },
                ],
                phone: [
                    { type: 'string', pattern: /^\d{11}$/, trigger: 'blur', message: '手机号码格式不正确' },
                ],
            },
            addList: [
                { name: '张三', age: '20', date: '1992-09-10' },
                { name: '李四', age: '22', date: '1990-2-13' },
            ],
        };
    },
    methods: {
        submit() {
            this.$refs.form.validate()
                .then(() => alert('提交成功'))
                .catch((err) => { console.log(err); });
        },
        addInfo() {
            this.addList.push({ name: '', age: '', date: '' });
        },
    },
};
</script>

<style module>
.form {
    margin-top: 50px;
}
.table[class] {
    width: 45%;
}
.table .td[class] {
    padding-bottom: 30px;
}
.add {
    text-align: center;
}
.part {
    margin-top: 50px;
    margin-left: 50px;
}
</style>
