<template>
    <div :class="$style.root" :clearable="clearable && !!currentValue" :opened="currentOpened"
        @keydown.up.prevent="$refs.popper.currentOpened ? shift(-1) : open()"
        @keydown.down.prevent="$refs.popper.currentOpened ? shift(+1) : open()"
        @keydown.left.prevent="horizontalShift(-1)"
        @keydown.right.prevent="horizontalShift(+1)"
        @keydown.esc.stop="close()"
        @keydown.enter="$refs.popper.currentOpened ? onEnter() : open()"
        :disabled="disabled"
        :readonly="readonly">
        <u-input :class="$style.input" :opened="currentOpened"
            :placeholder="placeholder" :readonly="!filterable || readonly"
            :value="currentValue" :disabled="disabled"
            @focus="focus" @blur="blur"
            @input="onInput"
            @clear="clear"
            :color="formItemVM && formItemVM.color"
            :autofocus="autofocus"
            ref="input">
            <m-popper v-if="!disabled && !readonly" :class="$style.popperShape" ref="popper"
                @mousedown.stop.prevent
                @open="getSubComponents(true)" @close="resetInput">
                <div v-if="loading" :class="$style.loading"><u-loading></u-loading></div>
                <template v-else>
                    <u-cascader-item v-for="(item, index) in typeMpopper" :key="$at(item[0], field) + index" :ref="index"
                        @select-umenuitem="selectCascaderItem"
                        @select-lastvalue="selectEnd"
                        :component-index="index"
                        :select-sub-idnex="selectSubIdnex"
                        :menu-index="selectMenuIndexs[index]"
                        :trigger="trigger"
                        :is-input="isInput"
                        :lazy="lazy"
                        :field="field"
                        :data="item"
                        :change-on-select="changeOnSelect"
                        :style="dynamicStyle"
                        >
                    </u-cascader-item>
                </template>
            </m-popper>
        </u-input>
        <span v-show="clearable && currentValue && !disabled && !readonly" :class="$style.clearable" @click="clear" @mousedown.prevent></span>
    </div>
</template>

<script>
import UCascaderItem from './item.vue';
import MField from '../m-field.vue';
import SupportDataSource from '../../mixins/support.datasource';
import treeDataSource from '../../mixins/tree.datasource';

export default {
    name: 'u-cascader',
    components: { UCascaderItem },
    mixins: [MField, SupportDataSource, treeDataSource],
    props: {
        data: { type: Array, default: () => [] },
        value: { type: [String, Array], default: '' },
        placeholder: { type: String, default: '请选择' },
        field: { type: String, default: 'text' },
        trigger: { type: String, default: 'click' },
        join: { type: String, default: ' / ' },
        filterable: { type: Boolean, default: false },
        clearable: { type: Boolean, default: false },
        showFinalValue: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        lazy: { type: Boolean, default: false },
        lazyLoad: { type: Function, default: () => {} },
        autofocus: { type: Boolean, default: false },
        opened: { type: Boolean, default: false },

        // fixme：理论上使用converter属性会更好一点,但其他converter有其它的作用
        useArrayLikeValue: {
            type: Boolean,
            default: false,
        },

        changeOnSelect: {
            type: Boolean,
            default: false,
        },

        filterHightlighterColor: {
            type: String,
        },
    },
    data() {
        return {
            currentValue: this.useArrayLikeValue && Array.isArray(this.value) ? '正在加载' : this.value,
            currentData: [], // 动态加载时的数据
            lastValueString: '',
            lastValueArray: [], // 当前属性存储文本字段的内容, UCascader有被其它组件mixin，故这里不修改变量名
            lastRealValueArray: this.useArrayLikeValue && Array.isArray(this.value) ? JSON.parse(JSON.stringify(this.value)) : [], // 当前属性存储值字段的内容
            allMergeText: [], // 过滤时的搜索内容
            selectSubIdnex: 0, // 点击pre组件时候，取消after组件的选中状态
            subComponents: [], // mpopper真正内容的数据
            typeMpopper: [], // mpopper显示的数据（有真正内容数据和搜索内容数据）
            isInput: false,
            currentOpened: false,
            cssVariables: {},
        };
    },
    computed: {
        dynamicStyle() {
            if (this.filterHightlighterColor) {
                return {
                    ...this.cssVariables,
                    '--cascader-item-highlighter': this.filterHightlighterColor,
                };
            }
            return this.cssVariables;
        },
    },
    watch: {
        currentValue(value) {
            // 在 u-region-select 组件中有 converter，需要组件自己触发事件
            if (!this.converter) {
                if (this.useArrayLikeValue) {
                    const value = JSON.parse(JSON.stringify(this.lastRealValueArray));
                    this.$emit('update:value', value);
                    this.$emit('change', { sender: this, value });
                    this.$emit('input', value, this);
                } else {
                    this.$emit('update:value', value);
                    this.$emit('change', { sender: this, value });
                    this.$emit('input', value, this);
                }
            }
        },

        value(value) {
            if (value === undefined || value === null || value === '') {
                this.lastValueString = '';
                this.lastRealValueArray = [];
                this.selectSubIdnex = -1;
                this.currentValue = '';
                return;
            }
            if (!this.converter) {
                if (this.useArrayLikeValue && Array.isArray(value)) {
                    this.updateFromArrayLikeValue(JSON.parse(JSON.stringify(value)));
                    if (!this.showFinalValue)
                        this.currentValue = this.lastValueString;
                    else
                        this.currentValue = this.lastValueString.split(this.join).slice(-1)[0];
                    // filterable，需要强制更新下
                    this.$refs.input.updateCurrentValue(this.currentValue);
                } else {
                    this.currentValue = value;
                }
            }
        },
        opened(value) {
            if (value === this.currentOpened)
                return;
            this.currentOpened = value;
            this.toggle(value);
        },
        'currentDataSource.data'(value, oldValue) {
            let data = value;
            // 设置了parentField以parentField优化
            if (this.parentField
                && this.valueField) {
                data = this.listToTree(value.slice(0));
            }
            this.currentData = data;
            this.allMergeText = this.getMergeText(this.currentData);
            this.getSubComponents();
            if (this.useArrayLikeValue) {
                this.updateFromArrayLikeValue(this.lastRealValueArray);
                if (!this.showFinalValue)
                    this.currentValue = this.lastValueString;
                else
                    this.currentValue = this.lastValueString.split(this.join).slice(-1)[0];
                // filterable，需要强制更新下
                this.$refs.input.updateCurrentValue(this.currentValue);
            }
        },
    },
    created() {
        if (this.data.length && !this.dataSource) {
            this.currentDataSource = this.normalizeDataSource(this.data);
        }
        // this.currentValue = this.value; // 这里会引起currentValue change，emit事件导致validator执行
        this.lastValueString = this.useArrayLikeValue && Array.isArray(this.value) ? '正在加载' : this.value;
        if (this.lazy)
            this.triggerLazyLoad();
        // validator
        this.$emit('update', this.useArrayLikeValue ? this.lastRealValueArray : this.currentValue);
    },
    mounted() {
        // 输入框是readonly时，autofocus不起作用，需要这样进行focus
        this.autofocus && this.$refs.input.focus();
        this.extractCssVariables();
        // 在编辑器里不要打开
        if (!this.$env.VUE_APP_DESIGNER && this.currentData.length) {
            this.currentOpened = this.opened;
            this.toggle(this.opened);
        }
    },
    methods: {
        extractCssVariables() {
            if (this.$vnode && this.$vnode.data && this.$vnode.data.staticStyle) {
                this.cssVariables = Object.entries(this.$vnode.data.staticStyle).reduce((acc, [key, value]) => {
                    if (!key.startsWith('--')) {
                        return acc;
                    } else {
                        return {
                            ...acc,
                            [key]: value,
                        };
                    }
                }, {});
            }
        },
        selectCascaderItem(selectNode, subIndex) {
            this.selectSubIdnex = subIndex;

            this.subComponents.splice(subIndex + 1);
            if (selectNode.children)
                this.subComponents.push(selectNode.children);
            // 判断是否是动态加载
            else if ('leaf' in selectNode && !selectNode.leaf && !('loading' in selectNode)) {
                this.triggerLazyLoad(selectNode);
            }
            if (Array.isArray(selectNode.index)) {
                this.lastRealValueArray = [];
                this.lastValueArray = [];
                selectNode.index.reduce((nodes, i) => {
                    const node = nodes[i];
                    if (!node) {
                        return [];
                    }
                    this.lastValueArray.push(this.$at(node, this.field));
                    this.lastRealValueArray.push(this.$at(node, this.valueField));
                    return node.children || [];
                }, this.currentData || []);
            } else {
                this.lastValueArray.splice(subIndex);
                this.lastRealValueArray.splice(subIndex);
                this.lastValueArray.push(this.$at(selectNode, this.field));
                this.lastRealValueArray.push(this.$at(selectNode, this.valueField));
            }
            if (!this.changeOnSelect || this.trigger !== 'click') {
                this.$refs.popper.scheduleUpdate();
            }
        },
        selectEnd() {
            this.lastValueString = this.lastValueArray.join(this.join);
            this.close();
            if (this.useArrayLikeValue) {
                this.$emit('select', {
                    value: this.lastRealValueArray,
                    values: this.lastRealValueArray,
                    items: this.subComponents,
                }, this);
            } else {
                this.$emit('select', {
                    value: this.lastValueString,
                    values: this.lastValueArray,
                    items: this.subComponents,
                }, this);
            }
        },

        updateFromArrayLikeValue(values) {
            const temp = [this.currentData];
            this.lastRealValueArray = values;
            this.lastValueArray = [];
            this.selectMenuIndexs = [];
            this.lastRealValueArray.forEach((inputvalue, currentref) => {
                const sub = (temp[currentref] || []).find((item, index) => {
                    if (this.$at(item, this.valueField) === inputvalue || String(this.$at(item, this.valueField)) === String(inputvalue)) {
                        this.selectMenuIndexs.push(index);
                        this.lastValueArray.push(this.$at(item, this.field));
                        return true;
                    }
                    return false;
                });
                if (sub) {
                    const children = this.$at(sub, this.childrenField);
                    if (children)
                        temp.push(children);
                }
            });
            this.lastValueString = this.lastValueArray.join(this.join);
        },

        // 返回每个属性合并后的value和它们所在嵌套数组的位置
        getMergeText(data) {
            const combinedText = [];
            if (!Array.isArray(data))
                return [];
            data.forEach((item, index) => {
                let markData = {};
                if (item.children && item.children.length && !item.disabled) {
                    this.getMergeText(item.children).forEach((childItem) => {
                        markData = {};
                        // 设置为.text是配合props传入的data数据格式
                        markData[this.field] = this.$at(item, this.field) + this.join + this.$at(childItem, this.field);
                        markData.index = [index, ...childItem.index];
                        combinedText.push(markData);
                    });
                } else {
                    if (!item.disabled) {
                        // fix 打开filterable搜索不到内容，取到的值是undefined
                        markData[this.field] = this.$at(item, this.field);
                        markData.index = [index];
                        combinedText.push(markData);
                    }
                }
            });
            return combinedText;
        },
        // mpopper打开时，根据value值展开mpopper框内部组件
        getSubComponents(opened) {
            this.currentOpened = opened;
            if (this.isInput)
                return;
            this.subComponents = [this.currentData];
            // 当使用完搜索功能时，lastvalue的格式是不对的，每次open时需要重置成正确格式
            this.lastValueArray = [];
            this.selectMenuIndexs = [];
            if (this.currentValue) {
                if (!this.useArrayLikeValue) {
                    const inputValues = this.lastValueString.split(this.join);

                    inputValues.forEach((inputvalue, currentref) => {
                        this.lastValueArray.push(inputvalue);
                        const sub = (this.subComponents[currentref] || []).find((item, index) => {
                            if (this.$at(item, this.field) === inputvalue || String(this.$at(item, this.field)) === String(inputvalue)) {
                                this.selectMenuIndexs.push(index);
                                return true;
                            }
                            return false;
                        });
                        if (sub) {
                            const children = this.$at(sub, this.childrenField);
                            if (children)
                                this.subComponents.push(children);
                        }
                    });
                } else {
                    this.lastRealValueArray.forEach((inputvalue, currentref) => {
                        const sub = (this.subComponents[currentref] || []).find((item, index) => {
                            if (this.$at(item, this.valueField) === inputvalue || String(this.$at(item, this.valueField)) === String(inputvalue)) {
                                this.selectMenuIndexs.push(index);
                                this.lastValueArray.push(this.$at(item, this.field));
                                return true;
                            }
                            return false;
                        });
                        if (sub) {
                            const children = this.$at(sub, this.childrenField);
                            if (children)
                                this.subComponents.push(children);
                        }
                    });
                }
            }
            // open时，光标设置已选中的last ucascaderitem
            this.selectSubIdnex = this.lastValueArray.length ? this.lastValueArray.length - 1 : 0;

            this.typeMpopper = this.subComponents;
        },
        triggerLazyLoad(node) {
            if (!node)
                node = { root: true, level: 0, leaf: false };
            else
                node.level = this.selectSubIdnex + 1;

            this.$set(node, 'loading', true);
            const resolve = (dataList) => {
                node.loading = false;
                this.subComponents.splice(this.selectSubIdnex + 1);
                if (node.root) {
                    // 防止点击级联时，第一层的数据还在加载，push会出bug
                    this.subComponents[0] = dataList;
                    this.currentData.push(...dataList);
                } else {
                    this.subComponents.push(dataList);
                    // 等于lazyData[node, node[, ...[, nodeN]]].children = dataList
                    node.children = dataList;
                }
                this.allMergeText = this.getMergeText(this.currentData);
            };
            this.lazyLoad(node, resolve);
        },
        shift(count) {
            const refVM = this.$refs[this.selectSubIdnex][0];
            refVM.keyboardShift(count);
        },
        horizontalShift(count) {
            const newSubIndex = this.selectSubIdnex + count;
            if (newSubIndex < 0 || newSubIndex === this.typeMpopper.length)
                return;

            this.selectSubIdnex = newSubIndex;
            if (count > 0)
                this.shift(count);
            else
                this.shift(0);
        },
        onInput(value) {
            if (value) {
                this.isInput = true;
                // 搜索框只有一栏,keyboard光标复原
                this.selectSubIdnex = 0;
                this.typeMpopper = Array(this.filter(value));
            } else {
                this.isInput = false;
                this.typeMpopper = this.subComponents;
            }
            this.open();
        },
        markMatchingStrings(source, target) {
            const regex = new RegExp(target, 'g');
            const matched = regex.test(source);
            if (!matched) {
                return null;
            }
            return source.replace(regex, (match) => `<span class="${this.$style.filterHighlighter}">${match}</span>`);
        },
        filter(filterParam) {
            return this.allMergeText.filter((item) => {
                if (!item) {
                    return false;
                }
                const highlighterHtml = this.markMatchingStrings(item[this.field], filterParam);
                if (!highlighterHtml) {
                    return false;
                }
                item.highlighterHtml = highlighterHtml;
                return true;
            });
        },
        onEnter() {
            const refVM = this.$refs[this.selectSubIdnex][0];
            if (!refVM)
                return;
            if (!this.currentValue) {
                this.lastValueString = '';
                this.lastRealValueArray = [];
            }
            refVM.keyboardShift(0, true);
            this.close();
        },
        open() {
            this.$refs.popper.open();
        },
        close() {
            this.$refs.popper.close();
            this.isInput = false;
        },
        toggle(opened) {
            this.$refs.popper && this.$refs.popper.toggle(opened);
        },
        clear(...args) {
            if (this.readonly || this.disabled) {
                return;
            }
            this.currentValue = '';
            this.lastValueString = '';
            this.lastRealValueArray = [];
            this.selectSubIdnex = -1;
            this.close();

            this.$emit('clear', ...args);
        },
        resetInput() {
            if (!this.showFinalValue)
                this.currentValue = this.lastValueString;
            else
                this.currentValue = this.lastValueString.split(this.join).slice(-1)[0];
            this.isInput = false;
            this.currentOpened = false;

            // filterable，需要强制更新下
            this.$refs.input.updateCurrentValue(this.currentValue);
        },
        focus(...args) {
            this.$emit('focus', ...args);
        },
        blur(...args) {
            this.$emit('blur', ...args);
        },
    },
};
</script>

<style module src="./index.css"></style>
