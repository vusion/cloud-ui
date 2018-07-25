import format from 'date-fns/format';
import isDate from 'date-fns/is_date';
import isAfter from 'date-fns/is_after';
import parse from 'date-fns/parse';

const _isDate = (date) => date && date.toString() !== 'Invalid Date' && isDate(date);
const isArray = (o) => Object.prototype.toString.call(o) === '[object Array]';

// 验证dateRange合法性并生成新的DateRange（二维数组）
const validateDateRange = (dateRange, minDate, maxDate) => {
    if (minDate || maxDate)
        dateRange.push([minDate, maxDate]);
    // 验证时间区间设置合法性
    const isValid = dateRange.every((arr) => {
        if (arr.length !== 2 || (!arr[0] && !arr[1]))
            return false;
        arr[0] && (arr[0] = parse(arr[0]));
        arr[1] && (arr[1] = parse(arr[1]));
        if (arr[0] && arr[1] && !(_isDate(arr[0]) && _isDate(arr[1])) || isAfter(arr[0], arr[1]))
            return false;

        return true;
    });
    if (!isValid)
        throw new Error('Invalid DateRange');
};
/**
 *
 * @param {*} date，如果date为undefined，则在任何范围内
 * @param {*} dateRange 一维或二维数组
 * @param {*} openInterval 时间区间是否是开区间。 [2018, 2019]：包括2018和2019. (2018, 2019)不包括2018和2019
 */
const inDateRange = (date, dateRange, openInterval = false) => {
    if (date === undefined || date === null)
        return true;
    if (!_isDate(parse(date)))
        return false;
    if (!dateRange || dateRange.length <= 0)
        return true;
    const _trans = (d) => format(d, 'YYYYMMDD');
    const d = _trans(date);
    if (!isArray(dateRange[0])) // 一维数组转为二维
        dateRange = [dateRange];

    return dateRange.some((arr) => {
        const d1 = arr[0] ? _trans(arr[0]) : null;
        const d2 = arr[1] ? _trans(arr[1]) : null;
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
    if (!_isDate(parse(date)))
        return false;
    return true;
};

const sortIncrease = (dateArr) => dateArr.sort((d1, d2) => +d1 - (+d2));

/**
 * return Date
 * @param {Date} date
 * @param {String} time
 */
const setDateTime = (date, time) => { // 如果超出范围，不可设置
    if (!_isDate(date) || time === 'start')
        return date;
    if (time === 'morning')
        time = '08:00:00';
    else if (time === 'end')
        time = '23:59:59';
    else if (typeof +time === 'number')
        time = (+time > 10 ? time : '0' + time) + ':00:00';
    else
        time = time.replace(/^(\w:)/, '0$1').replace(/:(\w):/g, ':0$1:').replace(/:(\w)$/, ':0$1');
    return parse(format(date, 'YYYY-MM-DD') + 'T' + time);
};

const _parse = (value) => {
    const res = parse(value);
    return _isDate(res) ? res : undefined;
};
export {
    inDateRange,
    dateValidadtor,
    sortIncrease, // 日期从小到大排序
    _isDate,
    setDateTime,
    validateDateRange,
    _parse,
};
