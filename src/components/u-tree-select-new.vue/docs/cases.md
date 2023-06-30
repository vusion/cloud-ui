
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
                    childrenField="children">
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