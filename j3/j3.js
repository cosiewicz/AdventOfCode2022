const fs = require('fs')

let result1 = 0;
let result2 = 0;
let inc = 4;
let exo2Str = []
const exo3 = () => {
    const data = fs.readFileSync('file.txt', 'UTF-8');
    const lines = data.split(/\n/);

    lines.forEach(line => {
        result1 += transformLetterToNum(findSameLetter(cutHalfString(line)));

        if (inc % 3 === 0) {
            exo2Str.push(line)
            result2 += transformLetterToNum(findSameLetterPart2(exo2Str));
            exo2Str = [];
        } else {
            exo2Str.push(line)
        }
        inc++;

    })

    console.log(result1);
    console.log(result2);
}

function transformLetterToNum(letter) {
    let val = 0;
    if (letter.toUpperCase() === letter) {
        val = letter.charCodeAt(0) - 38;
    } else {
        val = letter.charCodeAt(0) - 96;
    }
    return val;
}

function findSameLetter(strings) {
    const str1 = strings[0];
    const str2 = strings[1];

    for (let i = 0; i < strings[0].length; i++) {
        if (str2.indexOf(str1[i]) !== -1) {
            return str1[i];
        }
    }
}

function cutHalfString(str) {
    return [str.slice(0, str.length / 2), str.slice(str.length / 2)];
}

function findSameLetterPart2(strings) {
    const str1 = strings[0];
    const str2 = strings[1];
    const str3 = strings[2];
    for (let i = 0; i < strings[0].length; i++) {
        if (str2.indexOf(str1[i]) !== -1 && str3.indexOf(str1[i]) !== -1) {
            return str1[i];
        }
    }
}

exo3();