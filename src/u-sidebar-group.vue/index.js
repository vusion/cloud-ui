import SidebarGroup from 'proto-ui.vusion/src/u-sidebar-group.vue';

export default {
    name: 'u-sidebar-group',
    mixins: [SidebarGroup],
    computed: {
        selected() {
            return this.itemVMs.some((item) => item.active);
        },
    },
    methods: {
        toggle(expanded, mode) {
            if (this.disabled || this.parentVM.readonly || this.parentVM.disabled)
                return;

            const oldExpanded = this.currentExpanded;

            if (expanded === undefined)
                expanded = !this.currentExpanded;

            if (expanded === oldExpanded && !mode)
                return;

            let cancel = false;
            this.$emit('before-toggle', {
                expanded,
                groupVM: this,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.currentExpanded = expanded;
            this.$emit('update:expanded', expanded);

            if (this.parentVM.accordion || mode) {
                debugger;
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
            });

            this.parentVM.onToggle({
                expanded,
                groupVM: this,
            });
        },
    },
};
