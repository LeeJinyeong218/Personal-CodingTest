const input = require('fs').readFileSync('dev/stdin').toString().trim().split("\n");

const [n, k] = input[0].trim().split(" ").map(Number);
const arr = input[1].trim().split(" ").map(Number);

let start = null;
let end = null;
let count = 0;

for (let i = 0; i < n; i++) {
    if (start === null && arr[i] === 1) start = i;

    if (arr[i] === 1) count++;
    if (count === k) {
        end = i;
        break;
    }
}

if (start === null || end === null) console.log(-1);
else {
    let min = end - start + 1;

    while (start < n) {
        start++;
        while (start < n && arr[start] !== 1) {
            start++;
        }

        end++;
        while (end < n && arr[end] !== 1) {
            end++;
        }

        if (end >= n) break;

        min = Math.min(min, end - start + 1);
    }

    console.log(min);
}