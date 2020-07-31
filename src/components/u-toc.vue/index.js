import MSinglex from '../m-singlex.vue';
import { getPosition } from '../../utils/style';

export const UToc = {
    name: 'u-toc',
    childName: 'u-toc-item',
    extends: MSinglex,
    props: {
        router: { type: Boolean, default: true },
    },
    data() {
        return {
            parentVM: undefined,
            top: 0,
        };
    },
    watch: {
        selectedVM(selectedVM, oldVM) {
            this.setActive(selectedVM);
        }
    },
    methods: {
        setActive(selectedVM){
            if(selectedVM){
                const selectedVMPos = getPosition(selectedVM.$el);
                const rootpos = getPosition(this.$el);
                const top = selectedVMPos.top - rootpos.top + 8;
                this.top = top+'px';
            }
        },
    }
};

export { UTocItem } from './item.vue';

export default UToc;
