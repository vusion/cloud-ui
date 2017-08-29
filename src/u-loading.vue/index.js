export default {
    name: 'u-loading',
    props: {
        size: {
            type: String,
            default() {
                return '';
            },
            validator(value) {
                return ['small', '', 'large'].includes(value);
            },
        },
        visible: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {

        };
    },
};
