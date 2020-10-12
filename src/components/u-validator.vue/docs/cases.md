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

### 复合验证，循环报错

``` vue
<template>
<u-form-item label="用户名" rules="usernameBase | unique(...existingList)">
    <u-input maxlength="12" placeholder="4-12个字符"></u-input>
</u-form-item>
</template>
<script>
export default {
    rules: {
        usernameBase: 'required | ^azAZ | ^azAZ09-$ | usernameBase | minLength(4)',
    },
    data() {
        return {
            existingList: ['abcd', 'aaaa', 'ABCD'],
        };
    },
};
</script>
```

### 找不到变量应该报错出来

``` vue
<template>
<u-validator label="端口" rules="required | min(something)">
    <u-input></u-input>
</u-validator>
</template>
<script>
export default {
    data() {
        return {
            some: {
                object: {
                    number: 20,
                },
            },
        };
    },
};
</script>
```

### 根据 update 来初始化 input 状态

``` vue
<template>
<div>
    <u-validator rules="required | numeric">
        <u-input v-model="value1"></u-input>
    </u-validator>
    <u-validator rules="max(100)">
        <u-number-input v-model="value2"></u-number-input>
    </u-validator>
    <u-validator rules="max(100)">
        <u-select v-model="value3">
            <u-select-item value="Item 1">Item 1</u-select-item>
            <u-select-item value="Item 2">Item 2</u-select-item>
            <u-select-item value="Item 3">Item 3</u-select-item>
            <u-select-item value="Item 4">Item 4</u-select-item>
        </u-select>
    </u-validator>
</div>
</template>

<script>
export default {
    data() {
        return {
            value1: '123',
            value2: 123,
            value3: 'Item 3',
        };
    },
};
</script>
```