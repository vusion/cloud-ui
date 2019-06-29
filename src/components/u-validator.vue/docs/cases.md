### 字符串验证

#### 普通

``` html
<u-validator label="用户名" rules="required | ^azAZ | azAZ09$ | min(4)">
    <u-input></u-input>
</u-validator>
```

#### 普通

``` html
<u-validator label="用户名" rules="required@bi #请输入 | ^azAZ #以字母开头 | azAZ09$ | min(4) @b">
    <u-input></u-input>
</u-validator>
```

#### 普通

``` html
<u-validator label="用户名" rules="required@bi #请输入'wafew' | ^azAZ #以字母开头/%()J25 | azAZ09$ | min(4) @b #(23,40)">
    <u-input></u-input>
</u-validator>
```

#### 普通

``` html
<u-validator action="输入" label="用户名" rules=" minLength(4) @b">
    <u-input></u-input>
</u-validator>
```

#### 普通

``` html
<u-validator label="用户名" rules="required('@') | ^azAZ('#|')">
    <u-input></u-input>
</u-validator>
```

#### 普通

``` html
<u-validator label="用户名" rules="required@bi #请输入#wafew' | ^azAZ #以字母开头/%()J25 | azAZ09$ | min(4) @b #@(23,40)">
    <u-input></u-input>
</u-validator>
```

### Temp rule

``` vue
<template>
<u-validator label="端口" rules="required | port">
    <u-input></u-input>
</u-validator>
</template>
<script>
export default {
    rules: {
        port: { validate: 'range', args: [1000, 65535], trigger: 'blur', message: '端口' },
    },
};
</script>
```
