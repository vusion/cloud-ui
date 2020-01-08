import { UValidator } from '../../u-validator.vue';
import i18n from '../i18n';

export const UDynamicCard = {
    name: 'u-dynamic-card',
    mixins: [UValidator],
    i18n,
    props: {
        item: Object,
        index: Number,
        disableRemove: Boolean,
    },
    data() {
        return {
            parentVM: undefined,
        };
    },
    computed: {
        miniText() {
            const text = this.parentVM.miniFormatter ? this.parentVM.miniFormatter(this.item) : this.item[this.parentVM.textField];
            return text || '-';
        },
        expanded() {
            return this.parentVM.currentIndex === this.index;
        },
    },
    created() {
        this.parentVM = this.$vnode.context;
    },
    methods: {
        expand() {
            this.parentVM.expand(this.index);
        },
        collapse() {
            this.parentVM.collapse(this.index);
            this.validate().catch(() => undefined);
        },
        remove() {
            this.parentVM.remove(this.index);
        },
    },
};

export default UDynamicCard;
