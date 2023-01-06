const components = require('./config');
const path = require('path');
const fs = require('fs-extra');
const map = [];
const getUsage = require('vusion/lib/lcap');
const root = path.join(__dirname, '../../src/components');
const defaultTheme = require('../genThemeConfig/property.json');
const themeConfig = require('../genThemeConfig/result.json');

components.forEach((component) => {
    if (component.show) {
        const targetFile = path.join(root, component.name + '.vue');
        map.push(getUsage(targetFile));
    }
});
const packageJSON = require('../../package.json');
const libInfo = `${packageJSON.name}@${packageJSON.version}`;
Object.values(map).forEach((item) => {
    let screenShot = JSON.parse(item.screenShot);
    screenShot = screenShot
        .filter((screen) => !screen.includes('.DS_Store'))
        .map((screen) => `https://static-vusion.163yun.com/packages/${libInfo}/src/components/${item.symbol}.vue/screenshots/${screen}`);
    item.jsonSchema.screenShot = item.screenShot = screenShot.join(',');
});

Object.values(map).forEach((item) => {
    let drawings = JSON.parse(item.jsonSchema.drawings);
    drawings = drawings
        .filter((screen) => !screen.includes('.DS_Store'))
        .map((screen) => `https://static-vusion.163yun.com/packages/${libInfo}/src/components/${item.symbol}.vue/drawings/${screen}`);
    item.jsonSchema.drawings = drawings.join(',');
});

// 晚点可以去掉，以文件形式获取，不走资产中心了
fs.writeFileSync(path.join(__dirname, './usage.json'), JSON.stringify(map, null, 4));

fs.writeFileSync(path.join(__dirname, '../../dist-theme/usage.json'), JSON.stringify(map, null, 4));
const theme = {
    defaultTheme: JSON.stringify(defaultTheme),
    themeConfig: JSON.stringify(themeConfig),
};
fs.writeFileSync(path.join(__dirname, '../../dist-theme/theme.json'), JSON.stringify(theme, null, 4));
