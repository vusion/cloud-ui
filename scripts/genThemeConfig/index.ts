import * as fs from 'fs-extra';
import * as path from 'path';
import * as postcss from 'postcss';

const themeComponentsMap: any = {};
const themePropertiesMap: any = {};

const cssContent = fs.readFileSync(path.join(__dirname, '../../src/styles/theme.css'), 'utf-8');
const root = postcss.parse(cssContent);
const _root = root.nodes.find((node) => node.type === 'rule' && node.selector === ':root') as postcss.Rule;

let lastComponent: any;
let lastProp: string;

_root.nodes.forEach((node) => {
    if (node.type === 'comment') {
        if (node.raws.before && node.raws.before.includes('\n')) {
            if (node.text.includes('@component ')) {
                const cap = /@component\s+([\w-]+)(\s+@hidden)?/.exec(node.text.trim());
                const name = cap[1].trim();
                const hidden = !!cap[2];

                if ((!lastComponent || lastComponent.name !== name)) {
                    if (lastComponent) {
                        const {
                            name: componentName,
                            cssProperty
                        } = lastComponent;
                        themeComponentsMap[componentName] = cssProperty;
                    }

                    lastComponent = {
                        name,
                        cssProperty: {}
                    }
                    if (hidden) {
                        lastComponent = undefined;
                    }
                }
            }
        } else if (lastComponent) {
            if (node.text.trim() === '@hidden') { // 不展示此变量
                delete lastComponent.cssProperty[lastProp];
            } else if (node.text.includes('@type ')) { // 变量展示、输入的类型
                const cap = /@type\s+([\w-]+)/.exec(node.text.trim());
                lastComponent.cssProperty[lastProp].type = cap[1].trim();
            } else if (node.text.includes('@desc ')) { // 描述
                const cap = /@desc\s+([\u4e00-\u9fa5|\w|,|\s|：|\#|（|）|(|)|\.|，]+)/.exec(node.text.trim());
                lastComponent.cssProperty[lastProp].desc = cap[1].trim()
            } else if (node.text.includes('@group ')) { // 变量的分组
                const cap = /@group\s+([\S]+)/.exec(node.text.trim());
                lastComponent.cssProperty[lastProp].group = cap[1].trim();
            } else if (node.text.includes('@prefix ')) { // 变量前缀，方便让子组件去除变量前缀
                const cap = /@prefix\s+([\S]+)/.exec(node.text.trim());
                lastComponent.cssProperty[lastProp].prefix = cap[1].trim();
            } else if (node.text.includes('@depAttrs ')) { // 此变量依赖的属性
                const cap = /@depAttrs\s+(.*)/.exec(node.text.trim());
                lastComponent.cssProperty[lastProp].depAttrs = JSON.parse(cap[1] || '{}');
            } else if (node.text.includes('@excludeElTags ')) {  // 排除elTag
                const cap = /@excludeElTags\s+([\S]+)/.exec(node.text.trim());
                lastComponent.cssProperty[lastProp].excludeElTags = cap[1].trim().split(',');
            } else if (node.text.includes('@excludeTags ')) { // 排除组件
                const cap = /@excludeTags\s+([\S]+)/.exec(node.text.trim());
                lastComponent.cssProperty[lastProp].excludeTags = cap[1].trim().split(',');
            } else if (node.text.includes('@title ')) {
                const cap = /@title\s+([\S]+)/.exec(node.text.trim());
                lastComponent.cssProperty[lastProp].title = cap[1].trim();
            } else if (node.text.includes('@depParentAttrs ')) { // 此变量依赖的父组件属性
                const cap = /@depParentAttrs\s+(.*)/.exec(node.text.trim());
                lastComponent.cssProperty[lastProp].depParentAttrs = JSON.parse(cap[1] || '{}');
            } else if (node.text.includes('@depStaticStyles ')) { // 此变量依赖的静态样式属性
                const cap = /@depStaticStyles\s+(.*)/.exec(node.text.trim());
                lastComponent.cssProperty[lastProp].depStaticStyles = JSON.parse(cap[1] || '[]');
            }
        }
    } else if (node.type === 'decl') {
        themePropertiesMap[node.prop] = node.value;
        if (!lastComponent)
            return;
        lastComponent.cssProperty[node.prop] = {
            type: 'input'
        }
        lastProp = node.prop;
    }
});
if (lastComponent) {
    const {
        name: componentName,
        cssProperty
    } = lastComponent;
    themeComponentsMap[componentName] = cssProperty;
}

const resultPath = path.join(__dirname, './result.json');
const resultList = fs.readJSONSync(resultPath);

if(Array.isArray(resultList)) {
    resultList.forEach((result) => {
        const { toPosition, items } = result || {};
        if(toPosition === 'highLevelSetting') {
            if(Array.isArray(items)) {
                items.forEach((item) => {
                    const { name } = item || {};
                    const cssProperty = themeComponentsMap[name];
                    if(cssProperty) {
                        item.cssProperty = cssProperty;
                    }
                });
            }
        }
    })
}

fs.writeJsonSync(resultPath, resultList, {
    spaces: 4
});

const propertyPath = path.join(__dirname, './property.json');
fs.writeJsonSync(propertyPath, themePropertiesMap, {
    spaces: 4
});
