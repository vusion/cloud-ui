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
            const staticStyle = this.$vnode.data.staticStyle;

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

                staticStyle: this.filterCSSVarInStyle(staticStyle),
            });
        },
        close() {
            this.$toast.closeToast(this.key);
        },
        filterCSSVarInStyle(staticStyle) {
            const style = {};
            for (const key in staticStyle) {
                if (Object.prototype.hasOwnProperty.call(staticStyle, key)) {
                    if (/^--/.test(key)) {
                        const value = staticStyle[key];
                        style[key] = value;
                    }
                }
            }

            return style;
        },
    },

};
</script>
