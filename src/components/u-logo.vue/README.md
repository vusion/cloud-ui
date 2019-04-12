# ULogo

## 示例
### 基本形式

``` html
<u-linear-layout direction="vertical">
    <div style="background: #4289db; padding: 0 10px;">
        <u-logo></u-logo>
    </div>
    <div style="background: #1d2b40; padding: 0 10px;">
        <u-logo name="yiwu"></u-logo>
    </div>
    <div style="background: #1d2b40; padding: 0 10px;">
        <u-logo href="http://www.baidu.com" target="_blank" name="163yun"></u-logo>
    </div>
</u-linear-layout>
```

### 子标题

``` html
<u-linear-layout direction="vertical">
    <div style="background: #4289db; padding: 0 10px;">
        <u-logo><a href="/" target="_blank">ICP 备案系统</a></u-logo>
    </div>
    <div style="background: #1d2b40; padding: 0 10px;">
        <u-logo name="163yun">管理平台</u-logo>
    </div>
</u-linear-layout>
```

### 颜色扩展

``` html
<u-linear-layout direction="vertical">
    <div style="background: #343f4f; padding: 0 10px;">
        <u-logo color="2color"></u-logo>
    </div>
    <div style="background: #343f4f; padding: 0 10px;">
        <u-logo name="yiwu" color="2color"></u-logo>
    </div>
    <div style="background: #343f4f; padding: 0 10px;">
        <u-logo name="163yun" color="2color"></u-logo>
    </div>
</u-linear-layout>
```
