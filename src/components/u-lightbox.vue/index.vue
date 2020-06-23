<template>
<div :class="$style.root" v-if="currentVisible" @click="closeOnMask && close()">
    <slot></slot>
    <div :class="$style.top">
        <a v-if="closeButton" :class="$style.close" @click="close()"></a>
        <div :class="$style.title" v-if="title">{{ title }}</div>
    </div>
    <div :class="$style.optionsColl">
        <ul :class="$style.operation" v-if="currentVisible && (zoomButton || showButton)" @click.stop>
            <li v-show="showButton" :class="$style.button" role="prev" :disabled="!hasPrev" @click="prev()"></li>
            <li :class="$style.button" role="rotateLeft" @click="rotate('left')"></li>
            <li :class="$style.button" rolo="zoomin" @click="zoom('in')">＋</li>
            <li :class="$style.button" rolo="zoomout" @click="zoom('out')">－</li>
            <li :class="$style.button" role="rotateRight" @click="rotate('right')"></li>
            <li v-show="showButton" :class="$style.button" role="next" :disabled="!hasNext" @click="next()"></li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name: 'u-lightbox',
    props: {
        closeButton: { type: Boolean, default: false },
        closeOnMask: { type: Boolean, default: true },
        visible: { type: Boolean, default: false },
        static: { type: Boolean, default: false },
        loop: { type: Boolean, default: false }, // item是否循环
        animation: String,
        value: null,
        zoomable: { type: Boolean, default: true },
        zoomButton: { type: Boolean, default: true },
        zoomWheel: { type: Boolean, default: true },
        zoomMin: {
            default: '100px',
            validator: (value) => {
                if (typeof value === 'number')
                    return value === value >> 0;
                else if (typeof value === 'string')
                    return /^(\d+\.?\d*)([%px]+)$/.test(value);
                return false;
            },
        },
        zoomMax: {
            default: '2000px',
            validator: (value) => {
                if (typeof value === 'number')
                    return value === value >> 0;
                else if (typeof value === 'string')
                    return /^(\d+\.?\d*)([%px]+)$/.test(value);
                return false;
            },
        },
        zoomRadio: { type: Number, default: 0.1 },
    },
    data() {
        const animationMap = {
            // 不同动画对应的动画个数
            fade: 1,
            'zoom-out': 2,
        };
        return {
            currentVisible: this.visible,
            itemVMs: [],
            start: this.value, // 标记第一次点击lightbox，动画显示
            current: this.value,
            allAnimationEnd: false,
            animationNum: animationMap[this.animation] || 0,
            animationEndNum: 0,
            maxWidthRadio: 0.67,
            maxHeightRadio: 0.75,
            initWidthRadio: 0.42, // 初始img固定宽高
            initHeightRadio: 0.6,
            selectedVM: undefined,
        };
    },
    computed: {
        showButton() {
            return this.itemVMs.length > 1;
        },
        hasPrev() {
            if (this.loop)
                return true;
            else if (this.current === 0)
                return false;
            return true;
        },
        hasNext() {
            if (this.loop)
                return true;
            else if (this.current === this.itemVMs.length - 1)
                return false;
            return true;
        },
        canOp() {
            // item的动画结束才可以进行下次点击操作
            if (this.animationNum === 0)
                return true;
            return this.allAnimationEnd;
        },
        title() {
            if (this.itemVMs && this.selectedVM)
                return this.selectedVM.title || '';
            return '';
        },
    },
    watch: {
        visible(visible) {
            this.currentVisible = visible;
            if (this.currentVisible) {
                // 显示灯箱时重置参数
                this.start = this.value;
                this.current = this.value;
                this.animationEndNum = 0;
                this.allAnimationEnd = true;
            }
        },
        currentVisible(visible) {
            if (visible)
                document.addEventListener('keydown', this.escPress);
            // 按esc退出弹框
            else
                document.removeEventListener('keydown', this.escPress);
        },
        current(current) {
            this.animationEndNum = 0;
            this.allAnimationEnd = false;
            this.watchValue(current);
            this.itemVMs
                && this.itemVMs[current]
                && this.itemVMs[current].zoomImg
                && this.itemVMs[current].zoomImg.reset(); // 显示图片变化，恢复初始大小
        },
        value(value) {
            this.watchValue(value);
        },
        itemVMs() {
            this.watchValue(this.value);
        },
    },
    created() {
        this.$on('add-item-vm', (item) => {
            item.parentVM = this;
            this.itemVMs.push(item);
        });
        this.$on('remove-item-vm', (item) => {
            item.parentVM = undefined;
            this.itemVMs.splice(this.itemVMs.indexOf(item), 1);
        });
        this.$on('u-lightbox-item-end', () => {
            if (this.start === -1) {
                this.animationEndNum += 1;
                if (this.animationEndNum >= this.animationNum)
                    this.allAnimationEnd = true;
            } else
                this.allAnimationEnd = true;
        });
        this.initWidth = this._computeInit();
        this.initHeight = this._computeInit('h');
    },
    mounted() {
        this.watchValue(this.value);
        if (this.$el && !this.static)
            document.body.appendChild(this.$el);
    },
    destroyed() {
        if (this.$el && this.$el.parentNode === document.body)
            document.body.removeChild(this.$el);
        if (this.currentVisible)
            document.removeEventListener('keydown', this.escPress);
    },
    methods: {
        // 显示灯箱
        open() {
            this.currentVisible = true;
            this.$emit('update:visible', this.currentVisible);
            this.$emit('open');
        },
        close() {
            let cancel = false;
            this.$emit('before-close', {
                preventDefault: () => (cancel = true),
            });
            if (cancel)
                return;
            this.currentVisible = false;
            this.selectedVM = undefined;
            this.$emit('update:visible', this.currentVisible);
            this.$emit('close');
        },
        prev() {
            if (!this.canOp || !this.hasPrev)
                return;
            this.start = -1;
            const length = this.itemVMs.length;
            this.current = (this.current - 1 + length) % length;
        },
        next() {
            if (!this.canOp || !this.hasNext)
                return;
            this.start = -1;
            const length = this.itemVMs.length;
            this.current = (this.current + 1) % length;
        },
        rotate(direction) {
            this.selectedVM.$emit('rotate', direction);
        },
        zoom(operation) {
            if (!this.zoomable)
                return;
            this.selectedVM.$emit('zoom', operation);
        }, // 计算初始显示最大宽高
        _computeInit(type = 'w') {
            return type === 'w' ? window.innerWidth * this.initWidthRadio : window.innerHeight * this.initHeightRadio;
        },
        escPress(event) {
            if (event.keyCode === 27)
                this.close();
        },
        watchValue(value) {
            if (this.selectedVM && this.selectedVM.value === value)
                return;
            if (!value)
                this.selectedVM = this.itemVMs[0];
            else
                this.selectedVM = this.itemVMs.find(
                    (itemVM) => itemVM.value === value,
                );
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
    z-index: 3000;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.6);
}

.root::before {
    content: "";
    height: 100%;
    display: inline-block;
    vertical-align: middle;
}

.top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: var(--lightbox-head-height);
    background: black;
    color: white;
    z-index: 10;
    text-align: center;
    font-size: 14px;
    line-height: var(--lightbox-head-height);
}

.close {
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
}

.close:hover { color: #888; }

.close::before {
    content: '\00d7';
    font-size: 40px;
    line-height: var(--lightbox-head-height);
}

.wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.root[static] {
    position: static;
    padding: var(--space-base);
}

.button[role='prev'] {
    transform: rotate(180deg);
    transform-origin: 50% 43%;
}

.button[role='prev']::before {
    icon-font: url('../i-icon.vue/icons/keyboard-arrow-right.svg');
}

.button[role='next']::before {
    icon-font: url('../i-icon.vue/icons/keyboard-arrow-right.svg');
}

.button[role='rotateRight']::before {
    icon-font: url('../i-icon.vue/icons/rotate-right.svg');
}

.button[role='rotateLeft']::before {
    icon-font: url('../i-icon.vue/icons/rotate-left.svg');
}

.optionsColl {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60px;
    text-align: center;
    z-index: 10;
}

.operation {
    display: inline-block;
    margin: 0;
    padding: 0;
    color: rgba(255, 255, 255, 0.7);
    font-size: 60px;
    height: 60px;
    line-height: 1;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    user-select: none;
    overflow: hidden;
}

.operation > li {
    display: inline-block;
    float: left;
    padding: 0 30px;
}

.operation > li[disabled] {
    color: rgba(256, 256, 256, 0.2);
}
.operation > li:hover {
    background: rgba(0, 0, 0, 0.1);
    cursor: var(--cursor-pointer);
}
.operation > li[disabled]:hover {
    cursor: auto;
}
</style>
