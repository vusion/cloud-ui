<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UDrawer 抽屉

- [示例](#示例)
    - [基本用法](#基本用法)
    - [位置](#位置)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

## 示例
### 基本用法

``` vue
<template>
<div>
    <u-drawer :visible.sync="visible" title="标题">
        <u-sidebar slot="drawer">
            <u-sidebar-item>指南</u-sidebar-item>
            <u-sidebar-item>概念</u-sidebar-item>
            <u-sidebar-item to="/cloud-ui">组件</u-sidebar-item>
        </u-sidebar>
    </u-drawer>
    <u-linear-layout>
        <u-button @click="visible = true">Drawer</u-button>
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

### 位置

``` vue
<template>
<div>
    <u-drawer :visible.sync="leftVisible" title="标题">
    
    </u-drawer>
    <u-drawer placement="right" :visible.sync="rightVisible" title="标题">

    </u-drawer>
    <u-linear-layout gap="small">
        <u-button @click="leftVisible = true">Left</u-button>
        <u-button @click="rightVisible = true">Right</u-button>
    </u-linear-layout>
</div>
</template>

<script>
export default {
    data() {
        return {
            leftVisible: false,
            rightVisible: false,
        };
    },
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| visible.sync | boolean |  | `false` | 是否显示 |
| title | string |  | `'提示'` | 抽屉的标题 |
| okButton | string |  | `'确定'` | 确定按钮文本，如果为空则不显示 |
| cancelButton | string |  | `'取消'` | 取消按钮文本，如果为空则不显示 |
| size | string |  | `'normal'` | 抽屉的尺寸。可选值：`'small'`, `'normal'`, `'large'` |
| static | boolean |  | `false` | 是否嵌入页面显示 |
| maskClosable | boolean |  | `true` | 是否点击遮罩时关闭抽屉 |

### Events

#### @open

打开抽屉时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| senderVM | UDrawer | 发送事件实例 |

#### @ok

确定时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| senderVM | UDrawer | 发送事件实例 |

#### @cancel

取消时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| senderVM | UDrawer | 发送事件实例 |

#### @before-close

关闭抽屉前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| ok | boolean | 是否确定 |
| $event.preventDefault | Function | 阻止关闭流程 |
| senderVM | UDrawer | 发送事件实例 |

#### @close

关闭抽屉时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| ok | boolean | 是否确定 |
| senderVM | UDrawer | 发送事件实例 |

