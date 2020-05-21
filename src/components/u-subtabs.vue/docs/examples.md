### 基本用法

``` html
<u-subtabs>
    <u-subtab title="模板">模板内容</u-subtab>
    <u-subtab title="样式">样式内容</u-subtab>
    <u-subtab title="逻辑">逻辑内容</u-subtab>
</u-subtabs>
```

### Value

``` html
<u-subtabs value="B">
    <u-subtab title="模板" value="A">模板内容</u-subtab>
    <u-subtab title="样式" value="B">样式内容</u-subtab>
    <u-subtab title="逻辑" value="C">逻辑内容</u-subtab>
</u-subtabs>
```

### 只读和禁用

``` html
<u-subtabs readonly>
    <u-subtab title="模板">模板内容</u-subtab>
    <u-subtab title="样式">样式内容</u-subtab>
    <u-subtab title="逻辑">逻辑内容</u-subtab>
</u-subtabs>
<u-subtabs disabled>
    <u-subtab title="模板">模板内容</u-subtab>
    <u-subtab title="样式">样式内容</u-subtab>
    <u-subtab title="逻辑">逻辑内容</u-subtab>
</u-subtabs>
<u-subtabs>
    <u-subtab title="模板">模板内容</u-subtab>
    <u-subtab title="样式" disabled>样式内容</u-subtab>
    <u-subtab title="逻辑">逻辑内容</u-subtab>
</u-subtabs>
```

### 隐藏部分项

``` html
<u-subtabs value="2">
    <u-subtab title="模板" value="0">模板内容</u-subtab>
    <u-subtab title="样式" value="1" hidden>样式内容</u-subtab>
    <u-subtab title="逻辑" value="2">逻辑内容</u-subtab>
</u-subtabs>
```

### 可关闭

``` html
<u-subtabs closable>
    <u-subtab title="模板">模板内容</u-subtab>
    <u-subtab title="样式">样式内容</u-subtab>
    <u-subtab title="逻辑">逻辑内容</u-subtab>
    <u-subtab title="文档">文档内容</u-subtab>
    <u-subtab title="资源">资源内容</u-subtab>
</u-subtabs>
```


### 路由

``` html
<u-subtabs router>
    <u-subtab title="Button" to="/components/u-button"></u-subtab>
    <u-subtab title="Checkbox" to="/components/u-checkbox"></u-subtab>
    <u-subtab title="Tabs" to="/components/u-subtabs"></u-subtab>
</u-subtabs>
```

### 额外的

``` html
<u-subtabs value="1">
    <u-subtab title="模板" value="0">模板内容</u-subtab>
    <u-subtab title="样式" value="1">样式内容</u-subtab>
    <u-subtab title="逻辑" value="2">逻辑内容</u-subtab>
    <u-checkbox slot="extra">全选</u-checkbox>
</u-subtabs>
```
