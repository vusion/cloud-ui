import MEmitter from '../../m-emitter.vue';

export const MNode = {
    name: 'm-node',
    rootName: 'm-root',
    mixins: [MEmitter],
    props: {
        text: String,
    },
    data() {
        return {
            nodeVMs: [],
            rootVM: undefined,
            parentVM: undefined,
        };
    },
    created() {
        !this.parentVM && this.$contact(this.$options.name, (parentVM) => {
            this.parentVM = parentVM;
            this.rootVM = parentVM.rootVM;
            parentVM.nodeVMs.push(this);
        });
        // 顺序不能换
        !this.parentVM && this.$contact(this.$options.rootName, (rootVM) => {
            this.rootVM = rootVM;
            rootVM.nodeVMs.push(this);
        });
    },
    destroyed() {
        this.$contact(this.$options.rootName, (rootVM) => {
            const index = rootVM.nodeVMs.indexOf(this);
            ~index && rootVM.nodeVMs.splice(index, 1);
            this.rootVM = undefined;
        });
        this.$contact(this.$options.name, (parentVM) => {
            const index = parentVM.nodeVMs.indexOf(this);
            ~index && parentVM.nodeVMs.splice(index, 1);
            this.rootVM = undefined;
            this.parentVM = undefined;
        });
    },
};

export default MNode;
