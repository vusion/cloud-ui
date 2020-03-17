import UListView from '../u-list-view.vue';

export const UTransfer = {
    name: 'u-transfer',
    props: {
        source: { type: Array, default: () => [] },
        target: { type: Array, default: () => [] },
        textField: UListView.props.textField,
        valueField: UListView.props.valueField,
        showHead: UListView.props.showHead,
        sourceTitle: { type: String, default: '列表' },
        targetTitle: { type: String, default: '列表' },
        showFoot: UListView.props.showFoot,
        filterable: UListView.props.filterable,
        placeholder: UListView.props.placeholder,
        clearable: UListView.props.clearable,
        matchMethod: UListView.props.matchMethod,
        caseSensitive: UListView.props.caseSensitive,
        pageable: UListView.props.pageable,
        pageSize: UListView.props.pageSize,
    },
    data() {
        return {
            sourceValues: [],
            targetValues: [],
        };
    },
    methods: {
        reverse() {
            const transfer = [];
            for (let i = 0; i < this.target.length; i++) {
                const item = this.target[i];
                if (this.targetValues.includes(item.value)) {
                    this.target.splice(i--, 1);
                    this.source.push(item);
                    transfer.push(item);
                }
            }
            const transferValues = Array.from(this.targetValues);
            this.targetValues = [];
            this.$emit('transfer', {
                source: this.source,
                target: this.target,
                transfer,
                transferValues,
            }, this);
            this.$emit('change', {
                source: this.source,
                target: this.target,
                transfer,
                transferValues,
            }, this);
        },
        forward() {
            const transfer = [];
            for (let i = 0; i < this.source.length; i++) {
                const item = this.source[i];
                if (this.sourceValues.includes(item.value)) {
                    this.source.splice(i--, 1);
                    this.target.push(item);
                    transfer.push(item);
                }
            }
            const transferValues = Array.from(this.sourceValues);
            this.sourceValues = [];
            this.$emit('transfer', {
                source: this.source,
                target: this.target,
                transfer,
                transferValues,
            }, this);
            this.$emit('change', {
                source: this.source,
                target: this.target,
                transfer,
                transferValues,
            }, this);
        },
    },
};

export default UTransfer;
