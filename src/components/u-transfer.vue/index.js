import UListView from '../u-list-view.vue';

export const UTransfer = {
    name: 'u-transfer',
    props: {
        source: Array,
        target: Array,
        textField: UListView.props.textField,
        valueField: UListView.props.valueField,
        showHead: UListView.props.showHead,
        sourceTitle: { type: String, default: '列表' },
        targetTitle: { type: String, default: '列表' },
        loading: UListView.props.loading,
        error: UListView.props.error,
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
        transfer(direction = 'forward', values) {
            const [from, to] = direction === 'forward' ? [this.source, this.target] : [this.target, this.source];

            const transfer = [];
            for (let i = 0; i < from.length; i++) {
                const item = from[i];
                if (values.includes(item[this.valueField])) {
                    from.splice(i--, 1);
                    to.push(item);
                    transfer.push(item);
                }
            }
            const transferValues = Array.from(values);
            values.splice(0, values.length);
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
        forward(values) {
            this.transfer('forward', values || this.sourceValues);
        },
        reverse(values) {
            this.transfer('reverse', values || this.targetValues);
        },
    },
};

export default UTransfer;
