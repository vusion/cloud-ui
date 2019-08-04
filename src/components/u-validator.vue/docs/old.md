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
<u-form-item label="用户名" :rules="rules">
    <u-input size="huge" maxlength="112" placeholder="4~12位字母、数字或中划线组成"></u-input>
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

#### 多字段的规则列表

如果一个表单多个字段有规则列表，可以在`u-form`中汇总传入。

``` vue
<template>
<u-form ref="form" gap="large" :rules="rules">
    <u-form-item label="用户名" name="username">
        <u-input size="huge" maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
    <u-form-item label="邮箱" name="email">
        <u-input size="huge" maxlength="24" placeholder="请输入邮箱"></u-input>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            rules: {
                username: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入用户名' },
                    { type: 'string', min: 4, max: 12, trigger: 'blur', message: '请输入4~12个字符' },
                ],
                email: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入邮箱' },
                    { type: 'email', trigger: 'blur', message: '邮箱格式不正确' },
                ],
            },
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

### 触发方式

表单验证行为按照实时性通常可以分为三种：提交验证、失焦验证、实时验证，分别对应验证规则`trigger`的三种触发方式：`submit`, `blur`, `input`，规则中默认为`submit`。

另外还有一种行为叫表单限制，不属于表单验证，但通常与之配合使用。

#### 提交验证

点击表单提交按钮时才对表单中所有控件进行验证，通常对应submit按钮的`click`事件。示例如下：

``` vue
<template>
<u-form ref="form" gap="large" :rules="rules">
    <u-form-item label="用户名" name="username">
        <u-input size="huge" maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
    <u-form-item label="邮箱" name="email">
        <u-input size="huge" maxlength="24" placeholder="请输入邮箱"></u-input>
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
            rules: {
                username: [
                    { type: 'string', required: true, message: '请输入用户名' },
                    { type: 'string', min: 4, max: 12, message: '请输入4~12个字符' },
                ],
                email: [
                    { type: 'string', required: true, message: '请输入邮箱' },
                    { type: 'email', message: '邮箱格式不正确' },
                ],
            },
        };
    },
    methods: {
        submit() {
            this.$refs.form.validate()
                .then(() => alert('提交成功'))
                .catch(() => {});
        },
    },
};
</script>
```

#### 失焦验证

在表单控件失去焦点时对该控件进行验证，通常对应表单控件的`blur`事件。示例如下：

``` vue
<template>
<u-form ref="form" gap="large" :rules="rules">
    <u-form-item label="用户名" name="username">
        <u-input size="huge" maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
    <u-form-item label="邮箱" name="email">
        <u-input size="huge" maxlength="24" placeholder="请输入邮箱"></u-input>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            rules: {
                username: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入用户名' },
                    { type: 'string', min: 4, max: 12, trigger: 'blur', message: '请输入4~12个字符' },
                ],
                email: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入邮箱' },
                    { type: 'email', trigger: 'blur', message: '邮箱格式不正确' },
                ],
            },
        };
    },
};
</script>
```

#### 实时验证

在表单控件的值实时输入改变时，对该控件进行验证，通常对应表单的`input`事件。当只激活实时验证时，失焦验证会跳过此规则并且覆盖原来的结果，因此通常我们需要采用实时与失焦叠加的方式`input+blur`。

下面的例子中，对用户名长度和邮箱格式的判断为实时验证。其中邮箱的验证没有采用实时与失焦叠加的方式，可以发现这种方式不是很合理。

``` vue
<template>
<u-form ref="form" gap="large" :rules="rules">
    <u-form-item label="用户名" name="username">
        <u-input size="huge" maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
    <u-form-item label="邮箱" name="email">
        <u-input size="huge" maxlength="24" placeholder="请输入邮箱"></u-input>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            rules: {
                username: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入用户名' },
                    { type: 'string', min: 4, max: 12, trigger: 'input+blur', message: '请输入4~12个字符' },
                ],
                email: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入邮箱' },
                    { type: 'email', trigger: 'input', message: '邮箱格式不正确' },
                ],
            },
        };
    },
};
</script>
```

#### 表单限制

在表单控件的值改变时，对该值限制在规定的长度或范围内，如`<input>`控件的部分`type`和`maxlength`的限制行为等：

``` html
<u-form gap="large">
    <u-form-item label="用户名">
        <u-input size="huge" maxlength="4" placeholder="不超过4个字符"></u-input>
    </u-form-item>
</u-form>
```

### 验证提示

`<u-form-item>`的`message`属性用于设置默认提示，规则中的`message`字段用于设置验证不通过时提示。

``` vue
<template>
<u-form ref="form" :rules="rules">
    <u-form-item label="用户名" name="username" message="用户名是唯一的">
        <u-input maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            rules: {
                username: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入用户名' },
                    { type: 'string', min: 4, max: 12, trigger: 'blur', message: '请输入4~12个字符' },
                ],
            },
        };
    },
};
</script>
```

通过给表单控件设置`maxlength-message`属性，可以在已输入至最大长度的情况下继续输入时，给用户提示消息。

``` html
<u-form ref="form">
    <u-form-item label="用户名">
        <u-input maxlength="4" maxlength-message="不超过4个字符" placeholder="不超过4个字符"></u-input>
    </u-form-item>
</u-form>
```

表单控件`u-form-item`支持自定义左边显示内容，通过传入`slot='label'`、`slot='description'` 插槽来实现`label`, `description`属性所实现的功能，此时控件属性`label`, `description`会失效，`slot='extra'`插槽是用来实现插入其他自定义内容。

``` html
<u-form ref="form">
    <u-form-item required layout="block">
        <span slot="label">
            用户名
        </span>
        <div slot="description">描述描述</div>
        <u-tooltip content="请输入正确格式的中文汉字" slot="extra" >
            <i-icon name="alert" size="small"></i-icon>
        </u-tooltip>
        <u-input maxlength="4" maxlength-message="不超过4个字符" placeholder="不超过4个字符"></u-input>
    </u-form-item>
</u-form>
```
