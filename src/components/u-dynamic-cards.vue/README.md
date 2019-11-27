<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UDynamicCards 动态卡片

## 示例
### 基本用法

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

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data | Array |  |  | 数据 |
| dynamic | boolean |  | `true` | 是否可以动态添加/删除项 |
| get-default-item | Function |  |  | 传入获取默认项的方法 |
| initial-add | boolean |  | `true` | 是否自动补充项，如果初始时`data`中的项目数少于`min-count` |
| min-count | number |  | `1` | 最小项目数 |
| max-count | number |  | `Infinity` | 最大项目数 |
| text-field | string |  | `'title'` | 用于 mini 显示的字段 |
| index.sync | number |  | `0` | 当前展开项的索引 |
| add-button-text | string |  | `'添加'` | 添加按钮的文本 |
| mini-formatter | Function |  |  | mini 显示时的格式器 |

### Computed

| Computed | Type | Description |
| -------- | ---- | ----------- |
| touched | boolean | 用户是否触碰 |
| dirty | boolean | 用户是否修改值 |
| valid | boolean | 验证是否通过 |
| firstError | string | 第一个错误提示消息 |

### Slots

#### (default)

展开区域的内容

| Prop | Type | Description |
| ---- | ---- | ----------- |
| item | object | 项目 |
| index | number | 索引 |

#### mini

收起时 mini 显示区的内容

| Prop | Type | Description |
| ---- | ---- | ----------- |
| item | object | 项目 |
| index | number | 索引 |

### Events

#### @before-add

添加前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | any | 添加的项 |
| $event.index | number | 添加的索引 |
| $event.data | Array | 当前数据 |
| $event.preventDefault | Function | 阻止添加流程 |
| senderVM | UDynamicCards | 发送事件实例 |

#### @add

添加时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | any | 添加的项 |
| $event.index | number | 添加的索引 |
| $event.data | Array | 当前数据 |
| senderVM | UDynamicCards | 发送事件实例 |

#### @before-remove

删除前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | any | 删除的项 |
| $event.index | number | 删除的索引 |
| $event.data | Array | 当前数据 |
| $event.preventDefault | Function | 阻止删除流程 |
| senderVM | UDynamicCards | 发送事件实例 |

#### @remove

删除时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | any | 删除的项 |
| $event.index | number | 删除的索引 |
| $event.data | Array | 当前数据 |
| senderVM | UDynamicCards | 发送事件实例 |

#### @splice

数量变更（添加/删除）时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | any | 变更的项 |
| $event.index | number | 变更的索引 |
| $event.data | Array | 当前数据 |
| senderVM | UDynamicCards | 发送事件实例 |

#### @validate

对于第一个 Field 或者所有子 UValidator：

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.valid | boolean | 验证是否通过 |
| $event.touched | boolean | 用户是否触碰 |
| $event.dirty | boolean | 用户是否修改值 |
| $event.firstError | string | 第一个错误提示消息 |
| senderVM | UDynamicCards | 发送事件实例 |

### Methods

#### validate(trigger, muted)

手动验证。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| trigger | string | `'submit'` | 触发方式，可选值：`submit`、`blur`和`input`之一，或者它们的任意组合。 |
| muted | boolean | `false` | 是否验证后无提示 |
