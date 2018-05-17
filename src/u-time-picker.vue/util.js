export const defaultRangeArr = [[0, 23], [0, 59], [0, 59]];
export const splitTag = ':';
export const timeValidator = (time) => {
    if (!time)
        return false;
    const timeArr = time.split(splitTag);
    if (timeArr.length !== 3)
        return false;
    // throw new Error(time + ' format error');

    const isNumber = timeArr.every((t, index) => !isNaN(t) && +t >= defaultRangeArr[index][0] && +t <= defaultRangeArr[index][1]);
    if (!isNumber)
        return false;
    // throw new Error(time + ' is not Number');
    return true;
};
export const formatTime = (time) => {
    if (!time)
        return time;
    const res = time.split(splitTag).map((t) => ('0' + t).slice(-2));
    return res.join(splitTag);
};
