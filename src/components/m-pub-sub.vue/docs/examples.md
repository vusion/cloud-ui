
### 使用方法

下面的例子中展示了，如何将一个实例中的数据或状态，通过发布订阅者模式，传递到另一个实例中。

``` vue
<template>
<u-button @click="onClick">发布</u-button>
</template>
<script>
import { MPublisher } from '@@';

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
import { MSubscriber } from '@@';

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
import { MPublisher } from '@@';

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
import { MSubscriber } from '@@';

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
