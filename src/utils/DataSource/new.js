import Vue from 'vue';
import get from 'lodash/get';

const isOperator = (value) => {
    const operators = [
        '=',
        '==',
        'eq',
        '!=',
        'neq',
        '<',
        'lt',
        '<=',
        'lte',
        '>',
        'gt',
        '>=',
        'gte',
        'includes',
        'startsWith',
        'endsWith',
    ];
    return typeof value === 'function' || operators.includes(value);
};

export const solveCondition = (condition, obj) => {
    if (Array.isArray(condition))
        return condition.some((cond) => solveCondition(cond, obj));
    else if (typeof condition === 'object') {
        return Object.keys(condition).every((key) => {
            let expression = condition[key];
            if (expression === undefined)
                return true;
            if (typeof expression !== 'object')
                expression = ['=', expression];
            if (Array.isArray(expression)) {
                if (!isOperator(expression[0])) {
                    // 多选项过滤，暂时简单处理
                    const sourceValue = getType(obj) === 'String' ? obj : get(obj, key);
                    const targetValue = expression;
                    return targetValue.includes(sourceValue);
                }
                expression = {
                    operator: expression[0],
                    value: expression[1],
                };
            }

            let sourceValue = getType(obj) === 'String' ? obj : get(obj, key);
            let targetValue = expression.value;
            if (expression.caseInsensitive) {
                sourceValue
          = typeof sourceValue === 'string' ? sourceValue.toLowerCase() : sourceValue;
                targetValue
          = typeof targetValue === 'string' ? targetValue.toLowerCase() : targetValue;
            }

            if (typeof expression.operator === 'function')
                return expression.operator(sourceValue, targetValue, expression);
            else if (
                expression.operator === '='
        || expression.operator === '=='
        || expression.operator === 'eq'
            )
                return sourceValue === targetValue;
            else if (expression.operator === '!=' || expression.operator === 'neq')
                return sourceValue !== targetValue;
            else if (expression.operator === '<' || expression.operator === 'lt')
                return sourceValue < targetValue;
            else if (expression.operator === '<=' || expression.operator === 'lte')
                return sourceValue <= targetValue;
            else if (expression.operator === '>' || expression.operator === 'gt')
                return sourceValue > targetValue;
            else if (expression.operator === '>=' || expression.operator === 'gte')
                return sourceValue >= targetValue;
            else if (expression.operator === 'includes')
                return String(sourceValue).includes(targetValue);
            else if (expression.operator === 'startsWith')
                return String(sourceValue).startsWith(targetValue);
            else if (expression.operator === 'endsWith')
                return String(sourceValue).endsWith(targetValue);
            else
                throw new TypeError('Unknown operator in conditions!');
        });
    } else
        throw new TypeError('Condition must be a Object or Array!');
};

function getType(o) {
    return Object.prototype.toString.call(o).slice(8, -1);
}

/**
 * @example 作为简单的 query
 * const dataSource = new DataSource();
 * dataSource.query({
 *     paging,
 *     sorting,
 *     filtering,
 * }).then();
 *
 * @example 作为状态储存
 * const dataSource = new DataSource();
 * dataSource.filter();
 *
 */

const VueDataSource = Vue.extend({
    data() {
        return {
            data: [],
            cache: true,
            viewMode: 'page',
            paging: undefined, // @TODO
            sorting: undefined, // @readonly
            filtering: undefined, // @readonly
            // grouping: undefined,
            remote: false,
            remotePaging: false,
            remoteSorting: false,
            remoteFiltering: false,
            // remoteGrouping: false,
            // ------
            arrangedData: [], // 整理过的数据，用于缓存过滤和排序行为。比如多次获取分页的话，没有必要重新整理
            arranged: false, // 无效
            prependedData: [],
            dirty: false, // 无效
            originTotal: Infinity, // @readonly - originTotal 作为很重要的判断有没有加载完所有数据的依据
            initialLoaded: false,

            cleared: false, // 标志是否触发了清除本地数据 通常组件reload会触发

            queryChanged: false,

            treeDisplay: false,
        };
    },
    computed: {
        offset() {
            return this.paging ? (this.paging.number - 1) * this.paging.size : 0;
        },
        limit() {
            return this.paging ? this.paging.size : Infinity;
        },
        /**
         * 当前的总数，过滤后的分页数目
         */
        total() {
            return this.originTotal === Infinity ? this.data.length : this.originTotal;
        },
        totalPage() {
            if (!this.paging)
                return 1;
            const totalPage = Math.ceil(this.total / this.paging.size);
            if (totalPage === Infinity || totalPage === 0)
                return 1;
            else
                return totalPage;
        },
        viewData() {
            if (this.paging) {
                if (this.viewMode === 'more')
                    return this.arrangedData.slice(0, this.offset + this.limit);
                else
                    return this.arrangedData.slice(this.offset, this.offset + this.limit);
            } else
                return this.arrangedData;
        },
    },
    watch: {
        data() {
            if (!this.rawTreeDisplayOnlyForNotice && (!this.remote || !this._load)) {
                this.arrange();
            }
        },
    },
    // paging, sorting, filtering 暂不用 watch
    created() {
        this.remote = !!this._load;
        // 传 data 为本地数据模式，此时已知所有数据
        if (!this.remote) {
            this.initialLoaded = true;
            this.originTotal = this.data.length;
            this.arrange(this.data.slice(this.offset, this.offset + this.limit));
        }
    },
    methods: {
        isSimpleArray(arr) {
            if (!Array.isArray(arr)) {
              return false; // 如果不是数组类型，则不满足条件，直接返回 false
            }
            return arr.every(function(item) {
              return typeof item !== 'object'; // 使用 typeof 判断是否为简单数据类型
            });
          },
        arrange(data = this.data) {
           
            // 树形展示处理一下
            if (this.treeDisplay) {
                data = this.listToTree(data, {
                    valueField: this.treeDisplay.valueField,
                    parentField: this.treeDisplay.parentField,
                    childrenField: this.treeDisplay.childrenField,
                });

                this.originTotal = data.length;
            }

            let arrangedData = Array.from(data);
            if(this.isSimpleArray(arrangedData) && this.tag === "u-table-view") {
                arrangedData = arrangedData.map(item => ({'simple': item}))
            }
            const filtering = this.filtering;
            if (!this.remoteFiltering && filtering && Object.keys(filtering).length) {
                arrangedData = arrangedData.filter((item) => solveCondition(filtering, item));
                // // 前端筛选， 且无后端分页 时重置originTotal
                !this.remotePaging && (this.originTotal = arrangedData.length);
            }

            const sorting = this.sorting;
            if (!this.remoteSorting && sorting && sorting.field) {
                const field = sorting.field;
                const orderSign = sorting.order === 'asc' ? 1 : -1;
                if (sorting.compare) {
                    arrangedData.sort((item1, item2) =>
                        sorting.compare(this.$at(item1, field), this.$at(item2, field), orderSign),
                    );
                } else {
                    arrangedData.sort((item1, item2) =>
                        this.defaultCompare(this.$at(item1, field), this.$at(item2, field), orderSign),
                    );
                }
            }

            // 重置清除标志
            if (this.cleared) {
                this.cleared = false;
            }

            if (this.queryChanged) {
                this.queryChanged = false;
            }

            this.arrangedData = arrangedData;
            return arrangedData;
        },
        _process(data) {
            return data;
        },
        clearLocalData() {
            this.data = [];
            this.arrangedData = [];
            this.originTotal = Infinity; // originTotal 必须清空，否则空列表不会更新
            this.arranged = false;
            this.initialLoaded = false;

            this.cleared = true;
        },
        mustRemote() {
            return (
                !this.hasAllRemoteData() // 还有后端数据
                || (this.queryChanged && (this.remoteFiltering || this.remoteSorting)) // query有变化
            );
        },
        /**
         * 根据 viewData，是否还有数据
         * @param {Number} offset - 位置
         */
        hasMore(offset) {
            if (offset === undefined || offset === Infinity)
                offset = this.offset + this.limit;

            return offset < this.prependedData.length + this.originTotal;
        },
        /**
         * 是否还有后端数据
         * @param {Number} offset - 位置
         */
        hasAllRemoteData() {
            // 非后端数据
            if (!this.remote)
                return true;

            if (this.data.length >= this.originTotal) {
                for (let i = 0; i < this.data.length; i++) {
                    const item = this.data[i];
                    if (!item) {
                        return false;
                    }
                }
                return true;
            }

            return false;
        },
        hasChanges() {
            return false;
        },
        defaultCompare(a, b, sign) {
            if (a === b)
                return 0;
            else
                return a > b ? sign : -sign;
        },
        _getExtraParams() {
            return undefined;
        },
        slice(offset, newOffset) {
            return this.arrangedData.slice(offset, newOffset);
        },
        // _load(params)
        load(offset, limit, newPageNumber) {
            if (offset === undefined)
                offset = this.offset;
            if (limit === undefined)
                limit = this.limit;

            // reload 或 query变化 重置分页
            if (this.cleared || this.queryChanged) {
                if (this.paging) {
                    this.paging.number = 1;
                }
                offset = 0;
            }

            // 首次加载完
            if (this.initialLoaded) {
                // 后端数据已经全部获取，调用前端缓存数据
                if (!this.remote || !this.mustRemote()) {
                    return Promise.resolve(
                        this.arrange(this.data),
                    );
                }
            }

            // 调用后端数据
            if (!this.initialLoaded || this.queryChanged) {
                this.clearLocalData();
            }
            const paging = Object.assign(
                {
                    offset: offset - this.prependedData.length,
                    limit: this.limit,
                },
                this.paging,
            );
            if (newPageNumber !== undefined) {
                paging.number = newPageNumber;
            }

            const params = Object.assign(
                {
                    paging: this.remotePaging ? paging : undefined,
                    sorting: this.sorting,
                    filtering: this.filtering,
                },
                this._getExtraParams(),
            );

            // 支持 JDL
            if (this.remotePaging && this.paging) {
                params.page = params.paging.number;
                params.start = params.paging.offset;
                params.size = params.paging.size;
            }
            if (this.sorting && this.sorting.field) {
                params.sort = params.sorting.field;
                params.order = params.sorting.order;
            }

            const extraParams = this._getExtraParams();

            // fix: 2779855023152128 数据表格数据源为变量时，调用reload会报错
            if (!this._load || typeof this._load !== 'function')
                return;

            return this._load(params, extraParams).then((result) => {
                this.initialLoaded = true;
                const finalResult = {};

                // 判断是否后端数据
                if (getType(result) === 'Object') {
                    if (result.hasOwnProperty('list') && result.hasOwnProperty('total')) {
                        finalResult.data = result.list;
                        finalResult.total = result.total;
                    } else if (result.hasOwnProperty('totalElements') && result.hasOwnProperty('content')) {
                        finalResult.data = result.content;
                        finalResult.total = result.totalElements;
                    } else {
                        finalResult.data = result.data;
                        finalResult.total = result.total;
                    }

                    // 非后端数据
                    if (!finalResult.hasOwnProperty('data') || !finalResult.hasOwnProperty('total')) {
                        this.remote = false;
                    }
                } else if (getType(result) === 'Array') {
                    finalResult.data = result;
                    finalResult.total = result.length;
                    this.remote = false;
                } else {
                    this.remote = false;
                }

                if (!this.remote) {
                    this.remotePaging = false;
                    this.remoteSorting = false;
                    this.remoteFiltering = false;

                    this.data = finalResult.data;
                    this.originTotal = finalResult.total;
                } else {
                    // 后端不分页
                    if (!this.remotePaging || limit === Infinity) {
                        this.data = finalResult.data;
                    } else {
                        for (let i = 0; i < limit; i++) {
                            const item = finalResult.data[i];
                            if (item) {
                                this.data[offset + i] = item;
                            }
                        }
                    }

                    this.originTotal = finalResult.total;
                }

                return this.arrange(this.data);
            });
        },
        loadMore() {
            if (!this.hasMore())
                return Promise.resolve([]);
            else {
                const newPageNumber = this.paging.number + 1;
                return this.load(
                    this.offset + this.limit,
                    undefined,
                    newPageNumber,
                ).then(() => (this.paging.number = newPageNumber));
            }
        },
        reload() {
            // fix: 2779855023152128 数据表格数据源为变量时，调用reload会报错
            if (!this._load || typeof this._load !== 'function')
                return;
            this.clearLocalData();
            this.load();
        },
        page(paging) {
            this.paging = paging;
        },
        sort(sorting) {
            this.sorting = sorting;
            this.queryChanged = true;
        },
        filter(filtering) {
            this.filtering = filtering;
            this.queryChanged = true;
        },
        prepend(item) {
            this.data.unshift(item);
            this.prependedData.unshift(item);
            this.arrange();
        },
        add(item) {
            this.data.push(item);
            this.arrange();
        },
        get() {
            // 获取某一项
        },
        update() {
            // 更新某一项
        },
        remove() {
            // 删除某一项
        },
        save() {
            // 保存
        },
        listToTree(data, options) {
            const { valueField, parentField, childrenField } = options;

            // Map记录一下
            const nodes = {}; // Record<id, { entity }>
            data.forEach((item) => {
                const id = this.$at(item, valueField);
                if (id) {
                    nodes[id] = item;
                }
            });

            const tree = [];
            data.forEach((item) => {
                const parentId = this.$at(item, parentField);
                const parent = nodes[parentId];
                // 没有parentId 或者 parent不存在的不处理
                if (!parentId || !parent) {
                    tree.push(item);
                } else {
                    if (!this.$at(parent, childrenField)) {
                        this.$setAt(parent, childrenField, []);
                    }

                    // fix：2777648120272384 listToTree方法可能多次调用，如果已经存在，不再添加
                    const children = this.$at(parent, childrenField);
                    const hasInChldren = children.some((child) => child === item);

                    !hasInChldren && this.$at(parent, childrenField).push(item);
                }
            });

            return tree;
        },
    },
});

function DataSource(options) {
    const data = {};
    const methods = {};

    Object.keys(options).forEach((key) => {
        const option = options[key];
        if (typeof option === 'function')
            methods['_' + key] = option;
        else
            data[key] = option;
    });

    // if (options.data)
    //     data.data = methods._process ? methods._process(options.data) : Array.from(options.data);

    VueDataSource.call(this, {
        data() {
            return data;
        },
        methods,
    });
}

DataSource.prototype = Object.create(VueDataSource.prototype);
// DataSource.prototype.constructor = DataSource;

export default DataSource;
