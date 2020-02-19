<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UValidator 验证器

**UI 组件**, **表单验证器**, **行内展示**

实现了基础的嵌套验证功能和原子化验证功能，包含提示样式。常用于嵌套验证时使用，或用于派生一些较复杂的组件。

## 基础示例
## 验证规则

验证规则（Rule）通过验证器（或表单项）的`rules`属性设置，可以用简写格式（字符串）或完整格式（数组）书写，推荐尽量使用简写格式。

### 简写格式

在一个大的项目中，相同场景的验证规则（包括触发方式和错误提示等）通常会被多次使用。如果将这些规则通过注册好的名称调用，就能减少很多重复的代码。

组件库中已经内置了一些[常见的验证规则](./rules)，也可以自己在项目中注册规则（见下文）。

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
            this.$nextTick(() => this.$refs.form.validate().catch(() => {}));
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

下面这些组件已经集成了 UValidator 的嵌套验证功能，可以去相应文档进行查阅[UFormTableView](../u-form-table-view)、[UDynamicCards](../u-dynamic-cards)。

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

## 内置规则
### 空值判断

#### required <u-label>blur</u-label>

必填，为空值会提示错误。空值指`''`、`undefined`、`null`。没有参数。

在值为空的情况下，如果没有使用`required`、`filled`或`notEmpty`这些必填规则，其他规则会自动通过。

``` html
<u-validator label="用户名" rules="required">
    <u-input placeholder="请输入用户名"></u-input>
</u-validator>
```

#### filled <u-label>blur</u-label>

必填，在`required`基础上，字符串不能全为空白（即调用`trim`方法）。没有参数。

例如输入多个空格，会提示错误。

``` html
<u-validator label="描述" rules="filled">
    <u-input placeholder="请输入描述"></u-input>
</u-validator>
```

#### notEmpty <u-label>input+blur</u-label>

数组不能为空。字符串也可以比较。

``` html
<u-validator label="列表" rules="notEmpty">
    <u-checkboxes>
        <u-checkbox label="水杯">水杯</u-checkbox>
        <u-checkbox label="坚果">坚果</u-checkbox>
        <u-checkbox label="毛巾">毛巾</u-checkbox>
        <u-checkbox label="沙发">沙发</u-checkbox>
    </u-checkboxes>
</u-validator>
```

#### empty <u-label>input+blur</u-label>

必须为空。与`notEmpty`相反。字符串也可以比较。

``` html
<u-validator label="列表" rules="empty">
    <u-checkboxes>
        <u-checkbox label="水杯">水杯</u-checkbox>
        <u-checkbox label="坚果">坚果</u-checkbox>
        <u-checkbox label="毛巾">毛巾</u-checkbox>
        <u-checkbox label="沙发">沙发</u-checkbox>
    </u-checkboxes>
</u-validator>
```

### 范围判断

#### minLength(min: number) <u-label>blur</u-label>

不得少于指定的字符数。字符串、数组长度均可比较。

- `min`：最小长度

``` html
<u-validator label="用户名" rules="minLength(4)">
    <u-input placeholder="不得小于4个字符"></u-input>
</u-validator>
```

#### maxLength(min: number) <u-label>blur</u-label>

不得超过指定的字符数。字符串、数组长度均可比较。

- `max`：最大长度

``` html
<u-validator label="用户名" rules="maxLength(12)">
    <u-input placeholder="不得超过12个字符"></u-input>
</u-validator>
```

#### rangeLength(min: number, max: number) <u-label>blur</u-label>

字符数必须在指定的范围内。字符、数组长度均可比较。

- `min`：最小长度
- `max`：最大长度

``` html
<u-validator label="用户名" rules="rangeLength(4,12)">
    <u-input placeholder="请输入4-12个字符"></u-input>
</u-validator>
```

#### min(min: any) <u-label>blur</u-label>

不得小于指定的值。数字、字符串、日期比较均可。

- `min`：最小值

``` html
<u-validator label="端口" rules="min(10)">
    <u-input placeholder="不得小于10"></u-input>
</u-validator>
```

#### max(min: any) <u-label>blur</u-label>

不得大于指定的值。数字、字符串、日期比较均可。

- `max`：最大值

``` html
<u-validator label="端口" rules="max(65535)">
    <u-input placeholder="不得大于65535"></u-input>
</u-validator>
```

#### range(min: any, max: any) <u-label>blur</u-label>

不得大于指定的值。数字、字符串、日期比较均可。

- `min`：最小值
- `max`：最大值

``` html
<u-validator label="端口" rules="range(80,8000)">
    <u-input placeholder="在80-8000之间"></u-input>
</u-validator>
```

### 自定义

#### pattern(re: RegExp) <u-label>input+blur</u-label>

根据正则表达式来判断。

- `re`：正则表达式

``` html
<u-validator label="昵称" rules="pattern(/^[a-z][a-zA-Z0-9]*$/)">
    <u-input size="normal medium" placeholder="由字母和数字组成，开头必须为小写字母"></u-input>
</u-validator>
```

### 相等或包含判断

#### is(arg: any) <u-label>blur</u-label>

必须与参数相同，使用`===`比较。

- `arg`：用于判断的值

``` html
<u-validator label="猜一猜" rules="is('abc')">
    <u-input placeholder="必须与'abc'相同"></u-input>
</u-validator>
```

``` html
<u-validator label="个数" rules="is(3) @bi">
    <u-number-input placeholder="必须与3相等"></u-number-input>
</u-validator>
```

#### isNot(arg: any) <u-label>blur</u-label>

必须与参数不同，使用`===`比较。

- `arg`：用于判断的值

``` html
<u-validator label="猜一猜" rules="isNot('abc')">
    <u-input placeholder="必须与'abc'不同"></u-input>
</u-validator>
```

``` html
<u-validator label="个数" rules="isNot(3) @bi">
    <u-number-input placeholder="必须不等于3"></u-number-input>
</u-validator>
```

#### equals(arg: any) <u-label>blur</u-label>

必须与参数相等，除了数值，也可以比较数组和对象，使用的是[lodash.isEqual](https://www.lodashjs.com/docs/latest#_isequalvalue-other)。

- `arg`：用于判断的值

``` html
<u-validator label="猜一猜" rules="equals('abc')">
    <u-input placeholder="必须等于'abc'"></u-input>
</u-validator>
```

``` html
<u-validator label="列表" rules="equals(['水杯', '坚果']) @bi">
    <u-checkboxes>
        <u-checkbox label="水杯">水杯</u-checkbox>
        <u-checkbox label="坚果">坚果</u-checkbox>
        <u-checkbox label="毛巾">毛巾</u-checkbox>
        <u-checkbox label="沙发">沙发</u-checkbox>
    </u-checkboxes>
</u-validator>
```

#### notEquals(arg: any) <u-label>blur</u-label>

必须与参数不等，除了数值，也可以比较数组和对象，使用的是[lodash.isEqual](https://www.lodashjs.com/docs/latest#_isequalvalue-other)。

- `arg`：用于判断的值

``` html
<u-validator label="猜一猜" rules="notEquals('abc')">
    <u-input placeholder="必须不等于'abc'"></u-input>
</u-validator>
```

``` html
<u-validator label="列表" rules="notEquals(['水杯', '坚果']) @bi">
    <u-checkboxes>
        <u-checkbox label="水杯">水杯</u-checkbox>
        <u-checkbox label="坚果">坚果</u-checkbox>
        <u-checkbox label="毛巾">毛巾</u-checkbox>
        <u-checkbox label="沙发">沙发</u-checkbox>
    </u-checkboxes>
</u-validator>
```

#### confirmed(arg: any) <u-label>blur</u-label>

验证逻辑与`equals`相同，错误信息专用于密码的二次确认。

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

#### includes(...args: any[]) <u-label>input+blur</u-label>

验证值为数组，必须包含参数中的项。

``` html
<u-validator label="列表" rules="includes('水杯', '坚果')">
    <u-checkboxes>
        <u-checkbox label="水杯">水杯</u-checkbox>
        <u-checkbox label="坚果">坚果</u-checkbox>
        <u-checkbox label="毛巾">毛巾</u-checkbox>
        <u-checkbox label="沙发">沙发</u-checkbox>
    </u-checkboxes>
</u-validator>
```

#### excludes(...args: any[]) <u-label>input+blur</u-label>

验证值为数组，不能包含参数中的项。

``` html
<u-validator label="列表" rules="excludes('水杯', '坚果')">
    <u-checkboxes>
        <u-checkbox label="水杯">水杯</u-checkbox>
        <u-checkbox label="坚果">坚果</u-checkbox>
        <u-checkbox label="毛巾">毛巾</u-checkbox>
        <u-checkbox label="沙发">沙发</u-checkbox>
    </u-checkboxes>
</u-validator>
```

#### included(...args: any[]) <u-label>input+blur</u-label>

必须为参数中的某一个值。

``` html
<u-validator label="列表" rules="included('水杯', '坚果')">
    <u-select>
        <u-select-item value="水杯">水杯</u-select-item>
        <u-select-item value="坚果">坚果</u-select-item>
        <u-select-item value="毛巾">毛巾</u-select-item>
        <u-select-item value="沙发">沙发</u-select-item>
    </u-select>
</u-validator>
```

#### excluded(...args: any[]) <u-label>input+blur</u-label>

不能为参数中的任一个值。

``` html
<u-validator label="列表" rules="excluded('水杯', '坚果')">
    <u-select>
        <u-select-item value="水杯">水杯</u-select-item>
        <u-select-item value="坚果">坚果</u-select-item>
        <u-select-item value="毛巾">毛巾</u-select-item>
        <u-select-item value="沙发">沙发</u-select-item>
    </u-select>
</u-validator>
```

#### unique(...args: any[]) <u-label>blur</u-label>

验证逻辑与`excluded`相同，错误信息专用于判断是否重复。

``` vue
<template>
<u-form-item label="端口" required rules="required | integer | unique(...existingPortList)">
    <u-input v-model.number="model.port" maxlength="5" placeholder="请输入端口"></u-input>
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

#### noDuplicates(arg: any[]) <u-label>input</u-label>

接受一个数组作为参数，验证数组中是否存在重复项。

``` html
<u-validator label="选项" rules="noDuplicates">
    <u-select multiple>
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="towel">毛巾</u-select-item>
    </u-select>
</u-validator>
```

### 类型判断

#### string <u-label>input+blur</u-label>

必须为字符串类型。

``` html
<u-validator label="选项" rules="string">
    <u-radios>
        <u-radio label="1">字符串</u-radio>
        <u-radio :label="2">数字</u-radio>
        <u-radio :label="[]">数组</u-radio>
    </u-radios>
</u-validator>
```

#### number <u-label>input+blur</u-label>

必须为数字类型。

使用`v-model`时，注意加入`.number`修饰符。

例如`'12'`会报错。

``` vue
<template>
<u-validator label="端口" rules="number">
    <u-input v-model="value" placeholder="必须为数字类型"></u-input>
</u-validator>
</template>
<script>
export default {
    data() {
        return {
            value: '',
        };
    },
};
</script>
```

#### numeric(noSymbols?: boolean) <u-label>input+blur</u-label>

必须为数字。与`number`规则不同的是，它不关心是否为 string 或 number 类型，只要为数字即可。

例如`12`和`'12'`均可。

- `noSymbols`：如果为`true`，则不能包含如`+`、`-`、`.`这样的符号

``` vue
<template>
<u-validator label="端口" rules="numeric">
    <u-input v-model="value" placeholder="必须为数字"></u-input>
</u-validator>
</template>
<script>
export default {
    data() {
        return {
            value: '',
        };
    },
};
</script>
```

#### integer <u-label>input+blur</u-label>

必须为整数。不关心是否为 string 或 number 类型。

``` html
<u-validator label="超时时间" rules="integer">
    <u-input placeholder="必须为整数"></u-input>
</u-validator>
```

#### decimal(force?: boolean, digits?: string) <u-label>blur</u-label>

整数或小数。不关心是否为 string 或 number 类型。

- `force`：是否只允许小数
- `digits`：小数位数范围，格式如`1,3`。默认为`1,`

``` html
<u-validator label="金额" rules="decimal(true, '2,2')">
    <u-input placeholder="必须为两位小数"></u-input>
</u-validator>
```

#### boolean <u-label>input+blur</u-label>

必须为布尔类型。

``` html
<u-validator label="选项" rules="boolean">
    <u-radios>
        <u-radio label="abc">字符串</u-radio>
        <u-radio :label="true">true</u-radio>
        <u-radio :label="123">数字</u-radio>
    </u-radios>
</u-validator>
```

#### function <u-label>input+blur</u-label>

必须为函数。

``` html
<u-validator label="选项" rules="function">
    <u-radios>
        <u-radio label="abc">字符串</u-radio>
        <u-radio :label="{}">对象</u-radio>
        <u-radio :label="() => true">函数</u-radio>
    </u-radios>
</u-validator>
```

#### object <u-label>input+blur</u-label>

必须为对象。

``` html
<u-validator label="选项" rules="object">
    <u-radios>
        <u-radio label="abc">字符串</u-radio>
        <u-radio :label="{}">对象</u-radio>
        <u-radio :label="[]">数组</u-radio>
    </u-radios>
</u-validator>
```

#### plainObject <u-label>input+blur</u-label>

必须为简单对象。

``` html
<u-validator label="选项" rules="plainObject">
    <u-radios>
        <u-radio label="abc">字符串</u-radio>
        <u-radio :label="{}">简单对象</u-radio>
        <u-radio :label="new Date()">日期</u-radio>
        <u-radio :label="[]">数组</u-radio>
    </u-radios>
</u-validator>
```

### 字母、数字、中划线、下划线判断

#### alpha

是否只能为字母（a-zA-Z）。

``` html
<u-validator label="名称" rules="alpha">
    <u-input placeholder="必须为字母"></u-input>
</u-validator>
```

#### alphaNum

是否只能为字母或数字（a-zA-Z0-9）。

``` html
<u-validator label="名称" rules="alphaNum">
    <u-input placeholder="必须为字母或数字"></u-input>
</u-validator>
```


#### alphaDash <u-label>input+blur</u-label>

必须由字母或下划线组成。

``` html
<u-validator label="名称" rules="alphaDash">
    <u-input placeholder="以字母、下划线组成"></u-input>
</u-validator>
```

#### alphaNumDash <u-label>input+blur</u-label>

必须由字母、数字或下划线组成。

``` html
<u-validator label="名称" rules="alphaNumDash">
    <u-input placeholder="以字母、数字或下划线组成"></u-input>
</u-validator>
```

#### alphaSpaces <u-label>input+blur</u-label>

必须由字母或空格组成。

``` html
<u-validator label="名称" rules="alphaSpaces">
    <u-input placeholder="以字母或空格组成"></u-input>
</u-validator>
```

#### lowerCase <u-label>input+blur</u-label>

不能出现大写字母。

``` html
<u-validator label="名称" rules="lowerCase">
    <u-input placeholder="不能出现大写字母"></u-input>
</u-validator>
```

#### upperCase <u-label>input+blur</u-label>

不能出现小写字母。

``` html
<u-validator label="名称" rules="upperCase">
    <u-input placeholder="不能出现小写字母"></u-input>
</u-validator>
```

#### ^az <u-label>input+blur</u-label>

以小写字母开头。

``` html
<u-validator label="名称" rules="^az">
    <u-input placeholder="以小写字母开头"></u-input>
</u-validator>
```

#### ^az09 <u-label>input+blur</u-label>

以小写字母或数字开头。

``` html
<u-validator label="名称" rules="^az09">
    <u-input placeholder="以小写字母或数字开头"></u-input>
</u-validator>
```

#### ^az09_ <u-label>input+blur</u-label>

以小写字母、数字或下划线开头。

``` html
<u-validator label="名称" rules="^az09_">
    <u-input placeholder="以小写字母、数字或下划线开头"></u-input>
</u-validator>
```

#### ^azAZ <u-label>input+blur</u-label>

以字母开头。

``` html
<u-validator label="名称" rules="^azAZ">
    <u-input placeholder="以字母开头"></u-input>
</u-validator>
```

#### ^azAZ09 <u-label>input+blur</u-label>

以字母或数字开头。

``` html
<u-validator label="名称" rules="^azAZ09">
    <u-input placeholder="以字母或数字开头"></u-input>
</u-validator>
```

#### ^azAZ09_ <u-label>input+blur</u-label>

以字母、数字或下划线开头。

``` html
<u-validator label="名称" rules="^azAZ09_">
    <u-input placeholder="以字母、数字或下划线开头"></u-input>
</u-validator>
```

#### az09$ <u-label>blur</u-label>

以小写字母或数字结尾。

``` html
<u-validator label="名称" rules="az09$">
    <u-input placeholder="以小写字母或数字结尾"></u-input>
</u-validator>
```

#### azAZ09$ <u-label>blur</u-label>

以字母或数字结尾。

``` html
<u-validator label="名称" rules="azAZ09$">
    <u-input placeholder="以字母或数字结尾"></u-input>
</u-validator>
```

#### ^09$ <u-label>input+blur</u-label>

以数字组成。

``` html
<u-validator label="名称" rules="^09$">
    <u-input placeholder="以数字组成"></u-input>
</u-validator>
```

#### ^az09$ <u-label>input+blur</u-label>

以小写字母或数字组成。

``` html
<u-validator label="名称" rules="^az09$">
    <u-input placeholder="以小写字母或数字组成"></u-input>
</u-validator>
```

#### ^az09-$ <u-label>input+blur</u-label>

以小写字母、数字或中划线组成。

``` html
<u-validator label="名称" rules="^az09-$">
    <u-input placeholder="以小写字母、数字或中划线组成"></u-input>
</u-validator>
```

#### ^az09-.$ <u-label>input+blur</u-label>

以小写字母、数字、"-"或"."组成。

``` html
<u-validator label="名称" rules="^az09-.$">
    <u-input placeholder="以小写字母、数字、'-'或'.'组成"></u-input>
</u-validator>
```

#### ^azAZ09$ <u-label>input+blur</u-label>

以字母或数字组成。

``` html
<u-validator label="名称" rules="^azAZ09$">
    <u-input placeholder="以字母或数字组成"></u-input>
</u-validator>
```

#### ^azAZ09-$ <u-label>input+blur</u-label>

以字母、数字或"_"组成。

``` html
<u-validator label="名称" rules="^azAZ09-$">
    <u-input placeholder="以字母、数字或'-'组成"></u-input>
</u-validator>
```

#### ^azAZ09_$ <u-label>input+blur</u-label>

以字母、数字或"_"组成。

``` html
<u-validator label="名称" rules="^azAZ09_$">
    <u-input placeholder="以字母、数字或'_'组成"></u-input>
</u-validator>
```

#### ^azAZ09-_$ <u-label>input+blur</u-label>

以字母、数字、"-"或"_"组成。

``` html
<u-validator label="名称" rules="^azAZ09-_$">
    <u-input placeholder="以字母、数字、'-'或'_'组成"></u-input>
</u-validator>
```

#### without-- <u-label>input+blur</u-label>

不能连续出现中划线。

``` html
<u-validator label="名称" rules="without--">
    <u-input placeholder="不能连续出现中划线"></u-input>
</u-validator>
```

#### without__ <u-label>input+blur</u-label>

不能连续出现下划线。

``` html
<u-validator label="名称" rules="without__">
    <u-input placeholder="不能连续出现下划线"></u-input>
</u-validator>
```

### 特定场景判断

#### email <u-label>blur</u-label>

必须为正确的邮箱。

``` html
<u-validator label="邮箱" rules="email">
    <u-input placeholder="请输入正确的邮箱"></u-input>
</u-validator>
```

#### ip <u-label>blur</u-label>

必须为正确的 IP。

``` html
<u-validator label="IP" rules="ip">
    <u-input placeholder="请输入正确的 IP"></u-input>
</u-validator>
```

#### port <u-label>blur</u-label>

必须为正确的端口。

``` html
<u-validator label="端口" rules="port">
    <u-input placeholder="请输入正确的端口"></u-input>
</u-validator>
```

#### halfWidth <u-label>input+blur</u-label>

需要输入半角字符。

``` html
<u-validator label="名称" rules="halfWidth">
    <u-input placeholder="需要输入半角字符"></u-input>
</u-validator>
```

#### fullWidth <u-label>input+blur</u-label>

必须输入全角字符。

``` html
<u-validator label="名称" rules="fullWidth">
    <u-input placeholder="请输入全角字符"></u-input>
</u-validator>
```

#### ascii <u-label>input+blur</u-label>

必须输入ascii字符。

``` html
<u-validator label="名称" rules="ascii">
    <u-input placeholder="请输入ascii字符"></u-input>
</u-validator>
```

#### base64 <u-label>blur</u-label>

必须输入base64编码。

``` html
<u-validator label="名称" rules="base64">
    <u-input placeholder="请输入base64编码"></u-input>
</u-validator>
```

#### byteLength(min: number, max: number) <u-label>input+blur</u-label>

输入字符串的字节长度范围限制。

- `min`：最小字节长度
- `max`：最大字节长度

``` html
<u-validator label="名称" rules="byteLength(0, 21)">
    <u-input placeholder="请输入八个汉字"></u-input>
</u-validator>
```

#### dataURI <u-label>blur</u-label>

必须输入dataURI编码。

``` html
<u-validator label="编码" rules="dataURI">
    <u-input placeholder="请输入dataURI编码"></u-input>
</u-validator>
```

#### divisibleBy(divisor: number) <u-label>blur</u-label>

输入数字能否被相应除数整除。

- `divisor`：除数

``` html
<u-validator label="名称" rules="divisibleBy(3)">
    <u-input placeholder="请输入3的倍数"></u-input>
</u-validator>
```

#### hash(algorithm: string) <u-label>blur</u-label>

输入编码是否符合指定哈希算法。

- `algorithm`：算法名称，支持`md4`、`md5`、`sha1`、`sha256`、`sha384`、`sha512`、`ripemd128`、`ripemd160`、`tiger128`、`tiger160`、`tiger192`、`crc32`以及`crc32b`

``` html
<u-validator label="编码" rules="hash('md4')">
    <u-input placeholder="请输入哈希编码"></u-input>
</u-validator>
```

#### md5 <u-label>blur</u-label>

输入编码是否符合md5算法。

``` html
<u-validator label="编码" rules="md5">
    <u-input placeholder="请输入md5编码"></u-input>
</u-validator>
```

#### hex <u-label>blur</u-label>

输入数字是否是十六进制。

``` html
<u-validator label="十六进制数" rules="hex">
    <u-input placeholder="请输入十六进制数"></u-input>
</u-validator>
```

#### hexColor <u-label>blur</u-label>

输入字符串是否是十六进制颜色码。

``` html
<u-validator label="颜色" rules="hexColor">
    <u-input placeholder="请输入颜色"></u-input>
</u-validator>
```

#### creditCard <u-label>blur</u-label>

输入信用卡号码是否合法。

``` html
<u-validator label="信用卡号" rules="creditCard">
    <u-input placeholder="请输入信用卡号"></u-input>
</u-validator>
```

#### fqdn <u-label>blur</u-label>

输入全限定域名是否合法。

``` html
<u-validator label="FQDN" rules="fqdn">
    <u-input placeholder="请输入全限定域名"></u-input>
</u-validator>
```

#### ipOrFQDN <u-label>blur</u-label>

输入内容是否为一个合法IP或全限定域名。

``` html
<u-validator label="IP或FQDN" rules="ipOrFQDN">
    <u-input placeholder="请输入IP或全限定域名"></u-input>
</u-validator>
```

#### isbn(version: number) <u-label>blur</u-label>

输入内容是否为一个合法的国际标准书号(ISBN)。

- `version`：ISBN版本，接受`10`或`13`

``` html
<u-validator label="ISBN" rules="isbn(10)">
    <u-input placeholder="请输入ISBN编号"></u-input>
</u-validator>
```

#### issn <u-label>blur</u-label>

输入内容是否为一个合法的国际标准连续出版物号(ISSN)。

``` html
<u-validator label="ISSN" rules="issn">
    <u-input placeholder="请输入ISSN编号"></u-input>
</u-validator>
```

#### isin <u-label>blur</u-label>

输入内容是否为一个合法的国际证券识别码(ISIN)。

``` html
<u-validator label="ISIN" rules="isin">
    <u-input placeholder="请输入ISIN编号"></u-input>
</u-validator>
```

#### iso8601(strict: boolean) <u-label>blur</u-label>

输入内容是否为合法的ISO8601日期。

- `strict`: 是否检测闰年日期。如果`strict`的值为`true`，则`2019-02-29`这样的日期属于非法日期

``` html
<u-validator label="日期" rules="iso8601(true)">
    <u-input placeholder="请输入日期"></u-input>
</u-validator>
```

#### iso31661Alpha2 <u-label>blur</u-label>

输入内容是否为合法的ISO 3166-1 Alpha-2国家代码。

``` html
<u-validator label="代码" rules="iso31661Alpha2">
    <u-input placeholder="请输入国家代码"></u-input>
</u-validator>
```

#### iso31661Alpha3 <u-label>blur</u-label>

输入内容是否为合法的ISO 3166-1 Alpha-3国家代码。

``` html
<u-validator label="代码" rules="iso31661Alpha3">
    <u-input placeholder="请输入国家代码"></u-input>
</u-validator>
```

#### json <u-label>input+blur</u-label>

输入字符串是否可以被解析为JSON格式。

``` html
<u-validator label="JSON" rules="json">
    <u-input placeholder="请输入JSON字符串"></u-input>
</u-validator>
```

#### jwt <u-label>blur</u-label>

输入字符串是否为合法的JSON Web Token。

``` html
<u-validator label="JWT" rules="jwt">
    <u-input placeholder="请输入JWT"></u-input>
</u-validator>
```

#### latLong <u-label>blur</u-label>

输入字符串是否为合法的经纬度坐标。

``` html
<u-validator label="经纬度" rules="latLong">
    <u-input placeholder="请输入坐标"></u-input>
</u-validator>
```

#### mobile (locale?: any[], strict?: boolean) <u-label>blur</u-label>

输入内容是否为合法的手机号。

- `locale`：所在地区，例如`zh-CN`、`ja-JP`等。可以是一个字符串或数组。如果不填，则尝试自动匹配所有地区。

- `strict`：是否检验国家代号。如果为`true`，则必须以`+`和国家代码开头。

``` html
<u-validator label="手机" rules="mobile('zh-CN')">
    <u-input placeholder="请输入手机号码"></u-input>
</u-validator>
```

#### mongoId <u-label>blur</u-label>

输入字符串是否为合法的MongoDB对象ID。

``` html
<u-validator label="ID" rules="mongoId">
    <u-input placeholder="请输入mongoDB的对象ID"></u-input>
</u-validator>
```

#### postalCode(locale: string) <u-label>blur</u-label>

输入字符串是否为合法的邮政编码。

- `locale`：所在地区。例如`CH`、`JP`等。

``` html
<u-validator label="postalID" rules="postalCode('JP')">
    <u-input placeholder="请输入邮政编码"></u-input>
</u-validator>
```

#### uuid(version?: number) <u-label>blur</u-label>

输入字符串是否为合法的UUID。

- `version`：采用的UUID版本。接受`3`、`4`和`5`。如果不填，则尝试自动匹配所有版本。

``` html
<u-validator label="UUID" rules="uuid(3)">
    <u-input placeholder="请输入UUID"></u-input>
</u-validator>
```

#### chinese <u-label>input+blur</u-label>

输入字符串是否为合法的中文内容。

``` html
<u-validator label="姓名" rules="chinese">
    <u-input placeholder="请输入姓名"></u-input>
</u-validator>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| name | string |  |  | 表单项名称。已废弃 |
| label | string |  |  | 标签。在 UValidator 用于提示消息的合成，在 UFormItem 等其他组件用于显示标签 |
| rules | string, Array |  |  | 验证规则。简写格式为字符串类型，完整格式或混合格式为数组类型 |
| message | string |  |  | 默认提示消息 |
| muted | string |  |  | 验证时是否静默。可选值：`'message'`表示只静默消息提示，`'all'`同时静默消息提示和红框提示 |
| ignore-validation | boolean |  | `false` | 忽略验证 |
| ignore-rules | boolean |  | `false` | 忽略验证规则。已废弃，同`ignore-validation` |
| validating-options | object |  |  | 验证辅助对象。在 Rule 的 `validate` 方法中使用 |
| validating-value | any |  |  | 临时修改验证值 |
| validating-process | Function |  |  | 验证前对值进行预处理 |
| manual | boolean |  | `false` | 是否采取手动验证。如果为`true`，则 UValidator 将不会在监听到子组件的`input`、`change`和`blur`事件后进行相应的验证。 |

### Computed

| Computed | Type | Description |
| -------- | ---- | ----------- |
| touched | boolean | 用户是否触碰 |
| dirty | boolean | 用户是否修改值 |
| valid | boolean | 验证是否通过 |
| firstError | string | 第一个错误提示消息 |

### Slots

#### (default)

插入继承了 MField 的组件，或子 UValidator，或其他 HTML 和文本。

### Events

#### @validate

对于第一个 Field 或者所有子 UValidator：

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.trigger | enum | 本次验证的触发方式 |
| $event.valid | boolean | 验证是否通过 |
| $event.touched | boolean | 用户是否触碰 |
| $event.dirty | boolean | 用户是否修改值 |
| $event.firstError | string | 第一个错误提示消息 |
| senderVM | UValidator | 发送事件实例 |

### Methods

#### validate(trigger, muted)

手动验证。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| trigger | string | `'submit'` | 触发方式，可选值：`submit`、`blur`和`input`之一，或者它们的任意组合。 |
| muted | boolean | `false` | 是否验证后无提示 |
