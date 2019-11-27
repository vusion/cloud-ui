const fs = require('fs');
const path = require('path');
const walkSync = function (dirinput, iterator) {
    const dirs = [dirinput];

    while (dirs.length) {
        const dir = dirs.shift();
        const files = fs.readdirSync(dir);
        files.forEach((file) => {
            const f = path.join(dir, file);
            const stat = fs.statSync(f);
            if (stat && stat.isDirectory()) {
                dirs.push(f);
            }
            if (stat) {
                iterator(dir, file, stat);
            }
        });
    }
};
module.exports = {
    walkSync,
};
