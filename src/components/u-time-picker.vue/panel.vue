<template>
    <div :class="$style.root">
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
        <div :class="$style.foot" :simple="simpleFoot" v-if="showFooterButton || showRightNowButton">
            <u-linear-layout justify="end" v-if="simpleFoot">
                <u-link :class="{[$style.miniButtonStyle]: $i18n && $i18n.locale === 'ja', [$style.textbtn]:true}" @click="onCancel">{{ $t('cancel') }}</u-link>
                <u-link :class="{[$style.miniButtonStyle]: $i18n && $i18n.locale === 'ja'}" @click="onConfirm" :disabled="confirmDisabled" color="primary">{{ $t('submit') }}</u-link>
            </u-linear-layout>
            <u-linear-layout justify="space-between" v-else>
                <u-linear-layout :class="$style.ctimewrap">
                    <u-link @click="setCurrentTime" v-if="showRightNowButton">{{ rightNowTitle || $t('now') }}</u-link>
                </u-linear-layout>
                <u-linear-layout gap="small" v-if="showFooterButton">
                    <u-button :class="{[$style.miniButtonStyle]: $i18n && $i18n.locale === 'ja'}" @click="onCancel" size="small">{{ cancelTitle || $t('cancel') }}</u-button>
                    <u-button :class="{[$style.miniButtonStyle]: $i18n && $i18n.locale === 'ja'}" color="primary" @click="onConfirm" :disabled="confirmDisabled" size="small">{{ okTitle || $t('submit') }}</u-button>
                </u-linear-layout>
            </u-linear-layout>
        </div>
    </div>
</template>

<script>

import i18n from './i18n';
import MField from '../m-field.vue';

export default {
    name: 'u-time-panel',
    i18n,
    mixins: [MField],
    props: {
        minUnit: { type: String, default: 'second' },
        time: { type: String, default: '' },
        minTime: { type: String, default: '00:00:00' },
        maxTime: { type: String, default: '23:59:59' },
        simpleFoot: { type: Boolean, default: false },
        showRightNowButton: { type: Boolean, default: true },
        showFooterButton: { type: Boolean, default: true },
        rightNowTitle: {type: String, default: ""},
        cancelTitle: {type: String, default: ""},
        okTitle: {type: String, default: ""},
    },
    data() {
        const validTime = this.getUnitFormatTime(this.isOutOfRange(this.time) ? this.isOutOfRange(this.time) : this.time || '00:00:00');
        return {
            showTime: validTime,
            hoverItem: {
                hours: {},
                minutes: {},
                seconds: {},
            },
            isScrolling: false, // 控制滚动hover态
        };
    },
    computed: {
        hour() {
            return this.showTime && this.showTime.split(':')[0] / 1;
        },
        minute() {
            return this.showTime && this.showTime.split(':')[1] / 1;
        },
        second() {
            return this.minUnit === 'second' ? (this.showTime && this.showTime.split(':')[2] / 1) : 0;
        },
        sphourmin() {
            return this.minTime.split(':')[0] / 1;
        },
        sphourmax() {
            return this.maxTime.split(':')[0] / 1;
        },
        confirmDisabled() {
            return !!this.isOutOfRange(this.showTime);
        },
    },
    watch: {
        time(newValue) {
            if (!newValue) {
                const currentTime = this.getCurrentTime();
                const isOutOfRange = this.isOutOfRange(currentTime);
                this.showTime = isOutOfRange || currentTime;
            } else {
                if (!this.checkTime(newValue)) {
                    newValue = this.getCurrentTime();
                }
                this.showTime = this.getUnitFormatTime(newValue);
            }
        },
        minUnit(newValue) {
            if (this.time) {
                const showTime = this.getUnitFormatTime(this.time);
                const isOutOfRange = this.isOutOfRange(showTime);
                this.showTime = isOutOfRange || showTime;
            }
        },
    },
    destroyed() {
        clearTimeout(this.adjustSpinnersTimer);
    },
    mounted() {
        this.adjustSpinners();
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
            return formatTime.join(':');
        },
        getUnitFormatTime(value) {
            if (this.checkTime(value, false)) {
                const values = value.split(':');
                return this.getTime(values[0], values[1], values[2] ? values[2] : '00');
            }
        },
        checkTime(time, strict = true) {
            const secondReg = /^(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/;
            const minuteReg = /^(20|21|22|23|[0-1]\d):[0-5]\d$/;
            if (strict) {
                if (this.minUnit === 'second')
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
            this.scrollTimer = setTimeout(() => {
                this.isScrolling = false;
            }, 100);
        },
        adjustSpinners() {
            this.adjustSpinnersTimer = setTimeout(() => {
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
            const showTime = this.showTime ? this.showTime : undefined;
            this.$emit('click', {
                type,
                value,
            });
            this.$emit('select', { sender: this, time: showTime, value: showTime });
        },
        onConfirm() {
            const value = this.showTime ? this.showTime : undefined;
            this.$emit('confirm', { sender: this, time: value, value });
        },
        onCancel() {
            this.$emit('cancel');
        },
        getCurrentTime() {
            const date = new Date();
            return this.getTime(date.getHours(), date.getMinutes(), date.getSeconds());
        },
        setCurrentTime() {
            this.showTime = this.getCurrentTime();
            this.adjustSpinners();
        },
        timeFormat(value) {
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
        getItemHeight() {
            if (this.$refs.itemwrap) {
                return this.$refs.itemwrap.children[0].offsetHeight;
            }
        },
    },
};
</script>

<style module>
.root {}

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

.ctimewrap {
    padding: 3px 0 0 7px;
}
.textbtn {
    margin-right: 4px;
    color: var(--timepicker-textbtn-color);
}

.foot .miniButtonStyle {
    padding: 0 0px;
    font-size: 12px;
}
</style>
