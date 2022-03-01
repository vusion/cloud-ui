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
</nav>
</template>

<script>
import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';
import MParent from '../m-parent.vue';
import { getRouteComponentOptions } from '../../utils/vue';

export default {
    name: 'u-crumb',
    childName: 'u-crumb-item',
    mixins: [MParent],
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
    watch: {
        $route: {
            handler(to, from) {
                if (to.fullPath === (from && from.fullPath))
                    return;

                const matched = to.matched || [];
                const items = [];
                matched.forEach((route) => {
                    const componentOptions = getRouteComponentOptions(route);
                    const meta = Object.assign({}, route.meta, componentOptions && componentOptions.meta);

                    let crumb = meta.crumb;
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
