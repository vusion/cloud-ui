<template>
    <div>
        <h1>日期选择</h1>
        <p>日期选择是个常见的需求，按照使用场景可分为以下四种</p>
        <div :class="$style.part">
            <h3>日历</h3>
            <u-linear-layout>
                <u-calendar date="2018-08-08" :class="$style.inline"></u-calendar>
                <u-calendar date="2018-08-08" min-date="2018-08-02" max-date="2018-08-18" :class="$style.inline"></u-calendar>
            </u-linear-layout>
        </div>
        <div :class="$style.part">
            <h3>日期选择</h3>
            <div :class="$style.label">
                <label>申请日期：</label>
                <u-date-picker></u-date-picker>
                <span :class="$style.btn"> 至 </span>
                <u-date-picker></u-date-picker>
            </div>
            <div :class="$style.label">
                <label>审核日期：</label>
                <u-date-picker></u-date-picker>
                <span :class="$style.btn"> 至 </span>
                <u-date-picker></u-date-picker>
            </div>
        </div>
        <div :class="$style.part">
            <h3>时间选择</h3>
            <div :class="$style.label">
                <label>开始时间：</label>
                <u-time-picker width="56" time="15:46:33"></u-time-picker>
            </div>
            <div :class="$style.label">
                <label>结束时间：</label>
                <u-time-picker width="56" time="16:46:33"></u-time-picker>
            </div>
        </div>
        <div :class="$style.part">
            <h3>日期时间选择</h3>
            <u-date-time-picker date="2018-08-08" autofocus></u-date-time-picker>
        </div>
    </div>
</template>

<style module>
.part {
    margin-bottom: 50px;
}
.inline {
    display: inline-block;
}
.btn{
    margin:0 5px !important;
    color: #999;
}
.label {
    margin-top: 10px;
}
</style>
