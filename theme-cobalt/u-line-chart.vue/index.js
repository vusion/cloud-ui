import Chart from '../u-chart.vue';
import LineChart from '../../src/u-line-chart.vue';

export default {
    name: 'u-line-chart',
    mixins: [Chart, LineChart],
    methods: {
        getTriggerEl(referenceEl) {
            return referenceEl.parentElement;
        },
    },
};
