<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFormTableView 表格表单

- [示例](#示例)
    - [基本用法](#基本用法)
    - [在表单中使用](#在表单中使用)
    - [动态表格](#动态表格)
    - [表单验证](#表单验证)
    - [自定义操作列](#自定义操作列)
- [UFormTableView API](#uformtableview-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
- [UFormTableViewColumn API](#uformtableviewcolumn-api)
    - [Props/Attrs](#propsattrs-2)
    - [Slots](#slots-2)

**Table**

本组件用于在表单中使用表单验证、动态数据等复杂功能。

## 示例
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
### 自定义操作列

使用 `last-column` slot 可以自定义操作列，使用`lastColumnStyle`属性调整样式。

``` vue
<template>
<u-form-table-view ref="formTable" :data="list" :showAddButton="false" dynamic :get-default-item="getDefaultItem"
    :lastColumnStyle="{ width: '80px' }">
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
    <template slot="last-column" slot-scope="{ item, rowIndex }">
        <u-linear-layout gap="small">
            <u-link size="huge full" @click="duplicate(rowIndex)">复制</u-link>
            <u-link size="huge full" @click="remove(rowIndex)">删除</u-link>
        </u-linear-layout>
    </template>
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
            this.$refs.formTable.remove(rowIndex);
        },
        duplicate(rowIndex) {
            this.$refs.formTable.duplicate(rowIndex);
        },
        add() {
            this.$refs.formTable.add();
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
## UFormTableView API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data | Array |  |  | 数据 |
| dynamic | boolean |  | `false` | 是否可以动态添加/删除项 |
| get-default-item | Function |  |  | 传入获取默认项的方法 |
| initial-add | boolean |  | `true` | 是否自动补充项，如果初始时`data`中的项目数少于`min-count` |
| min-count | number |  | `1` | 最小项目数 |
| max-count | number |  | `999` | 最大项目数 |

### Slots

#### (default)

添加文本或 HTML。

### Events

#### @before-add

添加前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.item | any | 添加的项 |
| $event.index | number | 添加的索引 |
| $event.data | Array | 当前数据 |
| $event.preventDefault | Function | 阻止添加流程 |
| senderVM | UFormTableView | 发送事件实例 |

#### @add

添加时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.item | any | 添加的项 |
| $event.index | number | 添加的索引 |
| $event.data | Array | 当前数据 |
| senderVM | UFormTableView | 发送事件实例 |

#### @before-remove

删除前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.item | any | 删除的项 |
| $event.index | number | 删除的索引 |
| $event.data | Array | 当前数据 |
| $event.preventDefault | Function | 阻止删除流程 |
| senderVM | UFormTableView | 发送事件实例 |

#### @remove

删除时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.item | any | 删除的项 |
| $event.index | number | 删除的索引 |
| $event.data | Array | 当前数据 |
| senderVM | UFormTableView | 发送事件实例 |

#### @splice

数量变更（添加/删除）时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.item | any | 变更的项 |
| $event.index | number | 变更的索引 |
| $event.data | Array | 当前数据 |
| senderVM | UFormTableView | 发送事件实例 |

## UFormTableViewColumn API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  | 列标题 |
| field | string |  |  | data 中的字段名 |
| width | string, number |  |  | 给列指定宽度，可以为数字或百分比 |
| ellipsis | boolean |  | `false` | 文字过长是否省略显示。默认文字超出时会换行。 |
| formatter | string, object, Function, Formatter |  | `'placeholder'` | 格式器 |
| hidden | boolean |  | `false` | 是否隐藏 |
| start-index | number |  | `1` | 当`type="index"`时的起始序号 |
| label | string |  |  | 标签。用于提示消息的合成 |
| muted | string |  |  | 验证时是否静默。可选值：`'message'`表示只静默消息提示，`'all'`同时静默消息提示和红框提示 |
| rules | string, Array |  |  | 验证规则。简写格式为字符串类型，完整格式或混合格式为数组类型 |
| ignore-validation | boolean |  | `false` | 忽略验证 |
| ignore-rules | boolean |  | `false` | 忽略验证规则。已废弃，同`ignore-validation` |
| validating-options | object |  |  | 验证辅助对象。在 Rule 的 `validate` 方法中使用。表格中会额外将`{ data: currentData, item, rowIndex }`注入 |
| validating-value | any |  |  | 临时修改验证值 |
| validating-process | Function |  |  | 验证前对值进行预处理 |

### Slots

#### (default)

在表格列中插入`cell`插槽。

#### cell

对单元格数据展示进行自定义。

| Prop | Type | Description |
| ---- | ---- | ----------- |
| item | object | 循环中的当前项 |
| value | any | item 中 field 字段对应的值 |
| columnVM | string | 该列组件实例 |
| rowIndex | number | 行的索引 |
| columnIndex | number | 列的索引 |

#### title

对标题进行自定义。

| Prop | Type | Description |
| ---- | ---- | ----------- |
| columnVM | string | 该列组件实例 |
| columnIndex | number | 列的索引 |

#### expand-content

展开列的内容

| Prop | Type | Description |
| ---- | ---- | ----------- |
| item | object | 循环中的当前项 |
| value | any | item 中 field 字段对应的值 |
| columnVM | string | 该列组件实例 |
| rowIndex | number | 行的索引 |
| columnIndex | number | 列的索引 |

