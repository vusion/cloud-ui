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

### 抽屉显示位置

``` vue
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

``` vue
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

``` vue
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

``` vue
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
