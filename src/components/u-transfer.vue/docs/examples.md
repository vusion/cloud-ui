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

### 指定选项字段名

如果你的数据中选项文本和值的字段不一定叫`'text'`和`'value'`，可以通过`text-field`和`value-field`两个属性快速指定。

``` vue
<template>
<u-transfer :source="source" :target="target" text-field="name" value-field="name"></u-transfer>
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

``` vue
<template>
<u-transfer :source="source" :target="target">
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

### 分页

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

``` vue
<template>
<u-transfer :source="source" :target="target" show-head filterable pageable :page-size="10"></u-transfer>
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
