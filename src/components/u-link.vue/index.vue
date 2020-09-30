<template>
<a :class="$style.root" :href="currentHref" :target="target"
    :noDecoration="!decoration"
    :disabled="disabled" :tabindex="disabled ? -1 : 0"
    @click="onClick" v-on="listeners">
    <slot></slot>
</a>
</template>

<script>
export default {
    name: 'u-link',
    props: {
        href: String,
        target: { type: String, default: '_self' },
        to: [String, Object],
        replace: { type: Boolean, default: false },
        append: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        decoration: { type: Boolean, default: true },
    },
    computed: {
        /**
         * 使用`to`时，也产生一个链接，尽可能向原生的`<a>`靠近
         */ currentHref() {
            if (this.href !== undefined)
return this.href;
            else if (this.$router && this.to !== undefined)
                return this.$router.resolve(this.to, this.$route, this.append)
                    .href;
            else
return undefined;
        },
        listeners() {
            const listeners = Object.assign({}, this.$listeners);
            delete listeners.click;
            return listeners;
        },
    },
    methods: {
        onClick(e) {
            if (this.disabled)
                return e.preventDefault();
            this.$emit('click', e, this);
            if (this.target !== '_self')
                return; // 使用`to`的时候走`$router`，否则走原生
            if (this.href === undefined) {
                // 使用浏览器的一些快捷键时，走原生
                // @TODO: 考虑使用快捷键抛出事件，阻止流程的需求
                if (e.ctrlKey || e.shiftKey || e.metaKey || e.altKey)
                    return;
                e.preventDefault();
                this.navigate();
            }
        },
        navigate() {
            if (this.to === undefined)
                return;
            if (!this.$router)
                return console.warn('[cloud-ui]', 'Cannot find vue-router.');
            let cancel = false;
            this.$emit(
                'before-navigate',
                {
                    to: this.to,
                    replace: this.replace,
                    append: this.append,
                    preventDefault: () => (cancel = true),
                },
                this,
            );
            if (cancel)
                return;
            const $router = this.$router;
            const { location } = $router.resolve(
                this.to,
                this.$route,
                this.append,
            );
            this.replace ? $router.replace(location) : $router.push(location);
            this.$emit(
                'navigate',
                { to: this.to, replace: this.replace, append: this.append },
                this,
            );
        },
    },
};
</script>

<style module>
.root {
    color: var(--link-color);
}
.root[noDecoration] {
    text-decoration: none!important;
}
.root:hover {
    text-decoration: underline;
}

.root:focus {
    /* Remove default focus style */
    outline: var(--focus-outline);
    text-decoration: underline;
}

.root[color="success"] {
    color: var(--link-color-success);
}

.root[color="warning"] {
    color: var(--link-color-warning);
}

.root[color="error"] {
    color: var(--link-color-error);
}

.root[color="danger"] {
    color: var(--link-color-danger);
}

.root[color="light"] {
    color: var(--link-color-light);
}

.root[color="white"] {
    color: var(--link-color-white);
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    color: var(--link-color-disabled);
    text-decoration: none;
}

.root[display="block"] {
    display: block;
}

.root:lang(en) {
    display: inline-block;
    max-width: 100%;
}
</style>
