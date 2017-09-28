import Flex from "../u-flex.vue"
export default {
	name:"u-grid-row",
	mixins:[Flex],
	props:{
		repeat:{
			type:Number,
			default:24
		},
		gaps:{
			type:Number,
			default:0
		},
		unit:{
			type:String,
			default:"%"
		},
		type:{
			type:String,
			default:undefined
		}
	},
	data(){
		return {
			currentIndex:0,
		}
	},
	computed:{
		gapsStyleObject() {
			return {
				marginLeft:"-" + this.gaps/2 + "px",
				marginRight:"-" + this.gaps/2 + "px"
			}
		},
		rowStyleObject() {
			if(this.type === "flex") {
				return Object.assign(this.gapsStyleObject,this.flexStyleObject);
			} else {
				return this.gapsStyleObject
			}
		}
	}
}