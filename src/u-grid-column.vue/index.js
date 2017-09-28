import Flex from "../u-flex.vue"
export default {
	name:"u-grid-column",
	props:{
		column:{
			type:String,
			default:undefined
		},
		span:{
			type:Number,
			default:undefined
		},
		pull:{
			type:Number,
			default:undefined
		},
		push:{
			type:Number,
			default:undefined
		},
		offset:{
			type:Number,
			default:0
		},
	},
	mixins:[Flex],
	data(){
		return {
			parent:this.$parent,
		}
	},
	computed:{
		columnStyleObject() {
			let width = this.span ? this.getUnitValue(this.span) : "auto";
			let left = this.push ? this.getUnitValue(this.push) : "auto";
			let right = this.pull ? this.getUnitValue(this.pull) : "auto";
			let marginLeft = this.getUnitValue(this.offset);
			let paddingLeft = this.parent.gapsStyleObject.marginLeft.slice(1);
			let paddingRight = this.parent.gapsStyleObject.marginRight.slice(1);
			let styleObject = {
				width,
				right,
				left,
				marginLeft,
				paddingLeft,
				paddingRight
			};
			if(this.parent.type==="flex" && this.flexType==="item")return Object.assign(styleObject,this.flexStyleObject);
			else return styleObject;
		},
	},
	methods:{
		getUnitValue(Numerator,Denominator) {
			if(this.parent.unit==="px") return Numerator + "px";
			let denominator = Denominator ? Denominator : this.parent.repeat;
			return Numerator / denominator * 100 + this.parent.unit;
		},
	},

}