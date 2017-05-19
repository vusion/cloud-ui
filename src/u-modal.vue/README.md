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
