<script>
export default {
    name: 'f-render',
    functional: true,
    props: { vnode: null },
    render(h, context) {
        return context.props.vnode || context.children;
    },
};
</script>
