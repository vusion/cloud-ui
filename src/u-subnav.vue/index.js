export default {
    name: 'u-subnav',
    props: {
        usage: {
            type: String,
            validator: (value) => ['', 'tabs'].includes(value),
        },
    },
};
