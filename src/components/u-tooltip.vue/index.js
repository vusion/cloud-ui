import { UTooltip as OTooltip } from 'proto-ui.vusion';

export const UTooltip = {
    name: 'u-tooltip',
    extends: OTooltip,
    props: {
        size: { type: String, default: 'normal' },
    },
};

export default UTooltip;
