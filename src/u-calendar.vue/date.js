import format from 'date-fns/format';

const inDateRange = (date, dateRange) => {
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

export {
    inDateRange,
};
