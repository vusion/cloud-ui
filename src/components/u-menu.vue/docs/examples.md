### 基本用法

可以结合 Popup 或 Popper 弹出菜单。

``` html
<u-linear-layout>
    <u-button>
        Popup 菜单
        <u-popup>
            <u-menu slot="root">
                <u-menu-item to="/guides/">指南</u-menu-item>
                <u-menu-item to="/api/">API</u-menu-item>
                <u-menu-item to="/components/">原型组件</u-menu-item>
                <u-menu-item href="https://github.com/vusion">GitHub</u-menu-item>
            </u-menu>
        </u-popup>
    </u-button>
    <u-button>
        Popper 菜单
        <m-popper>
            <u-menu value="3" :router="false" style="width: 128px;">
                <u-menu-item to="/guides/">指南</u-menu-item>
                <u-menu-item to="/api/">API</u-menu-item>
                <u-menu-item to="/components/">原型组件</u-menu-item>
                <u-menu-item href="https://github.com/vusion">GitHub</u-menu-item>
            </u-menu>
        </m-popper>
    </u-button>
</u-linear-layout>
```

### 多级菜单

``` html
<u-linear-layout direction="vertical">
    <u-menu style="width: 200px;">
        <u-menu-item>指南</u-menu-item>
        <u-menu-item>API
            <u-menu slot="sub">
                <u-menu-item to="/api/cli">命令行工具（CLI）</u-menu-item>
                <u-menu-item to="/api/config">配置</u-menu-item>
            </u-menu>
        </u-menu-item>
        <u-menu-item>组件
            <u-menu slot="sub">
                <u-menu-item>原型组件
                    <u-menu slot="sub">
                        <u-menu-item>Basic
                            <u-menu slot="sub">
                                <u-menu-item to="/components/u-link">链接 Link</u-menu-item>
                                <u-menu-item to="/components/u-button">按钮 Button</u-menu-item>
                                <u-menu-item to="/components/u-badge">徽章 Badge</u-menu-item>
                            </u-menu>
                        </u-menu-item>
                        <u-menu-item>Navigation
                            <u-menu slot="sub">
                                <u-menu-item to="/components/u-navbar">导航栏 Navbar</u-menu-item>
                                <u-menu-item to="/components/u-sidebar">侧边栏 Sidebar</u-menu-item>
                                <u-menu-item to="/components/u-menu">菜单 Menu</u-menu-item>
                            </u-menu>
                        </u-menu-item>
                        <u-menu-item>Popper
                            <u-menu slot="sub">
                                <u-menu-item to="/components/m-popper">弹出层 Popper</u-menu-item>
                                <u-menu-item to="/components/u-tooltip">工具提示 Tooltip</u-menu-item>
                                <u-menu-item to="/components/u-popup">弹出框 Popup</u-menu-item>
                            </u-menu>
                        </u-menu-item>
                    </u-menu>
                </u-menu-item>
                <u-menu-item to="/ui-design">组件设计方案</u-menu-item>
            </u-menu>
        </u-menu-item>
        <u-menu-item target="_blank" href="https://github.com/vusion">GitHub</u-menu-item>
    </u-menu>
    <div>
        <u-button>
            多级菜单
            <u-popup>
                <u-menu slot="root" style="width: 200px;">
                    <u-menu-item>指南</u-menu-item>
                    <u-menu-item>API
                        <u-menu slot="sub">
                            <u-menu-item to="/api/cli">命令行工具（CLI）</u-menu-item>
                            <u-menu-item to="/api/config">配置</u-menu-item>
                        </u-menu>
                    </u-menu-item>
                    <u-menu-item>组件
                        <u-menu slot="sub">
                            <u-menu-item>原型组件
                                <u-menu slot="sub">
                                    <u-menu-item>Basic
                                        <u-menu slot="sub">
                                            <u-menu-item to="/components/u-link">链接 Link</u-menu-item>
                                            <u-menu-item to="/components/u-button">按钮 Button</u-menu-item>
                                            <u-menu-item to="/components/u-badge">徽章 Badge</u-menu-item>
                                        </u-menu>
                                    </u-menu-item>
                                    <u-menu-item>Navigation
                                        <u-menu slot="sub">
                                            <u-menu-item to="/components/u-navbar">导航栏 Navbar</u-menu-item>
                                            <u-menu-item to="/components/u-sidebar">侧边栏 Sidebar</u-menu-item>
                                            <u-menu-item to="/components/u-menu">菜单 Menu</u-menu-item>
                                        </u-menu>
                                    </u-menu-item>
                                    <u-menu-item>Popper
                                        <u-menu slot="sub">
                                            <u-menu-item to="/components/m-popper">弹出层 Popper</u-menu-item>
                                            <u-menu-item to="/components/u-tooltip">工具提示 Tooltip</u-menu-item>
                                            <u-menu-item to="/components/u-popup">弹出框 Popup</u-menu-item>
                                        </u-menu>
                                    </u-menu-item>
                                </u-menu>
                            </u-menu-item>
                            <u-menu-item to="/ui-design">组件设计方案</u-menu-item>
                        </u-menu>
                    </u-menu-item>
                    <u-menu-item target="_blank" href="https://github.com/vusion">GitHub</u-menu-item>
                </u-menu>
            </u-popup>
        </u-button>
    </div>
</u-linear-layout>
```

### 禁用、禁用某一项

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <u-menu disabled>
            <u-menu-item>指南</u-menu-item>
            <u-menu-item>概念</u-menu-item>
            <u-menu-item to="/cloud-ui">组件</u-menu-item>
        </u-menu>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-menu>
            <u-menu-item>指南</u-menu-item>
            <u-menu-item disabled>概念</u-menu-item>
            <u-menu-item to="/cloud-ui">组件</u-menu-item>
        </u-menu>
    </u-grid-layout-column>
</u-grid-layout>
```

### 分隔符

``` html
<u-menu style="width: 200px;">
    <u-menu-item>指南</u-menu-item>
    <u-menu-item>概念</u-menu-item>
    <u-menu-item>配置</u-menu-item>
    <u-menu-divider></u-menu-divider>
    <u-menu-item to="/cloud-ui">组件</u-menu-item>
    <u-menu-item to="/libraries">组件库</u-menu-item>
</u-menu>
```

### 分组

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>默认，无折叠功能</p>
            <u-menu>
                <u-menu-group title="Basic">
                    <u-menu-item>链接</u-menu-item>
                    <u-menu-item>按钮</u-menu-item>
                    <u-menu-item>标签</u-menu-item>
                </u-menu-group>
                <u-menu-group title="Navigation">
                    <u-menu-item>导航栏</u-menu-item>
                    <u-menu-item to="/components/u-menu">侧边栏</u-menu-item>
                    <u-menu-item>标签页</u-menu-item>
                </u-menu-group>
                <u-menu-group title="Form">
                    <u-menu-item>单行输入</u-menu-item>
                    <u-menu-item>多行输入</u-menu-item>
                    <u-menu-item>选择框</u-menu-item>
                    <u-menu-item>表单</u-menu-item>
                </u-menu-group>
            </u-menu>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```
