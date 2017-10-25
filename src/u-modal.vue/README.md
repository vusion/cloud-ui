# 弹窗（Modal）

## 示例
### 基本形式

#### 声明式

``` vue
<template>
<div>
    <u-modal :visible.sync="modalVisible" size="large" icon="alert" title="提示">
        <span>确定移除吗？操作只能移除该账号的管理员角色操作只能移除该账号的管理员角色，其所属专属云信息不，其所属操作只能移除该账号的管理员角色，其所属专属云信息不专属云信息不</span>
        <p>移除操作只能移除该账号的管理员角色，其所属专属云信息不可修改</p>
    </u-modal>
    <u-linear-layout>
        <u-button @click="modalVisible = true">Modal</u-button>
        <u-button @click="open()">Open</u-button>
    </u-linear-layout>
</div>
</template>

<script>
export default {
    data() {
        return {
            modalVisible: false,
        };
    },
    methods: {
        open() {
            Modal.alert('test');
        }
    }
};
</script>
```

<!-- #### 命令式 -->

### Static

``` html
<u-modal visible static width="600">Static</u-modal>
```

### 标题与内容

``` html
<u-modal title="标题" visible static size="small">内容</u-modal>
```

### 自定义

``` html
<u-modal visible static icon="alert">
    <div slot="title">Test</div>
    <div slot="foot">
        <u-button color="primary">关闭</u-button>
    </div>
</u-modal>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | `'提示'` | 弹窗的标题 |
| content | String | `'提示内容'` | 弹窗的内容 |
| visible.sync | Boolean | `false` | 是否显示 |
| okButton | String | `'确定'` | 确定按钮文本，如果为空则不显示 |
| cancelButton | String | `'取消'` | 取消按钮文本，如果为空则不显示 |

### Slots

| Slot | Description |
| ---- | ----------- |
| title | 弹窗标题自定义 |
| (default) | 弹窗内容自定义 |
| head | 弹窗头部自定义 |
| body | 弹窗中部自定义 |
| foot | 弹窗尾部自定义 |

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
