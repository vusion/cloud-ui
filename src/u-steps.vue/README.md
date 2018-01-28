# 步骤条 Steps

## 示例
### 基本形式
```vue
<template>
<div>
    <u-steps :value.sync="value" @change="onChange($event)">
        <u-step title="Step1"><h1>Content1</h1></u-step>
        <u-step title="Step2">Content2</u-step>
        <u-step title="Step3">Content3</u-step>
    </u-steps>
    <u-linear-layout>
        <u-button @click="value+=1">+1</u-button>
        <u-button @click="value-=1">-1</u-button>
        <u-button>{{value}}</u-button>
    </u-linear-layout>
</div>
</template>
<script>
export default {
    data() {
        return {
            value: 0,
        };
    },
    methods: {
        onChange($event) {
            console.log('change', $event)
        }
    }
};
</script>
```

## Steps API
### Props/Attrs
| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Number | `0` | 当前步骤数 |

### Slots

#### (default)

插入`<u-step>`子组件。

### Events

#### @change

步骤数改变后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Number | 当前步骤数 |
| oldValue | Number | 旧的步骤数 |


## Step API
### Props/Attrs
| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String |  | 步骤名 |

### Slots

#### (default)

插入文本或HTML。

#### title

自定义标题文本。
