export const UCreateElement = {
    name: 'u-create-element',
    functional: true,
    props: {
        tag: { type: String, required: true },
        data: Object,
        children: null,
    },
    render(h, context) {
        // @TODO: 应该细化合并
        const data = Object.assign({}, context.props.data, context.data);
        return h(context.props.tag, data, context.children || context.props.children);
    },
};

export default UCreateElement;

