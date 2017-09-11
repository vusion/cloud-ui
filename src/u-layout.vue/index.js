import Flex from "../u-flex.vue"

export default {
	name:"u-layout",
	props:{
		sidebarWidth:{
			type:String,
			default:"auto"
		},
		siderDirection:{
			type:String,
			default:"row"
		},
		siderBackground:{
			type:String,
			default:undefined
		},
		mode:{
			type:Number,
			default:1
		}
	},
	data(){
		return {

		}
	},
	mixins:[Flex],
	computed:{
		unit() {
			if(/px/.test(this.sidebarWidth))return "px";
			else return "%";
		},
		siderSpan() {
			let num = parseInt(this.sidebarWidth);
			if(this.unit==="%") {
			 	return num / 24;
			} else {
			 	return num;
			}
		},
	}
}