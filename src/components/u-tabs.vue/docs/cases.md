### 随机添加测试
```vue
<template>
    <u-tabs value="1">
        <u-tab v-if="showArr.includes(1)" value="1" title="Tab1">模板内容</u-tab>
        <u-tab v-if="showArr.includes(2)" value="2" title="Tab2">样式内容</u-tab>
        <u-tab v-if="showArr.includes(3)" value="3" title="Tab3">逻辑内容</u-tab>
        <u-tab v-if="showArr.includes(4)" value="4" title="Tab4">模板内容</u-tab>
        <u-tab v-if="showArr.includes(5)" value="5" title="Tab5">样式内容</u-tab>
        <u-tab v-if="showArr.includes(6)" value="6" title="Tab6">逻辑内容</u-tab>
        <u-tab v-if="showArr.includes(7)" value="7" title="Tab7">模板内容</u-tab>
        <u-tab v-if="showArr.includes(8)" value="8" title="Tab8">样式内容</u-tab>
        <u-tab v-if="showArr.includes(9)" value="9" title="Tab9">逻辑内容</u-tab>
        <u-tab v-if="showArr.includes(10)" value="10" title="Tab10">逻辑内容</u-tab>
    </u-tabs>
</template>
<script>
export default {
    data() {
        return {
            showArr: [],
        };
    },
    created() {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.addShow(arr);
    },
    methods: {
        addShow(arr) {
            if (arr.length === 0) {
                return;
            }
            const n = [...arr];
            let i = Math.floor(Math.random() * n.length);
            this.showArr.push(n[i]);
            n.splice(i, 1);

            i = Math.floor(Math.random() * n.length);
            this.showArr.push(n[i]);
            n.splice(i, 1);
            setTimeout(() => this.addShow(n), 0);
        },
    },
};
</script>
```

### 形态

#### text

``` html
<u-tabs appear="text">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
<u-tabs appear="text" size="small">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
<u-tabs appear="text" size="mini">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
```

#### capsule

``` html
<u-tabs appear="capsule">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
<u-tabs appear="capsule" size="small">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
<u-tabs appear="capsule" size="mini">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
```

#### square

``` html
<u-tabs appear="square">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
<u-tabs appear="square" size="small">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
<u-tabs appear="square" size="mini">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
```

#### round

``` html
<u-tabs appear="round">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
<u-tabs appear="round" size="small">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
<u-tabs appear="round" size="mini">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
```

#### line

``` html
<u-tabs appear="line">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
<u-tabs appear="line" size="small">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
<u-tabs appear="line" size="mini">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
```

### 添加

``` vue
<template>
<div>
<u-tabs>
    <u-tab v-for="item in list" :key="item" :title="item"></u-tab>
</u-tabs>
<u-button @click="add">添加</u-button>
</div>
</template>
<script>
export default {
    data() {
        return {
            list: ['AAA', 'BBB', 'CCC'],
        };
    },
    methods: {
        add() {
            this.list.unshift(String(this.list.length));
        },
    },
};
</script>
```

### 动态数据渲染

```vue
<template>
    <div>
        <u-tabs :value.sync="value"
                :dataSource="load"
                titleField="title"
                valueField="value"
                closableField="closable"
                showScrollButtons='auto'
                ref="tabs1">
            <template #title="current">{{ current.item && current.item.title }}title</template>
            <template #content="current">{{ current.item && current.item.title }}content</template>
        </u-tabs>
        <u-tabs :value.sync="value"
                :dataSource="tabList"
                titleField="title"
                valueField="value"
                urlField="contentUrl"
                closableField="closable"
                showScrollButtons='auto'
                router>
            <template #title="current">{{ current.item && current.item.title }}title</template>
            <template #content="current">{{ current.item && current.item.title }}content</template>
        </u-tabs>
        <u-button size="small" slot="extra" @click="addValue">value+1</u-button>
       <u-button @click="onClickReload">click reload</u-button>
    </div>
</template>
<script>
export default {
    data() {
        return { 
            value: 1,
            tabList: [{
                title: '标签页 1',
                value: 1,
                contentUrl: '/components/u-tabs/cases',
                closable: true,
            }, {
                title: '标签页 2',
                value: 2,
                contentUrl: '/components/u-tabs/cases#形态',
                closable: false,
            }, {
                title: '标签页 3',
                value: 3,
                contentUrl: '/components/u-tabs/cases#添加',
                closable: true,
            }] 
        };
    },
    methods: {
        addTab() {
            this.tabList.push({
                title: '标签页',
                value: this.tabList.length + 1,
                contentUrl: '/components/u-tabs',
                closable: true,
            });
        },
        addValue() {
            this.value = this.value + 1;
        },
        onClickReload() {
            console.log('reload');
            this.$refs.tabs1.reload();
        },
        load() {
            // 这里使用 Promise 和 setTimeout 模拟一个异步请求
            const index = Math.random() * 20 >> 0;
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(this.tabList.map((item)=>{
                        const newItem = Object.assign({}, item);
                        newItem.title = `${item.title}${index}`;
                        return newItem;
                    }));
                }, 500);
            });
        },
    },
};
</script>
```

### 路由

#### 使用to

``` html
<u-tabs router>
    <u-tab title="Button" to="/components/u-button"></u-tab>
    <u-tab title="Input" to="/components/u-input"></u-tab>
    <u-tab title="Tabs" to="/components/u-tabs"></u-tab>
</u-tabs>

```

#### 使用tdestination

``` html
<u-tabs router>
    <u-tab title="Button" destination="/components/u-button"></u-tab>
    <u-tab title="Input" destination="/components/u-input"></u-tab>
    <u-tab title="Tabs" destination="/components/u-tabs"></u-tab>
</u-tabs>
```