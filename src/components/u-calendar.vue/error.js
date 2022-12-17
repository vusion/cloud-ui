export const DateRangeError = function (minDate, maxDate) {
    this.name = 'DateRangeError';
    this.message
        = 'Wrong Date Range where `minDate` is '
            + minDate
            + ' and `maxDate` is '
            + maxDate
            + '!';
};
DateRangeError.prototype = Object.create(RangeError.prototype);
DateRangeError.prototype.constructor = DateRangeError;
