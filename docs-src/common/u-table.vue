<template>
    <table :class="$style.root">
        <slot name="thead"></slot>
        <slot name="tbody"></slot>
        <slot></slot>
    </table>
</template>
<script>
export default {
    name: 'u-table',
};
</script>

<style module>
.root{
    border: none;
    table-layout: fixed;
    position: relative;
    width: 100%;
    max-width: 100%;
    margin: 20px 0;
    background: #fff;
    word-break:keep-all;/* 不换行 */
    white-space:nowrap;/* 不换行 */
}
.root td{
    color: #999;
    overflow: hidden;
}
.root th, .root td{
    position: relative;
    vertical-align: middle;
    padding: 10px 10px 10px 10px;
    box-sizing: border-box;
    line-height: 24px;
    vertical-align: top;
    width: auto;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.root thead tr {
    background-color: #f5f7fa;
    border-bottom: 1px solid #ebf0f5;
}
.root thead tr th {
    text-align: left;
    font-weight: normal;
}
.root tbody tr {
    border-top: 1px solid #ebf0f5;
}
.root tbody tr:hover {
    background-color: #fff;
}
.root tbody tr:last-child {
    border-bottom: 1px solid #ebf0f5;
}
</style>
