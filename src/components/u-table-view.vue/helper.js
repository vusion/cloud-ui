import Color from './Color';

export const createTableHeaderExportHelper = (rowCount) => {
    const emptyPlaceholder = {};
    let headContents = Array.from({ length: rowCount }, () => []);

    let rowIndex = 0;
    let colIndex = 0;
    let ejectFlag = false;

    return {
        setCell,
        eject,
    };

    function setCell(content, isCurrentRowEnd = false, rowSpan = 1, colSpan = 1) {
        if (ejectFlag) { return; }
        headContents[rowIndex][colIndex] = content;
        for (let i = 0; i < rowSpan; ++i) {
            for (let j = 0; j < colSpan; ++j) {
                const rIdx = rowIndex + i;
                const cIdx = colIndex + j;
                if (i === 0 && j === 0) {
                    headContents[rIdx][cIdx] = content;
                } else {
                    headContents[rIdx][cIdx] = emptyPlaceholder;
                }
            }
        }

        // move rowIndex and colIndex to the right place
        let searchColStart = isCurrentRowEnd ? 0 : colIndex + colSpan;
        const searchRowStart = isCurrentRowEnd ? rowIndex + 1 : rowIndex;
        while (headContents[searchRowStart] && headContents[searchRowStart][searchColStart] === emptyPlaceholder)
            searchColStart++;

        const cols = Array.from({ length: colSpan }, (_, i) => i + colIndex);

        colIndex = searchColStart;
        rowIndex = searchRowStart;

        return cols;
    }

    function eject() {
        ejectFlag = true;

        const matrix = headContents.map((arr) =>
            arr.map((v) => (v === emptyPlaceholder ? null : v)),
        );
        headContents = null;

        return matrix;
    }
};

const removeUnit = (value, unit) => value.replace(unit, '');
const toUpperCase = (str) => str.charAt(0).toUpperCase() + str.slice(1);
/**
 * 获取单元格样式
 * @param {*} elNode
 * @returns
 */
export const getXslxStyle = (elNode) => {
    const nodeComputedStyle = window.getComputedStyle(elNode);
    const wrapText = nodeComputedStyle.textWrap === 'wrap';
    let bgColor = Color.str2Color(nodeComputedStyle.backgroundColor);
    bgColor = removeUnit(bgColor.toARGBHEX(), '#');
    let color = Color.str2Color(nodeComputedStyle.color);
    color = removeUnit(color.toARGBHEX(), '#');
    let fontSize = removeUnit(nodeComputedStyle.fontSize, 'px');
    if (elNode.nodeName === 'TH') {
        // th上可能加style，而title上有自己的样式，需要合并
        const titleNode = elNode.querySelector('[class^="u-table-view_column-title__"]');
        if (titleNode) {
            const titleComputedStyle = window.getComputedStyle(titleNode);
            color = Color.str2Color(titleComputedStyle.color);
            color = removeUnit(color.toARGBHEX(), '#');
            fontSize = removeUnit(titleComputedStyle.fontSize, 'px');
        }
    } else if (elNode.nodeName === 'TD') {
        // 背景色在第一层的linear-layout上
        const childNode = elNode.children[0];
        if (childNode && childNode.className && childNode.className.startsWith('u-linear-layout__')) {
            const childComputedStyle = window.getComputedStyle(childNode);
            let childColor = Color.str2Color(childComputedStyle.color);
            childColor = removeUnit(childColor.toARGBHEX(), '#');
            let childBgColor = Color.str2Color(childComputedStyle.backgroundColor);
            childBgColor = removeUnit(childBgColor.toARGBHEX(), '#');
            if (childBgColor !== '00000000') {
                bgColor = childBgColor;
            }
            if (childColor !== '00000000') {
                color = childColor;
            }
        }
    }
    const border = {};
    const borders = ['top', 'right', 'bottom', 'left'];
    borders.forEach((borderName) => {
        const borderStyle = nodeComputedStyle[`border${toUpperCase(borderName)}Style`];
        if (borderStyle !== 'none') {
            border[borderName] = {
                style: borderStyle === 'solid' ? 'thin' : borderStyle,
                color: {
                    rgb: removeUnit(Color.str2Color(nodeComputedStyle[`border${toUpperCase(borderName)}Color`]).toARGBHEX(), '#'),
                },
            };
        }
    });
    if (nodeComputedStyle.boxShadow) {
        let color = nodeComputedStyle.boxShadow.match(/(\((.+?)\))/g);
        if (color && color.length > 0) {
            color = Color.str2Color(`rgb${color[0]}`);
            borders.forEach((borderName) => {
                border[borderName] = {
                    style: 'thin',
                    color: {
                        rgb: removeUnit(color.toARGBHEX(), '#'),
                    },
                };
            });
        }
    }
    const s = {
        font: {
            sz: fontSize,
            color: {
                rgb: color === '00000000' ? '' : color,
            },
        },
        fill: {
            fgColor: {
                rgb: bgColor === '00000000' ? '' : bgColor,
            },
        },
        alignment: {
            horizontal: nodeComputedStyle.textAlign === 'start' ? 'left' : nodeComputedStyle.textAlign,
            vertical: 'center',
            wrapText,
        },
    };
    if (Object.keys(border).length !== 0) {
        s.border = border;
    }
    const rect = {
        width: removeUnit(nodeComputedStyle.width, 'px'),
        height: removeUnit(nodeComputedStyle.height, 'px'),
    };
    return {
        s,
        rect,
    };
};
