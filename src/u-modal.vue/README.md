# 弹窗（Modal）

## 示例
### 基本形式

#### 声明式


``` html
<u-button @click.native="$refs.modal.open()">Modal</u-button>
<u-modal ref="modal"></u-modal>
```

#### 命令式


``` vue
<template>
<u-button @click.native="open">Modal</u-button>
</template>

<script>
export default {
    methods: {
        open() {
            new VusionUI.Modal().open();
        },
    },
};
</script>
```

### Static


``` html
<u-modal visible static>wawegeg</u-modal>
```

### Alert

``` vue
<template>
<u-button @click.native="open">Alert</u-button>
</template>

<script>
export default {
    methods: {
        open() {
            VusionUI.Modal.alert('Alert内容');
        },
    },
};
</script>
```

### Confirm

``` vue
<template>
<u-button @click.native="open">Confirm</u-button>
</template>

<script>
export default {
    methods: {
        open() {
            VusionUI.Modal.alert('Confirm内容');
        },
    },
};
</script>
```

### visible属性控制弹窗显示
``` vue
<template>
<div>
    <u-modal :visible.sync="visible"></u-modal>
    <u-button @click="open">Confirm</u-button>
</div>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
        };
    },
    methods: {
        open() {
            this.visible = true;
        },
    },
    watch: {
        visible(newValue) {
            console.log(newValue);
        },
    },
};
</script>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | `'提示'` | 弹窗的标题 |
| okButton | String | `'确定'` | 确定按钮文本值 |
| cancelButton | String | `'取消'` | 取消按钮文本值 |
| content | String | `'提示内容'` | 具体提示内容 |
| visible | Boolean | false | 控制弹窗显示，默认值是false |
| width | String, Number | `'400'` | 弹窗宽度 |

### Slots

| Slot | Description |
| ---- | ----------- |
| title | 弹窗标题自定义显示 |
| (default) | 弹窗内容自定义显示 |
| foot | 弹窗尾部自定义显示 |
