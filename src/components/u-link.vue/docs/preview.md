<template>
<div>
    <div style="margin-bottom: 40px;">
        <div class="componentClassTitle">鼠标悬停状态为下划线</div>
        <u-link style="margin-right:24px;">Base</u-link>
        <u-link style="margin-right:24px;" color="success">Success</u-link>
        <u-link style="margin-right:24px;" color="warning">Warning</u-link>
        <u-link style="margin-right:24px;" color="danger">Danger</u-link>
        <u-link disabled>Disabled</u-link>
    </div>
    <div>
        <div class="componentClassTitle">鼠标悬停状态为颜色变化</div>
        <u-link hovertype="color" style="margin-right:24px;">Base</u-link>
        <u-link hovertype="color" style="margin-right:24px;" color="success">Success</u-link>
        <u-link hovertype="color" style="margin-right:24px;" color="warning">Warning</u-link>
        <u-link hovertype="color" style="margin-right:24px;" color="danger">Danger</u-link>
        <u-link hovertype="color" disabled>Disabled</u-link>
    </div>
</div>
</template>