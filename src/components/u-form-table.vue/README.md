<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFormTable 表单表格

- [示例](#示例)
    - [基本用法](#基本用法)
    - [动态按钮](#动态按钮)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)

**块级展示**

在表单中使用的表格，本组件主要实现基本样式，方便在特殊场景下扩展。如果需要快速使用动态数据、表单验证等功能，请使用 [UFormTableView](#components/u-form-table-view)。

## 示例
### 基本用法

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
                    <u-form-table-remove-button @click="removeItem(item)"></u-form-table-remove-button>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    <u-form-table-add-button @click="addItem">添加项</u-form-table-add-button>
                </td>
            </tr>
        </tbody>
    </u-form-table>
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
    methods: {
        addItem() {
            this.list.push({
                region: '',
                vpc: '',
                description: '',
            });
        },
        removeItem(item) {
            const list = this.list;
            if (list.includes(item)) {
                list.splice(list.indexOf(item), 1);
            }
        },
    },
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| line | boolean |  | `false` | 单元格之间是否显示分隔线条 |
| striped | boolean |  | `false` | 表格行是否按斑马线条纹显示 |
| hover | boolean |  | `false` | 表格行在悬浮时是否高亮显示 |

### Slots

#### (default)

在表格中插入`<thead>`、`<tbody>`、`<tr>`、`<th>`、`<td>`标签。

