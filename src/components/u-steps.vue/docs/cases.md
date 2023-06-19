### 动态数据渲染

```vue
<template>
    <div>
        <u-steps
            :value.sync="value"
            :dataSource="load"
            titleField="title"
            ref="steps1">
            <template #title="current">{{ current.item && current.item.title }}</template>
        </u-steps>
        <u-steps
            :value.sync="value"
            :dataSource="stepsList"
            titleField="title">
            <template #title="current">{{ current.item && current.item.title }}</template>
        </u-steps>
        <u-button size="small" slot="extra" @click="addStep">add step</u-button>
        <u-button size="small" slot="extra" @click="addValue">value+1</u-button>
        <u-button @click="onClickReload">reload</u-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: 1,
            stepsList: [{
                title: '步骤 1',
            }, {
                title: '步骤 2',
            }, {
                title: '步骤 3',
            }]
        };
    },
    methods: {
        addStep() {
            this.stepsList.push({
                title: '步骤',
            });
        },
        addValue() {
            this.value = this.value + 1;
        },
        onClickReload() {
            console.log('reload');
            this.$refs.steps1.reload();
        },
        load() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(this.stepsList.map((item)=>{
                        const newItem = Object.assign({}, item);
                        newItem.title = `${item.title} load`;
                        return newItem;
                    }));
                }, 500);
            });
        },
    },
};
</script>
```