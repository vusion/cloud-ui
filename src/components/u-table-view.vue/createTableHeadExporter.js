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
