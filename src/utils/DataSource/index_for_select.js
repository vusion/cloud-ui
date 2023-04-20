import get from 'lodash/get';

const log = (...args) => {
    console.log('datasource', ...args);
};

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
                    const sourceValue = get(obj, key);
                    const targetValue = expression;
                    return targetValue.includes(sourceValue);
                }
                expression = {
                    operator: expression[0],
                    value: expression[1],
                };
            }

            let sourceValue = get(obj, key);
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

class DataSource {
    constructor(options) {
        this.data = []; // 本地数据
        this.total = 0;

        this.loading = true;
        this.remote = false;

        this.paging = undefined;
        this.sorting = undefined;
        this.filtering = undefined;

        this.list = []; // 展示结果

        this._init(options);
    }

    get offset() {
        return this.paging ? (this.paging?.number - 1) * this.paging?.size : 0;
    }

    get limit() {
        return this.paging ? this.paging.size : Infinity;
    }

    get totalPage() {
        if (!this.paging)
            return 1;

        const totalPage = Math.ceil(this.total / this.paging.size);
        return totalPage;
    }

    get viewData() {
        return this.list;
    }

    _init(options = {}) {
        const { data, ...rest } = options;
        Object.keys(rest).forEach((key) => {
            const option = rest[key];
            if (typeof option === 'function')
                this['_' + key] = option;
            else
                this[key] = option;
        });

        // 初始化时根据传入参数 是否有load
        this.remote = !!options.load;

        if (!this.remote) {
            this.data = data;
            this.total = data.length;
            this.loading = false;

            this.list = this.load();
        }
    }

    _process(data) {
        return data;
    }

    hasMore() {
        if (!this.paging)
            return false;

        return this.paging?.number < this.totalPage;
    }

    page(paging) {
        this.paging = paging;
    }

    filter(filtering) {
        this.filtering = filtering;

        if (this.paging) {
            this.paging.number = 1;
        }
    }

    sort(sorting) {
        this.sorting = sorting;

        if (this.paging) {
            this.paging.number = 1;
        }
    }

    // 查数据
    query(page = this.paging?.number || 1) {
        let start = 0;
        let end;
        if (this.paging) {
            start = (page - 1) * this.limit;
            end = start + this.limit;
        }

        if (!this.remote) {
            const list = this.localSearch();
            return Promise.resolve(this.paging ? list.slice(start, end) : list);
        }

        // 远端
        const params = Object.assign({}, this._getExtraParams());

        if (this.paging) {
            const paging = {
                ...(this.paging || {}),
                offset: start,
                limit: this.limit,
                number: page,
            };

            params.paging = paging;

            // 支持 JDL
            params.page = paging.number;
            params.start = paging.offset;
            params.size = paging.size;
        }

        if (this.sorting && this.sorting.field) {
            params.sorting = this.sorting;
            params.sort = params.sorting.field;
            params.order = params.sorting.order;
        }

        return this._load(params).then((result) => {
            this.loading = false;
            this.remote = false;

            const finalResult = {};
            // 支持 JDL
            if (Object.prototype.toString.call(result).slice(8, -1) === 'Object') {
                if (result.hasOwnProperty('list') && result.hasOwnProperty('total')) {
                    result.data = result.list;
                } else if (
                    result.hasOwnProperty('totalElements')
          && result.hasOwnProperty('content')
                ) {
                    result.data = result.content;
                    result.total = result.totalElements;
                }

                // 最终格式
                finalResult.data = result.data;
                finalResult.total = result.total;

                // 带有data和total的result就默认是远端数据
                if (
                    finalResult.hasOwnProperty('data')
          && finalResult.hasOwnProperty('total')
                ) {
                    this.remote = true;
                }
            } else if (
                Object.prototype.toString.call(result).slice(8, -1) === 'Array'
            ) {
                finalResult.data = this._process(result);
                finalResult.total = result?.length;
            }

            // 直接挂到data， ps：本地搜索时才会用到this.data
            this.data = finalResult.data;
            this.total = finalResult.total;

            return this.remote ? finalResult.data : finalResult.data.slice(start, end);
        });
    }

    // 加载某页
    async load(page) {
        log('load');
        try {
            const data = await this.query(page);
            log('list', data);
            this.list = data;
        } catch (error) {
            console.log(error);
        }
    }

    async loadMore() {
        log('loadMore');
        if (!this.hasMore()) {
            return;
        }

        const page = this.paging.number + 1;
        const data = await this.query(page);

        this.paging.number = page;

        // 下一页的数据怎么处理
        for (let i = 0; i < this.limit; i++) {
            const item = data[i];
            if (item) {
                this.list[this.offset + i] = item;
            }
        }
    }

    async gotoPage(page) {
        if (page < 1 || page > this.totalPage) {
            return;
        }

        const data = await this.query(page);
        this.paging.number = page;
        this.list = data;
    }

    localSearch() {
        let data = Array.from(this.data);
        // 筛选
        const filtering = this.filtering;
        if (filtering && Object.keys(filtering).length)
            data = data.filter((item) => solveCondition(filtering, item));

        // 排序
        const sorting = this.sorting;
        if (sorting && sorting.field) {
            const field = sorting.field;
            const orderSign = sorting.order === 'asc' ? 1 : -1;
            if (sorting.compare)
                data.sort((item1, item2) =>
                    sorting.compare(item1[field], item2[field], orderSign),
                );
            else
                data.sort((item1, item2) =>
                    this.defaultCompare(item1[field], item2[field], orderSign),
                );
        }

        return data;
    }
}

export default DataSource;
