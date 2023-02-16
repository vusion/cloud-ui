### 普通用法

``` html
<u-timeline :data-source="[{}, {}, {}]">
    <template #item="current">
        <u-timeline-item insource>
            <template #label>
            </template>
        </u-timeline-item>
    </template>
</u-timeline>
```