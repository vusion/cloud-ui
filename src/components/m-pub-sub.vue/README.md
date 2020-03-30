<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# MPublisher 发布订阅模式

在 Vue 原生的功能中，不管是`$emit`和`$on`，还是`provide`和`inject`，在组件间传递变量都有些局限，特别是在两个不相关的组件之间。

本组件包含了两个 Mixins：MPublisher 和 MSubscriber，用于在任意两个组件之间通过发布订阅模式传递数据。

一种用法是，直接使用 Mixin 之后的四个方法`$publish`、`$unpublish`、`$subscribe`和`$unsubscribe`。

另一种用法是，Mixin 支持选项`publish`为一个对象，键为需要发布的主题，值为需要监听的表达式或函数。在 Mixin MSubscriber 时，选项`subscribe`为一个对象，键为需要订阅的主题，值为订阅时执行的方法。

> 注意：这对 Mixins 和普通的发布订阅模式有一点区别是，订阅时会执行上一次发布的结果，方便一些异步订阅的场景。

## 示例

### 使用方法

下面的例子中展示了，如何将一个实例中的数据或状态，通过发布订阅者模式，传递到另一个实例中。

``` vue
<template>
<u-button @click="onClick">发布</u-button>
</template>
<script>
import { MPublisher } from 'cloud-ui.vusion';

export default {
    mixins: [MPublisher],
    data() {
        return {
            value: undefined,
        };
    },
    methods: {
        onClick() {
            this.value = this.value === 'red' ? 'blue' : 'red';
            this.$publish('color', this.value);
        },
    },
};
</script>
```

``` vue
<template>
<div :class="$style.root" :style="{ background: received }">{{ String(received) }}</div>
</template>
<script>
import { MSubscriber } from 'cloud-ui.vusion';

export default {
    mixins: [MSubscriber],
    data() {
        return {
            received: undefined,
        };
    },
    created() {
        this.$subscribe('color', (value) => {
            this.received = value;
        });
    },
};
</script>
<style module>
.root {
    color: white;
    padding: 10px;
}
</style>
```

### 使用 Option

下面的例子中展示了，如何将一个实例中的数据或状态，通过发布订阅者模式，传递到另一个实例中。

``` vue
<template>
<u-button @click="onClick">发布</u-button>
</template>
<script>
import { MPublisher } from 'cloud-ui.vusion';

export default {
    mixins: [MPublisher],
    data() {
        return {
            value: undefined,
        };
    },
    publish: {
        someTopic: 'value',
    },
    methods: {
        onClick() {
            this.value = this.value === 'red' ? 'blue' : 'red';
        },
    },
};
</script>
```

``` vue
<template>
<div :class="$style.root" :style="{ background: received }">{{ String(received) }}</div>
</template>
<script>
import { MSubscriber } from 'cloud-ui.vusion';

export default {
    mixins: [MSubscriber],
    data() {
        return {
            received: undefined,
        };
    },
    subscribe: {
        someTopic(value) {
            this.received = value;
        },
    },
};
</script>
<style module>
.root {
    color: white;
    padding: 10px;
}
</style>
```

## MPublisher API
### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| publish | { \[prop: string\]: string \| Function \| object } |  | 键为需要发布的主题，值为需要监听的表达式或函数。值也可以为一个对象`{ expOrFn: String \| Function, deep: Boolean, immediate: Boolean }`，`deep`和`immediate`与官方`watch`中的意义相同。 |

### Methods

#### $publish(topic, data)

发布话题

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| topic | string |  | 话题名称 |
| data | any |  | 话题数据 |

#### $unpublish(topic)

取消发布话题

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| topic | string |  | 话题名称 |

## MSubscriber API
### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| subscribe | { \[prop: string\]: string \| Function \| object } |  | 键为需要订阅的主题，值为订阅时执行的方法。值也可以为一个对象`{ handler: String \| Function, once: Boolean }`，`once`开启，则只订阅一次。 |

### Methods

#### $subscribe(topic, func)

订阅话题

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| topic | string |  | 话题名称 |
| func | Function |  | 订阅方法 |

#### $unsubscribe(topic, func)

取消订阅话题

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| topic | string |  | 话题名称 |
| func | Function |  | 订阅方法 |
