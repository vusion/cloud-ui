import * as fs from 'fs';
import * as path from 'path';
import * as postcss from 'postcss';

export interface ThemeVariables {
    [name: string]: string,
};

export interface ThemeProperty {
    type: 'input' | 'color';
    default: string;
};

export interface ThemeComponent {
    name: string;
    title?: string;
    properties: {
        [name: string]: ThemeProperty,
    };    
}

const themeComponents: Array<ThemeComponent> = [];

const cssContent = fs.readFileSync(path.join(__dirname, '../../src/styles/theme.css'), 'utf-8');
const root = postcss.parse(cssContent);
const _root = root.nodes.find((node) => node.type === 'rule' && node.selector === ':root') as postcss.Rule;

let lastComponent: ThemeComponent;
let lastProp: string;
_root.nodes.forEach((node) => {
    if (node.type === 'comment' && (node.raws.before && node.raws.before.includes('\n')) && node.text.includes('@component ')) {
        const cap = /@component\s+([\w-]+)(\s+@hidden)?/.exec(node.text.trim());
        const name = cap[1].trim();
        const hidden = !!cap[2];

        if ((!lastComponent || lastComponent.name !== name)) {
            if (hidden) {
                return lastComponent = undefined;
            }

            lastComponent && themeComponents.push(lastComponent);
            lastComponent = {
                name,
                properties: {}
            }
        }
    } else if (node.type === 'comment' && (!node.raws.before || !node.raws.before.includes('\n')) && node.text.trim() === '@hidden') {
        delete lastComponent.properties[lastProp];
    } else if (node.type === 'decl') {
        if (!lastComponent)
            return;
        lastComponent.properties[node.prop] = {
            type: 'input',
            default: node.value,
        };
        lastProp = node.prop;
    }
});
lastComponent && themeComponents.push(lastComponent);

const result = JSON.stringify(themeComponents, null, 4)
    .replace(/\{\n\s+"type": "(.+?)",\s+"default": "(.+?)"\s+}/g, `{ "type": "$1", "default": "$2" }`);
fs.writeFileSync(path.join(__dirname, './result.json'), result, 'utf8');
