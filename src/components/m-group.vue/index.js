import MEmitter from '../m-emitter.vue';

export const MGroup = {
    name: 'm-group',
    parentName: 'm-parent',
    childName: 'm-child',
    mixins: [MEmitter],
    props: {
        title: String,
        collapsible: { type: Boolean, default: undefined },
        expanded: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            parentVM: undefined,
            groupVMs: [],
            itemVMs: [],
            currentExpanded: this.expanded,
        };
    },
    computed: {
        currentCollapsible() {
            if (this.collapsible !== undefined)
                return this.collapsible;
            else if (this.parentVM)
                return this.parentVM.currentCollapsible !== undefined ? this.parentVM.currentCollapsible : this.parentVM.collapsible;
        },
        expandTrigger() {
            return this.parentVM ? this.parentVM.expandTrigger : 'click';
        },
    },
    watch: {
        expanded(expanded) {
            this.currentExpanded = expanded;
        },
    },
    created() {
        this.$contact(($parent) => $parent.$options.name === this.$options.parentName || $parent.$options.name === this.$options.name, (parentVM) => {
            this.parentVM = parentVM;
            parentVM.groupVMs.push(this);
        });
    },
    destroyed() {
        this.$contact(($parent) => $parent.$options.name === this.$options.parentName || $parent.$options.name === this.$options.name, (parentVM) => {
            parentVM.groupVMs.splice(parentVM.groupVMs.indexOf(this), 1);
            this.parentVM = undefined;
        });
    },
    methods: {
        toggle(expanded) {
            if (this.disabled || this.parentVM.readonly || this.parentVM.disabled)
                return;

            const oldExpanded = this.currentExpanded;

            if (expanded === undefined)
                expanded = !this.currentExpanded;

            if (expanded === oldExpanded)
                return;

            let cancel = false;
            this.$emit('before-toggle', {
                expanded,
                groupVM: this,
                preventDefault: () => cancel = true,
            }, this);
            if (cancel)
                return;

            this.currentExpanded = expanded;
            this.$emit('update:expanded', expanded, this);

            if (this.parentVM.accordion) {
                this.parentVM.groupVMs.forEach((groupVM) => {
                    if (groupVM !== this) {
                        groupVM.currentExpanded = false;
                        groupVM.$emit('update:expanded', false);
                    }
                });
            }

            this.$emit('toggle', {
                expanded,
                groupVM: this,
            }, this);

            this.parentVM.onToggle({
                expanded,
                groupVM: this,
            });
        },
        onToggle($event) {
            this.parentVM.onToggle($event);
        },
    },
};

export { MGroupParent } from './parent.vue';

export default MGroup;
