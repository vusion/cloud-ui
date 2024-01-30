// rgb色值范围
const RGB_RANGE_REG = /^(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)$/;
// alpha范围
const ALPHA_RANGE_REG = /^(1.?0?|0.?[0-9]*)$/;
// 16进制
const HEX_REG = /^#([0-9a-fA-F]{3,8})$/;

// rgb
const RGB_REG
  = /^[rR][gG][Bb][\(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\s]*,){2}[\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\s]*[\)]{1}$/;
// rgba
const RGBA_REG
  = /^[rR][gG][Bb][Aa][\(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\s]*,){3}[\s]*(1.?0?|0.?[0-9]*)[\s]*[\)]{1}$/;
// hsl
const HSL_REG
  = /^[hH][Ss][Ll][\(]([\s]*(2[0-9][0-9]|360|3[0-5][0-9]|[01]?[0-9][0-9]?)[\s]*,)([\s]*((100|[0-9][0-9]?)%|0)[\s]*,)([\s]*((100|[0-9][0-9]?)%|0)[\s]*)[\)]$/;
// hsla
const HSLA_REG
  = /^[hH][Ss][Ll][Aa][\(]([\s]*(2[0-9][0-9]|360|3[0-5][0-9]|[01]?[0-9][0-9]?)[\s]*,)([\s]*((100|[0-9][0-9]?)%|0)[\s]*,){2}([\s]*(1.?0?|0.?[0-9]*)[\s]*)[\)]$/;

function isString(value) {
    return Object.prototype.toString.call(value) === '[object String]';
}

class Color {
    // r, g, b, a
    constructor(r = 0, g = 0, b = 0, a = 1) {
        if (
            !RGB_RANGE_REG.test(r)
        || !RGB_RANGE_REG.test(g)
        || !RGB_RANGE_REG.test(b)
        || !ALPHA_RANGE_REG.test(a)
        ) {
            throw new SyntaxError('Invalid params');
        }
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    toHEX() {
        let opacityStr = '';
        if (this.a !== 1) {
            opacityStr = Color.opacity2Hex(this.a);
        }
        return `#${this.r.toString(16).padStart(2, '0')}${this.g.toString(16).padStart(2, '0')}${this.b
            .toString(16)
            .padStart(2, '0')}${opacityStr}`;
    }

    // excel中的颜色格式为#AARRGGBB
    toARGBHEX() {
        let opacityStr = '';
        if (this.a !== 1) {
            opacityStr = Color.opacity2Hex(this.a);
        }
        return `#${opacityStr}${this.r.toString(16).padStart(2, '0')}${this.g.toString(16).padStart(2, '0')}${this.b
            .toString(16)
            .padStart(2, '0')}`;
    }

    static fromRGB(value) {
        if (!value) {
            return new Color();
        }
        // 不符合16进制规则
        if (!RGB_REG.test(value)) {
            throw new SyntaxError('Unexpected params of rgb function');
        }
        value = value.trim().slice(4, -1);
        const arr = value.split(',').map((num) => +num);
        return new Color(...arr);
    }

    static fromRGBA(value) {
        if (!value) {
            return new Color();
        }
        // 不符合16进制规则
        if (!RGBA_REG.test(value)) {
            throw new SyntaxError('Unexpected params of rgba function');
        }
        value = value.trim().slice(5, -1);
        const arr = value.split(',').map((num) => +num);
        return new Color(...arr);
    }

    /** @TODO: fromHSL */
    static parse(value) {
    // value不存在的情况下返回默认color实例
        if (!value) {
            return new Color();
        }
        if (!isString(value)) {
            throw new SyntaxError('Invalid: params should be a string');
        }
        // 颜色类型
        const colorType = Color.checkFormat(value);
        if (!colorType) {
            // 不属于16进制/rgb(a)/hsl(a)/内置颜色
            throw new SyntaxError('Invalid params');
        }
        return Color[`from${colorType}`](value);
    }

    static checkFormat(value) {
        if (!isString(value)) {
            throw new SyntaxError('Invalid: params should be a string');
        }
        value = value.trim();
        if (HEX_REG.test(value))
            return 'HEX';
        else if (RGB_REG.test(value))
            return 'RGB';
        else if (RGBA_REG.test(value))
            return 'RGBA';
        else if (HSL_REG.test(value))
            return 'HSL';
        else if (HSLA_REG.test(value))
            return 'HSLA';
    }

    static str2Color(value) {
        let color = null;
        try {
            color = Color.parse(value);
        } catch (e) {
            console.warn(e);
        }
        return color || new Color();
    }

    /**
   * 透明度转十六进制
   * @param {*} opacity
   * @returns
   */
    static opacity2Hex(opacity) {
        if (!ALPHA_RANGE_REG.test(opacity)) {
            throw new SyntaxError('Invalid params');
        }
        const num = Math.round(255 * opacity);
        // 十进制转十六进制，缺位补0
        return num.toString(16).padStart(2, '0');
    }
}

Color.TYPES = ['HEX', 'RGBA', 'RGB', 'HSLA', 'HSL', 'HSVA', 'HSV', 'NAME'];

export default Color;
