### 数据选择框

``` vue
<template>
<u-select placeholder="数据选择框" v-model="value" :data-source="load"></u-select>
</template>
<script>
export default {
    data() {
        return {
            value: undefined,
        };
    },
    methods: {
        load() {
            return this.$services.mock.lang.loadShort();
        },
    }
};
</script>
```

### 标签选择框

``` html
<u-select placeholder="标签选择框">
    <u-select-item value="java">Java</u-select-item>
    <u-select-item value="nodejs">Node.js</u-select-item>
    <u-select-item value="go">Go</u-select-item>
    <u-select-item value="python">Python</u-select-item>
    <u-select-item value="ruby">Ruby</u-select-item>
    <u-select-item value="csharp">C#</u-select-item>
    <u-select-item value="php">PHP</u-select-item>
</u-select>
```

### 多项选择框

``` vue
<template>
<u-select size="normal medium" multiple clearable placeholder="多项选择框" v-model="values" :data-source="load"></u-select>
</template>
<script>
export default {
    data() {
        return {
            values: [],
        };
    },
    methods: {
        load() {
            return this.$services.mock.lang.loadShort();
        },
    }
};
</script>
```

### 小型选择框

``` vue
<template>
<u-select size="small" placeholder="小型选择框" v-model="value" :data-source="load"></u-select>
</template>
<script>
export default {
    data() {
        return {
            value: undefined,
        };
    },
    methods: {
        load() {
            return this.$services.mock.lang.loadShort();
        },
    }
};
</script>
```

### 大型选择框

``` vue
<template>
<u-select size="large" placeholder="数据选择框" v-model="value" :data-source="load"></u-select>
</template>
<script>
export default {
    data() {
        return {
            value: undefined,
        };
    },
    methods: {
        load() {
            return this.$services.mock.lang.loadShort();
        },
    }
};
</script>
```

### 前端过滤（搜索）

如果数据源本身为前端数据或是从后端一次性拿过来的，设置`filterable`属性即可开启过滤功能。用于快速查找选项。

``` vue
<template>
<u-select v-model="value" :data-source="list" filterable clearable placeholder="前端过滤（搜索）"></u-select>
</template>
<script>
export default {
    data() {
        return {
            value: undefined,
            list: undefined,
        };
    },
    created() {
        this.load();
    },
    methods: {
        load() {
            return this.$services.mock.lang.loadAll()
                .then((result) => this.list = result);
        },
    },
};
</script>
```

### 后端过滤（搜索）

``` vue
<template>
<u-select v-model="value" :data-source="load"
    filterable remote-filtering
    clearable placeholder="后端过滤（搜索）">
</u-select>
</template>
<script>
export default {
    data() {
        return {
            value: undefined,
            result: undefined,
        };
    },
    methods: {
        load({ filterText }) {
            return this.$services.mock.lang.loadPartial(filterText);
        },
    }
};
</script>
```

### 后端加载更多与过滤（搜索）

``` vue
<template>
<u-select :data-source="load" placeholder="后端加载更多与过滤（搜索）"
    pageable remote-paging
    filterable remote-filtering clearable></u-select>
</template>
<script>
export default {
    methods: {
        load({ paging, filterText }) {
            return this.$services.mock.lang.loadWithTotal(filterText, paging.offset, paging.limit);
        },
    },
};
</script>
```
