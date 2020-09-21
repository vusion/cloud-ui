### 基本用法

``` html
<u-html html="<a href='https://www.163yun.com' target='_blank' >html 元素</a><img src='' onerror='alert(4)'>"></u-html>
```

### 不使用安全过滤

```html
<template>
<u-html html="<a href='https://www.163yun.com' target='_blank' >html 元素</a><img src='' onerror='alert(4)'>" :security="false"></u-html>
</template>
```
