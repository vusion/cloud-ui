# 数字输入 NumberInput

## 示例
### 基本形式

#### 声明式

### 基本
``` html
<u-number-input></u-number-input>
```

### format属性
``` html
<u-number-input format="00" value="5"></u-number-input>
```

### autofocus
``` html
<u-number-input value="12" autofocus="autofocus"></u-number-input>
```

### 只读
``` html
<u-number-input value="12" readonly="readonly"></u-number-input>
```

### 最大值 最小值
``` html
<u-number-input value="12" min="5" max="20"></u-number-input>
```

### 指定宽高
``` html
<u-number-input value="12" width="150" height="40"></u-number-input>
```

### 禁用
``` html
<u-number-input value="12" disabled="disabled"></u-number-input>
```

### 获取改变后的值change方法
``` vue
<template>
<u-number-input @change="change" :value="value" :readonly="readonly"></u-number-input>
</template>

<script>
export default {
	data() {
        return {
            value: 12,
            readonly: false,
        };
    },
    methods: {
        change(value) {
           console.log(value.value);
        },
    },
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | String | 0 | 文本框的值 |
| min | Number | | 最小值 |
| max | Number |  | 最大值 |
| autofocus | Boolean | `false` | 是否自动获得焦点 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| width | String | `140` | 输入框宽度 |
| disabled | String | `34` | 输入框高度 |

### Events

#### @change

数值改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Number | 改变后的数值 |