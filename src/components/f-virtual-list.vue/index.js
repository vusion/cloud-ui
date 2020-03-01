import throttle from 'lodash/throttle';

export const FVirtualList = {
    name: 'f-virtual-list',
    props: {
        list: Array,
        itemHeight: Number,
        virtualCount: { type: Number, default: 60 },
        throttle: { type: Number, default: 60 },
        tagName: { type: String, default: 'div' },
        listKey: { type: String, default: 'list' },
    },
    data() {
        return {
            virtualIndex: 0,
            virtualTop: 0,
            virtualBottom: 0,
        };
    },
    computed: {
        virtualList() {
            const list = this[this.listKey];
            return list && list.slice(this.virtualIndex, this.virtualIndex + this.virtualCount);
        },
        virtualSlot() {
            return this.$slots.default && this.$slots.default.slice(this.virtualIndex, this.virtualIndex + this.virtualCount);
        },
    },
    created() {
        this.throttledVirtualScroll = throttle(this.handleVirtualScroll, this.throttle, {
            leading: true, trailing: true,
        });
    },
    methods: {
        /**
         * 监听列表容器的滚动事件
         * 一般用于重写
         * @override
         * @param {*} e - 滚动事件对象
         */
        onScroll(e) {
            this.throttledVirtualScroll(e);

            this.$emit('scroll', e, this);
        },
        handleVirtualScroll(e) {
            const listEl = e.target;
            const virtualEl = this.$refs.virtual;
            const list = this[this.listKey];
            if (!virtualEl || !list)
                return;

            // 缓存当前可见 DOM 节点的高度
            if (this.itemHeight === undefined) {
                const children = Array.from(virtualEl.children);
                children.forEach((childEl, index) => {
                    const item = list[this.virtualIndex + index];
                    if (item && item.height === undefined && item._cacheHeight === undefined)
                        item._cacheHeight = item.height || childEl.offsetHeight;
                });
            }

            const getHeight = (item) => {
                if (this.itemHeight !== undefined)
                    return this.itemHeight;
                else if (item.height !== undefined)
                    return item.height;
                else if (item._cacheHeight !== undefined)
                    return item._cacheHeight;
                else
                    return 0;
            };

            const scrollTop = listEl.scrollTop;
            let accHeight = 0;
            let virtualIndex = this.virtualIndex;
            let currentIndex = 0;
            for (currentIndex = 0; currentIndex < list.length; currentIndex++) {
                const item = list[currentIndex];
                accHeight += getHeight(item);
                if (accHeight > scrollTop)
                    break;
            }
            virtualIndex = Math.max(0, currentIndex - Math.floor(this.virtualCount / 2));

            // eslint-disable-next-line yoda
            // 该方法容易出现白屏。有截流了问题不大。
            // if (this.virtualCount / 3 <= currentIndex - this.virtualIndex && currentIndex - this.virtualIndex < this.virtualCount * 2 / 3)
            //     return;

            let virtualTop = 0;
            let virtualBottom = 0;
            for (let i = 0; i < list.length; i++) {
                const item = list[i];
                if (i < virtualIndex) {
                    virtualTop += getHeight(item);
                } else if (i >= virtualIndex + this.virtualCount) {
                    virtualBottom += getHeight(item);
                }
            }

            this.virtualIndex = virtualIndex;
            this.virtualTop = virtualTop;
            this.virtualBottom = virtualBottom;

            // Vue 应该是对渲染做了优化，为了减少在高频滚动时出现白屏的问题，需要强制更新
            this.$nextTick(() => {
                this.$forceUpdate();
            });
        },
    },
};

export default FVirtualList;
