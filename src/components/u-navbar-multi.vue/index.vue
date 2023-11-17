<template>
    <div
        :class="$style.root"
        :animation="animation"
        :readonly="readonly"
        :disabled="disabled"
    >
        <u-multi-layout
            vusion-node-tag="u-multi-layout"
        >
            <slot name="left"></slot>
            <u-multi-layout-item align-items="center">
                <template v-if="childrenNodes.length > 0">
                    <template v-for="(node, idx) in childrenNodes">
                        <u-navbar-group-multi
                            v-if="hasChildren(node)"
                            :key="$at2(node, valueField) || idx"
                            :node="node"
                            :disabled="node.disabled"
                            :collapsible="$at2(node, collapsibleField)"
                            :title="$at2(node, textField)"
                            :icon="$at2(node, iconField)"
                            :inner-idx="idx"
                            ></u-navbar-group-multi>
                        <u-navbar-item-multi
                            v-else
                            :class="$env.VUE_APP_DESIGNER ? $style.mask:''"
                            :key="`${$at2(node, valueField) || idx}`"
                            :text="$at2(node, textField)"
                            :replace="$at2(node, replaceField)"
                            :exact="$at2(node, exactField)"
                            :value="$at2(node, valueField)"
                            :icon="$at2(node, iconField)"
                            :link-type="$at2(node, linkTypeField)"
                            :href-and-to="$at2(node, hrefAndToField)"
                            :to="$at2(node, toField)"
                            :target="$at2(node, targetField)"
                            :disabled="node.disabled"></u-navbar-item-multi>
                    </template>
                </template>
                <f-render v-for="(vnode, idx) in slotItems" :vnode="vnode" :key="idx"></f-render>
            </u-multi-layout-item>
            <slot name="right"></slot>
        </u-multi-layout>
    </div>
</template>

<script>
import { MGroupParent } from '../m-group.vue';
import { MSinglex } from '../m-singlex.vue';

export default {
    name: 'u-navbar-multi',
    childName: 'u-navbar-item-multi',
    mixins: [MSinglex, MGroupParent],
    props: {
        router: { type: Boolean, default: true },
        animation: { type: String, default: '1' },
        trigger: { type: String, default: 'click' },

        dataSource: [Array, Object, Function],
        isLeafField: { type: String, default: 'isLeaf' },
        parentField: { type: String, default: '' },
        childrenField: { type: String, default: 'children' },
        textField: { type: String, default: 'text' },
        valueField: { type: String, default: 'value' },
        replaceField: { type: String, default: 'replace' },
        exactField: { type: String, default: 'exact' },
        iconField: { type: String, default: 'icon' },
        toField: { type: String, default: 'to' },
        linkTypeField: { type: String, default: 'linkType' },
        hrefAndToField: { type: String, default: 'hrefAndTo' },
        targetField: { type: String, default: 'target' },
        initialLoad: { type: Boolean, default: true },
        collapsibleField: { type: String, default: 'collapsible' },
    },
    data() {
        return {
            currentDataSource: undefined,
            loading: false,
            slotItems: [],
            defaultSlots: undefined,
        };
    },
    computed: {
        childrenNodes() {
            if (this.currentDataSource && this.currentDataSource.data && Array.isArray(this.currentDataSource.data)) {
                return this.currentDataSource.data;
            }
            return [];
        },
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
        this.$on('select', ({ itemVM }, fromLinkClick = false) => !fromLinkClick && this.router && itemVM.navigate());
        this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
        if (this.currentDataSource && this.currentDataSource.load && this.initialLoad) {
            this.load();
        }
    },
    mounted() {
        // console.log(this.$slots.default);
        this.collectSlotItems();
    },
    updated() {
        this.collectSlotItems();
    },
    methods: {
        collectSlotItems() {
            if (this.defaultSlots === this.$slots.default) {
                return;
            }
            this.defaultSlots = this.$slots.default;
            if (this.$slots.default && this.$slots.default.length > 0) {
                let temp = [];
                // readme: 为了兼容老版本的各种用法，现在仅去除第一层所有的u-multi-layout.
                this.$slots.default.forEach((wrapVnode) => {
                    if (wrapVnode.componentOptions && wrapVnode.componentOptions.tag && wrapVnode.componentOptions.tag === 'u-multi-layout-item') {
                        if (Array.isArray(wrapVnode.componentOptions.children)) {
                            temp = temp.concat(wrapVnode.componentOptions.children);
                        }
                    } else {
                        temp = [...temp, wrapVnode];
                    }
                });
                this.slotItems = temp;
                this.$forceUpdate();
                return;
            }
            this.slotItems = [];
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
            if (this.$emitPrevent('before-load', undefined, this)) {
                return;
            }
            if (!this.currentDataSource.load) {
                return;
            }
            this.loading = true;
            this.currentDataSource
                .load(params)
                .then(() => {
                    this.loading = false;
                    this.$emit('load', undefined, this);
                })
                .catch(() => (this.loading = false));
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
    height: var(--navbar-height);
    line-height: var(--navbar-height);
    /* display: flex;
    justify-content: space-between; */
    background: var(--navbar-background);
    white-space: nowrap;
    position: relative;
    color: var(--navbar-color);

    /* 旧应用中存在UDropdown在UNavbarMulti里面的情况,这里为了使得UDropdown的主题设置生效，不可以直接覆盖UDropdown的样式 */
    --dropdown-color-text: var(--navbar-color);
}

.root::after{
    content: ' ';
    position: absolute;
    height: 1px;
    left: 0;
    right: 0;
    bottom: 1px;
    transform: translateY(50%);
    background: var(--navbar-divider-line-background);
}

.left {
    float: left;
    margin-right: var(--navbar-space-x);
}

.middle {
    margin: 0 var(--navbar-space-x);
}

.root[alignment="center"] .middle {
    text-align: center;
}

.root[alignment="right"] .middle {
    text-align: right;
}

.right {
    float: right;
    margin-left: var(--navbar-space-x);
}

.root[color="inverse"] {
    background-color: var(--navbar-background-inverse);
}

.root[color="inverse"] .item {
    color: var(--navbar-item-color-inverse);
}

.root[color="inverse"] .item:hover {
    color: var(--navbar-item-color-inverse);
}

.root[color="inverse"] .item[selected] {
    color: var(--navbar-item-color-inverse);
}

.root .item + .divider {
    margin-left: 0;
}

.root[animation="1"] .item::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: var(--navbar-item-line-height);
    width: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--navbar-item-line-background);
}

.root[animation="1"] .item:hover::after {
    transition: width var(--navbar-item-line-transition-duration);
    width: 100%;
}

.root[animation="1"] .item[selected]::after {
    width: 100%;
}

.root[animation="1"] .item[disabled]::after {
    display: none;
}

.root[animation="2"] .item {
    transition: color 0.3s;
}

.root[animation="2"] .item::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: var(--navbar-item-line-background);
    opacity: 0;
    transition: all 0.3s;
    transform: translateY(-10px);
}

.root[vusion-empty-background]{
    background: var(--navbar-background);
}

.root[animation="2"] .item:hover::after {
    height: 3px;
    opacity: 1;
    transform: translateY(0);
}

.root[animation="2"] .item[selected]::after {
    height: 3px;
    opacity: 1;
    transform: translateY(0);
}

.root[animation="2"] .item[disabled]::after {
    display: none;
}

.root[animation="3"] .item {
    transition: color 0.3s;
}

.root[animation="3"] .item::after {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    bottom: 0;
    color: transparent;
    content: "\2022";
    font-size: 1.2em;
    line-height: 1;
    transform: translateX(-50%);
    transition: all 0.3s;
}

.root[animation="3"] .item:hover {
}

.root[animation="3"] .item:hover::after {
    color: var(--navbar-item-line-background);
    text-shadow: 10px 0 var(--navbar-item-line-background),
        -10px 0 var(--navbar-item-line-background);
}

.root[animation="3"] .item[selected] {
}

.root[animation="3"] .item[selected]::after {
    color: var(--navbar-item-line-background);
    text-shadow: 10px 0 var(--navbar-item-line-background),
        -10px 0 var(--navbar-item-line-background);
}

.root[animation="3"] .item[disabled]::after {
    display: none;
}

.root[animation="4"] .item {
    padding: 0 6px;
    transition: color 0.3s;
}

.root[animation="4"] .item::before,
.root[animation="4"] .item::after {
    display: inline-block;
    opacity: 0;
    transition: transform 0.3s, opacity 0.2s;
}

.root[animation="4"] .item::before {
    margin-right: 8px;
    content: "[";
    transform: translateX(20px);
}

.root[animation="4"] .item::after {
    margin-left: 8px;
    content: "]";
    transform: translateX(-20px);
}

.root[animation="4"] .item:hover {
}

.root[animation="4"] .item:hover::before,
.root[animation="4"] .item:hover::after {
    opacity: 1;
    transform: translateX(0);
}

.root[animation="4"] .item[selected] {
}

.root[animation="4"] .item[selected]::before,
.root[animation="4"] .item[selected]::after {
    opacity: 1;
    transform: translateX(0);
}

.root[animation="4"] .item[disabled]::before,
.root[animation="4"] .item[disabled]::after {
    opacity: 0;
}

/* .root [class^="u-dropdown__"][type=text],
.root [class^="u-dropdown__"][type=text]:not([disabled]):hover {
    color: inherit;
} */

.mask [class^="s-empty"]{
    position: relative;
}
.mask [class^="s-empty"]::before {
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
