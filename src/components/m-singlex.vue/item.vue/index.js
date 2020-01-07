import { MChild } from '../../m-parent.vue';
import ULink from '../../u-link.vue';
import { ellipsisTitle } from '../../../directives';

const trailingSlashRE = /\/?$/;

export const MSinglexItem = {
    name: 'm-singlex-item',
    parentName: 'm-singlex',
    groupName: 'm-singlex-group',
    mixins: [MChild, ULink],
    directives: { ellipsisTitle },
    props: {
        value: null,
        disabled: { type: Boolean, default: false },
        item: Object,
        exact: { type: Boolean, default: false },
    },
    data() {
        return {
            // @inherit: parentVM: undefined,
        };
    },
    computed: {
        isSelected() {
            return this.parentVM && this.parentVM.selectedVM === this;
        },
        active() {
            if (this.to === undefined)
                return;

            if (!this.$router)
                return console.warn('[cloud-ui] Use `<m-router-item>` but cannot find vue router.');

            const current = this.$route;
            const target = this.$router.resolve(this.to).route;
            const currentPath = current.path.replace(trailingSlashRE, '/');
            const targetPath = (target.redirectedFrom ? this.$router.resolve(target.redirectedFrom).location.path : target.path).replace(trailingSlashRE, '/');
            // @TODO: 是否要检查 query 的包含关系

            return this.exact ? currentPath === targetPath : currentPath.startsWith(targetPath);
        },
    },
    methods: {
        onClick(e) {
            if (this.disabled || this.parentVM.readonly || this.parentVM.disabled)
                return e.preventDefault();

            ULink.methods.onClick.call(this, e);
        },
        select(e) {
            if (this.disabled || this.parentVM.readonly || this.parentVM.disabled)
                return;

            this.$emit('click', e, this);

            let cancel = false;
            this.$emit('before-select', {
                value: this.value,
                item: this.item,
                itemVM: this,
                preventDefault: () => cancel = true,
            }, this);
            if (cancel)
                return;

            this.parentVM.select(this);
        },
    },
};

export default MSinglexItem;
