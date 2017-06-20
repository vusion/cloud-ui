import Base from 'u-base.vue';

/**
 * @class Tag
 * @extend Base
 * @param {boolean=false}                          options.closeable           => 是否显示删除
 * @param {string}                                 options.color               => 背景颜色
 * @param {gray|primary|success|warning|error}     options.type                => 类型
 */
const Tag = Base.extend({
    name: 'u-tag',
    props: {
        closeable: Boolean,
        color: String,
        type: String,
    },
    data() {
        return {
            visible: true,
        };
    },
    methods: {
        handleClose(event) {
            this.visible = false;
            this.$emit('close', event);
        },
    },
});

export default Tag;
