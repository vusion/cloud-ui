## 验证规则

验证规则（Rule）通过验证器（或表单项）的`rules`属性设置，可以用简写格式（字符串）或完整格式（数组）书写，推荐尽量使用简写格式。

### 简写格式

在一个大的项目中，相同场景的验证规则（包括触发方式和错误提示等）通常会被多次使用。如果将这些规则通过注册好的名称调用，就能减少很多重复的代码。

组件库中已经内置了一些[常见的验证规则](#/components/u-validator/rules)，也可以自己在项目中注册规则（见下文）。

利用这些已有的规则，能够在`rules`属性上拼接成字符串快速使用。

下面举个例子，一个用户名输入框的验证包含以下规则：

1. 必须输入用户名，失焦验证
2. 以字母开头，实时验证
3. 字母、数字或中划线组成，实时验证
4. 以字母或数字结尾，失焦验证
5. 不得少于4个字符，失焦验证

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


利用`@`和`#`，能够对原来的内置规则做一些调整：

下面的例子中：
- 输入格式只进行失焦判断
- 长度提示文案做了修改

``` html
<u-form-item label="用户名" required rules="required | ^azAZ | ^azAZ09-$ @b | azAZ09$ | minLength(4) #4-12个字符">
    <u-input maxlength="12" placeholder="4-12个字符"></u-input>
</u-form-item>
```

触发方式和错误提示在完整格式中会详细讲。下面再看几个例子：

#### 验证唯一性

``` vue
<template>
<u-form-item label="端口" required rules="required | integer | range(80, 65535) | unique(...existingPortList)">
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
    <u-form-item label="密码" required rules="required | ^azAZ09_$ | minLength(4)">
        <u-input size="huge medium" type="password" v-model="model.password" maxlength="8" placeholder="以字母、数字或'_'组成"></u-input>
    </u-form-item>
    <u-form-item label="确认密码" required rules="required | confirmed(model.password)">
        <u-input size="huge medium" type="password" v-model="model.confirmedPassword" maxlength="8" placeholder="再次输入密码"></u-input>
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

### 完整格式

`rules`属性的完整格式为一个包含若干条验证规则的数组。每条规则结构如下：

``` ts
interface Rule {
    validate: string | ValidateFunc, // 验证器名称或验证函数。下面有详细介绍
    args?: any | Array<any> | (() => any | Array<any> | Promise<any | Array<any>>), // 验证参数。下面有详细介绍
    required?: boolean, // 是否为必填规则。如果不是必填，值为空的情况会自动跳过此规则
    trigger?: string, // 触发方式。下面有详细介绍
    message?: string, // 错误提示
    ignore?: boolean, // 是否忽略该条规则
    muted?: boolean, // 是否仅验证但不提示
    [prop: string]: any, // 自定义属性
}
```

再看一下上面例子`required | ^azAZ | ^azAZ09-$ | azAZ09$ | minLength(4)`的完整格式：

``` html
<u-form-item label="用户名" required :rules="[
    { validate: 'required', required: true, trigger: 'blur', message: '请输入用户名' },
    { validate: 'pattern', args: /^[a-zA-Z]/, trigger: 'input+blur', message: '以字母开头' },
    { validate: 'pattern', args: /^[a-zA-Z0-9-]$/, trigger: 'input+blur', message: '字母、数字或中划线组成' },
    { validate: 'pattern', args: /[a-zA-Z0-9]$/, trigger: 'blur', message: '以字母或数字结尾' },
    { validate: 'minLength', args: [4], trigger: 'blur', message: '不得少于4个字符' },
]">
    <u-input maxlength="12" placeholder="4-12个字符"></u-input>
</u-form-item>
```

#### 验证器名称或验证函数

验证器（Validator）是内置的或者注册好的简单函数，它的结构如下：

参数为需要验证的值，加上若干函数需要的参数。返回布尔值或布尔值的 Promise。

``` ts
type Validator = (value: any, ...args: any[]) => boolean | Promise<boolean>;
```

参见[内置的验证器](https://github.com/vusion/atom-validator/blob/master/src/builtIn/validators.ts)。

验证函数（ValidateFunc）是验证规则需要即时调用的函数，常用于处理同步或异步方法。与验证器有所不同，它的结构如下：

``` ts
type ValidateResult = boolean | string | void;
type ValidateFunc = (value: any, rule: Rule, options?: Object) => ValidateResult | Promise<ValidateResult>;
```

参数为需要验证的值、规则对象、可选项。可选项可以通过 UValidator 组件的`validating-options`传入。

当验证函数的返回值为以下类型时，分别情况为：
- boolean，为`true`时通过验证，为`false`时显示`message`对应的错误提示
- void 即`undefined`时，通过验证，同`true`
- string，直接把返回的字符串显示错误提示
- Promise，待异步获取到结果时，按以上类型处理

#### 验证参数

应用到验证器中的参数。

类型可以为：
- 一个数组
- 一个值，是单个参数的简写
- 一个函数，待函数执行后再传入验证器计算
- 函数返回值可以为 Promise

#### 触发方式

表单验证按照实时性通常可以分为：手动验证、失焦验证、实时验证，验证规则中`trigger`字段分别对应的值为：`''`, `'blur'`, `'input'`，可以组合使用，如`input+blur`。

### 混合编写

有时需要执行一些复杂的验证，比如异步验证或一些自定义的方法，这时可以将字符串格式与完整格式混合编写。

下面是一个**异步验证**的例子，添加一个异步判断重复的验证：

``` vue
<template>
<u-form-item label="用户名" required :rules="nameRules">
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

也可以都拆解开：

``` vue
<template>
<u-form-item label="用户名" required :rules="nameRules">
    <u-input maxlength="12" placeholder="4-12个字符"></u-input>
</u-form-item>
</template>
<script>
export default {
    data() {
        return {
            nameRules: [
                'required',
                '^azAZ',
                '^azAZ09-$',
                'azAZ09$',
                'minLength(4)',
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

### 动态验证

有时`rules`属性需要根据不同情形进行变化，这时直接给属性绑定动态字符串或数组。

``` vue
<template>
<u-form ref="form">
    <u-form-item>
        <u-radios v-model="model.protocol">
            <u-radio label="HTTP">HTTP</u-radio>
            <u-radio label="HTTPS">HTTPS</u-radio>
        </u-radios>
    </u-form-item>
    <u-form-item label="端口" required :rules="model.protocol === 'HTTP' ?
        'required | integer | range(80, 65535) | unique(...existingPortList)' :
        'required | integer | range(443, 65535) | unique(...existingPortList)'">
        <u-input size="huge medium" v-model.number="model.port" maxlength="5" :placeholder="model.protocol === 'HTTP' ? '80-65535内的整数' : '443-65535内的整数'"></u-input>
    </u-form-item>
</u-form>
</template>
<script>
export default {
    data() {
        return {
            model: {
                protocol: 'HTTP',
                port: '',
            },
            existingPortList: [8000, 3306, 65535],
        };
    },
};
</script>
```

或者直接使用混合编写来处理复杂验证。

``` vue
<template>
<u-form ref="form">
    <u-form-item>
        <u-radios v-model="model.protocol">
            <u-radio label="HTTP">HTTP</u-radio>
            <u-radio label="HTTPS">HTTPS</u-radio>
        </u-radios>
    </u-form-item>
    <u-form-item label="端口" required :rules="portRules">
        <u-input size="huge medium" v-model.number="model.port" maxlength="5" :placeholder="model.protocol === 'HTTP' ? '80或1025-65535内的整数' : '443或1025-65535内的整数'"></u-input>
    </u-form-item>
</u-form>
</template>
<script>
export default {
    data() {
        return {
            model: {
                protocol: 'HTTP',
                port: '',
            },
            existingPortList: [8000, 3306, 65535],
            portRules: [
                'required',
                'integer',
                {
                    trigger: 'blur',
                    validate: (value, rule, options) => {
                        value = +value;
                        if (this.model.protocol === 'HTTP') {
                            if (value === 80 || value >= 1025 && value <= 65535)
                                return true;
                            else
                                return '80或1025-65535内的整数';
                        } else {
                            if (value === 443 || value >= 1025 && value <= 65535)
                                return true;
                            else
                                return '443或1025-65535内的整数';
                        }
                    },
                },
                'unique(...existingPortList)',
            ],
        };
    },
    watch: {
        'model.protocol'() {
            this.$nextTick(() => this.$refs.form.validate());
        },
    },
};
</script>
```

### 注册验证规则

可以在 Vue 组件 options 的`rules`字段中自己注册规则。

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

上面的例子，也可以先在 Vue 组件 options 的`validators`字段中注册验证器，再注册规则。

``` vue
<template>
<u-form-item label="颜色" rules="hexColor">
    <u-input placeholder="请输入十六进制颜色值"></u-input>
</u-form-item>
</template>
<script>
export default {
    validators: {
        hexColor: (value) => /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value),
    },
    rules: {
        hexColor: { validate: 'hexColor', message: '颜色值格式不正确', trigger: 'blur' },
    },
};
</script>
```

> Vue 组件 options 的`rules`和`validators` 可以经由`mixins`或`extends`传递。
>
> 如果要全局注册规则和验证器，请使用`Vue.rule(id, rule)`和`Vue.validator(id, validator)`方法。

### 复合验证规则

注册验证规则支持复合规则，也就是多个规则合并注册为一个。

比如有几个字段有相同的一段验证逻辑，可以将它们定义成新的验证规则，再复合使用。

``` vue
<template>
<u-form gap="large">
    <u-form-item label="名称1" required rules="nameBase | rangeLength(4,12) | unique(...existingList)">
        <u-input size="huge medium" maxlength="12" placeholder="4-12个字符"></u-input>
    </u-form-item>
    <u-form-item label="名称2" required rules="nameBase | rangeLength(8,24)">
        <u-input size="huge medium" maxlength="24" placeholder="8-24个字符"></u-input>
    </u-form-item>
</u-form>
</template>
<script>
export default {
    rules: {
        nameBase: 'required | ^azAZ | ^azAZ09-$ | azAZ09$',
    },
    data() {
        return {
            existingList: ['abcd', 'aaaa', 'ABCD'],
        };
    },
};
</script>
```

## 嵌套验证

嵌套验证是这样一种功能，叶子级别的验证（MField 验证）状态、信息和事件可以一层一层父级验证器传递，最终传到`<u-form>`上。在任意层级都能获取到嵌套层内是否通过（valid）、是否触发（touched）、是否修改（dirty）、首个错误（firstError）等信息。同时也可以通过调`<u-form>`的 validate 方法，验证所有子验证项。

### 单行嵌套

对于在同一行水平排列的输入框，如果希望它们的错误提示只出现在行尾。这时需要用嵌套验证功能实现。

嵌套验证，内部的验证器会将验证结果（验证是否成功、错误提示）向外抛。

将`muted`属性设置为`message`，可以屏蔽内部验证器提示，但不屏蔽输入框的红框样式。

``` html
<u-validator>
    <u-linear-layout gap="small">
        <u-validator label="容器端口" rules="required | integer | range(1,65535) @i" muted="message">
            <u-input size="huge normal" placeholder="容器端口，1-65535内的整数"></u-input>
        </u-validator>
        <u-validator label="服务端口" rules="required | integer | range(1,65535) @i" muted="message">
            <u-input size="huge normal" placeholder="服务端口，1-65535内的整数"></u-input>
        </u-validator>
    </u-linear-layout>
</u-validator>
```

当然，空间比较小时，也可以使用`placement`提示在下面。

``` html
<u-linear-layout gap="small">
    <u-validator label="容器端口" rules="required | integer | range(1,65535) @i" placement="bottom">
        <u-input size="huge normal" placeholder="容器端口，1-65535内的整数"></u-input>
    </u-validator>
    <u-validator label="服务端口" rules="required | integer | range(1,65535) @i" placement="bottom">
        <u-input size="huge normal" placeholder="服务端口，1-65535内的整数"></u-input>
    </u-validator>
</u-linear-layout>
```

### 复杂案例

下面这些组件已经集成了 UValidator 的嵌套验证功能，可以去相应文档进行查阅[UFormTableView](#components/u-form-table-view)、[UDynamicCards](#components/u-dynamic-cards)。

## 其它

### 过长提示

通过给表单控件设置`maxlength-message`属性，可以在已输入至最大长度的情况下继续输入时，给用户提示消息。

``` html
<u-form ref="form">
    <u-form-item label="用户名">
        <u-input maxlength="4" maxlength-message="不超过4个字符" placeholder="不超过4个字符"></u-input>
    </u-form-item>
</u-form>
```

### 失去焦点，还原正确的值

``` html
<u-form-item label="用户名" rules="^azAZ | ^azAZ09-$ | azAZ09$ | minLength(4)" blur-reset>
    <u-input maxlength="12" placeholder="4-12个字符" value="oldValue"></u-input>
</u-form-item>
```
