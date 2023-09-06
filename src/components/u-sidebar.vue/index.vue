<template>
    <nav :class="$style.root" :readonly="readonly" :disabled="disabled">
        <template v-if="currentDataSource&&currentDataSource.data&&Array.isArray(currentDataSource.data)">
            <template v-for="(node,idx) in currentDataSource.data">
                <u-sidebar-group
                    v-if="hasChildren(node)"
                    :key="$at2(node, valueField) || idx"
                    :node="node"
                    :disabled="node.disabled"
                    :collapsible="$at2(node, collapsibleField)"
                    :title="$at2(node, textField)"
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
        collapse: { type: Boolean, default: false },
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
    },

    data() {
        return {
            currentDataSource: undefined,
        };
    },
    watch: {
        data(data) {
            this.handleData();
        },
        dataSource(dataSource, oldDataSource) {
            // if (typeof dataSource === 'function' && String(dataSource) === String(oldDataSource))
            //     return;
            this.handleData();
        },
    },
    created() {
        this.$on('select', ({ itemVM }) => this.router && itemVM.navigate());
        this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
        if (this.currentDataSource && this.currentDataSource.load && this.initialLoad)
            this.load();
    },
    methods: {
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
            const [map, treeData] = [{}, {}];

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
