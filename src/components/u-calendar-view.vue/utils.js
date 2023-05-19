import dayjs from 'dayjs';

export const DefaultFormatType = 'YYYY-MM-DD';

export function getDay(value, defaultValue) {
    if (!value)
        return defaultValue;
    else
        return dayjs(value);
}
