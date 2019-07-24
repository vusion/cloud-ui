### 验证规则

#### required <u-label>blur</u-label>

必填，为空会提示错误。没有参数。

``` html
<u-validator label="用户名" rules="required">
    <u-input placeholder="请输入用户名"></u-input>
</u-validator>
```

#### filled <u-label>blur</u-label>

必填且字符串不能全为空白。没有参数。

例如输入多个空格，会提示错误。

``` html
<u-validator label="用户名" rules="filled">
    <u-input placeholder="请输入用户名"></u-input>
</u-validator>
```

#### minLength(min) <u-label>blur</u-label>

不得少于指定的字符数。字符、数组长度均可比较。

``` html
<u-validator label="用户名" rules="minLength(4)">
    <u-input placeholder="不得小于4个字符"></u-input>
</u-validator>
```

#### maxLength(min) <u-label>blur</u-label>

不得超过指定的字符数。字符、数组长度均可比较。

``` html
<u-validator label="用户名" rules="maxLength(12)">
    <u-input placeholder="不得超过12个字符"></u-input>
</u-validator>
```

#### rangeLength(min, max) <u-label>blur</u-label>

字符数必须在指定的范围内。字符、数组长度均可比较。

``` html
<u-validator label="用户名" rules="rangeLength(4,12)">
    <u-input placeholder="请输入4-12个字符"></u-input>
</u-validator>
```

#### min(min) <u-label>blur</u-label>

不得小于指定的值。数字、字符串、日期比较均可。

``` html
<u-validator label="端口" rules="min(10)">
    <u-input placeholder="不得小于10"></u-input>
</u-validator>
```

#### max(min) <u-label>blur</u-label>

不得大于指定的值。数字、字符串、日期比较均可。

``` html
<u-validator label="端口" rules="max(65535)">
    <u-input placeholder="不得大于65535"></u-input>
</u-validator>
```

#### number <u-label>blur</u-label>

必须为数字。

``` html
<u-validator label="端口" rules="number">
    <u-input placeholder="必须为数字"></u-input>
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

#### az09$ <u-label>blur</u-label>

以小写字母或数字结尾。

``` html
<u-validator label="名称" rules="az09$">
    <u-input placeholder="以小写字母或数字结尾"></u-input>
</u-validator>
```

#### ^azAZ09-$ <u-label>input+blur</u-label>

以字母、数字或"-"组成。

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

#### without-- <u-label>input+blur</u-label>

不能连续出现中划线

``` html
<u-validator label="名称" rules="without--">
    <u-input placeholder="不能连续出现中划线"></u-input>
</u-validator>
```

#### without__ <u-label>input+blur</u-label>

不能连续出现下划线

``` html
<u-validator label="名称" rules="without__">
    <u-input placeholder="不能连续出现下划线"></u-input>
</u-validator>
```
