const fs = require('fs')

const rules = {A: {X: 'D', Y: 'W', Z: 'L'}, B: {X: 'L', Y: 'D', Z: 'W'}, C: {X: 'W', Y: 'L', Z: 'D'}};
const points = {W: 6, D: 3, L: 0};
const values = {A: 1, B: 2, C: 3, X: 1, Y: 2, Z: 3};
const action = {X: 'L', Y: 'D', Z: 'W'}
let result = 0;
let result2 = 0;

const exo2 = () => {
    const data = fs.readFileSync('file.txt', 'UTF-8');
    const lines = data.split(/\n/);

    lines.forEach(line => {
        result += points[rules[line[0]][line[2]]] + values[line[2]];
        result2 += points[action[line[2]]] + values[getKeyByValue(rules[line[0]], action[line[2]])]
    })
    console.log(result);
    console.log(result2);
}

function getKeyByValue(object, value) {
    return Object.keys(object)[Object.values(object).indexOf(value)]
}

exo2();