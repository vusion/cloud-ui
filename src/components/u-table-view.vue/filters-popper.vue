<template>
<m-popper :class="$style.root" ref="popper" trigger="click.stop" placement="bottom-start" :disabled="disabled" @click.stop @open="onOpen">
    <f-scroll-view @click.stop :class="$style.scrollview" trigger="hover">
        <div :class="$style.wrap">
            <u-table-view-filters :value.sync="currentValue" @before-select="onBeforeSelect" :multiple="multiple" @select="onSelect">
                <u-table-view-filter v-for="filter in currentData" :key="filter.value" :value="filter.value" :disabled="filter.disabled">{{ filter.text }}</u-table-view-filter>
            </u-table-view-filters>
        </div>
    </f-scroll-view>
    <u-linear-layout justify="space-between" :class="$style.footer" v-if="multiple">
        <u-link @click="reset">重置</u-link>
        <u-link @click="confirm">确定</u-link>
    </u-linear-layout>
</m-popper>
</template>

<script>

export default {
    name: 'u-table-view-filters-popper',
    props: {
        value:  [Array, String, Number],
        data: Array,
        multiple: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        max: { type: Number, default: Infinity },
    },
    data(){
        return {
            currentValue: this.value,
            currentData: this.data,
        }
    },
    watch: {
        currentValue() {
            this.handleData();
        }
    },
    created() {
        this.transfomValue(); // 老的value是string格式，兼容
        this.handleData();
    },
    methods: {
        open() {
            this.$refs.popper && this.$refs.popper.open();
        },
        close() {
            this.$refs.popper && this.$refs.popper.close();
        },
        toggle(opened) {
            this.$refs.popper && this.$refs.popper.toggle(opened);
        },
        reset() {
            this.currentValue = [];
        },
        confirm() {
            this.close();
            let value = undefined;
            if(this.multiple){
                if(this.currentValue && this.currentValue.length){
                    value = this.currentValue;
                }
            } else {
                value = this.currentValue;
            }
            this.$emit('select', { value });
        },
        onSelect($event) {
            if(!this.multiple) {
                this.$emit('select', $event);
                this.close();
            }
        },
        onBeforeSelect(event) {
            if(this.multiple) {
                if(event.selected && this.exceedMax()) {
                    event.preventDefault();
                }
            }
        },
        handleData() {
            if(this.multiple){
                const exceedMax = this.exceedMax();
                this.currentData.forEach((item)=>{
                    item.disabled  = exceedMax && !this.currentValue.includes(item.value);
                });
            }
        },
        onOpen() {
            this.transfomValue();
            this.handleData();
        },
        transfomValue() {
            if(!this.multiple)
                return;
            if(this.value !== undefined) {
                this.currentValue = !Array.isArray(this.value) ? [this.value] : this.value;
            }
        },
        exceedMax(){
            return Array.isArray(this.currentValue) && this.currentValue.length >= this.max;
        },
    }
}

</script>

<style module>
.root {
    position: absolute;
    line-height: var(--table-view-filter-line-height);
    /* max-height: var(--table-view-filter-max-height); */
    /* overflow: auto; */
    background: var(--table-view-filter-background);
    border: 1px solid var(--border-color-base);
    border-radius: var(--border-radius-base);
    z-index: var(--z-index-popper);
    max-width: 300px;
}
.wrap {
    min-width: 100%;
    max-height: var(--table-view-filter-max-height);
}
.footer {
    padding: 0 12px;
    height: 36px;
    line-height: 36px;
    border-top: 1px solid var(--table-view-filter-border-color);
}
.scrollview {
    padding: 8px 0;
}
/* 作用：出滚动条时hover背景能展示全 */
.scrollview [class^="f-scroll-view_wrap__"] > div {
    display: inline-flex;
}
</style>
