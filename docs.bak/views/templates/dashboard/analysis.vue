<template>
    <div :class="$style.root">
        <div :class="$style.title">
            <h1>每星期访问量</h1>
            <u-table :class="$style.table">
                <thead>
                    <tr>
                        <th>星期一</th>
                        <th>星期二</th>
                        <th>星期三</th>
                        <th>星期四</th>
                        <th>星期五</th>
                        <th>星期六</th>
                        <th>星期日</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>150</td>
                        <td>300</td>
                        <td>28</td>
                        <td>200</td>
                        <td>74</td>
                        <td>532</td>
                        <td>420</td>
                    </tr>
                </tbody>
            </u-table>
            </div>
        <div :class="$style.row">
            <div :class="$style.chart">
                <u-bar-chart :x-axis="{ key: 'week' }" :y-axis="{ min: 0 }" :series="[{key: 'number', name: '访问量' }]" :data="[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]" border legend title="每星期访问量"></u-bar-chart>
            </div>
            <div :class="$style.chart">
                <u-xbar-chart :y-axis="{ key: 'week' }" :x-axis="{ min: 0 }" :series="[{key: 'number', name: '访问量' }]" :data="[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]" border legend title="每星期访问量"></u-xbar-chart>
            </div>
        </div>
        <div :class="$style.row">
            <div :class="$style.chart">
                <u-line-chart :x-axis="{ key: 'week' }" :y-axis="{ min: 0 }" :series="[{ key: 'number' }]" :data="[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]" border legend title="每星期访问量"></u-line-chart>
            </div>
            <div :class="$style.chart">
                <u-pie-chart :data="[
                    { 'percent': 25, 'name': 'selector1' },
                    { 'percent': 25, 'name': 'selector2' },
                    { 'percent': 25, 'name': 'selector3' },
                    { 'percent': 25, 'name': 'selector4' }
                    ]" border legend title="每星期访问量">
                </u-pie-chart>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    methods: {
    },
};
</script>

<style module>
.row:not(:first-child) {
    background-color: #fff;
}
.row::after {
    clear: both;
}
.row::before, .row::after {
    content: " ";
    display: table;
}
.chart[class] {
    width: 45%;
    display: inline-block;
    margin: 0 2%;
}
.title {
    width: 100%;
    /* text-align: center; */
    margin-bottom: 50px;
}
h1 {
    font-weight: 500;
}
.table[class] {
    width: 90%;
    margin-left: 5%;
}
.table td, .table th {
    border: 1px solid #eee;
}
</style>
