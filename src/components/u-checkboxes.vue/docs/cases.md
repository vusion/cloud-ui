### 多选组

当项设置:value="true"时双向绑定值设置

``` vue
<template>
<div>
    <u-linear-layout direction="vertical">
        <div>
            <u-checkboxes v-model="checkedList" @input="onInput($event, 1)">
                <u-checkbox label="水杯" :value="true">水杯</u-checkbox>
                <u-checkbox label="坚果" :value="true">坚果</u-checkbox>
                <u-checkbox label="毛巾">毛巾</u-checkbox>
                <u-checkbox label="沙发">沙发</u-checkbox>
            </u-checkboxes>
            {{ checkedList }}
        </div>
        <u-checkboxes :value.sync="hobby" converter="join"  @input="onInput($event, 2)">
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
        <u-checkboxes :value.sync="hobby1" converter="join" @input="onInput($event, 3)">
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
        <u-checkboxes v-model="checkedList1" @input="onInput($event, 4)">
            <u-checkbox label="水杯">水杯</u-checkbox>
            <u-checkbox label="坚果">坚果</u-checkbox>
            <u-checkbox label="毛巾">毛巾</u-checkbox>
            <u-checkbox label="沙发">沙发</u-checkbox>
        </u-checkboxes>
        {{ checkedList1 }}
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
            checkedList1:[],
        };
    },
    methods: {
        onInput(e, key) {
            console.log(key, e);
        }
    }
};
</script>
```
