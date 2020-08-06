<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# USelect 选择框

- [示例](#示例)
    - [基本用法](#基本用法)
    - [禁用状态、禁用某一项](#禁用状态-禁用某一项)
    - [分隔符](#分隔符)
    - [分组](#分组)
    - [可清除](#可清除)
    - [多项选择](#多项选择)
    - [Tags 风格](#tags-风格)
    - [可以重复](#可以重复)
    - [其它样式](#其它样式)
    - [修改尺寸](#修改尺寸)
    - [过滤（搜索）](#过滤搜索)
    - [后端过滤（搜索）](#后端过滤搜索)
    - [自动补充](#自动补充)
    - [前端加载更多](#前端加载更多)
    - [后端加载更多](#后端加载更多)
- [USelect API](#uselect-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
    - [Methods](#methods)
- [USelectItem API](#uselectitem-api)
    - [Props/Attrs](#propsattrs-2)
    - [Slots](#slots-2)
    - [Events](#events-2)
- [USelectGroup API](#uselectgroup-api)
    - [Props/Attrs](#propsattrs-3)
    - [Slots](#slots-3)
- [USelectDivider API](#uselectdivider-api)


**表单控件**, **行内展示**

下拉选择框，支持单选、多选、搜索等功能，用于代替原生的选择框。

## 示例
### 基本用法

默认为单选模式，通过`placeholder`属性设置初始占位符，使用`v-model`双向绑定值。

添加选择项有三种方式：

#### tag 方式

使用`<u-select-item>`组件添加。在有少量静态数据的时候，推荐使用这种方式。

``` html
<u-linear-layout>
    <u-select>
        <u-select-item value="java">Java</u-select-item>
        <u-select-item value="nodejs">Node.js</u-select-item>
        <u-select-item value="go">Go</u-select-item>
        <u-select-item value="python">Python</u-select-item>
        <u-select-item value="ruby">Ruby</u-select-item>
        <u-select-item value="csharp">C#</u-select-item>
        <u-select-item value="php">PHP</u-select-item>
    </u-select>
    <u-select placeholder="设置占位符">
        <u-select-item value="java">Java</u-select-item>
        <u-select-item value="nodejs">Node.js</u-select-item>
        <u-select-item value="go">Go</u-select-item>
        <u-select-item value="python">Python</u-select-item>
        <u-select-item value="ruby">Ruby</u-select-item>
        <u-select-item value="csharp">C#</u-select-item>
        <u-select-item value="php">PHP</u-select-item>
    </u-select>
</u-linear-layout>
```

#### data-source 数组

在有较大量数据时，推荐使用这种方式。

直接向`data-source`属性中传入`Array<Item>`格式的数组，每个`Item`为这样格式的对象`{ text: string, value: any, disabled: boolean, ... }`。

``` vue
<template>
<u-select v-model="value" :data-source="list"></u-select>
</template>
<script>
export default {
    data() {
        return {
            value: 'cpp',
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

#### data-source 函数

向`data-source`属性中传入一个加载函数，这种方式会自动处理 loading 加载、error 错误等效果，并且在下文中的加载更多、过滤（搜索）等功能均需要采用这种传入数据的方式。

加载函数的格式是这样的

``` ts
(params) => Promise<Array<Item> | { data: Array<Item>, total: number } | { data: Array<Item>, last: boolean }>
```

组件会给加载函数提供过滤（搜索）、加载更多等参数，要求返回一个如上的 Promise。

``` vue
<template>
<u-select v-model="value" :data-source="load"></u-select>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));
// 模拟数据服务
const mockService = {
    load() {
        return mockRequest([
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
        ]);
    },
};

export default {
    data() {
        return {
            value: 'cpp',
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

#### 指定选项字段名

如果你的数据中选项文本和值的字段不一定叫`'text'`和`'value'`，可以通过`text-field`和`value-field`两个属性快速指定。

``` vue
<template>
<u-select v-model="value" :data-source="list" text-field="name" value-field="name"></u-select>
</template>
<script>
export default {
    data() {
        return {
            value: 'C++',
            list: [
                { name: 'Batch' },
                { name: 'C' },
                { name: 'C#' },
                { name: 'C++' },
                { name: 'CSS' },
                { name: 'Clojure' },
                { name: 'CoffeeScript' },
                { name: 'Coq' },
                { name: 'Diff' },
                { name: 'Dockerfile' },
                { name: 'F#' },
                { name: 'Go' },
                { name: 'Groovy' },
                { name: 'HLSL' },
                { name: 'HTML' },
                { name: 'Handlebars' },
                { name: 'Ignore' },
                { name: 'Ini' },
                { name: 'JSON' },
                { name: 'Java' },
                { name: 'JavaScript' },
                { name: 'Jinja' },
                { name: 'Jupyter' },
                { name: 'Less' },
                { name: 'Log' },
                { name: 'Lua' },
                { name: 'Makefile' },
                { name: 'Markdown' },
                { name: 'Objective-C' },
                { name: 'Objective-C++' },
                { name: 'PHP' },
                { name: 'Perl' },
                { name: 'PowerShell' },
                { name: 'Properties' },
                { name: 'Pug' },
                { name: 'Python' },
                { name: 'R' },
                { name: 'Razor' },
                { name: 'Ruby' },
                { name: 'Rust' },
                { name: 'SCSS' },
                { name: 'SQL' },
                { name: 'SVG' },
                { name: 'Shaderlab' },
                { name: 'Shell Script' },
                { name: 'Swift' },
                { name: 'TypeScript' },
                { name: 'Visual Basic' },
                { name: 'Vue' },
                { name: 'XML' },
                { name: 'XSL' },
                { name: 'YAML' },
            ],
        };
    },
};
</script>
```

### 禁用状态、禁用某一项

``` vue
<template>
<u-linear-layout>
    <u-select v-model="value" :data-source="list" disabled></u-select>
    <u-select v-model="value" :data-source="list"></u-select>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: 'nodejs',
            list: [
                { text: 'Java', value: 'java' },
                { text: 'Node.js', value: 'nodejs' },
                { text: 'Go', value: 'go' },
                { text: 'Python', value: 'python' },
                { text: 'Ruby', value: 'ruby', disabled: true },
                { text: 'C#', value: 'csharp' },
                { text: 'PHP', value: 'php', disabled: true },
            ],
        };
    },
};
</script>
```

#### 为空禁用

有时在没有数据的情况下，不希望用户进行选择。使用`empty-disabled`属性自动禁用掉这种情况。

``` html
<u-select value="nut" empty-disabled placeholder="暂无选项"></u-select>
```

### 分隔符

``` html
<u-select value="nut">
    <u-select-item value="cup">水杯</u-select-item>
    <u-select-item value="toothbrush">牙刷</u-select-item>
    <u-select-divider></u-select-divider>
    <u-select-item value="nut">坚果</u-select-item>
    <u-select-item value="towel">毛巾</u-select-item>
    <u-select-item value="sofa">沙发</u-select-item>
</u-select>
```

### 分组

``` html
<u-select>
    <u-select-group title="洗具">
        <u-select-item>毛巾</u-select-item>
        <u-select-item>牙刷</u-select-item>
    </u-select-group>
    <u-select-group title="杯具">
        <u-select-item>牙缸</u-select-item>
        <u-select-item>水杯</u-select-item>
    </u-select-group>
    <u-select-group title="餐具">
        <u-select-item>筷子</u-select-item>
        <u-select-item>碗</u-select-item>
    </u-select-group>
</u-select>
```

### 可清除

``` vue
<template>
<u-linear-layout>
    <u-select v-model="value" :data-source="list" clearable></u-select>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: 'nodejs',
            list: [
                { text: 'Java', value: 'java' },
                { text: 'Node.js', value: 'nodejs' },
                { text: 'Go', value: 'go' },
                { text: 'Python', value: 'python' },
                { text: 'Ruby', value: 'ruby', disabled: true },
                { text: 'C#', value: 'csharp' },
                { text: 'PHP', value: 'php', disabled: true },
            ],
        };
    },
};
</script>
```

### 多项选择

使用`multiple`属性开启多选模式。注意：此时`v-model`双向绑定的类型为一个数组`Array<any>`。

``` vue
<template>
<u-select multiple v-model="values" title="多选列表" :data-source="list"></u-select>
</template>
<script>
export default {
    data() {
        return {
            values: ['c', 'cpp'],
            list: [
                { text: 'Java', value: 'java' },
                { text: 'Node.js', value: 'nodejs' },
                { text: 'Go', value: 'go' },
                { text: 'Python', value: 'python' },
                { text: 'Ruby', value: 'ruby', disabled: true },
                { text: 'C', value: 'c' },
                { text: 'C#', value: 'csharp' },
                { text: 'C++', value: 'cpp' },
                { text: 'PHP', value: 'php', disabled: true },
            ],
        };
    },
};
</script>
```

### Tags 风格

Tags 过多时如何显示。

``` vue
<template>
<u-linear-layout>
    <u-select multiple tags-overflow="hidden" v-model="values" :data-source="list" placeholder="过多时省略"></u-select>
    <u-select multiple tags-overflow="collapse" v-model="values" :data-source="list" placeholder="过多时收缩"></u-select>
    <u-select multiple tags-overflow="visible" v-model="values" :data-source="list" placeholder="过多时显示"></u-select>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            values: ['c', 'csharp', 'cpp'],
            list: [
                { text: 'Java', value: 'java' },
                { text: 'Node.js', value: 'nodejs' },
                { text: 'Go', value: 'go' },
                { text: 'Python', value: 'python' },
                { text: 'Ruby', value: 'ruby', disabled: true },
                { text: 'C', value: 'c' },
                { text: 'C#', value: 'csharp' },
                { text: 'C++', value: 'cpp' },
                { text: 'PHP', value: 'php', disabled: true },
            ],
        };
    },
};
</script>
```

### 可以重复

设置`duplicated`属性可以让选项重复。

``` vue
<template>
<u-select multiple duplicated v-model="values" :data-source="list"></u-select>
</template>
<script>
export default {
    data() {
        return {
            values: ['c', 'csharp', 'cpp'],
            list: [
                { text: 'Java', value: 'java' },
                { text: 'Node.js', value: 'nodejs' },
                { text: 'Go', value: 'go' },
                { text: 'Python', value: 'python' },
                { text: 'Ruby', value: 'ruby', disabled: true },
                { text: 'C', value: 'c' },
                { text: 'C#', value: 'csharp' },
                { text: 'C++', value: 'cpp' },
                { text: 'PHP', value: 'php', disabled: true },
            ],
        };
    },
};
</script>
```

### 其它样式

#### Flag

``` html
<u-select value="C">
    <u-select-item value="A">苹果</u-select-item>
    <u-select-item value="B" flag>香蕉</u-select-item>
    <u-select-item value="C" flag="默认选项">蛋糕</u-select-item>
</u-select>
```

#### Label

``` html
<u-select value="C" label="CPU">
    <u-select-item value="A">1核</u-select-item>
    <u-select-item value="B">2核</u-select-item>
    <u-select-item value="C">4核</u-select-item>
</u-select>
```

### 修改尺寸

通过`size`属性设置`mini`、`small`、`normal`、`medium`、`large`、`huge`、`full`几种尺寸，宽高可以自由组合。

如果以上几种预设不能满足，也可以直接添加`style="width: 240px;"`来设置。

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-select size="mini" placeholder="mini">
            <u-select-item>C</u-select-item>
            <u-select-item>C#</u-select-item>
            <u-select-item>C++</u-select-item>
        </u-select>
        <u-select size="mini small" placeholder="mini small">
            <u-select-item>C</u-select-item>
            <u-select-item>C#</u-select-item>
            <u-select-item>C++</u-select-item>
        </u-select>
        <u-select size="mini normal" placeholder="mini normal">
            <u-select-item>C</u-select-item>
            <u-select-item>C#</u-select-item>
            <u-select-item>C++</u-select-item>
        </u-select>
        <u-select size="mini medium" placeholder="mini medium">
            <u-select-item>C</u-select-item>
            <u-select-item>C#</u-select-item>
            <u-select-item>C++</u-select-item>
        </u-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-select size="small mini" placeholder="small mini">
            <u-select-item>C</u-select-item>
            <u-select-item>C#</u-select-item>
            <u-select-item>C++</u-select-item>
        </u-select>
        <u-select size="small" placeholder="small">
            <u-select-item>C</u-select-item>
            <u-select-item>C#</u-select-item>
            <u-select-item>C++</u-select-item>
        </u-select>
        <u-select size="small normal" placeholder="small normal">
            <u-select-item>C</u-select-item>
            <u-select-item>C#</u-select-item>
            <u-select-item>C++</u-select-item>
        </u-select>
        <u-select size="small medium" placeholder="small medium">
            <u-select-item>C</u-select-item>
            <u-select-item>C#</u-select-item>
            <u-select-item>C++</u-select-item>
        </u-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-select size="normal mini" placeholder="normal mini">
            <u-select-item>C</u-select-item>
            <u-select-item>C#</u-select-item>
            <u-select-item>C++</u-select-item>
        </u-select>
        <u-select size="normal small" placeholder="normal small">
            <u-select-item>C</u-select-item>
            <u-select-item>C#</u-select-item>
            <u-select-item>C++</u-select-item>
        </u-select>
        <u-select size="normal" placeholder="normal">
            <u-select-item>C</u-select-item>
            <u-select-item>C#</u-select-item>
            <u-select-item>C++</u-select-item>
        </u-select>
        <u-select size="normal medium" placeholder="normal medium">
            <u-select-item>C</u-select-item>
            <u-select-item>C#</u-select-item>
            <u-select-item>C++</u-select-item>
        </u-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-select size="medium mini" placeholder="medium mini">
            <u-select-item>C</u-select-item>
            <u-select-item>C#</u-select-item>
            <u-select-item>C++</u-select-item>
        </u-select>
        <u-select size="medium small" placeholder="medium small">
            <u-select-item>C</u-select-item>
            <u-select-item>C#</u-select-item>
            <u-select-item>C++</u-select-item>
        </u-select>
        <u-select size="medium normal" placeholder="medium normal">
            <u-select-item>C</u-select-item>
            <u-select-item>C#</u-select-item>
            <u-select-item>C++</u-select-item>
        </u-select>
        <u-select size="medium" placeholder="medium">
            <u-select-item>C</u-select-item>
            <u-select-item>C#</u-select-item>
            <u-select-item>C++</u-select-item>
        </u-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-select size="large" placeholder="large">
            <u-select-item>C</u-select-item>
            <u-select-item>C#</u-select-item>
            <u-select-item>C++</u-select-item>
        </u-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-select size="huge" placeholder="huge">
            <u-select-item>C</u-select-item>
            <u-select-item>C#</u-select-item>
            <u-select-item>C++</u-select-item>
        </u-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-select size="huge full" placeholder="huge full">
            <u-select-item>C</u-select-item>
            <u-select-item>C#</u-select-item>
            <u-select-item>C++</u-select-item>
        </u-select>
    </u-linear-layout>
</u-linear-layout>
```

### 过滤（搜索）

#### 前端过滤（搜索）

如果数据源本身为前端数据或是从后端一次性拿过来的，设置`filterable`属性即可开启过滤功能。用于快速查找选项。

``` vue
<template>
<u-linear-layout>
    <u-select v-model="value" :data-source="list" filterable clearable placeholder="前端过滤"></u-select>
    <u-select v-model="values" multiple :data-source="list" filterable clearable placeholder="前端过滤（多选）" style="width: 240px"></u-select>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: 'css',
            values: ['c', 'cpp'],
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

#### 匹配方式

在`match-method`属性中可以配置字符串的匹配方式，常见的有`includes`、`startsWith`、`endsWith`，也可以传一个函数。

``` vue
<template>
<u-linear-layout>
    <u-select :data-source="list" filterable match-method="includes" placeholder="包括即可（默认）"></u-select>
    <u-select :data-source="list" filterable match-method="startsWith" placeholder="只匹配开头"></u-select>
    <u-select :data-source="list" filterable match-method="endsWith" placeholder="只匹配结尾"></u-select>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
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

#### 区分大小写

默认不区分大小写，可用`case-sensitive`属性开启。

``` vue
<template>
<u-linear-layout>
    <u-select :data-source="list" filterable placeholder="不区分大小写（默认）"></u-select>
    <u-select :data-source="list" filterable case-sensitive placeholder="区分大小写"></u-select>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
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

如果需要通过后端接口进行过滤，在开启`filterable`属性的基础上，还要开启`remote-filtering`属性。

这时需要用最前面提到的 data-source 函数的方式传入数据。

加载函数的格式是这样的`({ filterText: string }) => Promise<Array<Item | { data: Array<Item>, total: number } | { data: Array<Item>, last: boolean }>>`。组件会给加载函数提供过滤输入框中的文本，要求返回一个 Promise。

可以看下面的示例，在数据栏中`result`为最新一次模拟请求的返回数据。

``` vue
<template>
<u-linear-layout>
<u-select v-model="value" :data-source="load"
    filterable remote-filtering
    clearable placeholder="后端过滤">
</u-select>
<u-select v-model="values" multiple :data-source="load"
    filterable remote-filtering
    clearable placeholder="后端过滤（多选）"
    style="width: 240px"></u-select>
</u-linear-layout>
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
            value: 'css',
            values: ['c', 'cpp'],
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

### 自动补充

在过滤（搜索）的基础上，

使用`auto-complete`属性可以开启自动补充功能，可以将不在选项中的文本添加成选项。

``` vue
<template>
<u-linear-layout>
    <u-select v-model="value" :data-source="load" filterable clearable auto-complete placeholder="自动补充"></u-select>
    <u-select v-model="values" multiple :data-source="load" filterable clearable auto-complete placeholder="自动补充（多选）" style="width: 240px"></u-select>
</u-linear-layout>
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
            value: 'css',
            values: ['c', 'cpp'],
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

### 前端加载更多

如果数据源本身为前端数据或是从后端一次性拿过来的，设置`pageable`或`pageable="auto-more"`即可开启前端加载更多功能，用`page-size`属性修改分页大小。

``` vue
<template>
<u-select v-model="value" :data-source="list" placeholder="前端加载更多"
    pageable :page-size="10"></u-select>
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
            value: undefined,
            values: [],
            list,
        };
    },
};
</script>
```

### 后端加载更多

如果需要通过后端接口进行加载更多，在开启`pageable`属性的基础上，还要开启`remote-paging`属性。

这时需要用最前面提到的 data-source 函数的方式传入数据。

加载函数的格式是这样的：

``` ts
({ paging: {
    size: number, // 每页大小
    number: number, // 页数。从1开始计
    offset: number, // 偏移量：(number - 1) * size
    limit: number, // 同 size
} }) => Promise<Array<Item> | { data: Array<Item>, total: number } | { data: Array<Item>, last: boolean }>
```

组件会给加载函数提供分页信息或加载位置的参数，要求返回如上的一个 Promise。翻页是否到底，如果 Promise 的结果为：

- `{ data: Array<Item>, total: number }`，根据 total 数值判断是否翻到最底部
- `{ data: Array<Item>, last: boolean }`，根据 last 布尔值判断是否为最后一次
- `Array<Item>`，则根据数组为空判断为最后一次

可以看下面的示例，在数据栏中`result`为最新一次模拟请求的返回数据。

``` vue
<template>
<u-linear-layout>
    <u-select multiple :data-source="load1" placeholder="返回带 total"
        pageable remote-paging></u-select>
    <u-select multiple :data-source="load2" placeholder="返回带 last"
        pageable remote-paging></u-select>
    <u-select multiple :data-source="load3" placeholder="只返回数组"
        pageable remote-paging></u-select>
</u-linear-layout>
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
    loadWithTotal(offset, limit) {
        return mockRequest({
            total: mockData.length,
            data: mockData.slice(offset, offset + limit),
        });
    },
    loadWithLast(offset, limit) {
        return mockRequest({
            last: offset + limit >= mockData.length,
            data: mockData.slice(offset, offset + limit),
        });
    },
    loadOnlyArray(offset, limit) {
        return mockRequest(mockData.slice(offset, offset + limit));
    },
};

export default {
    data() {
        return {
            result1: undefined,
            result2: undefined,
            result3: undefined,
        };
    },
    methods: {
        load1({ paging }) {
            return mockService.loadWithTotal(paging.offset, paging.limit)
                .then((result1) => this.result1 = result1); // 这句只是在 Demo 中打印一下数据，方便查看
        },
        load2({ paging }) {
            return mockService.loadWithLast(paging.offset, paging.limit)
                .then((result2) => this.result2 = result2); // 这句只是在 Demo 中打印一下数据，方便查看
        },
        load3({ paging }) {
            return mockService.loadOnlyArray(paging.offset, paging.limit)
                .then((result3) => this.result3 = result3); // 这句只是在 Demo 中打印一下数据，方便查看
        },
    },
};
</script>
```

## USelect API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | any |  |  | 当前选择的值 |
| text-field | string |  | `'text'` | 选项文本的字段名。 |
| value-field | string |  | `'value'` | 选项值的字段名。 |
| data-source | Array\<Item\> \| Function \| object \| DataSource |  |  | 选择框的数据源。数组方式表示直接的数据，函数需要返回一个 Promise，详见文档示例。 |
| cancelable | boolean |  | `false` | 是否可以取消选择。 |
| multiple | boolean |  | `false` | 是否可以多选。 |
| placeholder | string |  | `'请选择'` | 选择框的占位符。 |
| loading-text | string |  | `'加载中...'` | 正在加载中的文字。使用分页加载时才会出现。 |
| empty-text | string |  | `'暂无数据'` | 暂无数据时的文字。 |
| empty-disabled | boolean |  | `false` | 没有数据时，自动禁用。 |
| initial-load | boolean |  | `true` | 是否在初始时立即加载。 |
| pageable | boolean |  | `false` | 是否需要分页。 |
| page-size.sync | number |  | `50` | 分页大小。 |
| remote-paging | boolean |  | `false` | 是否使用后端分页。 |
| clearable | boolean |  | `false` | 是否有清除按钮。 |
| filterable | boolean |  | `false` | 是否使用输入框进行过滤。 |
| match-method | string \| Function |  | `'includes'` | 过滤时的匹配方法。 |
| case-sensitive | string \| Function |  | `'includes'` | 过滤时大小写是否敏感 |
| remote-filtering | boolean |  | `false` | 是否使用后端过滤。 |
| auto-complete | boolean |  | `false` | 是否开启自动补充模式，用于增加列表中没有的项。 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |
| size | size | `'mini'`, `'small'`, `'normal'`, `'medium'`, `'large'`, `'huge'`, `'full'` | `'normal'` | 大小扩展，支持一个值：`'mini'`, `'small'`, `'normal'`, `'medium'`, `'large'`, `'huge'`, `'full'`，或两个值的组合，前者表示高度，后者表示宽度，类似CSS的padding书写格式 |
| opened.sync | boolean |  | `false` | 切换弹出/关闭状态 |

### Slots

#### (default)

插入`<u-select-item>`、`<u-select-divider>`或`<u-select-group>`子组件。

### Events

#### @before-select

选择某一项前触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 选择项的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 选择项相关对象 |
| $event.itemVM | SelectItem | 选择项子组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | USelect | 发送事件实例 |

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | 选择项的值 |
| senderVM | USelect | 发送事件实例 |

#### @select

选择某一项后触发。单选模式中：

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 改变后的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 选择项相关对象 |
| $event.oldItem | object | 旧的选择项相关对象 |
| $event.itemVM | USelectItem | 选择项子组件 |
| $event.oldVM | USelectItem | 旧的选择项子组件 |
| senderVM | USelect | 发送事件实例 |

#### @change

选择值改变时触发。单选模式中：

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 选择项的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 选择项相关对象 |
| $event.oldItem | object | 旧的选择项相关对象 |
| $event.itemVM | USelectItem | 选择项子组件 |
| $event.oldVM | USelectItem | 旧的选择项子组件 |
| senderVM | USelect | 发送事件实例 |

#### @before-open

弹出前触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止弹出流程 |
| senderVM | USelect | 发送事件实例 |

#### @open

弹出后触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event |  | 空 |
| senderVM | USelect | 发送事件实例 |

#### @before-close

关闭前触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止关闭流程 |
| senderVM | USelect | 发送事件实例 |

#### @close

关闭时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event |  | 空 |
| senderVM | USelect | 发送事件实例 |

#### @before-load

加载前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止加载流程 |
| senderVM | USelect | 发送事件实例 |

#### @load

加载后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event |  | 空 |
| senderVM | USelect | 发送事件实例 |

Methods

#### open()

弹出选择框。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### close()

关闭选择框。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### toggle(opened?)

切换弹出/关闭状态。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| opened? | boolean |  | 可选。弹出/关闭状态 |

#### load()

带缓存地加载

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### reload()

清除缓存，重新加载

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

## USelectItem API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | any |  |  | 此项的值。 |
| disabled | boolean |  | `false` | 禁用此项。 |
| item | object |  |  | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发。 |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 此项的值 |
| $event.item | object | 此项的相关对象 |
| $event.itemVM | SelectItem | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | USelectItem | 发送事件实例 |

## USelectGroup API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  | 显示的标题 |

### Slots

#### (default)

插入`<u-select-item>`或`<u-select-divider>`子组件。

#### title

自定义标题文本。

#### extra

在右侧可以附加内容。

## USelectDivider API

暂无
