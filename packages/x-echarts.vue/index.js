import './theme';
import ECharts from 'vue-echarts';
export const XEcharts = {
    props: {
        theme: {
            type: [String, Object],
            default: 'cloud',
        },
    },
    mixins: [ECharts],
};
export default XEcharts;
