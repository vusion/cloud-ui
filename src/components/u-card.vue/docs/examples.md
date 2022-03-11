### 基本用法

``` html
<u-card title="卡片">
    <u-skeleton></u-skeleton>
</u-card>
```

### 带分割线样式

``` html
<u-card title="卡片" split>
    <u-skeleton></u-skeleton>
</u-card>
```

### 带图片样式

``` html
<u-card title="卡片" style="width: 280px">
    <u-image slot="cover" src="https://static-vusion.163yun.com/assets/cloud-ui/1.jpg" fit="contain"></u-image>
    <u-skeleton></u-skeleton>
</u-card>
```


### 卡片分组

``` html
<u-card title="卡片">
    <u-card-group title="卡片分组">
        <u-skeleton></u-skeleton>
    </u-card-group>
    <u-card-group title="卡片分组">
        <u-skeleton></u-skeleton>
    </u-card-group>
</u-card>
```
