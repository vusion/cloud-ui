### 基本样式

``` html
<u-card><template #title><u-text text="卡片"></u-text></template>卡片内容</u-card>
```

### 带分割线样式

``` html
<u-card split><template #title><u-text text="卡片"></u-text></template>卡片内容</u-card>
```

### 带图片样式

``` html
<u-card style="width: 280px" cover-slot><template #title><u-text text="卡片"></u-text></template><template #cover>
        <u-image src="https://static-vusion.163yun.com/assets/cloud-ui/1.jpg" fit="contain"></u-image>
</template>卡片内容</u-card>
```
