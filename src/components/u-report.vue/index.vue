<template>
    <div :class="$style.root">
        <iframe v-if="getUrl"
                @load="onLoad($event)"
                v-bind="$attrs"
                :src="getUrl" frameborder="0">
        </iframe>
        <div v-else :class="$style.image"></div>
    </div>
</template>

<script>
import queryString from 'query-string';

export default {
    name: 'u-report',
    props: {
        url: { type: String },
        mode: { type: String },
        showTile: { type: Boolean },
        showScaleBar: { type: Boolean },
        showPageBar: { type: Boolean },
        showProgressBar: { type: Boolean },
        scale: { type: String },
        bottomBarPosTop: { type: String },
    },
    data() {
        return {};
    },
    computed: {
        getUrl() {
            if (!this.url) {
                return '';
            }

            const params = {
                mode: this.mode,
                hideTile: !this.showTile,
                hideScaleBar: !this.showScaleBar,
                hidePageBar: !this.showPageBar,
                hideProgressBar: !this.showProgressBar,
                scale: this.scale,
            };

            if (this.bottomBarPosTop) {
                params.bottomBarPos = 'top';
            }

            return `${this.url}?${queryString.stringify(params)}`;
        },
    },
    methods: {
        onLoad(event) {
            this.loaded = true;
            this.$emit('load');
        },
    },
};
</script>

<style module>

.root {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.root iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
}

.image {
    background: url('./assets/chart.svg');
    width: 162px;
    height: 88px;
}
</style>
