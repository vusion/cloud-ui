# 步骤条 Steps

## 示例
### 基本形式
```vue
<template>
<div>
    <u-steps :value.sync="value" @change="onChange($event)">
        <u-step title="step1"><h1>Content1</h1></u-step>
        <u-step title="step2">Content2</u-step>
        <u-step title="step3">Content3</u-step>
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

### 隐藏部分项

``` vue
<template>
<div>
    <u-steps :value.sync="value" @change="onChange($event)">
        <u-step title="step1">Content1</u-step>
        <u-step title="step2" hidden>Content2</u-step>
        <u-step title="step3">Content3</u-step>
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
| value.sync, v-model | Number | `0` | 当前步骤数 |

### Slots
| Slot | Description |
| ---- | ----------- |
| (default) | `<u-step>`子组件 |

### Events

#### @before-change

当前step改变前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | String | 当前step数 |
| oldValue | String | 旧step数 |
| $event.preventDefault | Function | 阻止选择流程 |

#### @change

当前step改变后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | String | 当前step数 |
| oldValue | String | 旧step数 |


## Step API
### Props/Attrs
| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | Any |  | 步骤名 |
| hidden | Boolean | `false` | 是否隐藏 |

### Slots
| Slot | Description |
| ---- | ----------- |
| (default) | 文本或html |