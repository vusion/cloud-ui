# 表单

## 示例
### 基本形式

``` html
<u-form>
    <u-form-item title="计费方式">
    </u-form-item>
    <u-form-item title="实例名称">
        <u-input maxlength="63" placeholder="由1-63个小写字母，数字，中划线组成，以字母开头，字母或数字结尾"></u-input>
    </u-form-item>
    <u-form-item title="规格">
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
    <u-form-item title="端口号">
        <u-input maxlength="5" placeholder="1150-65535" value="3306"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary">立即创建</u-button>
    </u-form-item>
</u-form>
```

### 行内

``` html
<u-form inline>
    <u-form-item title="状态">
        <u-input size="small" maxlength="63" placeholder="认证中"></u-input>
    </u-form-item>
    <u-form-item title="用户名">
        <u-input size="small" maxlength="63" placeholder="请输入用户名"></u-input>
    </u-form-item>
    <u-form-item title="联系号码">
        <u-input size="small" maxlength="63" placeholder="请输入联系号码"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary">查询</u-button>
    </u-form-item>
</u-form>
```

## 表单验证
### 规则列表

每个表单项的验证行为用一个有序列表`rules`来声明，列表中包含若干条验证规则。结构如下：

``` javascript
[{ type: 'string', required: true, ... }, { type: 'string', min: ... }, { type: 'string', pattern: ... }, ...]
```

每条规则至少包含以下几个参数：
- `type`：数据类型
- `trigger`：触发方式
- `message`：验证不通过时的消息提示
- ...

下面举个例子，一个用户名输入框的验证包含以下规则：

1. 必须输入用户名，失焦验证
2. 以字母开头，实时验证
3. 字母、数字或中划线组成，实时验证
4. 以字母或数字结尾，失焦验证
5. 4~12个字符，失焦验证

``` vue
<template>
<u-form-item title="用户名" :rules="rules">
    <u-input maxlength="112" placeholder="4~12位字母、数字或中划线组成"></u-input>
</u-form-item>
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

### 数据类型

- `string`: Must be of type string. This is the default type.
- `number`: Must be of type number.
- `boolean`: Must be of type boolean.
- `method`: Must be of type function.
- `regexp`: Must be an instance of RegExp or a string that does not generate an exception when creating a new RegExp.
- `integer`: Must be of type number and an integer.
- `float`: Must be of type number and a floating point number.
- `array`: Must be an array as determined by Array.isArray.
- `object`: Must be of type object and not Array.isArray.
- `enum`: Value must exist in the enum.
- `date`: Value must be valid as determined by Date
- `url`: Must be of type url.
- `hex`: Must be of type hex.
- `email`: Must be of type email.

其它请参见[async-validator](https://github.com/yiminghe/async-validator)。
