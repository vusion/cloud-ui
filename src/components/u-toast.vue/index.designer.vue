<template>
<div
    v-show="designerVisible"
    :class="$style.root">
    <div :class="$style.overlay" v-show="designerVisible"></div>
    <div :class="[$style['item-wrap'], 'real-element-for-designer']" :position="position">
        <div v-if="color === 'custom'" :class="$style.item">
            <slot name="inject"></slot>
            <div v-if="customIcon" :class="$style.customIcon">
                <i-ico :name="customIcon"></i-ico>
            </div>
            {{ text }}
            <a :class="$style.close" v-if="closable" @click="close(item)"></a>
        </div>
        <div v-else :class="$style.item" :color="color">
            <slot name="inject"></slot>
            {{ text }}
            <a :class="$style.close" v-if="closable" @click="closeAll()"></a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'u-toast-desiger',
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
            items: [],
            itemsQueue: new Map(),

            designerVisible: false,
        };
    },
    watch: {
        text(newValue, oldValue) {
            this.items.some((item, index) => {
                if (item.text === oldValue) {
                    item.text = newValue;
                    return true;
                }
                return false;
            });
        },
    },
    mounted() {
        if (this.$env.VUE_APP_DESIGNER) {
            return;
        }

        if (this.position !== 'static') {
            const container = window.LcapMicro && window.LcapMicro.appendTo ? window.LcapMicro.appendTo : document.body;
            container.appendChild(this.$el);
        }
    },
    destroyed() {
        if (this.$env.VUE_APP_DESIGNER) {
            return;
        }

        if (this.position !== 'static') {
            const container = window.LcapMicro && window.LcapMicro.appendTo ? window.LcapMicro.appendTo : document.body;
            container.removeChild(this.$el);
        }
    },
    methods: {
        show(text, duration, color) {
            if (!this.$el)
                this.$mount(document.createElement('div')); // Vue 加载完成后，触发某一事件后，先执行methods，再执行watch方法，会导致标签显示异常
            this.$nextTick(() => {
                this.open({
                    text: String(text !== undefined ? text : (this.text || '')),
                    color,
                    duration: duration === undefined ? this.duration : duration,
                    timestamp: +new Date(),
                });
            });
        },
        open(item) {
            let maxCount = this.maxCount;
            if (this.single)
                maxCount = 1;
            if (this.items.length >= maxCount)
                this.close(this.items[0]);

            this.items.push(item);
            if (item.duration || item.duration === Infinity) {
                setTimeout(() => {
                    this.close(item);
                }, item.duration);
            }
            this.$emit('open', item, this);
        },
        close(item) {
            const index = this.items.indexOf(item);
            if (!~index)
                return;

            let cancel = false;
            this.$emit(
                'before-close',
                Object.assign({ preventDefault: () => (cancel = true) }, item),
                this,
            );
            if (cancel)
                return;
            this.items.splice(index, 1);
            this.$emit('close', item, this);
        },
        /**
         * @method closeAll() 关闭所有消息
         * @return {void}
         */
        closeAll() {
            this.items = [];
        },
        success(text, duration) {
            this.show(text, duration, 'success');
        },
        warning(text, duration) {
            this.show(text, duration, 'warning');
        },
        info(text, duration) {
            this.show(text, duration, 'info');
        },
        error(text, duration) {
            this.show(text, duration, 'error');
        },
    },
};
</script>

<style module>
.root {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: var(--z-index-toast);
    /* pointer-events: none; */
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    /* background-color: rgba(0,0,0,.7); */
}

.item-wrap {
    position: absolute;
    z-index: 1;
}

.item-wrap[position='top-center'] {
    top: var(--toast-top);
    left: 50%;
    transform: translateX(-50%);
}

.item-wrap[position='top-left'] {
    top: var(--toast-top);
    left: var(--toast-margin);
    text-align: left;
}

.item-wrap[position='top-right'] {
    top: var(--toast-top);
    right: var(--toast-margin);
    text-align: right;
}

.item-wrap[position='bottom-center'] {
    left: 50%;
    bottom: var(--toast-margin);
    transform: translateX(-50%);
}

.item-wrap[position='bottom-left'] {
    left: var(--toast-margin);
    bottom: var(--toast-margin);
    text-align: left;
}

.item-wrap[position='bottom-right'] {
    right: var(--toast-margin);
    bottom: var(--toast-margin);
    text-align: right;
}

.item-wrap[position="static"] {
    position: static;
    width: auto;
}

.leave {
    position: absolute;
}

.item {
    position: relative;
    display: inline-block;
    pointer-events: all;
    max-width: var(--toast-max-width);
    padding: var(--toast-item-padding);
    background: var(--toast-background-color);
    color: var(--toast-item-color);
    border-radius: var(--toast-item-border-radius);
    text-align: var(--toast-item-icon-text-align);
}

.close {
    float: right;
    margin-left: 8px;
    color: var(--toast-close-color);
}

.close::before {
    content: '\00d7';
    font-size: var(--toast-close-font-size);
    line-height: 0.8;
}

.item::before {
    /* background: radial-gradient(circle, #fff 45%, transparent 45%); */
    font-size: var(--toast-item-icon-font-size);
    vertical-align: var(--toast-item-icon-vertical-align);
    margin-right: var(--toast-item-icon-margin-right);
}
.item[color="info"]::before {
    icon-font: url(./assets/info.svg);
    color: var(--toast-item-icon-color-info);
}
.item[color="success"]::before {
    icon-font: url(./assets/success.svg);
    color: var(--toast-item-icon-color-success);
    /* background: #00a65a;
    color: white; */
}
.item[color="warning"]::before {
    icon-font: url(./assets/warning.svg);
    color: var(--toast-item-icon-color-warning);
    /* background: #f39c12;
    color: white; */
}
.item[color="error"]::before {
    icon-font: url(./assets/error.svg);
    color: var(--toast-item-icon-color-error);
    /* background: #dd4b39;
    color: white; */
}

.item[color="loading"]::before {
    icon-font: url(./assets/loading.svg);
    color: var(--toast-item-icon-color-info);
    /* background: #dd4b39;
    color: white; */

    animation: circle 1s linear 0s infinite both;
}

@keyframes circle {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.item[color][class][class] {
    padding: 9px 16px 9px 40px;
}
.item[color][class][class]::before {
    position: absolute;
    top: var(--toast-item-icon-top);
    left: 16px;
}

.customIcon {
    display: inline-block;
    margin-right: var(--toast-item-icon-margin-right);
    color: var(--toast-item-custom-icon-color);
}
</style>
