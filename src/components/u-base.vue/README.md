<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UBase 基础

- [示例](#示例)
    - [标题](#标题)
    - [链接](#链接)
    - [段落](#段落)
    - [水平线](#水平线)
    - [特殊文字](#特殊文字)
    - [列表](#列表)
    - [描述列表](#描述列表)
    - [引用块](#引用块)
    - [代码块](#代码块)
    - [按键](#按键)
- [API]()


Cloud UI 在 Normalize.css 的基础上，对元素做了基础的排版。

## 示例
### 标题

``` html
<h1>H1 标题1 <small>小标题1</small></h1>
<h2>H2 标题2 <small>小标题2</small></h2>
<h3>H3 标题3 <small>小标题3</small></h3>
<h4>H4 标题4 <small>小标题4</small></h4>
<h5>H5 标题5 <small>小标题5</small></h5>
<h6>H6 标题6 <small>小标题6</small></h6>
```

### 链接

由于`<a>`在组件中用途广泛，在业务中请使用[u-link](#components/u-link)。

### 段落

``` html
<p>轻舟微服务是围绕应用和微服务，通过云原生技术帮助用户快速实现易接入、易运维的微服务解决方案。用户可以轻松部署、更新、测试以及治理其微服务应用。</p>
<p>平台完全基于开源技术构建，提供了简洁友好的接入方式，并采用模块化设计，可实现与企业内 IT 基础设施的快速集成。该产品适用于微服务改造、业务中台、数字化转型、工业互联网、开放平台等多种场景。</p>
```

### 水平线

``` html
<hr>
```

### 特殊文字

``` html
<u-linear-layout gap="small">
    <em>强调文本</em>
    <strong>加粗文本</strong>
    <ins>插入文本</ins>
    <del>删除文本</del>
    <mark>标记文本</mark>
    <small>缩小文本</small>
    <code>代码片段</code>
    <abbr title="Abbreviation">Abbr</abbr>
    <span><sup>上</sup><sub>下</sub>标</span>
    <q>引用片段</q>
    <dfn>定义术语</dfn>
</u-linear-layout>
```

### 列表

``` html
<ul>
    <li>选项1</li>
    <li>选项2
        <ul>
            <li>选项1</li>
            <li>选项2</li>
            <li>选项3</li>
        </ul>
    </li>
    <li>选项3</li>
</ul>
<ol>
    <li>选项1</li>
    <li>选项2
        <ol>
            <li>选项1</li>
            <li>选项2</li>
            <li>选项3</li>
        </ol>
    </li>
    <li>选项3</li>
</ol>
```

### 描述列表

``` html
<dl>
    <dt>Web前端</dt>
    <dd>通常是指网站的前台部分，包括网站的表现层和结构层。因此前端技术一般分为前端设计和前端开发，前端设计一般可以理解为网站的视觉设计，前端开发则是网站的前台代码实现，包括基本的HTML、CSS和JavaScript。</dd>
    <dt>CSS</dt>
    <dd>级联样式表，是一种用来表现HTML或XML等文件样式的计算机语言。目前最新版本为CSS3，是能够真正做到网页表现与内容分离的一种样式设计语言。</dd>
    <dt>JavaScript</dt>
    <dd>一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型，广泛用于客户端的脚本语言，最早是在HTML网页上使用，用来给HTML网页增加动态功能。</dd>
</dl>
```

### 引用块

``` html
<blockquote>
覆盖开发、测试、构建、发布到上线运行、治理、运维以及故障排查，源自网易内部的大规模互联网业务实践，经过金融、制造、物流等行业客户的生产环境验证。
</blockquote>
```

### 代码块

``` html
<pre>
factorial = (num) -&gt;
    if not /^\d+$/.test(num)
        throw 'Error: Not an integer!'

    _factorial = (num) -&gt;
        return (if num &lt;= 1 then 1 else num * _factorial(num - 1))

    return _factorial(num)
</pre>
```

### 按键

``` html
<u-linear-layout gap="small" direction="vertical">
    <u-linear-layout gap="small">
        <kbd>⌘</kbd>
        <kbd>⌥</kbd>
        <kbd>⌃</kbd>
        <kbd>⇧</kbd>
        <kbd>⇪</kbd>
    </u-linear-layout>
    <u-linear-layout gap="small">
        <kbd>←</kbd>
        <kbd>→</kbd>
        <kbd>↑</kbd>
        <kbd>↓</kbd>
        <kbd>⇥</kbd>
        <kbd>Tab</kbd>
        <kbd>⌫</kbd>
        <kbd>Delete</kbd>
        <kbd>↩</kbd>
        <kbd>Enter</kbd>
        <kbd>␣</kbd>
        <kbd>Space</kbd>
        <kbd>⎋</kbd>
        <kbd>Escape</kbd>
    </u-linear-layout>
    <u-linear-layout gap="small">
        <kbd>Q</kbd>
        <kbd>W</kbd>
        <kbd>E</kbd>
        <kbd>R</kbd>
        <kbd>T</kbd>
        <kbd>Y</kbd>
    </u-linear-layout>
</u-linear-layout>
```

## API

暂无
