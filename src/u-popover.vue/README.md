# 气泡提示（Popover）

## 示例
### 基本形式

#### 声明式
``` vue
<template>
    <u-popover trigger="click" content="内容" placement="bottom" :style-object="styleObject">
        <u-button>click 激活</u-button>
    </u-popover>
</template>
<script>
export default {
    data() {
        return {
            styleObject: {
                padding: 0,
            }
        }
    }
};
</script>
```
``` html
<u-popover trigger="hover" content="内容" placement="top-start">
    <u-button>hover 激活</u-button>
</u-popover>
```
