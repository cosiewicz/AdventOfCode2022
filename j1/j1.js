let res = 0;
let best = [-1, -1, -1];
require('fs').readFileSync('file_j1.txt', 'utf-8').split(/\r?\n/).forEach(function (line) {
    const value = parseInt(line);
    if (value) {
        res = res + value;
    } else {
        let index = best.indexOf(Math.min(...best));
        if (res > best[index]) {
            best[index] = res;
        }
        res = 0;
    }
    console.log(best[0] + best[1] + best[2]);
})

