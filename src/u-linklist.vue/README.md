# 链接列表 LinkList

## 示例

### 基本形式
``` vue
<template>
<u-linklist :maxNum="maxNum" :dropdownTitle="dropdownTitle">
    <u-linklist-item @click="text1+='1'">{{text1}}</u-linklist-item>
    <u-linklist-item to="/components/u-navbar">跳转到navbar</u-linklist-item>
    <u-linklist-item @mouseover="text2+='1'">{{text2}}</u-linklist-item>
    <u-linklist-item disabled>保存为镜像</u-linklist-item>
    <u-linklist-item>设置密码</u-linklist-item>
</u-linklist>
</template>
<script>
export default {
    data() {
        return {
            text1: '设置',
            text2: '停止',
            maxNum: 4,
            dropdownTitle: '更多',
        }
    },
}
</script>
```

### 禁用

``` vue
<template>
<u-linklist>
    <u-linklist-item @click="text1+='1'" disabled>{{text1}}</u-linklist-item>
    <u-linklist-item to="/components/u-navbar" disabled>跳转到navbar</u-linklist-item>
    <u-linklist-item @mouseover="text2+='1'" disabled>{{text2}}</u-linklist-item>
</u-linklist>
</template>
<script>
export default {
    data() {
        return {
            text1: '设置',
            text2: '删除',
        }
    },
}
</script>
```

### 不主动关闭下拉框
``` vue
<template>
<u-linklist :closeDropdown="false">
    <u-linklist-item>设置</u-linklist-item>
    <u-linklist-item>删除</u-linklist-item>
    <u-linklist-item>设置密码</u-linklist-item>
    <u-linklist-item>保存为镜像</u-linklist-item>
</u-linklist>
</template>
```
### 下拉框对齐方式
``` vue
<template>
<div>
<u-linear-layout style="float: right;">
    <u-button v-for="direction in directionArr" @click="currentDirection = direction" 
    :style="{ color: currentDirection === direction ? '#e45649' :'#50a14f' }">{{direction}}</u-button>
</u-linear-layout>
<u-linklist :showDropdown="true" :direction="currentDirection"  :closeDropdown="false">
    <u-linklist-item>设置</u-linklist-item>
    <u-linklist-item>删除</u-linklist-item>
    <u-linklist-item>设置密码</u-linklist-item>
    <u-linklist-item>保存为镜像</u-linklist-item>
</u-linklist>
</div>
</template>
<script>
export default {
    data() {
        return {
            currentDirection: 'bottom-left',
            directionArr: ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
        }
    }
}
</script>
```
## LinkList API

### Attrs/Props

| Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| maxNum | Number | 3 | 一列最多显示元素个数 |
| dropdownTitle | String | '更多' | 下拉框名 |
| closeDropdown | Boolean | `true` | 点击document或者其他`u-linklist-item`是否关闭下拉框 |
| direction | String | 'bottom-left' | 下拉框对齐方式：'bottom-left', 'bottom-right', 'top-left', 'top-right' |
| showDropdown | Boolean | `false` | 是否展开下拉框 |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | `u-linklist-item` |

## LinkListItem API

扩展自RouterItem
### Attrs/Props

| Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| disabled | Boolean | `false` | 是否禁用。禁用状态下，绑定的事件都不可用。 |

### Events

#### @click

点击时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Object | 原生事件对象 |

#### @mouseover

mouseover时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Object | 原生事件对象 |


