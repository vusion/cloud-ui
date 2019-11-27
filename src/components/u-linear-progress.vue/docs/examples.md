### 基本用法

``` html
<u-linear-progress :percent="36"></u-linear-progress>
```

### 高度扩展

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-linear-progress :percent="36" size="small">small</u-linear-progress>
    </u-linear-layout>
    <u-linear-layout>
        <u-linear-progress :percent="36" size="normal">normal</u-linear-progress>
    </u-linear-layout>
    <u-linear-layout>
        <u-linear-progress size="large">large</u-linear-progress>
    </u-linear-layout>
    <u-linear-layout>
        <u-linear-progress size="huge">huge</u-linear-progress>
    </u-linear-layout>
</u-linear-layout>
```

### 范围限制
``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-linear-progress :range="[20]" :percent="36">20</u-linear-progress>
    </u-linear-layout>
    <u-linear-layout>
        <u-linear-progress :range="[20,50]" :percent="36">20,50</u-linear-progress>
    </u-linear-layout>
</u-linear-layout>
```
