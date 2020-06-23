<script>
import MEmitter from '../m-emitter.vue';

export default {
    name: 'm-dynamic',
    mixins: [MEmitter],
    props: {
        data: Array,
        dynamic: { type: Boolean, default: true },
        getDefaultItem: Function,
        initialAdd: { type: Boolean, default: true },
        minCount: { type: Number, default: 1 },
        maxCount: { type: Number, default: Infinity },
    },
    data() {
        return { currentData: this.data };
    },
    watch: {
        data(data) {
            this.currentData = data;
        },
    },
    created() {
        const needCount = this.minCount - this.currentData.length;
        if (this.initialAdd && needCount > 0) {
            for (let i = 0; i < needCount; i++) this.add();
        }
    },
    methods: {
        add() {
            if (this.currentData.length >= this.maxCount) return;
            const item = this.getDefaultItem ? this.getDefaultItem() : {};
            const index = this.currentData.length;
            if (
                this.$emitPrevent(
                    'before-add',
                    { item, index, data: this.currentData },
                    this,
                )
            )
                return;
            this.currentData.push(item);
            this.$emit('add', { item, index, data: this.currentData }, this);
            this.$emit('splice', { item, index, data: this.currentData }, this);
        },
        remove(index) {
            if (this.currentData.length <= this.minCount) return;
            const item = this.currentData[index];
            if (
                this.$emitPrevent(
                    'before-remove',
                    { item, index, data: this.currentData },
                    this,
                )
            )
                return;
            this.currentData.splice(index, 1);
            this.$emit('remove', { item, index, data: this.currentData }, this);
            this.$emit('splice', { item, index, data: this.currentData }, this);
        },
    },
};
</script>
