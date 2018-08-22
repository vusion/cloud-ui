# 弹窗 Modal

## 示例
### 基本形式

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
<u-linear-layout>
    <u-button @click="alert()">Alert</u-button>
    <u-button @click="confirm()">Confirm</u-button>
</u-linear-layout>
</template>

<script>
export default {
    methods: {
        alert() {
            this.$alert('创建失败！');
        },
        confirm() {
            this.$confirm('是否要删除该任务？','删除').then(() => {
                console.log('用户点击了确定。');
            }).catch(() => {
                console.log('用户点击了取消。');
            });
        },
    },
};
</script>
```

### Static

``` html
<u-modal visible static>静态显示，用于文档或局部展示</u-modal>
```

### 标题与内容

``` html
<u-modal title="标题" visible static>内容</u-modal>
```

### 图标、小标题与描述

``` html
<u-modal title="删除" heading="确定删除该服务吗？" icon="warning" visible static>删除后不可恢复。</u-modal>
<u-modal title="创建" heading="创建成功" icon="success" visible static></u-modal>
```

### 自定义

``` html
<u-modal visible static>
    <div slot="title">自定义</div>
    <div slot="body">这是一段文字内容。</div>
    <div slot="foot">
        <u-button color="primary">关闭</u-button>
    </div>
</u-modal>
```
### 大小扩展

``` html
<u-modal visible static size="small">
    size 为small，大小是300px
</u-modal>
<u-modal visible static size="normal">
    size 为默认的normal,大小是400px
</u-modal>
<u-modal visible static size="large">
    size 为large,大小是600px
</u-modal>
<u-modal visible static size="huge">
    size 为huge,大小是800px
</u-modal>
<u-modal visible static size="auto">
    size 为auto
</u-modal>
```



## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | `'提示'` | 弹窗的标题 |
| content | String |  | 弹窗的内容 |
| heading | String |  | 弹窗的小标题 |
| okButton | String | `'确定'` | 确定按钮文本，如果为空则不显示 |
| cancelButton | String | `'取消'` | 取消按钮文本，如果为空则不显示 |
| size | String | `'normal'` | 弹框的尺寸，可选值：`'small'`, `'large'`, `'huge'`, `'auto'` |
| icon | String | `''` | 提示图标, 可选值：`'success'`, `'warning'`, `'error'` |
| visible.sync | Boolean | `false` | 弹窗是否显示 |
| static | Boolean | `false` | 弹窗是否静态显示 |
| maskClose | Boolean | `false` | 点击遮罩层关闭弹窗，默认不可关闭，设置可关闭则需设置值为true |

### Slots

| Slot | Description |
| ---- | ----------- |
| title | 弹窗标题自定义 |
| head | 弹窗头部自定义 |
| body | 弹窗中部自定义，使用该插槽后 `heading`和 `默认` 插槽失效 |
| foot | 弹窗尾部自定义 |
| heading | 弹框小标题自定义 |
| (default) | 弹窗内容自定义 |

### Events

#### @open

打开弹窗时触发

| Param | Type | Description |
| ----- | ---- | ----------- |

#### @ok

确定时触发

| Param | Type | Description |
| ----- | ---- | ----------- |

#### @cancel

取消时触发

| Param | Type | Description |
| ----- | ---- | ----------- |

#### @before-close

关闭弹窗前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止关闭流程 |

#### @close
关闭弹窗时触发

| Param | Type | Description |
| ----- | ---- | ----------- |

### Methods

#### alert(content, title)

打开只有确定按钮的消息提示

| Param | Type | Description |
| ----- | ---- | ----------- |
| content | String | 提示内容 |
| title | String | 提示标题，默认值为`'提示'` |

#### confirm(content, title)

打开有确定和取消按钮的消息提示

| Param | Type | Description |
| ----- | ---- | ----------- |
| content | String | 提示内容 |
| title | String | 提示标题，默认值为`'提示'` |
