<template>
<span :class="$style.root" v-on="$listeners" vusion-slot-name-edit="text">
    <slot>{{ formatedText }}</slot>
</span>
</template>

<script>
import dayjs from '../../utils/dayjs';

const validFormatType = ['none', 'number', 'percentage', 'date', 'time', 'datetime'];

export default {
    name: 'u-text',
    props: {
        text: String,
        format: Object,
    },
    computed: {
        isValidFormat() {
            if (!this.format) {
                return false;
            }

            const { type, options } = this.format;

            if (!validFormatType.includes(type)) {
                return false;
            }

            if (type === 'none') {
                return false;
            }

            if (type === 'number') {
                const { decimal, thousandths, percentage, unit } = options || {};
                return decimal?.places || thousandths || percentage || unit.value;
            }

            if (type === 'percentage') {
                const { decimal, thousandths } = options || {};
                return decimal?.places || thousandths;
            }

            if (type === 'date') {
                return options?.date;
            }

            if (type === 'time') {
                return options?.time;
            }

            if (type === 'datetime') {
                return options?.datetime;
            }

            return false;
        },
        // 格式化后的文本
        formatedText() {
            if (!this.isValidFormat) {
                return this.text;
            }

            const { type, options } = this.format;

            if (type === 'number') {
                let num = Number(this.text);
                // 文本是否能转number
                if (isNaN(num)) {
                    return this.text;
                }

                const { decimal, thousandths, percentage, unit } = options;
                // 百分比
                if (percentage) {
                    num *= 100;
                }

                // 小数位
                if (decimal?.places && decimal?.places !== '') {
                    num = num.toFixed(decimal?.places);

                    if (decimal?.omit) {
                        num = Number(num);
                    }
                }

                // 千分符
                if (thousandths) {
                    const [left, right] = num.toString().split('.');
                    num = [left.replace(/\B(?=(\d{3})+(?!\d))/g, ','), right].filter(Boolean).join('.');
                }

                // 百分比
                if (percentage) {
                    num += '%';
                }

                if (unit?.value) {
                    if (unit.type === 'prefix') {
                        num = `${unit?.value} ${num}`;
                    } else if (unit.type === 'suffix') {
                        num = `${num} ${unit?.value}`;
                    }
                }

                return num;
            }

            if (type === 'percentage') {
                let num = Number(this.text);
                // 文本是否能转number
                if (isNaN(num)) {
                    return this.text;
                }

                const { decimal, thousandths } = options;
                // 百分比
                num *= 100;

                // 小数位
                if (decimal?.places && decimal?.places !== '') {
                    num = num.toFixed(decimal?.places);

                    if (decimal?.omit) {
                        num = Number(num);
                    }
                }

                // 千分符
                if (thousandths) {
                    const [left, right] = num.toString().split('.');
                    num = [left.replace(/\B(?=(\d{3})+(?!\d))/g, ','), right].filter(Boolean).join('.');
                }

                // 百分比
                num += '%';

                return num;
            }

            if (type === 'date') {
                const date = dayjs(this.text);
                // 是否是
                if (!date.isValid()) {
                    return this.text;
                }

                const { date: formatter } = options;
                return date.format(formatter);
            }

            if (type === 'time') {
                const date = dayjs(this.text, 'HH:mm:ss');
                // 是否是
                if (!date.isValid()) {
                    return this.text;
                }

                const { time: formatter } = options;
                return date.format(formatter);
            }

            if (type === 'datetime') {
                const date = dayjs(this.text);
                // 是否是
                if (!date.isValid()) {
                    return this.text;
                }

                const { datetime: formatter } = options;
                return date.format(formatter);
            }

            return this.text;
        },
    },
};
</script>

<style module>
.root {
    white-space: pre-wrap;
}

.root[size="small"] {
    font-size: var(--text-font-size-small);
}

.root[size="normal"] { /* 父级字号不是默认大小时，该值有用的 */
    font-size: var(--text-font-size);
}

.root[size="large"] {
    font-size: var(--text-font-size-large);
}

.root[size="huge"] {
    font-size: var(--text-font-size-huge);
}

.root[weight="normal"] {
    font-weight: normal;
}

.root[weight="bold"] {
    font-weight: bold;
}

.root[color="default"] {
    /* By default */
}

.root[color="primary"] {
    color: var(--text-color-primary);
}

.root[color="secondary"] {
    color: var(--text-color-secondary);
}

.root[color="success"] {
    color: var(--text-color-success);
}

.root[color="warning"] {
    color: var(--text-color-warning);
}

.root[color="error"] {
    color: var(--text-color-error);
}

.root[color="disabled"] {
    color: var(--text-color-disabled);
}

.root[overflow="ellipsis"], .root[wrap="ellipsis"] {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.root[overflow="break"], .root[wrap="break"] {
    word-wrap: break-word;
    hyphens: auto;
    white-space: normal;
}

.root[overflow="nowrap"], .root[wrap="nowrap"] {
    white-space: nowrap;
}

.root[display="block"] {
    display: block;
}
</style>
