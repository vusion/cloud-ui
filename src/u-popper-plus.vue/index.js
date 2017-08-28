import Popper from 'popper.js'
import Vue from 'vue'
export default {
	name:"u-popper-plus",
	props:{
		visibleControl:{
			type:Boolean,
			default:true
		},
		trigger:{
			type:String,
			validator(value) {
                return ['click', 'hover','manual'].includes(value);
            },
			default:'manual' // click hover focus manual
		},
		placement:{
			type:String,
			default:"bottom"
		},
		offset:{
			type:String,
			default:''
		},
		escapeWithReference:{
			type:Boolean,
			default:true
		},
		movingToBody:{
			type:Boolean,
			default:true
		},
		modifiers:{
			default(){
				return {}
			}
		},
		boundariesElement:{
			default:'scrollParent'
		},
		arrowElement:{
			type:String,
			default:"[u-arrow]"
		},
		refkey:{
			type:String,
			default:''
		},
		hoverDelay:{
			type:Number,
			default:200
		}
	},
	data(){
		return {
			show:false,
			popoverVnode:'',
			isScopedSlots:false
		}
	},
	watch:{
		show(val){
			this.updatePopoverVM();
			if(val){
				this.$nextTick(()=>{
					this.updatePopper()
				})
			}
		},
		visibleControl(val){
			this.show = val
		}
	},
	created(){
		if(!this.popoverVnode && this.$slots.popover){
			this.popoverVnode = this.$slots.popover?this.$slots.popover[0]:'';
		}
		this.createPopoverVM();
	},
	mounted(){
		if(this.$scopedSlots.popover){
			this.isScopedSlots = true;
		}
		this.updatePopoverVM();
		this.$nextTick(()=>{
			this.createPopper();
		})	

	},
	render(){
		let referenceVnode = this.$slots.reference ? this.$slots.reference[0] : ""; 
		return referenceVnode
	},
	methods:{
		createPopper(){
			if(this.refkey){
				this.reference = this.$parent.$refs[this.refkey].$el
			}
			else{
				this.reference = this.$refs.reference || this.$slots.reference[0].elm
			}
			this.popover = this.$refs.popover || this.popoverVnode.elm
			if(!this.reference||!this.popover)return;
			console.log('popover,reference',[this.popover,this.reference])
			this.movingToBody && this.appendToBody(this.popover)
			!this.Popper && this.trigger && this.trigger !== 'manual' && this.addTriggerEvent();
			this.options = this.getOptions();
			this.Popper = new Popper(this.reference,this.popover,this.options);
		},
		getOptions(){
			let options = this.options || {};
			options.placement = this.placement;
			options.modifiers = this.modifiers;
			options.modifiers.arrow = {element:this.arrowElement};
			options.modifiers.preventOverflow = {boundariesElement:this.boundariesElement};
			this.offset && (options.modifiers.offset = {offset:this.offset});
			options.escapeWithReference = this.escapeWithReference;
			return options
		},
		updatePopper(){
			this.Popper?this.Popper.update():this.createPopper();
		},
		createPopoverVM(){
			let parentVM = this;
			this.popoverVM = new Vue({
				data:{vnode:parentVM.popoverVnode,show:true,originDisplay:""},
				render(h){
					return this.vnode
				},
				mounted(){
					this.$el.style && (this.originDisplay = this.$el.style.display);
				},
				methods:{
					toggleDisplay(){
						if(this.$el.style!==undefined){
							this.$nextTick(()=>{
								this.$el.style.display = this.show?this.originDisplay:"none";
							})
							// debugger;
						}
						// debugger;
					}
				},
				watch:{
					show(val){
						// debugger;
						this.toggleDisplay()
					}
				}
			}).$mount()
		},
		updatePopoverVM(){
			if(this.isScopedSlots){
				let props = Object.assign({},this._data,this._props)
				this.popoverVM.vnode = this.popoverVnode = this.$scopedSlots.popover(props)[0];
			}else {
				this.popoverVM.show = this.show
			}
			this.popoverVM.$forceUpdate();
		},
		addTriggerEvent(){
			if(this.trigger=="click"){
				this._on(this.reference,'click',this.showPopover);
				this._on(document,'click',this.hidePopoverDomEvent)
			}else if(this.trigger=="hover"){
				this._on(this.reference,'mouseenter',this.showPopoverDelay)
				this._on(this.popover,'mouseenter',this.showPopoverDelay)
				this._on(this.reference,'mouseout',this.hidePopoverDelay)
				this._on(this.popover,'mouseout',this.hidePopoverDelay)
			}else{
				//focus	
			}
		},
		removeTriggerEvent(){
			if(this.trigger=="click"){
				this._off(this.reference,'click',this.togglePopover)
				this._off(document,'click',this.hidePopoverDomEvent)
			}else if(this.trigger=="hover"){
				this._off(this.reference,'mouseenter',this.showPopoverDelay)
				this._off(this.popover,'mouseenter',this.showPopoverDelay)
				this._off(this.reference,'mouseout',this.hidePopoverDelay)
				this._off(this.popover,'mouseout',this.hidePopoverDelay)
			}else{
				
			}
		},
		hidePopoverDomEvent(e){
			let _t = e.target,_r = this.reference,_p = this.popover;
			if(!_r||!_p||_p.contains(_t)||_r.contains(_t))return false;
			this.show = false
		},
		showPopoverDelay(){
			clearTimeout(this.timer)
			setTimeout(()=>{
				this.show = true;
			},this.hoverDelay) 
		},
		hidePopoverDelay(){
			clearTimeout(this.timer)
			setTimeout(()=>{
				this.show = false;
			},this.hoverDelay)
		},
		showPopover(){
			this.show = true
		},
		destoryPopover(){
			if(!this.reference||!this.popover)return;
			this.removeTriggerEvent();
			this.Popper = null;
			this.removeFromBody(this.popover);
		},
		appendToBody(el){
			el && document.body.appendChild(el)
		},
		removeFromBody(el){
			el && document.body.removeChild(el)
		},
		_on(el,event,fn){
			if(document.addEventListener){
				el.addEventListener(event,fn,false)
			}else{
				el.attachEvent('on'+event,fn)
			}
		},
		_off(el,event,fn){
			if(document.addEventListener){
				el.removeEventListener(event,fn,false)
			}else{
				el.detachEvent('on'+event,fn)
			}
		},
	},
	beforeDestroy(){
		this.destoryPopover();
	}
}