export const ULinearLayout = {
    name: 'u-linear-layout',
    props: {
        direction: { default: 'horizontal', validator: (value) => ['horizontal', 'vertical'].includes(value) },
    },
};

export default ULinearLayout;
