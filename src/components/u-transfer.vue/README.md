<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UTransfer 穿梭框

- [示例](#示例)
    - [基本用法](#基本用法)
    - [添加头部](#添加头部)
    - [添加 loading](#添加-loading)
    - [指定选项字段名](#指定选项字段名)
    - [禁用某一项](#禁用某一项)
    - [修改尺寸](#修改尺寸)
    - [过滤（搜索）](#过滤搜索)
    - [分页与加载更多](#分页与加载更多)
    - [综合示例](#综合示例)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
    - [Methods](#methods)

双栏穿梭选择框，常用于将多个项目从一边移动到另一边。

## 示例
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

<!-- ### 自定义内容

`` vue
<template>
<u-transfer :source="source" :target="target" show-head>
    <template #text="{ item }">
        <h3 :class="$style.title">{{ item.text }}</h3>
        <u-text wrap="ellipsis">{{ (item.text + ' ').repeat(5) }}</u-text>
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
}
</style>
`` -->

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

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| source.sync | Array\<{ text, value }\> |  |  | 原数据列表 |
| target.sync | Array\<{ text, value }\> |  |  | 目标数据列表 |
| text-field | string |  | `'text'` | 选项文本的字段名 |
| value-field | string |  | `'value'` | 选项值的字段名 |
| show-head | boolean |  | `false` | 是否显示头部 |
| source-title | string |  | `'列表'` | 左侧列表标题 |
| target-title | string |  | `'列表'` | 右侧列表标题 |
| show-foot | boolean |  | `false` | 是否显示尾部 |
| filterable | boolean |  | `false` | 是否可以过滤（搜索），开启将会显示搜索框。 |
| placeholder | string |  | `'请输入'` | 搜索框的占位符 |
| clearable | boolean |  | `false` | 搜索框是否有清除按钮 |
| match-method | string, Function |  | `'includes'` | 过滤时的匹配方法 |
| case-sensitive | string, Function |  | `'includes'` | 过滤时大小写是否敏感 |
| pageable | boolean |  | `false` | 是否需要分页 |
| page-size | number |  | `50` | 分页大小 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |

### Slots

#### (default)



### Events

#### @transfer

数据转移时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.source | Array\<{ text, value }\> | 原数据列表 |
| $event.target | Array\<{ text, value }\> | 目标数据列表 |
| $event.transfer | Array\<{ text, value }\> | 移动的项 |
| $event.transferValues | Array | 移动项的值 |
| senderVM | UTransfer | 发送事件实例 |

#### @change

数据改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.source | Array\<{ text, value }\> | 原数据列表 |
| $event.target | Array\<{ text, value }\> | 目标数据列表 |
| $event.transfer | Array\<{ text, value }\> | 移动的项 |
| $event.transferValues | Array | 移动项的值 |
| senderVM | UTransfer | 发送事件实例 |

Methods

#### forward(values)

从左向右转移数据。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| values | Array\<string\> |  | 指定转移选项值的列表。如果不填，则为按左列表框选中项值的列表。 |

#### reverse(values)

从右向左转移数据。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| values | Array\<string\> |  | 指定转移选项值的列表。如果不填，则为按右列表框选中项值的列表。 |

#### transfer(direction, values)

转移指定项的数据。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| direction | enum | `'forward'` | 方向，`forward`表示从左向右，`reverse`表示从右向左。 |
| values | Array\<string\> |  | 指定转移选项值的列表。 |

