export const focus = {
    inserted(el, binding) {
        if (!!binding.value || binding.value === undefined)
            el.focus();
    },
};
