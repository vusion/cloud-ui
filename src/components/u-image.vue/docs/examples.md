### 模拟异步展示图片
```vue
<template>
    <u-image :src="url" style="width: 300px; height: 150px;" fit="contain"></u-image>
</template>

<script>
export default {
    data() {
        return {
            url: '',
        };
    },
    mounted() {
        setTimeout(()=>{
            this.url = "https://static-vusion.163yun.com/assets/cloud-ui/1.jpg"
        }, 2000)
    },
    methods: {
        load() {
            return new Promise((resolve)=>{
                setTimeout(()=>resolve("https://static-vusion.163yun.com/assets/cloud-ui/1.jpg"), 2000)
            })
            // return "https://static-vusion.163yun.com/assets/cloud-ui/1.jpg"
        }
    },
}
</script>
```
### 异步展示图片报错

```vue
<template>
    <u-image :src="url" style="width: 300px; height: 150px;" fit="contain"></u-image>
</template>

<script>
export default {
    data() {
        return {
            url: '',
        };
    },
    mounted() {
        setTimeout(()=>{this.url = ""}, 2000)
    },
    methods: {
        load() {
            return new Promise((resolve)=>{
                setTimeout(()=>resolve("https://static-vusion.163yun.com/assets/cloud-ui/1.jpg"), 2000)
            })
            // return "https://static-vusion.163yun.com/assets/cloud-ui/1.jpg"
        }
    },
}
</script>
```
### 适应

``` html
<u-image src="https://static-vusion.163yun.com/assets/cloud-ui/1.jpg" style="width: 300px; height: 150px;" fit="contain"></u-image>
```

### 适应（图片小于父元素时以原尺寸展示）

``` html
<u-image src="https://static-vusion.163yun.com/assets/cloud-ui/1.jpg" style="width: 300px; height: 150px;" fit="scale-down"></u-image>
```

### 拉伸

``` html
<u-image src="https://static-vusion.163yun.com/assets/cloud-ui/1.jpg" style="width: 300px; height: 150px;" fit="fill"></u-image>
```

### 填充

``` html
<u-image src="https://static-vusion.163yun.com/assets/cloud-ui/1.jpg" style="width: 300px; height: 150px;" fit="cover"></u-image>
```

### 原尺寸

``` html
<u-image src="https://static-vusion.163yun.com/assets/cloud-ui/1.jpg" style="width: 300px; height: 150px;" fit="none"></u-image>
```
### 多个url

``` html
<u-image src="https://static-vusion.163yun.com/assets/cloud-ui/1.jpg,https://static-vusion.163yun.com/assets/cloud-ui/1.jpg,https://static-vusion.163yun.com/assets/cloud-ui/1.jpg" style="width: 300px; height: 150px;" fit="none"></u-image>
```
