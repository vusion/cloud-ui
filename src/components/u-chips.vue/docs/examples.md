### 基本形式

点击输入区域并进行输入。在完成输入后，通过鼠标失焦、空格、逗号或tab键生成字符串切片。

``` html
<u-chips placeholder="请输入内容，按空格或逗号结束"></u-chips>
```

### 双向绑定

使用`v-model`或`:value.sync`进行双向绑定。

``` vue
<template>
<u-linear-layout>
    <u-chips v-model="value"  placeholder="请输入日期"></u-chips>
    <u-chips :value.sync="value" placeholder="请输入日期"></u-chips>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: ['2019-07-01', '2019-07-02'],
        };
    },
};
</script>
```

### 禁用

``` html
<u-linear-layout>
    <u-chips placeholder="禁用" disabled></u-chips>
</u-linear-layout>
```

### 复制粘贴

复制`2019-01-02 2019-01-03 2019-01-04 2019-02-05`，并粘贴到输入框。

``` html
<u-linear-layout>
     <u-chips placeholder="请输入日期"></u-chips>
</u-linear-layout>
```

### 输入内容验证

通过`rules`属性，定义输入字符串的验证规则。具体的规则写法与`<u-validator>`中的写法一致。

``` html
<u-linear-layout>
    <u-validator>
        <u-chips placeholder="请输入IP地址" rules="ip"></u-chips>
    </u-validator>
</u-linear-layout>
```

### 数量验证与重复值检测

通过`list-rules`属性，定义生成项的验证规则，如非空和数量上限等。具体的规则写法与`<u-validator>`中的写法一致。

``` html
<u-linear-layout>
    <u-validator>
        <u-chips placeholder="请输入IP地址，最多输入3个" rules="ip" list-rules="notEmpty | noDuplicates | maxLength(3)"></u-chips>
    </u-validator>
</u-linear-layout>
```

### 分隔符

通过`separators`属性，定义生成项的分隔符，默认为逗号和空格均可作为分隔符。

``` html
<u-linear-layout>
    <u-validator>
        <u-chips placeholder="使用逗号作为分隔符" separators="comma"></u-chips>
    </u-validator>
    <u-validator>
        <u-chips placeholder="使用空格作为分隔符" separators="space"></u-chips>
    </u-validator>
</u-linear-layout>
```

