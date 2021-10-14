### 自定义内容

``` vue
<template>
<u-grid-layout :repeat="2">
    <u-grid-layout-column>
        <u-grid-view show-head title="单选列表" :data-source="list">
            <template #item="{ item }">
                <h3 :class="$style.title">{{ item.text }}</h3>
                <u-text wrap="ellipsis">{{ item.text + ' is a specfic language with some features that ...' }}</u-text>
            </template>
        </u-grid-view>
    </u-grid-layout-column>
    <u-grid-layout-column>
        <u-grid-view multiple show-head title="多选列表" :data-source="list">
            <template #item="{ item }">
                <h3 :class="$style.title">{{ item.text }}</h3>
                <u-text wrap="ellipsis">{{ item.text + ' is a specfic language with some features that ...' }}</u-text>
            </template>
        </u-grid-view>
    </u-grid-layout-column>
</u-grid-layout>
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
<style module>
.title {
    margin: 0;
}
</style>
```

### 自定义内容

``` vue
<template>
<u-grid-layout :repeat="2">
    <u-grid-layout-column>
        <u-grid-view :repeat="4" readonly reaonly-mode="initial" show-head title="单选列表" :data-source="list">
            <template #item="{ item }">
                <u-card :title="item.text">{{ item.text + ' is a specfic language with some features that ...' }}</u-card>
            </template>
        </u-grid-view>
    </u-grid-layout-column>
    <u-grid-layout-column>
        <u-grid-view :repeat="4" readonly reaonly-mode="initial" multiple show-head title="多选列表" :data-source="list">
            <template #item="{ item }">
                <u-card :title="item.text">{{ item.text + ' is a specfic language with some features that ...' }}</u-card>
            </template>
        </u-grid-view>
    </u-grid-layout-column>
</u-grid-layout>
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
<style module>
.title {
    margin: 0;
}
</style>
```