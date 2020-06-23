<template>
<table :class="$style.root">
    <slot></slot>
</table>
</template>

<script>
export default { name: 'u-form-table' };
</script>

<style module>
.root {
    table-layout: fixed;
    width: 580px;
}

.root[size="full"] {
    width: 100%;
}

.root thead {
    color: var(--color-light);
    line-height: 40px;
    border-bottom: 1px solid var(--border-color-base);
}

.root thead th {
    position: relative;
    font-weight: normal;
    text-align: left;
    height: 48px;
    padding: 0 5px;
}

.root tbody td {
    padding: 0;
    padding-top: 15px;
    padding-right: 10px;
}

.root tbody td:last-child {
    padding-right: 0;
}

.root[size="mini"] {
    width: auto;
}

.root[size="mini"] thead {
    line-height: 32px;
}

.root[size="mini"] thead th {
    height: 32px;
}

.root[size="mini"] tbody tr:first-child td {
    padding-top: 0;
}

.root[size="mini"] tbody td {
    padding-top: 10px;
}

.root[size="mini"] .remove-button {
    height: 20px;
    line-height: 20px;
    font-size: 20px;
}</style>
