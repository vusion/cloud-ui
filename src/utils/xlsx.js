import XLSX from 'xlsx';

export function exportExcel(sheetData, sheetName, fileName, sheetTitle, columns, hasHeader) {
    // 若有标题，添加标题到第一行
    const sheet = XLSX.utils.json_to_sheet([]);
    if (sheetTitle) {
        const endCell = XLSX.utils.encode_col(columns - 1) + 1;
        XLSX.utils.sheet_add_aoa(sheet, [[sheetTitle]], {origin: {r:0, c:0}});
        sheet["!merges"] = [XLSX.utils.decode_range(`A1:${endCell}`)];
        XLSX.utils.sheet_add_json(sheet, sheetData, {origin: -1, skipHeader: !hasHeader});
    } else {
        XLSX.utils.sheet_add_json(sheet, sheetData, { skipHeader: !hasHeader});
    }
    // 将文本格式的内容，转化为日期和数字格式
    Object.keys(sheet).forEach((item) => {
        const cell = sheet[item];
        // console.log('cell', cell);
        const dateRegx = /^\d{4}-\d{2}-\d{2}$/;
        const value = cell.v;
        if (cell.t === 's' && value.indexOf('%') > -1) {
            cell.z = '0.00%';
            cell.t = 'n';
            cell.v = Number(value.substring(0, value.length - 1)) / 100;
        } else if (!isNaN(Number(value)) && value.length <= 15) {
            cell.t = 'n';
            cell.z = '0';
        } else if (dateRegx.test(value)) {
            cell.t = 'd';
        }
    });
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, sheet, sheetName)
    const workbookBlob = workbook2blob(wb)
    openDownload(workbookBlob, `${fileName}.xlsx`);
}
function openDownload(blob, fileName) {
    if (typeof blob === 'object' && blob instanceof Blob) {
        blob = URL.createObjectURL(blob);
    }
    const aLink = document.createElement('a')
    aLink.href = blob
    aLink.download = fileName || ''
    const event = new MouseEvent('click')
    aLink.dispatchEvent(event)
}
function workbook2blob(workbook) {
    const wopts = {
        bookType: 'xlsx',
        bookSST: false,
        type: 'binary',
    }
    const wbout = XLSX.write(workbook, wopts)

    // 将字符串转ArrayBuffer
    function s2ab(s) {
        const buf = new ArrayBuffer(s.length)
        const view = new Uint8Array(buf)
        for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff
        return buf
    }

    const blob = new Blob([s2ab(wbout)], {
        type: 'application/octet-stream',
    })
    return blob
}
