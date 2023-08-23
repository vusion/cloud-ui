import Formatter from './Formatter';

export class NumberFormatter extends Formatter {
    constructor(pattern = '0', options) {
        super();
        this.pattern = pattern;
        this.options = options || {};
    }

    format(value, pattern) {
        pattern = pattern || this.pattern;
        if (typeof value !== 'number')
            return pattern.replace(/[0#.,]+/, value);

        const number = (pattern.match(/[0#.,]+/) || ['0'])[0];
        const parts = number.split('.');
        const fill = (parts[0].match(/0+$/) || ['0'])[0].length;
        const fixed = parts[1] ? parts[1].length : 0;
        const comma = pattern.includes(',');

        // 百分号
        if (this.options.percentSign) {
            value = value * 100;
        }

        value = value.toFixed(fixed).padStart(fixed ? fill + 1 + fixed : fill, '0');

        if (comma)
            value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        if (this.options.percentSign) {
            value += '%';
        }

        return pattern.replace(/[0#.,]+/, value);
    }

    parse(value, pattern) {
        pattern = pattern || this.pattern;

        let number = (String(value).match(/[0-9.,]+/) || ['0'])[0];

        number = +number.replace(/,/g, '');

        if (this.options.percentSign && /%$/.test(value)) {
            number = number / 100;
        }

        return number;
    }
}

export const numberFormatter = new NumberFormatter();

export default NumberFormatter;