const isObject = function (value) {
    return value.toString() === '[object Object]';
};

const isArray = function (value) {
    return Array.isArray(value);
};

const deepcopy = function (result, source) {
    for (const key in source) {
        const copy = source[key];
        if (isObject(copy))
            result[key] = deepcopy(result[key] || {}, copy);
        else if (isArray(copy))
            result[key] = deepcopy(result[key] || {}, copy);
        else
            result[key] = copy;
    }
    return result;
};

export default { isObject, isArray, deepcopy };
