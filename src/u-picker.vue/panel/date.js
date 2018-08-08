import format from 'date-fns/format';
import isDate from 'date-fns/is_date';
import isAfter from 'date-fns/is_after';
import parse from 'date-fns/parse';
import setHours from 'date-fns/set_hours';
import setMinutes from 'date-fns/set_minutes';
import setSeconds from 'date-fns/set_seconds';

const timeDefaultSeperator = ':';
/**
 * 是否是合法时间对象
 * @param {Date} date
 */
const _isDate = (date) => date && parse(date).toString() !== 'Invalid Date' && isDate(date);

// 获取合法的Date类型，合法返回Date，不合法返回undefined
const getValidDate = (value) => {
    if (!value)
        return undefined;
    const tempDate = parse(value);
    if (!_isDate(tempDate))
        return undefined;
    return tempDate;
};

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

// -------------------------time
const defaultRangeArr = [[0, 23], [0, 59], [0, 59]];

const formatTime = (time) => time.replace(/[^\d]+/g, timeDefaultSeperator).split('timeDefaultSeperator').map((time) => time.length === 1 ? '0' + time : time).join(timeDefaultSeperator);// 时间转为xx:xx的格式

/**
 * 获取合法时间
 * 为空返回undefined；
 * 值合法返回xx:xx:xx格式的值；
 * 不合法返回undefined;
 * @param {String} time
 */
const getFormatedTime = (time) => {
    if (!time)
        return undefined;
    time = formatTime(time);
    const timeArr = time.split(timeDefaultSeperator);
    if (timeArr.length > 0 && timeArr.length < 4 && timeArr.every((t) => t !== '' && +t >= 0 && +t < 60))
        return time;
    else
        return undefined;
};
// 获取有默认值的合法时间
const getFormatedDefaultTime = (time) => getFormatedTime(this.value) || '00:00:00';
/**
 * 判断dateRange是否合法，并生成格式化的dateRange
 * @param {Array} dateRange
 * @param {String} minDate
 * @param {String} maxDate
 */
const validateTimeRange = (dateRange, minDate, maxDate) => {
    if (minDate || maxDate)
        dateRange.push([minDate, maxDate]);
    const tempDateRange = [];
    // 验证时间区间设置合法性
    const isValid = dateRange.every((arr) => {
        if (arr.length !== 2)
            return false;
        const t0 = getFormatedTime(arr[0]);
        const t1 = getFormatedTime(arr[1]);
        if (arr[0] && !t0 || (arr[1] && !t1))
            return false;
        if (arr[0] && arr[1] && (t0 > t1 || t0.length !== t1.length))
            return false;
        tempDateRange.push([t0, t1]);
        return true;
    });
    if (!isValid)
        throw new Error('Invalid DateRange');
    dateRange = tempDateRange;
};
// 是否在时间范围内
const inTimeRange = (date, dateRange, openInterval = false) => {
    if (date === undefined || date === null)
        return true;
    const fdate = getFormatedTime(date);
    if (!fdate)
        return false;
    if (!dateRange || dateRange.length <= 0)
        return true;

    if (!isArray(dateRange[0])) // 一维数组转为二维
        dateRange = [dateRange];

    return dateRange.some((arr) => {
        let isBetween = false;
        if (arr[0] && arr[1])
            isBetween = fdate > arr[0] && fdate < arr[1];
        if (arr[0])
            isBetween = fdate > arr[0];
        if (arr[1])
            isBetween = fdate < arr[1];
        isBetween = isBetween || fdate === arr[0] || fdate === arr[1];
        return isBetween;
    });
};
// 返回时间数组，''返回0
const getTimeArr = (value) => value.split(timeDefaultSeperator).map((t) => +t);
const setTime = (date, type, value) => {
    if (!_isDate(date))
        date = new Date('2018-08-08');
    switch (type) {
        case 'hour':
            date = setHours(date, value);
            break;
        case 'minute':
            date = setMinutes(date, value);
            break;
        case 'second':
            date = setSeconds(date, value);
            break;
    }
    return date;
};
/**
 * 日期是否在dateRange中
 * @param {*} date，如果date为undefined，则在任何范围内
 * @param {*} dateRange 一维或二维数组
 * @param {*} openInterval 时间区间是否是开区间。 [2018, 2019]：包括2018和2019. (2018, 2019)不包括2018和2019
 * @param {*} type 检查类型
 */
const inDateTimeRange = (date, dateRange, type, openInterval = false) => {
    if (date === undefined || date === null || !dateRange || dateRange.length < 1)
        return true;
    let formatter;
    switch (type) {
        case 'hour':
            formatter = 'YYYYMMDDHH';
            break;
        case 'minute':
            formatter = 'YYYYMMDDHHmm';
            break;
        case 'second':
            formatter = 'YYYYMMDDHHmmss';
            break;
    }
    if (!formatter)
        return true;
    const d = format(date, formatter);
    return dateRange.some((arr) => {
        const d1 = arr[0] ? format(arr[0], formatter) : null;
        const d2 = arr[1] ? format(arr[1], formatter) : null;
        if (d1 && d2)
            return openInterval ? d > d1 && d < d2 : d >= d1 && d <= d2;
        if (d1)
            return openInterval ? d > d1 : d >= d1;
        if (d2)
            return openInterval ? d < d2 : d <= d2;
        return true;
    });
};
export {
    inDateRange,
    dateValidadtor,
    sortIncrease, // 日期从小到大排序
    _isDate,
    setDateTime,
    validateDateRange,
    _parse,
    defaultRangeArr,
    inTimeRange,
    getFormatedTime,
    getFormatedDefaultTime,
    validateTimeRange,
    getTimeArr,
    setTime,
    inDateTimeRange,
    getValidDate,
};
