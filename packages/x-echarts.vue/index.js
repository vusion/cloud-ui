import './theme';
import VueEcharts from 'vue-echarts';

export const XEcharts = {
    name: 'x-echarts',
    extends: VueEcharts,
    props: {
        theme: { type: [String, Object], default: 'cloud-ui' },
        autoresize: { type: Boolean, default: true },
    },
};

export default XEcharts;
