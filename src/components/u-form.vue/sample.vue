<template>
<u-form ref="form" gap="large">
    <u-form-item label="用户名" name="username">
        <u-input size="huge" maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
    <u-form-item label="邮箱" name="email">
        <u-input size="huge" maxlength="24" placeholder="请输入邮箱"></u-input>
    </u-form-item>
    <u-form-item label="手机号码" name="phone">
        <u-input size="huge" maxlength="11" placeholder="请输入手机号码"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary">提交</u-button>
    </u-form-item>
</u-form>
</template>
