const input = require('fs').readFileSync('dev/stdin').toString().trim().split("\n");

const n = +(input[0].trim());
const nums = input[1].trim().split(" ").map(Number);

let count = Array(n).fill(-1);
count[0] = 1;

for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
        if (nums[i] > nums[j]) {
            count[i] = Math.max(count[i], count[j] + 1);
        }
    }
    if (count[i] === -1) {
        count[i] = 1;
    }
}

console.log(Math.max(...count));