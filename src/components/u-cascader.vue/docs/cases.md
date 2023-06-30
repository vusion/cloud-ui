### 数据源改造

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-cascader :data="data"></u-cascader>
    </u-linear-layout>
    <u-linear-layout>
        <u-cascader :data-source="data"></u-cascader>
    </u-linear-layout>
    <u-linear-layout>
        <u-cascader :data-source="load" :value.sync="value"></u-cascader>
    </u-linear-layout>
    <u-linear-layout>
        <u-cascader :data-source="load1" value-field="value" parent-field="parentid" field="text"></u-cascader>
    </u-linear-layout>
    <u-linear-layout>
        <u-cascader :data-source="load2" :value.sync="value" children-field="subitem"></u-cascader>
    </u-linear-layout>
</u-linear-layout>
</template>
<script>
// 模拟后端请求
const mockData = [
    { text: '理学', value: '1', children: [
        { text: '物理学', value: '11', children: [
            { text: '理论物理', value: '111' },
            { text: '凝聚态物理', value: '112' },
            { text: '材料物理', value: '113' },
        ] },
        { text: '数学', value: '12', children: [
            { text: '基础数学', value: '121' },
            { text: '计算数学', value: '122' },
            { text: '应用数学', value: '123' },
        ] },
        { text: '化学', value: '13' },
    ] },
    { text: '工学', value: '2', children: [
        { text: '计算机科学与技术', value: '21', children: [
            { text: '计算机系统结构', value: '211' },
            { text: '计算机软件与理论', value: '212', disabled: true },
            { text: '计算机应用技术', value: '213' },
        ] },
        { text: '软件工程', value: '22', disabled: true },
        { text: '机械工程', value: '23', children: [
            { text: '机械制造及其自动化', value: '231' },
            { text: '机械电子工程', value: '232' },
            { text: '机械设计及理论', value: '233', disabled: true },
            { text: '车辆工程', value: '234', disabled: true },
        ] },
    ] },
];
const mockRequest = (name, timeout = 1000) => {
    return new Promise((res, rej) => setTimeout(() => res(mockData), timeout));
};
const mockRequest1 = (name, timeout = 1000) => {
    const handle = function(dataTemp, newArr, parentid) {
        dataTemp.forEach((item)=>{
            const itemTemp = Object.assign({}, item);
            const children = itemTemp.children || [];
            delete itemTemp.children;
            if(parentid){
                itemTemp['parentid'] = parentid;
            }
            newArr.push(itemTemp);
            handle(children, newArr, itemTemp.value);
        });
    }
    const newArr = [];
    handle(mockData, newArr);
    return new Promise((res, rej) => setTimeout(() => res({list:newArr,total:5}), timeout));
};
const mockRequest2 = (name, timeout = 1000) => {
    let mockDataTemp = JSON.stringify(mockData);
    mockDataTemp = mockDataTemp.replaceAll('children', 'subitem');
    mockDataTemp = JSON.parse(mockDataTemp);
    return new Promise((res, rej) => setTimeout(() => res(mockDataTemp), timeout));
};

// 模拟数据服务
const mockService = {
    loadList() {
        // 在这里模拟了一个从后端一次性获取数据的请求
        return mockRequest();
    },
    loadFlatList() {
        // 在这里模拟了一个从后端一次性获取数据的请求
        return mockRequest1();
    },
    loadListChildren() {
        // 在这里模拟了一个从后端一次性获取数据的请求
        return mockRequest2();
    },
    loadListTotal() {

    }
};
export default {
    data(){
        return {
            data: mockData,
            value: '工学 / 计算机科学与技术 / 计算机系统结构',
        }
    },
    methods: {
        load() {
            return mockService.loadList();
        },
        load1() {
            return mockService.loadFlatList();
        },
        load2() {
            return mockService.loadListChildren();
        }
    }
};
</script>
```

### 数据源开启搜索

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-cascader
            ref="cascader"
            :data-source="load"
            :value.sync="value"
            filterable
            parent-field="entity1.parentid"
            value-field="entity1.id"
            field="entity1.property1"
        ></u-cascader>
        <u-button @click="onClickReload">click reload</u-button>
    </u-linear-layout>
</u-linear-layout>
</template>
<script>
// 模拟后端请求
const mockData = [
    { entity1:{property1:'理学', id: 1} },
    { entity1:{property1:'工学', id: 2} },
    { entity1:{property1:'物理学', id: 11, parentid: 1} },
    { entity1:{property1:'数学', id: 12, parentid: 1} },
    { entity1:{property1:'化学', id: 13, parentid: 1} },
    { entity1:{property1:'计算机科学与技术', id: 21, parentid: 2} },
    { entity1:{property1:'软件工程', id: 22, parentid: 2} },
    { entity1:{property1:'机械工程', id: 23, parentid: 2} },
];
const mockRequest = (name, timeout = 1000) => {
    return new Promise((res, rej) => setTimeout(() => res(mockData), timeout));
};

// 模拟数据服务
const mockService = {
    loadList() {
        // 在这里模拟了一个从后端一次性获取数据的请求
        return mockRequest();
    },
};
export default {
    data(){
        return {
            data: mockData,
            value: '工学 / 计算机科学与技术',
        }
    },
    methods: {
        load() {
            return mockService.loadList();
        },
        onClickReload() {
            console.log('reload');
            this.$refs.cascader.reload();
        }
    }
};
</script>
```