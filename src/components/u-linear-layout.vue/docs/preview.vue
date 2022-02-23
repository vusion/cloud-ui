<template>
    <div>
        <u-linear-layout direction="vertical" :class="$style.linearLayout"
            style="margin-bottom:16px;line-height: 0;">
            <u-block style="width: 100%;"></u-block>
            <u-block style="width: 100%;"></u-block>
        </u-linear-layout>
        <u-linear-layout direction="horizontal" :class="$style.linearLayout"
            style="margin-bottom:16px;line-height: 0;">
            <u-block style="display:inline-block;width: 104px;"></u-block>
            <u-block style="display:inline-block;width: 104px;"></u-block>
            <u-block style="display:inline-block;width: 104px;"></u-block>
        </u-linear-layout>
        <u-linear-layout direction="horizontal" :class="$style.linearLayout"
            justify="space-between"
            style="margin-bottom:8px;">
            <u-block style="display:inline-block;width: 104px;"></u-block>
            <u-block style="display:inline-block;width: 104px;"></u-block>
        </u-linear-layout>
    </div>
</template>

<style module>
.linearLayout [class^="u-block"] {
    height: 48px;
    background: #337EFF !important;
    opacity: 0.5;
}
</style>
