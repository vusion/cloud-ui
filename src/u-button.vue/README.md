# 按钮（Button）

## 示例
### 基本形式

``` html
<u-button>设 置</u-button>
```

### 禁用

``` html
<u-button disabled>设 置</u-button>
```

### 颜色扩展

``` html
<u-button color="primary">立即创建</u-button>
<u-button color="primary" disabled>立即创建</u-button>
```

### 大小扩展

``` html
<u-button size="small" disabled>保存</u-button>
<u-button disabled>创建服务</u-button>
```

### 正方形

``` html
<u-button square><i class="i-font i-font-refresh"></i></u-button>
```

### 链接

- 使用`v-href`指令添加普通链接
- 使用`v-to`指令添加[vue-router](https://router.vuejs.org)链接

``` html
<u-button v-href="'https://github.com/vusion/vusion'">Button</u-button>
<u-button v-to="'/some/router/path'">Button</u-button>
<u-button v-href="'https://github.com/vusion/vusion'" disabled>Button</u-button>
```
