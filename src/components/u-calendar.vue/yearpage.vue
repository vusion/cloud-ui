
<template>
       <div :class="$style.iconBox">
          <a :class="$style.icon" role="prev" :disabled="currentPage <= 1" @click="pageChange(currentPage - 1)"></a>
          <a :class="$style.icon" role="next" :disabled="currentPage >= currentTotalPage" @click="pageChange(currentPage + 1)"></a>
          <slot></slot>
      </div>
</template>
<script>
export default {
     name: 'year-page',
     props: {
          pageSize: { type: Number, value: 12 },
        currentTotalPage: { type: Number },
     }, 
     data() {
       return {
            currentPage: 1,
       };
     },
     methods: {
          pageChange(currentPage) {
              if (currentPage <= this.currentTotalPage && currentPage >= 1) {
                this.currentPage = currentPage;
                const start = (this.currentPage - 1) * this.pageSize + 1;
                this.$emit('ok', { start, limit: this.pageSize });
              }
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
    height: 20px;
    justify-content: space-between;
    width: 100%;
}
</style>