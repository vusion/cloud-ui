### 基本样式

``` html
<u-card title="卡片总览">卡片内容</u-card>
```

### 带分割线样式

``` html
<u-card title="卡片" split>卡片内容</u-card>
```

### 带图片样式

``` html
<u-card title="卡片" style="width: 280px" show-cover-empty-slot><template #cover>
        <u-image src="https://static-vusion.163yun.com/assets/cloud-ui/1.jpg" fit="contain"></u-image>
</template>卡片内容</u-card>
```
