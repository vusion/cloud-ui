### 普通用法

``` html
<u-timeline :dataSource="[{}, {}, {}]">
    <template #item="current">
        <u-timeline-item insource>
            <template #label>
            </template>
        </u-timeline-item>
    </template>
</u-timeline>
```