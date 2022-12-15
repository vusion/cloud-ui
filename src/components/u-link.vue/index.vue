<template>
<a vusion-slot-name-edit="text" :class="[$style.root]"
    :href="currentHref" :target="target"
    :noDecoration="!decoration"
    :disabled="currentDisabled" :tabindex="currentDisabled ? -1 : 0"
    :download="currentDownload"
    :loading="loading || $attrs.loading"
    :hoverType="hoverType"
    @click="onClick" v-on="listeners">
    <i-ico v-if="icon" :name="icon" :class="$style.btnicon" notext></i-ico>
    <slot>{{ text }}</slot>
</a>
</template>

<script>
import IIco from '../i-ico.vue';
import encodeUrl from '../../utils/encodeUrl';

export default {
    name: 'u-link',
    components: {
        IIco,
    },
    props: {
        icon: String,
        text: String,
        href: String,
        target: { type: String, default: '_self' },
        to: [String, Object],
        replace: { type: Boolean, default: false },
        append: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        decoration: { type: Boolean, default: true },
        download: { type: Boolean, default: false },
        destination: String,
        hoverType: { type: String, default: 'underline' },
    },
    data() {
        return {
            clickEvent: this.$listeners.click || function () { /* noop */ },
            loading: false,
        };
    },
    computed: {
        /**
         * 使用`to`时，也产生一个链接，尽可能向原生的`<a>`靠近
         */
        currentHref() {
            if (this.href !== undefined)
                return encodeUrl(this.href);
            if (this.destination !== undefined)
                return encodeUrl(this.destination);
            else if (this.$router && this.to !== undefined)
                return encodeUrl(this.$router.resolve(this.to, this.$route, this.append).href);
            else
                return undefined;
        },
        listeners() {
            const listeners = Object.assign({}, this.$listeners);
            delete listeners.click;
            return listeners;
        },
        currentDisabled() {
            return this.disabled || this.loading;
        },
        currentDownload() {
            if (this.download && this.href) {
                const fileName = this.href.split('/').pop();
                return fileName;
            }
        },
    },
    watch: {
        $listeners(listeners) {
            this.clickEvent = listeners.click || function () { /* noop */ };
        },
    },
    methods: {
        async wrapClick(...args) {
            this.loading = true;
            try {
                await this.clickEvent(...args);
            } finally {
                this.loading = false;
            }
        },
        onClick(e) {
            if (this.currentDisabled)
                return e.preventDefault();
            if (!this.href && this.$listeners.click) {
                e.preventDefault();
            }
            this.wrapClick(e, this);
            if (this.target !== '_self')
                return; // 使用`to`的时候走`$router`，否则走原生
            if (this.href === undefined) {
                // 使用浏览器的一些快捷键时，走原生
                // @TODO: 考虑使用快捷键抛出事件，阻止流程的需求
                let to;
                if (this.destination) {
                    const beforeHashUrl = this.destination && this.destination.slice(0, this.destination.indexOf('#'));
                    if (this.destination.startsWith('http')) {
                        location.href = encodeUrl(this.destination);
                        return;
                        // 处理同页面锚点跳转
                    } else if (this.destination.indexOf('#') !== -1 && beforeHashUrl === location.pathname) {
                        const hash = this.destination.slice(this.destination.indexOf('#')) && this.destination.slice(this.destination.indexOf('#')).replace('#', '');
                        if (document.getElementById(hash)) {
                            document.getElementById(hash).scrollIntoView();
                            // this.$router.push(this.destination);
                        }
                        return;
                    }
                    to = this.destination;
                }
                if (e.ctrlKey || e.shiftKey || e.metaKey || e.altKey)
                    return;
                e.preventDefault();
                this.navigate(to);
            }
        },
        navigate(to) {
            const currentTo = to || this.to;
            if (currentTo === undefined)
                return;
            if (!this.$router)
                return console.warn('[cloud-ui]', 'Cannot find vue-router.');
            let cancel = false;
            this.$emit(
                'before-navigate',
                {
                    to: currentTo,
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
                currentTo,
                this.$route,
                this.append,
            );
            this.replace ? $router.replace(location) : $router.push(location);
            this.$emit(
                'navigate',
                { to: currentTo, replace: this.replace, append: this.append },
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

.root:hover {
    text-decoration: underline;
}

.root[hoverType="color"]:hover {
    text-decoration: none;
    color: var(--link-color-hover);
}

.root[noDecoration] {
    text-decoration: none!important;
}

.root:focus {
    /* Remove default focus style */
    outline: var(--focus-outline);
    text-decoration: underline;
}

.root[color="success"] {
    color: var(--link-color-success);
}

.root[hoverType="color"][color="success"]:hover {
    color: var(--link-color-success-hover);
}

.root[color="warning"] {
    color: var(--link-color-warning);
}

.root[hoverType="color"][color="warning"]:hover {
    color: var(--link-color-warning-hover);
}

.root[color="error"] {
    color: var(--link-color-error);
}

.root[hoverType="color"][color="error"]:hover {
    color: var(--link-color-error-hover);
}

.root[color="danger"] {
    color: var(--link-color-danger);
}

.root[hoverType="color"][color="danger"]:hover {
    color: var(--link-color-danger-hover);
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

.root[hoverType=color][disabled]:hover {
    color: var(--link-color-disabled);
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.root[loading]::before {
    display: inline-block;
    icon-font: url('../u-spinner.vue/assets/refresh.svg');
    margin-right: 4px;
    animation: spin infinite linear var(--spinner-animation-duration);
}

.root[display="block"] {
    display: block;
}

.root:lang(en) {
    display: inline-block;
    max-width: 100%;
}
.btnicon {

}
</style>
