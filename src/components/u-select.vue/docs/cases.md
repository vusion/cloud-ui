
## 单选模式

### 基本用法

默认为单选模式。可以通过`placeholder`属性设置占位符。

``` html
<u-linear-layout>
    <u-select>
        <u-select-item>水杯</u-select-item>
        <u-select-item>咖啡</u-select-item>
        <u-select-item>坚果</u-select-item>
    </u-select>
    <u-select placeholder="请选择">
        <u-select-item>水杯</u-select-item>
        <u-select-item>咖啡</u-select-item>
        <u-select-item>坚果</u-select-item>
    </u-select>
    <u-select>
        <u-select-item>请选择</u-select-item>
        <u-select-item>兼容 0.3.x</u-select-item>
        <u-select-item>咖啡</u-select-item>
        <u-select-item>坚果</u-select-item>
    </u-select>
</u-linear-layout>
```

### appendTo:body


``` html
<u-linear-layout>
    <u-select append-to="body">
        <u-select-item>水杯</u-select-item>
        <u-select-item>咖啡</u-select-item>
        <u-select-item>坚果</u-select-item>
    </u-select>
    <u-select placeholder="请选择" append-to="body" popper-width="300px">
        <u-select-item>水杯</u-select-item>
        <u-select-item>咖啡</u-select-item>
        <u-select-item>坚果</u-select-item>
    </u-select>
</u-linear-layout>
```

### 双向绑定

使用`v-model`或`:value.sync`进行双向绑定。

``` vue
<template>
<u-linear-layout>
    <u-select v-model="value">
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
        <u-select-item value="towel">毛巾</u-select-item>
        <u-select-item value="sofa">沙发</u-select-item>
    </u-select>
    <u-select :value.sync="value">
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
        <u-select-item value="towel">毛巾</u-select-item>
        <u-select-item value="sofa">沙发</u-select-item>
    </u-select>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: 'towel',
        };
    },
};
</script>
```

### 双向绑定

使用`v-model`或`:value.sync`进行双向绑定。

``` vue
<template>
<u-linear-layout>
    <u-select v-model="value" placeholder="v-model">
        <u-select-item v-for="item in list" :key="item.value" :value="item.value">{{ item.text }}</u-select-item>
    </u-select>
    <u-select :value.sync="value" :data="list" placeholder=":value.sync"></u-select>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            list: [
                { text: 'Java', value: 'java' },
                { text: 'Python', value: 'python' },
                { text: 'Node.js', value: 'nodejs' },
                { text: 'Go', value: 'go' },
                { text: '.NET', value: '.net' },
                { text: 'PHP', value: 'php' },
            ],
        };
    },
};
</script>
```

### 只读、禁用、禁用某一项

``` html
<u-linear-layout>
    <u-select value="nut" readonly>
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
    </u-select>
    <u-select value="nut" disabled>
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
    </u-select>
    <u-select value="nut">
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee" disabled>咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
    </u-select>
</u-linear-layout>
```

### 分隔符

``` html
<u-select value="nut">
    <u-select-item value="cup">水杯</u-select-item>
    <u-select-item value="toothbrush">牙刷</u-select-item>
    <u-select-divider></u-select-divider>
    <u-select-item value="nut">坚果</u-select-item>
    <u-select-item value="towel">毛巾</u-select-item>
    <u-select-item value="sofa">沙发</u-select-item>
</u-select>
```

### 定位

``` html
<u-select value="coffee" placement="top">
    <u-select-item value="cup">水杯</u-select-item>
    <u-select-item value="coffee">咖啡</u-select-item>
    <u-select-item value="nut">坚果</u-select-item>
</u-select>
```

### 分组

``` html
<u-select>
    <u-select-group title="洗具">
        <u-select-item>毛巾</u-select-item>
        <u-select-item>牙刷</u-select-item>
    </u-select-group>
    <u-select-group title="杯具">
        <u-select-item>牙缸</u-select-item>
        <u-select-item>水杯</u-select-item>
    </u-select-group>
    <u-select-group title="餐具">
        <u-select-item>筷子</u-select-item>
        <u-select-item>碗</u-select-item>
    </u-select-group>
</u-select>
```

### 可清除

``` html
<u-select value="coffee" clearable>
    <u-select-item value="cup">水杯</u-select-item>
    <u-select-item value="coffee">咖啡</u-select-item>
    <u-select-item value="nut">坚果</u-select-item>
</u-select>
```

#### Layer

``` html
<u-select value="C">
    <u-select-item value="A">苹果</u-select-item>
    <u-select-item value="B" flag layer="high">香蕉</u-select-item>
    <u-select-item value="C" flag="默认选项" layer="high">蛋糕</u-select-item>
</u-select>
```

### 数据源

``` vue
<template>
<u-linear-layout>
    <u-select ref="select2" v-model="value" :data-source="load" multiple filterable clearable :page-size="20" placeholder="前端过滤"></u-select>
    <u-button @click="reload">重新加载</u-button>
</u-linear-layout>
</template>
<script>

export default {
    data() {
        return {
            value: [],
            reverse: false,
        };
    },
    methods: {
        load() {
            // 模拟构造后端数据
            const remoteData = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));
            if (this.reverse)
                remoteData.reverse();

            // 这里使用 Promise 和 setTimeout 模拟一个异步请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData);
                }, 300);
            });
        },
        reload() {
            this.reverse = true;
            this.$refs.select2.reload();
        },
    },
};
</script>
```

#### 异步一次性数据源

#### 异步分页数据源（后端分页）

## 多选模式

### 基本用法

``` html
<u-linear-layout>
    <u-select multiple>
        <u-select-item>水杯</u-select-item>
        <u-select-item>咖啡</u-select-item>
        <u-select-item>坚果</u-select-item>
    </u-select>
    <u-select multiple placeholder="请选择">
        <u-select-item>水杯</u-select-item>
        <u-select-item>咖啡</u-select-item>
        <u-select-item>坚果</u-select-item>
    </u-select>
    <u-select multiple>
        <u-select-item>请选择</u-select-item>
        <u-select-item>兼容 0.3.x</u-select-item>
        <u-select-item>咖啡</u-select-item>
        <u-select-item>坚果</u-select-item>
    </u-select>
</u-linear-layout>
```

### 双向绑定

使用`v-model`或`:value.sync`进行双向绑定。

``` vue
<template>
<u-linear-layout>
    <u-select multiple v-model="value">
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
        <u-select-item value="towel">毛巾</u-select-item>
        <u-select-item value="sofa">沙发</u-select-item>
    </u-select>
    <u-select multiple :value.sync="value">
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
        <u-select-item value="towel">毛巾</u-select-item>
        <u-select-item value="sofa">沙发</u-select-item>
    </u-select>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: ['nut', 'towel'],
        };
    },
};
</script>
```

### Tags 风格

``` vue
<template>
<u-linear-layout>
    <u-select multiple multiple-appearance="tags" v-model="value" placeholder="过多时省略">
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
        <u-select-item value="towel">毛巾</u-select-item>
        <u-select-item value="sofa">沙发</u-select-item>
    </u-select>
    <u-select multiple multiple-appearance="tags" tags-overflow="collapse" v-model="value" placeholder="过多时收缩">
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
        <u-select-item value="towel">毛巾</u-select-item>
        <u-select-item value="sofa">沙发</u-select-item>
    </u-select>
    <u-select multiple multiple-appearance="tags" tags-overflow="visible" v-model="value" placeholder="过多时显示">
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
        <u-select-item value="towel">毛巾</u-select-item>
        <u-select-item value="sofa">沙发</u-select-item>
    </u-select>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: ['sofa', 'nut', 'towel'],
        };
    },
};
</script>
```

``` vue
<template>
<u-linear-layout>
    <u-select multiple size="large" multiple-appearance="tags" tags-overflow="visible" v-model="value" placeholder="过多时显示">
        <u-select-item value="cup">水杯水杯水杯水杯水杯</u-select-item>
        <u-select-item value="coffee">咖啡咖啡咖啡咖啡咖啡</u-select-item>
        <u-select-item value="nut">坚果坚果坚果坚果坚果</u-select-item>
        <u-select-item value="towel">毛巾毛巾毛巾毛巾毛巾</u-select-item>
        <u-select-item value="sofa">沙发沙发沙发沙发沙发</u-select-item>
    </u-select>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: ['sofa', 'nut', 'towel'],
        };
    },
};
</script>
```

### Tags 展示icon

Tags 是展示icon。

``` vue
<template>
<u-linear-layout>
    <u-select multiple tags-overflow="hidden" v-model="values" :data-source="list" placeholder="过多时省略" iconField="picture"></u-select>
    <u-select multiple tags-overflow="collapse" v-model="values" :data-source="list" placeholder="过多时收缩" iconField="picture"></u-select>
    <u-select multiple tags-overflow="visible" v-model="values" :data-source="list" placeholder="过多时显示" iconField="picture"></u-select>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            values: ['c', 'csharp', 'cpp', 'java', 'go'],
            list: [
                { text: 'Java', value: 'java', picture: 'http://ceph.lcap.hatest.163yun.com/lcap-test-static/icon/p1.jpg' },
                { text: 'Node.js', value: 'nodejs', picture: ''},
                { text: 'Go', value: 'go' },
                { text: 'Python', value: 'python' },
                { text: 'Ruby', value: 'ruby', disabled: true },
                { text: 'C', value: 'c', picture: 'https://t7.baidu.com/it/u=1831997705,836992814&fm=193&f=GIF' },
                { text: 'C#', value: 'csharp' },
                { text: 'C++', value: 'cpp' },
                { text: 'PHP', value: 'php', disabled: true },
            ],
        };
    },
};
</script>
```

#### 对齐和清空问题

``` vue
<template>
<u-linear-layout>
    <u-select clearable multiple multiple-appearance="tags" v-model="value" placeholder="过多时省略">
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
        <u-select-item value="towel">毛巾</u-select-item>
        <u-select-item value="sofa">沙发</u-select-item>
    </u-select>
    <u-select clearable multiple multiple-appearance="tags" tags-overflow="collapse" v-model="value" placeholder="过多时收缩">
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
        <u-select-item value="towel">毛巾</u-select-item>
        <u-select-item value="sofa">沙发</u-select-item>
    </u-select>
    <span>与文字对齐</span>
    <u-select clearable multiple multiple-appearance="tags" tags-overflow="visible" v-model="value" placeholder="过多时显示">
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
        <u-select-item value="towel">毛巾</u-select-item>
        <u-select-item value="sofa">沙发</u-select-item>
    </u-select>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: ['sofa', 'nut', 'towel'],
        };
    },
};
</script>
```

### 保持顺序

开启`keep-order`属性，选项会保持列表中的先后顺序。

``` vue
<template>
<u-linear-layout>
    <u-select multiple multiple-appearance="tags" tags-overflow="visible" v-model="value1" placeholder="不保持顺序（默认）">
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
        <u-select-item value="towel">毛巾</u-select-item>
        <u-select-item value="sofa">沙发</u-select-item>
    </u-select>
    <u-select multiple multiple-appearance="tags" tags-overflow="visible" keep-order v-model="value2" placeholder="保持顺序">
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
        <u-select-item value="towel">毛巾</u-select-item>
        <u-select-item value="sofa">沙发</u-select-item>
    </u-select>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value1: ['nut', 'towel'],
            value2: ['nut', 'towel'],
        };
    },
};
</script>
```


## 过滤模式

### 选项初始值

``` vue
<template>
<u-linear-layout>
    <u-select v-model="value" :data="list" filterable clearable placeholder="前端过滤"></u-select>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: undefined,
            list: [],
        };
    },
    created() {
        this.getList();
    },
    methods: {
        getList() {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    const data = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));

                    res(data);
                }, 100);
            }).then((result) => {
                this.list = result;
                this.value = 'Washington';
            });
        },
    },
};
</script>
```

### 前端过滤

``` vue
<template>
<u-linear-layout>
    <u-select v-model="value" :data-source="load" filterable clearable placeholder="前端过滤" text-field="companyName" value-field="id"></u-select>
</u-linear-layout>
</template>
<script>
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));

export default {
    data() {
        return {
            value: undefined,
            values: ['c', 'cpp'],
        };
    },
    methods: {
        async load() {
            return mockRequest({"content":[{"id":"1","companyName":"EMS","createdTime":"2020-12-09T20:02:22.912+08:00","updatedTime":"2020-12-09T20:02:22.912+08:00"},{"id":"2","companyName":"顺丰","createdTime":"2020-12-09T20:02:26.639+08:00","updatedTime":"2020-12-09T20:02:26.639+08:00"},{"id":"3","companyName":"京东","createdTime":"2020-12-09T20:02:30.981+08:00","updatedTime":"2020-12-09T20:02:30.981+08:00"},{"id":"4","companyName":"中通","createdTime":"2020-12-09T20:02:34.515+08:00","updatedTime":"2020-12-09T20:02:34.515+08:00"},{"id":"5","companyName":"圆通","createdTime":"2020-12-09T20:02:38.676+08:00","updatedTime":"2020-12-09T20:02:38.676+08:00"},{"id":"6","companyName":"百世","createdTime":"2020-12-09T20:02:43.112+08:00","updatedTime":"2020-12-09T20:02:43.112+08:00"}],"empty":false,"first":true,"last":true,"number":0,"numberOfElements":6,"size":50,"totalElements":6,"totalPages":null,"total":6,"data":[{"id":"1","companyName":"EMS","createdTime":"2020-12-09T20:02:22.912+08:00","updatedTime":"2020-12-09T20:02:22.912+08:00"},{"id":"2","companyName":"顺丰","createdTime":"2020-12-09T20:02:26.639+08:00","updatedTime":"2020-12-09T20:02:26.639+08:00"},{"id":"3","companyName":"京东","createdTime":"2020-12-09T20:02:30.981+08:00","updatedTime":"2020-12-09T20:02:30.981+08:00"},{"id":"4","companyName":"中通","createdTime":"2020-12-09T20:02:34.515+08:00","updatedTime":"2020-12-09T20:02:34.515+08:00"},{"id":"5","companyName":"圆通","createdTime":"2020-12-09T20:02:38.676+08:00","updatedTime":"2020-12-09T20:02:38.676+08:00"},{"id":"6","companyName":"百世","createdTime":"2020-12-09T20:02:43.112+08:00","updatedTime":"2020-12-09T20:02:43.112+08:00"}]});
        }
    }
};
</script>
```

#### 有空的项

``` vue
<template>
<u-linear-layout>
    <u-select v-model="value" :data-source="load" multiple filterable clearable placeholder="前端过滤" text-field="companyName" value-field="id"></u-select>
</u-linear-layout>
</template>
<script>
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));

export default {
    data() {
        return {
            value: undefined,
            values: ['c', 'cpp'],
        };
    },
    methods: {
        async load() {
            return mockRequest({"content":[{"id":"1","companyName":"EMS","createdTime":"2020-12-09T20:02:22.912+08:00","updatedTime":"2020-12-09T20:02:22.912+08:00"},{"id":"2","companyName":"顺丰","createdTime":"2020-12-09T20:02:26.639+08:00","updatedTime":"2020-12-09T20:02:26.639+08:00"},{"id":"3","companyName":"京东","createdTime":"2020-12-09T20:02:30.981+08:00","updatedTime":"2020-12-09T20:02:30.981+08:00"},{"id":"4","companyName":"中通","createdTime":"2020-12-09T20:02:34.515+08:00","updatedTime":"2020-12-09T20:02:34.515+08:00"},{"id":"5","companyName":"","createdTime":"2020-12-09T20:02:38.676+08:00","updatedTime":"2020-12-09T20:02:38.676+08:00"},{"id":"6","companyName":"百世","createdTime":"2020-12-09T20:02:43.112+08:00","updatedTime":"2020-12-09T20:02:43.112+08:00"}],"empty":false,"first":true,"last":true,"number":0,"numberOfElements":6,"size":50,"totalElements":6,"totalPages":null,"total":6,"data":[{"id":"1","companyName":"EMS","createdTime":"2020-12-09T20:02:22.912+08:00","updatedTime":"2020-12-09T20:02:22.912+08:00"},{"id":"2","companyName":"顺丰","createdTime":"2020-12-09T20:02:26.639+08:00","updatedTime":"2020-12-09T20:02:26.639+08:00"},{"id":"3","companyName":"京东","createdTime":"2020-12-09T20:02:30.981+08:00","updatedTime":"2020-12-09T20:02:30.981+08:00"},{"id":"4","companyName":"中通","createdTime":"2020-12-09T20:02:34.515+08:00","updatedTime":"2020-12-09T20:02:34.515+08:00"},{"id":"5","companyName":"","createdTime":"2020-12-09T20:02:38.676+08:00","updatedTime":"2020-12-09T20:02:38.676+08:00"},{"id":"6","companyName":"百世","createdTime":"2020-12-09T20:02:43.112+08:00","updatedTime":"2020-12-09T20:02:43.112+08:00"}]});
        }
    }
};
</script>
```

### 匹配方式

### 区分大小写

### 数据源

使用标签或`data`属性添加数据时，均为静态的。如果想要动态更新数据，可以设置数据源属性。数据源为`DataSource`类型或普通函数，要求返回一个`Array<{ text, value }>`格式的数组或一个`Promise`对象。

#### 同步数据源

#### 异步数据源

#### 异步分页数据源

## 多选过滤模式

### 可过滤

### 数据源

#### 异步数据源

#### 异步分页数据源

#### 清除缓存

在`data-source`属性中传入`load`方法，用于接收完整的后端数据。

这时开启`filterable`属性可以进行前端过滤。

``` vue
<template>
<u-linear-layout>
    <u-select ref="select" :data-source="load" filterable clearable :page-size="20" placeholder="前端过滤"></u-select>
    <u-button @click="reload">重新加载</u-button>
</u-linear-layout>
</template>
<script>

export default {
    data() {
        return {
            reverse: false,
        };
    },
    methods: {
        load() {
            // 模拟构造后端数据
            const remoteData = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));
            if (this.reverse)
                remoteData.reverse();

            // 这里使用 Promise 和 setTimeout 模拟一个异步请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData);
                }, 300);
            });
        },
        reload() {
            this.reverse = true;
            this.$refs.select.reload();
        },
    },
};
</script>
```

## 其他问题

### 列表切换

#### Tag 方式

``` vue
<template>
<u-linear-layout>
    <u-select v-if="!list.length" placeholder="暂无可选的项" disabled></u-select>
    <u-select v-else v-model="value">
        <u-select-item v-for="item in list" :key="item.value" :value="item.value">{{ item.text }}</u-select-item>
    </u-select>
    <u-button @click="switchList">切换</u-button>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: undefined,
            list: [],
            list1: ['A', 'B', 'C'].map((value) => ({ text: value + value, value })),
            list2: ['D', 'E', 'F', 'G'].map((value) => ({ text: value + value, value })),
        };
    },
    methods: {
        switchList() {
            if (!this.list.length)
                this.list = this.list1;
            else if (this.list === this.list1)
                this.list = this.list2;
            else
                this.list = [];
        },
    },
};
</script>
```

#### Data 方式

``` vue
<template>
<u-linear-layout>
    <u-select v-if="!list.length" placeholder="暂无可选的项" disabled></u-select>
    <u-select v-else v-model="value" :data="list"></u-select>
    <u-button @click="switchList">切换</u-button>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: undefined,
            list: [],
            list1: ['A', 'B', 'C'].map((value) => ({ text: value + value, value })),
            list2: ['D', 'E', 'F', 'G'].map((value) => ({ text: value + value, value })),
        };
    },
    methods: {
        switchList() {
            if (!this.list.length)
                this.list = this.list1;
            else if (this.list === this.list1)
                this.list = this.list2;
            else
                this.list = [];
        },
    },
};
</script>
```

### 列表与 value 同时改变的问题

``` vue
<template>
<div>
    <u-linear-layout direction="vertical">
        <u-linear-layout>
            <u-text size="normal">可用区</u-text>
            <u-radios v-model="selectedAz">
                <u-radio label="azA">可用区A</u-radio>
                <u-radio label="azB">可用区B</u-radio>
            </u-radios>
        </u-linear-layout>
        <u-linear-layout>
            <u-text size="normal">网络{{ selectedVpc }}</u-text>
            <u-select v-model="selectedVpc">
                <u-select-item v-for="item in vpcOptions" :key="item.value" :value="item.value">A {{ item.text }}</u-select-item>
            </u-select>
        </u-linear-layout>
    </u-linear-layout>
</div>
</template>

<script>
export default {
    data() {
        return {
            azMap: {
                azA: [
                    { text: 'classic', value: 'classic' },
                    { text: 'defaultVPC', value: 'defaultVPC' },
                ],
                azB: [
                    { text: 'devVPC', value: 'devVPC' },
                    { text: 'onlineVPC', value: 'onlineVPC' },
                ],
            },
            vpcOptions: [],
            selectedAz: 'azA',
            selectedVpc: 'classic',
        };
    },
    watch: {
        selectedAz(value) {
            this.vpcOptions = this.azMap[value];
            if (this.vpcOptions.length > 0) {
                this.selectedVpc = this.vpcOptions[0].value;
            }
        },
    },
    created() {
        this.vpcOptions = this.azMap[this.selectedAz];
        if (this.vpcOptions.length > 0) {
            this.selectedVpc = this.vpcOptions[0].value;
        }
    },
};
</script>
```

#### 一次性后端数据，前端过滤

在`data-source`属性中传入`load`方法，用于接收完整的后端数据。

这时开启`filterable`属性可以进行前端过滤。

``` vue
<template>
<u-select :data-source="load" filterable clearable placeholder="前端过滤"></u-select>
</template>
<script>
// 模拟构造后端数据
const remoteData = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));

export default {
    methods: {
        load() {
            // 这里使用 Promise 和 setTimeout 模拟一个异步请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData);
                }, 300);
            });
        },
    },
};
</script>
```

#### 后端过滤，后端分页

如果要使用后端过滤，在`data-source`属性中传入`load`方法的基础上，开启`remote-filtering`功能。

同时可以配合分页使用。

``` vue
<template>
<u-linear-layout>
    <u-select :data-source="load"
              pageable remote-paging
              filterable remote-filtering
              clearable placeholder="后端过滤，后端分页">
    </u-select>
    <u-select multiple :data-source="load"
              pageable remote-paging
              filterable remote-filtering
              clearable placeholder="后端过滤，后端分页（多选）"
              style="width: 240px"></u-select>
</u-linear-layout>
</template>
<script>
// 模拟构造数量较多的 500 条后端数据
let remoteData = [];
for (let i = 1; i <= 500; i++) {
    remoteData.push('item' + i);
    remoteData.push('info' + i);
    remoteData.push('detail' + i);
}
remoteData = remoteData.map((text) => ({ text, value: text }));

export default {
    methods: {
        load({ filterText, paging }) {
            const value = filterText.toLowerCase();

            // 这里使用 Promise 和 setTimeout 模拟一个异步请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData.filter((item) => item.value.includes(value))
                        .slice(paging.offset, paging.offset + paging.limit)
                    );
                }, 300);
            });
        },
    },
};
</script>
```


#### 一次性后端数据，前端分页

在`data-source`属性中传入`load`方法，用于接收完整的后端数据。

`load`方法要求返回一个`Promise<Array<Item>>`或`Promise<{ data: Array<Item>, total: number }>`的格式。该会在组件初始化时会被调用一次，如果不需要可以将`initial-load`属性设置为`false`。

开启`pageable`属性时可以进行前端分页。

``` vue
<template>
<u-select :data-source="load" pageable :page-size="20" placeholder="前端分页"></u-select>
</template>
<script>
// 模拟构造后端数据
const remoteData = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));

export default {
    methods: {
        load() {
            // 这里使用 Promise 和 setTimeout 模拟一个异步请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData);
                }, 500);
            });
        },
    },
};
</script>
```

#### prefix, suffix

``` vue
<template>
<u-select :data-source="load" readonly placeholder="前端过滤" suffix="search"></u-select>
</template>
<script>
// 模拟构造后端数据
const remoteData = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));

export default {
    methods: {
        load() {
            // 这里使用 Promise 和 setTimeout 模拟一个异步请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData);
                }, 300);
            });
        },
    },
};
</script>
```
### 反色

``` html
<u-linear-layout>
    <u-select value="nut" readonly color="inverse">
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
    </u-select>
    <u-select value="nut" disabled color="inverse">
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
    </u-select>
    <u-select value="nut" color="inverse">
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee" disabled>咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
    </u-select>
</u-linear-layout>
```

### 标签和数据源混合使用

``` vue
<template>
<u-linear-layout>
    <u-select ref="select2" v-model="value" :data-source="load" :page-size="20" placeholder="混合使用">
        <u-select-item text="全部"></u-select-item>
    </u-select>
</u-linear-layout>
</template>
<script>

export default {
    data() {
        return {
            value: [],
            reverse: false,
        };
    },
    methods: {
        load() {
            // 模拟构造后端数据
            const remoteData = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));
            if (this.reverse)
                remoteData.reverse();

            // 这里使用 Promise 和 setTimeout 模拟一个异步请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData);
                }, 300);
            });
        },
    },
};
</script>
```

### 自定义选中值的展示形式，项可添加描述

``` vue
<template>
<u-linear-layout>
    <u-select v-model="value" placeholder="自定义选中展示">
        <u-select-item v-for="item in list" :key="item.value" :value="item.value" :item="item" :description="item.description">
            {{ item.text }}
        </u-select-item>
        <template #selected="{item}">
            <i-ico name="home"></i-ico>
            <u-text style="margin-left:5px;">选中的是{{ item.text }}</u-text>
        </template>
    </u-select>
    <u-select v-model="value" :data-source="list" descriptionField="description" placeholder="自定义选中展示">
        <template #selected="{item}">
            <i-ico name="home"></i-ico>
            <u-text style="margin-left:5px;">选中的是{{ item.text }}</u-text>
        </template>
    </u-select>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            list: [
                { text: 'Java', value: 'java', description: '这是java'},
                { text: 'Python', value: 'python', description: '这是python'},
                { text: 'Node.js', value: 'nodejs', description: '这是nodejs' },
                { text: 'Go', value: 'go', description: '这是go' },
                { text: '.NET', value: '.net', description: '这是.net' },
                { text: 'PHP', value: 'php', description: '这是php' },
            ],
        };
    },
};
</script>
```

### 自定义可扩展下拉项

``` vue
<template>
<u-linear-layout>
    <u-select v-model="value" :data-source="list" showRenderFooter ref="select">
        <template #renderFooter>
            <u-grid-layout>
                <u-grid-layout-row :repeat="24" alignment="center" gap="small">
                    <u-grid-layout-column :span="16">
                        <u-input placeholder="请输入" v-model="inputName"></u-input>
                    </u-grid-layout-column>
                    <u-grid-layout-column :span="8">
                        <u-button style="min-width:auto;width:100%;padding:0;" color="default" icon="add" text="添加" @click="onClick"></u-button>
                    </u-grid-layout-column>
                </u-grid-layout-row>
            </u-grid-layout>
        </template>
    </u-select>
    <u-select v-model="value" :data-source="load" showRenderFooter ref="select1" text-field="name" value-field="id" clearable>
        <template #renderFooter>
            <u-grid-layout>
                <u-grid-layout-row :repeat="24" alignment="center" gap="small">
                    <u-grid-layout-column :span="16">
                        <u-input placeholder="请输入" v-model="inputName1"></u-input>
                    </u-grid-layout-column>
                    <u-grid-layout-column :span="8">
                        <u-button style="min-width:auto;width:100%;padding:0;" color="default" icon="add" text="添加" @click="onClick1"></u-button>
                    </u-grid-layout-column>
                </u-grid-layout-row>
            </u-grid-layout>
        </template>
    </u-select>
</u-linear-layout>
</template>

<script>
// 模拟构造后端数据
const remoteData = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ name: text, id: text }));

export default {
    data() {
        return {
            value: '',
            list: [
                { text: 'Java', value: 'java', description: '这是java'},
                { text: 'Python', value: 'python', description: '这是python'},
                { text: 'Node.js', value: 'nodejs', description: '这是nodejs' },
                { text: 'Go', value: 'go', description: '这是go' },
                { text: '.NET', value: '.net', description: '这是.net' },
                { text: 'PHP', value: 'php', description: '这是php' },
            ],
            inputName: '',
            inputName1: '',

        };
    },
    methods: {
        load() {
            // 这里使用 Promise 和 setTimeout 模拟一个异步请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData);
                }, 300);
            });
        },
        onClick() {
            const item = {text: this.inputName, value: this.inputName};
            this.$refs.select.addItem(item, 'first');
        },
        onClick1() {
            const item = {name:this.inputName1, id: this.inputName1};
            this.$refs.select1.addItem(item, 'last');
        },
    }
};
</script>
```


### 选中值是下一页数据的选中处理


``` vue
<template>
<u-linear-layout>
    <u-select :data-source="load"
              pageable remote-paging
              filterable remote-filtering
              clearable
              :value.sync="value">
    </u-select>
    <u-select :data-source="load"
              pageable remote-paging
              clearable
              :value.sync="remoteValue">
    </u-select>
    <u-select multiple :data-source="load"
              pageable remote-paging
              clearable
              style="width: 240px"
              :value.sync="values"></u-select>
    <u-select multiple :data-source="load"
            pageable remote-paging
            clearable
            style="width: 240px"
            :value.sync="remoteValues"></u-select>
    <u-select multiple :data-source="load"
            pageable remote-paging
            clearable
            style="width: 240px"
            :value.sync="remoteValues1"
            converter="join:|"></u-select>
</u-linear-layout>
</template>
<script>
// 模拟构造数量较多的 500 条后端数据
let remoteData = [];
for (let i = 1; i <= 500; i++) {
    remoteData.push('item' + i);
    remoteData.push('info' + i);
    remoteData.push('detail' + i);
}
remoteData = remoteData.map((text) => ({ text, value: text }));

export default {
    data() {
        return {
            value: 'detail30',
            values: ['detail30', 'info30'],
            remoteValue: undefined,
            remoteValues: undefined,
            remoteValues1: undefined,
        }
    },
    created() {
        setTimeout(()=>{
            this.remoteValue = 'detail45';
            this.remoteValues =  ['detail45', 'info45'];
            this.remoteValues1 = 'detail45|info45';
        }, 300); 
    },
    methods: {
        load({ filterText, paging }) {
            const value = filterText.toLowerCase();

            // 这里使用 Promise 和 setTimeout 模拟一个异步请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData.filter((item) => item.value.includes(value))
                        .slice(paging.offset, paging.offset + paging.limit)
                    );
                }, 300);
            });
        },
    },
};
</script>
```