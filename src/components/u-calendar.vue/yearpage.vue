
<template>
      <div>
       <div v-if="currentMode === 'year'"  :class="$style.iconBox">
          <a :class="$style.icon" role="prev" :disabled="!this.getPrev()" @click="handlePrev()"></a>
           <span @click="handleRange()">{{ getCurrentRange() }}</span>
          <a :class="$style.icon" role="next" :disabled="!this.getNext()" @click="handleNext()"></a>
      </div>
      <div v-if="currentMode === 'range'"  :class="$style.iconBox">
          <a  :class="$style.icon" role="prev" :disabled="!this.getPrev()" @click="handleRangePrev()"></a>
           <span @click="handleRange()">{{ getCurrentRanges() }}</span>
          <a  :class="$style.icon" role="next" :disabled="!this.getNext()" @click="handleRangeNext()"></a>
      </div>
          <ul v-if="currentMode === 'year'":class="$style.yearBox">
              <li :class="$style.yearItem" v-for="(year, index) in getCurrentList()" :role="year.value === showYear" :disabled="year.disabled" @click.stop="select(year, index)">{{ year.value }}</li>
          </ul>
           <ul v-if="currentMode === 'range'":class="$style.yearBox">
              <li :class="$style.yearItem" v-for="(range, index) in getRangeList()" :role="range.value === getCurrentRange()" :disabled="range.disabled" @click.stop="handerRangeSelect(range, index)">{{ range.value }}</li>
          </ul>
      </div>
</template>
<script>
import { format, transformDate } from '../../utils/date';

export default {
     name: 'year-page',
     props: {
        minDate: [String, Date, Number],
        maxDate: [String, Date, Number],
        pageSize: { type: Number, value: 12 },
        currentTotalPage: { type: Number },
        currentYearList: { type: Array },
        showYear: { type: Number },
        yearDiff: { type: [String, Number] },
        yearAdd: { type: [String, Number] },
        date: {
            type: [String, Number, Date],
            default() {
                return new Date();
            },
        },
     }, 
     data() {
        const yearmin = this.date.getFullYear() - this.yearDiff;
        const yearmax = this.date.getFullYear() + parseInt(this.yearAdd);
        const currentYear = this.date.getFullYear();
        const gap = 10;

       return {
            currentPage: 1,
            currentYear, // 当前年份，推算默认面板的区间范围
            yearmin, // 年份的下限制
            yearmax, // 年份的上限值
            currentMode: 'year', // range 表示 切换到范围的选择 
            gap: 10, // 一个面板的显示年份
            start: currentYear - currentYear % gap - 1, // 默认面板的 start
       };
     },
     methods: {
          transformDate,
          getPrev() {
             return this.start >= this.yearmin;
          },
          getNext() {
            return (this.start + this.pageSize) <= this.yearmax;
          },
          getRangePrev() {
             return this.start >= this.yearmin;
          },
          getRangeNext() {
            return (this.start + this.pageSize) <= this.yearmax;
          },
          handleRange() {
             // 切换到范围选择
             this.currentMode = 'range';
          },
          /* 切换到范围选择 */
          getRangeList() {
                const date = this.transformDate(this.date);
                let minDate = null;
                let maxDate = null;
                if (this.minDate)
                    minDate = this.transformDate(this.minDate).getFullYear();
                if (this.maxDate)
                    maxDate = this.transformDate(this.maxDate).getFullYear();
                const rangecol = [];
                // 基于当前 start 的范围值 
                for (let i = 0; i < this.pageSize; i++) {
                    const startyear = this.start + 1 + i * 10;
                    const endyear = this.start + (i+1) * 10;
                    const obj = { value: `${startyear}-${endyear}`, startyear, endyear };
                    if (minDate && startyear < minDate)
                        obj.disabled = true;
                    else if (maxDate && endyear > maxDate)
                        obj.disabled = true;
                    else
                        obj.disabled = false;

                    // 范围超过了最大最小值
                    if (endyear < this.yearmin || startyear > this.yearmax) {
                        obj.disabled = true;
                    }
                    rangecol.push(obj);
                }
                return rangecol;
          },
          getCurrentList() {
                const date = this.transformDate(this.date);
                let minDate = null;
                let maxDate = null;
                if (this.minDate)
                    minDate = this.transformDate(this.minDate).getFullYear();
                if (this.maxDate)
                    maxDate = this.transformDate(this.maxDate).getFullYear();
                const yearcol = [];
                // 基于当前年份推算当前的面板值
                for (let i = this.start; i < this.pageSize + this.start; i++) {
                    const obj = { value: i };
                   
                    if (minDate && i < minDate)
                        obj.disabled = true;
                    else if (maxDate && i > maxDate)
                        obj.disabled = true;
                    else
                        obj.disabled = false;

                    if (i < this.yearmin) {
                        obj.disabled = true;
                    }

                    if (i > this.yearmax) {
                       obj.disabled = true;
                    }
                    yearcol.push(obj);
                }
                return yearcol;
          },
          getCurrentRange() {
              return `${this.start + 1}-${this.start + 10}`;
          },
          getCurrentRanges() {
             return `${this.start + 1}-${this.start + 120}`;
          },
          handleRangePrev() {
              if (!this.getPrev()) {
                 return;
              }
              this.start = this.start - 120; // 移动 12 个范围
          },
          handleRangeNext() {
              if (!this.getNext()) {
                 return;
              }
              // 年份面板的切换
              this.start = this.start + 120; // 移动 12 个范围
          },
          handlePrev() {
              if (!this.getPrev()) {
                 return;
              }
              this.start = this.start - 10; // 移动 10 年
          },
          handleNext() {
              if (!this.getNext()) {
                 return;
              }
              // 年份面板的切换
              this.start = this.start + 10; // 移动 10 年
          },
          handerRangeSelect(range) {
              if (range.disabled) {
                 return;
              }
              // 范围切换
              this.start = range.startyear - 1;
              this.currentMode = 'year';
          },
          select(year, index) {
            if (year.disabled) {
                return;
            }
              this.$emit('select', { value: year.value, index })
          }
     }

}
</script>
<style module>

.icon[role="prev"]::before {
    icon-font: url('../i-icon.vue/assets/angle-left.svg');
}

.icon[role="next"]::before {
    icon-font: url('../i-icon.vue/assets/angle-right.svg');
}
.iconBox {
    display: flex;
    height: 32px;
    justify-content: space-between;
    width: 100%;
    line-height: 32px;
    cursor: pointer;
}

.iconBox[disabled], .iconBox[disabled]:hover {
    cursor: var(--cursor-not-allowed);
    background-color: var(--field-background);
    color: var(--color-light);
}

.yearBox {
    list-style: none;
}

.yearItem {
    width: 33.3%;
    display: inline-flex;
    justify-content: center;
    padding: 10px 0;
    cursor: pointer;
}

.yearItem[role] {
    background-color: var(--brand-primary);
    color: var(--field-background);
}
.yearItem[role]:hover {
    background-color: var(--brand-primary);
}

.yearItem[disabled], .yearItem[disabled]:hover {
    cursor: var(--cursor-not-allowed);
    background-color: var(--field-background);
    color: var(--color-light);
}

</style>