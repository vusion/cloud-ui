import XLSX from'./xlsx.full.min.js';

function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i != s.length; ++i)
        view[i] = s.charCodeAt(i) & 0xff;
    return buf;
}

function generateData(excelData, titles) {
    const dataCount = excelData.length;
    const header = titles;
    const _temp = header.reduce((acc, curr) => ((acc[curr] = ''), acc), {});
    let _tempStr = '';
    for (let i = 0; i < dataCount; i++) {
        header.forEach((h) => {
            _temp[h] = excelData[i][h];
        });
        _tempStr += ',' + JSON.stringify(_temp);
    }
    return _tempStr;
}

const encoder = new TextEncoder();
let controllerStream;
const readableStream = new ReadableStream({
    start(controller) {
        controllerStream = controller;
    },
});


onmessage = (e) => {
    const { excelData, titles, isEnd, isStart, size } = e.data;
    let newData = generateData(excelData, titles);
    if (isStart) {
        newData = '[' + newData.substring(1);
    }
    controllerStream.enqueue(encoder.encode(newData));
    if (isEnd) {
        controllerStream.enqueue(encoder.encode(']'));
        controllerStream.close();
        Promise.resolve(readableStream)
            .then((stream) => new Response(stream))
            .then((response) => response.json())
            .then((json) => {
                const ws = XLSX.utils.json_to_sheet(json, titles);
                if(size <= 60000) {
                    Object.keys(ws).forEach((item) => {
                        const cell = ws[item];
                        const dateRegx = /^\d{4}-\d{2}-\d{2}$/;
                        const percentRegx = /^\d+(\.\d+)?%$/ ;
                        const excludeNumberRegx = /^0\d+$/;
                        const value = cell.v;
                        let template;
                        if (cell.t === 's' && value !=='%' && percentRegx.test(value)) {
                            // 根据小数位数转化为'0.00%'格式，比如一位小数就是'0.0%'
                            if (value.indexOf('.') > -1) {
                                const percentLength = value.split('.')[1].length;
                                template = '0.'+new Array(percentLength-1).fill(0).join('')+'%';
                            } else {
                                template = '0%'
                            }
                            cell.z = template;
                            cell.t = 'n';
                            cell.v = Number(value.substring(0, value.length - 1)) / 100;
                        } else if (!isNaN(Number(value)) && value.length <= 15) {
                            // 0开头的数字字符串，比如'001234'，不会被转化为数字
                            if (excludeNumberRegx.test(value)) return;
                            if (value.indexOf('.') > -1) {
                                const percentLength = value.split('.')[1].length ;
                                template = '0.'+new Array(percentLength).fill(0).join('');
                            } else {
                                template = '0'
                            }
                            cell.z = template;
                            cell.t = 'n';
                        } else if (dateRegx.test(value)) {
                            cell.t = 'd';
                        }
                    });
                }
                const wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
                const str = XLSX.write(wb, {
                    bookType: 'xlsx',
                    bookSST: false,
                    type: 'binary',
                });
                const blob = new Blob([s2ab(str)], {
                    type: 'application/octet-stream',
                });
                const url = URL.createObjectURL(blob);
                postMessage(url);
            });
    }
};
