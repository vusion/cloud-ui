export default {
    props: {
        parentField: String,
        childrenField: { type: String, default: 'children' },
        valueField: { type: String, default: 'value' },
    },
    methods: {
        listToTree(data) {
            const { valueField, parentField, childrenField } = this;

            // 避免引用关系导致数据错误
            data = data.map((item) => Object.assign({}, item));

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

                    this.$at(parent, childrenField).push(item);
                }
            });

            return tree;
        },
    },
};
