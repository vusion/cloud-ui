# 选择扩展（Select）

## 示例
### 基本形式

#### 声明式
``` html
<u-select :options="[{value: '选项1', name: '黄金糕'}, {value: '选项2', name: '双皮奶'}, {value: '选项3', name: '蚵仔煎'}, {value: '选项4', name: '龙须面'}, {value: '选项5', name: '北京烤鸭'}]">Modal</u-select>
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
<u-select :options="options" @change="change($event.selected)" @select="select($event.selected)"></u-select>
</template>

<script>
export default {
    data() {
        return {
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
                name: '北京烤鸭'
            }],
        };
    },
    methods: {
        change(selected) {
            console.log(selected);
        },
        select(selected) {
            console.log(selected.name,selected.value);
        }
    },
};
</script>
```
