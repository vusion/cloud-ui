# 表单系列

一般来说，表单是Web应用中最常见，最重要，也是最复杂的交互形式之一，表单系列组件设计的好坏很大程度决定了整个应用实现的质量。

表单的布局样式比较统一，但会有许多如规则验证、数据比较、数据缓存等复杂的通用逻辑。由于原生表单元素样式简陋，功能单薄，对SPA不友好，不具备处理这些复杂问题的能力，因此必须在原生元素基础上作一层封装。

## 相关组件

### 示例

比如下面的例子是一个简单的填写个人信息的表单：

``` html
<u-form>
    <u-form-item label="性别">
        <u-radios value="男">
            <u-radio label="男">男</u-radio>
            <u-radio label="女">女</u-radio>
        </u-radios>
    </u-form-item>
    <u-form-item label="昵称" required>
        <u-input maxlength="20" placeholder="不得超过20个字符"></u-input>
    </u-form-item>
    <u-form-item label="手机" required>
        <u-input maxlength="11" placeholder="请输入手机号"></u-input>
    </u-form-item>
    <u-form-item label="自我介绍">
        <u-textarea></u-textarea>
    </u-form-item>
    <u-form-item>
        <u-button color="primary">提交</u-button>
    </u-form-item>
</u-form>
```

根据日常经验，我们可以归纳出与表单相关的组件有以下几种：

#### 表单 [Form](/proto-ui/u-form)

用于整体布局，集中设置属性，统一暴露事件和方法。

#### 表单组 FormGroup

针对表单项进行分组，主要用于布局，可能会有分组组件常见的折叠功能。

#### 表单项 FormItem

用于排列表单标签与控件的位置，必选提示，规则验证等。

#### 表单域（表单控件） Field

作为各种表单域（表单控件）的基类，用于触发FormItem的验证等功能。

比如常见的：`<u-input>`、`<u-select>`、`<u-radios>`、`<u-date-picker>`等。

页面上有很多组件，通常我们可以认为：

> 如果一个组件可以通过表单对后端数据进行读写操作的，那么它就是一个**表单控件**。

## 功能设计

### 布局

表单除了一般上面的纵向布局，某些情况也会有行内布局。

``` html
<u-form layout="inline" label-size="auto">
    <u-form-item label="状态">
        <u-select>
            <u-select-item>创建中</u-select-item>
            <u-select-item>成功</u-select-item>
            <u-select-item>失败</u-select-item>
        </u-select>
    </u-form-item>
    <u-form-item label="用户名">
        <u-input maxlength="20" placeholder="请输入用户名"></u-input>
    </u-form-item>
    <u-form-item label="手机">
        <u-input maxlength="11" placeholder="请输入手机"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary">查询</u-button>
    </u-form-item>
</u-form>
```

`<u-form>`提供了一个`layout`属性，它有两个可选值：`block`和`inline`，以后还可能有其它的值。

### 验证

表单验证是表单的核心功能。我们希望各个表单控件都可以统一走表单的验证流程，而不是额外编写代码。因此，设计组件的时候需考虑得尽可能通用和全面，它至少要包含以下功能：

- 规则列表
- 规则扩充
- 异步验证
- 触发方式

下面一一展开。

#### 规则列表

一个表单项的验证规则用一个对象来表示是不够的，因为往往不同的验证情况会有不同的提示消息和不同的触发方式。

比如下面的例子，一个用户名输入框的验证规则：

1. 必须输入用户名，失焦验证
2. 以字母开头，实时验证
3. 字母、数字或中划线组成，实时验证
4. 以字母或数字结尾，失焦验证
5. 4~12个字符，失焦验证

我们必须用一个有序列表`rules`来表示，列表中包含若干条验证规则对象。结构如下：

``` javascript
[{ type: 'string', required: true, ... }, { type: 'email', ... }, { type: 'string', pattern: ... }, ...]
```

每条规则对象通常有以下几个参数：
- `type`：数据类型
- `trigger`：触发方式
- `message`：验证不通过时的消息提示
- ...

上面提到的例子可以用下面的规则列表来表示：

``` html
<u-form-item label="用户名" :rules="[
    { type: 'string', required: true, trigger: 'blur', message: '请输入用户名' },
    { type: 'string', pattern: /^[a-zA-Z]/, trigger: 'input+blur', message: '以字母开头' },
    { type: 'string', pattern: /^[a-zA-Z0-9-]+$/, trigger: 'input+blur', message: '字母、数字或中划线组成' },
    { type: 'string', pattern: /[a-zA-Z0-9]$/, trigger: 'blur', message: '以字母或数字结尾' },
    { type: 'string', min: 4, trigger: 'blur', message: '不得少于4个字符' },
]">
    <u-input maxlength="112" placeholder="4~12位字母、数字或中划线组成"></u-input>
</u-form-item>
```

##### 多字段的规则列表

一个表单经常需要给的多个字段添加规则列表。为了方便，我们支持在`<u-form>`中汇总传入，通过`<u-form-item>`的`name`属性来区别。

``` vue
<template>
<u-form :rules="rules">
    <u-form-item label="用户名" name="username">
        <u-input maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
    <u-form-item label="邮箱" name="email">
        <u-input maxlength="24" placeholder="请输入邮箱"></u-input>
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

#### 规则扩充和异步验证

我们使用了[async-validator](https://github.com/yiminghe/async-validator)这个库，基本可以满足这两项功能。

比如下面的例子是关于自定义规则的，判断两次输入的密码是否一致：

``` vue
<template>
<u-form :rules="rules">
    <u-form-item label="密码" name="password">
        <u-input type="password" v-model="model.password" maxlength="12" placeholder="6~12个字符"></u-input>
    </u-form-item>
    <u-form-item label="确认密码" name="confirm">
        <u-input type="password" v-model="model.confirm" maxlength="12" placeholder="6~12个字符"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button>设置</u-button>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            model: {
                password: '',
                confirm: '',
            },
            rules: {
                password: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入密码' },
                    { type: 'string', min: 6, max: 12, trigger: 'blur', message: '6~12个字符' },
                ],
                confirm: [
                    { type: 'string', required: true, trigger: 'blur', message: '两次输入的密码不一致', validator: (rule, value, callback) => {
                        value === this.model.password ? callback() : callback(new Error());
                    } },
                ],
            },
        };
    },
};
</script>
```

下面的例子是关于异步验证的，判断用户名是否已被使用，尝试输入“aaaa”：

``` vue
<template>
<u-form :rules="rules">
    <u-form-item label="用户名" name="username">
        <u-input maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
</u-form>
</template>

<script>
const checkUsername = function (username) {
    return new Promise((resolve, reject) => {
        if (['aaaa', 'abcd', '1234'].includes(username))
            reject('该用户名已被使用');
        else
            resolve();
    });
};

export default {
    data() {
        return {
            rules: {
                username: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入用户名' },
                    { type: 'string', min: 4, max: 12, trigger: 'blur', message: '请输入4~12个字符' },
                    { type: 'string', required: true, trigger: 'blur', message: '该用户名已被使用', validator: (rule, value, callback) => {
                        checkUsername(value)
                            .then(() => callback())
                            .catch((err) => callback(new Error(err)));
                    } },
                ],
            },
        };
    },
};
</script>
```

#### 触发方式

表单验证行为按照实时性通常可以分为三种：提交验证、失焦验证、实时验证，分别对应验证规则`trigger`的三种触发方式：`submit`, `blur`, `input`，规则中默认为`submit`。

另外还有一种行为叫表单限制，不属于表单验证，但通常与之配合使用。


##### 提交验证

点击表单提交按钮时才对表单中所有控件进行验证，通常对应submit按钮的`click`事件。示例如下：

``` vue
<template>
<u-form ref="form" :rules="rules">
    <u-form-item label="用户名" name="username">
        <u-input maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
    <u-form-item label="邮箱" name="email">
        <u-input maxlength="24" placeholder="请输入邮箱"></u-input>
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
                .catch(() => { /* noop */ });
        },
    },
};
</script>
```

##### 失焦验证

在表单控件失去焦点时对该控件进行验证，通常对应表单控件的`blur`事件。示例如下：

``` vue
<template>
<u-form ref="form" :rules="rules">
    <u-form-item label="用户名" name="username">
        <u-input maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
    <u-form-item label="邮箱" name="email">
        <u-input maxlength="24" placeholder="请输入邮箱"></u-input>
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

##### 实时验证

在表单控件的值实时输入改变时，对该控件进行验证，通常对应表单的`input`事件。当只激活实时验证时，失焦验证会跳过此规则并且覆盖原来的结果，因此通常我们需要采用实时与失焦叠加的方式`input+blur`。

下面的例子中，对用户名长度和邮箱格式的判断为实时验证。其中邮箱的验证没有采用实时与失焦叠加的方式，可以发现这种方式不是很合理。

``` vue
<template>
<u-form ref="form" :rules="rules">
    <u-form-item label="用户名" name="username">
        <u-input maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
    <u-form-item label="邮箱" name="email">
        <u-input maxlength="24" placeholder="请输入邮箱"></u-input>
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

##### 表单限制

在表单控件的值改变时，对该值限制在规定的长度、范围或者格式内，如`<input>`控件的部分`type`和`maxlength`的限制行为等：

``` html
<u-form>
    <u-form-item label="用户名">
        <u-input maxlength="4" placeholder="不超过4个字符"></u-input>
    </u-form-item>
</u-form>
```

关于限制格式，我们之后计划给`<u-input>`实现一个`format`属性。


### 数据比较

### 数据缓存

## 扩充控件

`<u-form>`、`<u-form-group>`、`<u-form>`三种组件构成一个基本的表单体系，在大部分场景可以直接使用，不需要做扩展。而表单控件在业务中是多样的，原型组件库不可能完全覆盖，有很多需要自行设计。

下面会讲述，如何设计表单控件，接入到Vusion的表单体系中，从而可以统一走表单的规则验证、事件处理等通道，无需额外处理。

### 简单示例

我们先拿一个最简单的表单控件——复选框`<e-checkbox>`来举例。

#### 结构和样式

首先可以很快实现它的结构和样式。

``` vue
<template>
<div :class="$style.root">✓</div>
</template>

<script>
export default {
    name: 'e-checkbox',
};
</script>

<style module>
.root {
    display: inline-block;
    user-select: none;
    width: 18px;
    height: 18px;
    line-height: 16px;
    border: 1px solid #ccc;
    text-align: center;
    color: --var(brand-primary);
}
</style>
```

#### 属性

每个表单控件总有一个核心属性，通常用于绑定数据，比如：

- `<u-checkbox>`可以有一个表示选中状态的`checked`属性
- `<u-date-picker>`可以有一个表示日期的`date`属性
- `<u-number-input>`可以有一个表示数字的`number`属性

但在Vusion中，我们推荐统一使用`value`属性来处理，因为：

- 经常有对表单控件做统一处理的情形，比如有的时候你可能需要遍历：`form.fields.map((field) => field.value)`
- 为了与Vue的`v-model`保持一致（虽然它也支持自定义）
- 有时实在想不出什么好的名字，不如直接用`value`也不显得混乱

因此，我们给上面的示例添加属性：

``` vue
<template>
<div :class="$style.root" @click="value = !value">{{ value ? '✓' : '&nbsp;' }}</div>
</template>

<script>
export default {
    name: 'e-checkbox',
    props: {
        value: { type: Boolean, default: true },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    user-select: none;
    width: 18px;
    height: 18px;
    line-height: 16px;
    border: 1px solid #ccc;
    text-align: center;
    color: --var(brand-primary);
}
</style>
```

#### 单向流与双向绑定

熟悉Vue的童鞋都知道，Vue2.x为了保证单向数据流，放弃了1.x的双向绑定机制。这是好事，因为不用担心内部组件悄悄地改变父组件的状态。

但与此同时，也给我们的组件设计稍微带来点不便：对于一个属性，我们往往需要两个变量来维护。

比如在上面的例子中，我们只有一个prop，当点击复选框时，Vue却不允许修改这个属性。所以我们还需要一个data变量来维护实际的内部状态。

##### 命名规范

这里就牵扯到一个命名规范了。prop中一个`value`，data中一个`value`，名字重复，怎么定义比较好？

``` javascript
{
    props: {
        value: { type: Boolean, default: true },
    },
    data() {
        return { value: true };
    },
}
```

首先，`value`和`_value`是不行的，因为Vue不会对`_`开头的变量做依赖管理。然后，有的组件库中是用`initValue`或者`defaultValue`来表示prop，用`value`来表示data，我认为这样也不合理，因为prop也是会变的，不一定是一个默认值或初始值。

我们更倾向组件暴露的API简洁友好，所以还是决定对data下手。Vusion中规定与prop相关的那个data变量，在前面加上`current`前缀，表示当前的一种状态。比如`currentValue`变量对应`value`属性，`currentPage`变量对应`page`属性，`currentExpanded`变量对应`expanded`属性等。

##### 监听属性

这里需要注意的是，当变成两个变量的时候，外部传入的状态与内部状态分离，也就是说内部状态不会响应外部状态的变更。这时需要一个额外的watcher来处理。

考虑到这几点，示例修改为下面的形式：

``` vue
<template>
<div :class="$style.root" @click="currentValue = !currentValue">{{ currentValue ? '✓' : '&nbsp;' }}</div>
</template>

<script>
export default {
    name: 'e-checkbox',
    props: {
        value: { type: Boolean, default: false },
    },
    data() {
        return {
            currentValue: this.value,
        };
    },
    watch: {
        value(value) {
            this.currentValue = value;
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    user-select: none;
    width: 18px;
    height: 18px;
    line-height: 16px;
    border: 1px solid #ccc;
    text-align: center;
    color: --var(brand-primary);
}
</style>
```

##### 双向绑定

最后，为了让组件使用起来更方便，Vue2提供了`v-model`和`.sync`两种双向绑定语法糖，只需添加两个事件即可。

*下面的例子为了让大家更好地观察双向绑定，将`<e-checkbox>`组件的代码放入了components中。*

``` vue
<template>
<div>
    <div>复选框：<e-checkbox :class="$style.checkbox" v-model="checked"></e-checkbox></div>
    <div>绑定值：{{ checked }}</div>
</div>
</template>

<script>
export default {
    components: {
        'e-checkbox': {
            template: `<div @click="check()">{{ currentValue ? '✓' : '&nbsp;' }}</div>`,
            props: {
                value: { type: Boolean, default: false },
            },
            data() {
                return {
                    currentValue: this.value,
                };
            },
            watch: {
                value(value) {
                    this.currentValue = value;
                },
            },
            methods: {
                check() {
                    const currentValue = this.currentValue = !this.currentValue;
                    this.$emit('input', currentValue);
                    this.$emit('update:value', currentValue);
                },
            },
        },
    },
    data() {
        return { checked: false };
    },
};
</script>

<style module>
.checkbox {
    display: inline-block;
    user-select: none;
    width: 18px;
    height: 18px;
    line-height: 16px;
    border: 1px solid #ccc;
    text-align: center;
    color: --var(brand-primary);
}
</style>
```

#### 继承 MField

到目前为止，我们仅仅是描述了如何按规范实现了一个表单控件，但还没有与Vusion的表单体系联系在一起。

有关触发验证等功能已经封装在`<m-field>`这个基类组件（或叫Mixin）中了，我们要做的只需继承一下它即可。

下面是一个很简单的复选框与表单验证相关的例子——验证是否同意了服务条款。

``` vue
<template>
<u-form ref="form">
    <u-form-item label="复选框" required :rules="rules">
        <e-checkbox :class="$style.checkbox"></e-checkbox> 同意并遵守服务条款
    </u-form-item>
    <u-form-item><u-button color="primary" @click="$refs.form.validate()">提交</u-button></u-form-item>
</u-form>
</template>

<script>
import { MField } from '@@';

export default {
    components: {
        'e-checkbox': {
            mixins: [MField],
            template: `<div @click="check()">{{ currentValue ? '✓' : '&nbsp;' }}</div>`,
            props: {
                value: { type: Boolean, default: false },
            },
            data() {
                return {
                    currentValue: this.value,
                };
            },
            watch: {
                value(value) {
                    this.currentValue = value;
                },
            },
            methods: {
                check() {
                    const currentValue = this.currentValue = !this.currentValue;
                    this.$emit('input', currentValue);
                    this.$emit('update:value', currentValue);
                },
            },
        },
    },
    data() {
        return {
            rules: [
                { type: 'boolean', required: true, trigger: 'input', message: '您还未接受服务条款', validator(rule, value, callback) {
                    value ? callback() : callback(new Error(false));
                } },
            ],
        };
    },
};
</script>

<style module>
.checkbox {
    display: inline-block;
    user-select: none;
    width: 18px;
    height: 18px;
    line-height: 16px;
    border: 1px solid #ccc;
    text-align: center;
    color: --var(brand-primary);
}
</style>
```

#### 事件

上面我们只抛了一个`input`事件。为了保证功能实现的完整性与一致性，对于一个表单控件，我们最好暴露这4种事件：`input`、`change`、`focus`和`blur`。

对于组件中有focusable的元素，我们照着抛出来就行；如果没有的话，我们可以用`tabindex`来设置。

``` vue
<template>
<div :class="$style.root"
    @click="check()"
    tabindex="0" @keydown.space.prevent @keyup.space.prevent="check()"
    @focus="onFocus" @blur="onBlur">
    {{ currentValue ? '✓' : '&nbsp;' }}</div>
</template>

<script>
import { MField } from '@@';

export default {
    name: 'e-checkbox',
    mixins: [MField],
    props: {
        value: { type: Boolean, default: false },
    },
    data() {
        return {
            currentValue: this.value,
        };
    },
    watch: {
        value(value) {
            this.currentValue = value;
        },
    },
    methods: {
        onFocus(e) {
            this.$emit('focus', e);
        },
        onBlur(e) {
            this.$emit('blur', e);
        },
        check() {
            const currentValue = this.currentValue = !this.currentValue;
            this.$emit('input', currentValue);
            this.$emit('update:value', currentValue);
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    user-select: none;
    width: 18px;
    height: 18px;
    line-height: 16px;
    border: 1px solid #ccc;
    text-align: center;
    color: --var(brand-primary);
}
</style>
```

### 复杂示例

再举一个复杂一点的例子，假设我们需要一个用户填写IP的表单控件`<e-ip-input>`，表单提交时要求验证IP格式的正确性。

#### 结构和样式

同样，可以很快产出这个组件的结构和样式。

``` vue
<template>
<div :class="$style.root">
    <u-input :class="$style.input" maxlength="3"></u-input> .
    <u-input :class="$style.input" maxlength="3"></u-input> .
    <u-input :class="$style.input" maxlength="3"></u-input> .
    <u-input :class="$style.input" maxlength="3"></u-input>
</div>
</template>

<script>
export default {
    name: 'e-ip-input',
};
</script>

<style module>
.root {}

.input {
    width: 60px;
}
</style>
```

#### 属性

根据之前的约定，核心属性我们取`value`而不是`ip`。

``` vue
<template>
<div :class="$style.root">
    <u-input :class="$style.input" maxlength="3" v-model="parts[0]"></u-input> .
    <u-input :class="$style.input" maxlength="3" v-model="parts[1]"></u-input> .
    <u-input :class="$style.input" maxlength="3" v-model="parts[2]"></u-input> .
    <u-input :class="$style.input" maxlength="3" v-model="parts[3]"></u-input>
</div>
</template>

<script>
export default {
    name: 'e-ip-input',
    props: {
        value: String,
    },
    data() {
        return {
            parts: [],
        };
    },
    watch: {
        value(value) {
            this.parts = value.split('.');
        },
    },
};
</script>

<style module>
.root {}

.input {
    width: 60px;
}
</style>
```

#### 单向流与双向绑定

*下面的例子为了让大家更好地观察双向绑定，将`<e-checkbox>`组件的代码放入了components中。*

``` vue
<template>
<div>
    <div>IP框：<e-ip-input v-model="ip"></e-ip-input></div>
    <div>绑定值：{{ ip }}</div>
</div>
</template>

<script>
export default {
    components: {
        'e-ip-input': {
            template: `<div style="display: inline-block">
                <u-input maxlength="3" v-model="parts[0]" @input="onInput()" style="width: 60px"></u-input> .
                <u-input maxlength="3" v-model="parts[1]" @input="onInput()" style="width: 60px"></u-input> .
                <u-input maxlength="3" v-model="parts[2]" @input="onInput()" style="width: 60px"></u-input> .
                <u-input maxlength="3" v-model="parts[3]" @input="onInput()" style="width: 60px"></u-input>
            </div>`,
            props: {
                value: String,
            },
            data() {
                return {
                    parts: [],
                };
            },
            watch: {
                value(value) {
                    this.parts = value.split('.');
                },
            },
            methods: {
                onInput() {
                    const value = this.parts.join('.');

                    this.$emit('input', value);
                    this.$emit('update:value', value);
                },
            },
        },
    },
    data() {
        return { ip: undefined };
    },
};
</script>
```

#### 继承Field并补全事件

``` vue
<template>
<u-form ref="form">
    <u-form-item label="IP地址" required :rules="rules">
        <e-ip-input v-model="model.ip"></e-ip-input>
    </u-form-item>
    <u-form-item><u-button color="primary" @click="$refs.form.validate().catch(() => { /* noop */ })">提交</u-button></u-form-item>
</u-form>
</template>

<script>
import { MField } from '@@';

export default {
    components: {
        'e-ip-input': {
            mixins: [MField],
            template: `<div style="display: inline-block">
                <u-input maxlength="3" v-model="parts[0]"
                    @input="onInput()" @change="onChange()" @focus="onFocus($event)" @blur="onBlur($event)"
                    style="width: 60px"
                ></u-input> .
                <u-input maxlength="3" v-model="parts[1]"
                    @input="onInput()" @change="onChange()" @focus="onFocus($event)" @blur="onBlur($event)"
                    style="width: 60px"
                ></u-input> .
                <u-input maxlength="3" v-model="parts[2]"
                    @input="onInput()" @change="onChange()" @focus="onFocus($event)" @blur="onBlur($event)"
                    style="width: 60px"
                ></u-input> .
                <u-input maxlength="3" v-model="parts[3]"
                    @input="onInput()" @change="onChange()" @focus="onFocus($event)" @blur="onBlur($event)"
                    style="width: 60px"
                ></u-input>
            </div>`,
            props: {
                value: String,
            },
            data() {
                return {
                    parts: [],
                };
            },
            watch: {
                value(value) {
                    this.parts = value.split('.');
                },
            },
            methods: {
                onInput(partValue, index) {
                    const value = this.parts.join('.');

                    this.$emit('input', value);
                    this.$emit('update:value', value);
                },
                onChange() {
                    const value = this.parts.join('.');
                    this.$emit('change', {
                        value,
                    });
                },
                onFocus(e) {
                    this.$emit('focus', e);
                },
                onBlur(e) {
                    this.$emit('blur', e);
                },
            },
        },
    },
    data() {
        return {
            model: {
                ip: undefined,
            },
            rules: [
                { type: 'string', required: true, trigger: 'blur', message: '请填写IP' },
                { type: 'string', required: true, message: '请填写完整的IP', validator(rule, value, callback) {
                    const parts = value.split('.');
                    parts.length === 4 ? callback() : callback(new Error(''));
                } },
                { type: 'string', required: true, trigger: 'input+blur', message: '请填写数字', validator(rule, value, callback) {
                    const parts = value.split('.');
                    parts.every((part) => !isNaN(part) && part !== '') ? callback() : callback(new Error());
                } },
                { type: 'string', required: true, trigger: 'input+blur', message: '请填写0-255的数字', validator(rule, value, callback) {
                    const parts = value.split('.');
                    /* eslint-disable-next-line */
                    parts.every((part) => 0 <= part && part < 256) ? callback() : callback(new Error());
                } },
            ],
        };
    },
};
</script>
```

## FAQ

#### 为什么要将验证逻辑放在`<u-form-item>`而不是`<m-field>`中？

验证有一部分功能是关于消息提示的，这牵扯到模板的实现。如果验证逻辑放在`<m-field>`中，那么就要求每个子类的模板都要实现这部分功能。一个组件最好只干一件事情，所以我们把它划到了`<u-form-item>`中，虽然要添加一些组件间的通信逻辑，但这些都是必要的。
