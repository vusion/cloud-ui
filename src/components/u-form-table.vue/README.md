<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFormTable 表单表格

**UI 组件**, **块级展示**

在表单中使用的表格，本组件主要实现基本样式，方便在特殊场景下扩展。如果需要快速使用动态数据、表单验证等功能，请使用 [UFormTableView](../u-form-table-view)。

## 示例
### 基本用法

``` html
<u-form-table>
    <thead>
        <tr>
            <th width="20%">URL</th>
            <th width="20%">服务</th>
            <th width="20%">端口</th>
            <th>描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <u-input></u-input>
            </td>
            <td>
                <u-select>
                    <u-select-item>ABC</u-select-item>
                    <u-select-item>DDD</u-select-item>
                </u-select>
            </td>
            <td>
                <u-input></u-input>
            </td>
            <td>
                <u-input size="full normal"></u-input>
            </td>
        </tr>
    </tbody>
</u-form-table>
```

### 在 UForm 中使用

``` html
<u-form>
    <u-form-item label="规则" layout="block">
        <u-form-table>
            <thead>
                <tr>
                    <th width="20%">URL</th>
                    <th width="20%">服务</th>
                    <th width="20%">端口</th>
                    <th>描述</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <u-input></u-input>
                    </td>
                    <td>
                        <u-select>
                            <u-select-item>ABC</u-select-item>
                            <u-select-item>DDD</u-select-item>
                        </u-select>
                    </td>
                    <td>
                        <u-input></u-input>
                    </td>
                    <td>
                        <u-input size="full normal"></u-input>
                    </td>
                </tr>
            </tbody>
        </u-form-table>
    </u-form-item>
</u-form>
```

### 动态添加表单

``` vue
<template>
<u-linear-layout>
    <u-form-table>
        <thead>
            <tr>
                <th width="20%">URL</th>
                <th width="20%">服务</th>
                <th width="20%">端口</th>
                <th>描述</th>
                <th width="40"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in list" :key="index">
                <td><u-input v-model="item.url"></u-input></td>
                <td><u-select v-model="item.service"></u-select></td>
                <td><u-input v-model="item.port"></u-input></td>
                <td><u-input size="full normal" v-model="item.description"></u-input></td>
                <td><u-form-table-remove-button></u-form-table-remove-button></td>
            </tr>
        </tbody>
    </u-form-table>
    <u-form-table-add-button>添加选项</u-form-table-add-button>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }, {
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }],
        };
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
