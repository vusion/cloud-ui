export default {
	name:"u-flex",
	props:{
		flexType:{
			type:String,
			default:"container",
			validator:value=>["container","item"].includes(value)
		},
		justify:{
			type:String,
			default:"stretch",
			validator:value=>["flex-start","flex-end","center","space-between","space-around","stretch"].includes(value)
		},
		alignContent:{
			type:String,
			default:"stretch",
			validator:value=>["flex-start","flex-end","center","space-between","space-around","stretch"].includes(value)
		},
		alignItems:{
			type:String,
			default:"stretch",
			validator:value=>["flex-start","flex-end","center","baseline","stretch"].includes(value)
		},
		alignSelf:{
			type:String,
			default:"auto",
			validator:value=>["auto","flex-start","flex-end","center","baseline","stretch"].includes(value)
		},
		direction:{
			type:String,
			default:"row",
			validator:value=>["row","row-reverse","column","column-reverse"].includes(value)
		},
		flex:{
			type:String,
			default:"auto"
		},
	},
	computed:{
		flexStyleObject() {
			if(this.flexType === "container") {
				return {
					"display":"flex",
					"justify-content":this.justify,
					"align-content":this.alignContent,
					"align-items":this.alignItems,
					"flex-direction":this.direction,
					"flex":this.flex,
				}
			} else {
				return {
					"flex":this.flex,
					"align-self":this.alignSelf
				}
			}
		}
	}
}