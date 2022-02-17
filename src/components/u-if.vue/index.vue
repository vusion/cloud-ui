<script>
export default {
    name: 'u-if',
    functional: true,
    props: {
        check: Boolean,
    },
    render(h, context) {
        const slot = context.props.check ? 'True' : 'False';
        return context.scopedSlots[slot]();
    },
};
</script>

