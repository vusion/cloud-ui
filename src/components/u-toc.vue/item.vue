<template>
<div :class="$style.root">
    <a :class="$style.link"
        :selected="selected" :readonly="parentVM.readonly" :disabled="disabled || parentVM.disabled"
        :href="currentHref" :target="target" @click="parentVM.router ? onClick($event) : select($event)" v-on="listeners"
        v-ellipsis-title>
        {{ label }}
    </a>
    <div :class="$style.sub">
        <slot></slot>
    </div>
</div>
</template>

<script>
import { MSinglexItem } from '../m-singlex.vue';

export const UTocItem = {
    name: 'u-toc-item',
    parentName: 'u-toc',
    extends: MSinglexItem,
    props: {
        label: String,
        exact: { type: Boolean, default: true },
        exactHash: { type: Boolean, default: true },
    },
    computed: {
        listeners() {
            const listeners = Object.assign({}, this.$listeners);
            delete listeners.click;
            return listeners;
        },
        selected() {
            if (this.isSelected && !this.active) {
                return this.isSelected;
            } else if (!this.isSelected && this.active) {
                return false;
            }
            return this.parentVM.router ? this.active : this.isSelected;
        },
    },
    watch: {
        active(active) {
            this.watchActive(active);
        },
    },
    mounted() {
        this.watchActive(this.active);
    },
    methods: {
        watchActive(active) {
            // active && this.groupVM && this.groupVM.toggle(true);
            if (active && this.parentVM) {
                this.parentVM.setActive(this);
                this.parentVM.stopScrollSpy(this);
            }
        },
    },
};

export default UTocItem;
</script>

<style module>
.root {
    position: relative;
    display: block;
    cursor: var(--cursor-pointer);
}

.root::before {
    content: '';
    display: block;
    position: absolute;
    width: var(--toc-item-circle-size);
    height: var(--toc-item-circle-size);
    left: -13px;
    top: 9px;
    border-radius: 100px;
    background: var(--toc-border-color);
}

.root .root::before {
    display: none;
}

.link {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.link:hover {
    color: var(--brand-primary);
}

.link[readonly] {
    cursor: default;
    background: none;
}

.link[selected] {
    color: var(--brand-primary);
}

.link[disabled] {
    /* @Private */
    cursor: var(--cursor-not-allowed);
    background: none;
    color: var(--color-light);
}

.link[selected][disabled] {
    background: var(--gray-lighter);
}

.sub {
    padding-left: 1em;
}
</style>
