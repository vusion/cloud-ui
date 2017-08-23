# 导航条（Navbar）

## 示例
### 基本形式

``` html
<div style="background: #4289db">
    <u-navbar>
        <u-navbar-item selected>主体</u-navbar-item>
        <u-navbar-item>备案管理</u-navbar-item>
        <u-navbar-item>帮助</u-navbar-item>
    </u-navbar>
</div>
```

### 位置

``` html
<u-linear-layout direction="vertical">
    <div style="background: #4289db">
        <u-navbar align="center">
            <u-navbar-item selected>主体</u-navbar-item>
            <u-navbar-item>备案管理</u-navbar-item>
            <u-navbar-item>帮助</u-navbar-item>
        </u-navbar>
    </div>
    <div style="background: #4289db">
        <u-navbar align="right">
            <u-navbar-item selected>主体</u-navbar-item>
            <u-navbar-item>备案管理</u-navbar-item>
            <u-navbar-item>帮助</u-navbar-item>
        </u-navbar>
    </div>
</u-linear-layout>
```

### 与Logo结合

``` html
<u-linear-layout direction="vertical">
    <div style="background: #4289db; padding: 0 10px;">
        <u-navbar>
            <u-logo slot="left"><a href="/" target="_blank">ICP 备案系统</a></u-logo>
            <u-navbar-item selected>主体</u-navbar-item>
            <u-navbar-item>备案管理</u-navbar-item>
            <u-navbar-item>帮助</u-navbar-item>
        </u-navbar>
    </div>
    <div style="background: #151d2b; padding: 0 10px;">
        <u-navbar align="right">
            <u-logo slot="left"></u-logo>
            <u-navbar-item>产品</u-navbar-item>
            <u-navbar-item selected>价格</u-navbar-item>
            <u-navbar-item>帮助</u-navbar-item>
            <u-navbar-item>合作与生态</u-navbar-item>
            <u-navbar-item>博客</u-navbar-item>
            <u-navbar-item>备案</u-navbar-item>
        </u-navbar>
    </div>
</u-linear-layout>
```
