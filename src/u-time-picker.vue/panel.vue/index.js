import { formatTime, defaultRangeArr, splitTag, timeValidator } from '../util';
/**
 * @class TimePicker
 * @extend Component
 * @param {object}                  options.data                     =  绑定属性
 * @param {string='00:00'}          options.data.time               <=> 当前的时间值
 * @param {string='00:00'}          options.data.minTime             => 最小时间
 * @param {string='23:59'}          options.data.maxTime             => 最大时间
 * @param {boolean=false}           options.data.readonly            => 是否只读
 * @param {boolean=false}           options.data.disabled            => 是否禁用
 * @param {boolean=true}            options.data.visible             => 是否显示
 * @param {string=''}               options.data.class               => 补充class
 */
export default {
    name: 'u-time-picker',
    props: {
        value: {
            type: String,
            // validator: timeValidator,
        },
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        minTime: {
            type: String,
            default: '00:00:00',
            validator: timeValidator,
        },
        maxTime: {
            type: String,
            default: '23:59:59',
            validator: timeValidator,
        },
    },
    data() {
        return {
            rangeArr: [], // 根据min和max记录时分秒的range
            currentTime: undefined,
            currentHour: undefined, // 两位String
            currentMinute: undefined,
            currentSecond: undefined,
            select: false,
        };
    },
    created() {
        this.initTime();
    },
    computed: {
        hours() {
            const res = [];
            for (let i = defaultRangeArr[0][0]; i <= defaultRangeArr[0][1]; ++i) {
                res.push({
                    value: i,
                    disabled: i < this.rangeArr[0][0] || i > this.rangeArr[0][1],
                    selected: i === +this.currentHour,
                });
            }
            return res;
        },
        minutes() {
            return this.getTimeArr('minute');
        },
        seconds() {
            return this.getTimeArr('second');
        },
    },
    watch: {
        value: {
            handler() {
                this.initTime();
            },
            immediate: true,
        },
        currentTime(value, oldValue) {
            if (this.select) {
                this.$emit('select', { value, oldValue });
                this.select = false;
            }
            this.$emit('change', { value, oldValue });
            this.$emit('update:value', value);
            this.$emit('input', value);
        },
        minTime() {
            this.initRange();
        },
        maxTime() {
            this.initRange();
        },
        currentHour(value) {
            if (!value)
                return;
            this.currentTime = [value, this.currentMinute, this.currentSecond].join(splitTag);
        },
        currentMinute(value) {
            if (!value)
                return;
            this.currentTime = [this.currentHour, value, this.currentSecond].join(splitTag);
        },
        currentSecond(value) {
            if (!value)
                return;
            this.currentTime = [this.currentHour, this.currentMinute, value].join(splitTag);
        },
    },
    methods: {
        initTime() {
            this.initRange(); // 根据时间Range初始化时分秒的上限
            if (!timeValidator(this.value)) {
                if (!this.value)
                    this.resetTime();
                return;
            }

            this.currentTime = formatTime(this.value);
            const timeArr = this.currentTime.split(splitTag);
            this.currentHour = timeArr[0];
            this.currentMinute = timeArr[1];
            this.currentSecond = timeArr[2];
            setTimeout(this.positionSelected);
        },
        initRange() { // 根据范围设置 时分秒 上下限
            const minArr = this.minTime.split(splitTag);
            const maxArr = this.maxTime.split(splitTag);
            this.rangeArr = [];
            for (let i = 0; i < 3; ++i)
                this.rangeArr.push([+minArr[i], +maxArr[i]]);
        },
        onClick(type, e) {
            if (e.target.attributes.disabled)
                return;
            let cancel = false;
            this.$emit('before-select', {
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;
            this.select = true;
            this.$refs[type].contentScrollChange(e.target.getBoundingClientRect().top - e.currentTarget.getBoundingClientRect().top);
            switch (type) {
                case 'hour':
                    this.currentHour = e.target.innerText;
                    break;
                case 'minute':
                    this.currentMinute = e.target.innerText;
                    break;
                case 'second':
                    this.currentSecond = e.target.innerText;
                    break;
            }
        },
        positionSelected() { // 将selected的元素放在顶部
            ['hour', 'minute', 'second'].forEach((name) => {
                const ulRef = this.$refs[name + 'ul'];
                const selectedItem = Array.prototype.find.call(ulRef.childNodes, (itemli) => itemli.attributes.selected);
                selectedItem && this.$refs[name].contentScrollChange(selectedItem.getBoundingClientRect().top - ulRef.getBoundingClientRect().top);
            });
        },
        onConfirm() {
            this.$emit('closePanel');
        },
        resetTime() {
            this.currentHour = this.currentMinute = this.currentSecond = this.currentTime = undefined;
        },
        getTimeArr(type) {
            const res = [];
            const isDisabled = [() => false];

            const currentIndex = type === 'minute' ? 1 : 2;
            const preValue = type === 'minute' ? +this.currentHour : +this.currentMinute;
            const curValue = type === 'minute' ? +this.currentMinute : +this.currentSecond;

            if (preValue === this.rangeArr[currentIndex - 1][0]) // 时间最小值
                isDisabled.push((m) => m < this.rangeArr[currentIndex][0]);
            if (preValue === this.rangeArr[currentIndex - 1][1]) // 时间最大值
                isDisabled.push((m) => m > this.rangeArr[currentIndex][1]);

            for (let i = defaultRangeArr[currentIndex][0]; i <= defaultRangeArr[currentIndex][1]; ++i) {
                res.push({
                    value: i,
                    disabled: isDisabled.some((fun) => fun(i)),
                    selected: i === curValue,
                });
            }
            if (type === 'minute' && this.currentMinute && res[curValue].disabled) // 选择非disabled的值
                this.currentMinute = ('0' + res.find((item) => !item.disabled).value).slice(-2);
            else if (type === 'second' && this.currentSecond && res[curValue].disabled)
                this.currentSecond = ('0' + res.find((item) => !item.disabled).value).slice(-2);

            return res;
        },
    },
};

