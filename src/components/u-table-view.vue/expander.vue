<template>
  <span
    :class="$style.expander"
    :expanded="item.expanded"
    :disabled="item.disabled"
    @click.stop="toggle"

    :vusion-disabled-move="true"
    :vusion-disabled-cut="true"
    :vusion-disabled-copy="true"
  >
    <!-- 关闭时 -->
    <i-ico
        v-if="!item.expanded && collapseIcon"
        :name="collapseIcon"
        :class="$style.icon"
        :expanded="false"
        notext
    ></i-ico>
    <!-- 展开时 -->
    <i-ico
        v-if="item.expanded && expandIcon"
        :name="expandIcon"
        :class="$style.icon"
        :expanded="true"
        notext
    ></i-ico>

    <!-- 横线 -->
    <span
      v-show="showBefore"
      :class="$style.before"></span>
    <!-- 竖线 -->
    <span
      v-show="showAfter"
      :class="$style.after"></span>
  </span>
</template>

<script>
export default {
    name: 'u-table-view-expander',
    props: {
        item: Object,
        expandIcon: String,
        collapseIcon: String,
    },
    computed: {
        expanded() {
            return this.item.expanded;
        },
        showBefore() {
            if (this.collapseIcon && this.expandIcon) {
                return false;
            }

            if (this.collapseIcon && !this.expanded) {
                return false;
            }

            if (this.expandIcon && this.expanded) {
                return false;
            }

            return true;
        },
        showAfter() {
            if (this.collapseIcon && this.expandIcon) {
                return false;
            }

            if (this.collapseIcon && !this.expanded) {
                return false;
            }

            if (this.expandIcon && this.expanded) {
                return false;
            }

            return true;
        },
    },
    methods: {
        toggle() {
            this.$emit('toggle');
        },
    },
};
</script>

<style module>
.expander {
    user-select: none;
    display: inline-block;
    width: var(--table-view-expander-size);
    height: var(--table-view-expander-size);
    line-height: var(--table-view-expander-size);
    vertical-align: -2px;
    /* text-align: center;
    transform: rotate(-180deg); */
    position: relative;
    background-color: var(--table-view-expander-background);
    cursor: pointer;

    border: 1px solid var(--table-view-expander-border-color);
    border-radius: var(--table-view-expander-border-radius);
}
.expander:hover{
    background-color: var(--table-view-expander-background-hover);
    border-color: var(--table-view-expander-border-color-hover);
}
.expander .before,
.expander .after {
    position: absolute;
    background: currentcolor;
    content: "";
    background: var(--table-view-expander-color);
    transition: transform .2s ease-out;
}
.expander:hover .before,
.expander:hover .after{
    background: var(--table-view-expander-color-hover);
}
/* 横线 */
.expander .before {
    top: 6px;
    right: 3px;
    left: 3px;
    height: 2px;
    transform: rotate(-180deg);
}
/* 竖线 */
.expander .after {
    top: 3px;
    bottom: 3px;
    left: 6px;
    width: 2px;
    transform: rotate(0deg);
}

.expander[expanded] .after {
   transform: rotate(90deg);
}
.expander[disabled] {
    border: 1px solid var(--table-view-expander-border-color-disabled);
    background: var(--table-view-expander-background-disabled);
    cursor: not-allowed;
}
.expander[disabled] .before,
.expander[disabled] .after{
    background: var(--table-view-expander-color-disabled);
}

</style>
