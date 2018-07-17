<template>
<div :class="$style.root">
    <div :class="$style.example"><slot></slot></div>
    <div :class="$style.code" v-show="expanded">
        <slot name="code"></slot>
    </div>
    <div :class="$style.expander" :expanded="expanded" @click="expanded = !expanded">{{ expanded ? '收起代码' : '显示代码' }}</div>
</div>
</template>

<script>
export default {
    name: 'u-example',
    data() {
        return {
            expanded: false,
        };
    },
};
</script>

<style module>
$border-color: #e1e8ed;

.root {
    margin: 10px 0;
    border: 1px $border-color solid;
    border-radius: $border-radius-base;
}

.root:hover {
    box-shadow: 0 2px 10px rgba(90, 95, 100, 0.12);
}

.example {
    padding: 20px;
}

.code {
    border-top: 1px $border-color solid;
    background: #f8f9fb;
}

.code pre {
    margin: 0;
}

.code:empty {
    display: none;
}

.expander {
    border-top: 1px $border-color solid;
    text-align: center;
    vertical-align: middle;
    padding: 5px;
    cursor: pointer;
}

.expander:hover {
    background: #e9eef5;
}

.expander:before {
    content: '';
    display: inline-block;
    position: relative;
    border: 5px solid transparent;
    border-left-width: 4px;
    border-right-width: 4px;
    border-top-color: #bbb;
    bottom: -3px;
    right: 4px;
}

.expander[expanded]:before {
    border-top-color: transparent;
    border-bottom-color: #bbb;
    top: -3px;
    bottom: 0;
}
</style>
