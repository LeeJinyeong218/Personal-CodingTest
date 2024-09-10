const input = require('fs').readFileSync('dev/stdin').toString().trim().split("\n");

const [n, d, k, c] = input[0].trim().split(" ").map(Number);
const arr = input.slice(1).map(i => +i.trim());

let check = Array(d + 1).fill(0);
check[c]++;
let cnt = 1;

for (let i = 0; i < k; i++) {
    if (check[arr[i]] === 0) cnt++;
    check[arr[i]]++;
}

let max = cnt;

for (let i = 0; i < n - 1; i++) {
    check[arr[i]]--;
    if (check[arr[i]] === 0) cnt--;

    const endIdx = i < n - k ? i + k : i + k - n;
    if (check[arr[endIdx]] === 0) cnt++;
    check[arr[endIdx]]++;

    max = Math.max(max, cnt);
}

console.log(max);