<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UCheckboxCard 多选卡片

- [示例](#示例)
    - [基本用法](#基本用法)
    - [设置空态](#设置空态)
    - [卡牌宽度](#卡牌宽度)
    - [固定每行展示数据个数](#固定每行展示数据个数)
    - [表单校验](#表单校验)
    - [部分选项不可选择](#部分选项不可选择)
    - [自定义placeholder](#自定义placeholder)
    - [自定义选择项](#自定义选择项)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)

## 示例
### 基本用法

``` vue
<template>
<u-linear-layout>
    <u-checkbox-card v-model="value" :data="data"></u-checkbox-card>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: ['1', '4'],
            data: [{
                text: 'jiande-private',
                value: '1',
            },{
                text: 'jiande-public',
                value: '2',
            },{
                text: 'yiqiao-public',
                value: '3',
            },{
                text: 'liantong-public',
                value: '4',
            },{
                text: 'region-1',
                value: '5',
            }],
        };
    },
};
</script>
```
### 设置空态

``` vue
<template>
<u-linear-layout>
    <u-checkbox-card v-model="value" placeholder="当前无相关环境" :data="data"></u-checkbox-card>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: ['1', '4'],
            data: [],
        };
    },
};
</script>
```
### 卡牌宽度

``` vue
<template>
<div>
    <p>samll尺寸</p>
    <u-linear-layout>
        <u-checkbox-card size="small" :data="data"></u-checkbox-card>
    </u-linear-layout>
    <p>默认尺寸</p>
    <u-linear-layout>
        <u-checkbox-card :data="data"></u-checkbox-card>
    </u-linear-layout>
    <p>large尺寸</p>
    <u-linear-layout>
        <u-checkbox-card size="large" :data="data"></u-checkbox-card>
    </u-linear-layout>
    <p>huge尺寸</p>
    <u-linear-layout>
        <u-checkbox-card size="huge" :data="data"></u-checkbox-card>
    </u-linear-layout>
    <p>自适应尺寸</p>
    <u-linear-layout style="width:900px;">
        <u-checkbox-card size="auto" :data="data"></u-checkbox-card>
    </u-linear-layout>
</div>
</template>
<script>
export default {
    data() {
        return {
            value: [],
            data: [{
                text: 'jiande-private',
                value: '1',
            },{
                text: 'jiande-public',
                value: '2',
            },{
                text: 'yiqiao-public',
                value: '3',
            },{
                text: 'liantong-public',
                value: '4',
            },{
                text: 'region-1',
                value: '5',
            }],
        };
    },
};
</script>
```
### 固定每行展示数据个数

``` vue
<template>
<u-linear-layout>
    <u-checkbox-card :column="3" size="large" :data="data"></u-checkbox-card>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: [],
            data: [{
                text: 'jiande-private',
                value: '1',
            },{
                text: 'jiande-public',
                value: '2',
            },{
                text: 'yiqiao-public',
                value: '3',
            },{
                text: 'liantong-public',
                value: '4',
            },{
                text: 'region-1',
                value: '5',
            }],
        };
    },
};
</script>
```

### 表单校验
由于checkbox card的value值是数组类型的，这里需要指定type=‘array’同时需要使用validator做判断
``` vue
<template>
<u-form>
    <u-form-item label="选择环境" placement="bottom" layout="block" :rules="rules">
        <u-checkbox-card :column="3" size="large" :data="data"></u-checkbox-card>
    </u-form-item>
</u-form>
</template>
<script>
export default {
    data() {
        return {
            value: [],
            data: [{
                text: 'jiande-private',
                value: '1',
            },{
                text: 'jiande-public',
                value: '2',
            },{
                text: 'yiqiao-public',
                value: '3',
            },{
                text: 'liantong-public',
                value: '4',
            },{
                text: 'region-1',
                value: '5',
            }],
            rules: [{
                type: 'array',
                message: '环境为必填项',
                trigger: 'input',
                validator: (rule, value, callback) => {
                    if (!value||value.length === 0) {
                        console.log('error');
                        callback(new Error());
                    } else
                        callback();
                },
            }]
        };
    },
};
</script>
```

### 部分选项不可选择
``` vue
<template>
<u-linear-layout>
    <u-checkbox-card v-model="value" :data="data"></u-checkbox-card>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: ['2', '3'],
            data: [{
                text: 'jiande-private',
                value: '1',
            },{
                text: 'jiande-public',
                value: '2',
                disabled: true,
            },{
                text: 'yiqiao-public',
                value: '3',
            },{
                text: 'liantong-public',
                value: '4',
                 disabled: true,
            },{
                text: 'region-1',
                value: '5',
            }],
        };
    },
};
</script>
```


### 自定义placeholder
``` vue
<template>
<u-linear-layout>
    <u-checkbox-card v-model="value" :data="data">
        <p style="margin: 0px;" slot="placeholder">自定义placeholder内容</p>
    </u-checkbox-card>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: [],
            data: [],
        };
    },
};
</script>
```
### 自定义选择项
``` vue
<template>
<u-linear-layout>
    <u-checkbox-card :column="3" size="large" v-model="value" :data="data">
        <div style="display: inline-block;" slot-scope="scope">
            {{scope.data.text}}
            <span v-if="scope.data.error" style="width: 10px;height: 10px;padding: 0px;border-radius: 100%;display: inline-block;background: #ff8a7a;"></span>
        </div>
    </u-checkbox-card>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: [],
            data: [{
                text: 'jiande-private',
                value: '1',
            },{
                text: 'jiande-public',
                value: '2',
                disabled: true,
            },{
                text: 'yiqiao-public',
                value: '3',
                error: true,
            },{
                text: 'liantong-public',
                value: '4',
                disabled: true,
            },{
                text: 'region-1',
                value: '5',
            }],
        };
    },
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data | array |  | `[]` | 可供选择的数据 |
| value.sync, v-model | Array |  |  | 被选中数据 |
| placeholder | string |  |  | 没有数据时的占位显示 |
| size | enum | `'normal'` | `'normal'` | 卡片尺寸 |
| column | number |  |  | 一行固定多少个选择项，如果不传则固定单项宽度为158px，每行个数自适应行宽 |
| converter | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` |  | value 与 values 的转换器。可选值：`'join'`表示将 values 数组 join 之后变成 value。也可以用`:`修改分隔符，类似 Vue 的指令参数。也可以传入一个包含 { get, set } 的一个对象 |

### Slots

#### (default)

插入  HTML或 `Component`, 可展示额外内容。

#### placeholder

空数据占位显示内容

### Events

#### @input

输入时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | string | 输入框的值 |
| senderVM | UInput | 发送事件实例 |

#### @change

值变化时触发。（注意：与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | string | 改变后的值 |
| $event.oldValue | string | 旧的值 |
| senderVM | UInput | 发送事件实例 |

