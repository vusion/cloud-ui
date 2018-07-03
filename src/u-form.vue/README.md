# 表单

## 示例
### 基本形式

``` html
<u-form gap="large">
    <u-form-item label="计费方式" required>
        <u-radios value="0">
            <u-radio label="0">包年包月</u-radio>
            <u-radio label="1">按量付费</u-radio>
        </u-radios>
    </u-form-item>
    <u-form-item label="实例名称" required>
        <u-input size="huge" maxlength="63" placeholder="由1-63个小写字母，数字，中划线组成，以字母开头，字母或数字结尾"></u-input>
    </u-form-item>
    <u-form-item label="　" required>
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
    <u-form-item label="详情" layout="block">
        <u-textarea size="huge"></u-textarea>
    </u-form-item>
    <!-- u-form-item label="表格" layout="block">
        <u-table-view :data="[{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
        }, {
            date: '2016-05-04',
            name: '王大虎',
            address: '上海市普陀区金沙江路 1517 弄'
        }, {
            date: '2016-05-01',
            name: '天王盖地虎',
            address: '上海市普陀区金沙江路 1519 弄'
        }, {
            date: '2016-05-03',
            name: '小鸡炖蘑菇',
            address: '上海市普陀区金沙江路 1516 弄'
        }]">
            <u-table-view-column label="日期" label="date" sortable></u-table-view-column>
            <u-table-view-column label="姓名" label="name"></u-table-view-column>
            <u-table-view-column label="地址" label="address"></u-table-view-column>
        </u-table-view>
    </u-form-item -->
    <u-form-item>
        <u-button color="primary">立即创建</u-button>
    </u-form-item>
</u-form>
```

### 行内

``` html
<u-form layout="inline" label-size="auto">
    <u-form-item label="状态">
        <u-input maxlength="63" placeholder="认证中"></u-input>
    </u-form-item>
    <u-form-item label="用户名">
        <u-input maxlength="63" placeholder="请输入用户名"></u-input>
    </u-form-item>
    <u-form-item label="联系号码">
        <u-input maxlength="63" placeholder="请输入联系号码"></u-input>
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

表单控件`u-form-item`支持自定义左边显示内容，通过传入`slot='label'`插槽来实现label属性所实现的功能，此时控件属性`label`会失效，`slot='extra'`插槽是用来实现插入其他自定义内容，配合属性`'distance'`使用，控制内容和标题之间的间距，其值有`small,normal,large`

``` html
<u-form ref="form">
    <u-form-item required distance="normal">
        <span slot="label">
            用户名
        </span>
        <u-tooltip content="请输入正确格式的中文汉字" slot="extra" >
            <u-icon name="alert" style="font-size:16px;marginLeft:-5px;"></u-icon>
        </u-tooltip>
        <u-input maxlength="4" maxlength-message="不超过4个字符" placeholder="不超过4个字符"></u-input>
    </u-form-item>
</u-form>
```

## 案例

前面的示例只是局部展示组件库表单验证体系的使用方法，达到的效果不一定符合实际情况。下面举几种比较合理的案例：

按照表单提交按钮在什么情况下可点击，可以分为以下几种常见且比较合理的情况：始终可点、必填项有内容可点、所有项内容正确时才可点。

### 始终可点

表单提交按钮始终可点。

表现为表单中所有控件的所有行为必须进行提交验证，适当采用失焦和实时验证加以帮助。

``` vue
<template>
<u-form ref="form" gap="large" :rules="rules" distance="normal">
    <u-form-item label="用户名" name="username">
        <u-tooltip content="请输入正确格式的中文汉字" slot="extra">
            <u-icon name="alert" style="font-size:16px;marginLeft:-5px;"></u-icon>
        </u-tooltip>
        <u-input size="huge" v-model="model.username" maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
    <u-form-item label="邮箱" name="email">
        <u-input size="huge" v-model="model.email" maxlength="24" placeholder="请输入邮箱"></u-input>
    </u-form-item>
    <u-form-item label="手机号码" name="phone">
        <u-input size="huge" v-model="model.phone" maxlength="11" placeholder="请输入手机号码"></u-input>
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
            model: {
                username: '',
                email: '',
                phone: '',
            },
            rules: {
                username: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入用户名' },
                    { type: 'string', min: 4, max: 12, trigger: 'blur', message: '请输入4~12个字符' },
                ],
                email: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入邮箱' },
                    { type: 'email', trigger: 'blur', message: '邮箱格式不正确' },
                ],
                phone: [
                    { type: 'string', pattern: /^\d{11}$/, trigger: 'blur', message: '手机号码格式不正确' },
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

### 必填项有内容可点

当表单中所有必填项有内容时，表单提交按钮才可点。

表现为根据表单中必填项是否为空，使用计算属性来实时判断提交按钮是否可点。并且在这种情况下，通常采用三种验证相结合的方式。

``` vue
<template>
<u-form ref="form" gap="large" :rules="rules">
    <u-form-item label="用户名" name="username">
        <u-input size="huge" v-model="model.username" maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
    <u-form-item label="邮箱" name="email">
        <u-input size="huge" v-model="model.email" maxlength="24" placeholder="请输入邮箱"></u-input>
    </u-form-item>
    <u-form-item label="手机号码" name="phone">
        <u-input size="huge" v-model="model.phone" maxlength="11" placeholder="请输入手机号码"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" :disabled="!canSubmit" @click="submit()">提交</u-button>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            model: {
                username: '',
                email: '',
                phone: '',
            },
            rules: {
                username: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入用户名' },
                    { type: 'string', min: 4, max: 12, trigger: 'blur', message: '请输入4~12个字符' },
                ],
                email: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入邮箱' },
                    { type: 'email', trigger: 'blur', message: '邮箱格式不正确' },
                ],
                phone: [
                    { type: 'string', pattern: /^\d{11}$/, trigger: 'blur', message: '手机号码格式不正确' },
                ],
            },
        };
    },
    computed: {
        canSubmit() {
            return this.model.username && this.model.email;
        },
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

### 所有项内容正确可点

当表单中所有项内容均符合要求时，表单提交按钮才可点。

表现为根据每个表单控件的验证结果，使用计算属性来实时判断提交按钮是否可点。这种情况下，一般就不需要进行提交验证了。

``` vue
<template>
<u-form ref="form" gap="large" :rules="rules" @validate="canSubmit = $event.valid">
    <u-form-item label="用户名" name="username">
        <u-input size="huge" v-model="model.username" maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
    <u-form-item label="邮箱" name="email">
        <u-input size="huge" v-model="model.email" maxlength="24" placeholder="请输入邮箱"></u-input>
    </u-form-item>
    <u-form-item label="手机号码" name="phone">
        <u-input size="huge" v-model="model.phone" maxlength="11" placeholder="请输入手机号码"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" :disabled="!canSubmit" @click="submit()">提交</u-button>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            canSubmit: false,
            model: {
                username: '',
                email: '',
                phone: '',
            },
            rules: {
                username: [
                    { type: 'string', required: true, trigger: 'input+blur', message: '请输入用户名' },
                    { type: 'string', min: 4, max: 12, trigger: 'input+blur', message: '请输入4~12个字符' },
                ],
                email: [
                    { type: 'string', required: true, trigger: 'input+blur', message: '请输入邮箱' },
                    { type: 'email', trigger: 'input+blur', message: '邮箱格式不正确' },
                ],
                phone: [
                    { type: 'string', pattern: /^\d{11}$/, trigger: 'input+blur', message: '手机号码格式不正确' },
                ],
            },
        };
    },
    mounted() {
        // 必须初始化时或在获取数据到时安静验证一次
        this.$refs.form.validate(true)
            .catch(() => {});
        // 在获取数据到时如下
        // this.getData().then(...)
        //  .then(() => this.$refs.form.validate(true))
        //  .catch(() => {});
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

## Form API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| model | Object | | 表单数据模型 |
| rules | Object | | 表单所有域的验证规则 |
| layout | String | `block` | 表单布局方式。可选值：`block`、`inline`。 |
| label-size | String | `normal` | 标签大小。可选值：`small`、`normal`、`large`。 |
| distance | String | `` | 标签标题和内容间距大小。可选值：`small`、`normal`、`large`。 |
### Slots

#### (default)

插入`<u-form-item>`子组件。

### Events

#### @validate

表单验证时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.valid | Boolean | 验证是否通过 |

### Methods

#### validate(slient)

验证此表单。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| silent | Boolean | `false` | 是否仅验证无提示。 |


## FormItem API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| name | String | | 表单项名称，用于选择表单的模型数据和验证规则 |
| label | String | | 标签 |
| label-size | String | `normal` | 单独设置表单项的标签大小 |
| rules | Array | | 表单项的验证规则。如果没有则会根据`name`属性从表单的`rules`中获取。 |
| message | String | | 默认提示信息 |
| required | Boolean | | 是否必填。仅显示样式，如果要验证必填项，需要在`rules`中添加必填规则。 |
| description | String | | 添加描述内容 |
| placement | String | | 值为`'bottom'`时提示信息在底部显示，改变提示信息显示位置 |

### Slots

| Slot | Description |
| ---- | ----------- |
| label | 自定义标签标题 |
| extra | 自定义标签插入内容 |
| description | 自定义描述内容 |
| (default) | 弹窗内容自定义 |

### Methods

#### validate(trigger, slient)

验证此表单项。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| trigger | String | `submit` | 触发方式，可选值：`submit`、`blur`和`input`之一，或者它们的任意组合。 |
| silent | Boolean | `false` | 是否仅验证无提示。 |
