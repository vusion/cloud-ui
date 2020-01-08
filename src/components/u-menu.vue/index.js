import MSinglex from '../m-singlex.vue';

export const UMenu = {
    name: 'u-menu',
    groupName: 'u-menu-group',
    childName: 'u-menu-item',
    extends: MSinglex,
    props: {
        router: { type: Boolean, default: true },
    },
    data() {
        return {
            parentVM: undefined,
        };
    },
    methods: {
        onClick(e) {
            if (this.$parent && this.$parent.$options.isPopper)
                this.$parent.close();

            this.$emit('click', e, this);
        },
    },
};

export { UMenuItem } from './item.vue';
export { UMenuGroup } from './group.vue';
export { UMenuDivider } from './divider.vue';

export default UMenu;
