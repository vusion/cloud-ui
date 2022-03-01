<template>
    <div>
        <div class="componentClassTitle">进本用法</div>
        <u-number-input></u-number-input>
        <u-number-input button-display="bothEnds"></u-number-input>
        <div class="componentClassTitle">禁用</div>
        <u-number-input :value="6" disabled></u-number-input>
        <u-number-input button-display="bothEnds" :value="6" disabled></u-number-input>
    </div>
</template>
