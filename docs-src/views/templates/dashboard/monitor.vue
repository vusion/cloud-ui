<template>
    <div :class="$style.root">
        <div :class="$style.row">
            <u-overview-item>
                <span slot="label" :class="$style.label_success">台</span>
                <h5 slot="title">物理机</h5>
                <template slot="content">180</template>
            </u-overview-item>
            <u-overview-item>
                <span slot="label" :class="$style.label_info">台</span>
                <h5 slot="title">云主机</h5>
                <span slot="content">200</span>
            </u-overview-item>
            <u-overview-item>
                <span slot="label" :class="$style.label_primary">个</span>
                <h5 slot="title">外网ip</h5>
                <span slot="content">1180</span>
            </u-overview-item>
            <u-overview-item>
                <span slot="label" :class="$style.label_danger">个</span>
                <h5 slot="title">卷</h5>
                <span slot="content">1202</span>
            </u-overview-item>
        </div>
        <div :class="$style.row">
            <div :class="$style.title">
                <h5 :class="$style.h5">资源趋势图</h5>
                <div :class="$style.btngroup">
                    <u-linear-layout gap="none">
                        <u-capsules :value="time" @select="changeTime($event.value, 'time')">
                            <u-capsule value="day">一天</u-capsule>
                            <u-capsule value="week">一个星期</u-capsule>
                            <u-capsule value="month">一个月</u-capsule>
                        </u-capsules>
                    </u-linear-layout>
                </div>
            </div>
            <div :class="$style.bd">
                <div :class="$style.content">
                    <u-line-chart :title="title" :x-axis="xaxis" :y-axis="yaxis" :series="series" :data="monitorData" :smooth="smooth" :title-align="titleAlign" :loading = "loading" border legend height="350px">
                        <template v-for="(item,index) in monitorData">
                            <div :slot="'tooltipTemplate'+index">
                                <p>{{ item.week }}</p>
                                <p>云主机 {{ item.number }}</p>
                            </div>
                        </template>
                    </u-line-chart>
                </div>
                <div :class="$style.percent">
                    <ul :class="$style.ul">
                        <li>
                            <h2 :class="$style.right">100</h2>
                            <h2 :class="$style.nomargin">70</h2>
                            <small>vcpu(核)</small>
                            <span :class="$style.right">容量</span>
                            <u-tooltip placement="top">
                                <u-linear-progress :percent="70"></u-linear-progress>
                                <div slot="content">
                                    70%
                                </div>
                            </u-tooltip>
                        </li>
                        <li>
                            <h2 :class="$style.right">100</h2>
                            <h2 :class="$style.nomargin">65</h2>
                            <small>内存(G)</small>
                            <span :class="$style.right">容量</span>
                            <u-tooltip placement="top">
                                <u-linear-progress :percent="65"></u-linear-progress>
                                <div slot="content">
                                    65%
                                </div>
                            </u-tooltip>
                        </li>
                        <li>
                            <h2 :class="$style.right">100</h2>
                            <h2 :class="$style.nomargin">0</h2>
                            <small>存储(G)</small>
                            <span :class="$style.right">容量</span>
                            <u-tooltip placement="top">
                                <u-linear-progress :percent="0"></u-linear-progress>
                                <div slot="content">
                                    0%
                                </div>
                            </u-tooltip>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div :class="$style.row">
            <div :class="$style.title">
                <h5 :class="$style.h5">虚拟资源占比趋势图</h5>
                <!-- <div :class="$style.btngroup">
                    <u-linear-layout gap="none">
                        <u-capsules :value="time1" @select="changeTime($event.value, 'time1')">
                            <u-capsule value="day">一天</u-capsule>
                            <u-capsule value="week">一周</u-capsule>
                            <u-capsule value="month">一个月</u-capsule>
                        </u-capsules>
                    </u-linear-layout>
                </div> -->
            </div>
            <div :class="$style.bd">
                <div :class="$style.chart">
                    <u-line-chart :title="title1" :x-axis="xaxis" :y-axis="yaxis1" :series="series1" :data="vmData" :smooth="smooth" border legend height="350px">
                        <template v-for="(item,index) in vmData">
                            <div :slot="'tooltipTemplate'+index">
                                <p>{{ item.week }}</p>
                                <p>vcpu {{ item.cpu }}%</p>
                            </div>
                        </template>
                    </u-line-chart>
                </div>
                <div :class="$style.chart">
                    <u-line-chart :title="title2" :x-axis="xaxis" :y-axis="yaxis1" :series="series2" :data="vmData" :smooth="smooth" border legend height="350px">
                        <template v-for="(item,index) in vmData">
                            <div :slot="'tooltipTemplate'+index">
                                <p>{{ item.week }}</p>
                                <p>内存 {{ item.mem }}%</p>
                            </div>
                        </template>
                    </u-line-chart>
                </div>
                <div :class="$style.chart1">
                    <span :class="$style.circular">
                        <u-circular-specific-progress :percent="73">
                            <div>VCPU</div>
                        </u-circular-specific-progress>
                        <span>cpu利用率</span>
                    </span>
                   <span :class="$style.circular">
                       <u-circular-specific-progress :percent="54">
                            <div>内存</div>
                        </u-circular-specific-progress>
                        <span>内存使用率</span>
                   </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data1: [
                { week: '0:00', number: 150 },
                { week: '4:00', number: 300 },
                { week: '8:00', number: 28 },
                { week: '12:00', number: 200 },
                { week: '16:00', number: 74 },
                { week: '20:00', number: 532 },
                { week: '24:00', number: 420 },
            ],
            data2: [
                { week: '星期一', number: 150 },
                { week: '星期二', number: 300 },
                { week: '星期三', number: 28 },
                { week: '星期四', number: 200 },
                { week: '星期五', number: 74 },
                { week: '星期六', number: 532 },
                { week: '星期日', number: 420 },
            ],
            data3: [
                { week: '1号', number: 150 },
                { week: '3号', number: 300 },
                { week: '5号', number: 28 },
                { week: '7号', number: 200 },
                { week: '9号', number: 74 },
                { week: '11号', number: 532 },
                { week: '13号', number: 420 },
                { week: '15号', number: 150 },
                { week: '17号', number: 300 },
                { week: '19号', number: 28 },
                { week: '21号', number: 200 },
                { week: '23号', number: 74 },
                { week: '15号', number: 532 },
                { week: '27号', number: 420 },
                { week: '30号', number: 299 },
            ],
            monitorData: [
                { week: '0:00', number: 150 },
                { week: '4:00', number: 300 },
                { week: '8:00', number: 28 },
                { week: '12:00', number: 200 },
                { week: '16:00', number: 74 },
                { week: '20:00', number: 532 },
                { week: '24:00', number: 420 },
            ],
            vmData: [
                { week: '0:00', vcpu: 72, mem: 54 },
                { week: '4:00', vcpu: 73, mem: 57 },
                { week: '8:00', vcpu: 70, mem: 55 },
                { week: '12:00', vcpu: 65, mem: 55 },
                { week: '16:00', vcpu: 81, mem: 55 },
                { week: '20:00', vcpu: 83, mem: 55 },
                { week: '24:00', vcpu: 76, mem: 55 },
            ],
            xaxis: { key: 'week' },
            yaxis: { min: 0 },
            yaxis1: { name: '%' },
            smooth: true,
            time: 'day',
            loading: false,
            title: '云主机总量',
            title1: 'cpu利用率',
            title2: '内存利用率',
            series: [{ name: '访问量', key: 'number' }],
            series1: [{ name: 'vcpu', key: 'vcpu' }],
            series2: [{ name: '内存', key: 'mem' }],
            titleAlign: 'left',
        };
    },
    methods: {
        changeTime(value) {
            this.time = value;
            if (value === 'day')
                this.monitorData = this.data1;
            else if (value === 'week')
                this.monitorData = this.data2;
            else
                this.monitorData = this.data3;
        },
    },
};
</script>

<style module>
.row:not(:first-child) {
    background-color: #fff;
}
.row:after {
    clear: both;
}
.row:before,.row:after {
    content: " ";
    display: table;
}
.label_success {
    background-color: #1c84c6;
    color: #fff;
    padding: 3px 8px;
    border-radius: 2px;
}
.label_info {
    background-color: #23c6c8;
    padding: 3px 8px;
    color: #fff;
    border-radius: 2px;
}
.label_primary {
    background-color: #1ab394;
    padding: 3px 8px;
    color: #fff;
    border-radius: 2px;
}
.label_danger {
    background-color: #ed5565;
    padding: 3px 8px;
    color: #fff;
    border-radius: 2px;
}
.h5{
    display: inline-block;
    font-size: 14px;
    margin: 0 0 7px;
    text-overflow: ellipsis;
    float: left;
}
.btngroup {
    float: right;
    position: relative;
    display: inline-block;
    vertical-align: middle;
}
.title {
    border: none;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid solid none;
    border-width: 3px 0 0;
    margin-bottom: 10px;
    padding: 14px 15px 7px;
    min-height: 48px;
    background-color: #fff;
}
.content {
    display: inline-block;
    width: 75%;
    background-color: #fff;
    float: left;
}
.percent {
    display: inline-block;
    width: 25%;
    float: left;
    background-color: #fff;
    margin-top: 20px;
    padding-left: 20px;
}
.right {
    float: right;
    margin: 0;
}
.chart {
    display: inline-block;
    width: 30%;
    margin-right: 3%;
}
.chart1 {
    display: inline-block;
    width: 30%;
    margin-right: 3%;
    vertical-align: top;
    margin-top: 100px;
}
.bd[class] {
    background-color: #fff;
    overflow: hidden;
}
.circular {
    margin: 100px 50px;
}
</style>
