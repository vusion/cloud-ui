<template>
<u-modal :visible.sync="visible">Modal Mixin</u-modal>
</template>

<script>
export default {
    name: 'm-modal',
    /**
     * 设置弹窗是否需要 reset
     */
    resetModal: true,
    data() {
        return {
            visible: false,
        };
    },
    watch: {
        visible(visible) {
            if (this.$options.resetModal && !visible)
                this.reset();
        },
    },
    methods: {
        open(data) {
            Object.assign(this, data);
            this.visible = true;
            this.$emit('open', data);
        },
        close(data) {
            Object.assign(this, data);
            this.visible = false;
            this.$emit('close', data);
        },
        reset() {
            const staticData = Array.from(this.$options.staticData || []);
            const resetData = this.$options.data.apply(this);
            staticData.push('visible');
            for (const name of staticData)
                delete resetData[name];
            Object.assign(this.$data, resetData);
        },
    },
};
</script>
