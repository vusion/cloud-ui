import Chart from '../../src/u-chart.vue';

export default {
    name: 'u-chart',
    mixins: [Chart],
    data() {
        return {
            seriesList: this.handleSeriesList(this.series),
        };
    },
    watch: {
        series(series) {
            this.seriesList = this.handleSeriesList(series);
        },
    },
    methods: {
        handleSeriesList(seriesList) {
            // 保证内部始终为 Array
            if (!seriesList)
                return [];

            seriesList.forEach((series) => {
                if (!series.hasOwnProperty('hidden'))
                    this.$set(series, 'hidden', false);
            });

            return seriesList;
        },
        selectLegendItem(series) {
            this.$emit('select-series', {
                series,
            });
        },
        toggleLegendItem(series) {
            if (this.readonly)
                return;
            series.hidden = !series.hidden;
        },
    },
};
