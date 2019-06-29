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

## 原子化验证规则

原子化验证可以方便简化规则写法，注册常用的规则。

### 完整写法

``` html
<u-validator label="用户名" :rules="[
    { validate: 'required', trigger: 'blur', message: '请输入用户名' },
    { validate: 'regexp', args: /^[a-zA-Z]/, trigger: 'input+blur', message: '以字母开头' },
    { validate: 'regexp', args: /[a-zA-Z0-9]$/, trigger: 'blur', message: '以字母或数字结尾' },
    { validate: 'minLength', args: [4], trigger: 'blur', message: '不得少于4个字符' },
]">
    <u-input placeholder="不得少于4个字符"></u-input>
</u-validator>
```

### 字符串简写

``` html
<u-validator label="用户名" rules="required | ^azAZ | azAZ09$ | minLength(4)">
    <u-input placeholder="不得少于4个字符"></u-input>
</u-validator>
```

### 自定义验证

``` vue
<template>
<u-validator label="端口" rules="port">
    <u-input placeholder="1-65535内的整数"></u-input>
</u-validator>
</template>
<script>
export default {
    rules: {
        port: 'required | range(1,65535) @i',
    },
};
</script>
```
