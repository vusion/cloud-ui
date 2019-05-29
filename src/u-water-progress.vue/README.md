# Well

## 示例
### 基本形式

``` html
<u-water-progress :value="36"></u-water-progress>
```

### 添加文字

``` html
<u-water-progress text="内存使用率" :value="36"></u-water-progress>
```

### 颜色扩展

``` html
<u-linear-layout>
    <u-water-progress text="内存使用率" :value="20"></u-water-progress>
    <u-water-progress text="内存使用率" :value="35" color="primary"></u-water-progress>
    <u-water-progress text="内存使用率" :value="50" color="success"></u-water-progress>
    <u-water-progress text="内存使用率" :value="65" color="warning"></u-water-progress>
    <u-water-progress text="内存使用率" :value="80" color="error"></u-water-progress>
</u-linear-layout>
```
