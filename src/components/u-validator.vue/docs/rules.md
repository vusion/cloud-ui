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

#### numberic(noSymbols?: boolean) <u-label>input+blur</u-label>

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

### 各种字符串判断

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
