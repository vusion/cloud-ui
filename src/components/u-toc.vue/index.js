import MSinglex from '../m-singlex.vue';

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
        };
    }
};

export { UTocItem } from './item.vue';

export default UToc;
