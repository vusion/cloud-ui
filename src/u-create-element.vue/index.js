export default {
    name: 'u-create-element',
    functional: true,
    props: {
        tag: { type: String, required: true },
        data: Object,
        children: null,
    },
    render(h, context) {
        const data = Object.assign({}, context.props.data, context.data);
        console.log(data);
        return h(context.props.tag, data, context.children || context.props.children);
    },
};
