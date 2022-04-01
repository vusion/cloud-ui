<template>
  <div class="u-for-com">
    <template v-if="options.length > 0">
      <div v-for="(item, index) in options" :key="index" class="u-for-com-frag">
        <u-list-components-item
          v-for="(item2, index2) in item"
          :key="index2"
          :item="item2"
          :colnum="colnum"
          :ifwidth="ifwidth"
        >
          <template v-slot="item2">
            <slot :item="item2.item"></slot>
          </template>
        </u-list-components-item>
      </div>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script>
import UListComponentsItem from './item.vue';
export default {
    name: 'u-list-components',
    components: {
        UListComponentsItem,
    },
    props: {
        dataSource: {
            type: Array,
            default: () => [],
        },
        colnum: {
            type: Number,
            default: 5,
        },
        ifwidth: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            options: [],
        };
    },
    computed: {},
    watch: {
        dataSource: {
            deep: true,
            handler: 'update',
            immediate: true,
        },
    },
    methods: {
        divide(arr) {
            if (!this.colnum)
                return [...arr];
            const num = this.colnum;
            const result = [];
            const arre = [...arr];
            while (arre.length > 0) {
                const temp = arre.splice(0, num);
                result.push(temp);
            }
            return result;
        },
        fromValue(value) {
            try {
                if (value === null || value === undefined)
                    return [];
                if (typeof value === 'string')
                    return JSON.parse(value || '[]');
                if (typeof value === 'object')
                    return value;
            } catch (err) {
                return [];
            }
        },
        async update() {
            if (typeof (this.dataSource) === 'function') {
                try {
                    const res = await this.dataSource({
                        page: 1,
                        size: 1000,
                    });
                    console.log(res);
                    this.options = this.divide(res.content);
                } catch (error) {
                    console.error(error);
                }
            } else {
                this.options = this.divide(this.fromValue(this.dataSource));
            }
        },
    },
};
</script>

<style>
.u-for-com-frag {
  display: flex;
  flex-basis: auto;
  flex-wrap: wrap;
}
</style>