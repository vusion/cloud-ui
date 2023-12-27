// 废弃

const { camelCase } = require('lodash');
const path = require('path');
const fs = require('fs');

const lang = 'ja';

const targetDir = path.resolve(__dirname, '../../src/components');
const targetFile = path.resolve(__dirname, `../../src/mixins/i18n/lang/${lang}.js`);

const json = {};

// 遍历targeyDir下的所有第一级目录
fs.readdirSync(targetDir).forEach((file) => {
    const filePath = path.resolve(targetDir, file);

    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
        const name = file.replace(/\.vue$/g, '');
        // 判断当前目录下是否存在i18n目录
        const i18nDir = path.resolve(filePath, 'i18n');

        if (fs.existsSync(i18nDir)) {
            const stats = fs.statSync(i18nDir);
            if (stats.isDirectory()) {
                // 读取i18n目录下的zh-CN.json
                const zhCNPath = path.resolve(i18nDir, `${lang}.json`);

                if (fs.existsSync(zhCNPath)) {
                    // 使用同步读取，因为需要在后面的代码中使用zhCNPath
                    const zhCN = fs.readFileSync(zhCNPath, 'utf8');

                    // 将zh-CN.json转换成对象
                    const zhCNObj = JSON.parse(zhCN);

                    // 遍历zhCNObj，将key值转换成驼峰命名
                    Object.keys(zhCNObj).forEach((key) => {
                        const newKey = `${camelCase(name)}_${key}`;
                        json[newKey] = zhCNObj[key];
                    });
                }
            }
        }
    }
});

// targetFile写入json
fs.writeFileSync(
    targetFile,
    `/* eslint-disable camelcase */
export default ${JSON.stringify(json, null, 4)}`,
);
