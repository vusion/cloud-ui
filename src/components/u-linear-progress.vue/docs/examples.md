### 基本用法

``` html
<u-linear-progress :percent="36"></u-linear-progress>
```

### 高度扩展

``` html
<u-linear-layout direction="vertical">
    <u-linear-progress :percent="36" size="small">small</u-linear-progress>
    <u-linear-progress :percent="36" size="normal">normal</u-linear-progress>
    <u-linear-progress :percent="36" size="large">large</u-linear-progress>
    <u-linear-progress :percent="36" size="huge">huge</u-linear-progress>
</u-linear-layout>
```

### 范围限制

``` html
<u-linear-layout direction="vertical">
    <u-linear-progress :range="[20]" :percent="36">20</u-linear-progress>
    <u-linear-progress :range="[20,50]" :percent="36">20,50</u-linear-progress>
</u-linear-layout>
```

### 颜色属性

``` html
<u-linear-layout direction="vertical">
    <u-linear-progress :percent="36"></u-linear-progress>
    <u-linear-progress :percent="36" color="error"></u-linear-progress>
    <u-linear-progress :percent="36" color="success"></u-linear-progress>
</u-linear-layout>
```

### 垂直方向

``` html
<u-linear-layout>
    <u-linear-progress :percent="36" direction="vertical" size="small">small</u-linear-progress>
    <u-linear-progress :percent="36" direction="vertical" size="normal" >normal</u-linear-progress>
    <u-linear-progress :percent="36" direction="vertical" size="large" color="error" :range="[20]">large</u-linear-progress>
    <u-linear-progress :percent="36" direction="vertical" size="huge" color="success" :range="[20,50]">huge</u-linear-progress>
</u-linear-layout>
```
