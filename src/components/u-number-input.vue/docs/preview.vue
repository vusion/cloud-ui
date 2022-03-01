<template>
    <div>
        <div class="componentClassTitle">基本用法</div>
        <u-number-input :value="6"></u-number-input>
        <u-number-input button-display="bothEnds" :value="6"></u-number-input>
        <div class="componentClassTitle" style="margin-top: 20px;">禁用</div>
        <u-number-input :value="6" disabled></u-number-input>
        <u-number-input button-display="bothEnds" :value="6" disabled></u-number-input>
    </div>
</template>
