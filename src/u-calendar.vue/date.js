import format from 'date-fns/format';
import isDate from 'date-fns/is_date';
import parse from 'date-fns/parse';

const isArray = (o) => Object.prototype.toString.call(o) === '[object Array]';
/**
 *
 * @param {*} date
 * @param {*} dateRange 一维或二维数组
 * @param {*} openInterval 时间区间是否是开区间。 [2018, 2019]：包括2018和2019. (2018, 2019)不包括2018和2019
 */
const inDateRange = (date, dateRange, openInterval = false) => {
    if (!dateRange || dateRange.length <= 0)
        return true;
    const _trans = (d) => format(d, 'YYYYMMDD');
    const d = _trans(date);
    if (!isArray(dateRange[0])) // 一维数组转为二维
        dateRange = [dateRange];

    return dateRange.some((arr) => {
        const d1 = arr[0] ? _trans(arr[0]) : null,
            d2 = arr[1] ? _trans(arr[1]) : null;
        if (d1 && d2)
            return openInterval ? d > d1 && d < d2 : d >= d1 && d <= d2;
        if (d1)
            return openInterval ? d > d1 : d >= d1;
        if (d2)
            return openInterval ? d < d2 : d <= d2;
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
