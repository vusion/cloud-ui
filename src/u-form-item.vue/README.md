# 表单项

## 示例
### 基本形式

``` html
<u-form-item title="服务名称">
    <u-input maxlength="24" placeholder="1-24位小写字母、数字或中划线组成" autofocus></u-input>
</u-form-item>
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
