### 基本用法

``` html
<u-button>设 置</u-button>
```

### 禁用

``` html
<u-button disabled>设 置</u-button>
```

### 颜色扩展

``` html
<u-linear-layout>
    <u-button color="primary">立即创建</u-button>
    <u-button color="primary" disabled>立即创建</u-button>
</u-linear-layout>
```

### 大小扩展

``` html
<u-linear-layout>
    <u-button size="small" disabled>保存</u-button>
    <u-button disabled>创建服务</u-button>
</u-linear-layout>
```

### 正方形

``` html
<u-button square icon="refresh"></u-button>
```

### 展示方式

``` html
<u-button display="block">块级按钮</u-button>
<u-button display="inline">行内按钮（默认）</u-button>
```

### 图标

``` html
<u-linear-layout>
    <u-button color="primary" icon="create">创建实例</u-button>
    <u-button color="primary" icon="loading">立即创建</u-button>
    <u-button color="primary" icon="loading" disabled>立即创建</u-button>
    <u-button color="primary" icon="success">立即创建</u-button>
</u-linear-layout>
```

### 链接

``` html
<u-linear-layout>
    <u-button href="https://vusion.github.io" target="_blank">href</u-button>
    <u-button to="/proto-ui/u-link">to</u-button>
    <u-button href="https://vusion.github.io" disabled>disabled</u-button>
</u-linear-layout>
```
