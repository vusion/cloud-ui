import XLSX from 'xlsx';

export function exportExcel(sheetData, sheetName, fileName) {
    const sheet = XLSX.utils.json_to_sheet(sheetData)
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