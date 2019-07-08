# 表格表单

在表单中使用的表格，本组件主要实现基本样式，方便在特殊场景下扩展。如果需要快速使用动态数据、表单验证等功能，请使用 [UFormTableView](../u-form-table-view)。

## 示例
### 基本形式

``` vue
<template>
<u-form-table>
    <thead>
        <tr>
            <th width="170">区域</th>
            <th width="170">VPC</th>
            <th width="200">关联描述</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(item, index) in list" :key="index">
            <td><u-input size="huge full" placeholder="请输入区域" v-model="item.region"></u-input></td>
            <td><u-select size="huge full" disabled placeholder="暂无可选择的 VPC" v-model="item.vpc"></u-select></td>
            <td><u-input size="huge full" v-model="item.description" maxlength-message="100字符以内" maxlength="100" placeholder="100字符以内"></u-input></td>
        </tr>
    </tbody>
</u-form-table>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                region: '',
                vpc: '',
                description: '',
            }, {
                region: '',
                vpc: '',
                description: '',
            }],
        };
    },
};
</script>
```

### 动态按钮

``` vue
<template>
<u-linear-layout direction="vertical" gap="small">
    <u-form-table>
        <thead>
            <tr>
                <th width="170">区域</th>
                <th width="170">VPC</th>
                <th width="200">关联描述</th>
                <th width="40"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in list" :key="index">
                <td><u-input size="huge full" placeholder="请输入区域" v-model="item.region"></u-input></td>
                <td><u-select size="huge full" disabled placeholder="暂无可选择的 VPC" v-model="item.vpc"></u-select></td>
                <td><u-input size="huge full" v-model="item.description" maxlength-message="100字符以内" maxlength="100" placeholder="100字符以内"></u-input></td>
                <td>
                    <u-form-table-remove-button></u-form-table-remove-button>
                </td>
            </tr>
        </tbody>
    </u-form-table>
    <u-form-table-add-button>添加项</u-form-table-add-button>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                region: '',
                vpc: '',
                description: '',
            }, {
                region: '',
                vpc: '',
                description: '',
            }],
        };
    },
};
</script>
```

## FormTable API
### Attrs/Props
| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
