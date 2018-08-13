import { setTime, inDateTimeRange } from '../date';

import getHours from 'date-fns/get_hours';
import getMinutes from 'date-fns/get_minutes';
import getSeconds from 'date-fns/get_seconds';
import isEqual from 'date-fns/is_equal';
import parse from 'date-fns/parse';
import { format } from 'date-fns';

export default {
    name: 'u-panel-time',
    props: {
        selectedDate: { type: Date },
        disabled: { type: Boolean },
        readonly: { type: Boolean },
        showPanel: { type: Boolean, default: false }, // 是否显示u-panel-time
        dateRange: { type: Array },
        blockPanel: { type: Object, default: {} },
    },
    data() {
        return {
            currentValue: this.selectedDate, // Date
            currentDate: {
                hour: '',
                minute: '',
                second: '',
            },
        };
    },
    created() {
        this.reposition();
    },
    watch: {
        selectedDate(value, oldValue) {
            this.currentValue = value;
        },
        currentValue: {
            immediate: true,
            handler(value, oldValue) {
                if (isEqual(value, oldValue))
                    return;
                if (value)
                    this.currentValue = value;
                else {
                    const tempDate = this.displayDate || new Date();
                    this.currentValue = parse(format(tempDate, 'YYYY-MM-DD') + 'T00:00:00'); // 无值时默认选中00:00:00
                }
                this.$emit('timeChanged', this.currentValue);
                this.currentDate.hour = getHours(value);
                this.currentDate.minute = getMinutes(value);
                this.currentDate.second = getSeconds(value);
                this.reposition();
            },
        },
        showPanel(value) {
            if (value)
                this.reposition();
        },
    },
    methods: {
        reposition() {
            setTimeout(this.positionSelected);
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
            this.currentValue = setTime(this.currentValue, type, e.target.innerText);
            this.$refs[type].contentScrollChange(e.target.getBoundingClientRect().top - e.currentTarget.getBoundingClientRect().top);
        },
        isDisabled(type, value) {
            if (!this.dateRange)
                return false;
            const tempDate = setTime(this.currentValue, type, value);
            return !inDateTimeRange(tempDate, this.dateRange, type);
        },
        isSelected(type, value) {
            return value === this.currentDate[type];
        },
        positionSelected() { // 将selected的元素放在顶部
            ['hour', 'minute', 'second'].forEach((name) => {
                const ulRef = this.$refs[name + 'ul'];
                if (!ulRef)
                    return;
                const selectedItem = Array.prototype.find.call(ulRef.childNodes, (itemli) => itemli.attributes.selected);
                selectedItem && this.$refs[name].contentScrollChange(selectedItem.getBoundingClientRect().top - ulRef.getBoundingClientRect().top);
            });
        },
    },
};
