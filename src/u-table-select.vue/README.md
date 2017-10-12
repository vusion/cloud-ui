# 表头过滤（TableSelect）

## 示例
### 基本形式

#### 声明式
``` vue
<template>
    <div style="width:100px;position: relative;height:40px;">
        <u-table-select :title="title" :data="options" v-model="value" @select="select($event.value)"></u-table-select>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title: '状态',
                options: [
                    {text: '全部', value: 'all'},
                    {text: '成功', value: 'success'},
                    {text: '失败', value: 'fail'},
                ],
                value: 'success',
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
