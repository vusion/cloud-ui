<template>
<transition-group tag="div" :class="$style.root" :position="position"
    move-class="animate__move"
    enter-active-class="animate__animated animate__fadeInUpSmall"
    leave-active-class="animate__animated animate__fadeOutUpSmall fast animate__list-leave-active">
    <div v-for="item in items" :key="item.timestamp" :class="$style['item-wrap']">
        <div :class="$style.item" :color="item.color">
            <slot :item="item">{{ item.text }}</slot>
            <a :class="$style.close" v-if="closable" @click="close(item)"></a>
        </div>
    </div>
</transition-group>
</template>

<script>
export default {
    name: 'u-toast',
    props: {
        position: { type: String, default: 'top-center' },
        single: { type: Boolean, default: false },
        maxCount: { type: Number, default: 3 },
        duration: { type: Number, default: 3000 },
        color: { type: String, default: 'default' },
        text: String,
        closable: { type: Boolean, default: false },
    },
    data() {
        return { items: [], itemsQueue: new Map() };
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
        if (this.position !== 'static')
            document.body.appendChild(this.$el);
    },
    destroyed() {
        if (this.position !== 'static')
            document.body.removeChild(this.$el);
    },
    methods: {
        show(text, duration, color) {
            if (!this.$el)
                this.$mount(document.createElement('div')); // Vue 加载完成后，触发某一事件后，先执行methods，再执行watch方法，会导致标签显示异常
            this.$nextTick(() => {
                this.open({
                    text: text !== undefined ? text : (this.text || ''),
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
    install(Vue, id) {
        const Ctor = Vue.component(id);
        if (!Ctor)
            return;
        const toast = (Vue.prototype.$toast = this.toast = new Ctor());
        const METHODS = [
            'show',
            'closeAll',
            'success',
            'warning',
            'info',
            'error',
        ];
        METHODS.forEach((method) => (this[method] = toast[method].bind(toast)));
    },
};
</script>

<style module>
.root {
    position: fixed;
    z-index: var(--z-index-toast);
    top: var(--toast-top);
    left: var(--toast-margin);
    pointer-events: none;
}

.root[position='top-center'], .root[position='bottom-center'] {
    left: 50%;
    /* margin-left: calc(var(--toast-width) / -2); */
    transform: translateX(-50%);
    text-align: center;
}

.root[position='bottom-center'], .root[position='bottom-left'], .root[position='bottom-right'] {
    top: auto;
    bottom: var(--toast-margin);
}

.root[position='top-right'], .root[position='bottom-right'] {
    text-align: right;
    left: auto;
    right: var(--toast-margin);
}

.root[position='top-left'], .root[position='bottom-left'] {
    text-align: left;
    left: var(--toast-margin);
    right: auto;
}

.root[position='top-left'], .root[position='top-center'], .root[position='top-right'] {
    top: var(--toast-top);
    bottom: auto;
}

.root[position="static"] {
    position: static;
    width: auto;
}

.item-wrap {
    display: block;
    width: 2000px;
}

.leave {
    position: absolute;
}

.item {
    display: inline-block;
    pointer-events: all;
    max-width: var(--toast-max-width);
    margin-bottom: var(--toast-item-space);
    padding: var(--toast-item-padding);
    background: var(--toast-background-color);
    color: var(--toast-item-color);
    border-radius: var(--toast-item-border-radius);
    text-align: var(--toast-item-icon-text-align);
}

.close {
    float: right;
    color: var(--toast-close-color);
}

.close::before {
    content: '\00d7';
    font-size: var(--toast-close-font-size);
    line-height: 0.8;
}

.item::before {
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 48%, rgba(255,255,255,0) 48%);
    font-size: var(--toast-item-icon-font-size);
    vertical-align: var(--toast-item-icon-vertical-align);
    margin-right: var(--toast-item-icon-margin-right);
}
.item[color="info"] {
    /* background: #00c0ef;
    color: white; */
}
.item[color="info"]::before {
    icon-font: url(./assets/warning.svg);
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
</style>
