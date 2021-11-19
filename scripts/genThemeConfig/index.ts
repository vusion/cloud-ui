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
    title: string;
    properties: {
        [name: string]: ThemeProperty,
    };    
}

const themeComponents: Array<ThemeComponent> = [];

const cssContent = fs.readFileSync(path.join(__dirname, '../../src/styles/theme.css'), 'utf-8');
const root = postcss.parse(cssContent);
const _root = root.nodes.find((node) => node.type === 'rule' && node.selector === ':root');


console.log(root.nodes.length);
