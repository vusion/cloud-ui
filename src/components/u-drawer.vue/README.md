<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UDrawer 抽屉

- [示例](#示例)
    - [基本用法](#基本用法)
    - [抽屉显示位置](#抽屉显示位置)
    - [关闭展示首尾插槽](#关闭展示首尾插槽)
    - [抽屉尺寸](#抽屉尺寸)
    - [插槽空缺](#插槽空缺)
    - [blocks效果测试](#blocks效果测试)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)
    - [Methods](#methods)

**Feedback**

抽屉

## 示例
### 基本用法

```vue
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

### 抽屉显示位置

```vue
<template>
<div>
    <u-drawer placement="left" :visible.sync="leftVisible" title="标题">
    
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

### 关闭展示首尾插槽

```vue
<template>
<div>
    <u-drawer :visible.sync="leftVisible" title="标题" :showHead=false :showFoot=false>
        <template #title>
            <u-text text="标题"></u-text>
        </template>
        <template #default>
            <u-text>内容</u-text>
        </template>
        <template #foot>
            <u-linear-layout justify="center">
                <u-button color="primary">确定</u-button>
                <u-button>取消</u-button>
            </u-linear-layout>
        </template>
    </u-drawer>
    
   <u-drawer :visible.sync="rightVisible" title="标题" :showHead=true :showFoot=true>
        <template #title>
            <u-text text="标题"></u-text>
        </template>
        <template #default>
            <u-text>内容</u-text>
        </template>
        <template #foot>
            <u-linear-layout justify="center">
                <u-button color="primary">确定</u-button>
                <u-button>取消</u-button>
            </u-linear-layout>
        </template>
    </u-drawer>
    <u-linear-layout gap="small">
        <u-button @click="leftVisible = true">hidden</u-button>
        <u-button @click="rightVisible = true">show</u-button>
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

### 抽屉尺寸

```vue
<template>
<div>
    <u-drawer :visible.sync="leftVisible" size="small" title="标题">
    </u-drawer>
    <u-drawer :visible.sync="middleVisible" size="normal" title="标题">
   </u-drawer>
   <u-drawer :visible.sync="rightVisible" size="large" title="标题">
   </u-drawer>
   
   <u-linear-layout gap="small">
        <u-button @click="leftVisible = true">small</u-button>
        <u-button @click="middleVisible = true">normal</u-button>
        <u-button @click="rightVisible = true">large</u-button>
    </u-linear-layout>

</div>
</template>

<script>
export default {
    data() {
        return {
            leftVisible: false,
            middleVisible: false,
            rightVisible: false,
        };
    },
};
</script>
```


### 插槽空缺

```vue
<template>
<div>
    <u-drawer :visible.sync="leftVisible" title="标题" :showHead=false :showFoot=false>
    </u-drawer>
    
    <u-linear-layout gap="small">
        <u-button @click="leftVisible = true">empty</u-button>
    </u-linear-layout>
</div>
</template>

<script>
export default {
    data() {
        return {
            leftVisible: false,
        };
    },
};
</script>
```

### blocks效果测试

```vue
<template>
    <div>
        <u-drawer :visible.sync="leftVisible">
            <template #title>
                <u-text text="标题"></u-text>
            </template>
            <template #body>
                <u-text>内容</u-text>
            </template>
            <template #foot>
                <u-linear-layout justify="start">
                    <u-button color="primary">确定</u-button>
                    <u-button>取消</u-button>
                </u-linear-layout>
            </template>
        </u-drawer>
        <u-linear-layout gap="small">
            <u-button @click="leftVisible = true">empty</u-button>
        </u-linear-layout>
    </div>
</template>
<script>
export default {
    data() {
        return {
            leftVisible: false,
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
| placement.sync | string | `[object Object]`<br/>`[object Object]` | `'right'` | 抽屉弹出的位置 |
| size | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 抽屉的尺寸 |
| maskClosable | boolean |  | `true` | 点击遮罩关闭抽屉 |
| show-head | boolean |  | `true` | 控制顶部栏的显示 |
| show-foot | boolean |  | `true` | 控制底部栏的显示 |

### Events

#### @open

打开抽屉时触发

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

Methods

#### open()

打开抽屉

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### close()

关闭抽屉

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### ok()

点击抽屉中“确定”按钮

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### cancel()

点击抽屉中“取消”按钮

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

