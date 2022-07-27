<template>
<span :class="$style.root" :width="width" :height="height">
    <u-input :class="$style.input" width="full" height="full" :value="validShowTime" :autofocus="autofocus" :disabled="!!readonly || currentDisabled"
        ref="input"
        :clearable="clearable" :placeholder="placeholder"
        @update:value="onInputChange($event)"
        @click="currentOpened=true"
        @focus="onFocus" @blur="onBlur"
        @blur:value="onBlurInputValue($event)"
        @clear="clearValue"
        :prefix="preIcon?preIcon:undefined"
        :suffix="suffixIcon?suffixIcon:undefined"
        :color="formItemVM && formItemVM.color">
        <template #prefix><i-ico v-if="preIcon" :name="preIcon" :class="[$style.preIcon]" notext></i-ico></template>
        <template #suffix><i-ico v-if="suffixIcon" :name="suffixIcon" :class="[$style.suffixIcon]" notext></i-ico></template>
    </u-input>
    <m-popper :class="$style.popper" ref="popper" :append-to="appendTo"
        :disabled="!!readonly || currentDisabled"
        trigger="manual"
        :opened.sync="currentOpened"
        @click.stop @scroll.stop="onScroll" @mousedown.stop
        @open="onPopperOpen"
        @toggle="$emit('toggle', $event, this)"
        @close="onPopperClose"
        :style="{ width: currentPopperWidth }">
        <div :class="$style.panel" :type="minUnit">
            <div :class="$style.spinner">
                <f-scroll-view @click.stop trigger="hover" ref="hours" 
                    @scroll="handleScroll($event, 'hours')"
                    @mousemove.native="adjustSpinner('hours', hour)">
                    <div :class="$style.wrap">
                        <div :class="$style.itemwrap" ref="itemwrap">
                            <div :class="$style.item"
                                v-for="temphour in getRangeHours()" 
                                :key="temphour.value"
                                :value="temphour.value"
                                :disabled="temphour.disabled"
                                @click="handleClick('hours', temphour)"
                                :selected="temphour.value === hour"
                                @mouseover="onMounseOver('hours', temphour)"
                                @mouseleave="onMounseLeave('hours', temphour)"
                                :ishover="getHoverStatus('hours', temphour)">
                                {{ timeFormat(temphour.value) }}
                            </div>
                        </div>
                    </div>
                </f-scroll-view>
            </div>
            <div :class="$style.spinner">
                <f-scroll-view @click.stop trigger="hover" ref="minutes"
                    @scroll="handleScroll($event, 'minutes')"
                    @mousemove.native="adjustSpinner('minutes', minute)">
                    <div :class="$style.wrap">
                        <div :class="$style.itemwrap">
                            <div :class="$style.item"
                                v-for="tempminute in getRangeMinutes()" 
                                :key="tempminute.value" 
                                :value="tempminute.value"
                                :disabled="tempminute.disabled"
                                @click="handleClick('minutes', tempminute)"
                                :selected="tempminute.value === minute"
                                @mouseover="onMounseOver('minutes', tempminute)"
                                @mouseleave="onMounseLeave('minutes', tempminute)"
                                :ishover="getHoverStatus('minutes', tempminute)">
                                {{ timeFormat(tempminute.value) }}
                            </div>
                        </div>
                    </div>
                </f-scroll-view>
            </div>
            <div :class="$style.spinner" v-if="minUnit === 'second'">
                <f-scroll-view @click.stop trigger="hover" ref="seconds"
                    @scroll="handleScroll($event, 'seconds')"
                    @mousemove.native="adjustSpinner('seconds', second)">
                    <div :class="$style.wrap">
                        <div :class="$style.itemwrap">
                            <div :class="$style.item"
                                v-for="tempsecond in getRangeSeconds()" 
                                :key="tempsecond.value" 
                                :value="tempsecond.value"
                                :disabled="tempsecond.disabled"
                                @click="handleClick('seconds', tempsecond)"
                                :selected="tempsecond.value === second"
                                @mouseover="onMounseOver('seconds', tempsecond)"
                                @mouseleave="onMounseLeave('seconds', tempsecond)"
                                :ishover="getHoverStatus('seconds', tempsecond)">
                                {{ timeFormat(tempsecond.value) }}
                            </div>
                        </div>
                    </div>
                </f-scroll-view>
            </div>
        </div>
        <div :class="$style.foot" :simple="simpleFoot">
            <u-linear-layout justify="end" v-if="simpleFoot">
                <u-link @click="onCancel" :class="$style.textbtn">取消</u-link>
                <u-link @click="onConfirm" :disabled="confirmDisabled" color="primary">确定</u-link>
            </u-linear-layout>
            <u-linear-layout justify="space-between" v-else>
                <u-linear-layout :class="$style.ctimewrap">
                    <u-link @click="setCurrentTime">此刻</u-link>
                </u-linear-layout>
                <u-linear-layout gap="small">
                    <u-button @click="onCancel" size="small">取消</u-button>
                    <u-button color="primary" @click="onConfirm" :disabled="confirmDisabled" size="small">确定</u-button>
                </u-linear-layout>
            </u-linear-layout>
        </div>
    </m-popper>
</span>
</template>

<script>
const HOUR_MIN = 0;
const MINUTE_MIN = 0;
const SECOND_MIN = 0;
const HOUR_MAX = 23;
const MINUTE_MAX = 59;
const SECOND_MAX = 59;

/**
 * @class TimePicker
 * @extend Component
 * @param {object}                  options.data                     =  绑定属性
 * @param {string='00:00'}          options.data.time               <=> 当前的时间值
 * @param {string='00:00'}          options.data.minTime             => 最小时间
 * @param {string='23:59'}          options.data.maxTime             => 最大时间
 * @param {boolean=false}           options.data.autofocus           => 是否自动获得焦点
 * @param {boolean=false}           options.data.readonly            => 是否只读
 * @param {boolean=false}           options.data.disabled            => 是否禁用
 * @param {boolean=true}            options.data.visible             => 是否显示
 * @param {string=''}               options.data.class               => 补充class
 */

const TimeRangeError = function (minTime, maxTime) {
    this.name = 'TimeRangeError';
    this.message
        = 'Wrong Time Range where `minTime` is '
            + minTime
            + ' and `maxTime` is '
            + maxTime
            + '!';
};

TimeRangeError.prototype = Object.create(Error.prototype);
TimeRangeError.prototype.constructor = TimeRangeError;

import i18n from './i18n';
import MField from '../m-field.vue';

export default {
    name: 'u-time-picker',
    i18n,
    mixins: [MField],
    props: {
        minUnit: { type: String, default: 'second' },
        time: { type: String, default: '' },
        autofocus: [String, Boolean],
        disabled: [String, Boolean],
        readonly: [String, Boolean],
        minTime: { type: String, default: '00:00:00' },
        maxTime: { type: String, default: '23:59:59' },
        appendTo: {
            type: String,
            default: 'body',
            validator: (value) => ['body', 'reference'].includes(value),
        },
        simpleFoot: { type: Boolean, default: false },
        preIcon: { 
            type: String, 
            default: 'time'
        },
        suffixIcon: { 
            type: String, 
            default: ''
        },
        clearable: { type: Boolean, default: true },
        width: String,
        height: String,
        popperWidth: { type: String, default: '' },
    },
    data() {
        const validTime = this.getUnitFormatTime(this.isOutOfRange(this.time) ? this.isOutOfRange(this.time) : this.time || '00:00:00');
        return {
            showTime: validTime,
            validShowTime: this.getUnitFormatTime(this.time),
            lastValidShowTime: this.getUnitFormatTime(this.time),
            hoverItem: {
                hours: {},
                minutes: {},
                seconds: {},
            },
            isScrolling: false, // 控制滚动hover态
            placeholder: this.$t('selectTimeText'),
            currentOpened: false,
            currentPopperWidth: '100%',
        };
    },
    destroyed() {
        clearTimeout(this.adjustSpinnersTimer);
    },
    computed: {
        hour() {
            return this.showTime.split(':')[0] / 1;
        },
        minute() {
            return this.showTime.split(':')[1] / 1;
        },
        second() {
            return this.minUnit === 'second' ? this.showTime.split(':')[2] / 1 : 0;
        },
        sphourmin() {
            return this.minTime.split(':')[0] / 1;
        },
        sphourmax() {
            return this.maxTime.split(':')[0] / 1;
        },
        spminutemin() {
            return this.minTime.split(':')[1] / 1;
        },
        spminutemax() {
            return this.maxTime.split(':')[1] / 1;
        },
        spsecondmin() {
            return this.minTime.split(':')[2] / 1;
        },
        spsecondmax() {
            return this.maxTime.split(':')[2] / 1;
        },
        confirmDisabled () {
            return !!this.isOutOfRange(this.showTime);
        },
        currentDisabled() {
            if (this.disabled)
                return true;
            else
                return false;
        },
    },
    watch: {
        time(newValue) {
            if (!newValue) {
                this.initValidShowTime = false; // 控制为空设置showTime值时，不设置validShowTime值
                this.validShowTime = newValue;
                this.lastValidShowTime = newValue;
                const currentTime = this.getCurrentTime();
                const isOutOfRange = this.isOutOfRange(currentTime);
                this.showTime = isOutOfRange? isOutOfRange : currentTime;
            } else {
                if(!this.checkTime(newValue)){
                    newValue = this.getCurrentTime();
                }
                this.showTime = this.getUnitFormatTime(newValue);
                // this.showTime默认设置的是'00:00:00'，如果time初始是'00:00:00'，showTime的watch会没有进入，导致validShowTime没有设置
                if(this.showTime === '00:00:00'){
                    this.validShowTime = this.showTime;
                    this.lastValidShowTime = this.showTime;
                }
            }
        },
        showTime(newValue) {
            // if (!newValue)
            //     throw new TypeError('Invalid Time');
            const showTime = newValue; // 如果超出时间范围，则设置为范围边界的时间
            const isOutOfRange = this.isOutOfRange(newValue);
            if(!isOutOfRange && this.initValidShowTime !== false) {
                this.validShowTime = showTime;
                this.lastValidShowTime = showTime;
            }
            this.initValidShowTime = true;
        },
        minUnit(newValue) {
            if(this.time) {
                const showTime = this.getUnitFormatTime(this.time);
                const isOutOfRange = this.isOutOfRange(showTime);
                this.showTime = isOutOfRange? isOutOfRange : showTime;
            }
        },
        appendTo(appendTo) {
            this.setPopperWidth();
        },
    },
    mounted() {
        this.setPopperWidth();
    },
    methods: {
        /**
         * @method isOutOfRange(time) 是否超出规定的时间范围
         * @public
         * @param {Time} time 待测的时间
         * @return {boolean|Time} time 如果没有超出时间范围，则返回false；如果超出时间范围，则返回范围边界的时间
         */ 
        isOutOfRange(time) {
            const minTime = this.minTime;
            const maxTime = this.maxTime; // minTime && time < minTime && minTime，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的时间
            if (minTime > maxTime)
                return time;

            return (
                (minTime && time < minTime && minTime)
                || (maxTime && time > maxTime && maxTime)
            );
        },
        getTime(hour, minute, second) {
            const fix = (str) => {
                str = '' + (String(str) || '');
                return str.padStart(2, '0');
            };
            const formatTime = [fix(hour), fix(minute)];
            if (this.minUnit === 'second') {
                formatTime.push(fix(second));
            }
            return formatTime.join(':');;
        },
        getUnitFormatTime(value) {
            if(this.checkTime(value, false)) {
                const values = value.split(':');
                return this.getTime(values[0], values[1], values[2] ? values[2] : '00');
            }
        },
        checkTime(time, strict = true){
            const secondReg = /^(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/;
            const minuteReg = /^(20|21|22|23|[0-1]\d):[0-5]\d$/;
            if(strict) {
                if(this.minUnit === 'second')
                    return secondReg.test(time);
                else
                    return minuteReg.test(time);
            } else {
                return secondReg.test(time) || minuteReg.test(time);
            }
        },
        getRangeHours() {
            const hours = [];
            const hourmin = this.sphourmin;
            const hourmax = this.sphourmax;
            for (let i = 0; i < 24; i++) {
                hours.push({
                    value: i,
                    disabled: i < hourmin || i > hourmax,
                });
            }
            return hours;
        },
        getRangeMinutes() {
            const minutes = [];
            for (let i = 0; i < 60; i++) {
                minutes.push({
                    value: i,
                    disabled: this.isTimeDisabled('minutes', i),
                });
            }
            return minutes;
        },
        getRangeSeconds() {
            const seconds = [];
            for (let i = 0; i < 60; i++) {
                seconds.push({
                    value: i,
                    disabled: this.isTimeDisabled('seconds', i),
                });
            }
            return seconds;
        },
        handleScroll(event, type) {
            this.isScrolling = true;
            if (!this.itemHeight) {
                this.itemHeight = this.getItemHeight() || 28;
            }
            const value = Math.min(Math.round(event.scrollTop / this.itemHeight), (type === 'hours' ? 23 : 59));
            this.setShowTime(type, value);
            clearTimeout(this.scrollTimer);
            this.scrollTimer = setTimeout(()=>{
                this.isScrolling = false;
            }, 100);
        },
        adjustSpinners() {
            this.adjustSpinnersTimer = setTimeout(()=>{
                this.adjustSpinner('hours', this.hour);
                this.adjustSpinner('minutes', this.minute);
                this.adjustSpinner('seconds', this.second);
            }, 0);
        },
        adjustSpinner(type, value) {
            const el = this.$refs[type] && this.$refs[type].$refs.wrap;
            if (el) {
                if (!this.itemHeight) {
                    this.itemHeight = this.getItemHeight() || 28;
                }
                el.scrollTop = Math.max(0, value * this.itemHeight);
            }
        },
        handleClick(type, value) {
            if (value.disabled)
                return;
            this.adjustSpinner(type, value.value);
            this.setShowTime(type, value.value);
        },
        onConfirm() {
            if(!this.validShowTime) {
                this.validShowTime = this.showTime;
            }
            this.close();
        },
        onCancel() {
            this.validShowTime = this.restoredValue;
            this.close();
        },
        open() {
            this.$refs.popper && this.$refs.popper.open();
        },
        close() {
            this.$refs.popper && this.$refs.popper.close();
        },
        getCurrentTime() {
            const date = new Date();
            return this.getTime(date.getHours(), date.getMinutes(), date.getSeconds());
        },
        setCurrentTime() {
            this.showTime = this.getCurrentTime();
            this.adjustSpinners();
        },
        timeFormat(value){
            value = '' + (String(value) || '');
            return value.padStart(2, '0');
        },
        setShowTime(type, value) {
            const timeData = {
                hours: this.hour,
                minutes: this.minute,
                seconds: this.second,
            };
            timeData[type] = value;
            this.showTime = this.getTime(timeData.hours, timeData.minutes, timeData.seconds);
        },
        isTimeDisabled(type, value) {
            const timeData = {
                hours: this.hour,
                minutes: this.minute,
                seconds: this.second,
            };
            timeData[type] = value;
            const showTime = this.getTime(timeData.hours, timeData.minutes, timeData.seconds);
            return !!this.isOutOfRange(showTime);
        },
        onMounseOver(type, item) {
            this.hoverItem[type] = item;
        },
        onMounseLeave(type) {
            this.hoverItem[type] = {};
        },
        /**
         * 滚动的时候不要有hover态
         */
        getHoverStatus(type, item) {
            return this.hoverItem[type] && this.hoverItem[type].value === item.value && !this.isScrolling;
        },
        emitValue() {
            const value = this.validShowTime ? this.validShowTime : undefined;
            this.$emit('input', value, this);
            this.$emit('update:time', value, this);
            this.$emit('change', { sender: this, time: value, value: value }, this);
        },
        /**
         * 输入框输入后，输入值的合法性处理
         */
        onInputChange(value) {
            if(this.checkTime(value)) {
                this.showTime = value; // showTime更改，会进入watch，设置validShowTime
                this.adjustSpinners();
            }
        },
        onBlur() {
            // 直接点击清除按钮，popper没有展开，blur的时候需要emit事件
            if(!this.currentOpened){
                this.$emit('blur');
                this.emitValue();
            }
        },
        onBlurInputValue(value) {
            if(value === '') {
                this.validShowTime = '';
                this.emitValue();
            }
            this.$refs.input.updateCurrentValue(this.validShowTime);
        },
        onFocus(e) {
            this.$emit('focus', e, this);
        },
        onPopperClose() {
            this.$emit('blur');
            this.emitValue();
        },
        onPopperOpen() {
            // 有时候加载时机问题，popperWidth会没有获取到，重新获取
            if (this.currentPopperWidth === '0px') {
                this.setPopperWidth();
            }
            this.restoredValue = this.validShowTime; // 用于点取消时复原上一次的值
            this.initValidShowTime = true;
            if(this.validShowTime) {
                this.showTime = this.validShowTime;
            } else {
                this.initValidShowTime = false;
                const currentTime = this.getCurrentTime();
                const isOutOfRange = this.isOutOfRange(currentTime);
                this.showTime = isOutOfRange? isOutOfRange : currentTime;
            }
            this.adjustSpinners();
        },
        getItemHeight() {
            if(this.$refs.itemwrap) {
                return this.$refs.itemwrap.children[0].offsetHeight
            }
        },
        clearValue() {
            this.validShowTime = '';
        },
        setPopperWidth() {
            if (this.appendTo === 'body') {
                this.currentPopperWidth = this.popperWidth ? this.popperWidth : this.$el && (this.$el.offsetWidth + 'px');
            } else {
                this.currentPopperWidth = this.popperWidth || '100%';
            }
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    position: relative;
    width: var(--timepicker-input-width);
}

.input {
    padding: 0 var(--timepicker-input-padding-x);
    border: var(--timepicker-input-border-width) solid var(--timepicker-input-border-color);
    color: var(--timepicker-input-color);
    background: var(--timepicker-input-background);
    border-radius: var(--timepicker-input-border-radius);
    width: var(--timepicker-input-width);
    height: var(--timepicker-input-height);
}
.input [class^="u-input_placeholder__"] {
    color: var(--timepicker-input-placeholder-color);
}

.root[width="mini"] {
    width: var(--timepicker-input-width-mini);
}
.root[width="mini"] .input {
    padding-left: var(--timepicker-input-padding-x-mini);
    padding-right: var(--timepicker-input-padding-x-mini);
}

.root[height="mini"] .input {
    height: var(--timepicker-input-height-mini);
    line-height: calc(var(--timepicker-input-height-mini) - var(--timepicker-input-border-width) * 2);
}

.root[width="small"] {
    width: var(--timepicker-input-width-small);
}

.root[width="small"] .input{
    padding-left: var(--timepicker-input-padding-x-small);
    padding-right: var(--timepicker-input-padding-x-small);
}

.root[height="small"] .input {
    height: var(--timepicker-input-height-small);
    line-height: calc(var(--timepicker-input-height-small) - var(--timepicker-input-border-width) * 2);
}

.root[width="normal"] {
    width: var(--timepicker-input-width);
}

.root[width="normal"] .input {
    padding-left: var(--timepicker-input-padding-x);
    padding-right: var(--timepicker-input-padding-x);
}

.root[height="normal"] .input {
    height: var(--timepicker-input-height);
    line-height: calc(var(--timepicker-input-height) - var(--timepicker-input-border-width) * 2);
}

.root[width="medium"] {
    width: var(--timepicker-input-width-medium);
}

.root[width="medium"] .input {
    padding-left: var(--timepicker-input-padding-x-medium);
    padding-right: var(--timepicker-input-padding-x-medium);
}

.root[height="medium"] .input {
    height: var(--timepicker-input-height-medium);
    line-height: calc(var(--timepicker-input-height-medium) - var(--timepicker-input-border-width) * 2);
}

.root[width="large"] {
    width: var(--timepicker-input-width-large);
}

.root[width="large"] .input {
    padding-left: var(--timepicker-input-padding-x-large);
    padding-right: var(--timepicker-input-padding-x-large);
}

.root[height="large"] .input {
    height: var(--timepicker-input-height-large);
    line-height: calc(var(--timepicker-input-height-large) - var(--timepicker-input-border-width) * 2);
}

.root[width="huge"] {
    width: var(--timepicker-input-width-huge);
}

.root[width="huge"] .input {
    padding-left: var(--timepicker-input-padding-x-huge);
    padding-right: var(--timepicker-input-padding-x-huge);
}

.root[height="huge"] .input {
    height: var(--timepicker-input-height-huge);
    line-height: calc(var(--timepicker-input-height-huge) - var(--timepicker-input-border-width) * 2);
}

.root[width="full"] {
    width: 100%;
    padding-right: var(--timepicker-input-padding-x-full);
}

.root[width="full"] .input {
    padding-left: var(--timepicker-input-padding-x-full);
    padding-right: var(--timepicker-input-padding-x-full);
}

.root[height="full"] .input {
    height: 100%;
}

.root .dot {
    padding: 0 5px;
    user-select: none;
}

.popper {
    z-index: var(--z-index-tooltip);
    box-shadow: var(--datepicker-popper-box-shadow);
    border: 1px solid var(--timepicker-popper-background);
    border-radius: var(--timepicker-popper-border-radius);
    /* width: 100%; */
    /* position: absolute; */
    max-width: var(--timepicker-popper-max-width);
}

.panel {
    position: relative;
    overflow: hidden;
    background: var(--timepicker-panel-background);
    /* height: 300px; */
}
.panel .spinner{
    width: 33.3%;
    display: inline-block;
}
.panel[type="minute"] .spinner {
    width: 50%;
}
.panel::before {
    content: ":";
    top: 112px;
    left: 0;
    right: 0;
    position: absolute;
    height: 28px;
    line-height: 26px;
    background: var(--timepicker-bacground-selected);
    color: var(--timepicker-color-selected);
    box-sizing: border-box;
    padding-left: calc(100% / 3 - 3px);
}
.panel::after {
    content: ":";
    top: 112px;
    left: calc(100% / 3 * 2);
    position: absolute;
    height: 28px;
    line-height: 26px;
    width: 10px;
    color: var(--timepicker-color-selected);
}
.panel[type="minute"]::before {
    padding-left: calc(100% / 2 - 3px);
}
.panel[type="minute"]::after {
    display: none;
}
.wrap {
    height: 252px;
}
.itemwrap {
    height: auto;
}
.itemwrap::before,
.itemwrap::after {
    content: "";
    display: block;
    width: 100%;
    height: 112px;
}
.item {
    padding: 0;
    width: 100%;
    height: 28px;
    line-height: 28px;
    text-align: center;
    color: var(--timepicker-item-color);
}
/* .item:hover {
    background: var(--timepicker-item-background-hover);
    cursor: pointer;
} */
.item[ishover] {
    background: var(--timepicker-item-background-hover);
    cursor: pointer;
}
.item[selected] {
    color: var(--timepicker-color-selected);
}
.item[selected]:hover {
    background: var(--timepicker-item-background-selected);
}
.item[disabled] {
    color: var(--timepicker-item-color-disabled);
}
.item[disabled]:hover {
    background: var(--timepicker-item-background-disabled);
    cursor: default;
}
.item[disabled][selected]{
    color: var(--timepicker-item-color-disabled-selected);
}
.foot {
    height: 48px;
    background: var(--timepicker-foot-background);
    border-top: 1px solid var(--timepicker-foot-border-color);
    padding: 10px 8px;
    box-sizing: border-box;
}
.foot[simple] {
    border-top: none;
    height: 36px;
    padding: 4px 16px;
}
.footbtn {
    width: 68px;
    height: 28px;
    padding: 0;
    line-height: 26px;
}
.ctimewrap {
    padding: 3px 0 0 7px;
}
.textbtn {
    margin-right: 4px;
    color: var(--timepicker-textbtn-color);
}

.preIcon {
    color: var(--timepicker-input-pre-icon-color);
}

.suffixIcon {
    color: var(--timepicker-input-after-icon-color);
}
</style>
