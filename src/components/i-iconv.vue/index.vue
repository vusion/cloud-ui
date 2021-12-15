<template>
<i :class="['lcp-iconv', `lcp-iconv-${name}`]" :name="name" v-on="$listeners"
    @click="onClick($event)"
    @dblclick="onDblclick($event)"
    @contextmenu="onRightClick($event)"
    @mouseover="onmouseover($event)"
    @mouseout="onmouseout($event)"
    @mousedown="onmousedown($event)"
>
    <span v-if="text" vusion-slot-name="text" class="van-shoud-pa lcp-iconv_text">{{ text }}</span>
</i>
</template>

<script>
export default {
    name: 'i-iconv',
    props: {
        name: String,
        text: {
            type: String,
            default: '图标',
        },
        href: String,
        target: { type: String, default: '_self' },
        to: [String, Object],
        replace: { type: Boolean, default: false },
        append: { type: Boolean, default: false },
        decoration: { type: Boolean, default: true },
        download: { type: Boolean, default: false },
        destination: String,
    },
    methods: {
        onClick(ev) {
            const props = this._props;
            const parent = this.$parent;
            function currentHref() {
                if (props.href !== undefined)
                    return props.href;
                if (props.destination !== undefined && props.destination !== "")
                    return props.destination;
                else if (parent?.$router && props.to !== undefined)
                    return parent?.$router.resolve(props.to, parent?.$route, props.append).href;
                else
                    return undefined;
            }
            const hrefR = currentHref();
            this.$emit('click', ev);
            // @ts-ignore：没办法
            // if (props.target !== '_self')
            //   return;

            if (hrefR === undefined) {
                let to;
                if (props.destination) {
                    // 只处理/a/b形式的链接
                    const origin = window.location.origin;
                    const path = window.location.href.replace(origin, '').split('/');
                    const destination = props.destination.replace(origin, '').split('/');
                    if (path[1] === destination[1]) {
                        to = '/' + destination.slice(2).join('/');
                    } else {
                        return;
                    }
                }
                const currentTo = to || props.to;
                if (currentTo === undefined)
                    return;
                // eslint-disable-next-line prefer-const
                let cancel = false;
                if (cancel)
                    return;
                const $router = parent?.$router;
                const $route = parent?.$route;
                const { location } = $router.resolve(
                    currentTo,
                    $route,
                    props.append,
                );
                props.replace ? $router.replace(location) : $router.push(location);
            } else {
                // eslint-disable-next-line no-inner-declarations
                function downloadClick() {
                    const a = document.createElement('a');
                    a.setAttribute('href', hrefR);
                    document.body.appendChild(a);
                    a.click();
                    setTimeout(() => {
                        document.body.removeChild(a);
                    }, 500);
                }
                downloadClick();
            }
        },
        onDblClick(ev) {
            this.$emit('dblclick', ev);
        },
        onContextMenu(ev) {
            this.$emit('rightclick', ev);
        },
        onmouseover(ev) {
            this.$emit('over', ev);
        },
        onmouseout(ev) {
            this.$emit('out', ev);
        },
        onmousedown(ev) {
            this.$emit('down', ev);
        },
    },
};
</script>

<style src="./index.css"></style>
