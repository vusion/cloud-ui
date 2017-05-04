import Base from 'u-base.vue';
import { RouterItem } from 'u-base.vue/mixins';

const NavbarItem = Base.extend({
    name: 'u-navbar-item',
    mixins: [RouterItem],
});

export default NavbarItem;