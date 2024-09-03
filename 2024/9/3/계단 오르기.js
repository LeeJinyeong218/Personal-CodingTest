const input = require('fs').readFileSync("dev/stdin").toString().trim()
.split("\n").map(Number);

const n = input[0];
const stairs = input.slice(1);

let arr = new Array(n + 1).fill([]);

// 앞에 하나를 밟았을 때, 밟지 않았을 때
arr[0] = [0, 0];
arr[1] = [0, stairs[0]];
arr[2] = [arr[1][1] + stairs[1], stairs[1]];

for (let i = 3; i <= n; i++) {
    arr[i] = [arr[i - 1][1] + stairs[i - 1], Math.max(...arr[i - 2]) + stairs[i - 1]];
}

console.log(Math.max(...arr[n]));