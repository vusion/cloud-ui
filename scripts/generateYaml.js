const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const YAML = require('yaml');
const { walkSync } = require('./utils');

function compareHeader(a, b) {
    return parseInt(a[a.length - 1]) - parseInt(b[b.length - 1]);
}
class ComponentMeta {
    constructor({
        name, optionParser, dataParser, attrParser, computedParser, evtParser, slotsParser, methodsParser, ariaParser,
    }) {
        this.optionParser = optionParser;
        this.dataParser = dataParser;
        this.attrParser = attrParser;
        this.computedParser = computedParser;
        this.evtParser = evtParser;
        this.slotsParser = slotsParser;
        this.methodsParser = methodsParser;
        this.ariaParser = ariaParser;
        this.name = name;
    }

    toYaml() {
        const obj = {
            name: this.name,
            ...this.optionParser.toYamlObject(),
            ...this.dataParser.toYamlObject(),
            ...this.attrParser.toYamlObject(),
            ...this.computedParser.toYamlObject(),
            ...this.slotsParser.toYamlObject(),
            ...this.evtParser.toYamlObject(),
            ...this.methodsParser.toYamlObject(),
            ...this.ariaParser.toYamlObject(),
        };

        Object.keys(obj).forEach((key) => {
            const item = obj[key];
            if (Array.isArray(item) && !item.length)
                delete obj[key];
        });

        return obj;
    }
}

const iterator = function (dir, file, stat) {
    if (dir.includes('chart.vue'))
        return;

    const fullPath = `${dir}/${file}`;
    if (/\.vue\/.+?\.vue\//.test(dir))
        return;

    if (/\.vue\/README\.md$/.test(fullPath) || /\.vue\/docs\/api\.md$/.test(fullPath)) {
        const markdown = new MarkdownIt({
            html: true,
            langPrefix: 'lang-',
        });

        const content = fs.readFileSync(fullPath, { encoding: 'utf8' });
        try {
            const tokens = markdown.parse(content);
            const metas = parseToken(tokens, dir, file);

            if (metas.length > 0)
                fs.writeFileSync(
                    path.resolve(dir.replace(/\/docs$/, ''), 'api.yaml'),
                    YAML.stringify(metas.map((m) => m.toYaml())));
        } catch (err) {
            console.error(fullPath);
            console.error(err);
        }
    }
};

const camelToDash = (s) =>
    s.replace(/\.?([A-Z])/g, (x, y) => '-' + y.toLowerCase()).replace(/^-/, '');
const resolveName = function (name, dir, file) {
    if (name === 'API') {
        let p = dir;
        while (!/\.vue/.test(path.basename(p))) {
            p = path.dirname(p);
        }
        return path.basename(p, '.vue');
    } else {
        return `${camelToDash(name.split(' ')[0])}`;
    }
};

const resolveType = function (type) {
    // console.log(type)
    return `${`${type}`.replace(/([Bb]oolean)|([Ss]tring)|([Nn]umber)|([Oo]bject)|([Aa]ny)/g, (replace) => replace.toLowerCase())}`.replace(/\\/g, '');
};
const parseToken = function (tokens, dir) {
    let idx = 0;
    const l = tokens.length;

    const components = [];
    do {
        if (tokens[idx] && tokens[idx].type === 'heading_open' && tokens[idx].tag === 'h2') {
            const optionParser = new OptionBlockParser();
            const dataParser = new DataBlockParser();
            const attrParser = new AttrBlockParser();
            const computedParser = new ComputedBlockParser();
            const evtParser = new EventsParser();
            const slotsParser = new SlotsBlockParser();
            const methodsParser = new MethodsBlockParser();
            const ariaParser = new ARIABlockParser();
            idx++;
            let name = tokens[idx].content;
            if (/[\u4e00-\u9fa5]/.test(name))
                continue;
            let flag = true;
            do {
                if (tokens[idx] && tokens[idx].type === 'heading_open') {
                    if (compareHeader(tokens[idx].tag, 'h2') <= 0)
                        break;
                    else {
                        idx++;
                        const f = idx;
                        idx = optionParser.parse(tokens, idx);
                        idx = dataParser.parse(tokens, idx);
                        idx = attrParser.parse(tokens, idx);
                        idx = computedParser.parse(tokens, idx);
                        idx = evtParser.parse(tokens, idx);
                        idx = slotsParser.parse(tokens, idx);
                        idx = methodsParser.parse(tokens, idx);
                        idx = ariaParser.parse(tokens, idx);
                        if (f === idx) {
                            flag = false;
                            break;
                        }
                    }
                } else {
                    idx++;
                }
            } while (idx < l);
            if (flag) {
                name = resolveName(name, dir);
                components.push(new ComponentMeta({
                    name, optionParser, dataParser, attrParser, computedParser, evtParser, slotsParser, methodsParser, ariaParser,
                }));
            }
        } else {
            idx++;
        }
    } while (idx < l);

    return components;
};

class MethodsBlockParser {
    constructor() {
        this.title = 'methods';
        this.methods = [];
    }

    parse(tokens, idx) {
        if (tokens[idx] && tokens[idx].type === 'inline' && /methods/.test(tokens[idx].content.toLowerCase())) {
            const l = tokens.length;
            const htag = tokens[idx - 1].tag;
            let curTable = null;
            do {
                if (tokens[idx].type === 'paragraph_open') {
                    idx++;
                    this.methods[this.methods.length - 1].description = tokens[idx].content;
                    idx++;
                } else if (tokens[idx].type === 'table_open') {
                    idx = curTable.parse(tokens, idx);
                } else if (tokens[idx].type === 'heading_open') {
                    if (compareHeader(tokens[idx].tag, htag) <= 0)
                        break;
                    else {
                        idx++;
                        const name = tokens[idx].content;
                        curTable = new TableParser();
                        this.methods.push({
                            name,
                            table: curTable,
                        });
                    }
                } else {
                    idx++;
                }
            } while (idx < l);
        }
        return idx;
    }

    toYamlObject() {
        return {
            methods: this.methods.map(({ name, description, table }) => ({
                name,
                description,
                params: table.toYamlObject(),
            })),
        };
    }
}

class SlotsBlockParser {
    constructor() {
        this.title = 'slots';
        this.slots = [];
    }

    parse(tokens, idx) {
        if (tokens[idx] && tokens[idx].type === 'inline' && /slots/.test(tokens[idx].content.toLowerCase())) {
            const l = tokens.length;
            const htag = tokens[idx - 1].tag;
            do {
                if (tokens[idx].type === 'paragraph_open') {
                    idx++;
                    if (this.slots.length > 0) {
                        this.slots[this.slots.length - 1].description = tokens[idx].content;
                        idx++;
                    }
                } else if (tokens[idx].type === 'heading_open') {
                    if (compareHeader(tokens[idx].tag, htag) <= 0)
                        break;
                    else {
                        idx++;
                        let name = tokens[idx].content;
                        if (name === '(default)')
                            name = 'default';

                        this.slots.push({
                            name,
                        });
                        idx++;
                    }
                } if (tokens[idx].type === 'table_open') {
                    const parser = new TableParser();
                    idx = parser.parse(tokens, idx);
                    this.slots[this.slots.length - 1].table = parser;
                } else {
                    idx++;
                }
            } while (idx < l);
        }
        return idx;
    }

    toYamlObject() {
        return {
            slots: this.slots.map((slot) => {
                if (slot.table) {
                    slot.props = slot.table.toYamlObject();
                    delete slot.table;
                }

                return slot;
            }),
        };
    }
}

class OptionBlockParser {
    constructor() {
        this.table = null;
        this.title = 'options';
    }

    parse(tokens, idx) {
        if (tokens[idx] && tokens[idx].type === 'inline' && /options/.test(tokens[idx].content.toLowerCase())) {
            const l = tokens.length;
            do {
                if (tokens[idx].type === 'table_open') {
                    const parser = new TableParser();
                    idx = parser.parse(tokens, idx);
                    this.table = parser;
                } else if (tokens[idx].type === 'heading_open') {
                    break;
                } else {
                    idx++;
                }
            } while (idx < l);
        }
        return idx;
    }

    toYamlObject() {
        if (!this.table)
            return { options: [] };
        return {
            options: this.table.toYamlObject(),
        };
    }
}

class DataBlockParser {
    constructor() {
        this.table = null;
        this.title = 'data';
    }

    parse(tokens, idx) {
        if (tokens[idx] && tokens[idx].type === 'inline' && /data/.test(tokens[idx].content.toLowerCase())) {
            const l = tokens.length;
            do {
                if (tokens[idx].type === 'table_open') {
                    const parser = new TableParser();
                    idx = parser.parse(tokens, idx);
                    this.table = parser;
                } else if (tokens[idx].type === 'heading_open') {
                    break;
                } else {
                    idx++;
                }
            } while (idx < l);
        }
        return idx;
    }

    toYamlObject() {
        if (!this.table)
            return { data: [] };
        return {
            data: this.table.toYamlObject(),
        };
    }
}

class AttrBlockParser {
    constructor() {
        this.table = null;
        this.title = 'attrs';
    }

    parse(tokens, idx) {
        if (tokens[idx] && tokens[idx].type === 'inline' && /attrs/.test(tokens[idx].content.toLowerCase())) {
            const l = tokens.length;
            do {
                if (tokens[idx].type === 'table_open') {
                    const parser = new TableParser();
                    idx = parser.parse(tokens, idx);
                    this.table = parser;
                } else if (tokens[idx].type === 'heading_open') {
                    break;
                } else {
                    idx++;
                }
            } while (idx < l);
        }
        return idx;
    }

    toYamlObject() {
        if (!this.table)
            return { attrs: [] };
        return {
            attrs: this.table.toYamlObject(),
        };
    }
}

class ComputedBlockParser {
    constructor() {
        this.table = null;
        this.title = 'computed';
    }

    parse(tokens, idx) {
        if (tokens[idx] && tokens[idx].type === 'inline' && /computed/.test(tokens[idx].content.toLowerCase())) {
            const l = tokens.length;
            do {
                if (tokens[idx].type === 'table_open') {
                    const parser = new TableParser();
                    idx = parser.parse(tokens, idx);
                    this.table = parser;
                } else if (tokens[idx].type === 'heading_open') {
                    break;
                } else {
                    idx++;
                }
            } while (idx < l);
        }
        return idx;
    }

    toYamlObject() {
        if (!this.table)
            return { computed: [] };
        return {
            computed: this.table.toYamlObject(),
        };
    }
}

class EventsParser {
    constructor() {
        this.title = 'events';
        this.events = [];
    }

    parse(tokens, idx) {
        if (tokens[idx] && tokens[idx].type === 'inline' && /events/.test(tokens[idx].content.toLowerCase())) {
            const l = tokens.length;
            const htag = tokens[idx - 1].tag;
            let curTable = null;
            do {
                if (tokens[idx].type === 'paragraph_open') {
                    idx++;
                    this.events[this.events.length - 1].description = tokens[idx].content;
                    idx++;
                } else if (tokens[idx].type === 'table_open') {
                    idx = curTable.parse(tokens, idx);
                } else if (tokens[idx].type === 'heading_open') {
                    if (compareHeader(tokens[idx].tag, htag) <= 0)
                        break;
                    else {
                        idx++;
                        const evtName = tokens[idx].content.replace(/^@/, '');
                        curTable = new TableParser();
                        this.events.push({
                            evtName,
                            table: curTable,
                        });
                    }
                } else {
                    idx++;
                }
            } while (idx < l);
        }
        return idx;
    }

    toYamlObject() {
        const p = {
            events: this.events.map(({ evtName, description, table }) => ({
                name: evtName,
                description,
                params: table.toYamlObject(),
            })),
        };
        return p;
    }
}

class ARIABlockParser {
    constructor() {
        this.table = null;
        this.title = 'aria';
    }

    parse(tokens, idx) {
        if (tokens[idx] && tokens[idx].type === 'inline' && /aria and keyboard/.test(tokens[idx].content.toLowerCase())) {
            const l = tokens.length;
            do {
                if (tokens[idx].type === 'table_open') {
                    const parser = new TableParser();
                    idx = parser.parse(tokens, idx);
                    this.table = parser;
                } else if (tokens[idx].type === 'heading_open') {
                    break;
                } else {
                    idx++;
                }
            } while (idx < l);
        }
        return idx;
    }

    toYamlObject() {
        if (!this.table)
            return { aria: [] };
        return {
            aria: this.table.toYamlObject(),
        };
    }
}

class TableParser {
    constructor() {
        this.keys = [];
        this.values = [];
    }

    parseInlineTh(tokens, idx) {
        if (tokens[idx].type === 'inline') {
            this.keys.push(tokens[idx].content);
            idx++;
        }
        return idx;
    }

    parseInlineTd(tokens, idx) {
        if (tokens[idx].type === 'inline') {
            this.values.push(tokens[idx].content);
            idx++;
        }
        return idx;
    }

    parseTh(tokens, idx) {
        if (tokens[idx].type === 'th_open') {
            idx++;
            idx = this.parseInlineTh(tokens, idx);
        }
        if (tokens[idx].type === 'th_close') {
            idx++;
            if (tokens[idx].type === 'th_open') {
                idx = this.parseTh(tokens, idx);
            }
        }
        return idx;
    }

    parseTd(tokens, idx) {
        if (tokens[idx].type === 'td_open') {
            idx++;
            idx = this.parseInlineTd(tokens, idx);
        }
        if (tokens[idx].type === 'td_close') {
            idx++;
            if (tokens[idx].type === 'td_open') {
                idx = this.parseTd(tokens, idx);
            }
        }
        return idx;
    }

    parseTr(tokens, idx) {
        if (tokens[idx].type === 'tr_open') {
            idx++;
            idx = this.parseTh(tokens, idx);
            idx = this.parseTd(tokens, idx);
        }
        if (tokens[idx].type === 'tr_close') {
            idx++;
            if (tokens[idx].type === 'tr_open') {
                idx = this.parseTr(tokens, idx);
            }
        }
        return idx;
    }

    parseThead(tokens, idx) {
        if (tokens[idx].type === 'thead_open') {
            idx++;
            idx = this.parseTr(tokens, idx);
        }
        if (tokens[idx].type === 'thead_close') {
            idx++;
        }
        return idx;
    }

    parseTbody(tokens, idx) {
        if (tokens[idx].type === 'tbody_open') {
            idx++;
            idx = this.parseTr(tokens, idx);
        }
        if (tokens[idx].type === 'tbody_close') {
            idx++;
        }
        return idx;
    }

    parse(tokens, idx) {
        if (tokens[idx].type === 'table_open') {
            idx++;
            idx = this.parseThead(tokens, idx);
            idx = this.parseTbody(tokens, idx);
        }
        if (tokens[idx].type === 'table_close') {
            idx++;
        }
        return idx;
    }

    toYamlObject() {
        const rslt = [];
        const mapping = {
            Option: 'name',
            Data: 'name',
            'Prop/Attr': 'name',
            Type: 'type',
            Default: 'default',
            Description: 'description',
            'Attr/Prop': 'name',
            Param: 'name',
            Key: 'key',
            Computed: 'name',
        };
        for (let i = 0; i < this.values.length; i += this.keys.length) {
            const obj = {};
            this.keys.forEach((k, j) => {
                const v = this.values[i + j];
                if (k.toLowerCase() === 'type') {
                    obj[mapping[k] || k] = resolveType(v);
                } else if (k.toLowerCase() === 'default') {
                    try {
                        // eslint-disable-next-line
                        obj[mapping[k] || k] = eval(eval(v));
                    } catch (e) {
                        try {
                            // eslint-disable-next-line
                            obj[mapping[k] || k] = eval(v);
                        } catch (err) {
                            obj[mapping[k] || k] = v;
                        }
                    }
                } else {
                    obj[mapping[k] || k] = v;
                }
            });
            rslt.push(obj);
        }
        return rslt;
    }
}

// parseTable(tokens, 0)

/**
 * parseToken2
 * @param {*} curr token
 * @param {*} next token
 */

if (process.argv.length > 2) {
    const arr = process.argv.slice(2);
    iterator(arr[0], arr[1]);
} else {
    walkSync(path.resolve(__dirname, '../src/components'), iterator);
}
