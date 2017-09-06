<template>
<article :class="$style.root">
    <slot></slot>
</article>
</template>

<script>
export default {
    name: 'u-article',
};
</script>

<style module>
.root {
    /* margin: 60px auto;
    width: 960px; */
}

.root > li > p {
    text-indent: 0;
}

.root > h1 {
    font-size: 24px;
    line-height: 30px;
}

.root > h2 {
    font-size: 20px;
    padding: 0 60px;
    margin: 80px -60px 10px;
}

.root > h3 {
    font-size: 16px;
    margin: 40px -60px 30px;
    border-top: 1px solid #f4f4f4;
    padding-top: 30px;
    padding-left: 60px;
    color: $brand-primary;
}

.root > h2 + h3 {
    margin-top: 10px;
}

.root > h4 {
    font-size: 14px;
    margin: 25px 0 10px;
    margin-left: -9px;

}

.root  > h4:before {
    content: '';
    margin-right: 6px;
    display: inline-block;
    height: 4px;
    width: 4px;
    vertical-align: middle;
    background: $brand-primary;
}

.root > h5 {
    font-size: 12px;
    margin: .3em 0;
}

.root > ul, .root > ol {
    padding-left: 20px;
}

.root pre {
    tab-size: 4;
    /* - Contain overflow in all browsers. */
    overflow: auto;
    /* word-break: break-all; */
    /* word-wrap: break-word; */
}

.root pre code {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font-size: inherit;
    color: inherit;
    /* white-space: pre-wrap; */
}

.root code {
    padding: 0 3px;
    font-size: 12px;
    background: #fafafa;
    color: #d05;
}

.root pre {
    padding: 6px 12px;
    font-size: 12px;
    background: #fafafa;
    color: #333;
    border: 1px solid #eee;
    border-radius: $border-radius-base;
}

.root pre.lang-console {
    background: #2e74ac;
    border: none;
}

.root pre.lang-console code {
    color: white;
}

.root > blockquote h6 {
    margin: .5em 0 .3em;
    text-indent: 2em;
    color: #e74c3c;
}

.root > table {
    margin: 0 auto;
    width: 100%;
    /* word-break: break-all; */
}

.root > table th, .root > table td {
    border: 1px solid #f4f4f4;
    padding: 2px 6px;
    font-size: 12px;
}

.root > table img {
    max-width:none;
}
</style>
