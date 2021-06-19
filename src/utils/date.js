export const format = function format(value, type) {
    if (!value)
        return;
    const fix = (str) => {
        str = '' + (String(str) || '');
        return str.padStart(2, '0');
    };
    const maps = {
        yyyy(date) {
            if (process.env.NODE_ENV === 'development') {
                console.warn('use YYYY instead of yyyy in YYYY-MM-DD');
            }
            return date.getFullYear();
        },
        YYYY(date) { return date.getFullYear(); },
        MM(date) { return fix(date.getMonth() + 1); },
        dd(date) {
            if (process.env.NODE_ENV === 'development') {
                console.warn('use DD instead of dd in YYYY-MM-DD');
            }
            return fix(date.getDate());
        },
        QQ(date) { return `Q${Math.ceil((date.getMonth() + 1)/3)}`},
        DD(date) { return fix(date.getDate()); },
        HH(date) { return fix(date.getHours()); },
        mm(date) { return fix(date.getMinutes()); },
        ss(date) { return fix(date.getSeconds()); },
    };
    const trunk = new RegExp(Object.keys(maps).join('|'), 'g');
    type = type || 'YYYY-MM-DD HH:mm';
    if (typeof value === 'string' && !value.includes('T'))
        value = transformDate(value);
    value = new Date(value);
    if (value.toString() === 'Invalid Date')
        return;
    return type.replace(trunk, (capture) => maps[capture] ? maps[capture](value) : '');
};

export const transformDate = function transformDate(date) {
    if (!date)
        return;
    if (typeof date === 'string') {
        /**
         * 因为如果时间格式是 json 的字符串 "2021-06-18T07:55:26.914Z"
         * 不能做 - 的替换，会导致转化失效
         */
        if (date.includes('Q')) {
            return new Date(date.replace(/Q1/,'1').replace(/Q2/,'4').replace(/Q3/,'7').replace(/Q4/,'10'));
        }
        return new Date(date);
    }
    else if (typeof date === 'number')
        return new Date(date);
    else if (typeof date === 'object')
        return date;
};


/** 自动去掉最大最小时间的尾数 */
export function ChangeDate(currentDate, picker) {
    const date = new Date(currentDate);
   if (picker === 'month' || picker === 'quarter') {
       date.setDate(1);
       date.setHours(0, 0, 0, 0);
       return date;
   }

   if (picker === 'year') {
       date.setMonth(0);
       date.setDate(1);
       date.setHours(0, 0, 0, 0);
       return date;
   }

   return currentDate;
}