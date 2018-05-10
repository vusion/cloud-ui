<template>
    <div :class="$style.root">
        <div :class="$style.col">
            <div :class="$style.box">
                <div :class="$style.title">
                    <span :class="$style.label">
                        <slot name="label"></slot>
                    </span>
                    <slot name="title"></slot>
                </div>
                <div :class="$style.content">
                    <h1 :class="$style.h1">
                        <slot name="content"></slot>
                    </h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'u-overview-item',
};
</script>

<style module>
.root {
    box-sizing: border-box;
}
@media (min-width: 1200px) {
    .col {
        width: 25%;
        float: left;
        position: relative;
        min-height: 1px;
        padding: 10px 20px;
    }
}
.box {
    clear: both;
    margin-bottom: 25px;
    margin-top: 0;
    padding: 0;
    border: 1px solid #eee;
}
.title {
    border: none;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid solid none;
    border-width: 3px 0 0;
    margin-bottom: 0;
    padding: 14px 15px 7px;
    min-height: 48px;
    background-color: #fff;
}
.title h5 {
    display: inline-block;
    font-size: 14px;
    margin: 0 0 7px;
    padding: 0;
    text-overflow: ellipsis;
    float: left;
    font-weight: 600;
    font-family: "open sans,Helvetica Neue,Helvetica,Arial,sans-serif";
}
.label {
    float: right;
}
.content {
    background-color: #fff;
    padding: 15px 20px 20px;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid solid none;
    border-width: 1px 0;
    clear: both;
}
.h1 {
    margin: 0 !important;
    font-size: 30px;
    font-weight: 100;
    line-height: 1.1;
}
</style>
