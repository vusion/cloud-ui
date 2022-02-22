``` html
<div>
     <u-linear-layout direction="vertical"
        style="margin-bottom:16px;line-height: 0;"
        :class="$style.linearLayout">
        <u-block style="width: 100%;"></u-block>
        <u-block style="width: 100%;"></u-block>
    </u-linear-layout>
    <u-linear-layout direction="horizontal"
        style="margin-bottom:16px;line-height: 0;"
        :class="$style.linearLayout">
        <u-block style="display:inline-block;width: 104px;"></u-block>
        <u-block style="display:inline-block;width: 104px;"></u-block>
        <u-block style="display:inline-block;width: 104px;"></u-block>
    </u-linear-layout>
    <u-linear-layout direction="horizontal"
        justify=space-between
        style="margin-bottom:8px;"
        :class="$style.linearLayout">
        <u-block style="display:inline-block;width: 104px;"></u-block>
        <u-block style="display:inline-block;width: 104px;"></u-block>
    </u-linear-layout>
</div>
```