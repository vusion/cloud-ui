### 基本用法

#### 路由模式

``` html
<u-sidebar style="width: 200px;">
    <u-sidebar-item icon="refresh">指南</u-sidebar-item>
    <u-sidebar-item>概念</u-sidebar-item>
    <u-sidebar-item to="/cloud-ui">组件</u-sidebar-item>
</u-sidebar>
```

#### value模式

``` html
<u-sidebar value="3" :router="false" style="width: 200px;">
    <u-sidebar-item value="1">指南</u-sidebar-item>
    <u-sidebar-item value="2">概念</u-sidebar-item>
    <u-sidebar-item value="3">组件</u-sidebar-item>
</u-sidebar>
```

### 只读、禁用、禁用某一项

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <u-sidebar disabled>
            <u-sidebar-item>指南</u-sidebar-item>
            <u-sidebar-item>概念</u-sidebar-item>
            <u-sidebar-item to="/cloud-ui">组件</u-sidebar-item>
        </u-sidebar>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-sidebar>
            <u-sidebar-item>指南</u-sidebar-item>
            <u-sidebar-item disabled>概念</u-sidebar-item>
            <u-sidebar-item to="/cloud-ui">组件</u-sidebar-item>
        </u-sidebar>
    </u-grid-layout-column>
</u-grid-layout>
```

### 分隔符

``` html
<u-sidebar style="width: 200px;">
    <u-sidebar-item>指南</u-sidebar-item>
    <u-sidebar-item>概念</u-sidebar-item>
    <u-sidebar-item>配置</u-sidebar-item>
    <u-sidebar-divider></u-sidebar-divider>
    <u-sidebar-item to="/cloud-ui">组件</u-sidebar-item>
    <u-sidebar-item to="/libraries">组件库</u-sidebar-item>
</u-sidebar>
```

### 分组

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>默认，无折叠功能</p>
            <u-sidebar>
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>链接</u-sidebar-item>
                    <u-sidebar-item>按钮</u-sidebar-item>
                    <u-sidebar-item>标签</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item>导航栏</u-sidebar-item>
                    <u-sidebar-item to="/cloud-ui/u-sidebar">侧边栏</u-sidebar-item>
                    <u-sidebar-item>标签页</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Form">
                    <u-sidebar-item>单行输入</u-sidebar-item>
                    <u-sidebar-item>多行输入</u-sidebar-item>
                    <u-sidebar-item>选择框</u-sidebar-item>
                    <u-sidebar-item>表单</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>开启折叠功能</p>
            <u-sidebar collapsible>
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>链接</u-sidebar-item>
                    <u-sidebar-item>按钮</u-sidebar-item>
                    <u-sidebar-item>标签</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation" expanded disabled>
                    <u-sidebar-item>导航栏</u-sidebar-item>
                    <u-sidebar-item to="/cloud-ui/u-sidebar">侧边栏</u-sidebar-item>
                    <u-sidebar-item>标签页</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Form" :collapsible="false">
                    <u-sidebar-item>单行输入</u-sidebar-item>
                    <u-sidebar-item>多行输入</u-sidebar-item>
                    <u-sidebar-item>选择框</u-sidebar-item>
                    <u-sidebar-item>表单</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>手风琴模式</p>
            <u-sidebar collapsible accordion>
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>链接</u-sidebar-item>
                    <u-sidebar-item>按钮</u-sidebar-item>
                    <u-sidebar-item>标签</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item>导航栏</u-sidebar-item>
                    <u-sidebar-item to="/cloud-ui/u-sidebar">侧边栏</u-sidebar-item>
                    <u-sidebar-item>标签页</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Form">
                    <u-sidebar-item>单行输入</u-sidebar-item>
                    <u-sidebar-item>多行输入</u-sidebar-item>
                    <u-sidebar-item>选择框</u-sidebar-item>
                    <u-sidebar-item>表单</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
    </u-grid-layout-row>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>触发方式：整行点击均可触发（默认）</p>
            <u-sidebar collapsible expand-trigger="click">
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>链接</u-sidebar-item>
                    <u-sidebar-item>按钮</u-sidebar-item>
                    <u-sidebar-item>标签</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item>导航栏</u-sidebar-item>
                    <u-sidebar-item to="/cloud-ui/u-sidebar">侧边栏</u-sidebar-item>
                    <u-sidebar-item>标签页</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>触发方式：仅点击小箭头时触发</p>
            <u-sidebar collapsible expand-trigger="click-expander">
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>链接</u-sidebar-item>
                    <u-sidebar-item>按钮</u-sidebar-item>
                    <u-sidebar-item>标签</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item>导航栏</u-sidebar-item>
                    <u-sidebar-item to="/cloud-ui/u-sidebar">侧边栏</u-sidebar-item>
                    <u-sidebar-item>标签页</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

### 侧边栏折叠

``` vue
<template>
<u-linear-layout direction="vertical" gap="small">
    <u-capsules v-model="collapse">
        <u-capsule :value="false">展开</u-capsule>
        <u-capsule :value="true">折叠</u-capsule>
    </u-capsules>
    <u-sidebar :collapse="collapse" collapsible :style="{ width: collapse ? '64px' : '200px' }">
        <u-sidebar-group>
            <div slot="title"><i-icon name="search"></i-icon> <span v-if="!collapse">Basic</span></div>
            <u-sidebar-item>链接</u-sidebar-item>
            <u-sidebar-item>按钮</u-sidebar-item>
            <u-sidebar-item>标签</u-sidebar-item>
        </u-sidebar-group>
        <u-sidebar-group title="Navigation">
            <div slot="title"><i-icon name="portrait"></i-icon> <span v-if="!collapse">Navigation</span></div>
            <u-sidebar-item>导航栏</u-sidebar-item>
            <u-sidebar-item to="/cloud-ui/u-sidebar">侧边栏</u-sidebar-item>
            <u-sidebar-item>标签页</u-sidebar-item>
        </u-sidebar-group>
        <u-sidebar-group title="Form">
            <div slot="title"><i-icon name="apm-alert"></i-icon> <span v-if="!collapse">Form</span></div>
            <u-sidebar-item>单行输入</u-sidebar-item>
            <u-sidebar-item>多行输入</u-sidebar-item>
            <u-sidebar-item>选择框</u-sidebar-item>
            <u-sidebar-item>表单</u-sidebar-item>
        </u-sidebar-group>
    </u-sidebar>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            collapse: false,
        };
    },
};
</script>
```

### 颜色扩展

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <u-sidebar style="width: 200px;">
                <u-sidebar-item>指南</u-sidebar-item>
                <u-sidebar-item>概念</u-sidebar-item>
                <u-sidebar-item>配置</u-sidebar-item>
                <u-sidebar-divider></u-sidebar-divider>
                <u-sidebar-item to="/cloud-ui">组件</u-sidebar-item>
                <u-sidebar-item to="/libraries">组件库</u-sidebar-item>
            </u-sidebar>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <u-sidebar style="width: 200px;" color="inverse">
                <u-sidebar-item>指南</u-sidebar-item>
                <u-sidebar-item>概念</u-sidebar-item>
                <u-sidebar-item>配置</u-sidebar-item>
                <u-sidebar-divider></u-sidebar-divider>
                <u-sidebar-item to="/cloud-ui">组件</u-sidebar-item>
                <u-sidebar-item to="/libraries">组件库</u-sidebar-item>
            </u-sidebar>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```
