import MSinglex from '../m-singlex.vue';
import { getPosition, getComputedStyle } from '../../utils/style';
import event from '../../utils/event';
import throttle from 'lodash/throttle';

export const UToc = {
    name: 'u-toc',
    childName: 'u-toc-item',
    extends: MSinglex,
    props: {
        router: { type: Boolean, default: true },
        scrollCheck: { type: Boolean, default: true },
        scrollParent: HTMLElement,
        topBeta: { type: Number, default: 0 }, //有头部导航栏等遮挡的高度
    },
    data() {
        return {
            parentVM: undefined,
            top: 0,
            currentScrollParent: this.scrollParent,
        };
    },
    watch: {
        selectedVM(selectedVM, oldVM) {
            this.setActive(selectedVM);
        },
    },
    mounted(){
        if(this.scrollCheck){
            this.currentScrollParent = this.scrollParent || this.findScrollParent(this.$el);
            this.scrollListener();
        }
    },
    destroyed() {
        event.off(this.currentScrollParent, 'scroll', this.cb);
        clearTimeout(this.stopTimeId);
    },
    methods: {
        setActive(selectedVM){
            if(selectedVM){
                const selectedVMPos = getPosition(selectedVM.$el);
                const bodypos = getPosition(this.$refs.body);
                const top = selectedVMPos.top - bodypos.top + 8 + this.$refs.body.scrollTop;
                this.top = top+'px';
                this.selectedVM = selectedVM;
            }
        },
        scrollListener(){
            this.setSelectedVMThrottle = throttle(this.setSelectedVM, 500);
            this.cb = (e) => {
                this.setSelectedVMThrottle();
            };
            event.on(this.currentScrollParent, 'scroll', this.cb);
        },
        setSelectedVM(){
            // 点击跳转时暂停
            if(this.hashChange)
                return;
            // 查找相关的url块
            const children = this.$children;
            let itemVMs = children.filter((item) => {
                const hash = '#'+location.hash.split('#')[1];
                return item.currentHref && item.currentHref.startsWith(hash);
            });
            if(!itemVMs[0])
                return;
            // item按展示顺序平铺
            let itemVMsArr = [];
            itemVMs.forEach((item)=>{
                itemVMsArr = itemVMsArr.concat(item).concat(item.$children);
            });
            // 查找页面上的锚点
            const hrefs = itemVMsArr.map((item)=>item.currentHref);
            let hrefsElems = [];
            hrefs.forEach((item, index)=>{
                const elems = [...document.querySelectorAll(`[href="${item}"]`)];
                const itemVm = itemVMsArr[index].$el;
                elems.forEach((elem)=>{
                    if(elem!==itemVm && elem.parentElement !== itemVm){
                        if(getComputedStyle(elem, 'display') === 'none'){
                            hrefsElems.push({element: elem.parentElement, hash: item});
                        }else{
                            hrefsElems.push({element: elem, hash: item});
                        }
                    }
                })
            });
            // 进入视窗的锚点
            const currentElem = hrefsElems.find((item)=>this.isIntoView(item.element));
            if(currentElem){
                this.selectedVM = itemVMsArr.find((item)=>item.currentHref === currentElem.hash);
            }
        },
        isIntoView(element){
            const viewHeight = window.innerHeight || document.documentElement.clientHeight;
            const { top, bottom } = element.getBoundingClientRect();
            return top >= this.topBeta && bottom <= viewHeight;
        },
        stopScrollCheck(){
            this.hashChange = true;
            clearTimeout(this.stopTimeId);
            this.stopTimeId = setTimeout(()=>{ this.hashChange=false; }, 0);
        },
        findScrollParent(target) {
            target = target.parentElement;
            if (!target)
                return window;
            const styles = window.getComputedStyle(target);
            if (styles.overflowY === 'auto' || styles.overflowY === 'scroll') {
                return target;
            } else {
                return this.findScrollParent(target);
            }
        },
    }
};

export { UTocItem } from './item.vue';

export default UToc;
