<template>
    <div>
        <h1>基础表单</h1>
        <p>表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景</p>
        <div :class="$style.form">
            <u-form gap="large" :rules="rules" @validate="canSubmit = $event.valid">
                <u-form-item label="计费方式" required>
                    <u-radios value="0">
                        <u-radio label="0">包年包月</u-radio>
                        <u-radio label="1">按量付费</u-radio>
                    </u-radios>
                </u-form-item>
                <u-form-item label="实例名称" name="name">
                    <u-input size="huge" maxlength="63" placeholder="由1-63个字母，数字，中划线组成，以字母开头，字母或数字结尾"></u-input>
                </u-form-item>
                <u-form-item label="" name="label">
                    <u-input size="huge" maxlength="63" placeholder="label为空的必填项"></u-input>
                </u-form-item>
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
                <u-form-item label="端口号">
                    <u-input size="huge" maxlength="5" placeholder="1150-65535" value="3306"></u-input>
                </u-form-item>
                <u-form-item label="详情">
                    <u-textarea size="huge"></u-textarea>
                </u-form-item>
                <u-form-item>
                    <u-button color="primary" :disabled="!canSubmit">立即创建</u-button>
                </u-form-item>
            </u-form>
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
            },
            canSubmit: false,
        };
    },
};
</script>

<style module>
.form {
    margin-top: 50px;
}
</style>
