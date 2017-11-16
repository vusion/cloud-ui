export default {
    name: 'u-tooltip',
    props: {
        content: {
            type: String,
            default: '提示内容',
        },
        placement: {
            type: String,
            default: 'bottom',
        },
        contentWidth: {
            type: String,
            default: 'auto',
        },
        contentHeight: {
            type: String,
            default: 'auto',
        },
    },
};
