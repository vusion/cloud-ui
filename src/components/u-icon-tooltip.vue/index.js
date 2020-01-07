import MPopper from '../m-popper.vue';
import pick from 'lodash/pick';

/**
 * 默认显示一个按钮，hover 上去有提示
 */
export const UIconTooltip = {
    name: 'u-icon-tooltip',
    props: {
        type: { type: String, default: 'info' }, // 按钮名称
        size: { type: String, default: 'normal' }, // 提示大小
        content: String,
        trigger: { type: String, default: 'hover' },
        placement: { type: String, default: 'bottom' },
        ...pick(MPopper.props, [
            'opened',
            'reference',
            'hideDelay',
            'boundariesElement',
            'followCursor',
            'offset',
            'disabled',
        ]),
    },
};

export default UIconTooltip;
