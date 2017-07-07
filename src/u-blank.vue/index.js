import Base from 'u-base.vue';

/**
 * @class Blank
 * @extends Base
 * @param {string=block}           display                     定义元素的显示方式 是块状方式
 */
const Blank = Base.extend({
    name: 'u-blank',
    props: {
        display: { type: String, default: 'block' },
    },
});

export default Blank;
