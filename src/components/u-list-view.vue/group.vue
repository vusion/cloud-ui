<template>
<div :class="$style.root" :disabled="disabled">
    <div :class="$style.head" @click="parentVM.expandTrigger === 'click' && toggle()">
         <div :class="$style.title" vusion-slot-name="title" vusion-slot-name-edit="title">
            <slot name="title">
                {{ title }}
                <s-empty
                    v-if="(!$slots.title)
                    && !title
                    && $env.VUE_APP_DESIGNER
                    && !!$attrs['vusion-node-path']">
                </s-empty>
            </slot>
        </div>
        <span v-if="currentCollapsible" :class="$style.expander"
            :expanded="currentExpanded"
            @click="parentVM.expandTrigger === 'click-expander' && ($event.stopPropagation(), toggle())"
        ></span>
        <span :class="$style.extra"><slot name="extra"></slot></span>
    </div>
    <f-collapse-transition>
        <div :class="$style.body" vusion-slot-name="default" v-show="currentCollapsible ? currentExpanded : true">
            <slot></slot>
            <template v-if="(!$slots.default) && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']">
                <span style="margin-left:5px" v-if="$options.name === 'u-select-group'">请插入子节点</span>
                <s-empty v-else></s-empty>
            </template>
        </div>
    </f-collapse-transition>
</div>
</template>

<script>
import { MGroup } from '../m-group.vue';
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-list-view-group',
    parentName: 'u-list-view',
    childName: 'u-list-view-item',
    components: {
        SEmpty,
    },
    mixins: [MGroup],
};
</script>

<style module>
.root {
    position: relative;
}

.head {
    padding: var(--list-view-group-head-padding);
    background: var(--list-view-group-head-background);
}

.text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.body {
    /* transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out; */
}

.expander {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    width: var(--list-view-group-expander-size);
    height: var(--list-view-group-expander-size);
    line-height: var(--list-view-group-expander-size);
    text-align: center;
    transition: transform var(--transition-duration-base);
}

.expander::before {
    icon-font: url('i-material-design.vue/assets/filled/arrow_right.svg');
}

.expander[expanded] {
    transform: rotate(90deg);
}

.root[disabled] .expander {
    color: var(--brand-disabled);
}

.extra {
    float: right;
}
</style>
