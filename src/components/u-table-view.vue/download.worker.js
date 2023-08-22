importScripts('https://cdn.sheetjs.com/xlsx-0.17.2/package/dist/xlsx.full.min.js');

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
    const { excelData, titles, isEnd, isStart } = e.data;
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
