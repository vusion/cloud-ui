# 选择扩展（Tag）

## 示例
### 基本形式

#### 声明式
``` html
<u-tag type="primary">标签一</u-tag>
```

### 方法
``` vue
<template>
<u-tag :closeable="closeable" :color="color">{{text}}</u-tag>
</template>

<script>
export default {
    data() {
        return {
            closeable: true,
            text: '标签一',
            color: '#ff4949',
        };
    },
    methods: {
    },
};
</script>
```
