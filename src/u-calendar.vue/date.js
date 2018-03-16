import format from 'date-fns/format';
import isDate from 'date-fns/is_date';
import parse from 'date-fns/parse';

// dateRange是二维数组
const inDateRange = (date, dateRange) => {
    debugger;
    if (!dateRange || dateRange.length <= 0)
        return true;
    const _trans = (d) => format(d, 'YYYYMMDD');
    const d = _trans(date);
    return dateRange.some((arr) => {
        const d1 = arr[0] ? _trans(arr[0]) : null,
            d2 = arr[1] ? _trans(arr[1]) : null;
        if (d1 && d2)
            return d >= d1 && d <= d2;
        if (d1)
            return d >= d1;
        if (d2)
            return d <= d2;
        return true;
    });
};

const dateValidadtor = (date) => {
    if (!isDate(parse(date)))
        throw new TypeError('Invalid Date');
    return true;
};

const sortIncrease = (dateArr) => dateArr.sort((d1, d2) => +d1 - (+d2));

export {
    inDateRange,
    dateValidadtor,
    sortIncrease, // 日期从小到大排序
};
