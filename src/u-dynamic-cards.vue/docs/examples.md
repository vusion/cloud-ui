### 基本形式

``` vue
<template>
<u-dynamic-cards :data="list" text-field="url">
    <template #default="{ item }">
        <u-linear-layout>
            <u-input size="huge normal" v-model="item.url"></u-input>
            <u-input size="huge normal" v-model="item.service"></u-input>
            <u-input size="huge normal" v-model.number="item.port"></u-input>
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
};
</script>
```

### 限制数量

``` vue
<template>
<u-dynamic-cards :data="list" text-field="url" :max-count="5">
    <template #default="{ item }">
        <u-linear-layout>
            <u-input size="huge normal" v-model="item.url"></u-input>
            <u-input size="huge normal" v-model="item.service"></u-input>
            <u-input size="huge normal" v-model.number="item.port"></u-input>
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
};
</script>
```

### Mini 自定义

``` vue
<template>
<u-dynamic-cards :data="list" text-field="url">
    <template #default="{ item }">
        <u-linear-layout>
            <u-input size="huge normal" v-model="item.url"></u-input>
            <u-input size="huge normal" v-model="item.service"></u-input>
            <u-input size="huge normal" v-model.number="item.port"></u-input>
        </u-linear-layout>
    </template>
    <template #mini="{ item }">
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
};
</script>
```

### 表单验证

``` vue
<template>
<u-dynamic-cards :data="list" text-field="url">
    <template #default="{ item }">
        <u-validator>
            <u-linear-layout>
                <u-validator rules="required | pattern(/^[a-zA-Z0-9/\s]+$/)" muted="message">
                    <u-input size="huge normal" v-model="item.url"></u-input>
                </u-validator>
                <u-validator rules="required" muted="message">
                    <u-input size="huge normal" v-model="item.service"></u-input>
                </u-validator>
                <u-validator rules="required | integer | range(1,65535)" muted="message">
                    <u-input size="huge normal" v-model.number="item.port"></u-input>
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
