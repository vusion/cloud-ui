<template>
<div :class="$style.root" v-if="currentVisible" @click="closeOnMask && close()">
    <slot></slot>
    <a v-if="closeButton" :class="$style.close" @click="close()"><i-ico name="close" :class="$style.opicon"></i-ico></a>
    <a v-show="showButton" :class="$style.prev" role="prev" :disabled="!hasPrev" @click.stop="prev()"><i-ico name="left-arrow" :class="$style.opicon"></i-ico></a>
    <a v-show="showButton" :class="$style.next" role="next" :disabled="!hasNext" @click.stop="next()"><i-ico name="right-arrow" :class="$style.opicon"></i-ico></a>
    <div :class="$style.optionsColl">
        <ul :class="$style.operation" v-if="currentVisible && zoomButton" @click.stop>
            <li :class="$style.button" role="rotateRight" @click="rotate('right')"><i-ico name="rotate-right" :class="$style.opicon"></i-ico></li>
            <li :class="$style.button" role="rotateLeft" @click="rotate('left')"><i-ico name="rotate-left" :class="$style.opicon"></i-ico></li>
            <li :class="$style.button" rolo="zoomin" @click="zoom('in')"><i-ico name=zoomin :class="$style.opicon"></i-ico></li>
            <li :class="$style.button" rolo="zoomout" @click="zoom('out')"><i-ico name=zoomout :class="$style.opicon"></i-ico></li>
            <li :class="[$style.button, $style.opicon]" role="one" @click="restoreImgSize()">1:1</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name: 'u-lightbox',
    props: {
        closeButton: { type: Boolean, default: true },
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
        initWidthRadio: { type: Number, default: 0.84 },
        initHeightRadio: { type: Number, default: 0.75 },
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
            // initWidthRadio: 0.42, // 初始img固定宽高
            // initHeightRadio: 0.6,
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
        initWidthRadio(value) {
            this.initWidth = this._computeInit();
        },
        initHeightRadio(value) {
            this.initHeight = this._computeInit('h');
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
        restoreImgSize() {
            this.selectedVM.$emit('restore');
        }
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
    z-index: var(--z-index-popper);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.4);
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
    top: 100px;
    right: 40px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 20px;
    background: var(--lightbox-icon-background);
    color: var(--lightbox-icon-color);
    z-index: 20;
}

.close:hover { 
    background: var(--lightbox-icon-background-hover);
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

.optionsColl {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 40px;
    height: 40px;
    text-align: center;
    z-index: 10;
}

.operation {
    display: inline-block;
    margin: 0;
    padding: 0;
    color: var(--lightbox-icon-color);
    /* font-size: 60px; */
    height: 40px;
    line-height: 40px;
    background: var(--lightbox-icon-background);
    border-radius: 3px;
    user-select: none;
    overflow: hidden;
}

.operation > li {
    display: inline-block;
    float: left;
    width: 40px;
    text-align: center;
}

.operation > li[disabled] {
    color: rgba(256, 256, 256, 0.2);
}
.operation > li:hover {
    background: var(--lightbox-icon-background-hover);
    cursor: var(--cursor-pointer);
}
.operation > li[disabled]:hover {
    cursor: auto;
}
.prev, .next {
    position: absolute;
    top: calc(50% - 20px);
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 20px;
    background: var(--lightbox-icon-background);
    color: var(--lightbox-icon-color);
    z-index: 20;
}
.prev:hover, .next:hover {
    background: var(--lightbox-icon-background-hover);
}
.prev[disabled], .next[disabled] {
    background: var(--lightbox-icon-background-disabled);
    cursor: not-allowed;
    color: #999;
}
.prev {
    left: 40px;
}
.next {
    right: 40px;
}
.opicon {
    font-size: 20px;
}
</style>
