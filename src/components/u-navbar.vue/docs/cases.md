### 其他
#### 只读与禁用

``` html
<u-linear-layout direction="vertical">
    <u-navbar readonly>
        <u-navbar-item>指南</u-navbar-item>
        <u-navbar-item to="/cloud-ui">组件</u-navbar-item>
        <u-navbar-dropdown title="下拉菜单">
            <u-navbar-menu>
                <u-navbar-menu-item>Basic</u-navbar-menu-item>
                <u-navbar-menu-item>Layout</u-navbar-menu-item>
                <u-navbar-menu-item>Navigation
                    <u-navbar-menu slot="sub">
                        <u-navbar-menu-item>Navbar</u-navbar-menu-item>
                        <u-navbar-menu-item>Sidebar</u-navbar-menu-item>
                        <u-navbar-menu-item>Menu</u-navbar-menu-item>
                    </u-navbar-menu>
                </u-navbar-menu-item>
            </u-navbar-menu>
        </u-navbar-dropdown>
        <u-navbar-select>
            <u-navbar-select-item>请选择</u-navbar-select-item>
            <u-navbar-select-item>中文</u-navbar-select-item>
            <u-navbar-select-item>English</u-navbar-select-item>
            <u-navbar-select-item>Français</u-navbar-select-item>
            <u-navbar-select-item>Русский</u-navbar-select-item>
        </u-navbar-select>
    </u-navbar>
    <u-navbar disabled>
        <u-navbar-item>指南</u-navbar-item>
        <u-navbar-item to="/cloud-ui">组件</u-navbar-item>
        <u-navbar-dropdown title="下拉菜单">
            <u-navbar-menu>
                <u-navbar-menu-item>Basic</u-navbar-menu-item>
                <u-navbar-menu-item>Layout</u-navbar-menu-item>
                <u-navbar-menu-item>Navigation
                    <u-navbar-menu slot="sub">
                        <u-navbar-menu-item>Navbar</u-navbar-menu-item>
                        <u-navbar-menu-item>Sidebar</u-navbar-menu-item>
                        <u-navbar-menu-item>Menu</u-navbar-menu-item>
                    </u-navbar-menu>
                </u-navbar-menu-item>
            </u-navbar-menu>
        </u-navbar-dropdown>
        <u-navbar-select>
            <u-navbar-select-item>请选择</u-navbar-select-item>
            <u-navbar-select-item>中文</u-navbar-select-item>
            <u-navbar-select-item>English</u-navbar-select-item>
            <u-navbar-select-item>Français</u-navbar-select-item>
            <u-navbar-select-item>Русский</u-navbar-select-item>
        </u-navbar-select>
    </u-navbar>
</u-linear-layout>
```
