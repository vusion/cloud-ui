const fs = require('fs-extra');
const path = require('path');
const unified = require('unified')
const remarkParse = require('remark-parse');
const template = require('./template');
const { ignoredFiles } = require('./config');

const componentsPath = path.resolve(__dirname, '../../src/components')

// 遍历每个 xxx 目录
const dirs = fs.readdirSync(componentsPath);
dirs.filter(compName => fs.statSync(`src/components/${compName}`).isDirectory())
.forEach((compName) => {
    const docsDir = path.join(componentsPath, compName, 'docs');
    if (!fs.existsSync(docsDir)) return

    const demosDir = path.join(componentsPath, compName, '__tests__', '__demos__');
    const testFile = path.join(componentsPath, compName, '__tests__', 'demo.test.js');
    // 清空并重建 demo 文件夹
    fs.removeSync(demosDir)
    fs.mkdirSync(demosDir, { recursive: true });

    let count = 1
    const cases = []

    // 遍历 docs 目录下的 .md 文件
    const files = fs.readdirSync(docsDir);
    files.forEach((file) => {
        if (!['examples.md', 'cases.md', 'blocks.md'].includes(file)) {
            return;
        }

        const filePath = path.join(docsDir, file);

        // 排除忽略文件
        for (const ignoredFile of ignoredFiles) {
            if (filePath.includes(ignoredFile)) return
        }

        const content = fs.readFileSync(filePath, 'utf-8');
        const ast = unified()
            .use(remarkParse)
            .parse(content);

        // 提取标题和代码块
        let lastHeading = ''
        for (const node of ast.children) {
            if (node.type === 'heading' && node.children[0]) {
                lastHeading = node.children[0].value
            } else if (node.type === 'code' && ['html', 'vue'].includes(node.lang)) {
                const vueFilePath = path.join(demosDir, `demo${count}.vue`)
                const code = template.demoFile(node, lastHeading)
                fs.writeFileSync(vueFilePath, code);
                cases.push({
                    title: lastHeading,
                    order: count,
                })
                count++
            }
        }
    });

    const testFileContent = template.testFile(compName, cases)
    if (fs.existsSync(testFile)) {
        fs.unlinkSync(testFile)
    }
    if (testFileContent) {
        fs.writeFileSync(testFile, testFileContent)
    }
    console.log(`✅ 已自动生成 ${compName} 组件快照用例`)
});