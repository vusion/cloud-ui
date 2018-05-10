<template>
    <div>
        <h1>选择列表</h1>
        <div :class="$style.part">
            <h3>列表选择</h3>
            <u-list-view>
                <u-list-view-item>水杯</u-list-view-item>
                <u-list-view-item>坚果</u-list-view-item>
                <u-list-view-item>毛巾</u-list-view-item>
                <u-list-view-item>沙发</u-list-view-item>
            </u-list-view>
        </div>
        <div :class="$style.part">
            <h3>树形结构列表选择</h3>
            <u-tree-view :data="[
                { text: '文件夹1', type: 'directory', children: [
                    { text: '文件夹1.1', type: 'directory' },
                    { text: '文件夹1.2', type: 'directory', children: [
                        { text: '文件1.2.1', type: 'file' },
                        { text: '文件1.2.2', type: 'file' },
                    ] },
                    { text: '文件1.3', type: 'file' },
                    { text: '文件1.4', type: 'file' },
                ] },
                { text: '文件夹2', type: 'directory' },
                { text: '文件夹3', type: 'directory', children: [
                    { text: '文件3.1', type: 'file' },
                    { text: '文件3.2', type: 'file' },
                ] },
            ]">
                <span slot="text" slot-scope="{ node, expanded, text }">
                    {{ node.type === 'directory' ? (expanded ? '📂' : '📁') : '📄' }}
                    {{ text }}
                </span>
            </u-tree-view>
        </div>
        <div :class="$style.part">
            <h3>胶囊选择列表</h3>
            <u-capsules>
                <u-capsule size="small">6</u-capsule>
                <u-capsule size="small" label="88折">7</u-capsule>
                <u-capsule size="small" label="88折">8</u-capsule>
                <u-capsule size="small" label="88折">9</u-capsule>
                <u-capsule size="small" label="88折">1年</u-capsule>
                <u-capsule size="small" label="80折">2年</u-capsule>
            </u-capsules>
        </div>
        <div :class="$style.part">
            <h3>单项选择列表</h3>
            <u-linear-layout>
                <u-select>
                    <u-select-item>苹果</u-select-item>
                    <u-select-item>香蕉</u-select-item>
                    <u-select-item>蛋糕</u-select-item>
                </u-select>
                <u-select>
                    <u-select-item>请选择</u-select-item>
                    <u-select-item>苹果</u-select-item>
                    <u-select-item>香蕉</u-select-item>
                    <u-select-item>蛋糕</u-select-item>
                </u-select>
            </u-linear-layout>
        </div>
        <div :class="$style.part">
            <h3>多项选择可筛选列表</h3>
            <u-multi-select :filter-method="filterMethod" :data="options" v-model="value1" filter size="large"></u-multi-select>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: undefined,
            value1: [],
            options: [
                { text: 'Alabama', value: 'Alabama' },
                { text: 'Alaska', value: 'Alaska' },
                { text: 'Arizona', value: 'Arizona' },
                { text: 'Arkansas', value: 'Arkansas' },
                { text: 'California', value: 'California' },
                { text: 'Colorado', value: 'Colorado' },
                { text: 'Connecticut', value: 'Connecticut' },
                { text: 'Delaware', value: 'Delaware' },
                { text: 'Florida', value: 'Florida' },
                { text: 'Georgia', value: 'Georgia' },
                { text: 'Hawaii', value: 'Hawaii' },
                { text: 'Idaho', value: 'Idaho' },
                { text: 'Illinois', value: 'Illinois' },
            ],
        };
    },
    methods: {
        filterMethod(data, query) {
            const tdata = data.filter((item) => {
                if (item.value.toLowerCase().indexOf(query.toLowerCase()) > -1)
                    return item;
                else
                    return false;
            });
            return tdata;
        },
    },
};
</script>

<style module>
.part {
    width: 60%;
    margin-bottom: 50px;
}
</style>
