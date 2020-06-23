<script>
export default {
    name: 'f-collapse-transition',
    functional: true,
    render(h, { children }) {
        const old = {};
        return h(
            'transition',
            {
                on: {
                    beforeEnter(el) {
                        old.paddingTop = el.style.paddingTop;
                        old.paddingBottom = el.style.paddingBottom;
                        el.style.height = '0';
                        el.style.paddingTop = 0;
                        el.style.paddingBottom = 0;
                    },
                    enter(el) {
                        old.overflow = el.style.overflow;
                        el.style.height = el.scrollHeight
                            ? el.scrollHeight + 'px'
                            : '';
                        el.style.paddingTop = old.paddingTop;
                        el.style.paddingBottom = old.paddingBottom;
                        el.style.overflow = 'hidden';
                    },
                    afterEnter(el) {
                        el.style.height = '';
                        el.style.overflow = old.overflow;
                    },
                    beforeLeave(el) {
                        old.paddingTop = el.style.paddingTop;
                        old.paddingBottom = el.style.paddingBottom;
                        old.overflow = el.style.overflow;
                        el.style.height = el.scrollHeight + 'px';
                        el.style.overflow = 'hidden';
                    },
                    leave(el) {
                        if (el.scrollHeight) {
                            el.style.height = 0;
                            el.style.paddingTop = 0;
                            el.style.paddingBottom = 0;
                        }
                    },
                    afterLeave(el) {
                        el.style.height = '';
                        el.style.overflow = old.overflow;
                        el.style.paddingTop = old.paddingTop;
                        el.style.paddingBottom = old.paddingBottom;
                    },
                },
            },
            children,
        );
    },
};
</script>
