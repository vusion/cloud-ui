// excel 转 yaml
const path = require('path');
const fs = require('fs');
const yamljs = require('yaml');
const xlsx = require('node-xlsx');

// 当前命令所在目录
const cwd = process.cwd();

const { data } = xlsx.parse(fs.readFileSync(path.resolve(cwd, 'src/assets/【操作引导】.xlsx')))[5];

// 组件名
let arr = data[2].filter((title, index) => index > 4).map((title) => ({
    title,
}));

// 去掉前面7行，剩下都是属性
const list = data.filter((item, index) => index > 6);

arr = arr.map((item, index) => ({
    ...item,
    attrs: list.map((item) => {
        let newDescription = item[4];
        switch (newDescription) {
            case '不改':
            case '不存在':
                newDescription = item[2];
                break;
            case '无释义':
                newDescription = '';
                break;
        }
        return {
            title: item[index + 5],
            description: item[2],
            newTitle: item[3] || item[index + 5], // 新的title没有值，则沿用老的title
            newDescription,
        };
    }).filter((item) => !!item.title),
}));

const files = [
    'u-router-view.vue',
    'u-iframe.vue',
    'u-linear-layout.vue',
    'u-grid-layout.vue',
    'u-grid-layout.vue',
    'u-crumb.vue',
    'u-panel.vue',
    'u-collapse.vue',
    'u-card.vue',
    'u-text.vue',
    'u-link.vue',
    'u-button.vue',
    'i-ico.vue',
    'u-label.vue',
    'u-badge.vue',
    'u-carousel.vue',
    'u-info-list.vue',
    'u-info-list.vue',
    'u-image.vue',
    'u-table-view.vue',
    'u-list-view.vue',
    'u-grid-view.vue',
    'u-calendar-view.vue',
    'u-form.vue',
    'u-input.vue',
    'u-number-input.vue',
    'u-textarea.vue',
    'u-radios.vue',
    'u-switch.vue',
    'u-checkboxes.vue',
    'u-capsules.vue',
    'u-select.vue',
    'u-rate.vue',
    'u-combo-slider.vue',
    'u-uploader.vue',
    'u-tabs.vue',
    'u-selectable-steps.vue',
    'u-pagination.vue',
    'u-cascade-select.vue',
    'u-region-select.vue',
    'u-tree-view.vue',
    'u-transfer.vue',
    'u-date-picker.vue',
    'u-time-picker.vue',
    'u-date-time-picker.vue',
    'u-linear-progress.vue',
    'u-circular-progress.vue',
    'u-popup.vue',
    'u-modal.vue',
    'e-watermark.vue',
    'u-copy.vue',
    'u-taskbox.vue',
].map((component) => path.resolve(cwd, 'src/components', component, 'api.yaml'));

const yamlMap = {};
const componentMap = {};
// 读取所有的api.yaml文件来获取组件的属性
files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf-8');
    const jsonAttr = yamljs.parse(content);
    yamlMap[file] = jsonAttr;
    jsonAttr.forEach((json) => {
        const { title } = json;
        componentMap[title] = json;
    });
});

arr.forEach((item) => {
    const { title, attrs } = item;
    if (attrs.length) {
        const json = componentMap[title];
        if (json && json.attrs && !!json.attrs.length) {
            const attrMap = {};
            json.attrs.forEach((attr) => {
                const { title } = attr;
                attrMap[title] = attr;
            });
            attrs.forEach((attr) => {
                const { title, newTitle, newDescription } = attr;
                if (attrMap[title]) {
                    Object.assign(attrMap[title], {
                        title: newTitle,
                        description: newDescription,
                    });
                }
            });
        }
    }
});

for (const file in yamlMap) {
    const jsonAttr = yamlMap[file];
    const yamlString = yamljs.stringify(jsonAttr, 4);
    fs.writeFileSync(file, yamlString, 'utf-8');
}
