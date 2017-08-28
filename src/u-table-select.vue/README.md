# 表头过滤（TableSelect）

## 示例
### 基本形式

#### 声明式
``` vue
<template>
    <div style="width:100px;position: relative;">
        <u-table-select :title="title" :options="options" :value="value" @select="select($event.value)"></u-table-select>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title: '状态',
                options: [
                    {name: '全部', value: 'all'},
                    {name: '成功', value: 'success'},
                    {name: '失败', value: 'fail'},
                ],
                value: 'all',
            }
        },
        methods: {
            select(value) {
                console.log(value);
                this.value = value;
            },
        },
    };
</script>
```
