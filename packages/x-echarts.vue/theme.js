import ECharts from 'echarts';
// import styles from '../../src/base/global.css?variables'; 先写死吧

const styles = {
    'theme-chart-color1': 'rgb(103, 170, 245)',
    'theme-chart-rgba-color1': 'rgba(103, 170, 245, 0.1)',

    'theme-chart-color2': 'rgb(255, 174, 60)',
    'theme-chart-rgba-color2': 'rgba(255, 174, 60, 0.1)',

    'theme-chart-color3': 'rgb(78, 201, 171)',
    'theme-chart-rgba-color3': 'rgba(78, 201, 171, 0.1)',

    'theme-chart-color4': 'rgb(245, 131, 122)',
    'theme-chart-rgba-color4': 'rgba(245, 131, 122, 0.1)',

    'theme-chart-color5': 'rgb(158, 156, 246)',
    'theme-chart-rgba-color5': 'rgba(158, 156, 246, 0.1)',

    'theme-chart-color6': 'rgb(30, 192, 216)',
    'theme-chart-rgba-color6': 'rgba(30, 192, 216, 0.1)',

    'theme-chart-color7': 'rgb(138, 205, 78)',
    'theme-chart-rgba-color7': 'rgba(138, 205, 78, 0.1)',

    'theme-chart-color8': 'rgb(237, 139, 204)',
    'theme-chart-rgba-color8': 'rgba(237, 139, 204, 0.1)',

    'theme-chart-color9': 'rgb(135, 206, 232)',
    'theme-chart-rgba-color9': 'rgba(135, 206, 232, 0.1)',

    'theme-chart-color10': 'rgb(97, 218, 198)',
    'theme-chart-rgba-color10': 'rgba(97, 218, 198, 0.1)',

    'theme-chart-color11': 'rgb(198, 156, 246)',
    'theme-chart-rgba-color11': 'rgba(198, 156, 246, 0.6)',

    'theme-chart-color12': 'rgb(137, 170, 247)',
    'theme-chart-rgba-color12': 'rgba(137, 170, 247, 0.6)',

    'theme-chart-color13': 'rgb(251, 155, 108)',
    'theme-chart-rgba-color13': 'rgba(251, 155, 108, 0.6)',

    'theme-chart-color14': 'rgb(103, 170, 245)',
    'theme-chart-rgba-color14': 'rgba(103, 170, 245, 0.6)',

    'theme-chart-color15': 'rgb(134, 187, 231)',
    'theme-chart-rgba-color15': 'rgba(134, 187, 231, 0.6)',

    'theme-chart-color16': 'rgb(245, 196, 80)',
    'theme-chart-rgba-color16': 'rgba(245, 196, 80, 0.6)',

    'theme-chart-color17': 'rgb(135, 206, 232)',
    'theme-chart-rgba-color17': 'rgba(135, 206, 232, 0.6)',

    'theme-chart-color18': 'rgb(239, 216, 22)',
    'theme-chart-rgba-color18': 'rgba(239, 216, 22, 0.6)',

    'theme-chart-color19': 'rgb(92, 208, 133)',
    'theme-chart-rgba-color19': 'rgba(92, 208, 133, 0.6)',

    'theme-chart-color20': 'rgb(241, 126, 248)',
    'theme-chart-rgba-color20': 'rgba(241, 126, 248, 0.6)',
};

const variables = Array(20).fill(1).map((_, i) => `theme-chart-color${i + 1}`);

ECharts.registerTheme('cloud-ui', {
    color: variables.map((v) => styles[v]),
    backgroundColor: 'rgba(252,252,252,0)',
    textStyle: {},
    title: {
        textStyle: {
            color: '#666666',
        },
        subtextStyle: {
            color: '#999999',
        },
    },
    line: {
        itemStyle: {
            normal: {
                borderWidth: '2',
            },
        },
        lineStyle: {
            normal: {
                width: '3',
            },
        },
        symbolSize: '8',
        symbol: 'emptyCircle',
        smooth: false,
    },
    radar: {
        itemStyle: {
            normal: {
                borderWidth: '2',
            },
        },
        lineStyle: {
            normal: {
                width: '3',
            },
        },
        symbolSize: '8',
        symbol: 'emptyCircle',
        smooth: false,
    },
    bar: {
        itemStyle: {
            normal: {
                barBorderWidth: 0,
                barBorderColor: '#ccc',
            },
            emphasis: {
                barBorderWidth: 0,
                barBorderColor: '#ccc',
            },
        },
    },
    pie: {
        itemStyle: {
            normal: {
                borderWidth: 0,
                borderColor: '#ccc',
            },
            emphasis: {
                borderWidth: 0,
                borderColor: '#ccc',
            },
        },
    },
    scatter: {
        itemStyle: {
            normal: {
                borderWidth: 0,
                borderColor: '#ccc',
            },
            emphasis: {
                borderWidth: 0,
                borderColor: '#ccc',
            },
        },
    },
    boxplot: {
        itemStyle: {
            normal: {
                borderWidth: 0,
                borderColor: '#ccc',
            },
            emphasis: {
                borderWidth: 0,
                borderColor: '#ccc',
            },
        },
    },
    parallel: {
        itemStyle: {
            normal: {
                borderWidth: 0,
                borderColor: '#ccc',
            },
            emphasis: {
                borderWidth: 0,
                borderColor: '#ccc',
            },
        },
    },
    sankey: {
        itemStyle: {
            normal: {
                borderWidth: 0,
                borderColor: '#ccc',
            },
            emphasis: {
                borderWidth: 0,
                borderColor: '#ccc',
            },
        },
    },
    funnel: {
        itemStyle: {
            normal: {
                borderWidth: 0,
                borderColor: '#ccc',
            },
            emphasis: {
                borderWidth: 0,
                borderColor: '#ccc',
            },
        },
    },
    gauge: {
        itemStyle: {
            normal: {
                borderWidth: 0,
                borderColor: '#ccc',
            },
            emphasis: {
                borderWidth: 0,
                borderColor: '#ccc',
            },
        },
    },
    candlestick: {
        itemStyle: {
            normal: {
                color: '#e6a0d2',
                color0: 'transparent',
                borderColor: '#e6a0d2',
                borderColor0: '#3fb1e3',
                borderWidth: '2',
            },
        },
    },
    graph: {
        itemStyle: {
            normal: {
                borderWidth: 0,
                borderColor: '#ccc',
            },
        },
        lineStyle: {
            normal: {
                width: '1',
                color: '#cccccc',
            },
        },
        symbolSize: '8',
        symbol: 'emptyCircle',
        smooth: false,
        color: [
            '#3fb1e3',
            '#6be6c1',
            '#626c91',
            '#a0a7e6',
            '#c4ebad',
            '#96dee8',
        ],
        label: {
            normal: {
                textStyle: {
                    color: '#ffffff',
                },
            },
        },
    },
    map: {
        itemStyle: {
            normal: {
                areaColor: '#eeeeee',
                borderColor: '#aaaaaa',
                borderWidth: 0.5,
            },
            emphasis: {
                areaColor: 'rgba(63,177,227,0.25)',
                borderColor: '#3fb1e3',
                borderWidth: 1,
            },
        },
        label: {
            normal: {
                textStyle: {
                    color: '#ffffff',
                },
            },
            emphasis: {
                textStyle: {
                    color: 'rgb(63,177,227)',
                },
            },
        },
    },
    geo: {
        itemStyle: {
            normal: {
                areaColor: '#eeeeee',
                borderColor: '#aaaaaa',
                borderWidth: 0.5,
            },
            emphasis: {
                areaColor: 'rgba(63,177,227,0.25)',
                borderColor: '#3fb1e3',
                borderWidth: 1,
            },
        },
        label: {
            normal: {
                textStyle: {
                    color: '#ffffff',
                },
            },
            emphasis: {
                textStyle: {
                    color: 'rgb(63,177,227)',
                },
            },
        },
    },
    categoryAxis: {
        axisLine: {
            show: true,
            lineStyle: {
                color: '#cccccc',
            },
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#333',
            },
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#999999',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: [
                    '#eeeeee',
                ],
            },
        },
        splitArea: {
            show: false,
            areaStyle: {
                color: [
                    'rgba(250,250,250,0.05)',
                    'rgba(200,200,200,0.02)',
                ],
            },
        },
    },
    valueAxis: {
        axisLine: {
            show: true,
            lineStyle: {
                color: '#cccccc',
            },
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#333',
            },
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#999999',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: [
                    '#eeeeee',
                ],
            },
        },
        splitArea: {
            show: false,
            areaStyle: {
                color: [
                    'rgba(250,250,250,0.05)',
                    'rgba(200,200,200,0.02)',
                ],
            },
        },
    },
    logAxis: {
        axisLine: {
            show: true,
            lineStyle: {
                color: '#cccccc',
            },
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#333',
            },
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#999999',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: [
                    '#eeeeee',
                ],
            },
        },
        splitArea: {
            show: false,
            areaStyle: {
                color: [
                    'rgba(250,250,250,0.05)',
                    'rgba(200,200,200,0.02)',
                ],
            },
        },
    },
    timeAxis: {
        axisLine: {
            show: true,
            lineStyle: {
                color: '#cccccc',
            },
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#333',
            },
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#999999',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: [
                    '#eeeeee',
                ],
            },
        },
        splitArea: {
            show: false,
            areaStyle: {
                color: [
                    'rgba(250,250,250,0.05)',
                    'rgba(200,200,200,0.02)',
                ],
            },
        },
    },
    toolbox: {
        iconStyle: {
            normal: {
                borderColor: '#999999',
            },
            emphasis: {
                borderColor: '#666666',
            },
        },
    },
    legend: {
        textStyle: {
            color: '#999999',
        },
    },
    tooltip: {
        axisPointer: {
            lineStyle: {
                color: '#cccccc',
                width: 1,
            },
            crossStyle: {
                color: '#cccccc',
                width: 1,
            },
        },
    },
    timeline: {
        lineStyle: {
            color: '#626c91',
            width: 1,
        },
        itemStyle: {
            normal: {
                color: '#626c91',
                borderWidth: 1,
            },
            emphasis: {
                color: '#626c91',
            },
        },
        controlStyle: {
            normal: {
                color: '#626c91',
                borderColor: '#626c91',
                borderWidth: 0.5,
            },
            emphasis: {
                color: '#626c91',
                borderColor: '#626c91',
                borderWidth: 0.5,
            },
        },
        checkpointStyle: {
            color: '#3fb1e3',
            borderColor: 'rgba(63,177,227,0.15)',
        },
        label: {
            normal: {
                textStyle: {
                    color: '#626c91',
                },
            },
            emphasis: {
                textStyle: {
                    color: '#626c91',
                },
            },
        },
    },
    visualMap: {
        color: [
            '#2a99c9',
            '#afe8ff',
        ],
    },
    dataZoom: {
        backgroundColor: 'rgba(255,255,255,0)',
        dataBackgroundColor: 'rgba(222,222,222,1)',
        fillerColor: 'rgba(114,230,212,0.25)',
        handleColor: '#cccccc',
        handleSize: '100%',
        textStyle: {
            color: '#999999',
        },
    },
    markPoint: {
        label: {
            normal: {
                textStyle: {
                    color: '#ffffff',
                },
            },
            emphasis: {
                textStyle: {
                    color: '#ffffff',
                },
            },
        },
    },
});
