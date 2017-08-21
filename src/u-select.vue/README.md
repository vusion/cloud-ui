# 选择扩展（Select）

## 示例
### 基本形式

#### 声明式
``` html
<u-select :options="[]">Modal</u-select>
```

#### 只读
``` html
<u-select readonly :options="[{value: '选项1', name: '黄金糕'}, {value: '选项2', name: '双皮奶'}, {value: '选项3', name: '蚵仔煎'}, {value: '选项4', name: '龙须面'}, {value: '选项5', name: '北京烤鸭'}]">Modal</u-select>
```

#### 禁止
``` html
<u-select disabled :options="[{value: '选项1', name: '黄金糕'}, {value: '选项2', name: '双皮奶'}, {value: '选项3', name: '蚵仔煎'}, {value: '选项4', name: '龙须面'}, {value: '选项5', name: '北京烤鸭'}]">Modal</u-select>
```

### 方法
``` vue
<template>
<u-select :options="options" :value="value" @change="change($event.value)" @select="select($event.selected)"></u-select>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            options: [{
                value: '选项1',
                name: '黄金糕111111111111111111111111111111111'
            }, {
                value: '选项2',
                name: '双皮奶222222222222222222222222222222222222222222222222'
            }, {
                value: '选项3',
                name: '蚵仔煎'
            }, {
                value: '选项4',
                name: '龙须面'
            }, {
                value: '选项5',
                name: '北京烤鸭',
                disabled: true
            }, {
                name: '选项6',
                value: '牛杂',
            }],
        };
    },
    methods: {
        change(value) {
            console.log(value);
            this.value = value;
        },
        select(selected) {
            console.log(selected.name,selected.value);
        }
    },
};
</script>
```
