export const UNavbarDropdown = {
    name: 'u-navbar-dropdown',
    parentName: 'u-navbar',
    props: {
        title: String,
        trigger: { type: String, default: 'hover' },
        placement: {
            type: String, default: 'bottom-start',
            validator: (value) => /^(top|bottom|left|right)(-start|-end)?$/.test(value),
        },
        disabled: { type: Boolean, default: false },
    },
};

export default UNavbarDropdown;
