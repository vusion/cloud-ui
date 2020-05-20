# Typography 排版

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
<p>夏日，静好。如水的日子散发着淡淡的清欢，花香鸟鸣的清晨，喜欢依着一杯茶的馨香，倚在窗前，看天上白云轻轻飘过，任光阴静静在指尖流淌，让一颗被尘世烟火渲染的心渐渐沉静下来，默念一份心灵的温婉，拥有一段清寂的时光。</p>
<p>一直认为最好的心境，不是避开车水马龙，而是在心中修篱种菊。尘世的纷纷扰扰，总是会让人倦了累了，找一个清闲的午后，关上心灵窗子，隔绝人世的喧嚣，一杯茶，一本书，便是一段静谧的光阴。茶，可以品尝人生的百味；书，可以找回心灵的皈依。轻拥一米阳光入怀，和着书香，任流淌的心事，在季节中浅漾，生命就在这悠然的时光中婉约成一朵花。</p>
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
    我不知道世上的人对我怎样评价。我却这样认为：我好像是在海滨上玩耍的孩子，时而拾到几块莹洁的石子，时而拾到几片美丽的贝壳并为之欢欣。那浩瀚的真理的海洋仍展现在面前。
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
