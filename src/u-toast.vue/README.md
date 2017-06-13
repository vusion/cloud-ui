# 消息提示（Toast）

## 示例
### 基本形式

#### 声明式


``` html
<u-button @click.native="$refs.toast.show()">toast</u-button>
<u-toast ref="toast" message="消息提示" position="static"></u-toast>
```

``` html
<u-button @click.native="$refs.toastInfo.show()">toast</u-button>
<u-toast ref="toastInfo" message="消息提示" state="info"></u-toast>
```

``` html
<u-button @click.native="$refs.toastSucc.show()">toast</u-button>
<u-toast ref="toastSucc" message="消息提示" state="success"></u-toast>
```

``` html
<u-button @click.native="$refs.toastWarn.show()">toast</u-button>
<u-toast ref="toastWarn" message="消息提示" state="warnning"></u-toast>
```

``` html
<u-button @click.native="$refs.toastError.show()">toast</u-button>
<u-toast ref="toastError" message="消息提示" state="error"></u-toast>
```

#### 命令式


``` vue
<template>
<u-button @click.native="open">Toast</u-button>
</template>

<script>
export default {
    methods: {
        open() {
            new VusionUI.Toast().show('提示信息', 3000);
        },
    },
};
</script>
```
