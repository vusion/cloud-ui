# 步骤条 Steps

## 示例
### 基本形式

步骤从`0`开始。

``` html
<u-steps :value="1">
    <u-step title="Step1">Content1</u-step>
    <u-step title="Step2">Content2</u-step>
    <u-step title="Step3">Content3</u-step>
</u-steps>
```

### 自定义标题

``` html
<u-steps :value="1">
    <u-step>
        <span slot="title">Step <u-label>1</u-label></span>
        Content1
    </u-step>
    <u-step>
        <span slot="title">Step <u-label>2</u-label></span>
        Content2
    </u-step>
    <u-step>
        <span slot="title">Step <u-label>3</u-label></span>
        Content3
    </u-step>
</u-steps>
```

### 自适应
```vue
<template>
    <div>
        <u-button @click="toggle">点击显示弹窗</u-button>
        <u-modal :visible.sync="modalVisible" title="创建" size="large" ok-button="" cancel-button="">
            <u-steps :value="1" size="auto">
                <u-step title="Step1">Content1</u-step>
                <u-step title="Step2">Content2</u-step>
                <u-step title="Step3">Content3</u-step>
            </u-steps>
        </u-modal>
    </div>
</template>
<script>
export default{
    data() {
        return {
            modalVisible: false,
        };
    },
    methods: {
        toggle() {
            this.modalVisible = !this.modalVisible;
        }
    },
}
</script>
```

## Steps API
### Props/Attrs
| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Number | `0` | 当前步骤数 |
| size | String | `` | 值为`'auto'`时，采用百分比布局，默认是不开启的 |

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
