### 基本用法

``` vue
<template>
<u-form-table-view :data="list">
    <u-form-table-view-column title="URL" width="20%">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.url"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="服务" width="20%">
        <template slot="cell" slot-scope="{ item }">
            <u-select size="huge full" v-model="item.service" :data="services"></u-select>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="端口" width="20%">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.port"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="描述">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.description"></u-input>
        </template>
    </u-form-table-view-column>
</u-form-table-view>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }, {
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }],
            services: [
                { text: 'abc', value: 'abc' },
                { text: 'def', value: 'def' },
                { text: 'zzz', value: 'zzz' },
            ],
        };
    },
};
</script>
```

### 在表单中使用

``` vue
<template>
<u-form>
    <u-form-item label="规则" layout="block">
        <u-form-table-view :data="list">
            <u-form-table-view-column title="URL" width="20%">
                <template slot="cell" slot-scope="{ item }">
                    <u-input size="huge full" v-model="item.url"></u-input>
                </template>
            </u-form-table-view-column>
            <u-form-table-view-column title="服务" width="20%">
                <template slot="cell" slot-scope="{ item }">
                    <u-select size="huge full" v-model="item.service" :data="services"></u-select>
                </template>
            </u-form-table-view-column>
            <u-form-table-view-column title="端口" width="20%">
                <template slot="cell" slot-scope="{ item }">
                    <u-input size="huge full" v-model="item.port"></u-input>
                </template>
            </u-form-table-view-column>
            <u-form-table-view-column title="描述">
                <template slot="cell" slot-scope="{ item }">
                    <u-input size="huge full" v-model="item.description"></u-input>
                </template>
            </u-form-table-view-column>
        </u-form-table-view>
    </u-form-item>
</u-form>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }, {
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }],
            services: [
                { text: 'abc', value: 'abc' },
                { text: 'def', value: 'def' },
                { text: 'zzz', value: 'zzz' },
            ],
        };
    },
};
</script>
```

### 动态表格

``` vue
<template>
<u-form-table-view :data="list" dynamic :get-default-item="getDefaultItem">
    <u-form-table-view-column title="URL" width="20%">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.url"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="服务" width="20%">
        <template slot="cell" slot-scope="{ item }">
            <u-select size="huge full" v-model="item.service" :data="services"></u-select>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="端口" width="20%">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.port"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="描述">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.description"></u-input>
        </template>
    </u-form-table-view-column>
</u-form-table-view>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }, {
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }],
            services: [
                { text: 'abc', value: 'abc' },
                { text: 'def', value: 'def' },
                { text: 'zzz', value: 'zzz' },
            ],
        };
    },
    methods: {
        getDefaultItem() {
            return {
                url: 'xxx',
                service: this.services[0].value,
                port: undefined,
                description: '',
            };
        },
    },
};
</script>
```

#### 限制数量

通过`max-count`属性的设置，下面的表格中最多可以添加5项。

``` vue
<template>
<u-form-table-view :data="list" dynamic :get-default-item="getDefaultItem" :max-count="5">
    <u-form-table-view-column title="URL" width="20%">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.url"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="服务" width="20%">
        <template slot="cell" slot-scope="{ item }">
            <u-select size="huge full" v-model="item.service" :data="services"></u-select>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="端口" width="20%">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.port"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="描述">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.description"></u-input>
        </template>
    </u-form-table-view-column>
</u-form-table-view>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }, {
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }],
            services: [
                { text: 'abc', value: 'abc' },
                { text: 'def', value: 'def' },
                { text: 'zzz', value: 'zzz' },
            ],
        };
    },
    methods: {
        getDefaultItem() {
            return {
                url: 'xxx',
                service: this.services[0].value,
                port: undefined,
                description: '',
            };
        },
    },
};
</script>
```

### 表单验证

``` vue
<template>
<u-form-table-view :data="list" dynamic :get-default-item="getDefaultItem">
    <u-form-table-view-column title="URL" width="20%"
        rules="required | pattern(/^[a-zA-Z0-9/\s]+$/)">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.url"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="服务" width="20%"
        rules="required">
        <template slot="cell" slot-scope="{ item }">
            <u-select size="huge full" v-model="item.service" :data="services"></u-select>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="端口" width="20%"
        rules="required | integer | range(1,65535)">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.port"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="描述">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.description"></u-input>
        </template>
    </u-form-table-view-column>
</u-form-table-view>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }, {
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }],
            services: [
                { text: 'abc', value: 'abc' },
                { text: 'def', value: 'def' },
                { text: 'zzz', value: 'zzz' },
            ],
        };
    },
    methods: {
        getDefaultItem() {
            return {
                url: 'xxx',
                service: this.services[0].value,
                port: undefined,
                description: '',
            };
        },
    },
};
</script>
```

注意在添加列插槽的时候，必须使用`slot-scope`或者 Vue 2.6.x 新的 `#` 方式，否则模板渲染可能会有问题。

``` vue
<template>
<u-form-table-view :data="[{}]" :getDefaultItem="getDefaultItem">
    <u-form-table-view-column title="URL" width="20%"
        rules="required | pattern(/^[a-zA-Z0-9/\s]+$/)">
        <template #cell>
            <u-input size="huge full" v-model="cluster.url"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="服务" width="20%"
        rules="required">
        <template #cell>
            <u-select size="huge full" v-model="cluster.service" :data="services"></u-select>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="端口" width="20%"
        rules="required | integer | range(1,65535)">
        <template #cell>
            <u-input size="huge full" v-model.number="cluster.port"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="描述">
        <template #cell>
            <u-input size="huge full" v-model="cluster.description"></u-input>
        </template>
    </u-form-table-view-column>
</u-form-table-view>
</template>
<script>
export default {
    data() {
        return {
            cluster: {
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            },
            services: [
                { text: 'abc', value: 'abc' },
                { text: 'def', value: 'def' },
                { text: 'zzz', value: 'zzz' },
            ],
        };
    },
    methods: {
        getDefaultItem() {
            return {
                url: 'xxx',
                service: this.services[0].value,
                port: undefined,
                description: '',
            };
        },
    },
};
</script>
```

支持 action 自定义的例子
``` vue
<template>
<u-form-table-view ref="form" theme="gray" :showAddButton="false"  :actionDefine="true" dynamic  :data="list" :get-default-item="getDefaultItem">
    <u-form-table-view-column title="URL" width="20%"
        rules="required | pattern(/^[a-zA-Z0-9/\s]+$/)">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.url"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="服务" width="20%"
        rules="required">
       <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.service"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="端口" width="20%"
        rules="required | integer | range(1,65535)">
        <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.port"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="描述">
         <template slot="cell" slot-scope="{ item }">
            <u-input size="huge full" v-model="item.description"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="操作">
        <template slot="action-column" slot-scope="{ item, rowIndex }">
           <u-linear-layout>
            <u-link size="huge full" @click="duplicate(rowIndex)">复制</u-link>
            <u-link size="huge full" @click="remove(rowIndex)">删除</u-link>
            </u-linear-layout>
        </template>
    </u-form-table-view-column>
    <u-button icon="plus" :style="{ marginTop: '10px' }" @click="add">添加</u-button>
</u-form-table-view>
</template>
<script>
export default {
    data() {
        return {
            cluster: {
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            },
            list: [{
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }, {
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }],
            services: [
                { text: 'abc', value: 'abc' },
                { text: 'def', value: 'def' },
                { text: 'zzz', value: 'zzz' },
            ],
        };
    },
    methods: {
        remove(rowIndex) {
            this.$refs.form.onRemove(rowIndex);
        },
        duplicate(rowIndex) {
            this.$refs.form.onDuplicate(rowIndex);
        },
        add() {
            this.$refs.form.onAdd();
        },
        getDefaultItem() {
            return {
                url: 'xxx',
                service: this.services[0].value,
                port: undefined,
                description: '',
            };
        },
    },
};
</script>
```

