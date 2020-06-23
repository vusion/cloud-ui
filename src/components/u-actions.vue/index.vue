<template>
<div :class="$style.root">
    <div v-show="false"><slot></slot></div>
    <u-linear-layout gap="small">
        <template v-for="itemVM in outsideVMs">
            <u-create-element tag="u-link" :key="itemVM._uid"
                v-bind="itemVM.$attrs" v-on="itemVM.$listeners"
                :data="itemVM.$vnode.data" :children="itemVM.$slots.default">
            </u-create-element>
        </template>
        <u-link v-if="insideVMs.length">{{ menuTitle }} ▾
            <u-popup :placement="placement">
                <u-menu slot="root">
                    <template v-for="itemVM in insideVMs">
                        <u-create-element tag="u-menu-item" :key="itemVM._uid"
                            v-bind="itemVM.$attrs" v-on="itemVM.$listeners"
                            :data="itemVM.$vnode.data" :children="itemVM.$slots.default">
                        </u-create-element>
                    </template>
                </u-menu>
            </u-popup>
        </u-link>
    </u-linear-layout>
</div>
</template>

<script>
import i18n from './i18n';

export default {
    name: 'u-actions',
    childName: 'u-action',
    i18n,
    props: {
        maxCount: { type: Number, default: 3 },
        menuTitle: {
            type: String,
            default() {
                return this.$t('more');
            },
        },
        placement: { type: String, default: 'bottom-end' },
    },
    data() {
        return { itemVMs: [], outsideVMs: [], insideVMs: [] };
    },
    watch: {
        itemVMs() {
            this.watchValue();
        },
    },
    created() {
        this.$on('add-item-vm', (itemVM) => {
            itemVM.parentVM = this;
            this.itemVMs.push(itemVM);
        });
        this.$on('remove-item-vm', (itemVM) => {
            itemVM.parentVM = undefined;
            this.itemVMs.splice(this.itemVMs.indexOf(itemVM), 1);
        });
    },
    methods: {
        watchValue() {
            const itemVMs = this.itemVMs.filter((itemVM) => !itemVM.hidden);
            if (itemVMs.length <= this.maxCount) {
                this.outsideVMs = itemVMs.slice(0, itemVMs.length);
                this.insideVMs = [];
            } else {
                this.outsideVMs = itemVMs.slice(0, this.maxCount - 1);
                this.insideVMs = itemVMs.slice(
                    this.maxCount - 1,
                    itemVMs.length,
                );
            }
        },
    },
};
</script>

<style module>
.root {}
</style>
