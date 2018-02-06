import Link from 'proto-ui.vusion/src/u-link.vue';

export default {
    name: 'u-link',
    mixins: [Link],
    props: {
        target: { type: String, default: '_self' },
    },
    computed: {
        currentHref() {
            if (this.href !== undefined)
                return this.href;
            else if (this.$router)
                return this.$router.resolve(this.to, this.$route, this.append).href;
            else
                return undefined;
        },
    },
    methods: {
        onClick(e) {
            if (this.disabled)
                return e.preventDefault();

            this.$emit('click', e);

            if (this.target !== '_self')
                return;

            debugger;
            if (this.href === undefined) {
                e.preventDefault();
                this.navigate();
            }
        },
    },
};
