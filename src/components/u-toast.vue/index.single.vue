<template>
    <div v-if="false"></div>
</template>
<script>
let uid = 0;
export default {
    name: 'u-toast-single',
    props: {
        position: { type: String, default: 'top-center' },
        single: { type: Boolean, default: false },
        maxCount: { type: Number, default: 3 },
        duration: { type: Number, default: 3000 },
        color: { type: String },
        text: String,
        closable: { type: Boolean, default: false },

        customIcon: { type: String },
    },
    data() {
        return {
            key: `u-toast-${uid++}`,
        };
    },
    methods: {
        open() {
            this.$toast.openToast({
                key: this.key,
                text: this.text,
                color: this.color,
                duration: this.duration,
                customIcon: this.customIcon,
                onShow: () => {
                    this.$emit('open');
                },
                onHide: () => {
                    this.$emit('close');
                },
            });
        },
        close() {
            this.$toast.closeToast(this.key);
        },
    },

};
</script>
