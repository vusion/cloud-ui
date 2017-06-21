# 选择扩展（MultiSelect）

## 示例
### 基本形式

### 方法
``` vue
<template>
<u-multi-select :options="options" v-model="value"></u-multi-select>
</template>

<script>
export default {
    data() {
        return {
            value: [],
            options: [{
                value: '选项1',
                name: '黄金糕'
            }, {
                value: '选项2',
                name: '双皮奶'
            }, {
                value: '选项3',
                name: '蚵仔煎'
            }, {
                value: '选项4',
                name: '龙须面'
            }, {
                value: '选项5',
                name: '北京烤鸭',
            }],
        };
    },
    methods: {

    },
    watch: {
        value(newValue) {
            console.log(newValue);
        }
    }
};
</script>
```
