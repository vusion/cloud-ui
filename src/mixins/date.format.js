import dayjs from '../utils/dayjs';

export default {
    props: {
        // 高级格式化
        advancedFormat: {
            type: Object,
            default: () => ({
                enable: false,
                value: '',
            }),
        },
        showFormatter: {
            type: String,
        },
    },
    computed: {
        validShowFormatters() {
            return [];
        },
    },
    methods: {
        getFormatString() {
            return '';
        },
        getDisplayFormatString() {
            let formatter;

            if (this.advancedFormat && this.advancedFormat.enable && this.advancedFormat.value) { // 高级格式化开启
                formatter = this.advancedFormat.value;
            } else if (this.validShowFormatters.includes(this.showFormatter)) { // 配置的展示格式满足
                formatter = this.showFormatter;
            }

            if (formatter) {
                return formatter;
            }

            return this.getFormatString();
        },
        genDisplayFormatText(value) {
            if (!value)
                return value;

            let text = value;
            try {
                const valueFormatter = this.getFormatString();
                const displayFormatter = this.getDisplayFormatString();

                if (displayFormatter && displayFormatter !== valueFormatter) {
                    text = dayjs(value, valueFormatter).format(displayFormatter);
                }
            } catch (error) {
                console.log(error);
            }

            return text;
        },
    },
};
