import dayjs from 'dayjs';

export const DefaultFormatType = 'YYYY-MM-DD';

export function getDay(value, defaultValue) {
    if (!value)
        return defaultValue;
    else if (typeof value === 'string')
        return dayjs(value, DefaultFormatType);
    else
        return dayjs(value);
}