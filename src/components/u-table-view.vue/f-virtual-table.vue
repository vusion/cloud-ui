<script>
import FVirtualList from '../f-virtual-list.vue';

export default {
    name: 'f-virtual-table',
    extends: FVirtualList,
    computed: {
        virtualList() {
            const list = this[this.listKey];
            if (!this.virtual)
                return list;
            else {
                let count = 0;
                for (let i = this.virtualIndex; i < list.length; i++) {
                    const item = list[i];
                    if (item.display !== 'none') {
                        count++;
                    }
                    if (count >= this.virtualCount || i === list.length - 1) {
                        return list.slice(this.virtualIndex, i + 1);
                    }
                }
                return [];
            }
        },
    },
    methods: {
        handleVirtualScroll(e) {
            if (!this.virtual)
                return;
            const listEl = e.target;
            let virtualEl = this.$refs.virtual;
            if (Array.isArray(virtualEl)) {
                virtualEl = virtualEl[0];
            }
            let tablebodyEl = this.$refs.body;
            if (Array.isArray(tablebodyEl)) {
                tablebodyEl = tablebodyEl[0];
            }
            const list = this[this.listKey];
            const showList = (list || []).filter((item) => item.display !== 'none');
            if (!virtualEl || !list)
                return; // 缓存当前可见 DOM 节点的高度
            if (this.itemHeight === undefined) {
                const children = Array.from(virtualEl.children);
                children.forEach((childEl, index) => {
                    const item = list[this.virtualIndex + index];
                    if (
                        item
                        && item.height === undefined
                        && item._cacheHeight === undefined
                    )
                        item._cacheHeight = item.height || childEl.offsetHeight;
                });
            }
            const getHeight = (item) => {
                if (item.display === 'none')
                    return 0;
                else if (this.itemHeight !== undefined)
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
                if (accHeight > scrollTop)
                    break;
                accHeight += getHeight(item);
            }
            let showCount = 0;
            if (getHeight(list[0])) {
                showCount = Math.ceil(tablebodyEl.clientHeight / getHeight(list[0]));
            }
            virtualIndex = Math.max(
                0,
                currentIndex - Math.ceil((this.virtualCount - showCount) / 2),
            ); // eslint-disable-next-line yoda
            // table 树形展示里不能这么处理，暂时注释掉
            // 该方法容易出现白屏。有截流了问题不大。
            // if (
            //     this.virtualCount / 3 <= currentIndex - this.virtualIndex
            //     && currentIndex - this.virtualIndex < (this.virtualCount * 2) / 3
            // )
            //     return;
            let virtualTop = 0;
            let virtualBottom = 0;
            let noDisplayCount = 0;
            for (let i = 0; i < list.length; i++) {
                const item = list[i];
                if (i < virtualIndex) {
                    virtualTop += getHeight(item);
                } else if (i >= virtualIndex + this.virtualCount) {
                    virtualBottom += getHeight(item);
                }
                if (i > virtualIndex && i <= virtualIndex + this.virtualCount) {
                    if (item.display === 'none') {
                        noDisplayCount++;
                    }
                }
            }
            this.virtualIndex = virtualIndex;
            this.virtualTop = virtualTop;
            this.virtualBottom = virtualBottom; // Vue 应该是对渲染做了优化，为了减少在高频滚动时出现白屏的问题，需要强制更新
            this.$nextTick(() => {
                this.$forceUpdate();
                this.$emit(
                    'virtual-scroll',
                    {
                        virtualIndex,
                        virtualCount: this.virtualCount,
                        virtualTop,
                        virtualBottom,
                    },
                    this,
                );
            });
        },
    },
};
</script>
