### 数据选择框

``` vue
<template>
<u-select placeholder="数据选择框" v-model="value" :data-source="load"></u-select>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));
// 模拟数据服务
const mockService = {
    load() {
        return mockRequest([
            { text: 'Java', value: 'java' },
            { text: 'Node.js', value: 'nodejs' },
            { text: 'Go', value: 'go' },
            { text: 'Python', value: 'python' },
            { text: 'Ruby', value: 'ruby', disabled: true },
            { text: 'C', value: 'c' },
            { text: 'C#', value: 'csharp' },
            { text: 'C++', value: 'cpp' },
            { text: 'PHP', value: 'php', disabled: true },
        ]);
    },
};

export default {
    data() {
        return {
            value: undefined,
        };
    },
    methods: {
        load() {
            return mockService.load();
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
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));
// 模拟数据服务
const mockService = {
    load() {
        return mockRequest([
            { text: 'Java', value: 'java' },
            { text: 'Node.js', value: 'nodejs' },
            { text: 'Go', value: 'go' },
            { text: 'Python', value: 'python' },
            { text: 'Ruby', value: 'ruby', disabled: true },
            { text: 'C', value: 'c' },
            { text: 'C#', value: 'csharp' },
            { text: 'C++', value: 'cpp' },
            { text: 'PHP', value: 'php', disabled: true },
        ]);
    },
};

export default {
    data() {
        return {
            values: [],
        };
    },
    methods: {
        load() {
            return mockService.load();
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
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));
// 模拟数据服务
const mockService = {
    load() {
        return mockRequest([
            { text: 'Java', value: 'java' },
            { text: 'Node.js', value: 'nodejs' },
            { text: 'Go', value: 'go' },
            { text: 'Python', value: 'python' },
            { text: 'Ruby', value: 'ruby', disabled: true },
            { text: 'C', value: 'c' },
            { text: 'C#', value: 'csharp' },
            { text: 'C++', value: 'cpp' },
            { text: 'PHP', value: 'php', disabled: true },
        ]);
    },
};

export default {
    data() {
        return {
            value: undefined,
        };
    },
    methods: {
        load() {
            return mockService.load();
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
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));
// 模拟数据服务
const mockService = {
    load() {
        return mockRequest([
            { text: 'Java', value: 'java' },
            { text: 'Node.js', value: 'nodejs' },
            { text: 'Go', value: 'go' },
            { text: 'Python', value: 'python' },
            { text: 'Ruby', value: 'ruby', disabled: true },
            { text: 'C', value: 'c' },
            { text: 'C#', value: 'csharp' },
            { text: 'C++', value: 'cpp' },
            { text: 'PHP', value: 'php', disabled: true },
        ]);
    },
};

export default {
    data() {
        return {
            value: undefined,
        };
    },
    methods: {
        load() {
            return mockService.load();
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
            list: [
                { text: 'Batch', value: 'bat' },
                { text: 'C', value: 'c' },
                { text: 'C#', value: 'csharp' },
                { text: 'C++', value: 'cpp' },
                { text: 'CSS', value: 'css' },
                { text: 'Clojure', value: 'clojure' },
                { text: 'CoffeeScript', value: 'coffeescript' },
                { text: 'Coq', value: 'coq' },
                { text: 'Diff', value: 'diff' },
                { text: 'Dockerfile', value: 'dockerfile' },
                { text: 'F#', value: 'fshape' },
                { text: 'Go', value: 'go' },
                { text: 'Groovy', value: 'groovy' },
                { text: 'HLSL', value: 'hlsl' },
                { text: 'HTML', value: 'html' },
                { text: 'Handlebars', value: 'Handlebars' },
                { text: 'Ignore', value: 'ignore' },
                { text: 'Ini', value: 'ini' },
                { text: 'JSON', value: 'json' },
                { text: 'Java', value: 'java' },
                { text: 'JavaScript', value: 'javascript' },
                { text: 'Jinja', value: 'jinja' },
                { text: 'Jupyter', value: 'jupyter' },
                { text: 'Less', value: 'less' },
                { text: 'Log', value: 'log' },
                { text: 'Lua', value: 'lua' },
                { text: 'Makefile', value: 'makefile' },
                { text: 'Markdown', value: 'markdown' },
                { text: 'Objective-C', value: 'objective-c' },
                { text: 'Objective-C++', value: 'objective-cpp' },
                { text: 'PHP', value: 'php' },
                { text: 'Perl', value: 'perl' },
                { text: 'PowerShell', value: 'powershell' },
                { text: 'Properties', value: 'properties' },
                { text: 'Pug', value: 'jade' },
                { text: 'Python', value: 'python' },
                { text: 'R', value: 'r' },
                { text: 'Razor', value: 'razor' },
                { text: 'Ruby', value: 'ruby' },
                { text: 'Rust', value: 'rust' },
                { text: 'SCSS', value: 'scss' },
                { text: 'SQL', value: 'sql' },
                { text: 'SVG', value: 'svg' },
                { text: 'Shaderlab', value: 'shaderlab' },
                { text: 'Shell Script', value: 'shellscript' },
                { text: 'Swift', value: 'swift' },
                { text: 'TypeScript', value: 'typescript' },
                { text: 'Visual Basic', value: 'vb' },
                { text: 'Vue', value: 'vue' },
                { text: 'XML', value: 'xml' },
                { text: 'XSL', value: 'xsl' },
                { text: 'YAML', value: 'yaml' },
            ],
        };
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
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));
// 模拟后端数据
const mockData = [
    { text: 'Batch', value: 'bat' },
    { text: 'C', value: 'c' },
    { text: 'C#', value: 'csharp' },
    { text: 'C++', value: 'cpp' },
    { text: 'CSS', value: 'css' },
    { text: 'Clojure', value: 'clojure' },
    { text: 'CoffeeScript', value: 'coffeescript' },
    { text: 'Coq', value: 'coq' },
    { text: 'Diff', value: 'diff' },
    { text: 'Dockerfile', value: 'dockerfile' },
    { text: 'F#', value: 'fshape' },
    { text: 'Go', value: 'go' },
    { text: 'Groovy', value: 'groovy' },
    { text: 'HLSL', value: 'hlsl' },
    { text: 'HTML', value: 'html' },
    { text: 'Handlebars', value: 'Handlebars' },
    { text: 'Ignore', value: 'ignore' },
    { text: 'Ini', value: 'ini' },
    { text: 'JSON', value: 'json' },
    { text: 'Java', value: 'java' },
    { text: 'JavaScript', value: 'javascript' },
    { text: 'Jinja', value: 'jinja' },
    { text: 'Jupyter', value: 'jupyter' },
    { text: 'Less', value: 'less' },
    { text: 'Log', value: 'log' },
    { text: 'Lua', value: 'lua' },
    { text: 'Makefile', value: 'makefile' },
    { text: 'Markdown', value: 'markdown' },
    { text: 'Objective-C', value: 'objective-c' },
    { text: 'Objective-C++', value: 'objective-cpp' },
    { text: 'PHP', value: 'php' },
    { text: 'Perl', value: 'perl' },
    { text: 'PowerShell', value: 'powershell' },
    { text: 'Properties', value: 'properties' },
    { text: 'Pug', value: 'jade' },
    { text: 'Python', value: 'python' },
    { text: 'R', value: 'r' },
    { text: 'Razor', value: 'razor' },
    { text: 'Ruby', value: 'ruby' },
    { text: 'Rust', value: 'rust' },
    { text: 'SCSS', value: 'scss' },
    { text: 'SQL', value: 'sql' },
    { text: 'SVG', value: 'svg' },
    { text: 'Shaderlab', value: 'shaderlab' },
    { text: 'Shell Script', value: 'shellscript' },
    { text: 'Swift', value: 'swift' },
    { text: 'TypeScript', value: 'typescript' },
    { text: 'Visual Basic', value: 'vb' },
    { text: 'Vue', value: 'vue' },
    { text: 'XML', value: 'xml' },
    { text: 'XSL', value: 'xsl' },
    { text: 'YAML', value: 'yaml' },
];
// 模拟数据服务
const mockService = {
    loadPartial(keyword) {
        // 在这里模拟了一个后端过滤数据的请求
        return mockRequest({
            total: mockData.length,
            data: mockData.filter((item) => item.text.includes(keyword)),
        });
    },
};

export default {
    data() {
        return {
            value: undefined,
            result: undefined,
        };
    },
    methods: {
        load({ filterText }) {
            return mockService.loadPartial(filterText)
                .then((result) => this.result = result); // 这句只是在 Demo 中打印一下数据，方便查看
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
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));
// 模拟构造数量较多的 500 条后端数据
const mockData = (() => {
    let mockData = [];
    const total = 500;
    for (let i = 1; i <= total; i++)
        mockData.push('item' + i);
    return mockData.map((text) => ({ text, value: text }));
})();
// 模拟数据服务
const mockService = {
    loadWithTotal(keyword, offset, limit) {
        return mockRequest({
            total: mockData.length,
            data: mockData.filter((item) => item.text.includes(keyword)).slice(offset, offset + limit),
        });
    },
};

export default {
    methods: {
        load({ paging, filterText }) {
            return mockService.loadWithTotal(filterText, paging.offset, paging.limit);
        },
    },
};
</script>
```
