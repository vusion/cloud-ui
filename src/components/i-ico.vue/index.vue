<template>
<span :class="[$style['lcp-iconv']]"
    @click="onClick($event)"
    @dblclick="onDblclick($event)"
    @contextmenu="onContextMenu($event)"
    @mouseenter="onmouseover($event)"
    @mouseleave="onmouseout($event)"
    @mousedown="onmousedown($event)"
>
    <span :class="$style.iconwrap">
        <svg :class="$style.iconsvg" aria-hidden="true">
            <use :xlink:href="`#${iconconfig.css_prefix_text}${getName()}`" />
        </svg>
    </span>
    <div :class="$style.icontext" vusion-slot-name="default">
        <slot></slot>
        <s-empty v-if="(!$slots.default) && $env.VUE_APP_DESIGNER && !notext"></s-empty>
    </div>
</span>
</template>

<script>
import './icon.js';
import iconconfig from './iconconfig.js';
import SEmpty from '../../components/s-empty.vue';
import encodeUrl from '../../utils/encodeUrl';

export default {
    name: 'i-ico',
    components: { SEmpty },
    props: {
        name: String,
        notext: Boolean,
        href: String,
        target: { type: String, default: '_self' },
        to: [String, Object],
        replace: { type: Boolean, default: false },
        append: { type: Boolean, default: false },
        decoration: { type: Boolean, default: true },
        download: { type: Boolean, default: false },
        destination: String,
    },
    data() {
        return {
            iconconfig,
        };
    },
    methods: {
        getName() {
            const item = this.iconconfig.glyphs.find((v) => v.font_class === this.name);
            return item ? item.font_class : 'default';
        },
        onClick(ev) {
            console.log(ev, 999)
            const props = this._props;
            const parent = this.$parent;
            function currentHref() {
                if (props.href !== undefined)
                    return encodeUrl(props.href);
                if (props.destination !== undefined && props.destination !== "")
                    return encodeUrl(props.destination);
                else if (parent && parent.$router && props.to !== undefined)
                    return encodeUrl(parent && parent.$router.resolve(props.to, parent && parent.$route, props.append).href);
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
                        to = encodeUrl('/' + destination.slice(2).join('/'));
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
                const $router = parent && parent.$router;
                const $route = parent && parent.$route;
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
        onDblclick(ev) {
            this.$emit('dblclick', ev);
        },
        onContextMenu(ev) {
            ev.preventDefault();
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
<style module>
.root {
}
.lcp-iconv {
    display: inline-block;
    text-align: center;
    font-size: 16px;
}
.iconwrap {
    /* font-size: 16px;  */
    /* padding: 8px; */
}
.iconsvg {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
.icontext {
    line-height: 1;
}
.icontext [class^="u-text_"]{
    font-style: initial;
    font-size: 14px;
    color: #666;
}
</style>
