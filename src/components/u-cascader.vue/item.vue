<template>
    <f-scroll-view color="light" style="display: inline-block"
        :class="isInput? $style.searchShape : $style.scrollShape">
            <u-menu :class="$style.umenuShape">
                <u-menu-item v-for="(item, index) in data" :key="index" :ref="index"
                    :has-sub="hasSub(item)"
                    :disabled="item.disabled"
                    :class="$style.select_item"
                    :select="index === umenuIndex"
                    @click="clickMenuitem(item, index)">
                    {{ $at(item, field) }}
                    <span :class="$style.spinner" v-if="item.loading"></span>
                </u-menu-item>
            </u-menu>
    </f-scroll-view>
</template>

<script>
import { findScrollParent } from '../../utils/dom';

export default {
    name: "u-cascader-item",
    props: {
        data: { type: Array, default: () => [] },
        field: { type: String, default: "text"},
        trigger: { type: String, default: "click"},
        lazy: { type: Boolean, default: false},
        componentIndex: Number,     //第几个cascaderitem组件
        selectSubIdnex: Number,     //parent选择了第几个cascaderitem组件
        isInput: Boolean,
    },
    data(){
        return {
            umenuIndex: -1,
        }
    },
    mounted(){
        this.addMouseenter(this.data, 0);
    },
    watch: {
        selectSubIdnex(newValue){
            if(this.componentIndex > newValue)
                this.umenuIndex = -1;
        },
        data(newdata, predata){
            if(newdata.length > predata.length)
                this.$nextTick(() => {
                    this.addMouseenter(newdata.slice(predata.length), predata.length);
                })
        }
    },
    methods: {
        clickMenuitem(selectItem, index){
            this.selectMenuitem(index)
            this.$emit("select-umenuitem",selectItem,this.componentIndex);
            if(this.lazy){
                if(selectItem.leaf)
                    this.$emit("select-lastvalue");
            }
            else if(!selectItem.children) {
                this.$emit("select-lastvalue");
            }
        },
        hoverSelect(selectItem, level){
            this.selectMenuitem(level)
            this.$emit("select-umenuitem",selectItem,this.componentIndex);
        },
        addMouseenter(newDatas, length){
            if(this.trigger.toLowerCase() === "hover"){
                newDatas.forEach((_, index) => {
                    let currentIndex = length + index;
                    // v-for中使用ref，vue的内部逻辑会自动将ref生成数组，所以要添一个xxx[0]
                    this.$refs[currentIndex][0].$el.addEventListener("mouseenter",() => {
                        if(!newDatas[index].disabled)
                            this.hoverSelect(newDatas[index], currentIndex);
                    })
                })
            }
        },
        selectMenuitem(level){
            if(level === -1)
                return;

            this.umenuIndex = level;
            this.ensureFocusedInView();
        },
        ensureFocusedInView(){
            let focusedEl = this.$refs[this.umenuIndex][0].$el;
            let parentEl = focusedEl.parentElement;
            parentEl = findScrollParent(focusedEl);

            if(parentEl){
                if (parentEl.scrollTop < focusedEl.offsetTop + focusedEl.offsetHeight - parentEl.clientHeight){
                    parentEl.scrollTop = focusedEl.offsetTop
                                        + focusedEl.offsetHeight
                                        - parentEl.clientHeight;
                }
                if(parentEl.scrollTop > focusedEl.offsetTop)
                    parentEl.scrollTop = focusedEl.offsetTop;
            }
        },
        keyboardShift(count, enter){
            let newUmenuIndex = this.umenuIndex + count;
            while(this.data[newUmenuIndex].disabled){
                newUmenuIndex += count;
            }
            if(newUmenuIndex < 0 || newUmenuIndex >= this.data.length)
                return
            let selectItem = this.data[newUmenuIndex];
            this.selectMenuitem(newUmenuIndex);
            this.$emit("select-umenuitem", selectItem, this.componentIndex);
            if(enter && !selectItem.children)
                this.$emit("select-lastvalue");
        },
        hasSub(item){
            let show = false;
            if(item.children || ('leaf' in item && !item.leaf))
                if(!item.loading)
                    show = true;
            return show;
        }
    }
};
</script>



<style module src="./item.css"> </style>