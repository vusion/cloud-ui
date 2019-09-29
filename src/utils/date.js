export const format = function format(value, type) {
    if (!value)
        return;
    const fix = (str) => {
        str = '' + (String(str) || '');
        return str.padStart(2, '0');
    };
    const maps = {
        yyyy(date) { return date.getFullYear(); },
        YYYY(date) { return date.getFullYear(); },
        MM(date) { return fix(date.getMonth() + 1); },
        dd(date) { return fix(date.getDate()); },
        DD(date) { return fix(date.getDate()); },
        HH(date) { return fix(date.getHours()); },
        mm(date) { return fix(date.getMinutes()); },
        ss(date) { return fix(date.getSeconds()); },
    }; // 后续禁止使用 yyyy dd，根据通用规范含义表达不对
    const trunk = new RegExp(Object.keys(maps).join('|'), 'g');
    type = type || 'YYYY-MM-DD HH:mm';
    if (typeof value === 'string')
        value = value.replace(/-/g, '/');
    value = new Date(value);
    if (value.toString() === 'Invalid Date')
        return;
    return type.replace(trunk, (capture) => maps[capture] ? maps[capture](value) : '');
};

export const transformDate = function transformDate(date) {
    if (!date)
        return;
    if (typeof date === 'string')
        return new Date(date.replace(/-/g, '/'));
    else if (typeof date === 'number')
        return new Date(date);
    else if (typeof date === 'object')
        return date;
};
