<template>
    <nav :class="$style.root" :readonly="readonly" :disabled="disabled" :style="dynamicStyle" @transitionend="handleTranstitionEnd" :collapse="currentCollapse">
        <f-scroll-view :class="$style.content">
            <template v-if="currentDataSource&&currentDataSource.data&&Array.isArray(currentDataSource.data)">
                <template v-for="(node,idx) in currentDataSource.data">
                    <u-sidebar-group
                        v-if="hasChildren(node)"
                        :key="$at2(node, valueField) || idx"
                        :node="node"
                        :disabled="node.disabled"
                        :collapsible="$at2(node, collapsibleField)"
                        :title="$at2(node, textField)"
                        :icon="$at2(node, iconField)"
                    ></u-sidebar-group>
                    <u-sidebar-item v-else
                        :class="$env.VUE_APP_DESIGNER ? $style.mask:''"
                        :key="`${$at2(node, valueField) || idx}`"
                        :text="$at2(node, textField)"
                        :replace="$at2(node, replaceField)"
                        :exact="$at2(node, exactField)"
                        :value="$at2(node, valueField)"
                        :icon="$at2(node, iconField)"
                        :link-type="$at2(node, linkTypeField)"
                        :href-and-to="$at2(node, hrefAndToField)"
                        :target="$at2(node, targetField)"
                        :to="$at2(node, toField)"
                        :disabled="node.disabled"
                    ></u-sidebar-item>
                </template>
            </template>
            <slot></slot>
        </f-scroll-view>
        <div
            v-if="enableCollapse"
            :class="$style.resizer"
            @mousedown="handleResizerMouseDown">
        </div>
        <div :class="$style.bottom" :expanded="!currentCollapse" v-if="enableCollapse">
          <div :class="$style.expanderIcon" @click="toggleCollapse" vusion-click-enabled>
            <i-ico
                :name="currentCollapse ? expandIcon : foldIcon"
                icotype="only"
            >
            </i-ico>
            <u-tooltip :hide-delay="500" placement="right">
              {{ currentCollapse ? '展开' : '收起' }}
            </u-tooltip>
          </div>
        </div>
    </nav>
</template>

<script>
import MSinglex from '../m-singlex.vue';
import { MGroupParent } from '../m-group.vue';

export default {
    name: 'u-sidebar',
    groupName: 'u-sidebar-group',
    childName: 'u-sidebar-item',
    mixins: [MSinglex, MGroupParent],
    props: {
        enableCollapse: { type: Boolean, default: false },
        // collapse: { type: Boolean, default: false }, // 当前用作整个侧边栏的折叠效果。
        router: { type: Boolean, default: true },
        particular: { type: Boolean, default: false },
        dataSource: [Array, Object, Function],
        isLeafField: { type: String, default: 'isLeaf' },
        parentField: { type: String, default: '' },
        childrenField: { type: String, default: 'children' },
        textField: { type: String, default: 'text' },
        valueField: { type: String, default: 'value' },
        toField: { type: String, default: 'to' },
        replaceField: { type: String, default: 'replace' },
        exactField: { type: String, default: 'exact' },
        iconField: { type: String, default: 'icon' },
        linkTypeField: { type: String, default: 'linkType' },
        hrefAndToField: { type: String, default: 'hrefAndTo' },
        targetField: { type: String, default: 'target' },
        initialLoad: { type: Boolean, default: true },
        collapsibleField: { type: String, default: 'collapsible' },
        minWidth: { type: Number, default: 56 },
        collapseMode: { type: String, default: 'expand', validator: (value) => /^(expand|fold)$/.test(value) },
        expandIcon: { type: String, default: 'expand' },
        foldIcon: { type: String, default: 'fold' },
    },
    data() {
        return {
            currentDataSource: undefined,
            currentCollapse: this.enableCollapse ? this.collapseMode === 'fold' : false,
            currentWidth: this.enableCollapse && this.collapseMode === 'fold' ? this.minWidth : null,
            isTransitionEnd: true,
            isDragging: false,
        };
    },
    computed: {
        collapse() {
            return this.collapseMode === 'fold';
        },
        dynamicStyle() {
            // return Object.assign({}, this.currentWidth !== null && { width: `${this.currentWidth}px` }, !this.isDragging && { transition: 'width 500ms' });
            return Object.assign(
                {
                    'min-width': `${this.minWidth}px`,
                },
                !this.isDragging ? {
                    transition: 'width 200ms',
                } : {
                    '--transition-duration-base': '0',
                    '--transition-duration-fast': '0',
                    '--transition-duration-slow': '0',
                    '--transition-duration-slower': '0',
                },
            );
        },
    },
    watch: {
        data(data) {
            this.handleData();
        },
        currentWidth(v) {
            if (v && this.$el) {
                this.$nextTick(() => {
                    this.$el.style.width = `${v}px`;
                });
            }
        },
        isDragging() {
            this.$nextTick(() => {
                this.$el.style.width = `${this.currentWidth}px`;
            });
        },
        dataSource(dataSource, oldDataSource) {
            // if (typeof dataSource === 'function' && String(dataSource) === String(oldDataSource))
            //     return;
            this.handleData();
        },
        collapse(nV, oldV) {
            if (nV === oldV || this.currentCollapse === nV) {
                return;
            }
            this.currentWidth = !nV ? null : this.minWidth;
            this.currentCollapse = nV;
            this.isTransitionEnd = false;
        },
        enableCollapse(nV) {
            if (nV) {
                this.currentWidth = !this.collapse ? null : this.minWidth;
                this.currentCollapse = this.collapse;
                this.isTransitionEnd = false;
            } else {
                this.currentWidth = null;
                this.currentCollapse = false;
                this.isTransitionEnd = true;
            }
        },
    },
    created() {
        this.$on('select', ({ itemVM }, fromLinkClick = false) => !fromLinkClick && this.router && itemVM.navigate());
        this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
        if (this.currentDataSource && this.currentDataSource.load && this.initialLoad)
            this.load();
    },
    mounted() {
        if (this.enableCollapse && this.collapse && this.$el) {
            this.$nextTick(() => {
                this.$el.style.width = `${this.currentWidth}px`;
            });
        }
    },
    updated() {
        if (this.enableCollapse && this.currentCollapse && this.$el && this.currentWidth) {
            this.$nextTick(() => {
                this.$el.style.width = `${this.currentWidth}px`;
            });
        }
    },
    methods: {
        updateCollapse(nV) {
            this.$emit('update:collapseMode', nV ? 'fold' : 'expand', this);
            this.currentCollapse = nV;
        },
        handleTranstitionEnd() {
            this.isTransitionEnd = true;
        },
        toggleCollapse() {
            this.currentWidth = this.currentCollapse ? null : this.minWidth;
            this.updateCollapse(!this.currentCollapse);
            this.isTransitionEnd = false;
        },
        hasChildren(node) {
            // 异步加载时使用isLeaf判断叶节点
            if (this.currentDataSource && this.currentDataSource.load && node && !this.$at(node, this.childrenField)) {
                const isLeafValue = this.$at(node, this.isLeafField);
                return isLeafValue === false;
            }
            const children = this.$at(node, this.childrenField);
            return Array.isArray(children) && children.length > 0;
        },
        handleData() {
            this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
        },
        normalizeDataSource(dataSource) {
            const final = {
                data: [],
                load: undefined,
            };

            const self = this;

            if (Array.isArray(dataSource)) {
                if (this.parentField) {
                    const temp = JSON.parse(JSON.stringify(dataSource));
                    final.data = this.list2tree(temp, this.valueField, this.parentField);
                } else {
                    final.data = JSON.parse(JSON.stringify(dataSource));
                }
            } else if (typeof dataSource === 'function') {
                final.load = createLoad(dataSource);
            } else if (typeof dataSource === 'object') {
                const data = dataSource.data || dataSource.list;

                if (this.parentField) {
                    const temp = JSON.parse(JSON.stringify(data));
                    final.data = this.list2tree(temp, this.valueField, this.parentField);
                } else {
                    final.data = JSON.parse(JSON.stringify(data));
                }
                final.load = dataSource.load && createLoad(dataSource.load);
            }

            return final;

            function createLoad(rawLoad) {
                return async (params = {}) => {
                    let result = await rawLoad(params);
                    if (!Array.isArray(result)) {
                        result = result.list;
                    }
                    if (result) {
                        if (self.parentField) {
                            const temp = JSON.parse(JSON.stringify(result));
                            final.data = self.list2tree(temp, self.valueField, self.parentField);
                        } else if (params.node) {
                            const containParentNode = result.find((item) =>
                                self.$at(item, self.valueField) === params.nodeVM.title); // 非根非叶节点只会是USidebarGroup
                            if (!containParentNode) {
                                self.$setAt(params.node, params.childrenField, result);
                            }
                        } else {
                            final.data = result;
                        }
                    }

                    if (params.node && !self.$at(params.node, params.nodeVM.currentChildrenField)) {
                        self.$setAt(params.node, self.isLeafField, true);
                    }
                };
            }
        },

        list2tree(list, idField, pField) {
            const [map, treeData] = [{}, []];
            for (let i = 0; i < list.length; i += 1) {
                map[this.$at(list[i], idField)] = i;
                this.$setAt(list[i], this.childrenField, []);
            }

            for (let i = 0; i < list.length; i += 1) {
                const node = list[i];
                if (this.$at(node, pField) && list[map[this.$at(node, pField)]]) {
                    this.$at(list[map[this.$at(node, pField)]], this.childrenField).push(node);
                } else {
                    treeData.push(node);
                }
            }
            return treeData;
        },
        load(params) {
            if (this.$emitPrevent('before-load', undefined, this))
                return;
            if (!this.currentDataSource.load)
                return;
            this.loading = true;
            this.currentDataSource.load(params).then(() => {
                this.loading = false;
                this.$emit('load', undefined, this);
            }).catch(() => this.loading = false);
        },
        reload() {
            this.load();
        },

        handleResizerMouseDown(event) {
            if (!this.enableCollapse) {
                return;
            }
            const srcX = event.pageX;
            if (!this.$el) {
                return;
            }
            const offsetWidth = this.$el.offsetWidth;
            const changeWidthFunc = (e) => {
                if (!this.$el) {
                    return;
                }
                const diffX = Math.round(srcX - e.pageX);
                this.currentWidth = this.getProperlyWidth(offsetWidth - diffX);
                if (this.currentWidth <= this.minWidth * 1.1) {
                    this.updateCollapse(true);
                } else {
                    this.updateCollapse(false);
                }
            };
            this.isDragging = true;
            document.addEventListener('mousemove', changeWidthFunc);
            document.addEventListener('mouseup', () => {
                this.isDragging = false;
                document.removeEventListener('mousemove', changeWidthFunc);
            });
        },

        getProperlyWidth(w) {
            const properlyWidth = Math.max(this.minWidth, w);
            return properlyWidth;
        },
    },
};
</script>

<style module>
.root {
    width: 100%;
    user-select: none;
    border-right: 1px solid #E9E9EB;
    background: var(--sidebar-background);
    height: 100%;
    overflow: auto;
    transition: all var(--transition-duration-base);
    position: relative;
}

.root[collapse] [class^=u-text]{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.root::-webkit-scrollbar{
  width: 0;
  height: 0;
}

.content{
    height: calc(100% - 56px);
}

.resizer{
  width: 8px;
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  transform: translateX(50%);
  cursor: col-resize;
  user-select: none;
  background-color: transparent;
}

.bottom{
    height: 56px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bottom[expanded] {
  justify-content: flex-end;
}

.bottom::before{
  content: '';
  position: absolute;
  height: 1px;
  left: 8px;
  right: 8px;
  top: 0;
  transform: translateY(-50%);
  background: #E5E5E5;
}

.expanderIcon{
    cursor: pointer;
    font-size: 24px;
    height: 24px;
    width: 24px;
    line-height: 24px;
}

.expanderIcon svg{
  font-size: 24px;
}

.root[vusion-empty-background][has-data-source="true"] {
    background: var(--sidebar-background);
}

.root[size="small"] .group_head {
    height: var(--sidebar-item-height-small);
    line-height: var(--sidebar-item-height-small);
    font-size: 12px;
    cursor: default;
}

.root[size="small"] .item {
    height: var(--sidebar-item-height-small);
    line-height: var(--sidebar-item-height-small);
}

.root[size="small"] .item[selected] {
    border-right-width: var(--sidebar-item-border-right-width-small);
}

.mask {
    position: relative;
}
.mask::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(255,255,255,0.8);
    z-index: 999;
}
</style>
