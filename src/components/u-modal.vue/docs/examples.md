### 基本用法

``` vue
<template>
<div>
    <u-modal :visible.sync="visible" title="标题">
        这是一段文字内容。
    </u-modal>
    <u-linear-layout>
        <u-button @click="visible = true">Modal</u-button>
    </u-linear-layout>
</div>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
        };
    },
};
</script>
```

### 快捷方式

``` vue
<template>
<u-linear-layout gap="small">
    <u-button @click="alert()">Alert</u-button>
    <u-button @click="confirm()">Confirm</u-button>
    <u-button @click="custom()">Custom</u-button>
</u-linear-layout>
</template>

<script>
export default {
    methods: {
        alert() {
            this.$alert('创建失败！');
        },
        confirm() {
            this.$confirm('是否要删除该任务？').then(() => {
                console.info('用户点击了确定。');
            }).catch(() => {
                console.info('用户点击了取消。');
            });
        },
        custom() {
            this.$confirm({
                title: '删除',
                content: '是否要删除该任务？',
                icon: 'error',
            }).then(() => {
                console.info('用户点击了确定。');
            }).catch(() => {
                console.info('用户点击了取消。');
            });
        },
    },
};
</script>
```

### Static

``` html
<u-modal visible static>静态显示，该属性用于文档中局部展示，实际开发时请去除。</u-modal>
```

### 标题与内容

``` html
<u-modal title="标题" visible static>内容</u-modal>
```

### 图标、小标题与描述

``` html
<u-modal title="删除" content="确定删除该服务吗？" icon="warning" visible static>
    <template #description>
        <span>删除后不可恢复。</span>
    </template>
</u-modal>
<u-modal title="创建" content="创建成功!" icon="success" visible static></u-modal>
<u-modal title="创建" content="创建失败!" icon="error" visible static></u-modal>
```

### 改变主要按钮

``` html
<u-modal title="标题" visible static primary-button="cancelButton">内容</u-modal>
```

### 禁用按钮

``` html
<u-modal title="标题" visible static disable-ok>内容</u-modal>
```

### 自定义

``` html
<u-modal visible static>
    <div slot="title">自定义</div>
    <div slot="foot">
        <u-button color="primary">关闭</u-button>
    </div>
</u-modal>
```
### 大小扩展

``` html
<u-modal visible static size="small">
    Small
</u-modal>
<u-modal visible static size="normal">
    Normal
</u-modal>
<u-modal visible static size="large">
    Large
</u-modal>
<u-modal visible static size="huge">
    Huge
</u-modal>
<u-modal visible static size="auto">
    Auto
</u-modal>
```
