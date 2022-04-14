<template>
    <div :class="$style.root" :clearable="clearable && !!value" :opened="opened"
        @keydown.up.prevent="$refs.popper.currentOpened ? shift(-1) : open()"
        @keydown.down.prevent="$refs.popper.currentOpened ? shift(+1) : open()"
        @keydown.left.prevent="horizontalShift(-1)"
        @keydown.right.prevent="horizontalShift(+1)"
        @keydown.esc.stop="close()"
        @keydown.enter="$refs.popper.currentOpened ? onEnter() : open()">
        <u-input :class="$style.input" :opened="opened"
            :placeholder="placeholder" :readonly="!filterable"
            v-model="value" :disabled="disabled"
            @focus="focus" @blur="blur"
            @input="onInput"
            @clear="clear"
            :color="formItemVM && formItemVM.color">
            <m-popper v-if="!disabled" :class="$style.popperShape" ref="popper"
                @mousedown.stop.prevent
                @open="getSubComponents" @close="resetInput">
                <u-cascader-item v-for="(item, index) in typeMpopper" :key="$at(item[0], field) + index" :ref="index"
                    @select-umenuitem="selectCascaderItem"
                    @select-lastvalue="selectEnd"
                    :componentIndex="index"
                    :selectSubIdnex="selectSubIdnex"
                    :trigger="trigger"
                    :isInput="isInput"
                    :lazy="lazy"
                    :field="field" :data="item">
                </u-cascader-item>
            </m-popper>
        </u-input>
        <span v-show="clearable && value" :class="$style.clearable" @click="clear" @mousedown.prevent></span>
    </div>
</template>

<script>
import UCascaderItem from "./item.vue"
import MField from '../m-field.vue';

export default {
    name: "u-cascader",
    mixins: [MField],
    props: {
        data: { type: Array, default: () => [] },
        placeholder: { type: String, default: "请选择" },
        field: { type: String, default: "text" },
        trigger: { type: String, default: "click"} ,
        join: { type: String, default: " / "},
        defaultValue: { type: String, default: ''},
        filterable: { type: Boolean, default: false },
        clearable: { type: Boolean, default: false },
        showFinalValue: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false},
        lazy: { type: Boolean, default: false},
        lazyLoad: { type:Function, default: () => {} }
    },
    components: { UCascaderItem },
    data() {
        return {
            value: '',
            currentData: [],   //动态加载时的数据
            lastValueString: '',
            lastValueArray: [],
            allMergeText: [],     //过滤时的搜索内容
            selectSubIdnex: 0,   //点击pre组件时候，取消after组件的选中状态
            subComponents: [],  //mpopper真正内容的数据
            typeMpopper: [],    //mpopper显示的数据（有真正内容数据和搜索内容数据）
            isInput: false,
            opened: false
        };
    },
    watch: {
        value(value) {
            this.$emit('update:value', value);
            this.$emit('change', { sender: this, value });
            this.$emit("input", value, this);
        }
    },
    created(){
        if(!this.currentData.length)
            this.currentData = this.data;
        this.value = this.defaultValue;
        this.lastValueString = this.defaultValue;
        this.allMergeText = this.getMergeText(this.currentData);
        if(this.lazy)
            this.triggerLazyLoad();
    },
    methods: {
        selectCascaderItem(selectNode,subIndex){
            this.selectSubIdnex = subIndex;

            this.subComponents.splice(subIndex+1);
            if(selectNode.children)
                this.subComponents.push(selectNode.children);
            // 判断是否是动态加载
            else if('leaf' in selectNode && !selectNode.leaf && !('loading' in selectNode))
                this.triggerLazyLoad(selectNode);

            this.lastValueArray.splice(subIndex);
            this.lastValueArray.push(this.$at(selectNode, this.field));
        },
        selectEnd(){
            this.lastValueString = this.lastValueArray.join(this.join);
            this.close();

            this.$emit("select", {
                value: this.lastValueString,
                values: this.lastValueArray,
                items: this.subComponents,
                },
                this
            )
        },
        // 返回每个属性合并后的value和它们所在嵌套数组的位置
        getMergeText(data){
            let combinedText = [];
            if(!Array.isArray(data))
                return [];
            data.forEach((item, index) => {
                let markData = {};
                if(item.children && item.children.length && !item.disabled){
                    this.getMergeText(item.children).forEach(childItem => {
                        markData = {};
                        // 设置为.text是配合props传入的data数据格式
                        markData.text = this.$at(item, this.field) + this.join + this.$at(childItem, this.field);
                        markData.index = [index, ...childItem.index];
                        combinedText.push(markData);
                    })

                }
                else{
                    if(!item.disabled){
                        markData.text = item.text;
                        markData.index = [index];
                        combinedText.push(markData);
                    }
                }
            })
            return combinedText;
        },
        // mpopper打开时，根据value值展开mpopper框内部组件
        getSubComponents(){
            this.opened = true;
            if(this.isInput)
                return ;
            this.subComponents = [this.currentData];
            // 当使用完搜索功能时，lastvalue的格式是不对的，每次open时需要重置成正确格式
            this.lastValueArray = [];
            if(this.value){
                let inputValues = this.lastValueString.split(this.join)

                inputValues.forEach( (inputvalue, currentref) => {
                    this.lastValueArray.push(inputvalue);
                    let sub = this.subComponents[currentref].find( (item, index) => {
                        if(this.$at(item, this.field) === inputvalue){
                            this.$nextTick(() => {
                                this.$refs[currentref][0].selectMenuitem(index);
                            })
                            return true;
                        }
                        return false
                    })
                    if(sub && sub.children){
                        this.subComponents.push(sub.children);
                    }
                })
            }else{
                this.$nextTick(() => {
                    // clearable时，重置ucascaderitem选中样式
                    this.$refs[0][0].selectMenuitem(-1);
                })
            }
            // open时，光标设置已选中的last ucascaderitem
            this.selectSubIdnex = this.lastValueArray.length? this.lastValueArray.length - 1 : 0;

            this.typeMpopper = this.subComponents;
        },
        triggerLazyLoad(node){
            if(!node)
                node = {root: true, level : 0, leaf: false};
            else
                node.level = this.selectSubIdnex + 1;

            this.$set(node, 'loading', true)
            const resolve = dataList => {
                node.loading = false;
                this.subComponents.splice(this.selectSubIdnex + 1);
                if(node.root){
                    // 防止点击级联时，第一层的数据还在加载，push会出bug
                    this.subComponents[0] = dataList;
                    this.currentData.push(...dataList);
                }
                else{
                    this.subComponents.push(dataList);
                    // 等于lazyData[node, node[, ...[, nodeN]]].children = dataList
                    node.children = dataList;
                }
                this.allMergeText = this.getMergeText(this.currentData);
            }
            this.lazyLoad(node, resolve);
        },
        shift(count){
            let refVM = this.$refs[this.selectSubIdnex][0];
            refVM.keyboardShift(count);
        },
        horizontalShift(count){
            let newSubIndex = this.selectSubIdnex + count;
            if(newSubIndex < 0 || newSubIndex === this.typeMpopper.length)
                return;

            this.selectSubIdnex = newSubIndex;
            if(count > 0)
                this.shift(count);
            else
                this.shift(0);
        },
        onInput(){
            if(this.value){
                this.isInput = true;
                // 搜索框只有一栏,keyboard光标复原
                this.selectSubIdnex = 0
                this.typeMpopper = Array(this.filter(this.value));
            }
            else{
                this.isInput = false;
                this.typeMpopper = this.subComponents;
            }
            this.open();
        },
        filter(filterParam){
            return this.allMergeText.filter(({text}) => {
                return text.search(filterParam) > -1;
            })
        },
        onEnter(){
            let refVM = this.$refs[this.selectSubIdnex][0];
            if(!refVM)
                return ;
            if(!this.value)
                this.lastValueString = '';
            refVM.keyboardShift(0, true);
            this.close();
        },
        open(){
            this.$refs.popper.open();
        },
        close(){
            this.$refs.popper.close();
            this.isInput = false;
        },
        clear(){
            this.value = '';
            this.lastValueString = '';
            this.selectSubIdnex = -1;
            this.close()

            this.$emit('clear', ...arguments)
        },
        resetInput(){
            if(!this.showFinalValue)
                this.value = this.lastValueString;
            else
                this.value = this.lastValueString.split(this.join).slice(-1)[0];
            this.isInput = false;
            this.opened = false;
        },
        focus(){
            this.$emit('focus', ...arguments)
        },
        blur(){
            this.$emit('blur', ...arguments)
        }
    },
}
</script>

<style module src="./index.css"></style>