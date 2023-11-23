
```html { width: 70% }
<u-tree-select-new :data-source="
[ { 'data': { 'id': 1, 'deptname': '一级部门a', 'parentid': 99, 'name': '小明' } }, { 'data': { 'id': 2, 'deptname': '一级部门b', 'parentid': 11, 'name': '刷新' } }, { 'data': { 'id': 3, 'deptname': '二级部门a', 'parentid': 1, 'name': '左箭头' } }, { 'data': { 'id': 4, 'deptname': '三级部门a', 'parentid': 3, 'name': '小明3' } } ]
"   
                   value-field="data.id" 
                   text-field="data.deptname"
                   parent-field="data.parentid"
                   childrenField="children"  
></u-tree-select-new>
```

### 异步加载

```vue
<template>
<u-linear-layout>
    <u-tree-select-new :data-source="load" 
                    value-field="data.id"
                    text-field="data.deptname"
                    parent-field="data.parentid"
                    childrenField="children" ref="treeselect"
                    :value.sync="selectValue"
                    @load="onLoad"
                    @before-load="onBeforeLoad">
    </u-tree-select-new>
    <u-button @click="reload">重新加载</u-button>
</u-linear-layout>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((resolve, rej) => setTimeout(() => resolve(data), timeout));

export default {
    data() {
        return {
            selectValue: 1,
            data: [{ 'data': { 'id': 1, 'deptname': '一级部门a', 'parentid': 99, 'name': '小明' } }, { 'data': { 'id': 2, 'deptname': '一级部门b', 'parentid': 11, 'name': '刷新' } }, { 'data': { 'id': 3, 'deptname': '二级部门a', 'parentid': 1, 'name': '左箭头' } }, { 'data': { 'id': 4, 'deptname': '三级部门a', 'parentid': 3, 'name': '小明3' } } ]
        }
    },
    methods: {
        load(params) {
            console.log('load');
            return mockRequest({
                list:  this.data,
            });
        },
        reload() {
            console.log('reload');
            this.data.push({ 'data': { 'id': 5, 'deptname': '三级部门a1', 'parentid': 3, 'name': '小明5' } });
            this.$refs.treeselect.reload();
        },
        onLoad() {
            console.log('onLoad');
        },
        onBeforeLoad() {
            console.log('onBeforeLoad');
        }
    },
}
</script>
```

### 表单验证

```vue
<template>
<u-form ref="form">
    <u-form-item label="树选择器" required rules="required">
        <u-tree-select-new :data-source="load" 
                    value-field="data.id"
                    text-field="data.deptname"
                    parent-field="data.parentid"
                    childrenField="children"
                    style="width:300px;height:40px">
        </u-tree-select-new>
    </u-form-item>
    <u-form-item label="树选择器" required rules="required">
        <u-tree-select-new :data-source="load" 
                    value-field="data.id"
                    text-field="data.deptname"
                    parent-field="data.parentid"
                    childrenField="children"
                    :value.sync="selectValue">
        </u-tree-select-new>
    </u-form-item>
    <u-form-item label="树选择器" required rules="required">
        <u-tree-select-new :data-source="load" 
                    value-field="data.id"
                    text-field="data.deptname"
                    parent-field="data.parentid"
                    childrenField="children"
                    :value.sync="selectValue1">
        </u-tree-select-new>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" @click="onValidate">立即创建</u-button>
    </u-form-item>
</u-form>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((resolve, rej) => setTimeout(() => resolve(data), timeout));

export default {
    data() {
        return {
            selectValue: '',
            selectValue1: 2,
        }
    },
    created() {
        setTimeout(()=>{
            this.selectValue = 1;
        }, 1000);
    },
    methods: {
        load(params) {
                return mockRequest({
                    list:  [{ 'data': { 'id': 1, 'deptname': '一级部门a', 'parentid': 99, 'name': '小明' } }, { 'data': { 'id': 2, 'deptname': '一级部门b', 'parentid': 11, 'name': '刷新' } }, { 'data': { 'id': 3, 'deptname': '二级部门a', 'parentid': 1, 'name': '左箭头' } }, { 'data': { 'id': 4, 'deptname': '三级部门a', 'parentid': 3, 'name': '小明3' } } ]
                });
        },
        onValidate() {
            this.$refs.form.validate();
        }
    },
}
</script>
```

### 修改尺寸

通过`width`属性设置`mini`、`small`、`normal`、`medium`、`large`、`huge`、`full`几种尺寸，宽高可以自由组合。
通过`height`属性设置`mini`、`small`、`normal`、`medium`、`large`、`huge`、`full`几种尺寸，宽高可以自由组合。

如果以上几种预设不能满足，也可以直接添加`style="width: 240px;height:30px"`来设置。

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-tree-select-new value="节点 1" valueField="text1" textField="text1" :data-source="[
            { text1: '节点 1', children: [
                { text1: '节点 1.1' },
                { text1: '节点 1.2', children: [
                    { text1: '节点 1.2.1' },
                    { text1: '节点 1.2.2' },
                ] },
                { text1: '节点 1.3' },
                { text1: '节点 1.4' },
            ] },
            { text1: '节点 2' },
            { text1: '节点 3', children: [
                { text1: '节点 3.1' }
                ,
                { text1: '节点 3.2' },
            ] },
        ]" :width="width" :height="height"></u-tree-select-new>
    </u-linear-layout>
    <u-linear-layout>
        <u-text>选择尺寸</u-text>
        <u-select placeholder="选择宽度" v-model="width">
            <u-select-item value="full">占满</u-select-item>
            <u-select-item value="huge">巨大</u-select-item>
            <u-select-item value="large">大</u-select-item>
            <u-select-item value="medium">中型</u-select-item>
            <u-select-item value="normal">正常</u-select-item>
            <u-select-item value="small">小</u-select-item>
            <u-select-item value="mini">迷你</u-select-item>
        </u-select>
        <u-select placeholder="选择高度" v-model="height">
            <u-select-item value="full">占满</u-select-item>
            <u-select-item value="huge">巨大</u-select-item>
            <u-select-item value="large">大</u-select-item>
            <u-select-item value="medium">中型</u-select-item>
            <u-select-item value="normal">正常</u-select-item>
            <u-select-item value="small">小</u-select-item>
            <u-select-item value="mini">迷你</u-select-item>
        </u-select>
    </u-linear-layout>
</u-linear-layout>
</template>
<script>
// 模拟后端请求

export default {
    data() {
        return {
            width: 'normal',
            height: 'normal',
        }
    },
}
</script>
```