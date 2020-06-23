### 基本用法

``` html
<u-desc-list>
    <u-desc-list-group title="个人信息">
        <u-desc-list-item label="用户名">xxxxxx</u-desc-list-item>
        <u-desc-list-item label="登录账号">1111111</u-desc-list-item>
        <u-desc-list-item label="登录密码">
            <u-link>修改</u-link>
        </u-desc-list-item>
        <u-desc-list-item label="手机">13888888888</u-desc-list-item>
    </u-desc-list-group>
    <u-desc-list-group title="公司信息">
        <u-desc-list-item label="公司名">xxxxxx</u-desc-list-item>
        <u-desc-list-item label="联系电话">13688886666</u-desc-list-item>
        <u-desc-list-item label="联系邮箱">xxxx@163.com</u-desc-list-item>
    </u-desc-list-group>
</u-desc-list>
```

### 行内排列

``` html
<u-desc-list layout="inline" label-size="auto">
    <u-desc-list-group title="个人信息">
        <u-desc-list-item label="用户名">xxxxxx</u-desc-list-item>
        <u-desc-list-item label="登录账号">1111111</u-desc-list-item>
        <u-desc-list-item label="登录密码">
            <u-link>修改</u-link>
        </u-desc-list-item>
        <u-desc-list-item label="手机">13888888888</u-desc-list-item>
    </u-desc-list-group>
    <u-desc-list-group title="公司信息">
        <u-desc-list-item label="公司名">xxxxxx</u-desc-list-item>
        <u-desc-list-item label="联系电话">13688886666</u-desc-list-item>
        <u-desc-list-item label="联系邮箱">xxxx@163.com</u-desc-list-item>
    </u-desc-list-group>
</u-desc-list>
```

### 间距

通过设置`gap`属性，调整间距大小。

``` html
<u-desc-list gap="none">
    <u-desc-list-group title="个人信息">
        <u-desc-list-item label="用户名">xxxxxx</u-desc-list-item>
        <u-desc-list-item label="登录账号">1111111</u-desc-list-item>
        <u-desc-list-item label="登录密码">
            <u-link>修改</u-link>
        </u-desc-list-item>
        <u-desc-list-item label="手机">13888888888</u-desc-list-item>
    </u-desc-list-group>
    <u-desc-list-group title="公司信息">
        <u-desc-list-item label="公司名">xxxxxx</u-desc-list-item>
        <u-desc-list-item label="联系电话">13688886666</u-desc-list-item>
        <u-desc-list-item label="联系邮箱">xxxx@163.com</u-desc-list-item>
    </u-desc-list-group>
</u-desc-list>
```

``` html
<u-desc-list gap="small">
    <u-desc-list-group title="个人信息">
        <u-desc-list-item label="用户名">xxxxxx</u-desc-list-item>
        <u-desc-list-item label="登录账号">1111111</u-desc-list-item>
        <u-desc-list-item label="登录密码">
            <u-link>修改</u-link>
        </u-desc-list-item>
        <u-desc-list-item label="手机">13888888888</u-desc-list-item>
    </u-desc-list-group>
    <u-desc-list-group title="公司信息">
        <u-desc-list-item label="公司名">xxxxxx</u-desc-list-item>
        <u-desc-list-item label="联系电话">13688886666</u-desc-list-item>
        <u-desc-list-item label="联系邮箱">xxxx@163.com</u-desc-list-item>
    </u-desc-list-group>
</u-desc-list>
```

``` html
<u-desc-list gap="large">
    <u-desc-list-group title="个人信息">
        <u-desc-list-item label="用户名">xxxxxx</u-desc-list-item>
        <u-desc-list-item label="登录账号">1111111</u-desc-list-item>
        <u-desc-list-item label="登录密码">
            <u-link>修改</u-link>
        </u-desc-list-item>
        <u-desc-list-item label="手机">13888888888</u-desc-list-item>
    </u-desc-list-group>
    <u-desc-list-group title="公司信息">
        <u-desc-list-item label="公司名">xxxxxx</u-desc-list-item>
        <u-desc-list-item label="联系电话">13688886666</u-desc-list-item>
        <u-desc-list-item label="联系邮箱">xxxx@163.com</u-desc-list-item>
    </u-desc-list-group>
</u-desc-list>
```