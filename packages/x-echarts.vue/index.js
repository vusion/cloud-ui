import './theme';
import VueEcharts from 'vue-echarts';

export const XEcharts = {
    extends: VueEcharts,
    props: {
        theme: { type: [String, Object], default: 'cloud-ui' },
    },
};

export default XEcharts;
