<template>
<nav :class="$style.root">
    <template v-if="auto && $env.VUE_APP_DESIGNER">
        <u-crumb-item text="面包屑"></u-crumb-item>
        <u-crumb-item text="会根据路径"></u-crumb-item>
        <u-crumb-item text="自动生成"></u-crumb-item>
    </template>
    <template v-else-if="auto">
        <template v-for="item in items">
            <u-crumb-item v-bind="item" :key="item.title" :text="item.title"></u-crumb-item>
        </template>
    </template>
    <slot v-else></slot>
    <s-empty v-if="showSEmpty"></s-empty>
</nav>
</template>

<script>
import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';
import MParent from '../m-parent.vue';
import { getRouteComponentOptions } from '../../utils/vue';
import SEmpty from '../s-empty.vue';
import i18nMixin from '../../mixins/i18n';

export default {
    name: 'u-crumb',
    childName: 'u-crumb-item',
    mixins: [MParent, i18nMixin('u-crumb')],
    components: { SEmpty },
    props: {
        auto: { type: Boolean, default: false },
        separator: { type: String, default: 'arrow' },
        icon: { type: Boolean, default: false },
    },
    data() {
        return {
            // @inherit: itemVMs: [],
            items: [],
        };
    },
    computed: {
        showSEmpty() {
            return this.$env.VUE_APP_DESIGNER && !this.$slots.default && !this.auto && (!this.items || this.items.length === 0);
        },
    },
    watch: {
        $route: {
            handler(to, from) {
                if (!to || to.fullPath === (from && from.fullPath))
                    return;

                const matched = to.matched || [];
                const items = [];
                matched.forEach((route) => {
                    const componentOptions = getRouteComponentOptions(route);
                    const meta = Object.assign({}, route.meta, componentOptions && componentOptions.meta);

                    let crumb = meta.crumb;

                    // 面包屑国际化
                    if (meta.crumbI18n) {
                        const crumbI18nMsg = this.$tt(meta.crumbI18n);
                        if (crumbI18nMsg)
                            crumb = crumbI18nMsg;
                    }

                    if (crumb) {
                        if (isFunction(crumb))
                            crumb = crumb(route, to, from);
                        else if (isObject(crumb))
                            crumb = Object.assign({}, crumb);
                        else if (typeof crumb === 'string')
                            crumb = { title: crumb };

                        if (!crumb.to)
                            crumb.to = route.path || '/';
                        if (crumb.to === to.path)
                            crumb.readonly = true;

                        if (crumb.title)
                            items.push(crumb);
                    }
                });
                const last = items[items.length - 1];
                last && (last.readonly = true);

                this.items = items;
            },
            immediate: true,
        },
    },
};
</script>

<style module>
.root {}
</style>
