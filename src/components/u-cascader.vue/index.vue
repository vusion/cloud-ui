<template>
    <div :class="$style.root" :clearable="clearable && !!value" :opened="opened"
        @keydown.up.prevent="$refs.popper.currentOpened ? shift(-1) : open()"
        @keydown.down.prevent="$refs.popper.currentOpened ? shift(+1) : open()"
        @keydown.left.prevent="horizontalShift(-1)"
        @keydown.right.prevent="horizontalShift(+1)"
        @keydown.esc.stop="close()"
        @keydown.enter="$refs.popper.currentOpened ? onEnter() : open()">
        <u-input :class="$style.input" :placeholder="placeholder" :readonly="!filterable"
            v-model="value" :clearable="clearable" :disabled="disabled"
            @input="onInput"
            @clear="clear">
            <m-popper v-if="!disabled" :class="$style.popperShape" ref="popper"
                @open="getSubComponents" @close="resetInput">
                <u-cascader-item v-for="(item, index) in typeMpopper" :key="(item[0] && item[0].text) + index" :ref="index"
                    @select-umenuitem="addCascaderItem"
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
    </div>
</template>

<script>
import UCascaderItem from "./item.vue"

export default {
    name: "u-cascader",
    props: {
        data: { type: Array, default: () => [] },
        placeholder: { type: String, default: "请选择" },
        filterable: { type: Boolean, default: false },
        trigger: { type: String, default: "click"} ,
        clearable: { type: Boolean, default: false },
        showFinalValue: { type: Boolean, default: false },
        field: { type: String, default: "text" },
        join: { type: String, default: " / "},
        disabled: { type: Boolean, default: false},
        lazy: { type: Boolean, default: false},
        lazyLoad: { type:Function, default: () => {} }
    },
    components: { UCascaderItem },
    data() {
        return {
            value: '',
            lazyData: [],   //动态加载时的数据
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
    created(){
        this.allMergeText = this.getMergeText(this.data)
        if(this.lazy)
            this.triggerLazyLoad();
    },
    methods: {
        addCascaderItem(selectNode,subIndex){
            this.selectSubIdnex = subIndex;

            this.subComponents.splice(subIndex+1);
            if(selectNode.children)
                this.subComponents.push(selectNode.children);
            else if('leaf' in selectNode && !selectNode.leaf && !('loading' in selectNode))     //动态加载
                this.triggerLazyLoad(selectNode);
                
            this.lastValueArray.splice(subIndex);
            this.lastValueArray.push(this.$at(selectNode, this.field));
        },
        selectEnd(){
            this.lastValueString = this.lastValueArray.join(this.join);
            this.close();
        },
        getMergeText(data){     //返回每个属性的value和他所在嵌套数组的位置
            let combinedText = [];
            if(!Array.isArray(data)) 
                return [];
            data.forEach((item, index) => {
                let markData = {}
                if(item.children?.length && !item.disabled){
                    this.getMergeText(item.children).forEach(childItem => {
                        markData = {}       //覆盖原对象地址
                        markData.text = this.$at(item, this.field) + this.join + this.$at(childItem, this.field);        //设置为.text是配合props传入的data数据格式
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
        getSubComponents(){        //mpopper打开时，根据value值展开mpopper框内部组件
            this.opened = true;
            if(this.isInput)
                return ;
            this.subComponents = this.lazy? [this.lazyData] : [this.data];
            this.lastValueArray = [];       //当使用完搜索功能时，lastvalue的格式是不对的，每次open时需要重置成正确格式
            if(this.value){
                let inputValues = this.lastValueString.split(this.join)

                inputValues.forEach( (inputvalue, currentref) => {
                    this.lastValueArray.push(inputvalue);
                    let sub = this.subComponents[currentref].find( (item, index) => {
                        if(this.$at(item, this.field) === inputvalue){
                            this.$nextTick(() => {
                                this.$refs[currentref][0].selectMenuitem(index);        //ucascaderitem样式选中
                            })
                            return true;
                        }
                        return false
                    })
                    if(sub.children){
                        this.subComponents.push(sub.children);
                    }
                })
            }else{
                this.$nextTick(() => {
                    this.$refs[0][0].selectMenuitem(-1);    //clearable时，重置ucascaderitem选中样式
                })
            }
            this.selectSubIdnex = this.lastValueArray.length? this.lastValueArray.length - 1 : 0; //open时，光标设置已选中的last ucascaderitem

            this.typeMpopper = this.subComponents;
        },
        triggerLazyLoad(node){
            if(!node)
                node = {root: true, level : 0, leaf: false};
            else
                node.level = this.selectSubIdnex + 1
                
            this.$set(node, 'loading', true)        //向node添加了一个loading属性，之后可用来判断是否加载和是否加载过
            const resolve = dataList => {
                node.loading = false;
                this.subComponents.splice(this.selectSubIdnex + 1);
                if(node.root){
                    this.subComponents[0] = dataList;       //防止点击级联时，第一层的数据还在加载，push会出bug
                    this.lazyData.push(...dataList);
                }
                else{
                    this.subComponents.push(dataList);
                    node.children = dataList;   //等于lazyData[node, node[, ...[, nodeN]]].children = dataList
                }
                this.allMergeText = this.getMergeText(this.lazyData);
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
                this.selectSubIdnex = 0     //搜索框只有一栏,keyboard光标复原
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
                return text.search(filterParam) > -1
            })
        },
        onEnter(){
            if(!this.value)
                this.lastValueString = '';
            let refVM = this.$refs[this.selectSubIdnex][0];
            refVM.keyboardShift(0, true);
            this.close()
        },
        open(){
            this.$refs.popper.open();
        },
        close(){
            this.$refs.popper.close();
            this.isInput = false
        },
        clear(){
            this.lastValueString = '';
            this.getSubComponents()
            this.close()
        },
        resetInput(){
            if(!this.showFinalValue)
                this.value = this.lastValueString;
            else
                this.value = this.lastValueString.split(this.join).slice(-1)[0];
            this.isInput = false;
            this.opened = false;
        },
    },
}
</script>

<style module src="./index.css"></style>