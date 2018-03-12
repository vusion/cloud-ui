// 默认时间及其校验
const defaultRangeArr = [[0, 23], [0, 59], [0, 59]];
const splitTag = ':';
const timeValidator = (time) => {
    const timeArr = time.split(splitTag);
    if (timeArr.length !== 3)
        throw new Error(time + ' format error');

    const isNumber = timeArr.every((t, index) => !isNaN(t) && +t >= defaultRangeArr[index][0] && +t <= defaultRangeArr[index][1]);
    if (!isNumber)
        throw new Error(time + ' is not Number');
    return true;
};
const formatTime = (time) => {
    const res = [];
    time.split(splitTag).forEach((t) => {
        const numberT = +t;
        if (numberT < 10)
            res.push('0' + numberT);
        else
            res.push(numberT);
    });
    return res.join(splitTag);
};
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
        time: {
            type: String,
            default: '00:00:00',
            validator: timeValidator,
        },
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        tag: { type: String, default: '111', validator: (t) => /^[01]{3}$/.test(t) }, // 分别对应时分秒，时分表示为：110
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
            hour: null,
            minute: null,
            second: null,
            defaultRangeArr, // 时分秒默认的上下限
            rangeArr: [], // 根据min和max记录时分秒的range
            timeArr: [],
            currentTime: formatTime(this.time), // 将时间转换为'xx:xx:xx'的格式，方便大小对比
            currentMinTime: formatTime(this.minTime), // 当前时间
            currentMaxTime: formatTime(this.maxTime), // 当前时间
        };
    },
    created() {
        this.currentTime = this.getRangeTime(); // 根据时间Range设置初始时间
        this.initRange(); // 根据时间Range初始化时分秒的上限
        this.initTimeArr(); // 初始化time-picker的每项value，max，min等
    },
    watch: {
        time(value) {
            this.currentTime = formatTime(value);
        },
        currentTime(value, oldValue) {
            this.$emit('change', { value, oldValue });
            this.$emit('update:time', value);
        },
    },
    methods: {
        initRange() { // 根据范围设置 时分秒 上下限
            const minArr = this.minTime.split(splitTag);
            const maxArr = this.maxTime.split(splitTag);
            for (let i = 0; i < 3; ++i)
                this.rangeArr.push([+minArr[i], +maxArr[i]]);
        },
        // 初始化timeArr
        initTimeArr() {
            const tagArr = this.tag.split('');
            this.currentTime.split(splitTag).forEach((v, index) => {
                const timeInfo = {
                    min: this.rangeArr[index][0],
                    max: this.rangeArr[index][1],
                    value: +v,
                    onChange: this.onChange,
                    show: tagArr[index] === '1',
                };
                this.timeArr.push(timeInfo);
            });
            this.setRange(0); // 根据当前value设置时分秒的上下限
        },
        setRange(index) {
            if (index >= 2) {
                this.$forceUpdate();
                return;
            }
            const curTimeObj = this.timeArr[index];
            const curRangeObj = this.rangeArr[index];
            const next = index + 1;
            if (curTimeObj.value === curRangeObj[0])
                this.timeArr[next].min = this.rangeArr[next][0];
            else if (curTimeObj.value === curRangeObj[1])
                this.timeArr[next].max = this.rangeArr[next][1];
            else { // 重置上下限
                this.timeArr[next].max = this.defaultRangeArr[next][1];
                this.timeArr[next].min = this.defaultRangeArr[next][0];
            }
            this.setRange(next);
        },
        /**
         * @method getRangeTime(time) 得到range范围内的时间
         * @public
         * @return {String} time 如果没有超出时间范围，则返回时间；如果超出时间范围，则返回范围边界的时间
         */
        getRangeTime(time = this.currentTime) {
            const tempMax = this.currentMinTime > time ? this.currentMinTime : time;
            return tempMax > this.currentMaxTime ? this.currentMaxTime : tempMax;
        },
        onChange(e, index) {
            const cTimeArr = this.currentTime.split(splitTag);
            cTimeArr[index] = e.formatValue;
            this.currentTime = cTimeArr.join(splitTag);
            this.timeArr[index].value = e.value;
            this.setRange(index);
        },
        formatFun(len) {
            return (val) => {
                if (('' + val).length >= len)
                    return val;

                return (Array(len + 1).join('0') + val).slice(-len);
            };
        },
    },
};

