// yaml 转 excel
const path = require('path');
const fs = require('fs');
const glob = require('glob');
const yamljs = require('yaml');
const xlsx = require('node-xlsx');

// 当前命令所在目录
const cwd = process.cwd();

const files = glob.sync(path.join(cwd, './src/components/*/api.yaml'));

// 读取所有的api.yaml文件来获取组件的属性
const jsonList = [];
// 获取所有有title的属性
const allAttrMap = {};
files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf-8');
    yamljs.parse(content).forEach((json) => {
        const { attrs } = json;
        jsonList.push(json);
        attrs && attrs.forEach((attr) => {
            const { title, description } = attr;
            if (title) {
                allAttrMap[`${title}_${description}`] = {
                    title,
                    description,
                };
            }
        });
    });
});

const data = [];

const titleArr = jsonList.map((json) => {
    const { title, name } = json;
    return title || name;
});
data.push(['属性名称', '当前释义', ...titleArr]);

for (const key in allAttrMap) {
    const { title, description } = allAttrMap[key];
    data.push([title, description]);
}

jsonList.forEach(({ attrs }, index) => {
    const attrsMap = {};
    attrs && attrs.forEach(({ title, description }) => {
        if (title) {
            attrsMap[`${title}_${description}`] = true;
        }
    });
    data.forEach((arr) => {
        const title = arr[0];
        const description = arr[1];
        if (attrsMap[`${title}_${description}`]) {
            // 前面2列是title和description
            arr[index + 2] = title;
        }
    });
});

const buffer = xlsx.build([{ name: '组件属性释义', data }]);
fs.writeFileSync('./src/assets/组件属性释义.xlsx', buffer, { flag: 'w' });
