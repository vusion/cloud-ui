<template>
    <div
        v-if="currentVisible"
        :class="$style.root"
        :type="type"
        :bordered="bordered"
    >
        <div :class="$style.content" :horizontal="horizontal">
            <i v-if="showIcon" :class="$style.icon"></i>
            <div>
                <div :class="$style.title" v-if="title || $slots.title">
                    <slot name="title">{{ title }}</slot>
                </div>
                <div v-if="desc || $slots.default" :class="$style.desc">
                    <slot>{{ desc }}</slot>
                </div>
            </div>
        </div>
        <a :class="$style.close" v-if="closeable" @click="close"></a>
    </div>
</template>

<script>
export default {
    name: 'u-alert',
    props: {
        type: {
            type: String,
            default: 'info',
        },
        title: {
            type: String,
            default: '',
        },
        desc: {
            type: String,
            default: '',
        },
        bordered: {
            type: Boolean,
            default: true,
        },
        closeable: {
            type: Boolean,
            default: false,
        },
        showIcon: {
            type: Boolean,
            default: true,
        },
        horizontal: {
            type: String,
            default: 'left',
        },
    },
    data() {
        return {
            currentVisible: true,
        };
    },
    methods: {
        close() {
            this.$emit('close', this);
            this.currentVisible = false;
            this.$nextTick(() => this.$destroy());
        },
    },
};
</script>

<style module>
.root {
    display: flex;
    padding: 4px 16px;
    border-radius: 2px;
}
.root[bordered] {
    border: 1px solid currentColor;
}
.content {
    display: flex;
    flex: 1;
    font-size: 14px;
}
.icon {
    align-self: flex-start;
    margin-right: 8px;
}
.icon::after {
    background: radial-gradient(circle, #fff 45%, transparent 45%);
}
.title {
    display: inline;
    color: var(--alert-title-color);
}
.desc {
    color: var(--alert-desc-color);
}
.close {
    align-self: flex-start;
    font-size: 16px;
    line-height: 1.4;
    margin-left: 8px;
    color: var(--alert-close-color);
}
.close::after {
    icon-font: url("./assets/close.svg");
}
.close:hover::after {
    color: var(--alert-close-hover-color);
}
.content[horizontal="left"] {
    justify-content: flex-start;
    text-align: left;
}
.content[horizontal="center"] {
    justify-content: center;
    text-align: center;
}
.root[type="info"] {
    background: var(--alert-background-color-info);
    color: var(--alert-color-info);
}
.root[type="success"] {
    background: var(--alert-background-color-success);
    color: var(--alert-color-success);
}
.root[type="warning"] {
    background: var(--alert-background-color-warning);
    color: var(--alert-color-warning);
}
.root[type="error"] {
    background: var(--alert-background-color-error);
    color: var(--alert-color-error);
}
.root[type="info"] .icon::after {
    icon-font: url("../u-toast.vue/assets/info.svg");
}
.root[type="success"] .icon::after {
    icon-font: url("../u-toast.vue/assets/success.svg");
}
.root[type="warning"] .icon::after {
    icon-font: url("../u-toast.vue/assets/warning.svg");
}
.root[type="error"] .icon::after {
    icon-font: url("../u-toast.vue/assets/error.svg");
}
</style>
