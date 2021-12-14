<template>
<i :class="['van-iconv', `van-iconv-${name}`]" :name="name" v-on="$listeners"
    @click="onClick($event)"
    @dblclick="onDblclick($event)"
    @contextmenu="onRightClick($event)"
    @mouseover="onmouseover($event)"
    @mouseout="onmouseout($event)"
    @mousedown="onmousedown($event)"
>
    <span v-if="text" vusion-slot-name="text" class="van-shoud-pa van-iconv_text">{{ text }}</span>
</i>
</template>

<script>
export default {
    name: 'i-iconv',
    props: {
        name: String,
        text: {
            type: String,
            default: '图标',
        },
        href: String,
        target: { type: String, default: '_self' },
        to: [String, Object],
        replace: { type: Boolean, default: false },
        append: { type: Boolean, default: false },
        decoration: { type: Boolean, default: true },
        download: { type: Boolean, default: false },
        destination: String,
    },
    methods: {
        onClick(ev) {
            this.$emit('click', ev);
        },
        onDblClick(ev) {
            this.$emit('dblclick', ev);
        },
        onContextMenu(ev) {
            this.$emit('rightclick', ev);
        },
        onmouseover(ev) {
            this.$emit('over', ev);
        },
        onmouseout(ev) {
            this.$emit('out', ev);
        },
        onmousedown(ev) {
            this.$emit('down', ev);
        },
    },
};
</script>

<style src="./index.css"></style>
