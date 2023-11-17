import Formatter from './Formatter';
import { Decimal } from 'decimal.js';

export class NumberFormatter extends Formatter {
    constructor(pattern = '0', options) {
        super();
        this.pattern = pattern;
        this.options = options || {};
        this.isDecimal = options && options.isDecimal || false;
    }

    format(value, pattern) {
        pattern = pattern || this.pattern;

        // 不是数字类型
        if (typeof value !== 'number') {
            if (!this.isDecimal) {
                value = parseFloat(value);
            }
            // return pattern.replace(/[0#.,]+/, value);
        }

        const number = (pattern.match(/[0#.,]+/) || [
            '0',
        ])[0];
        const parts = number.split('.');
        const fill = (parts[0].match(/0+$/) || ['0'])[0]
            .length;
        const fixed = parts[1] ? parts[1].length : 0;
        const comma = pattern.includes(',');

        // 将下列逻辑统一用Decimal包装处理
        if (this.isDecimal) {
            // 百分号前置将值乘以100
            if (this.options.percentSign) {
                value = new Decimal(String(value)).mul('100').toString();
            }
            value = new Decimal(String(value)).toFixed(fixed).toString().padStart(fixed ? fill + 1 + fixed : fill, '0');

            // 高精度情况下 本身为字符串不需要转 注释掉
            // 是否小数隐藏末尾0
            // if (fixed > 0 && /#$/.test(parts[1])) {
            // value = parseFloat(value) + ''; // 转字符串
            // }

            if (comma)
                value = value.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ',',
                );

            // 百分号
            if (this.options.percentSign) {
                value += '%';
            }

            value = pattern.replace(/[0#.,]+/, value);
        } else {
            // 百分号
            if (this.options.percentSign) {
                value = value * 100;
            }

            value = value
                .toFixed(fixed)
                .padStart(
                    fixed ? fill + 1 + fixed : fill,
                    '0',
                );

            // 是否小数隐藏末尾0
            if (fixed > 0 && /#$/.test(parts[1])) {
                value = parseFloat(value) + ''; // 转字符串
            }

            if (comma)
                value = value.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ',',
                );

            // 百分号
            if (this.options.percentSign) {
                value += '%';
            }

            value = pattern.replace(/[0#.,]+/, value);
        }

        return value;
    }

    parse(value, pattern) {
        pattern = pattern || this.pattern;

        let number = (String(value).match(/-?([0-9.,]+)/) || ['0'])[0];
        if (this.isDecimal) {
            number = number.replace(/,/g, '');
        } else {
            number = +number.replace(/,/g, '');
        }

        if (this.options.percentSign && /%$/.test(value)) {
            if (this.isDecimal) {
                number = new Decimal(String(number)).div(100).toString();
            } else {
                number = number / 100;
            }
        }

        return number;
    }
}

export const numberFormatter = new NumberFormatter();

export default NumberFormatter;
