### 基本形式

``` vue
<template>
<u-dynamic-cards :data="list" text-field="url" :getDefaultItem="getDefaultItem">
    <template slot-scope="{ item }">
        <u-linear-layout>
            <u-input size="huge normal" v-model="item.url" placeholder="URL"></u-input>
            <u-select size="huge normal" v-model="item.service" :data="services"></u-select>
            <u-input size="huge normal" v-model.number="item.port" placeholder="端口"></u-input>
        </u-linear-layout>
    </template>
</u-dynamic-cards>
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
                url: '222',
                service: 'def',
                port: 2000,
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
                url: '',
                service: '',
                port: '',
                description: '',
            };
        },
    },
};
</script>
```

### 限制数量

``` vue
<template>
<u-dynamic-cards :data="list" text-field="url" :getDefaultItem="getDefaultItem" :max-count="5">
    <template slot-scope="{ item }">
        <u-linear-layout>
            <u-input size="huge normal" v-model="item.url" placeholder="URL"></u-input>
            <u-select size="huge normal" v-model="item.service" :data="services"></u-select>
            <u-input size="huge normal" v-model.number="item.port" placeholder="端口"></u-input>
        </u-linear-layout>
    </template>
</u-dynamic-cards>
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
                url: '',
                service: '',
                port: '',
                description: '',
            };
        },
    },
};
</script>
```

### Mini 自定义

``` vue
<template>
<u-dynamic-cards :data="list" text-field="url" :getDefaultItem="getDefaultItem">
    <template slot-scope="{ item }">
        <u-linear-layout>
            <u-input size="huge normal" v-model="item.url" placeholder="URL"></u-input>
            <u-select size="huge normal" v-model="item.service" :data="services"></u-select>
            <u-input size="huge normal" v-model.number="item.port" placeholder="端口"></u-input>
        </u-linear-layout>
    </template>
    <template slot="mini" slot-scope="{ item }">
        <span>{{ item.url }} {{ item.port }}</span>
    </template>
</u-dynamic-cards>
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
                url: '',
                service: '',
                port: '',
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
<u-dynamic-cards :data="list" text-field="url" :getDefaultItem="getDefaultItem">
    <template slot-scope="{ item }">
        <u-validator>
            <u-linear-layout>
                <u-validator label="URL" rules="required | pattern(/^[a-zA-Z0-9/\s]+$/)" muted="message">
                    <u-input size="huge normal" v-model="item.url" placeholder="URL"></u-input>
                </u-validator>
                <u-validator label="服务" rules="required" muted="message">
                    <u-select size="huge normal" v-model="item.service" disabled></u-select>
                </u-validator>
                <u-validator label="端口" rules="required | integer | range(1,65535)" muted="message">
                    <u-input size="huge normal" v-model.number="item.port" placeholder="端口"></u-input>
                </u-validator>
            </u-linear-layout>
        </u-validator>
    </template>
</u-dynamic-cards>
</template>
<script>
export default {
    data() {
        return {
            list: [],
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
                url: '',
                service: '',
                port: '',
                description: '',
            };
        },
    },
};
</script>
```

与`<u-form-table-view>`结合的例子。

``` vue
<template>
<u-dynamic-cards :data="list" text-field="url" :getDefaultItem="getDefaultItem">
    <template slot-scope="{ item }">
        <u-form-table-view :data="item.list" dynamic :getDefaultItem="getDefaultSubItem">
            <u-form-table-view-column title="URL" width="20%"
                rules="required | pattern(/^[a-zA-Z0-9/\s]+$/)">
                <template slot="cell" slot-scope="{ item: subItem }">
                    <u-input size="huge full" v-model="subItem.url" placeholder="URL"></u-input>
                </template>
            </u-form-table-view-column>
            <u-form-table-view-column title="服务" width="20%"
                rules="required">
                <template slot="cell" slot-scope="{ item: subItem }">
                    <u-select size="huge full" v-model="subItem.service" :data="services" placeholder="服务"></u-select>
                </template>
            </u-form-table-view-column>
            <u-form-table-view-column title="端口" width="20%"
                rules="required | integer | range(1,65535)">
                <template slot="cell" slot-scope="{ item: subItem }">
                    <u-input size="huge full" v-model="subItem.port" placeholder="端口"></u-input>
                </template>
            </u-form-table-view-column>
            <u-form-table-view-column title="描述">
                <template slot="cell" slot-scope="{ item: subItem }">
                    <u-input size="huge full" v-model="subItem.description" placeholder="描述"></u-input>
                </template>
            </u-form-table-view-column>
        </u-form-table-view>
    </template>
</u-dynamic-cards>
</template>
<script>
export default {
    data() {
        return {
            list: [],
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
                domain: '',
                list: [],
            };
        },
        getDefaultSubItem() {
            return {
                url: '',
                service: this.services[0].value,
                port: '',
                description: '',
            };
        },
    },
};
</script>
```
