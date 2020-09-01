<template>
<div :class="$style.root" :readonly="readonly" :disabled="disabled" :opened="popperOpened"
    :clearable="clearable && !!currentText"
    :tabindex="readonly || currentDisabled ? '' : 0"
    @click="focus"
    @keydown.up.prevent="$refs.popper.currentOpened ? shift(-1) : open()"
    @keydown.down.prevent="$refs.popper.currentOpened ? shift(+1) : open()"
    @keydown.enter.stop="onEnter"
    @keydown.esc.stop="close(), filterText = ''"
    @blur="onRootBlur">
    <span :class="$style.baseline">b</span><!-- 用于基线对齐 -->
    <span v-show="!filterText && (multiple ? !selectedVMs.length : !selectedVM)" :class="$style.placeholder">{{ placeholder }}</span>
    <u-input v-if="filterable" :class="$style.input" ref="input" :readonly="readonly" :disabled="currentDisabled"
        :placeholder="multiple && selectedVMs.length ? '' : placeholder" :filterable="filterable" :multiple-tags="multiple && this.multipleAppearance === 'tags'"
        :value="filterText" @input="onInput" @focus="onFocus" @blur="onBlur"
        @keydown.enter.stop="onInputEnter" @keydown.delete.stop="onInputDelete"
        :style="{ width: multiple && (inputWidth + 'px') }">
    </u-input>
    <span v-if="clearable && !!currentText" :class="$style.clearable" @click="clear"></span>
    <m-popper :class="$style.popper" ref="popper" append-to="reference" :disabled="readonly || currentDisabled"
        @update:opened="$emit('update:opened', $event, this)"
        @before-open="$emit('before-open', $event, this)"
        @before-close="$emit('before-close', $event, this)"
        @open="onOpen"
        @close="onClose"
        @before-toggle="$emit('before-toggle', $event, this)"
        @toggle="$emit('toggle', $event, this)"
        @click.stop @scroll.stop="onScroll">
        <u-list-view v-if="">

        </u-list-view>
    </m-popper>
</div>
</template>

<script>
export default {
    name: 'u-new-time-picker',
    props: {
        value: String,
        format: { type: String, default: 'HH:mm:ss' },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            currentValue: this.value,
            unitMap: {},
        };
    },
    watch: {
        opened(opened) {
            if (opened === this.popperOpened)
                return;
            this.toggle(opened);
        },
    },
    created() {
        //
    },
    methods: {
        handleFormat() {
            this.unitMap = {};

            const arr = this.format.split(':');
            arr.forEach((item) => {
                this.unitMap[item] = true;
            });
        },
        open() {
            this.$refs.popper && this.$refs.popper.open();
        },
        close() {
            this.$refs.popper && this.$refs.popper.close();
        },
        toggle(opened) {
            this.$refs.popper && this.$refs.popper.toggle(opened);
        },

        focus() {
            this.$refs.input.focus();
        },
        blur() {
            this.$refs.input.blur();
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    position: relative;
    user-select: none;
    max-width: 100%;
    cursor: var(--cursor-pointer);
    width: var(--select-width);
    height: var(--select-height);
    line-height: calc(var(--select-height) - var(--select-border-width) * 2);
    padding: 0 var(--select-padding-x);
    padding-right: calc(var(--select-arrow-size) * 7 / 9 + var(--select-arrow-right-ratio) * var(--select-padding-x));
    background: var(--select-background);
    border: var(--select-border-width) solid var(--select-border-color);
    color: var(--select-color);
    border-radius: var(--border-radius-base);
}

.root:focus {
    outline: var(--focus-outline);
    box-shadow: var(--select-box-shadow-focus);
}

.baseline {
    visibility: hidden;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
}

.placeholder {
    color: var(--select-placeholder-color);
    position: absolute;
    left: 0;
    top: 0;
    padding: inherit;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.clearable::before {
    display: block;
    position: absolute;
    right: 8px;
    top: 0;
    bottom: 0;
    z-index: 1;
    line-height: 1;
    height: 1em;
    margin: auto;
    icon-font: url('../i-icon.vue/assets/close-solid.svg');
    cursor: var(--cursor-pointer);
    color: #a7afbb;
}

.root[filterable] {
    cursor: text;
}

.root::after {
    position: absolute;
    icon-font: url('../i-icon.vue/icons/keyboard-arrow-down.svg');
    font-size: var(--select-arrow-size);
    right: calc(var(--select-arrow-right-ratio) * var(--select-padding-x));
    top: 0;
    bottom: 0;
    line-height: 1.2;
    height: 1em;
    margin: auto;
    color: var(--select-arrow-color);
    transition: transform var(--transition-duration-base);
}
.root[opened]::after {
    transform: rotate(-180deg);
}

.root[clearable]::after {
    display: none;
}

.root[readonly] {
    cursor: default;
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    background: var(--select-background-disabled);
    color: var(--select-color-disabled);
    border: 1px solid var(--brand-disabled);
}

.input {
    position: absolute;
    border: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.popper {
    position: absolute;
    box-sizing: content-box;
    width: 100%;
    line-height: var(--select-popper-line-height);
    max-height: var(--select-popper-max-height);
    overflow: auto;
    background: var(--select-popper-background);
    border: 1px solid var(--select-popper-border-color);
    z-index: var(--z-index-popper);
    margin-top: 1px;
    border-radius: var(--border-radius-base);
    box-shadow: var(--select-popper-box-shadow);
}

.root[size$="mini"] { width: var(--select-width-mini); padding: 0 var(--select-padding-x-mini); padding-right: calc(var(--select-arrow-size) * 7 / 9 + var(--select-arrow-right-ratio) * var(--select-padding-x-mini)); }
.root[size$="mini"] .item { padding: 0 var(--select-padding-x-mini); }
.root[size$="mini"]::after { right: calc(var(--select-arrow-right-ratio) * var(--select-padding-x-mini)); }
.root[size^="mini"] { height: var(--select-height-mini); line-height: calc(var(--select-height-mini) - var(--select-border-width) * 2); }
.root[size^="mini"] .item { line-height: calc(var(--select-height-mini) - var(--select-border-width) * 2); }
.root[size^="mini"] .popper { max-height: calc(6 * calc(var(--select-height-mini) - var(--select-border-width) * 2)); }

.root[size$="small"] { width: var(--select-width-small); padding: 0 var(--select-padding-x-small); padding-right: calc(var(--select-arrow-size) * 7 / 9 + var(--select-arrow-right-ratio) * var(--select-padding-x-small)); }
.root[size$="small"] .item { padding: 0 var(--select-padding-x-small); }
.root[size$="small"]::after { right: calc(var(--select-arrow-right-ratio) * var(--select-padding-x-small)); }
.root[size^="small"] { height: var(--select-height-small); line-height: calc(var(--select-height-small) - var(--select-border-width) * 2); }
.root[size^="small"] .item { line-height: calc(var(--select-height-small) - var(--select-border-width) * 2); }
.root[size^="small"] .popper { max-height: calc(6 * calc(var(--select-height-small) - var(--select-border-width) * 2)); }

.root[size$="normal"] { width: var(--select-width); padding: 0 var(--select-padding-x); padding-right: calc(var(--select-arrow-size) * 7 / 9 + var(--select-arrow-right-ratio) * var(--select-padding-x)); }
.root[size$="normal"] .item { padding: 0 var(--select-padding-x); }
.root[size$="normal"]::after { right: calc(var(--select-arrow-right-ratio) * var(--select-padding-x)); }
.root[size^="normal"] { height: var(--select-height); line-height: calc(var(--select-height) - var(--select-border-width) * 2); }
.root[size^="normal"] .item { line-height: calc(var(--select-height) - var(--select-border-width) * 2); }
.root[size^="normal"] .popper { max-height: calc(6 * calc(var(--select-height) - var(--select-border-width) * 2)); }

.root[size$="medium"] { width: var(--select-width-medium); padding: 0 var(--select-padding-x-medium); padding-right: calc(var(--select-arrow-size) * 7 / 9 + var(--select-arrow-right-ratio) * var(--select-padding-x-medium)); }
.root[size$="medium"] .item { padding: 0 var(--select-padding-x-medium); }
.root[size$="medium"]::after { right: calc(var(--select-arrow-right-ratio) * var(--select-padding-x-medium)); }
.root[size^="medium"] { height: var(--select-height-medium); line-height: calc(var(--select-height-medium) - var(--select-border-width) * 2); }
.root[size^="medium"] .item { line-height: calc(var(--select-height-medium) - var(--select-border-width) * 2); }
.root[size^="medium"] .popper { max-height: calc(6 * calc(var(--select-height-medium) - var(--select-border-width) * 2)); }

.root[size$="large"] { width: var(--select-width-large); padding: 0 var(--select-padding-x-large); padding-right: calc(var(--select-arrow-size) * 7 / 9 + var(--select-arrow-right-ratio) * var(--select-padding-x-large)); }
.root[size$="large"] .item { padding: 0 var(--select-padding-x-large); }
.root[size$="large"]::after { right: calc(var(--select-arrow-right-ratio) * var(--select-padding-x-large)); }
.root[size^="large"] { height: var(--select-height-large); line-height: calc(var(--select-height-large) - var(--select-border-width) * 2); }
.root[size^="large"] .item { line-height: calc(var(--select-height-large) - var(--select-border-width) * 2); }
.root[size^="large"] .popper { max-height: calc(6 * calc(var(--select-height-large) - var(--select-border-width) * 2)); }

.root[size$="huge"] { width: var(--select-width-huge); padding: 0 var(--select-padding-x-huge); padding-right: calc(var(--select-arrow-size) * 7 / 9 + var(--select-arrow-right-ratio) * var(--select-padding-x-huge)); }
.root[size$="huge"] .item { padding: 0 var(--select-padding-x-huge); }
.root[size$="huge"]::after { right: calc(var(--select-arrow-right-ratio) * var(--select-padding-x-huge)); }
.root[size^="huge"] { height: var(--select-height-huge); line-height: calc(var(--select-height-huge) - var(--select-border-width) * 2); }
.root[size^="huge"] .item { line-height: calc(var(--select-height-huge) - var(--select-border-width) * 2); }
.root[size^="huge"] .popper { max-height: calc(6 * calc(var(--select-height-huge) - var(--select-border-width) * 2)); }

.root[size$="full"] { width: 100%; padding: 0 var(--select-padding-x-full); padding-right: calc(var(--select-arrow-size) * 7 / 9 + var(--select-arrow-right-ratio) * var(--select-padding-x-full)); }
.root[size$="full"] .item { padding: 0 var(--select-padding-x-full); }
.root[size^="full"] { height: 100%; }
</style>
