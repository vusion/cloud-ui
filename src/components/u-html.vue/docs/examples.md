### 基本用法

``` html
<u-html html="<a href='https://www.163yun.com' target='_blank' >html 元素</a><img src='' onerror='alert(4)'>"></u-html>
```

### 不使用安全过滤

```vue
<template>
<u-html html="<a href='https://www.163yun.com' target='_blank' >html 元素</a><img src='' onerror='console.log(1)'>" :security="false"></u-html>
</template>
```
