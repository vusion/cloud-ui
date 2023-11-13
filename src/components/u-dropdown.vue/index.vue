<template>
    <div :class="$style.root" :disabled="disabled" :type="type">
        <div
            :class="$style.title"
            vusion-slot-name="title"
            vusion-slot-name-edit="title"
            no-for-edit
            can-nodeinfo
        >
            <slot name="title"></slot>
            <s-empty
                v-if="
                    !$slots.title &&
                    $scopedSlots &&
                    !($scopedSlots.title && $scopedSlots.title()) &&
                    $env.VUE_APP_DESIGNER
                    && !!$attrs['vusion-node-path']
                "
            ></s-empty>
            <i-ico v-if="loading" :class="$style.iconLoading" name="loading"></i-ico>
            <i :class="$style.icon" v-else-if="type !== 'more'"></i>
            <i-ico name="more" v-else :class="$style.iconMore"></i-ico>
        </div>
        <m-popper
            ref="popper"
            :style="{ width: currentPopperWidth }"
            :class="$style.popper"
            :trigger="trigger"
            :placement="placement"
            :disabled="disabled"
            :append-to="appendTo"
            :opened="opened"
            @update:opened="onUpdateOpened"
        >
            <template v-if="childrenNodes.length > 0">
                <template v-for="(node, idx) in childrenNodes">
                    <u-dropdown-group
                        v-if="hasChildren(node)"
                        :key="$at2(node, valueField) || idx"
                        :node="node"
                        :disabled="node.disabled"
                        :collapsible="$at2(node, collapsibleField)"
                        :title="$at2(node, textField)"
                        :icon="$at2(node, iconField)"
                        :inner-idx="idx"
                        ></u-dropdown-group>
                    <u-dropdown-item
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
                        :disabled="node.disabled"></u-dropdown-item>
                </template>
            </template>
            <slot></slot>
        </m-popper>
        <!-- append-to body的情况下能够拿到width值 -->
        <div :class="$style.popperghost" ref="popperghost" v-if="appendTo === 'body'"></div>
    </div>
</template>

<script>
import { MGroupParent } from '../m-group.vue';
import { MSinglex } from '../m-singlex.vue';
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-dropdown',
    childName: 'u-dropdown-item',
    components: {
        SEmpty,
    },
    mixins: [MSinglex, MGroupParent],
    props: {
        type: { type: String, default: 'text' },
        router: { type: Boolean, default: true },
        animation: { type: String, default: '1' },
        title: String,
        trigger: { type: String, default: 'click' },
        placement: {
            type: String,
            default: 'bottom-start',
            validator: (value) =>
                /^(top|bottom|left|right)(-start|-end)?$/.test(value),
        },
        opened: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        appendTo: {
            type: String,
            default: 'reference',
            validator: (value) => ['body', 'reference'].includes(value),
        },

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
            currentPopperWidth: undefined,
            currentDataSource: undefined,
            loading: false,
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
        appendTo(appendTo) {
            this.setPopperWidth();
        },
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
        this.setPopperWidth();
    },
    methods: {
        logout() {
            /* eslint-disable new-cap */
            this.$confirm('确定退出登录吗？', '提示')
                .then(() => this.$auth.logout())
                .then(() => {
                    this.eraseCookie();
                    location.reload();
                });
        },
        eraseCookie() {
            const cookies = document.cookie.split(';');
            cookies.forEach((cookie) => {
                const eqPos = cookie.indexOf('=');
                const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                const d = new Date();
                d.setTime(d.getTime() - 1 * 24 * 60 * 60 * 1000);
                document.cookie = `${name}=; expires=${d.toGMTString()}; path=/`;
            });
        },
        setPopperWidth() {
            if (this.appendTo === 'body') {
                this.currentPopperWidth = this.$refs.popperghost && (this.$refs.popperghost.offsetWidth + 'px');
            } else {
                this.currentPopperWidth = undefined;
            }
        },
        onUpdateOpened($event) {
            this.$emit('update:opened', $event);
            if (this.$env.VUE_APP_DESIGNER) {
                this.setPopperWidth();
            }
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
            if (this.$emitPrevent('before-load', undefined, this)) return;
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
        // IDE里使用：单击打开弹出框
        designerControl() {
            this.$refs.popper.toggle();
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    position: relative;
    font-size: 14px;
    cursor: var(--cursor-pointer);
    transition: var(--transition-duration-base);
}
.root[disabled] {
    cursor: var(--cursor-not-allowed);
}
.root:not(:last-child) {
    margin-right: var(--navbar-item-space);
}

/* text */
.root[type="text"] {
    padding-right: 24px;
    color: var(--dropdown-color-text);
}
.root[type="text"]:not([disabled]):hover {
    color: var(--dropdown-color-text-hover);
}
.root[type="text"]:not([disabled]):active {
    color: var(--dropdown-color-text-active);
}
.root[type="text"][disabled] {
    color: var(--dropdown-color-text-disabled);
}

.root[type="primary"],
.root[type="primary_secondary"],
.root[type="normal"]{
    line-height: 30px;
    padding: 0 39px 0 15px;
    border-radius: 4px;
}
.root[type="more"] {
    line-height: 30px;
    padding: 0 48px 0 15px;
    border-radius: 4px;
}

.root[type="primary"] .icon,
.root[type="primary_secondary"] .icon,
.root[type="normal"] .icon {
    right: 13px;
}
/* primary */
.root[type="primary"] {
    border: var(--button-border-width) solid var(--button-border-color-primary);
    background: var(--button-background-primary);
    color: var(--button-color-primary);
}
.root[type="primary"]:hover {
    border: var(--button-border-width) solid
        var(--button-border-color-primary-hover);
    background: var(--button-background-primary-hover);
    color: var(--button-color-primary-hover);
}
.root[type="primary"]:active {
    border: var(--button-border-width) solid
        var(--button-border-color-primary-hover);
    background: var(--button-background-primary-hover);
    color: var(--button-color-primary-hover);
    box-shadow: var(--button-box-shadow-active-primary);
}

/* primary_secondary */
.root[type="primary_secondary"] {
    border: var(--button-border-width) solid
        var(--button-border-color-primary-secondary);
    background: var(--button-background-primary-secondary);
    color: var(--button-color-primary-secondary);
}
.root[type="primary_secondary"]:hover {
    border: var(--button-border-width) solid
        var(--button-border-color-primary-secondary-hover);
    background: var(--button-background-primary-secondary-hover);
    color: var(--button-color-primary-secondary-hover);
}
.root[type="primary_secondary"]:active {
    border: var(--button-border-width) solid
        var(--button-border-color-primary-secondary-hover);
    background: var(--button-background-primary-secondary-active);
    color: var(--button-color-primary-secondary-active);
    box-shadow: var(--button-box-shadow-active-primary-secondary);
}

/* normal & more */
.root[type="normal"],
.root[type="more"]{
    border: var(--button-border-width) solid var(--button-border-color);
    background: var(--button-background);
    color: var(--button-color);
}
.root[type="normal"]:hover,
.root[type="more"]:hover{
    border: var(--button-border-width) solid var(--button-border-color-hover);
    background: var(--button-background-hover);
    color: var(--button-color-hover);
}
.root[type="normal"]:active,
.root[type="more"]:active{
    border: var(--button-border-width) solid var(--button-border-color-active);
    background: var(--button-background-active);
    color: var(--button-color-active);
    box-shadow: var(--button-box-shadow-active);
}

.root[type="primary"][disabled],
.root[type="primary_secondary"][disabled],
.root[type="normal"][disabled],
.root[type="more"][disabled]{
    border: var(--button-border-width) solid var(--button-border-color-disabled);
    background: var(--button-background-disabled);
    color: var(--button-color-disabled);
    box-shadow: none;
}

.title {
}

.iconLoading {
    width: 16px;
    height: 16px;
    line-height: 16px;
    font-size: 16px;
    display: inline-block;
    margin-left: 6px;
    animation: rotate 1.5s linear infinite;
    transform-origin: center;
}

@keyframes rotate {
    0%{
       transform: rotate(0deg);
    }
    100%{
       transform: rotate(360deg);
    }
}

.icon{
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    font-size: 18px;
}

.icon::before {
    icon-font: url("../i-icon.vue/icons/keyboard-arrow-down.svg");
}

.iconMore {
    position: absolute;
    font-size: 18px;
    padding-left: 6px;
    margin-left: 16px;
    border-left: var(--button-border-width) solid var(--button-border-color);
}
.root[type="more"]:hover .iconMore,
.root[type="more"]:active .iconMore,
.iconMore:hover {
    border-left: var(--button-border-width) solid var(--button-border-color-primary-hover);
}
.popper {
    width: var(--dropdown-popper-width);
    min-width: 120px;
    line-height: var(--navbar-dropdown-popper-line-height);
    font-size: var(--navbar-dropdown-popper-font-size);
    padding: 8px 0px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    background: #fff;
}
.popperghost {
    width: var(--dropdown-popper-width);
    min-width: 120px;
    visibility: hidden;
    position: absolute;
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
