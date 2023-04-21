### 多选组

当项设置:value="true"时双向绑定值设置

``` vue
<template>
<div>
    <u-linear-layout direction="vertical">
        <div>
            <u-checkboxes v-model="checkedList">
                <u-checkbox label="水杯" :value="true">水杯</u-checkbox>
                <u-checkbox label="坚果" :value="true">坚果</u-checkbox>
                <u-checkbox label="毛巾">毛巾</u-checkbox>
                <u-checkbox label="沙发">沙发</u-checkbox>
            </u-checkboxes>
            {{ checkedList }}
        </div>
        <u-checkboxes :value.sync="hobby" converter="join" min="">
            <template #item="current"></template>
            <u-checkbox :value="true" label="书法" :autofocus="false">
                <template #item>
                    <u-text text="书法"></u-text>
                </template>
            </u-checkbox>
            <u-checkbox :value="true" label="阅读">
                <template #item>
                    <u-text text="阅读"></u-text>
                </template>
            </u-checkbox>
            <u-checkbox :value="false" label="绘画">
                <template #item>
                    <u-text text="绘画"></u-text>
                </template>
            </u-checkbox>
            <u-checkbox :value="false" label="音乐" :readonly="false">
                <template #item>
                    <u-text text="音乐"></u-text>
                </template>
            </u-checkbox>
        </u-checkboxes>
        <u-checkboxes :value.sync="hobby1" converter="join" min="">
            <template #item="current"></template>
            <u-checkbox :value="false" label="书法" :autofocus="false">
                <template #item>
                    <u-text text="书法"></u-text>
                </template>
            </u-checkbox>
            <u-checkbox :value="true" label="阅读">
                <template #item>
                    <u-text text="阅读"></u-text>
                </template>
            </u-checkbox>
            <u-checkbox :value="false" label="绘画">
                <template #item>
                    <u-text text="绘画"></u-text>
                </template>
            </u-checkbox>
            <u-checkbox :value="false" label="音乐" :readonly="false">
                <template #item>
                    <u-text text="音乐"></u-text>
                </template>
            </u-checkbox>
        </u-checkboxes>
    </u-linear-layout>
</div>
</template>
<script>
export default {
    data() {
        return {
            checkedList: [],
            hobby:'',
            hobby1:[],
        };
    },
};
</script>
```