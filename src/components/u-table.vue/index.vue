<template>
<table :class="$style.root">
    <slot></slot>
</table>
</template>

<script>
export default {
    name: 'u-table',
};
</script>

<style module>
.root {
    width: 100%;
    table-layout: fixed;
    /* background: var(--table-view-background); */
}

.root th {
    position: relative;
    line-height: var(--table-view-th-line-height);
    padding: var(--table-view-th-padding);
    /* background: var(--table-view-th-background); */

    background-color: var(--table-view-th-background-color);
    background-image: var(--table-view-th-background-image);
    background-size: var(--table-view-th-background-size);
    background-repeat: var(--table-view-th-background-repeat);
    background-position: var(--table-view-th-background-position);
}

.root td {
    position: relative;
    line-height: var(--table-view-td-line-height);
    color: var(--table-view-td-color);
    padding: var(--table-view-td-padding);
    /* background: var(--table-view-td-background); */

    background-color: var(--table-view-td-background-color);
    background-image: var(--table-view-td-background-image);
    background-size: var(--table-view-td-background-size);
    background-repeat: var(--table-view-td-background-repeat);
    background-position: var(--table-view-td-background-position);
}

.root td[vusion-slot-name="empty"] {
    color: #999;
}

.root thead tr {
    background-color: var(--table-view-head-background);
    background-clip: padding-box;
}
.root[color="light"] thead tr {
    background-color: var(--table-view-head-background-light);
}
.root thead tr th {
    border-bottom: 1px solid var(--table-view-border-color);
}

.root thead th {
    text-align: var(--table-view-th-text-align);
    color: var(--table-head-color);
    font-weight: var(--table-head-font-weight);
}

.root tbody td {
    border-bottom: 1px solid var(--table-view-border-color);
}

/* .root tbody > tr:hover > td::before {
    content: '';
    width: 100%;
    height: 6px;
    position: absolute;
    top: -6px;
    left: 0;
    background: url("../../assets/images/shadow-up.png") repeat-x;
    z-index: 100;
    display: var(--table-hover-border-shadow-display);
}

.root tbody > tr:hover > td::after {
    content: '';
    width: 100%;
    height: 6px;
    position: absolute;
    bottom: -6px;
    left: 0;
    background: url("../../assets/images/shadow-down.png") repeat-x;
    z-index: 100;
    display: var(--table-hover-border-shadow-display);
} */

.root tbody > tr:hover{
    background-color: var(--table-view-row-hover-background);
}
.root tbody > tr:hover td {
    background-color: var(--table-view-row-hover-background);
}

/* .root tbody > tr:first-child:hover > td::before {
    display: none;
}

.root tbody > tr:last-child:hover > td::after {
    display: none;
} */
/** 固定列position: sticky，th，td的border没有效果，所以改成box-shadow */
.root[line] th {
    box-shadow: inset 0 1px 0 var(--table-view-border-color), inset 0 -1px 0 var(--table-view-border-color), inset 1px 0 0 var(--table-view-border-color);
}
.root[line] th:last-child {
    /**上、右、下、左 */
    box-shadow: inset 0 1px 0 var(--table-view-border-color), inset -1px 0 0 var(--table-view-border-color), inset 0 -1px 0 var(--table-view-border-color), inset 1px 0 0 var(--table-view-border-color);
}
.root[line] td {
    box-shadow: inset 1px 0 0 var(--table-view-border-color);
}
.root[line] td:last-child {
    box-shadow: inset 1px 0 0 var(--table-view-border-color), inset -1px 0 0 var(--table-view-border-color);
}
.root[line] th, .root[line] thead tr {
    border-bottom: none;
}

/* 下一个大版本放开 */
.root[striped] thead tr {
    border-top: 1px solid var(--table-view-border-color);
}

.root[striped] tbody tr:nth-of-type(even) {
    background: var(--table-row-background-striped);
}
.root[striped] tbody tr:nth-of-type(even) td{
    background: var(--table-row-background-striped);
}

.root tbody > tr[color="light"] {
    background: var(--table-row-background-light);
}
.root tbody > tr[color="light"] td{
    background: var(--table-row-background-light);
}

.root tbody > tr[color="normal"] {
    background: var(--table-row-background);
}
.root tbody > tr[color="normal"] td{
    background: var(--table-row-background);
}

.root tbody > tr[color="dark"] {
    background: var(--table-row-background-dark);
}
.root tbody > tr[color="dark"] td{
    background: var(--table-row-background-dark);
}

.root tbody > tr[color="primary"] {
    background: var(--table-row-background-primary);
}
.root tbody > tr[color="primary"] td{
    background: var(--table-row-background-primary);
}

.root tbody > tr[color="error"] {
    background: var(--table-row-background-error);
}
.root tbody > tr[color="error"] td{
    background: var(--table-row-background-error);
}
.root[sticky-fixed="true"] {
    border-collapse: separate;
    border-spacing: 0;
}
</style>
