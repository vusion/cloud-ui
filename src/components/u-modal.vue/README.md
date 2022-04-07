<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UModal 弹窗

- [示例](#示例)
    - [基本用法](#基本用法)
    - [快捷方式](#快捷方式)
    - [Static](#static)
    - [标题与内容](#标题与内容)
    - [图标、小标题与描述](#图标-小标题与描述)
    - [改变主要按钮](#改变主要按钮)
    - [禁用按钮](#禁用按钮)
    - [自定义](#自定义)
    - [大小扩展](#大小扩展)
    - [点击遮罩关闭](#点击遮罩关闭)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
    - [Methods](#methods)

**Feedback**

弹窗

## 示例
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

### 点击遮罩关闭

``` html
<u-modal title="标题" visible static :maskClose="true">内容</u-modal>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  | `'提示'` | 弹窗的标题 |
| content | string |  | `'提示内容'` | 弹窗的内容 |
| description | string |  | `'详情描述'` | 弹窗的详情描述 |
| visible.sync | boolean |  | `false` | 弹窗默认打开 |
| ok-button | string |  | `'确定'` | 确定按钮文本，如果为空则不显示 |
| cancel-button | string |  | `'取消'` | 取消按钮文本，如果为空则不显示 |
| icon | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` |  |  |
| size | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 弹窗的尺寸 |
| static | boolean |  | `false` | 是否嵌入页面显示 |
| mask-close | boolean |  | `false` | 点击遮罩关闭弹窗 |

### Slots

#### title

弹窗标题自定义

#### head

弹窗头部自定义

#### body

弹窗中部自定义

#### foot

弹窗尾部自定义

#### heading

弹框小标题自定义

#### (default)

弹窗内容自定义

### Events

#### @before-open

打开弹窗前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| senderVM | UModal | 发送事件实例 |

#### @open

打开弹窗后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| senderVM | UModal | 发送事件实例 |

#### @ok

确定时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| senderVM | UModal | 发送事件实例 |

#### @cancel

取消时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| senderVM | UModal | 发送事件实例 |

#### @before-close

关闭弹窗前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.ok | boolean | 是否确定 |
| $event.preventDefault | Function | 阻止关闭流程 |
| senderVM | UModal | 发送事件实例 |

#### @close

关闭弹窗时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.ok | boolean | 是否确定 |
| senderVM | UModal | 发送事件实例 |

Methods

#### open()

打开弹窗

#### close()

关闭弹窗

#### ok()

确定弹窗

#### cancel()

取消弹窗

