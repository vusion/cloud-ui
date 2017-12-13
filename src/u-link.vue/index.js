import Link from 'proto-ui.vusion/src/u-link.vue';

export default {
    name: 'u-link',
    mixins: [Link],
    data() {
        return {
            currentHref: undefined,
        };
    },
    watch: {
        href(newValue) {
            if (newValue)
                this.currentHref = newValue;
        },
        to: {
            immediate: true,
            handler(newValue, oldValue) {
                if (this.href)
                    this.currentHref = this.href;
                else if (this.to && this.$router) {
                    const $router = this.$router;
                    const { location } = $router.resolve(this.to, this.$route, this.append);
                    const keys = Object.keys(location.query);
                    let query = '';
                    let currentHref = '';
                    if (keys.length) {
                        keys.forEach((key, index) => {
                            if (index !== (keys.length - 1))
                                query += key + '=' + location.query[key] + '&';
                            else
                                query += key + '=' + location.query[key];
                        });
                        currentHref = location.path + '?' + query;
                    } else
                        currentHref = location.path;

                    if ($router.mode === 'hash')
                        currentHref = '#' + currentHref;

                    this.currentHref = currentHref;
                }
            },
        },
    },
    methods: {
        onClick(e) {
            if (this.disabled)
                return e.peventDefault();

            this.$emit('click', e);

            if (!this.href)
                this.navigate();
        },
        navigate() {
            if (this.to === undefined)
                return;

            if (!this.$router)
                return console.warn('[proto-ui]', 'Cannot find vue-router.');

            let cancel = false;
            this.$emit('before-navigate', {
                to: this.to,
                replace: this.replace,
                append: this.append,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            const $router = this.$router;
            const { location } = $router.resolve(this.to, this.$route, this.append);
            this.replace ? $router.replace(location) : $router.push(location);

            this.$emit('navigate', {
                to: this.to,
                replace: this.replace,
                append: this.append,
            });
        },
    },
};
