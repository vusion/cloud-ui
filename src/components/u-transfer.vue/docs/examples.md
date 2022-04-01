### 基本用法

向`data-source`属性中传入`Array<Item>`格式的数组，每个`Item`为这样格式的对象`{ text: string, value: any, disabled: boolean, ... }`。

``` vue
<template>
<u-transfer :source="source" :target="target"></u-transfer>
</template>
<script>
export default {
    data() {
        return {
            source: [
                { text: 'C', value: 'c' },
                { text: 'C#', value: 'csharp' },
                { text: 'C++', value: 'cpp' },
                { text: 'Coq', value: 'coq' },
                { text: 'Go', value: 'go' },
                { text: 'Handlebars', value: 'Handlebars' },
                { text: 'JSON', value: 'json' },
                { text: 'Java', value: 'java' },
                { text: 'Makefile', value: 'makefile' },
                { text: 'Markdown', value: 'markdown' },
                { text: 'Objective-C', value: 'objective-c' },
                { text: 'Objective-C++', value: 'objective-cpp' },
                { text: 'PHP', value: 'php' },
                { text: 'Perl', value: 'perl' },
                { text: 'PowerShell', value: 'powershell' },
                { text: 'Python', value: 'python' },
                { text: 'Ruby', value: 'ruby' },
                { text: 'SQL', value: 'sql' },
                { text: 'SVG', value: 'svg' },
                { text: 'Shell Script', value: 'shellscript' },
                { text: 'Swift', value: 'swift' },
                { text: 'Visual Basic', value: 'vb' },
                { text: 'XML', value: 'xml' },
                { text: 'YAML', value: 'yaml' },
            ],
            target: [
                { text: 'CSS', value: 'css' },
                { text: 'HTML', value: 'html' },
                { text: 'JavaScript', value: 'javascript' },
                { text: 'Vue', value: 'vue' },
            ],
        };
    },
};
</script>
```

### 添加头部

使用`show-head`属性可以添加头部，使用`source-title`和`target-title`属性修改列表标题。

``` vue
<template>
<u-transfer :source="source" :target="target" show-head source-title="左列表" target-title="右列表"></u-transfer>
</template>
<script>
export default {
    data() {
        return {
            source: [
                { text: 'C', value: 'c' },
                { text: 'C#', value: 'csharp' },
                { text: 'C++', value: 'cpp' },
                { text: 'Coq', value: 'coq' },
                { text: 'Go', value: 'go' },
                { text: 'Handlebars', value: 'Handlebars' },
                { text: 'JSON', value: 'json' },
                { text: 'Java', value: 'java' },
                { text: 'Makefile', value: 'makefile' },
                { text: 'Markdown', value: 'markdown' },
                { text: 'Objective-C', value: 'objective-c' },
                { text: 'Objective-C++', value: 'objective-cpp' },
                { text: 'PHP', value: 'php' },
                { text: 'Perl', value: 'perl' },
                { text: 'PowerShell', value: 'powershell' },
                { text: 'Python', value: 'python' },
                { text: 'Ruby', value: 'ruby' },
                { text: 'SQL', value: 'sql' },
                { text: 'SVG', value: 'svg' },
                { text: 'Shell Script', value: 'shellscript' },
                { text: 'Swift', value: 'swift' },
                { text: 'Visual Basic', value: 'vb' },
                { text: 'XML', value: 'xml' },
                { text: 'YAML', value: 'yaml' },
            ],
            target: [
                { text: 'CSS', value: 'css' },
                { text: 'HTML', value: 'html' },
                { text: 'JavaScript', value: 'javascript' },
                { text: 'Vue', value: 'vue' },
            ],
        };
    },
};
</script>
```

### 添加 loading

异步加载时，可以用`loading`属性设置加载态。

``` vue
<template>
    <u-linear-layout direction="vertical" gap="small">
        <div><u-button @click="load()">加载</u-button></div>
        <u-transfer :source="source" :target="target" show-head :loading="loading"></u-transfer>
    </u-linear-layout>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));
// 模拟数据服务
const mockService = {
    loadSource() {
        return mockRequest([
            { text: 'C', value: 'c' },
            { text: 'C#', value: 'csharp' },
            { text: 'C++', value: 'cpp' },
            { text: 'Coq', value: 'coq' },
            { text: 'Go', value: 'go' },
            { text: 'Handlebars', value: 'Handlebars' },
            { text: 'JSON', value: 'json' },
            { text: 'Java', value: 'java' },
            { text: 'Makefile', value: 'makefile' },
            { text: 'Markdown', value: 'markdown' },
            { text: 'Objective-C', value: 'objective-c' },
            { text: 'Objective-C++', value: 'objective-cpp' },
            { text: 'PHP', value: 'php' },
            { text: 'Perl', value: 'perl' },
            { text: 'PowerShell', value: 'powershell' },
            { text: 'Python', value: 'python' },
            { text: 'Ruby', value: 'ruby' },
            { text: 'SQL', value: 'sql' },
            { text: 'SVG', value: 'svg' },
            { text: 'Shell Script', value: 'shellscript' },
            { text: 'Swift', value: 'swift' },
            { text: 'Visual Basic', value: 'vb' },
            { text: 'XML', value: 'xml' },
            { text: 'YAML', value: 'yaml' },
        ], 1000);
    },
    loadTarget() {
        return mockRequest([
                { text: 'CSS', value: 'css' },
                { text: 'HTML', value: 'html' },
                { text: 'JavaScript', value: 'javascript' },
                { text: 'Vue', value: 'vue' },
            ], 1000);
    },
};

export default {
    data() {
        return {
            source: undefined,
            target: undefined,
            loading: false,
        };
    },
    methods: {
        load() {
            this.loading = true;
            return Promise.all([
                mockService.loadSource(),
                mockService.loadTarget(),
            ]).then(([source, target]) => {
                this.loading = false;
                this.source = source;
                this.target = target;
            });
        },
    }
};
</script>
<style module>
.result {
    height: var(--list-view-height);
    padding: var(--list-view-item-padding);
    border: var(--border-width-base) solid var(--border-color-base);
    color: var(--color-light);
}
</style>
```

### 指定选项字段名

如果你的数据中选项文本和值的字段不一定叫`'text'`和`'value'`，可以通过`text-field`和`value-field`两个属性快速指定。

``` vue
<template>
<u-transfer :source="source" :target="target" show-head text-field="name" value-field="name"></u-transfer>
</template>
<script>
export default {
    data() {
        return {
            source: [
                { name: 'C' },
                { name: 'C#' },
                { name: 'C++' },
                { name: 'Coq' },
                { name: 'Go' },
                { name: 'Handlebars' },
                { name: 'JSON' },
                { name: 'Java' },
                { name: 'Makefile' },
                { name: 'Markdown' },
                { name: 'Objective-C' },
                { name: 'Objective-C++' },
                { name: 'PHP' },
                { name: 'Perl' },
                { name: 'PowerShell' },
                { name: 'Python' },
                { name: 'Ruby' },
                { name: 'SQL' },
                { name: 'SVG' },
                { name: 'Shell Script' },
                { name: 'Swift' },
                { name: 'Visual Basic' },
                { name: 'XML' },
                { name: 'YAML' },
            ],
            target: [
                { name: 'CSS' },
                { name: 'HTML' },
                { name: 'JavaScript' },
                { name: 'TypeScript' },
                { name: 'Vue' },
            ],
        };
    },
};
</script>
```

### 禁用某一项

在 item 对象中添加`disabled: true` 可以禁用掉对应选项。

``` vue
<template>
<u-transfer :source="source" :target="target" show-head></u-transfer>
</template>
<script>
export default {
    data() {
        return {
            source: [
                { text: 'C', value: 'c' },
                { text: 'C#', value: 'csharp' },
                { text: 'C++', value: 'cpp' },
                { text: 'Coq', value: 'coq', disabled: true },
                { text: 'Go', value: 'go' },
                { text: 'Handlebars', value: 'Handlebars', disabled: true },
                { text: 'JSON', value: 'json' },
                { text: 'Java', value: 'java' },
                { text: 'Makefile', value: 'makefile' },
                { text: 'Markdown', value: 'markdown' },
                { text: 'Objective-C', value: 'objective-c' },
                { text: 'Objective-C++', value: 'objective-cpp' },
                { text: 'PHP', value: 'php' },
                { text: 'Perl', value: 'perl' },
                { text: 'PowerShell', value: 'powershell' },
                { text: 'Python', value: 'python' },
                { text: 'Ruby', value: 'ruby' },
                { text: 'SQL', value: 'sql' },
                { text: 'SVG', value: 'svg' },
                { text: 'Shell Script', value: 'shellscript' },
                { text: 'Swift', value: 'swift' },
                { text: 'Visual Basic', value: 'vb' },
                { text: 'XML', value: 'xml' },
                { text: 'YAML', value: 'yaml' },
            ],
            target: [
                { text: 'CSS', value: 'css', disabled: true },
                { text: 'HTML', value: 'html', disabled: true },
                { text: 'JavaScript', value: 'javascript' },
                { text: 'Vue', value: 'vue' },
            ],
        };
    },
};
</script>
```

### 自定义内容

``` vue
<template>
<u-transfer :source="source" :target="target" show-head>
    <template #item="{ item }">
        <i :class="$style.title">{{ item.text }}</i>
    </template>
</u-transfer>
</template>
<script>
export default {
    data() {
        return {
            source: [
                { text: 'C', value: 'c' },
                { text: 'C#', value: 'csharp' },
                { text: 'C++', value: 'cpp' },
                { text: 'Coq', value: 'coq' },
                { text: 'Go', value: 'go' },
                { text: 'Handlebars', value: 'Handlebars' },
                { text: 'JSON', value: 'json' },
                { text: 'Java', value: 'java' },
                { text: 'Makefile', value: 'makefile' },
                { text: 'Markdown', value: 'markdown' },
                { text: 'Objective-C', value: 'objective-c' },
                { text: 'Objective-C++', value: 'objective-cpp' },
                { text: 'PHP', value: 'php' },
                { text: 'Perl', value: 'perl' },
                { text: 'PowerShell', value: 'powershell' },
                { text: 'Python', value: 'python' },
                { text: 'Ruby', value: 'ruby' },
                { text: 'SQL', value: 'sql' },
                { text: 'SVG', value: 'svg' },
                { text: 'Shell Script', value: 'shellscript' },
                { text: 'Swift', value: 'swift' },
                { text: 'Visual Basic', value: 'vb' },
                { text: 'XML', value: 'xml' },
                { text: 'YAML', value: 'yaml' },
            ],
            target: [
                { text: 'CSS', value: 'css' },
                { text: 'HTML', value: 'html' },
                { text: 'JavaScript', value: 'javascript' },
                { text: 'Vue', value: 'vue' },
            ],
        };
    },
};
</script>
<style module>
.title {
    margin: 0;
    font-weight: bolder;
}
</style>
```

<!-- ### 表单验证

`` vue
<template>
<u-form-item label="选择开发语言" required>
    <u-transfer :source="source" :target="target"></u-transfer>
</u-form-item>
</template>
<script>
export default {
    data() {
        return {
            source: [
                { text: 'C', value: 'c' },
                { text: 'C#', value: 'csharp' },
                { text: 'C++', value: 'cpp' },
                { text: 'CSS', value: 'css', disabled: true },
                { text: 'Coq', value: 'coq', disabled: true },
                { text: 'Go', value: 'go' },
                { text: 'HTML', value: 'html', disabled: true },
                { text: 'Handlebars', value: 'Handlebars', disabled: true },
                { text: 'JSON', value: 'json' },
                { text: 'Java', value: 'java' },
                { text: 'JavaScript', value: 'javascript' },
                { text: 'Makefile', value: 'makefile' },
                { text: 'Markdown', value: 'markdown' },
                { text: 'Objective-C', value: 'objective-c' },
                { text: 'Objective-C++', value: 'objective-cpp' },
                { text: 'PHP', value: 'php' },
                { text: 'Perl', value: 'perl' },
                { text: 'PowerShell', value: 'powershell' },
                { text: 'Python', value: 'python' },
                { text: 'Ruby', value: 'ruby' },
                { text: 'SQL', value: 'sql' },
                { text: 'SVG', value: 'svg' },
                { text: 'Shell Script', value: 'shellscript' },
                { text: 'Swift', value: 'swift' },
                { text: 'Visual Basic', value: 'vb' },
                { text: 'Vue', value: 'vue' },
                { text: 'XML', value: 'xml' },
                { text: 'YAML', value: 'yaml' },
            ],
            target: [],
        };
    },
};
</script>
``-->

### 修改尺寸

通过`size`属性设置`normal`、`large`、`huge`、`full`、`auto`几种尺寸，宽高可以自由组合。

``` vue
<template>
<u-transfer size="large" :source="source" :target="target" show-head></u-transfer>
</template>
<script>
export default {
    data() {
        return {
            source: [
                { text: 'C', value: 'c' },
                { text: 'C#', value: 'csharp' },
                { text: 'C++', value: 'cpp' },
                { text: 'Coq', value: 'coq', disabled: true },
                { text: 'Go', value: 'go' },
                { text: 'Handlebars', value: 'Handlebars', disabled: true },
                { text: 'JSON', value: 'json' },
                { text: 'Java', value: 'java' },
                { text: 'Makefile', value: 'makefile' },
                { text: 'Markdown', value: 'markdown' },
                { text: 'Objective-C', value: 'objective-c' },
                { text: 'Objective-C++', value: 'objective-cpp' },
                { text: 'PHP', value: 'php' },
                { text: 'Perl', value: 'perl' },
                { text: 'PowerShell', value: 'powershell' },
                { text: 'Python', value: 'python' },
                { text: 'Ruby', value: 'ruby' },
                { text: 'SQL', value: 'sql' },
                { text: 'SVG', value: 'svg' },
                { text: 'Shell Script', value: 'shellscript' },
                { text: 'Swift', value: 'swift' },
                { text: 'Visual Basic', value: 'vb' },
                { text: 'XML', value: 'xml' },
                { text: 'YAML', value: 'yaml' },
            ],
            target: [
                { text: 'CSS', value: 'css', disabled: true },
                { text: 'HTML', value: 'html', disabled: true },
                { text: 'JavaScript', value: 'javascript' },
                { text: 'Vue', value: 'vue' },
            ],
        };
    },
};
</script>
```

### 过滤（搜索）

设置`filterable`属性即可开启过滤功能。用于快速查找选项。

``` vue
<template>
<u-transfer :source="source" :target="target" show-head filterable></u-transfer>
</template>
<script>
export default {
    data() {
        return {
            source: [
                { text: 'C', value: 'c' },
                { text: 'C#', value: 'csharp' },
                { text: 'C++', value: 'cpp' },
                { text: 'Coq', value: 'coq' },
                { text: 'Go', value: 'go' },
                { text: 'Handlebars', value: 'Handlebars' },
                { text: 'JSON', value: 'json' },
                { text: 'Java', value: 'java' },
                { text: 'Makefile', value: 'makefile' },
                { text: 'Markdown', value: 'markdown' },
                { text: 'Objective-C', value: 'objective-c' },
                { text: 'Objective-C++', value: 'objective-cpp' },
                { text: 'PHP', value: 'php' },
                { text: 'Perl', value: 'perl' },
                { text: 'PowerShell', value: 'powershell' },
                { text: 'Python', value: 'python' },
                { text: 'Ruby', value: 'ruby' },
                { text: 'SQL', value: 'sql' },
                { text: 'SVG', value: 'svg' },
                { text: 'Shell Script', value: 'shellscript' },
                { text: 'Swift', value: 'swift' },
                { text: 'Visual Basic', value: 'vb' },
                { text: 'XML', value: 'xml' },
                { text: 'YAML', value: 'yaml' },
            ],
            target: [
                { text: 'CSS', value: 'css' },
                { text: 'HTML', value: 'html' },
                { text: 'JavaScript', value: 'javascript' },
                { text: 'Vue', value: 'vue' },
            ],
        };
    },
};
</script>
```

#### 匹配方式

在`match-method`属性中可以配置字符串的匹配方式，常见的有`includes`、`startsWith`、`endsWith`，也可以传一个函数。

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-transfer :source="source" :target="target" show-head filterable match-method="includes" placeholder="包括即可（默认）"></u-transfer>
    <u-transfer :source="source" :target="target" show-head filterable match-method="startsWith" placeholder="只匹配开头"></u-transfer>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            source: [
                { text: 'C', value: 'c' },
                { text: 'C#', value: 'csharp' },
                { text: 'C++', value: 'cpp' },
                { text: 'Coq', value: 'coq' },
                { text: 'Go', value: 'go' },
                { text: 'Handlebars', value: 'Handlebars' },
                { text: 'JSON', value: 'json' },
                { text: 'Java', value: 'java' },
                { text: 'Makefile', value: 'makefile' },
                { text: 'Markdown', value: 'markdown' },
                { text: 'Objective-C', value: 'objective-c' },
                { text: 'Objective-C++', value: 'objective-cpp' },
                { text: 'PHP', value: 'php' },
                { text: 'Perl', value: 'perl' },
                { text: 'PowerShell', value: 'powershell' },
                { text: 'Python', value: 'python' },
                { text: 'Ruby', value: 'ruby' },
                { text: 'SQL', value: 'sql' },
                { text: 'SVG', value: 'svg' },
                { text: 'Shell Script', value: 'shellscript' },
                { text: 'Swift', value: 'swift' },
                { text: 'Visual Basic', value: 'vb' },
                { text: 'XML', value: 'xml' },
                { text: 'YAML', value: 'yaml' },
            ],
            target: [
                { text: 'CSS', value: 'css' },
                { text: 'HTML', value: 'html' },
                { text: 'JavaScript', value: 'javascript' },
                { text: 'Vue', value: 'vue' },
            ],
        };
    },
};
</script>
```

#### 区分大小写

默认不区分大小写，可用`case-sensitive`属性开启。

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-transfer :source="source" :target="target" show-head filterable placeholder="不区分大小写（默认）"></u-transfer>
    <u-transfer :source="source" :target="target" show-head filterable case-sensitive placeholder="区分大小写"></u-transfer>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            source: [
                { text: 'C', value: 'c' },
                { text: 'C#', value: 'csharp' },
                { text: 'C++', value: 'cpp' },
                { text: 'Coq', value: 'coq' },
                { text: 'Go', value: 'go' },
                { text: 'Handlebars', value: 'Handlebars' },
                { text: 'JSON', value: 'json' },
                { text: 'Java', value: 'java' },
                { text: 'Makefile', value: 'makefile' },
                { text: 'Markdown', value: 'markdown' },
                { text: 'Objective-C', value: 'objective-c' },
                { text: 'Objective-C++', value: 'objective-cpp' },
                { text: 'PHP', value: 'php' },
                { text: 'Perl', value: 'perl' },
                { text: 'PowerShell', value: 'powershell' },
                { text: 'Python', value: 'python' },
                { text: 'Ruby', value: 'ruby' },
                { text: 'SQL', value: 'sql' },
                { text: 'SVG', value: 'svg' },
                { text: 'Shell Script', value: 'shellscript' },
                { text: 'Swift', value: 'swift' },
                { text: 'Visual Basic', value: 'vb' },
                { text: 'XML', value: 'xml' },
                { text: 'YAML', value: 'yaml' },
            ],
            target: [
                { text: 'CSS', value: 'css' },
                { text: 'HTML', value: 'html' },
                { text: 'JavaScript', value: 'javascript' },
                { text: 'Vue', value: 'vue' },
            ],
        };
    },
};
</script>
```

### 分页与加载更多

设置`pageable`或`pageable="pagination"`即可开启分页功能，用`page-size`属性修改分页大小。

``` vue
<template>
<u-transfer :source="source" :target="target" show-head pageable :page-size="10"></u-transfer>
</template>
<script>
export default {
    data() {
        // 构造数量较多的 500 条数据
        let list = [];
        for (let i = 1; i <= 100; i++)
            list.push('item' + i);
        list = list.map((text) => ({ text, value: text }));

        return {
            source: list,
            target: [],
        };
    },
};
</script>
```

#### 加载更多

设置`pageable="load-more"`可开启手动点击加载更多功能，设置`pageable="auto-more"`可开启滚动自动加载更多功能。

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-transfer :source="source" :target="target" show-head pageable="load-more"></u-transfer>
    <u-transfer :source="source" :target="target" show-head pageable="auto-more"></u-transfer>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        // 构造数量较多的 500 条数据
        let list = [];
        for (let i = 1; i <= 500; i++)
            list.push('item' + i);
        list = list.map((text) => ({ text, value: text }));


        return {
            source: list,
            target: [],
        };
    },
};
</script>
```

### 综合示例

下面是一个使用了修改尺寸、添加头部、过滤（搜索）、分页功能的综合示例。

``` vue
<template>
<u-transfer size="large" :source="source" :target="target" show-head
    filterable pageable :page-size="20">
</u-transfer>
</template>
<script>
export default {
    data() {
        // 构造数量较多的 500 条数据
        let list = [];
        for (let i = 1; i <= 100; i++)
            list.push('item' + i);
        list = list.map((text) => ({ text, value: text }));

        return {
            source: list,
            target: [],
        };
    },
};
</script>
```
