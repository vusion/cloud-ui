export const ULoading = {
    name: 'u-loading',
    props: {
        size: { type: String, validator: (value) => ['small', 'large'].includes(value) },
    },
};

export default ULoading;
