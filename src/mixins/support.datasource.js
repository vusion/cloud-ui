export default {
    props: {
        dataSource: [Array, Function],
        dataSchema: {type: String, default: 'entity'},
        textField: { type: String, default: 'text' },
        valueField: { type: String, default: 'value' },
        treeSelectTip: { type: String, default: '请绑定数据源或插入子节点' },
    },
    data() {
        return {
            currentDataSource: undefined,
            loading: false,
        };
    },
    watch: {
        dataSource() {
            this.handleData();
        },
    },
    created() {
        this.handleData();
        if (this.currentDataSource && this.currentDataSource.load)
            this.load();
    },
    methods: {
        handleData() {
            this.currentDataSource = this.normalizeDataSource(this.dataSource);
        },
        normalizeDataSource(dataSource) {
            const final = {
                data: [],
                load: undefined,
            };

            function createLoad(rawLoad) {
                return async function (params = {}) {
                    final.data = await rawLoad(params);
                };
            }

            if (Array.isArray(dataSource))
                final.data = dataSource;
            else if (typeof dataSource === 'function')
                final.load = createLoad(dataSource);

            return final;
        },
        load(params) {
            this.loading = true;
            this.currentDataSource.load(params)
                .finally(() => {
                    this.loading = false;
                });
        },
    },
};