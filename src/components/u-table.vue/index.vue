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
    background: var(--table-background);
}

.root th {
    position: relative;
    line-height: var(--table-th-line-height);
    padding: var(--table-th-padding);
    /* background: var(--table-th-background); */

    background-color: var(--table-th-background-color);
    background-image: var(--table-th-background-image);
    background-size: var(--table-th-background-size);
    background-repeat: var(--table-th-background-repeat);
    background-position: var(--table-th-background-position);
}

.root td {
    position: relative;
    line-height: var(--table-td-line-height);
    color: var(--table-td-color);
    padding: var(--table-td-padding);
    /* background: var(--table-td-background); */

    background-color: var(--table-td-background-color);
    background-image: var(--table-td-background-image);
    background-size: var(--table-td-background-size);
    background-repeat: var(--table-td-background-repeat);
    background-position: var(--table-td-background-position);
}

.root td[vusion-slot-name="empty"] {
    color: #999;
}

.root thead tr {
    background-color: var(--table-head-background);
    border-bottom: 1px solid var(--table-border-color);
    background-clip: padding-box;
}
.root[color="light"] thead tr {
    background-color: var(--table-head-background-light);
}

.root thead th {
    text-align: var(--table-head-text-align);
    color: var(--table-head-color);
    font-weight: var(--table-head-font-weight);
}

.root tbody tr {
    border-top: 1px solid var(--table-border-color);
}

.root tbody > tr:first-child {
    border-top: none;
}

.root tbody > tr:last-child {
    border-bottom: 1px solid var(--table-border-color);
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

.root[line] th, .root[line] td {
    border: 1px solid var(--table-border-color);
}

.root[line] th, .root[line] thead tr {
    border-bottom: none;
}

/* 下一个大版本放开 */
.root[striped] thead tr {
    border-top: 1px solid var(--table-border-color);
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
</style>
