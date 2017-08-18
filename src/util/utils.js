const isObject = function (value) {
    if (value === null || value === undefined)
        return false;
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
            result[key] = deepcopy(result[key] || [], copy);
        else
            result[key] = copy;
    }
    return result;
};
// 判断参数是否属于数组中的值 返回值Boolean
const oneOf = function (target, source) {
    const flag = source.some((item) => {
        if (target === item)
            return true;
        else
            return false;
    });
    return flag;
};

export default { isObject, isArray, deepcopy, oneOf };
