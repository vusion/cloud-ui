## 验证规则

验证规则通过验证器（或表单项）的`rules`属性设置。

### 完整格式

该属性的完整格式为一个包含若干条验证规则的数组。每条规则结构如下：

``` ts
interface Rule {
    validate: string | ValidateFunc, // 验证函数
    args?: any | Array<any> | (() => any | Array<any> | Promise<any | Array<any>>), // 验证参数
    trigger?: string, // 触发方式
    message?: string, // 错误提示
    ignore?: boolean, // 是否忽略该条规则
    muted?: boolean, // 是否仅验证但不提示
    [prop: string]: any, // 自定义属性
}
```

下面举个例子，一个用户名输入框的验证包含以下规则：

1. 必须输入用户名，失焦验证
2. 以字母开头，实时验证
3. 字母、数字或中划线组成，实时验证
4. 以字母或数字结尾，失焦验证
5. 不得少于4个字符，失焦验证

``` html
<u-form-item label="用户名" :rules="[
    { validate: 'required', required: true, trigger: 'blur', message: '请输入用户名' },
    { validate: 'pattern', args: /^[a-zA-Z]/, trigger: 'input+blur', message: '以字母开头' },
    { validate: 'pattern', args: /^[a-zA-Z0-9-]$/, trigger: 'input+blur', message: '字母、数字或中划线组成' },
    { validate: 'pattern', args: /[a-zA-Z0-9]$/, trigger: 'blur', message: '以字母或数字结尾' },
    { validate: 'minLength', args: [4], trigger: 'blur', message: '不得少于4个字符' },
]">
    <u-input maxlength="12" placeholder="4-12个字符"></u-input>
</u-form-item>
```

#### 验证参数

验证参数可以为一个值，或者一个数组，或者一个函数。

#### 触发方式

表单验证按照实时性通常可以分为：手动验证、失焦验证、实时验证，验证规则中`trigger`字段分别对应的值为：`''`, `'blur'`, `'input'`，可以组合使用，如`input+blur`。

### 简写格式

在一个大的项目中，相同场景的验证规则通常会被多次使用。组件库中已经内置了一些常见的验证规则，也可以自己在项目中定义规则。

可以利用这些已有的规则，可以在`rules`属性上快速添加。比如上面的例子可简化为：

``` html
<u-form-item label="用户名" rules="required | ^azAZ | ^azAZ09-$ | azAZ09$ | minLength(4)">
    <u-input maxlength="12" placeholder="4-12个字符"></u-input>
</u-form-item>
```

#### 字符串简写说明：

多条验证规则用`|`分隔开，类似 Vue 的过滤器写法。

每条验证格式为`name @bi #message`，各项顺序不能互换。

- `name`为已注册的验证规则名称：可以添加参数，如`name(arg1, arg2)`
- `@`后面添加触发方式：`i`表示`input`，`b`表示`blur`，可单独或组合使用，如：`@input`、`@b`、`@bi`等
- `#`后面添加错误提示：内容会一直截止到下一个`|`或字符串结尾

比如下面的例子中，对原来的内置规则做了一些调整：
- 输入格式只进行失焦判断
- 长度提示文案做了修改

``` html
<u-form-item label="用户名" rules="required | ^azAZ | ^azAZ09-$ @b | azAZ09$ | minLength(4) #4-12个字符">
    <u-input maxlength="12" placeholder="4-12个字符"></u-input>
</u-form-item>
```

再举几个例子：

#### 验证唯一性

``` vue
<template>
<u-form-item label="端口" rules="required | integer | range(80, 65535) | unique(...existingPortList)">
    <u-input v-model.number="model.port" maxlength="5" placeholder="80-65535内的整数"></u-input>
</u-form-item>
</template>
<script>
export default {
    data() {
        return {
            model: {
                port: '',
            },
            existingPortList: [8000, 3306, 65535],
        };
    },
};
</script>
```

#### 密码确认场景

``` vue
<template>
<u-form gap="large">
    <u-form-item label="密码" rules="required | ^azAZ09_$ | minLength(4)">
        <u-input type="password" v-model="model.password" maxlength="8" placeholder="以字母、数字或'_'组成"></u-input>
    </u-form-item>
    <u-form-item label="确认密码" rules="required | confirmed(model.password)">
        <u-input type="password" v-model="model.confirmedPassword" maxlength="8" placeholder="再次输入密码"></u-input>
    </u-form-item>
</u-form>
</template>
<script>
export default {
    data() {
        return {
            model: {
                password: '',
                confirmedPassword: '',
            },
        };
    },
};
</script>
```

### 混合编写

有时需要异步验证，或者自定义一些方法，这时可以将字符串格式与完整格式混合编写。

``` vue
<template>
<u-form-item label="用户名" :rules="nameRules">
    <u-input maxlength="12" placeholder="4-12个字符"></u-input>
</u-form-item>
</template>
<script>
export default {
    data() {
        return {
            nameRules: [
                'required | ^azAZ | ^azAZ09-$ | azAZ09$ | minLength(4)',
                { message: '该用户名已经存在', trigger: 'blur', validate(value, rule, options) {
                    return new Promise((resolve, reject) => {
                        // 这里模拟一个异步请求
                        setTimeout(() => {
                            resolve(!['abcd', 'aaaa', 'ABCD'].includes(value));
                        }, 200);
                    });
                } },
            ],
        };
    },
};
</script>
```

### 自定义验证规则

``` vue
<template>
<u-form-item label="颜色" rules="hexColor">
    <u-input placeholder="请输入十六进制颜色值"></u-input>
</u-form-item>
</template>
<script>
export default {
    rules: {
        hexColor: { validate: 'pattern', args: /^#([0-9a-f]{3}|[0-9a-f]{6})$/i, message: '颜色值格式不正确', trigger: 'blur' },
    },
};
</script>
```

## 嵌套验证

### 单行嵌套

对于在同一行水平排列的输入框，我们希望它们的错误提示只出现在行尾。这时需要用嵌套验证功能实现。

嵌套验证，内部的验证器会将验证结果（验证是否成功、错误提示）向外抛。

将`muted`属性设置为`message`，可以屏蔽内部验证器提示，但不屏蔽输入框的红框提示。

``` html
<u-validator>
    <u-linear-layout gap="small">
        <u-validator label="容器端口" rules="required | range(1,65535) @i" muted="message">
            <u-input size="huge normal" placeholder="1-65535内的整数"></u-input>
        </u-validator>
        <u-validator label="服务端口" rules="required | range(1,65535) @i" muted="message">
            <u-input size="huge normal" placeholder="1-65535内的整数"></u-input>
        </u-validator>
    </u-linear-layout>
</u-validator>
```
