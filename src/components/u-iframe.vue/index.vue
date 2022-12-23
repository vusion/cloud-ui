<template>
<div :class="$style.root">
    <u-loading size="large" v-if="!loaded" :class="$style.loading"></u-loading>
    <iframe v-if="src"
        v-else
        @load="onLoad($event)"
        v-bind="$attrs"
        :src="src" frameborder="0"></iframe>
</div>
</template>

<script>

import ULoading from '../u-loading.vue';
export default {
    name: 'u-iframe',
    components: { ULoading },
    props: {
        src: {
            type: String,
            default: '',
            required: true,
        },
    },
    data() {
        return {
            loaded: false,
        };
    },
    methods: {
        onLoad(event) {
            this.loaded = true;
            this.$emit('load');
        },
    },
};
</script>

<style module >
.root {
    position: relative;
}
.root iframe{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.root .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

}
</style>
