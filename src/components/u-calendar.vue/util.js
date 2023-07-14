export const isDate = function (date) {
    if (date === null || date === undefined)
        return false;
    if (isNaN(new Date(date).getTime()))
        return false;
    if (Array.isArray(date))
        return false; // deal with `new Date([ new Date() ]) -> new Date()`
    return true;
};

export const getDayCountOfMonth = function (year, month) {
    if (isNaN(+month))
        return 31;

    return new Date(year, +month + 1, 0).getDate();
};

export const getDayCountOfQuarter = function (year, quarter) {
    if (isNaN(+quarter))
        return 31 * 3;

    const startMonth = (quarter - 1) * 3;
    const endMonth = startMonth + 2;

    let dayCount = 0;
    for (let month = startMonth; month <= endMonth; month++) {
        dayCount += getDayCountOfMonth(year, month);
    }

    return dayCount;
};

export const getDayCountOfYear = function (year) {
    const isLeapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
    return isLeapYear ? 366 : 365;
};

export const getFirstDayOfMonth = function (date) {
    const temp = new Date(date.getTime());
    temp.setDate(1);
    return temp.getDay();
};

// see: https://stackoverflow.com/questions/3674539/incrementing-a-date-in-javascript
// {prev, next} Date should work for Daylight Saving Time
// Adding 24 * 60 * 60 * 1000 does not work in the above scenario
export const prevDate = function (date, amount = 1) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - amount);
};

export const nextDate = function (date, amount = 1) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
};

export const getStartDateOfMonth = function (year, month) {
    const result = new Date(year, month, 1);
    const day = result.getDay();

    if (day === 0) {
        return prevDate(result, 7);
    } else {
        return prevDate(result, day);
    }
};

export const getWeekNumber = function (src) {
    if (!isDate(src))
        return null;
    const date = new Date(src.getTime());
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    const week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week 1.
    // Rounding should be fine for Daylight Saving Time. Its shift should never be more than 12 hours.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
};

export const range = function (n) {
    // see https://stackoverflow.com/questions/3746725/create-a-javascript-array-containing-1-n
    return Array.apply(null, { length: n }).map((_, n) => n);
};

export const modifyDate = function (date, y, m, d) {
    return new Date(y, m, d, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
};

export const modifyTime = function (date, h, m, s) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), h, m, s, date.getMilliseconds());
};

export const clearTime = function (date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

export const getDateTimestamp = function (time) {
    if (typeof time === 'number' || typeof time === 'string') {
        return clearTime(new Date(time)).getTime();
    } else if (time instanceof Date) {
        return clearTime(time).getTime();
    } else {
        return NaN;
    }
};

export const getMonthTimestamp = function (time) {
    const clearDate = (date) => new Date(date.getFullYear(), date.getMonth());

    if (typeof time === 'number' || typeof time === 'string') {
        return clearDate(new Date(time)).getTime();
    } else if (time instanceof Date) {
        return clearDate(time).getTime();
    } else {
        return NaN;
    }
};

export const getQuarterTimestamp = function (time) {
    const clearDate = (date) => new Date(date.getFullYear(), Math.floor(date.getMonth() / 3) * 3);

    if (typeof time === 'number' || typeof time === 'string') {
        return clearDate(new Date(time)).getTime();
    } else if (time instanceof Date) {
        return clearDate(time).getTime();
    } else {
        return NaN;
    }
};

export const getYearTimestamp = function (time) {
    const clearDate = (date) => new Date(date.getFullYear(), 0);

    if (typeof time === 'number' || typeof time === 'string') {
        return clearDate(new Date(time)).getTime();
    } else if (time instanceof Date) {
        return clearDate(time).getTime();
    } else {
        return NaN;
    }
};

export const clearMilliseconds = function (date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0);
};

export const changeYearMonthAndClampDate = function (date, year, month) {
    // clamp date to the number of days in `year`, `month`
    // eg: (2010-1-31, 2010, 2) => 2010-2-28
    const monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month));
    return modifyDate(date, year, month, monthDate);
};

export const prevMonth = function (date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    return month === 0 ? changeYearMonthAndClampDate(date, year - 1, 11) : changeYearMonthAndClampDate(date, year, month - 1);
};

export const nextMonth = function (date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    return month === 11 ? changeYearMonthAndClampDate(date, year + 1, 0) : changeYearMonthAndClampDate(date, year, month + 1);
};

export const nextQuarter = function (date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    return month >= 9 ? changeYearMonthAndClampDate(date, year + 1, 0) : changeYearMonthAndClampDate(date, year, Math.floor(month / 3) * 3 + 3);
};

export const prevYear = function (date, amount = 1) {
    const year = date.getFullYear();
    const month = date.getMonth();
    return changeYearMonthAndClampDate(date, year - amount, month);
};

export const nextYear = function (date, amount = 1) {
    const year = date.getFullYear();
    const month = date.getMonth();
    return changeYearMonthAndClampDate(date, year + amount, month);
};

// coerce truthy value to array
export const coerceTruthyValueToArray = function (val) {
    if (Array.isArray(val)) {
        return val;
    } else if (val) {
        return [val];
    } else {
        return [];
    }
};
